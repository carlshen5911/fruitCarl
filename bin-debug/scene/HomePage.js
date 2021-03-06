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
 * 主界面
 */
var FruitHomePage = (function (_super) {
    __extends(FruitHomePage, _super);
    function FruitHomePage() {
        var _this = _super.call(this) || this;
        _this.skinName = "ersource/eui_skins/eui/HomePage.exml";
        _this.init();
        return _this;
    }
    /**
     * 初始化
     */
    FruitHomePage.prototype.init = function () {
        //添加初始動畫
        this.addEffects();
        //添加事件
        this.addEvents();
        //添加背景音樂
        this.addBgSound();
    };
    /**
     * 添加初始動畫
     */
    FruitHomePage.prototype.addEffects = function () {
        // 动画时间
        var duration_headerBg = 700;
        var duration_headerTitle = 1000;
        var duration_headerTip = 200;
        var duration_content = 300;
        // 添加动画
        // headerEffect
        var tw_headerBgtween = egret.Tween.get(this.headerBg).to({ y: 0 }, duration_headerBg, egret.Ease.circOut);
        var tw_headerTitle = egret.Tween.get(this.headerTitle).to({ y: 0 }, duration_headerBg, egret.Ease.circOut);
        egret.setTimeout(function () {
            var tw_headerSubTitle = egret.Tween.get(this.headerSubTitle).to({ y: 40 }, duration_headerTitle, egret.Ease.elasticOut);
        }, this, duration_headerBg);
        egret.setTimeout(function () {
            var tw_headerTip = egret.Tween.get(this.headerTip).to({ x: 0, y: 127 }, duration_headerTip, egret.Ease.circOut);
        }, this, duration_headerBg + duration_headerTitle - duration_headerTip);
        // contentEffect
        egret.setTimeout(function () {
            var tw_ringDojo = egret.Tween.get(this.ringDojo).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
            var tw_contentDojo = egret.Tween.get(this.contentDojo).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
            var tw_contentNewGame = egret.Tween.get(this.contentNewGame).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
            var tw_ringNewGame = egret.Tween.get(this.ringNewGame).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
            var tw_contentQuit = egret.Tween.get(this.contentQuit).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
            var tw_ringQuit = egret.Tween.get(this.ringQuit).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
            var tw_contentTip = egret.Tween.get(this.contentTip).to({ scaleX: 1, scaleY: 1 }, duration_content, egret.Ease.circOut);
        }, this, duration_headerBg + duration_headerTitle);
        // newEffect
        egret.setTimeout(function () {
            Effects.floatUpdown(this.contentTip, 500, true);
            Effects.rotate(this.ringDojo, 32000, true, false);
            Effects.rotate(this.contentDojo, 24000, true, false);
            Effects.rotate(this.ringNewGame, 30000, true, false);
            Effects.rotate(this.contentNewGame, 15000, true, false);
            Effects.rotate(this.ringQuit, 20000, true, true);
            this.sparkle = new Sparkle(30);
            this.sparkle.x = this.contentQuit.x - this.contentQuit.width / 2 + 5;
            this.sparkle.y = this.contentQuit.y - this.contentQuit.height / 2 + 5;
            this.addChild(this.sparkle);
        }, this, duration_headerBg + duration_headerTitle + duration_content);
    };
    /**
     * 添加觸摸事件
     */
    FruitHomePage.prototype.addEvents = function () {
        this.contentNewGame.touchEnabled = true;
        this.contentNewGame.once(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.OPEN_NEWGAME);
        }, this);
        this.contentDojo.touchEnabled = true;
        this.contentDojo.once(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.OPEN_JODO);
        }, this);
        this.contentQuit.touchEnabled = true;
        this.contentQuit.once(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.OPEN_QUIT);
        }, this);
    };
    /**
     * 添加背景音樂
     */
    FruitHomePage.prototype.addBgSound = function () {
        var soundBg = RES.getRes("menu_mp3");
        this.channelBg = soundBg.play(0, 0);
    };
    /**
     * 單例模式取單例
     */
    FruitHomePage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitHomePage();
        }
        return this._instance;
    };
    /**
     * 銷毀單例
     */
    FruitHomePage.destroyInstance = function () {
        this._instance = undefined;
    };
    return FruitHomePage;
}(eui.Component));
__reflect(FruitHomePage.prototype, "FruitHomePage");
