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
 * JODO界面
 */
var FruitJodoPage = (function (_super) {
    __extends(FruitJodoPage, _super);
    function FruitJodoPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/JodoPage.exml";
        _this.init();
        return _this;
    }
    FruitJodoPage.prototype.init = function () {
        //添加初始動畫
        this.addEffects();
        this.addEvents();
    };
    //添加初始動畫
    FruitJodoPage.prototype.addEffects = function () {
        var duration_jodo = 700;
        var tw_jodoInfo = egret.Tween.get(this.jodoInfo).to({ scaleX: 1, scaleY: 1 }, duration_jodo, egret.Ease.backOut);
    };
    FruitJodoPage.prototype.addEvents = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_JODO);
        }, this);
    };
    FruitJodoPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitJodoPage();
        }
        return this._instance;
    };
    FruitJodoPage.destroyInstance = function () {
        this._instance = undefined;
    };
    return FruitJodoPage;
}(eui.Component));
__reflect(FruitJodoPage.prototype, "FruitJodoPage");
