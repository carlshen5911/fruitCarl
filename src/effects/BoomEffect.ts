/**
 *爆炸發光特效 
 */
class BoomEffect extends egret.DisplayObjectContainer{
    private lightNum:number=8;//光線數量
    private lightRotation:number[]=[];//光線的角度
    private lightRotationOrder:number[]=[];//光線出現的順序
    private lightArray:egret.Shape[];//光線顯示對象
    private timer;//setTimeOut對象
    private fruitObj;//被切到炸彈


    private index:number;

    public constructor(fruitObj){
        super();

        this.index=0;
        this.lightArray=[];
        this.fruitObj=fruitObj;

        this.init();
        this.getLightRotation();
        this.getOrder();
        this.addBoomSound();
        this.addLight();
        this.addWiteBg();
    }
    /**
     * 初始化
     */
    private init(){
        this.width=1280;
        this.height=960;
        this.anchorOffsetX=640;
        this.anchorOffsetY=480;        
    }
    /**
     * 隨機獲取爆炸光線的角度
     */
    private getLightRotation(){
        var lightGap=360/this.lightNum;
        for (var i=0;i<this.lightNum;i++){
            this.lightRotation.push(Math.random() * lightGap * 0.5 + lightGap * 0.25 + lightGap * i);
        }
    }
    /**
     * 添加爆炸音效
     */
    private addBoomSound(){
        var soundBoom:egret.Sound=RES.getRes("boom_mp3");
        var channelBoom=soundBoom.play(0,1);
    }
    /**
     * 隨機設置爆炸光線出現的先後順序
     */
    private getOrder(){
        var lightRotationCopy:number[]=[];
        for (var i=0;i<this.lightNum;i++){
            lightRotationCopy.push(this.lightRotation[i]);
        }
        for (var i=8;i>0;i--){
            var order=Math.floor(Math.random() * i);
            lightRotationCopy.push(lightRotationCopy[order]);
            lightRotationCopy.splice(order,1);//splice從數組中刪除元素，並在必要時在其位置插入新元素，並返回已刪除的元素
        }
    }
    /**
     * 將爆炸光線添加到舞台
     */
    private addLight(){
        if (this.timer){
            egret.clearTimeout(this.timer);
        }
        if (this.index<this.lightNum){
            var boomLight=this.createLight();
            boomLight.rotation=this.lightRotationOrder[this.index++];
            this.lightArray.push(boomLight);
            this.addChild(boomLight);
            this.timer=egret.setTimeout(this.addLight,this,200);
        }
    }
    /**
     * 用Shape畫梯形模擬爆炸光線
     */
    private createLight(){
        var boomLight:egret.Shape=new egret.Shape();
        boomLight.graphics.beginFill(0xffffc9,1);
        boomLight.graphics.moveTo(0,17);
        boomLight.graphics.lineTo(640,0);
        boomLight.graphics.lineTo(640,40);
        boomLight.graphics.lineTo(0,23);
        boomLight.graphics.endFill();
        boomLight.anchorOffsetX=0;
        boomLight.anchorOffsetY=20;
        boomLight.x=640;
        boomLight.y=480;
        return boomLight;
    }

    /**
     * 爆炸光線出現完畢後的閃光效果(屏幕全白閃一下)
     */
    private addWiteBg(){
        var witeBg:egret.Shape=new egret.Shape();
        witeBg.graphics.beginFill(0xffffff,1);
        witeBg.graphics.drawRect(0,0,640,480);
        witeBg.graphics.endFill();
        egret.setTimeout(function(){
           this.stage.addChild(witeBg);
           var tw_witeBg=egret.Tween.get(witeBg).to({alpha:0},3000).call(function(){
               this.stage.removeChild(witeBg);
               Observer.getInstance().fire(Commands.GAME_OVER);
           });
           for (var i=0;i<this.lightNum;i++){
               this.removeChild(this.lightArray[i]);
           }
           GameContainer.getInstance().removeChild(this.fruitObj);
        },this,(this.lightNum)*200);
    }



}