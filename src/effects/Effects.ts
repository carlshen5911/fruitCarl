/**
 * 動畫效果
 */
module Effects{
   /**
    * 上下浮動
    * @param obj 顯示對象
    * @param dur 一次動畫時間
    * @param loop 是否循環
    */
    export function floatUpdown(obj:egret.DisplayObject,dur,loop){
        var onComplete_floatUpdown:Function=function(){
            var objY=obj.y;
            egret.Tween.get(obj).to({y:objY+10},dur/2,egret.Ease.circIn).to({y:objY},dur/2,egret.Ease.circOut).call(onComplete_floatUpdown,this);
        }
        var objY=obj.y;
        if (loop){
            egret.Tween.get(obj).to({y:objY+10},dur/2,egret.Ease.circIn).to({y:objY},dur/2,egret.Ease.circOut).call(onComplete_floatUpdown,this);
        } else {
            egret.Tween.get(obj).to({y:objY+10},dur/2,egret.Ease.circIn).to({y:objY},dur/2,egret.Ease.circOut);
        }
    }
    /**
     * 旋轉
     * @param obj 顯示對象
     * @param dur 一次動畫時間
     * @param loop 是否循環
     * @param direction 方向true順flase逆
     */
    export function rotate (obj:egret.DisplayObject,dur,loop,direction){
        var dir=direction ? 1 : -1;
        var onComplete_rotate:Function=function(){
            obj.rotation=0;
            egret.Tween.get(obj).to({rotation:360 * dir},dur).call(onComplete_rotate,this);
        } 
        if (loop){
            obj.rotation=0;
            egret.Tween.get(obj).to({rotation:360 * dir},dur).call(onComplete_rotate,this);
        } else {
            obj.rotation=0;
            egret.Tween.get(obj).to({rotate:360 * dir},dur);
        }
    }
}