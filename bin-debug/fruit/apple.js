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
 * fruit-apple
 */
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("apple_png");
        _this.img_part1.texture = RES.getRes("apple-1_png");
        _this.img_part2.texture = RES.getRes("apple-2_png");
        _this.initRotation = -45;
        _this.rotationIndex = 0;
        _this.splashColor = 0x87c310;
        _this.setSize();
        return _this;
    }
    return Apple;
}(BaseFruit));
__reflect(Apple.prototype, "Apple");
