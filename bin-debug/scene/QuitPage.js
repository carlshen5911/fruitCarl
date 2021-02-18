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
 * QUIT界面
 */
var FruitQuitPage = (function (_super) {
    __extends(FruitQuitPage, _super);
    function FruitQuitPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/QuitPage.exml";
        _this.init();
        return _this;
    }
    FruitQuitPage.prototype.init = function () {
        //添加初始動畫
        this.addEffects();
        this.addEvents();
    };
    //添加初始動畫
    FruitQuitPage.prototype.addEffects = function () {
        var duration_quit = 700;
        var tw_quitInfo = egret.Tween.get(this.quitInfo).to({ scaleX: 1, scaleY: 1 }, duration_quit, egret.Ease.backOut);
    };
    FruitQuitPage.prototype.addEvents = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_QUIT);
        }, this);
    };
    FruitQuitPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitQuitPage();
        }
        return this._instance;
    };
    FruitQuitPage.destroyInstance = function () {
        this._instance = undefined;
    };
    return FruitQuitPage;
}(eui.Component));
__reflect(FruitQuitPage.prototype, "FruitQuitPage");
