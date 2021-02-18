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
 * 水果基類
 */
var BaseFruit = (function (_super) {
    __extends(BaseFruit, _super);
    function BaseFruit() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /**
     * 初始化水果的基本屬性，添加時間和動畫
     */
    BaseFruit.prototype.init = function () {
        this.img = new egret.Bitmap();
        this.img_part1 = new egret.Bitmap();
        this.addChild(this.img);
        this.accelerateX = 0;
        this.accelerateY = 700;
        this.accelerateRotate = 0;
        this.speedX = (Math.random() - 0.5) * 180;
        this.speedY = -700;
        this.speedRotate = (Math.random() - 0.5) * 360;
        this.x = this.initX = Math.random() * 400 + 180;
        this.y = this.initY = 530;
        this.addEventListener(egret.Event.ENTER_FRAME, this.freeFalling, this);
        this.beginTime = egret.getTimer();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cutFruit, this);
        this.cutIndex = false;
    };
    /**
     * 自由落體位置計算
     * @param evt
     */
    BaseFruit.prototype.freeFalling = function (evt) {
        var now = (egret.getTimer() - this.beginTime) / 1000;
        this.x = this.initX + now * this.speedX;
        this.y = this.speedY * now + 0.5 * this.accelerateY * now * now + this.initY;
        this.img.rotation = now * this.speedRotate;
        if (this.y > 530 && !this.cutIndex) {
            this.addFailed();
            this.cutIndex = true;
        }
    };
    /**
     * 設置水果的屬性
     */
    BaseFruit.prototype.setSize = function () {
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
        this.img_part1.anchorOffsetX = this.img.width / 2;
        this.img_part1.anchorOffsetY = this.img.height / 2;
        this.img_part2.anchorOffsetX = this.img.width / 2;
        this.img_part2.anchorOffsetY = this.img.height / 2;
    };
    //切開水果後的動作
    BaseFruit.prototype.cutFruit = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cutFruit, this);
        this.cutIndex = true;
        /**切開水果的刀光動畫 */
        this.splitEffect();
        /**添加音效 */
        this.addCutSound();
        /**水果一分為二 */
        this.cutEffect();
        /**果汁濺射動畫 */
        this.splashEffectFun();
        /**遊戲邏輯，分數加1 */
        this.addScore();
    };
    BaseFruit.prototype.splitEffect = function () {
        this.splitBitmap.texture = RES.getRes("flash_png");
        this.splitBitmap.anchorOffsetX = this.splitBitmap.width / 2;
        this.splitBitmap.anchorOffsetY = this.splitBitmap.height / 2;
        this.splitBitmap.x = this.img.x;
        this.splitBitmap.y = this.img.y;
        this.splitBitmap.scaleX = 0.8;
        this.splitBitmap.scaleY = 0.8;
        this.splitBitmap.alpha = 0;
        this.addChild(this.splitBitmap);
        egret.Tween.get(this.splitBitmap).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).call(function () {
            this.removeChild(this.splitBitmap);
        }, this);
    };
    /**
     * 添加音效
     */
    BaseFruit.prototype.addCutSound = function () {
        var soundCut = RES.getRes("splatter_mps");
        var channelCut = soundCut.play(0, 1);
    };
    /**
     * 水果一分為二
     */
    BaseFruit.prototype.cutEffect = function () {
        this.removeChild(this.img);
        this.addChild(this.img_part1);
        this.addChild(this.img_part2);
        this.addEventListener(egret.Event.ENTER_FRAME, this.cutFreeFalling, this);
    };
    /**
     * 果汁濺射動畫
     */
    BaseFruit.prototype.splashEffectFun = function () {
        if (this.splashColor) {
            this.splashEffect = new this.splashEffect(this.splashColor);
            var initX = this.splashEffect.x = this.x - 35;
            var initY = this.splashEffect.y = this.y - 35;
            this.parent.addChild(this.splashEffect);
            egret.setTimeout(function () {
                this.parent.removeChild(this.splashEffect);
            }, this, 400);
        }
    };
    /**
     * 被切開的水果的位置
     */
    BaseFruit.prototype.cutFreeFalling = function () {
        this.img_part1.x -= 2;
        this.img_part2.x += 2;
        this.img_part1.rotation -= 2;
        this.img_part2.rotation += 2;
    };
    /**
     * 積分
     */
    BaseFruit.prototype.addScore = function () {
        Observer.getInstance().fire(Commands.ADD_SCORE);
    };
    /**
     * 結束
     */
    BaseFruit.prototype.addFailed = function () {
        var self = this;
        var loseLogo = new egret.Bitmap();
        loseLogo.texture = RES.getRes('lose_png');
        loseLogo.anchorOffsetX = loseLogo.width / 2;
        loseLogo.anchorOffsetY = loseLogo.height / 2;
        loseLogo.scaleX = 0;
        loseLogo.scaleY = 0;
        loseLogo.x = this.x - this.width / 2;
        loseLogo.y = 430;
        this.parent.addChild(loseLogo);
        var tw_loseLogo = egret.Tween.get(loseLogo).to({ scaleX: 1.1, scaleY: 1.1 }, 600, egret.Ease.backOut).wait(600).call(function () {
            self.parent.removeChild(loseLogo);
        });
        Observer.getInstance().fire(Commands.ADD_FAILED);
    };
    return BaseFruit;
}(egret.DisplayObjectContainer));
__reflect(BaseFruit.prototype, "BaseFruit");
