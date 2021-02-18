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
 * 遊戲界面
 */
var FruitNewGamePage = (function (_super) {
    __extends(FruitNewGamePage, _super);
    function FruitNewGamePage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/NewGamePage.exml";
        _this.init();
        return _this;
    }
    FruitNewGamePage.prototype.init = function () {
        //添加初始動畫
        this.addEffects();
        //添加開始遊戲音效
        this.addStarSound();
        //初始化數據
        this.scoreCount = this.failedCount = 0;
        //添加遊戲容器
        this.gameContainer = GameContainer.getInstance();
        this.gameContainer.width = this.width;
        this.gameContainer.height = this.height;
        this.addChild(this.gameContainer);
    };
    //添加初始動畫
    FruitNewGamePage.prototype.addEffects = function () {
        var duration_game = 700;
        var tw_gameX = egret.Tween.get(this.gameX).to({ x: 545 }, duration_game, egret.Ease.backOut);
        var tw_gameXX = egret.Tween.get(this.gameXX).to({ x: 570 }, duration_game, egret.Ease.backOut);
        var tw_gameXXX = egret.Tween.get(this.gameXXX).to({ x: 600 }, duration_game, egret.Ease.backOut);
        var tw_gameScoreIcon = egret.Tween.get(this.gameScoreIcon).to({ x: 11 }, duration_game, egret.Ease.backOut);
        var tw_gameScore = egret.Tween.get(this.gameScore).to({ x: 58 }, duration_game, egret.Ease.backOut);
        var tw_gameBestScore = egret.Tween.get(this.gameBestScore).to({ x: 9 }, duration_game, egret.Ease.backOut);
    };
    //添加開始遊戲音效
    FruitNewGamePage.prototype.addStarSound = function () {
        var soundStart = RES.getRes("start_mp3");
        var channeIStart = soundStart.play(0, 1);
    };
    FruitNewGamePage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitNewGamePage();
        }
        return this._instance;
    };
    FruitNewGamePage.destroyInstance = function () {
        this._instance = undefined;
    };
    return FruitNewGamePage;
}(eui.Component));
__reflect(FruitNewGamePage.prototype, "FruitNewGamePage");
