/**
 * 遊戲邏輯
 */
class GameContainer extends egret.DisplayObjectContainer{
    private static _instance;
    private timer:egret.Timer;
    private fruitNum: number;//水果出現機率
    private fruitArray;

    constructor(){
        super();
        this.init();
    }
    //初始化
    private init(){
        //拋水果
        this.timer=new egret.Timer(2100,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.popupFruit,this);
        this.timer.start();
        //設置觸摸事件
        egret.setTimeout(function(){
           this.parent.touchEnabled=true;
           this.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.collideDetction,this);
           this.parent.addEventListener(egret.TouchEvent.TOUCH_END,this.moveEnd,this);
        },this,2100);
    }
    /**
     * 拋水果
     */
    private popupFruit(){
        this.fruitNum = Math.ceil(Math.random() * 3);//ceil 返回大於或等於其數字參數的最小整數，random返回介於0和1之間的偽隨機數。
        this.fruitArray=[];
        var fruitClassName = [ClassName.APPLE,ClassName.BANANA,ClassName.BASAHA,ClassName.PEACH,ClassName.SANDIA,ClassName.BOOM];
        for (var i=0;i<this.fruitNum;i++){
            var fruitIns = fruitClassName[Math.floor(Math.random() * 6)]();//floor返回小於或等於其數字參數的最大整數
            this.fruitArray.push(fruitIns);
            this.addChild(fruitIns);
        }
    }
    private prePointX:number=-1;
    private prePointY:number=-1;
    private moveEnd(){
       this.prePointX=-1;
       this.prePointY=-1;
    }

    /**
     * 碰撞檢測並添加刀痕
     * @param evt 
     */
    private collideDetction(evt:egret.TouchEvent){
       for (var i=0;i<this.fruitNum;i++){
           if (!this.fruitArray[i].cutIndex){
               var isCollid=this.fruitArray[i].hitTextPoint(evt.stageX,evt.stageY,this);
               if (isCollid){
                   this.fruitArray[i].cutFruit();
                   this.setSplitRotation(evt.stageX,evt.stageY,this.fruitArray[i]);
               }
           }
       }
       this.prePointX=evt.stageX;
       this.prePointY=evt.stageY;
    }
    /**
     * 設置水果切開時閃光的方向
     * @param curX 
     * @param curY 
     * @param fruit 
     */
    private setSplitRotation(curX,curY,fruit){
        if(!fruit.splitBitmap){
            return;
        }
        if (this.prePointX==-1){
            fruit.splitBitmap.rotation=0;
        } else if (this.prePointX==curX){
            fruit.splitBitmap.rotation=90;
        } else{
            fruit.splitBitmap.rotation=Math.atan((curY-this.prePointY)/(curY-this.prePointX)) * 57.3;
        }
        fruit.img_part1.rotation=fruit.img_part2.rotation+=180* fruit.rotationIndex;
    }

    public static getInstance(){
        if (this._instance==undefined){
            this._instance=new GameContainer();
        }
        return this._instance;
    }

    public static destroyInstance(){
        this._instance=undefined;
    }
}