window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","HomePage":"resource/eui_skins/eui/HomePage.exml","JodoPage":"resource/eui_skins/eui/JodoPage.exml","NewGamePage":"resource/eui_skins/eui/NewGamePage.exml","QuitOage":"resource/eui_skins/eui/QuitOage.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/HomePage.exml'] = window.HomePage = (function (_super) {
	__extends(HomePage, _super);
	function HomePage() {
		_super.call(this);
		this.skinParts = ["headerBg","headerTitle","headerSubTitle","headerTip","ringDojo","ringNewGame","ringQuit","contentNewGame","contentQuit","contentDojo","contentTip"];
		
		this.height = 480;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headerBg_i(),this.headerTitle_i(),this.headerSubTitle_i(),this.headerTip_i(),this.ringDojo_i(),this.ringNewGame_i(),this.ringQuit_i(),this.contentNewGame_i(),this.contentQuit_i(),this.contentDojo_i(),this.contentTip_i()];
	}
	var _proto = HomePage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "background_jpg";
		return t;
	};
	_proto.headerBg_i = function () {
		var t = new eui.Image();
		this.headerBg = t;
		t.source = "home-mask_png";
		t.x = 0;
		t.y = -183;
		return t;
	};
	_proto.headerTitle_i = function () {
		var t = new eui.Image();
		this.headerTitle = t;
		t.source = "logo_png";
		t.x = 18;
		t.y = -135;
		return t;
	};
	_proto.headerSubTitle_i = function () {
		var t = new eui.Image();
		this.headerSubTitle = t;
		t.source = "ninja_png";
		t.x = 315;
		t.y = -81;
		return t;
	};
	_proto.headerTip_i = function () {
		var t = new eui.Image();
		this.headerTip = t;
		t.source = "home-desc_png";
		t.x = -161;
		t.y = 150;
		return t;
	};
	_proto.ringDojo_i = function () {
		var t = new eui.Image();
		this.ringDojo = t;
		t.anchorOffsetX = 87.5;
		t.anchorOffsetY = 87.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "dojo_png";
		t.width = 175;
		t.x = 119;
		t.y = 323.5;
		return t;
	};
	_proto.ringNewGame_i = function () {
		var t = new eui.Image();
		this.ringNewGame = t;
		t.anchorOffsetX = 97.5;
		t.anchorOffsetY = 97.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "new-game_png";
		t.x = 330.5;
		t.y = 318.5;
		return t;
	};
	_proto.ringQuit_i = function () {
		var t = new eui.Image();
		this.ringQuit = t;
		t.anchorOffsetX = 70.5;
		t.anchorOffsetY = 70.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "quit_png";
		t.x = 541.5;
		t.y = 372.5;
		return t;
	};
	_proto.contentNewGame_i = function () {
		var t = new eui.Image();
		this.contentNewGame = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 42.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "sandia_png";
		t.x = 331.5;
		t.y = 319;
		return t;
	};
	_proto.contentQuit_i = function () {
		var t = new eui.Image();
		this.contentQuit = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 34;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "boom_png";
		t.x = 544.5;
		t.y = 372.5;
		return t;
	};
	_proto.contentDojo_i = function () {
		var t = new eui.Image();
		this.contentDojo = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 29.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "peach_png";
		t.x = 120;
		t.y = 322.5;
		return t;
	};
	_proto.contentTip_i = function () {
		var t = new eui.Image();
		this.contentTip = t;
		t.anchorOffsetX = -38;
		t.anchorOffsetY = 103;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "new_png";
		t.x = 120;
		t.y = 323;
		return t;
	};
	return HomePage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/JodoPage.exml'] = window.JodoPage = (function (_super) {
	__extends(JodoPage, _super);
	function JodoPage() {
		_super.call(this);
		this.skinParts = ["jodoInfo"];
		
		this.height = 480;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.jodoInfo_i()];
	}
	var _proto = JodoPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	_proto.jodoInfo_i = function () {
		var t = new eui.Image();
		this.jodoInfo = t;
		t.anchorOffsetX = 214.5;
		t.anchorOffsetY = 26.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "developing_png";
		t.x = 320;
		t.y = 240;
		return t;
	};
	return JodoPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/NewGamePage.exml'] = window.NewGamePage = (function (_super) {
	__extends(NewGamePage, _super);
	function NewGamePage() {
		_super.call(this);
		this.skinParts = ["gameX","gameXX","gameXXX","gameXF","gameXXF","gameXXXF","gameScoreIcon","gameScore","gameBestScore","gameover"];
		
		this.height = 480;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.gameX_i(),this.gameXX_i(),this.gameXXX_i(),this.gameXF_i(),this.gameXXF_i(),this.gameXXXF_i(),this.gameScoreIcon_i(),this.gameScore_i(),this.gameBestScore_i(),this.gameover_i()];
	}
	var _proto = NewGamePage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	_proto.gameX_i = function () {
		var t = new eui.Image();
		this.gameX = t;
		t.source = "x_png";
		t.x = 640;
		t.y = 4.5;
		return t;
	};
	_proto.gameXX_i = function () {
		var t = new eui.Image();
		this.gameXX = t;
		t.source = "xx_png";
		t.x = 665;
		t.y = 6;
		return t;
	};
	_proto.gameXXX_i = function () {
		var t = new eui.Image();
		this.gameXXX = t;
		t.source = "xxx_png";
		t.x = 695;
		t.y = 7;
		return t;
	};
	_proto.gameXF_i = function () {
		var t = new eui.Image();
		this.gameXF = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "xf_png";
		t.x = 556;
		t.y = 14;
		return t;
	};
	_proto.gameXXF_i = function () {
		var t = new eui.Image();
		this.gameXXF = t;
		t.anchorOffsetX = 13.5;
		t.anchorOffsetY = 13;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "xxf_png";
		t.x = 583.5;
		t.y = 19;
		return t;
	};
	_proto.gameXXXF_i = function () {
		var t = new eui.Image();
		this.gameXXXF = t;
		t.anchorOffsetX = 16;
		t.anchorOffsetY = 16;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "xxxf_png";
		t.x = 616;
		t.y = 23;
		return t;
	};
	_proto.gameScoreIcon_i = function () {
		var t = new eui.Image();
		this.gameScoreIcon = t;
		t.source = "score_png";
		t.x = -65;
		t.y = 4.5;
		return t;
	};
	_proto.gameScore_i = function () {
		var t = new eui.Label();
		this.gameScore = t;
		t.bold = true;
		t.text = "0";
		t.textColor = 0xf98e07;
		t.x = -18;
		t.y = 8;
		return t;
	};
	_proto.gameBestScore_i = function () {
		var t = new eui.Label();
		this.gameBestScore = t;
		t.size = 15;
		t.text = "BEST 999";
		t.textColor = 0xf96a07;
		t.x = -67;
		t.y = 42;
		return t;
	};
	_proto.gameover_i = function () {
		var t = new eui.Image();
		this.gameover = t;
		t.alpha = 0;
		t.anchorOffsetX = 245;
		t.anchorOffsetY = 42.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game-over_png";
		t.x = 320;
		t.y = 240;
		return t;
	};
	return NewGamePage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/QuitPage.exml'] = window.QuitPage = (function (_super) {
	__extends(QuitPage, _super);
	function QuitPage() {
		_super.call(this);
		this.skinParts = ["quitInfo"];
		
		this.height = 480;
		this.width = 640;
		this.elementsContent = [this.quitInfo_i()];
	}
	var _proto = QuitPage.prototype;

	_proto.quitInfo_i = function () {
		var t = new eui.Image();
		this.quitInfo = t;
		t.anchorOffsetX = 214.5;
		t.anchorOffsetY = 26.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "developing_png";
		t.x = 320;
		t.y = 240;
		return t;
	};
	return QuitPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);