/**
 * 
 * 切水果時果汁濺射特效
 */
class SplashEffect extends egret.DisplayObjectContainer{
    /**
     * 水花顏色
     */
    private splashColor;

    public constructor(splashColor){
        super();

        this.splashColor = splashColor;
        this.start();
    }

    /**
     * 添加水花粒子
     */
    private start(){
        for (var i=0;i<10;i++){
            var radius=Math.random() * 2+4;
            var speed=Math.random() * 300 + 200;
            var dir=Math.random() * 360;
            var splashUnit = new Splash(radius, speed, dir, this.splashColor);
            this.addChild(splashUnit);
        }
    }
}
/**
 * 水花粒子
 */
class Splash extends egret.Shape{
    private speed:number;//初始速度
    private direction:number;//初始方向
    private splashColor;//顏色
    private radius:number;//濺射半徑
    private beginTime;//水花動畫開始的時間
    private initX;//初始X位置
    private initY;//初始Y位置

    public constructor(radius, speed, direction, splashColor){
        super();
        this.radius=radius;
        this.speed=speed;
        this.direction=direction;
        this.splashColor=splashColor;

        this.init();
        this.initX=this.x;
        this.initY=this.y;

        //改變水花大小的緩動動畫
        var tw_splash=egret.Tween.get(this).to({scaleX:0.5},300).call(function(){
            this.removeEventListener(egret.Event.ENTER_FRAME,this.updateLocation,this);
        });

        this.beginTime=egret.getTimer();
        this.addEventListener(egret.Event.ENTER_FRAME,this.updateLocation,this);
    }
    /**
     * 小圓點模擬水花
     */
    private init(){
        this.graphics.beginFill(this.splashColor,1);
        this.graphics.drawCircle(0,0,this.radius);
        this.graphics.endFill();
    }
    /**
     * 即時計算位置
     */
    private updateLocation(){
        this.x=this.initX+this.speed * (egret.getTimer() - this.beginTime)/ 1000 * Math.cos(this.direction / 57.3);
        this.y=this.initY-this.speed * (egret.getTimer() - this.beginTime)/ 1000 * Math.sin(this.direction / 57.3);
    }
}