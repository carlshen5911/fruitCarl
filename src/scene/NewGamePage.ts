/**
 * 遊戲界面
 */
class FruitNewGamePage extends eui.Component {
	private static _instance;
	public constructor() {
		super();
		this.skinName="resource/eui_skins/eui/NewGamePage.exml";
        this.init();
	}

	public gameX;
	public gameXX;
	public gameXXX;
	
	public gameXF;
	public gameXXF;
	public gameXXXF;

	public gameScoreIcon;
	public gameScore;
	public gameBestScore;

	public scoreCount:number;
	public failedCount:number;

	private gameContainer:GameContainer;

	private gameManeger:GameManager;
	
	private init(){
        //添加初始動畫
		this.addEffects();
		//添加開始遊戲音效
		this.addStarSound();
		//初始化數據
		this.scoreCount=this.failedCount=0;
		//添加遊戲容器
		this.gameContainer=GameContainer.getInstance();
		this.gameContainer.width=this.width;
		this.gameContainer.height=this.height;
		this.addChild(this.gameContainer);
	}
    //添加初始動畫
	private addEffects(){
		var duration_game=700;
		var tw_gameX=egret.Tween.get(this.gameX).to({x:545},duration_game,egret.Ease.backOut);
        var tw_gameXX=egret.Tween.get(this.gameXX).to({x:570},duration_game,egret.Ease.backOut);
		var tw_gameXXX=egret.Tween.get(this.gameXXX).to({x:600},duration_game,egret.Ease.backOut);

		var tw_gameScoreIcon=egret.Tween.get(this.gameScoreIcon).to({x:11},duration_game,egret.Ease.backOut);
		var tw_gameScore=egret.Tween.get(this.gameScore).to({x:58},duration_game,egret.Ease.backOut);
		var tw_gameBestScore=egret.Tween.get(this.gameBestScore).to({x:9},duration_game,egret.Ease.backOut);
	}
    //添加開始遊戲音效
	private addStarSound(){
        var soundStart:egret.Sound=RES.getRes("start_mp3");
		var channeIStart=soundStart.play(0,1);
	}  

	public static getInstance() {
        if (this._instance===undefined){
			this._instance=new FruitNewGamePage();
		}
		return this._instance;
	}

	public static destroyInstance(){
        this._instance=undefined;
	}
}