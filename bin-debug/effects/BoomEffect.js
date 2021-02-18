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
 *爆炸發光特效
 */
var BoomEffect = (function (_super) {
    __extends(BoomEffect, _super);
    function BoomEffect(fruitObj) {
        var _this = _super.call(this) || this;
        _this.lightNum = 8; //光線數量
        _this.lightRotation = []; //光線的角度
        _this.lightRotationOrder = []; //光線出現的順序
        _this.index = 0;
        _this.lightArray = [];
        _this.fruitObj = fruitObj;
        _this.init();
        _this.getLightRotation();
        _this.getOrder();
        _this.addBoomSound();
        _this.addLight();
        _this.addWiteBg();
        return _this;
    }
    /**
     * 初始化
     */
    BoomEffect.prototype.init = function () {
        this.width = 1280;
        this.height = 960;
        this.anchorOffsetX = 640;
        this.anchorOffsetY = 480;
    };
    /**
     * 隨機獲取爆炸光線的角度
     */
    BoomEffect.prototype.getLightRotation = function () {
        var lightGap = 360 / this.lightNum;
        for (var i = 0; i < this.lightNum; i++) {
            this.lightRotation.push(Math.random() * lightGap * 0.5 + lightGap * 0.25 + lightGap * i);
        }
    };
    /**
     * 添加爆炸音效
     */
    BoomEffect.prototype.addBoomSound = function () {
        var soundBoom = RES.getRes("boom_mp3");
        var channelBoom = soundBoom.play(0, 1);
    };
    /**
     * 隨機設置爆炸光線出現的先後順序
     */
    BoomEffect.prototype.getOrder = function () {
        var lightRotationCopy = [];
        for (var i = 0; i < this.lightNum; i++) {
            lightRotationCopy.push(this.lightRotation[i]);
        }
        for (var i = 8; i > 0; i--) {
            var order = Math.floor(Math.random() * i);
            lightRotationCopy.push(lightRotationCopy[order]);
            lightRotationCopy.splice(order, 1); //splice從數組中刪除元素，並在必要時在其位置插入新元素，並返回已刪除的元素
        }
    };
    /**
     * 將爆炸光線添加到舞台
     */
    BoomEffect.prototype.addLight = function () {
        if (this.timer) {
            egret.clearTimeout(this.timer);
        }
        if (this.index < this.lightNum) {
            var boomLight = this.createLight();
            boomLight.rotation = this.lightRotationOrder[this.index++];
            this.lightArray.push(boomLight);
            this.addChild(boomLight);
            this.timer = egret.setTimeout(this.addLight, this, 200);
        }
    };
    /**
     * 用Shape畫梯形模擬爆炸光線
     */
    BoomEffect.prototype.createLight = function () {
        var boomLight = new egret.Shape();
        boomLight.graphics.beginFill(0xffffc9, 1);
        boomLight.graphics.moveTo(0, 17);
        boomLight.graphics.lineTo(640, 0);
        boomLight.graphics.lineTo(640, 40);
        boomLight.graphics.lineTo(0, 23);
        boomLight.graphics.endFill();
        boomLight.anchorOffsetX = 0;
        boomLight.anchorOffsetY = 20;
        boomLight.x = 640;
        boomLight.y = 480;
        return boomLight;
    };
    /**
     * 爆炸光線出現完畢後的閃光效果(屏幕全白閃一下)
     */
    BoomEffect.prototype.addWiteBg = function () {
        var witeBg = new egret.Shape();
        witeBg.graphics.beginFill(0xffffff, 1);
        witeBg.graphics.drawRect(0, 0, 640, 480);
        witeBg.graphics.endFill();
        egret.setTimeout(function () {
            this.stage.addChild(witeBg);
            var tw_witeBg = egret.Tween.get(witeBg).to({ alpha: 0 }, 3000).call(function () {
                this.stage.removeChild(witeBg);
                Observer.getInstance().fire(Commands.GAME_OVER);
            });
            for (var i = 0; i < this.lightNum; i++) {
                this.removeChild(this.lightArray[i]);
            }
            GameContainer.getInstance().removeChild(this.fruitObj);
        }, this, (this.lightNum) * 200);
    };
    return BoomEffect;
}(egret.DisplayObjectContainer));
__reflect(BoomEffect.prototype, "BoomEffect");
