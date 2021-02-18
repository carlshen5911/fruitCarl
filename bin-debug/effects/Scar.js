var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 刀痕
 */
var Scar = (function () {
    function Scar(thisObj) {
        this.moveCount = 0; //記錄滑鼠移動事件觸發次數
        this.hasThrow = false; //是否觸發揮刀音效
        //上一次mousemove事件觸發位置
        this.prePointX = -1;
        this.prePointY = -1;
        this.thisObj = thisObj;
        thisObj.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.addScar, this);
    }
    /**
     * 添加刀痕方法
     * @param evt
     */
    Scar.prototype.addScar = function (evt) {
        /**
         * 添加音效
         */
        this.moveCount++;
        if (!this.hasThrow && this.moveCount > 10) {
            var soundThrow = RES.getRes("throw_mp3");
            var channelThrow = soundThrow.play(0, 1);
            this.hasThrow = true;
        }
        /**
         * 添加刀痕
         */
        if (this.prePointX > 0 && this.prePointY > 0) {
            var len = Math.floor(Math.sqrt((this.prePointY - evt.stageY) * (this.prePointY - evt.stageY) + (this.prePointX - evt.stageX) * (this.prePointX - evt.stageX))); //sqrt返回數字的平方根。
            var theta = Math.atan((evt.stageY - this.prePointY) / (evt.stageX - this.prePointX)) * 57.3; //atan返回數字的反正切
            if (this.prePointX > evt.stageX) {
                var scar = new egret.Shape();
                scar.graphics.lineStyle(8, 0xdddec5);
                scar.graphics.moveTo(0, 0);
                scar.graphics.lineTo(len, 0);
                scar.graphics.endFill();
            }
            else {
                var scar = new egret.Shape();
                scar.graphics.lineStyle(8, 0xdddec5);
                scar.graphics.moveTo(0, 0);
                scar.graphics.lineTo(-len, 0);
                scar.graphics.endFill();
            }
            scar.x = evt.stageX;
            scar.y = evt.stageY;
            scar.anchorOffsetX = 4.5;
            scar.rotation = theta;
            this.thisObj.addChild(scar);
            var thatObj = this.thisObj;
            var tw_scar = egret.Tween.get(scar).to({ scaleY: 0 }, 300).call(function () {
                thatObj.removeChild(scar);
                scar = null;
            });
        }
        this.prePointX = evt.stageX;
        this.prePointY = evt.stageY;
    };
    /**
     * 抬起手之後的處理
     */
    Scar.prototype.moveEnd = function () {
        this.prePointX = -1;
        this.prePointY = -1;
        this.moveCount = 0;
        this.hasThrow = false;
    };
    Scar.getInstance = function (thisObj) {
        if (this._instance === undefined) {
            this._instance = new Scar(thisObj);
        }
        return this._instance;
    };
    Scar.destoryInstance = function () {
        this._instance = undefined;
    };
    return Scar;
}());
__reflect(Scar.prototype, "Scar");
