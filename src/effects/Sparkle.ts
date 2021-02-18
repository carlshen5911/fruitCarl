/**
 * 火光效果
 */
class Sparkle extends eui.Component {
    private emission:number;
    private emitterX:number=60;
    private emitterY:number=60;

    private sparkleTimer:egret.Timer;

    public constructor(emission){
        super();
        this.emission=emission;
        this.width=this.emitterX*2;
        this.height=this.emitterY*2;
        this.anchorOffsetX=this.emitterX;
        this.anchorOffsetY=this.emitterY;

        this.start();
    }

    /**
     * 設置火花特效的時間驅動
     */
    private start(){
        this.sparkleTimer=new egret.Timer(this.emission,0);
        this.sparkleTimer.addEventListener(egret.TimerEvent.TIMER,this.timeFunc,this);
        this.sparkleTimer.start();
    }
    /**
     * 創建粒子並添加到舞台
     */
    private timeFunc(){
        this.addChild(this.creatParticle());
    }

    private creatParticle() {
       //生成火花
        var singleParticle:eui.Image=new eui.Image();
        singleParticle.source="flash_png";
        singleParticle.width=25;
        singleParticle.height=7;
        singleParticle.anchorOffsetX = singleParticle.width/2;
        singleParticle.anchorOffsetY = singleParticle.height/2;
        singleParticle.x=this.emitterX;
        singleParticle.y=this.emitterY;
        singleParticle.rotation=Math.random() * 300;
        var theta = singleParticle.rotation / 180 * Math.PI;//PI這是圓的周長與其直徑之比

        //為每個光花添加動畫，動畫執行完畢後從舞台中移除
        egret.Tween.get(singleParticle).to({
            x:this.emitterX * (Math.cos(theta)+1),
            y:this.emitterX * (Math.sin(theta)+1),
            scaleX:0.2,
            scaleY:0.2
        },(Math.random() -0.5)* 100 + 400).call(function(){
            this.parent.removeChild(this);
        }, singleParticle);
        return singleParticle;
    }
}