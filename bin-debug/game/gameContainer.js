var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 遊戲邏輯
 */
var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        var _this = _super.call(this) || this;
        _this.prePointX = -1;
        _this.prePointY = -1;
        _this.init();
        return _this;
    }
    //初始化
    GameContainer.prototype.init = function () {
        //拋水果
        this.timer = new egret.Timer(2100, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.popupFruit, this);
        this.timer.start();
        //設置觸摸事件
        egret.setTimeout(function () {
            this.parent.touchEnabled = true;
            this.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.collideDetction, this);
            this.parent.addEventListener(egret.TouchEvent.TOUCH_END, this.moveEnd, this);
        }, this, 2100);
    };
    /**
     * 拋水果
     */
    GameContainer.prototype.popupFruit = function () {
        this.fruitNum = Math.ceil(Math.random() * 3); //ceil 返回大於或等於其數字參數的最小整數，random返回介於0和1之間的偽隨機數。
        this.fruitArray = [];
        var fruitClassName = [ClassName.APPLE, ClassName.BANANA, ClassName.BASAHA, ClassName.PEACH, ClassName.SANDIA, ClassName.BOOM];
        for (var i = 0; i < this.fruitNum; i++) {
            var fruitIns = fruitClassName[Math.floor(Math.random() * 6)](); //floor返回小於或等於其數字參數的最大整數
            this.fruitArray.push(fruitIns);
            this.addChild(fruitIns);
        }
    };
    GameContainer.prototype.moveEnd = function () {
        this.prePointX = -1;
        this.prePointY = -1;
    };
    /**
     * 碰撞檢測並添加刀痕
     * @param evt
     */
    GameContainer.prototype.collideDetction = function (evt) {
        for (var i = 0; i < this.fruitNum; i++) {
            if (!this.fruitArray[i].cutIndex) {
                var isCollid = this.fruitArray[i].hitTextPoint(evt.stageX, evt.stageY, this);
                if (isCollid) {
                    this.fruitArray[i].cutFruit();
                    this.setSplitRotation(evt.stageX, evt.stageY, this.fruitArray[i]);
                }
            }
        }
        this.prePointX = evt.stageX;
        this.prePointY = evt.stageY;
    };
    /**
     * 設置水果切開時閃光的方向
     * @param curX
     * @param curY
     * @param fruit
     */
    GameContainer.prototype.setSplitRotation = function (curX, curY, fruit) {
        if (!fruit.splitBitmap) {
            return;
        }
        if (this.prePointX == -1) {
            fruit.splitBitmap.rotation = 0;
        }
        else if (this.prePointX == curX) {
            fruit.splitBitmap.rotation = 90;
        }
        else {
            fruit.splitBitmap.rotation = Math.atan((curY - this.prePointY) / (curY - this.prePointX)) * 57.3;
        }
        fruit.img_part1.rotation = fruit.img_part2.rotation += 180 * fruit.rotationIndex;
    };
    GameContainer.getInstance = function () {
        if (this._instance == undefined) {
            this._instance = new GameContainer();
        }
        return this._instance;
    };
    GameContainer.destroyInstance = function () {
        this._instance = undefined;
    };
    return GameContainer;
}(egret.DisplayObjectContainer));
__reflect(GameContainer.prototype, "GameContainer");
