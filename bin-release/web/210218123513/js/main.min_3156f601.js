var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},__extends=function(t,e){function n(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},__assign=Object.assign||function(t){for(var e,n=1,i=arguments.length;i>n;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},__rest=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n},__decorate=function(t,e,n,i){var r,o=arguments.length,a=3>o?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(3>o?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},__param=function(t,e){return function(n,i){e(n,i,t)}},__metadata=function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},__awaiter=function(t,e,n,i){function r(t){return t instanceof n?t:new n(function(e){e(t)})}return new(n||(n=Promise))(function(n,o){function a(t){try{c(i.next(t))}catch(e){o(e)}}function s(t){try{c(i["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):r(t.value).then(a,s)}c((i=i.apply(t,e||[])).next())})},__generator=function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,o&&(a=2&n[0]?o["return"]:n[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(i){n=[6,i],o=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||__createBinding(e,t,n)},__createBinding=Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]},__values=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),a=[];try{for(;(void 0===e||e-->0)&&!(i=o.next()).done;)a.push(i.value)}catch(s){r={error:s}}finally{try{i&&!i.done&&(n=o["return"])&&n.call(o)}finally{if(r)throw r.error}}return a},__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__spreadArrays=function(){for(var t=0,e=0,n=arguments.length;n>e;e++)t+=arguments[e].length;for(var i=Array(t),r=0,e=0;n>e;e++)for(var o=arguments[e],a=0,s=o.length;s>a;a++,r++)i[r]=o[a];return i},__await=function(t){return this instanceof __await?(this.v=t,this):new __await(t)},__asyncGenerator=function(t,e,n){function i(t){u[t]&&(h[t]=function(e){return new Promise(function(n,i){g.push([t,e,n,i])>1||r(t,e)})})}function r(t,e){try{o(u[t](e))}catch(n){c(g[0][3],n)}}function o(t){t.value instanceof __await?Promise.resolve(t.value.v).then(a,s):c(g[0][2],t)}function a(t){r("next",t)}function s(t){r("throw",t)}function c(t,e){t(e),g.shift(),g.length&&r(g[0][0],g[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var h,u=n.apply(t,e||[]),g=[];return h={},i("next"),i("throw"),i("return"),h[Symbol.asyncIterator]=function(){return this},h},__asyncDelegator=function(t){function e(e,r){n[e]=t[e]?function(n){return(i=!i)?{value:__await(t[e](n)),done:"return"===e}:r?r(n):n}:r}var n,i;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(t){function e(e){i[e]=t[e]&&function(i){return new Promise(function(r,o){i=t[e](i),n(r,o,i.done,i.value)})}}function n(t,e,n,i){Promise.resolve(i).then(function(e){t({value:e,done:n})},e)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),i={},e("next"),e("throw"),e("return"),i[Symbol.asyncIterator]=function(){return this},i)},__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&__createBinding(e,t,n);return __setModuleDefault(e,t),e},__importDefault=function(t){return t&&t.__esModule?t:{"default":t}},__classPrivateFieldGet=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},__classPrivateFieldSet=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},__reflect=function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n};!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(e){return t[e]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),n(2),n(0),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27);var i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isThemeLoadEnd=!1,e.isResourceLoadEnd=!1,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.loadingView=new LoadingUI,this.stage.addChild(this.loadingView),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfirComplete,this),RES.loadConfig("resource/default.res.json","resource/")},e.prototype.onConfirComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfirComplete,this);var e=new eui.Theme("resource/default.thm.json",this.stage);e.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),RES.setMaxRetryTimes(6),RES.loadGroup("preload")},e.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.createScene()},e.prototype.onResourceLoadComplete=function(t){"preload"==t.groupName&&(this.stage.removeChild(this.loadingView),RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),this.isResourceLoadEnd=!0,this.createScene())},e.prototype.onResourceLoadError=function(t){console.warn("Group:"+t.groupName+"has failed to load"),this.onResourceLoadComplete(t)},e.prototype.onResourceProgress=function(t){"preload"==t.groupName&&this.loadingView.setProgress(t.itemsLoaded,t.itemsTotal)},e.prototype.onItemLoadError=function(t){console.warn("Url:"+t.resItem.url+"has faled to load?")},e.prototype.createScene=function(){this.isThemeLoadEnd&&this.isResourceLoadEnd&&this.startCreateScene()},e.prototype.startCreateScene=function(){this.stage.frameRate=240,this.fruithomePage=FruitHomePage.getInstance(),this.addChild(this.fruithomePage),this.sceneManager=new SceneManager,this.gameManager=new GameManager,egret.setTimeout(function(){Scar.getInstance(this.stage)},this,100)},e}(eui.UILayer);window.Main=i,__reflect(i.prototype,"Main",[])},function(t,e){var n=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?i(r):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();window.AssetAdapter=n,__reflect(n.prototype,"AssetAdapter",["eui.IAssetAdapter"])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.setProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",[])},function(t,e){var n=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(t,e){var n=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function r(t){e.call(i,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(i))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var s=t.split("/");s.pop();var c=s.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(c,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(i,generateJSON.paths[t])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT)},t}();window.ThemeAdapter=n,__reflect(n.prototype,"ThemeAdapter",["eui.IThemeAdapter"])},function(t,e){var n=function(){function t(){}return t.APPLE=function(){return new Apple},t.BANANA=function(){return new Banana},t.BASAHA=function(){return new Basaha},t.PEACH=function(){return new Peach},t.SANDIA=function(){return new Sandia},t.BOOM=function(){return new Boom},t}();window.ClassName=n,__reflect(n.prototype,"ClassName",[])},function(t,e){var n=function(){function t(){}return t.OPEN_NEWGAME="open_newgame",t.OPEN_JODO="open_jodo",t.OPEN_QUIT="open_quit",t.CLOSE_NEWGAME="close_newgame",t.CLOSE_JODO="close_jodo",t.CLOSE_QUIT="close_quit",t.ADD_SCORE="add_score",t.ADD_FAILED="add_failed",t.GAME_OVER="game_over",t}();window.Commands=n,__reflect(n.prototype,"Commands",[])},function(t,e){var n=function(t){function e(e){var n=t.call(this)||this;return n.lightNum=8,n.lightRotation=[],n.lightRotationOrder=[],n.index=0,n.lightArray=[],n.fruitObj=e,n.init(),n.getLightRotation(),n.getOrder(),n.addBoomSound(),n.addLight(),n.addWiteBg(),n}return __extends(e,t),e.prototype.init=function(){this.width=1280,this.height=960,this.anchorOffsetX=640,this.anchorOffsetY=480},e.prototype.getLightRotation=function(){for(var t=360/this.lightNum,e=0;e<this.lightNum;e++)this.lightRotation.push(Math.random()*t*.5+.25*t+t*e)},e.prototype.addBoomSound=function(){var t=RES.getRes("boom_mp3");t.play(0,1)},e.prototype.getOrder=function(){for(var t=[],e=0;e<this.lightNum;e++)t.push(this.lightRotation[e]);for(var e=8;e>0;e--){var n=Math.floor(Math.random()*e);t.push(t[n]),t.splice(n,1)}},e.prototype.addLight=function(){if(this.timer&&egret.clearTimeout(this.timer),this.index<this.lightNum){var t=this.createLight();t.rotation=this.lightRotationOrder[this.index++],this.lightArray.push(t),this.addChild(t),this.timer=egret.setTimeout(this.addLight,this,200)}},e.prototype.createLight=function(){var t=new egret.Shape;return t.graphics.beginFill(16777161,1),t.graphics.moveTo(0,17),t.graphics.lineTo(640,0),t.graphics.lineTo(640,40),t.graphics.lineTo(0,23),t.graphics.endFill(),t.anchorOffsetX=0,t.anchorOffsetY=20,t.x=640,t.y=480,t},e.prototype.addWiteBg=function(){var t=new egret.Shape;t.graphics.beginFill(16777215,1),t.graphics.drawRect(0,0,640,480),t.graphics.endFill(),egret.setTimeout(function(){this.stage.addChild(t);for(var e=(egret.Tween.get(t).to({alpha:0},3e3).call(function(){this.stage.removeChild(t),Observer.getInstance().fire(Commands.GAME_OVER)}),0);e<this.lightNum;e++)this.removeChild(this.lightArray[e]);GameContainer.getInstance().removeChild(this.fruitObj)},this,200*this.lightNum)},e}(egret.DisplayObjectContainer);window.BoomEffect=n,__reflect(n.prototype,"BoomEffect",[])},function(t,e){var n,n=window.Effects;!function(t){function e(t,e,n){var i=function(){var n=t.y;egret.Tween.get(t).to({y:n+10},e/2,egret.Ease.circIn).to({y:n},e/2,egret.Ease.circOut).call(i,this)},r=t.y;n?egret.Tween.get(t).to({y:r+10},e/2,egret.Ease.circIn).to({y:r},e/2,egret.Ease.circOut).call(i,this):egret.Tween.get(t).to({y:r+10},e/2,egret.Ease.circIn).to({y:r},e/2,egret.Ease.circOut)}function n(t,e,n,i){var r=i?1:-1,o=function(){t.rotation=0,egret.Tween.get(t).to({rotation:360*r},e).call(o,this)};n?(t.rotation=0,egret.Tween.get(t).to({rotation:360*r},e).call(o,this)):(t.rotation=0,egret.Tween.get(t).to({rotate:360*r},e))}t.floatUpdown=e,t.rotate=n}(n||(n={})),window.Effects=n},function(t,e){var n=function(){function t(t){this.moveCount=0,this.hasThrow=!1,this.prePointX=-1,this.prePointY=-1,this.thisObj=t,t.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.addScar,this)}return t.prototype.addScar=function(t){if(this.moveCount++,!this.hasThrow&&this.moveCount>10){var e=RES.getRes("throw_mp3");e.play(0,1);this.hasThrow=!0}if(this.prePointX>0&&this.prePointY>0){var n=Math.floor(Math.sqrt((this.prePointY-t.stageY)*(this.prePointY-t.stageY)+(this.prePointX-t.stageX)*(this.prePointX-t.stageX))),i=57.3*Math.atan((t.stageY-this.prePointY)/(t.stageX-this.prePointX));if(this.prePointX>t.stageX){var r=new egret.Shape;r.graphics.lineStyle(8,14540485),r.graphics.moveTo(0,0),r.graphics.lineTo(n,0),r.graphics.endFill()}else{var r=new egret.Shape;r.graphics.lineStyle(8,14540485),r.graphics.moveTo(0,0),r.graphics.lineTo(-n,0),r.graphics.endFill()}r.x=t.stageX,r.y=t.stageY,r.anchorOffsetX=4.5,r.rotation=i,this.thisObj.addChild(r);var o=this.thisObj;egret.Tween.get(r).to({scaleY:0},300).call(function(){o.removeChild(r),r=null})}this.prePointX=t.stageX,this.prePointY=t.stageY},t.prototype.moveEnd=function(){this.prePointX=-1,this.prePointY=-1,this.moveCount=0,this.hasThrow=!1},t.getInstance=function(e){return void 0===this._instance&&(this._instance=new t(e)),this._instance},t.destoryInstance=function(){this._instance=void 0},t}();window.Scar=n,__reflect(n.prototype,"Scar",[])},function(t,e){var n=function(t){function e(e){var n=t.call(this)||this;return n.emitterX=60,n.emitterY=60,n.emission=e,n.width=2*n.emitterX,n.height=2*n.emitterY,n.anchorOffsetX=n.emitterX,n.anchorOffsetY=n.emitterY,n.start(),n}return __extends(e,t),e.prototype.start=function(){this.sparkleTimer=new egret.Timer(this.emission,0),this.sparkleTimer.addEventListener(egret.TimerEvent.TIMER,this.timeFunc,this),this.sparkleTimer.start()},e.prototype.timeFunc=function(){this.addChild(this.creatParticle())},e.prototype.creatParticle=function(){var t=new eui.Image;t.source="flash_png",t.width=25,t.height=7,t.anchorOffsetX=t.width/2,t.anchorOffsetY=t.height/2,t.x=this.emitterX,t.y=this.emitterY,t.rotation=300*Math.random();var e=t.rotation/180*Math.PI;return egret.Tween.get(t).to({x:this.emitterX*(Math.cos(e)+1),y:this.emitterX*(Math.sin(e)+1),scaleX:.2,scaleY:.2},100*(Math.random()-.5)+400).call(function(){this.parent.removeChild(this)},t),t},e}(eui.Component);window.Sparkle=n,__reflect(n.prototype,"Sparkle",[])},function(t,e){var n=function(t){function e(e){var n=t.call(this)||this;return n.splashColor=e,n.start(),n}return __extends(e,t),e.prototype.start=function(){for(var t=0;10>t;t++){var e=2*Math.random()+4,n=300*Math.random()+200,r=360*Math.random(),o=new i(e,n,r,this.splashColor);this.addChild(o)}},e}(egret.DisplayObjectContainer);window.SplashEffect=n,__reflect(n.prototype,"SplashEffect",[]);var i=function(t){function e(e,n,i,r){var o=t.call(this)||this;o.radius=e,o.speed=n,o.direction=i,o.splashColor=r,o.init(),o.initX=o.x,o.initY=o.y;egret.Tween.get(o).to({scaleX:.5},300).call(function(){this.removeEventListener(egret.Event.ENTER_FRAME,this.updateLocation,this)});return o.beginTime=egret.getTimer(),o.addEventListener(egret.Event.ENTER_FRAME,o.updateLocation,o),o}return __extends(e,t),e.prototype.init=function(){this.graphics.beginFill(this.splashColor,1),this.graphics.drawCircle(0,0,this.radius),this.graphics.endFill()},e.prototype.updateLocation=function(){this.x=this.initX+this.speed*(egret.getTimer()-this.beginTime)/1e3*Math.cos(this.direction/57.3),this.y=this.initY-this.speed*(egret.getTimer()-this.beginTime)/1e3*Math.sin(this.direction/57.3)},e}(egret.Shape);window.Splash=i,__reflect(i.prototype,"Splash",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){this.img=new egret.Bitmap,this.img_part1=new egret.Bitmap,this.addChild(this.img),this.accelerateX=0,this.accelerateY=700,this.accelerateRotate=0,this.speedX=180*(Math.random()-.5),this.speedY=-700,this.speedRotate=360*(Math.random()-.5),this.x=this.initX=400*Math.random()+180,this.y=this.initY=530,this.addEventListener(egret.Event.ENTER_FRAME,this.freeFalling,this),this.beginTime=egret.getTimer(),this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.cutFruit,this),this.cutIndex=!1},e.prototype.freeFalling=function(t){var e=(egret.getTimer()-this.beginTime)/1e3;this.x=this.initX+e*this.speedX,this.y=this.speedY*e+.5*this.accelerateY*e*e+this.initY,this.img.rotation=e*this.speedRotate,this.y>530&&!this.cutIndex&&(this.addFailed(),this.cutIndex=!0)},e.prototype.setSize=function(){this.anchorOffsetX=this.width/2,this.anchorOffsetY=this.height/2,this.img.anchorOffsetX=this.img.width/2,this.img.anchorOffsetY=this.img.height/2,this.img_part1.anchorOffsetX=this.img.width/2,this.img_part1.anchorOffsetY=this.img.height/2,this.img_part2.anchorOffsetX=this.img.width/2,this.img_part2.anchorOffsetY=this.img.height/2},e.prototype.cutFruit=function(){this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.cutFruit,this),this.cutIndex=!0,this.splitEffect(),this.addCutSound(),this.cutEffect(),this.splashEffectFun(),this.addScore()},e.prototype.splitEffect=function(){this.splitBitmap.texture=RES.getRes("flash_png"),this.splitBitmap.anchorOffsetX=this.splitBitmap.width/2,this.splitBitmap.anchorOffsetY=this.splitBitmap.height/2,this.splitBitmap.x=this.img.x,this.splitBitmap.y=this.img.y,this.splitBitmap.scaleX=.8,this.splitBitmap.scaleY=.8,this.splitBitmap.alpha=0,this.addChild(this.splitBitmap),egret.Tween.get(this.splitBitmap).to({alpha:1},100).to({alpha:0},100).call(function(){this.removeChild(this.splitBitmap)},this)},e.prototype.addCutSound=function(){var t=RES.getRes("splatter_mps");t.play(0,1)},e.prototype.cutEffect=function(){this.removeChild(this.img),this.addChild(this.img_part1),this.addChild(this.img_part2),this.addEventListener(egret.Event.ENTER_FRAME,this.cutFreeFalling,this)},e.prototype.splashEffectFun=function(){if(this.splashColor){this.splashEffect=new this.splashEffect(this.splashColor);this.splashEffect.x=this.x-35,this.splashEffect.y=this.y-35;this.parent.addChild(this.splashEffect),egret.setTimeout(function(){this.parent.removeChild(this.splashEffect)},this,400)}},e.prototype.cutFreeFalling=function(){this.img_part1.x-=2,this.img_part2.x+=2,this.img_part1.rotation-=2,this.img_part2.rotation+=2},e.prototype.addScore=function(){Observer.getInstance().fire(Commands.ADD_SCORE)},e.prototype.addFailed=function(){var t=this,e=new egret.Bitmap;e.texture=RES.getRes("lose_png"),e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.scaleX=0,e.scaleY=0,e.x=this.x-this.width/2,e.y=430,this.parent.addChild(e);egret.Tween.get(e).to({scaleX:1.1,scaleY:1.1},600,egret.Ease.backOut).wait(600).call(function(){t.parent.removeChild(e)});Observer.getInstance().fire(Commands.ADD_FAILED)},e}(egret.DisplayObjectContainer);window.BaseFruit=n,__reflect(n.prototype,"BaseFruit",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.img.texture=RES.getRes("apple_png"),e.img_part1.texture=RES.getRes("apple-1_png"),e.img_part2.texture=RES.getRes("apple-2_png"),e.initRotation=-45,e.rotationIndex=0,e.splashColor=8897296,e.setSize(),e}return __extends(e,t),e}(BaseFruit);window.Apple=n,__reflect(n.prototype,"Apple",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.img.texture=RES.getRes("banana_pag"),e.img_part1.texture=RES.getRes("banana-1_png"),e.img_part2.texture=RES.getRes("banana-2_png"),e.initRotation=90,e.rotationIndex=1,e.splashColor=null,e.setSize(),e}return __extends(e,t),e}(BaseFruit);window.Banana=n,__reflect(n.prototype,"Banana",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.img.texture=RES.getRes("basaha_png"),e.img_part1.texture=RES.getRes("basaha-1_png"),e.img_part2.texture=RES.getRes("basaha-2_png"),e.initRotation=45,e.rotationIndex=1,e.splashColor=16711680,e.setSize(),e}return __extends(e,t),e}(BaseFruit);window.Basaha=n,__reflect(n.prototype,"Basaha",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.img.texture=RES.getRes("boom_png"),e.setSize(),e}return __extends(e,t),e.prototype.addFailed=function(){},e.prototype.cutFruit=function(){this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.cutFruit,this),this.cutIndex=!0;var t=GameContainer.getInstance();t.time.stop(),t.parent.removeEventListener(egret.TouchEvent.TOUCH_MOVE,t.collideDetection,t);var e=new BoomEffect(this);e.x=this.x-33,e.y=this.y-34,GameContainer.getInstance().addChild(e),GameContainer.getInstance().addChild(this),this.removeEventListener(egret.Event.ENTER_FRAME,this.freeFalling,this)},e}(BaseFruit);window.Boom=n,__reflect(n.prototype,"Boom",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.img.texture=RES.getRes("peach_png"),e.img_part1.texture=RES.getRes("peach-1_png"),e.img_part2.texture=RES.getRes("peach-2_png"),e.initRotation=-45,e.rotationIndex=0,e.splashColor=16287245,e.setSize(),e}return __extends(e,t),e}(BaseFruit);window.Peach=n,__reflect(n.prototype,"Peach",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.img.texture=RES.getRes("sandia_png"),e.img_part1.texture=RES.getRes("sandia-1_png"),e.img_part2.texture=RES.getRes("sandia-2_png"),e.initRotation=85,e.rotationIndex=1,e.splashColor=16711680,e.setSize(),e}return __extends(e,t),e}(BaseFruit);window.Sandia=n,__reflect(n.prototype,"Sandia",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.prePointX=-1,e.prePointY=-1,e.init(),e}return __extends(e,t),e.prototype.init=function(){this.timer=new egret.Timer(2100,0),this.timer.addEventListener(egret.TimerEvent.TIMER,this.popupFruit,this),this.timer.start(),egret.setTimeout(function(){this.parent.touchEnabled=!0,this.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.collideDetction,this),this.parent.addEventListener(egret.TouchEvent.TOUCH_END,this.moveEnd,this)},this,2100)},e.prototype.popupFruit=function(){this.fruitNum=Math.ceil(3*Math.random()),this.fruitArray=[];for(var t=[ClassName.APPLE,ClassName.BANANA,ClassName.BASAHA,ClassName.PEACH,ClassName.SANDIA,ClassName.BOOM],e=0;e<this.fruitNum;e++){var n=t[Math.floor(6*Math.random())]();this.fruitArray.push(n),this.addChild(n)}},e.prototype.moveEnd=function(){this.prePointX=-1,this.prePointY=-1},e.prototype.collideDetction=function(t){for(var e=0;e<this.fruitNum;e++)if(!this.fruitArray[e].cutIndex){var n=this.fruitArray[e].hitTextPoint(t.stageX,t.stageY,this);n&&(this.fruitArray[e].cutFruit(),this.setSplitRotation(t.stageX,t.stageY,this.fruitArray[e]))}this.prePointX=t.stageX,this.prePointY=t.stageY},e.prototype.setSplitRotation=function(t,e,n){n.splitBitmap&&(-1==this.prePointX?n.splitBitmap.rotation=0:this.prePointX==t?n.splitBitmap.rotation=90:n.splitBitmap.rotation=57.3*Math.atan((e-this.prePointY)/(e-this.prePointX)),n.img_part1.rotation=n.img_part2.rotation+=180*n.rotationIndex)},e.getInstance=function(){return void 0==this._instance&&(this._instance=new e),this._instance},e.destroyInstance=function(){this._instance=void 0},e}(egret.DisplayObjectContainer);window.GameContainer=n,__reflect(n.prototype,"GameContainer",[])},function(t,e){var n=function(){function t(){this.registObserver()}return t.prototype.registObserver=function(){Observer.getInstance().regist(Commands.ADD_SCORE,this.addScore,this),Observer.getInstance().regist(Commands.ADD_FAILED,this.addFailed,this),Observer.getInstance().regist(Commands.GAME_OVER,this.gameOver,this)},t.prototype.addScore=function(){var t=FruitNewGamePage.getInstance();t.scoreCount+=1,t.gameScore.text=String(t.scoreCount)},t.prototype.addFailed=function(){var t=FruitNewGamePage.getInstance();if(t.failedCount+=1,1==t.failedCount){egret.Tween.get(t.gameXF).to({scaleX:1,scaleY:1},200,egret.Ease.backOut)}else if(2==t.failedCount){egret.Tween.get(t.gameXXF).to({scaleX:1,scaleY:1},200,egret.Ease.backOut)}else if(3==t.failedCount){egret.Tween.get(t.gameXXXF).to({scaleX:1,scaleY:1},200,egret.Ease.backOut);Observer.getInstance().fire(Commands.GAME_OVER)}},t.prototype.gameOver=function(){var t=GameContainer.getInstance();t.timer.stop(),this.fruitNewGamePage=FruitNewGamePage.getInstance();egret.Tween.get(this.fruitNewGamePage.gameover).to({scaleX:1,scakeY:1,alert:1},500,egret.Ease.backOut);this.fruitNewGamePage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.quitGamePage,this)},t.prototype.quitGamePage=function(){this.fruitNewGamePage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.quitGamePage,this)},t}();window.GameManager=n,__reflect(n.prototype,"GameManager",[])},function(t,e){var n=function(){function t(){this._messages=[]}return t.prototype.regist=function(t,e,n){var i={fn:e,content:n};"undefined"==typeof this._messages[t]?this._messages[t]=[i]:this._messages[t].push(i)},t.prototype.fire=function(t,e){if(this._messages[t])for(var n={commandKey:t,args:e||{}},i=0;i<this._messages[t].lenhth;i++)this._messages[t][i].fn.call(this._messages[t][i].content,n)},t.prototype.remove=function(t,e,n){var i={fn:e,content:n};if(this._messages[t]instanceof Array)for(var r=this._messages[t].length-1;r>=0;r--)this._messages[t][r]===i&&this._messages[t].splice(r,1)},t.getInstance=function(){return void 0===this._instance&&(this._instance=new t),this._instance},t}();window.Observer=n,__reflect(n.prototype,"Observer",[])},function(t,e){var n=function(){function t(){this.registObserver()}return t.prototype.registObserver=function(){Observer.getInstance().regist(Commands.OPEN_NEWGAME,this.openNewGame,this),Observer.getInstance().regist(Commands.CLOSE_NEWGAME,this.closeNewGame,this),Observer.getInstance().regist(Commands.OPEN_JODO,this.openJodo,this),Observer.getInstance().regist(Commands.CLOSE_JODO,this.closeJodo,this),Observer.getInstance().regist(Commands.OPEN_QUIT,this.openQuit,this),Observer.getInstance().regist(Commands.CLOSE_QUIT,this.closeQuit,this)},t.prototype.openNewGame=function(){var t=FruitHomePage.getInstance();t.channelBg.stop();var e=500;this.disappearHomePage(t,e),egret.setTimeout(function(){var e=t.parent;e.removeChild(t),FruitHomePage.destroyInstance();var n=FruitNewGamePage.getInstance();e.addChild(n)},this,e+100)},t.prototype.closeNewGame=function(){var t=FruitNewGamePage.getInstance(),e=RES.getRes("over_mp3"),n=e.play(0,1),i=1e3;this.disappearHomePage(t,i),egret.setTimeout(function(){n.stop();var e=t.parent;e.removeChild(t),FruitNewGamePage.destroyInstance();var i=FruitHomePage.getInstance();e.addChild(i)},this,i+100)},t.prototype.openJodo=function(){var t=FruitHomePage.getInstance();t.channelBg.stop();var e=500;this.disappearHomePage(t,e),egret.setTimeout(function(){var e=t.parent;e.removeChild(t),FruitHomePage.destroyInstance();var n=FruitJodoPage.getInstance();e.addChild(n)},this,e+100)},t.prototype.closeJodo=function(){var t=FruitJodoPage.getInstance(),e=500;this.disappearJodoPage(t,e),egret.setTimeout(function(){var e=t.parent;e.removeChild(t),FruitJodoPage.destroyInstance();var n=FruitHomePage.getInstance();e.addChild(n)},this,e+100)},t.prototype.openQuit=function(){var t=FruitHomePage.getInstance();t.channelBg.stopt();var e=500;this.disappearHomePage(t,e),egret.setTimeout(function(){var e=t.parent;e.removeChild(t),FruitHomePage.destroyInstance();var n=FruitQuitPage.getInstance();e.addChild(n)},this,e+100)},t.prototype.closeQuit=function(){var t=FruitQuitPage.getInstance(),e=500;this.disappearQuitPage(t,e),egret.setTimeout(function(){var e=t.parent;e.removeChild(t),FruitQuitPage.destroyInstance();var n=FruitHomePage.getInstance();e.addChild(n)},this,e+100)},t.prototype.disappearHomePage=function(t,e){egret.Tween.get(t.sparkle).to({scaleX:0,scaleY:0},e/2),egret.Tween.get(t.headerBg).to({y:-183},e),egret.Tween.get(t.tw_headerTitle).to({y:-155},e),egret.Tween.get(t.tw_headerSubTotle).to({y:-111},e),egret.Tween.get(t.tw_headerTip).to({x:-161,y:150},e),egret.Tween.get(t.ringDojo).to({scaleX:0,scaleY:0},e),egret.Tween.get(t.contentDojo).to({scaleX:0,scaleY:0},e),egret.Tween.get(t.contentNewGame).to({scaleX:0,scaleY:0},e),egret.Tween.get(t.tw_ringNewGame).to({scaleX:0,scaleY:0},e),egret.Tween.get(t.tw_contentQuit).to({scaleX:0,scaleY:0},e),egret.Tween.get(t.tw_ringQuit).to({scaleX:0,scaleY:0},e),egret.Tween.get(t.tw_contentTip).to({scaleX:0,scaleY:0},e)
},t.prototype.disappearNewGamePage=function(t,e){GameContainer.destroyInstance();egret.Tween.get(t.gameX).to({x:640},e),egret.Tween.get(t.gameXX).to({x:665},e),egret.Tween.get(t.gameXXX).to({x:695},e),egret.Tween.get(t.gameXF).to({x:651},e),egret.Tween.get(t.gameXXF).to({x:678.5},e),egret.Tween.get(t.gameXXXF).to({x:710},e),egret.Tween.get(t.tw_gameScoreIcon).to({x:-65},e),egret.Tween.get(t.tw_gmaeScore).to({x:-18},e),egret.Tween.get(t.tw_gameBestScore).to({x:-67},e),egret.Tween.get(t.tw_gameover).to({scaleX:0,scaleY:0,alpha:0})},t.prototype.disappearJodoPage=function(t,e){egret.Tween.get(t.jodoInfo).to({scaleX:0,scaleY:0},e)},t.prototype.disappearQuitPage=function(t,e){egret.Tween.get(t.quitInfo).to({scaleX:0,scleY:0},e)},t}();window.SceneManager=n,__reflect(n.prototype,"SceneManager",[])},function(t,e){var n=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.getInstance=function(){return void 0===this._instance&&(this._instance=new e),this._instance},e}(eui.Component);window.BaseScene=n,__reflect(n.prototype,"BaseScene",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.skinName="ersource/eui_skins/eui/HomePage.exml",e.init(),e}return __extends(e,t),e.prototype.init=function(){this.addEffects(),this.addEvents(),this.addBgSound()},e.prototype.addEffects=function(){var t=700,e=1e3,n=200,i=300;egret.Tween.get(this.headerBg).to({y:0},t,egret.Ease.circOut),egret.Tween.get(this.headerTitle).to({y:0},t,egret.Ease.circOut);egret.setTimeout(function(){egret.Tween.get(this.headerSubTitle).to({y:40},e,egret.Ease.elasticOut)},this,t),egret.setTimeout(function(){egret.Tween.get(this.headerTip).to({x:0,y:127},n,egret.Ease.circOut)},this,t+e-n),egret.setTimeout(function(){egret.Tween.get(this.ringDojo).to({scaleX:1,scaleY:1},i,egret.Ease.circOut),egret.Tween.get(this.contentDojo).to({scaleX:1,scaleY:1},i,egret.Ease.circOut),egret.Tween.get(this.contentNewGame).to({scaleX:1,scaleY:1},i,egret.Ease.circOut),egret.Tween.get(this.ringNewGame).to({scaleX:1,scaleY:1},i,egret.Ease.circOut),egret.Tween.get(this.contentQuit).to({scaleX:1,scaleY:1},i,egret.Ease.circOut),egret.Tween.get(this.ringQuit).to({scaleX:1,scaleY:1},i,egret.Ease.circOut),egret.Tween.get(this.contentTip).to({scaleX:1,scaleY:1},i,egret.Ease.circOut)},this,t+e),egret.setTimeout(function(){Effects.floatUpdown(this.contentTip,500,!0),Effects.rotate(this.ringDojo,32e3,!0,!1),Effects.rotate(this.contentDojo,24e3,!0,!1),Effects.rotate(this.ringNewGame,3e4,!0,!1),Effects.rotate(this.contentNewGame,15e3,!0,!1),Effects.rotate(this.ringQuit,2e4,!0,!0),this.sparkle=new Sparkle(30),this.sparkle.x=this.contentQuit.x-this.contentQuit.width/2+5,this.sparkle.y=this.contentQuit.y-this.contentQuit.height/2+5,this.addChild(this.sparkle)},this,t+e+i)},e.prototype.addEvents=function(){this.contentNewGame.touchEnabled=!0,this.contentNewGame.once(egret.TouchEvent.TOUCH_TAP,function(){Observer.getInstance().fire(Commands.OPEN_NEWGAME)},this),this.contentDojo.touchEnabled=!0,this.contentDojo.once(egret.TouchEvent.TOUCH_TAP,function(){Observer.getInstance().fire(Commands.OPEN_JODO)},this),this.contentQuit.touchEnabled=!0,this.contentQuit.once(egret.TouchEvent.TOUCH_TAP,function(){Observer.getInstance().fire(Commands.OPEN_QUIT)},this)},e.prototype.addBgSound=function(){var t=RES.getRes("menu_mp3");this.channelBg=t.play(0,0)},e.getInstance=function(){return void 0===this._instance&&(this._instance=new e),this._instance},e.destroyInstance=function(){this._instance=void 0},e}(eui.Component);window.FruitHomePage=n,__reflect(n.prototype,"FruitHomePage",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/eui/JodoPage.exml",e.init(),e}return __extends(e,t),e.prototype.init=function(){this.addEffects(),this.addEvents()},e.prototype.addEffects=function(){var t=700;egret.Tween.get(this.jodoInfo).to({scaleX:1,scaleY:1},t,egret.Ease.backOut)},e.prototype.addEvents=function(){this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){Observer.getInstance().fire(Commands.CLOSE_JODO)},this)},e.getInstance=function(){return void 0===this._instance&&(this._instance=new e),this._instance},e.destroyInstance=function(){this._instance=void 0},e}(eui.Component);window.FruitJodoPage=n,__reflect(n.prototype,"FruitJodoPage",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/eui/NewGamePage.exml",e.init(),e}return __extends(e,t),e.prototype.init=function(){this.addEffects(),this.addStarSound(),this.scoreCount=this.failedCount=0,this.gameContainer=GameContainer.getInstance(),this.gameContainer.width=this.width,this.gameContainer.height=this.height,this.addChild(this.gameContainer)},e.prototype.addEffects=function(){var t=700;egret.Tween.get(this.gameX).to({x:545},t,egret.Ease.backOut),egret.Tween.get(this.gameXX).to({x:570},t,egret.Ease.backOut),egret.Tween.get(this.gameXXX).to({x:600},t,egret.Ease.backOut),egret.Tween.get(this.gameScoreIcon).to({x:11},t,egret.Ease.backOut),egret.Tween.get(this.gameScore).to({x:58},t,egret.Ease.backOut),egret.Tween.get(this.gameBestScore).to({x:9},t,egret.Ease.backOut)},e.prototype.addStarSound=function(){var t=RES.getRes("start_mp3");t.play(0,1)},e.getInstance=function(){return void 0===this._instance&&(this._instance=new e),this._instance},e.destroyInstance=function(){this._instance=void 0},e}(eui.Component);window.FruitNewGamePage=n,__reflect(n.prototype,"FruitNewGamePage",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/eui/QuitPage.exml",e.init(),e}return __extends(e,t),e.prototype.init=function(){this.addEffects(),this.addEvents()},e.prototype.addEffects=function(){var t=700;egret.Tween.get(this.quitInfo).to({scaleX:1,scaleY:1},t,egret.Ease.backOut)},e.prototype.addEvents=function(){this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){Observer.getInstance().fire(Commands.CLOSE_QUIT)},this)},e.getInstance=function(){return void 0===this._instance&&(this._instance=new e),this._instance},e.destroyInstance=function(){this._instance=void 0},e}(eui.Component);window.FruitQuitPage=n,__reflect(n.prototype,"FruitQuitPage",[])}]);