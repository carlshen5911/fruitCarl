var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 場景管理類
 */
var SceneManager = (function () {
    function SceneManager() {
        this.registObserver();
    }
    /**
     * 註冊命令
     */
    SceneManager.prototype.registObserver = function () {
        Observer.getInstance().regist(Commands.OPEN_NEWGAME, this.openNewGame, this);
        Observer.getInstance().regist(Commands.CLOSE_NEWGAME, this.closeNewGame, this);
        Observer.getInstance().regist(Commands.OPEN_JODO, this.openJodo, this);
        Observer.getInstance().regist(Commands.CLOSE_JODO, this.closeJodo, this);
        Observer.getInstance().regist(Commands.OPEN_QUIT, this.openQuit, this);
        Observer.getInstance().regist(Commands.CLOSE_QUIT, this.closeQuit, this);
    };
    SceneManager.prototype.openNewGame = function () {
        var fruithomePage = FruitHomePage.getInstance();
        fruithomePage.channelBg.stop();
        var dur = 500;
        this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var fruitNewGamePage = FruitNewGamePage.getInstance();
            parentNode.addChild(fruitNewGamePage);
        }, this, dur + 100);
    };
    SceneManager.prototype.closeNewGame = function () {
        var fruitNewGamePage = FruitNewGamePage.getInstance();
        var soundStart = RES.getRes("over_mp3");
        var channelStart = soundStart.play(0, 1);
        var dur = 1000;
        this.disappearHomePage(fruitNewGamePage, dur);
        egret.setTimeout(function () {
            channelStart.stop();
            var parentNode = fruitNewGamePage.parent;
            parentNode.removeChild(fruitNewGamePage);
            FruitNewGamePage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    };
    SceneManager.prototype.openJodo = function () {
        var fruithomePage = FruitHomePage.getInstance();
        fruithomePage.channelBg.stop();
        var dur = 500;
        this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var fruitJodoPagr = FruitJodoPage.getInstance();
            parentNode.addChild(fruitJodoPagr);
        }, this, dur + 100);
    };
    SceneManager.prototype.closeJodo = function () {
        var fruitJodoPage = FruitJodoPage.getInstance();
        var dur = 500;
        this.disappearJodoPage(fruitJodoPage, dur);
        egret.setTimeout(function () {
            var parentNode = fruitJodoPage.parent;
            parentNode.removeChild(fruitJodoPage);
            FruitJodoPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    };
    SceneManager.prototype.openQuit = function () {
        var fruithomePage = FruitHomePage.getInstance();
        fruithomePage.channelBg.stopt();
        var dur = 500;
        this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var fruitQuitPagr = FruitQuitPage.getInstance();
            parentNode.addChild(fruitQuitPagr);
        }, this, dur + 100);
    };
    SceneManager.prototype.closeQuit = function () {
        var fruitQuitPage = FruitQuitPage.getInstance();
        var dur = 500;
        this.disappearQuitPage(fruitQuitPage, dur);
        egret.setTimeout(function () {
            var parentNode = fruitQuitPage.parent;
            parentNode.removeChild(fruitQuitPage);
            FruitQuitPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    };
    SceneManager.prototype.disappearHomePage = function (fruithomePage, dur) {
        var tw_sparkle = egret.Tween.get(fruithomePage.sparkle).to({ scaleX: 0, scaleY: 0 }, dur / 2);
        var tw_headerBgtween = egret.Tween.get(fruithomePage.headerBg).to({ y: -183 }, dur);
        var tw_headerTitle = egret.Tween.get(fruithomePage.tw_headerTitle).to({ y: -155 }, dur);
        var tw_headerSubTotle = egret.Tween.get(fruithomePage.tw_headerSubTotle).to({ y: -111 }, dur);
        var tw_headerTip = egret.Tween.get(fruithomePage.tw_headerTip).to({ x: -161, y: 150 }, dur);
        var tw_ringDojo = egret.Tween.get(fruithomePage.ringDojo).to({ scaleX: 0, scaleY: 0 }, dur);
        var tw_contentDojo = egret.Tween.get(fruithomePage.contentDojo).to({ scaleX: 0, scaleY: 0 }, dur);
        var tw_contentNewGame = egret.Tween.get(fruithomePage.contentNewGame).to({ scaleX: 0, scaleY: 0 }, dur);
        var tw_ringNewGame = egret.Tween.get(fruithomePage.tw_ringNewGame).to({ scaleX: 0, scaleY: 0 }, dur);
        var tw_contentQuit = egret.Tween.get(fruithomePage.tw_contentQuit).to({ scaleX: 0, scaleY: 0 }, dur);
        var tw_ringQuit = egret.Tween.get(fruithomePage.tw_ringQuit).to({ scaleX: 0, scaleY: 0 }, dur);
        var tw_contentTip = egret.Tween.get(fruithomePage.tw_contentTip).to({ scaleX: 0, scaleY: 0 }, dur);
    };
    SceneManager.prototype.disappearNewGamePage = function (fruitNewGamePage, dur) {
        GameContainer.destroyInstance();
        var tw_gmaeX = egret.Tween.get(fruitNewGamePage.gameX).to({ x: 640 }, dur);
        var tw_gameXX = egret.Tween.get(fruitNewGamePage.gameXX).to({ x: 665 }, dur);
        var tw_gameXXX = egret.Tween.get(fruitNewGamePage.gameXXX).to({ x: 695 }, dur);
        var tw_gameXF = egret.Tween.get(fruitNewGamePage.gameXF).to({ x: 651 }, dur);
        var tw_gmaeXXF = egret.Tween.get(fruitNewGamePage.gameXXF).to({ x: 678.5 }, dur);
        var tw_gameXXXF = egret.Tween.get(fruitNewGamePage.gameXXXF).to({ x: 710 }, dur);
        var tw_gameScoreIcon = egret.Tween.get(fruitNewGamePage.tw_gameScoreIcon).to({ x: -65 }, dur);
        var tw_gmaeScore = egret.Tween.get(fruitNewGamePage.tw_gmaeScore).to({ x: -18 }, dur);
        var tw_gameBestScore = egret.Tween.get(fruitNewGamePage.tw_gameBestScore).to({ x: -67 }, dur);
        var tw_gmaeover = egret.Tween.get(fruitNewGamePage.tw_gameover).to({ scaleX: 0, scaleY: 0, alpha: 0 });
    };
    SceneManager.prototype.disappearJodoPage = function (fruitJodoPage, dur) {
        var tw_jodoInfo = egret.Tween.get(fruitJodoPage.jodoInfo).to({ scaleX: 0, scaleY: 0 }, dur);
    };
    SceneManager.prototype.disappearQuitPage = function (fruitQuitPagr, dur) {
        var tw_quitInfo = egret.Tween.get(fruitQuitPagr.quitInfo).to({ scaleX: 0, scleY: 0 }, dur);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
