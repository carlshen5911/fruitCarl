var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 事件觀察者
 */
var Observer = (function () {
    function Observer() {
        this._messages = [];
    }
    /**
     * 註冊命令
     * @param commandKey
     * @param fn
     * @param content
     */
    Observer.prototype.regist = function (commandKey, fn, content) {
        var fn_con = {
            fn: fn,
            content: content
        };
        if (typeof this._messages[commandKey] === 'undefined') {
            this._messages[commandKey] = [fn_con];
        }
        else {
            this._messages[commandKey].push(fn_con);
        }
    };
    /**
     *
     * @param commandKey 觸發命令
     * @param args
     */
    Observer.prototype.fire = function (commandKey, args) {
        if (!this._messages[commandKey]) {
            return;
        }
        var events = {
            commandKey: commandKey,
            args: args || {}
        };
        for (var i = 0; i < this._messages[commandKey].lenhth; i++) {
            this._messages[commandKey][i].fn.call(this._messages[commandKey][i].content, events);
        }
    };
    /**
     * 移除命令
     * @param commandKey
     * @param fn
     * @param content
     */
    Observer.prototype.remove = function (commandKey, fn, content) {
        var fn_con = {
            fn: fn,
            content: content
        };
        if (this._messages[commandKey] instanceof Array) {
            for (var i = this._messages[commandKey].length - 1; i >= 0; i--) {
                this._messages[commandKey][i] === fn_con && this._messages[commandKey].splice(i, 1);
            }
        }
    };
    Observer.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new Observer();
        }
        return this._instance;
    };
    return Observer;
}());
__reflect(Observer.prototype, "Observer");
