(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.AS_GFA_blau_sRGB = function() {
	this.initialize(img.AS_GFA_blau_sRGB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,302);


(lib.AS_KuMo_Siegel = function() {
	this.initialize(img.AS_KuMo_Siegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,241);


(lib.AS_Logo_ohneGFA = function() {
	this.initialize(img.AS_Logo_ohneGFA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,83);


(lib.BEZAHLBAR = function() {
	this.initialize(img.BEZAHLBAR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,39);


(lib.Blau = function() {
	this.initialize(img.Blau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1018,22);


(lib.BLEIBEN_MUSS = function() {
	this.initialize(img.BLEIBEN_MUSS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,40);


(lib.Cyan = function() {
	this.initialize(img.Cyan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1018,356);


(lib.DER_ALDI_PREIS = function() {
	this.initialize(img.DER_ALDI_PREIS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,40);


(lib.Gelb = function() {
	this.initialize(img.Gelb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1018,374);


(lib.GFASignet = function() {
	this.initialize(img.GFASignet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,298);


(lib.Legal_Text = function() {
	this.initialize(img.Legal_Text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,53);


(lib.Orange = function() {
	this.initialize(img.Orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1018,365);


(lib.Rechteck = function() {
	this.initialize(img.Rechteck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,58);


(lib.Rechteck_Kopie = function() {
	this.initialize(img.Rechteck_Kopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,58);


(lib.Rechteck_Kopie_2 = function() {
	this.initialize(img.Rechteck_Kopie_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,58);


(lib.Rechteck_Kopie_3 = function() {
	this.initialize(img.Rechteck_Kopie_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,429,58);


(lib.Rot = function() {
	this.initialize(img.Rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1018,361);


(lib.WEIL_DER_ALLTAG = function() {
	this.initialize(img.WEIL_DER_ALLTAG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,40);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Gelb();
	this.instance.setTransform(-254.5,-93.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-93.5,509,187);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Gelb();
	this.instance.setTransform(-254.5,-93.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-93.5,509,187);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Orange();
	this.instance.setTransform(-254.5,-91.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-91.2,509,182.5);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Orange();
	this.instance.setTransform(-254.5,-91.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-91.2,509,182.5);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Rot();
	this.instance.setTransform(-254.5,-90.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-90.2,509,180.5);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Rot();
	this.instance.setTransform(-254.5,-90.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-90.2,509,180.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Blau();
	this.instance.setTransform(-254.5,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-5.5,509,11);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Blau();
	this.instance.setTransform(-254.5,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-5.5,509,11);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Cyan();
	this.instance.setTransform(-254.5,-89,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-89,509,178);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Cyan();
	this.instance.setTransform(-254.5,-89,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-89,509,178);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// AS_Logo_ohneGFA
	this.instance = new lib.AS_Logo_ohneGFA();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,35,41.5), null);


(lib.Legal_Text_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _AAuszeichnungen_beziehen_sich_auf_die_Branche__Lebensmittelmär
	this.instance = new lib.Legal_Text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Legal_Text_1, new cjs.Rectangle(0,0,304.5,26.5), null);


(lib.KuMo_Siegel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// AS_KuMo_Siegel
	this.instance = new lib.AS_KuMo_Siegel();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KuMo_Siegel, new cjs.Rectangle(0,0,149,120.5), null);


(lib.Headline_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// WEIL_DER_ALLTAG
	this.instance = new lib.WEIL_DER_ALLTAG();
	this.instance.setTransform(5,5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rechteck
	this.instance_1 = new lib.Rechteck();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BEZAHLBAR_
	this.instance_2 = new lib.BEZAHLBAR();
	this.instance_2.setTransform(7,37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Rechteck_Kopie
	this.instance_3 = new lib.Rechteck_Kopie();
	this.instance_3.setTransform(0,33,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// BLEIBEN_MUSS_
	this.instance_4 = new lib.BLEIBEN_MUSS();
	this.instance_4.setTransform(7,69,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Rechteck_Kopie_2
	this.instance_5 = new lib.Rechteck_Kopie_2();
	this.instance_5.setTransform(0,65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Headline_1, new cjs.Rectangle(0,0,234,94), null);


(lib.GFA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// GFA_Signet_4x
	this.instance = new lib.GFASignet();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GFA, new cjs.Rectangle(0,0,104.5,149), null);


(lib.EndLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// AS_GFA_blau_sRGB
	this.instance = new lib.AS_GFA_blau_sRGB();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EndLogo, new cjs.Rectangle(0,0,140,151), null);


(lib.clickable_area = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgqVAP3IAA/tMBUrAAAIAAftg");
	this.shape.setTransform(256.019,96.0003,0.9447,0.9458);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clickable_area, new cjs.Rectangle(0,0,512,192), null);


(lib.ALDI_Preis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DER_ALDI_PREIS_
	this.instance = new lib.DER_ALDI_PREIS();
	this.instance.setTransform(7,4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rechteck_Kopie_3
	this.instance_1 = new lib.Rechteck_Kopie_3();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ALDI_Preis, new cjs.Rectangle(0,0,214.5,29), null);


// stage content:
(lib.AS_Banner_Preissieger_509x192 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		root.btn.cursor = "pointer";
		root.btn.on("click", function(evt) {
		    if (evt.nativeEvent.button === 0) {
		        window.open(window.clickTag);
		    }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(249));

	// actions
	this.btn = new lib.clickable_area();
	this.btn.name = "btn";
	this.btn.setTransform(255.9,96,1,1,0,0,0,256,96);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(249));

	// Headline_1
	this.instance = new lib.Headline_1();
	this.instance.setTransform(626,80,1,1,0,0,0,117,47);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:224},9,cjs.Ease.quadIn).wait(66).to({x:-117},9,cjs.Ease.quadIn).to({_off:true},1).wait(145));

	// ALDI_Preis
	this.instance_1 = new lib.ALDI_Preis();
	this.instance_1.setTransform(616.2,141.5,1,1,0,0,0,107.2,14.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:214.2,y:144.5},9,cjs.Ease.quadIn).wait(51).to({x:-126.8},9,cjs.Ease.quadIn).to({_off:true},1).wait(145));

	// Logo
	this.instance_2 = new lib.Logo();
	this.instance_2.setTransform(385.5,33.8,1,1,0,0,0,17.5,20.8);
	this.instance_2.alpha = 0.0117;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadIn).wait(66).to({y:28.8},9).wait(96).to({alpha:0.0117},4).wait(10).to({_off:true},1).wait(35));

	// KuMo_Siegel
	this.instance_3 = new lib.KuMo_Siegel();
	this.instance_3.setTransform(583.5,81.2,1,1,0,0,0,74.5,60.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({x:254.5},9,cjs.Ease.quadIn).wait(41).to({x:-74.5},9,cjs.Ease.quadIn).to({_off:true},1).wait(95));

	// Legal_Text
	this.instance_4 = new lib.Legal_Text_1();
	this.instance_4.setTransform(252.2,172.2,1,1,0,0,0,152.2,13.2);
	this.instance_4.alpha = 0.0117;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadIn).wait(41).to({alpha:0.0117},9,cjs.Ease.quadOut).to({_off:true},1).wait(95));

	// GFA
	this.instance_5 = new lib.GFA();
	this.instance_5.setTransform(561.2,95.5,1,1,0,0,0,52.2,74.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({x:255.2},9,cjs.Ease.quadIn).wait(46).to({regX:52.6,scaleX:0.075,x:255.25},4).to({_off:true},1).wait(45));

	// End_Logo
	this.instance_6 = new lib.EndLogo();
	this.instance_6.setTransform(254,93.5,0.075,1,0,0,0,70.7,75.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(204).to({_off:false},0).to({scaleX:1},4).wait(41));

	// Cyan
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(254.5,-89);

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(254.5,94);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,y:94},18,cjs.Ease.quadIn).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},18,cjs.Ease.quadIn).wait(76).to({startPosition:0},0).to({scaleX:1.11,scaleY:1.11,x:254.45,y:93.95},9).wait(96).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:254.5,y:94},14).wait(36));

	// Blau
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(254.5,-183.5);

	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(254.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,y:5.5},18,cjs.Ease.quadIn).wait(231));

	// Rot
	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.setTransform(254.5,29.25);

	this.instance_12 = new lib.Tween6("synched",0);
	this.instance_12.setTransform(254.5,95.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,y:95.25},18,cjs.Ease.quadIn).wait(231));

	// Orange
	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.setTransform(254.5,78.25);

	this.instance_14 = new lib.Tween8("synched",0);
	this.instance_14.setTransform(254.5,96.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,y:96.25},18,cjs.Ease.quadIn).wait(231));

	// Gelb
	this.instance_15 = new lib.Tween9("synched",0);
	this.instance_15.setTransform(254.5,98.5);

	this.instance_16 = new lib.Tween10("synched",0);
	this.instance_16.setTransform(254.5,98.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},18,cjs.Ease.quadIn).wait(231));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(20.5,-93,722.5,285.8);
// library properties:
lib.properties = {
	id: '8E831BE9D85842ED924E72CA04BBCA10',
	width: 509,
	height: 192,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AS_GFA_blau_sRGB.png", id:"AS_GFA_blau_sRGB"},
		{src:"images/AS_KuMo_Siegel.png", id:"AS_KuMo_Siegel"},
		{src:"images/AS_Logo_ohneGFA.png", id:"AS_Logo_ohneGFA"},
		{src:"images/BEZAHLBAR.png", id:"BEZAHLBAR"},
		{src:"images/Blau.jpg", id:"Blau"},
		{src:"images/BLEIBEN_MUSS.png", id:"BLEIBEN_MUSS"},
		{src:"images/Cyan.png", id:"Cyan"},
		{src:"images/DER_ALDI_PREIS.png", id:"DER_ALDI_PREIS"},
		{src:"images/Gelb.jpg", id:"Gelb"},
		{src:"images/GFASignet.png", id:"GFASignet"},
		{src:"images/Legal_Text.png", id:"Legal_Text"},
		{src:"images/Orange.png", id:"Orange"},
		{src:"images/Rechteck.png", id:"Rechteck"},
		{src:"images/Rechteck_Kopie.png", id:"Rechteck_Kopie"},
		{src:"images/Rechteck_Kopie_2.png", id:"Rechteck_Kopie_2"},
		{src:"images/Rechteck_Kopie_3.png", id:"Rechteck_Kopie_3"},
		{src:"images/Rot.png", id:"Rot"},
		{src:"images/WEIL_DER_ALLTAG.png", id:"WEIL_DER_ALLTAG"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8E831BE9D85842ED924E72CA04BBCA10'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;