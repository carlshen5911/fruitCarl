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
 * fruit-sandia
 */
var Sandia = (function (_super) {
    __extends(Sandia, _super);
    function Sandia() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("sandia_png");
        _this.img_part1.texture = RES.getRes("sandia-1_png");
        _this.img_part2.texture = RES.getRes("sandia-2_png");
        _this.initRotation = 85;
        _this.rotationIndex = 1;
        _this.splashColor = 0xff0000;
        _this.setSize();
        return _this;
    }
    return Sandia;
}(BaseFruit));
__reflect(Sandia.prototype, "Sandia");
