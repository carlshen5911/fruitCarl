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
 * fruit-boom
 */
var Boom = (function (_super) {
    __extends(Boom, _super);
    function Boom() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("boom_png");
        _this.setSize();
        return _this;
    }
    Boom.prototype.addFailed = function () { };
    /**
     * 重寫切開後的動作
     */
    Boom.prototype.cutFruit = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cutFruit, this);
        this.cutIndex = true;
        var gameContainer = GameContainer.getInstance();
        gameContainer.time.stop();
        gameContainer.parent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, gameContainer.collideDetection, gameContainer);
        var boomEffect = new BoomEffect(this);
        boomEffect.x = this.x - 33;
        boomEffect.y = this.y - 34;
        GameContainer.getInstance().addChild(boomEffect);
        GameContainer.getInstance().addChild(this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.freeFalling, this);
    };
    return Boom;
}(BaseFruit));
__reflect(Boom.prototype, "Boom");
