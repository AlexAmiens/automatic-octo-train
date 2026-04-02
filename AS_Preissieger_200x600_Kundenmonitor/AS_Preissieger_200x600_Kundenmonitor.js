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



(lib.AS_GFA_weiss_sRGB = function() {
	this.initialize(img.AS_GFA_weiss_sRGB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,300);


(lib.AS_Logo_ohneGFA = function() {
	this.initialize(img.AS_Logo_ohneGFA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,146);


(lib.Blau = function() {
	this.initialize(img.Blau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,69);


(lib.Cyan = function() {
	this.initialize(img.Cyan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,1112);


(lib.DER_ALDI_PREIS = function() {
	this.initialize(img.DER_ALDI_PREIS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,30);


(lib.EINMAL_GUENSTIG = function() {
	this.initialize(img.EINMAL_GUENSTIG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,44);


(lib.Gelb = function() {
	this.initialize(img.Gelb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,1170);


(lib.GFA = function() {
	this.initialize(img.GFA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,449);


(lib.IMMER_GUENSTIG = function() {
	this.initialize(img.IMMER_GUENSTIG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,37);


(lib.Legal_Text = function() {
	this.initialize(img.Legal_Text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,58);


(lib.Orange = function() {
	this.initialize(img.Orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,1141);


(lib.Podest = function() {
	this.initialize(img.Podest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,825);


(lib.Rechteck_Kopie_2 = function() {
	this.initialize(img.Rechteck_Kopie_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,42);


(lib.Rechteck_Kopie_4 = function() {
	this.initialize(img.Rechteck_Kopie_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,47);


(lib.Rechteck_Kopie_5 = function() {
	this.initialize(img.Rechteck_Kopie_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,47);


(lib.Rot = function() {
	this.initialize(img.Rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,1129);// helper functions:

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


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AS_GFA_weiss_sRGB();
	this.instance.setTransform(-69.5,-75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-75,139,150);


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
	this.instance.setTransform(-100,-292.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-292.5,200,585);


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
	this.instance.setTransform(-100,-292.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-292.5,200,585);


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
	this.instance.setTransform(-100,-285.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-285.2,200,570.5);


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
	this.instance.setTransform(-100,-285.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-285.2,200,570.5);


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
	this.instance.setTransform(-100,-282.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-282.2,200,564.5);


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
	this.instance.setTransform(-100,-282.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-282.2,200,564.5);


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
	this.instance.setTransform(-100,-17.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-17.2,200,34.5);


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
	this.instance.setTransform(-100,-17.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-17.2,200,34.5);


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
	this.instance.setTransform(-100,-278,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-278,200,556);


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
	this.instance.setTransform(-100,-278,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-278,200,556);


(lib.Podest_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Podest();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Podest_1, new cjs.Rectangle(0,0,200,412.5), null);


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

	// AS_Logo_ohneGFA_Kopie_7
	this.instance = new lib.AS_Logo_ohneGFA();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,61,73), null);


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

	// Ebene_1
	this.instance = new lib.Legal_Text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Legal_Text_1, new cjs.Rectangle(0,0,176,29), null);


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

	// EINMAL_GÜNSTIG_
	this.instance = new lib.EINMAL_GUENSTIG();
	this.instance.setTransform(5,1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rechteck_Kopie_4
	this.instance_1 = new lib.Rechteck_Kopie_4();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// IMMER_GÜNSTIG__
	this.instance_2 = new lib.IMMER_GUENSTIG();
	this.instance_2.setTransform(5,27,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Rechteck_Kopie_5
	this.instance_3 = new lib.Rechteck_Kopie_5();
	this.instance_3.setTransform(0,25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Headline_1, new cjs.Rectangle(0,0,176,48.5), null);


(lib.GFA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// GFA
	this.instance = new lib.GFA();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GFA_1, new cjs.Rectangle(0,0,158,224.5), null);


(lib.deraldipreis = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(5,3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rechteck_Kopie_2
	this.instance_1 = new lib.Rechteck_Kopie_2();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.deraldipreis, new cjs.Rectangle(0,0,158.5,21), null);


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
	this.shape.graphics.f("#FF0000").s().p("EgP2AjFMAAAhGJIftAAMAAABGJg");
	this.shape.setTransform(99.9885,299.9854,0.9852,1.3365);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clickable_area, new cjs.Rectangle(0,0,200,600), null);


// stage content:
(lib.AS_Preissieger_200x600_Kundenmonitor_gerastert = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
		root.btn.on("click", function() {
		    window.open(window.clickTag);
		});
		
		// enableMouseOver auf Stage-Ebene
		AdobeAn.bootstrapCallback(function() {
		    stage.enableMouseOver(20);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(249));

	// actions
	this.btn = new lib.clickable_area();
	this.btn.name = "btn";
	this.btn.setTransform(100,300,1,1,0,0,0,100,300);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(249));

	// Logo
	this.instance = new lib.Logo();
	this.instance.setTransform(231.5,64.5,1,1,0,0,0,30.5,36.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:43.5},9,cjs.Ease.quadIn).wait(18).to({y:49.5},4).wait(57).to({y:64.5},5).wait(37).to({alpha:0.0117},5).to({_off:true},1).wait(94));

	// Headline_1
	this.instance_1 = new lib.Headline_1();
	this.instance_1.setTransform(288,158.2,1,1,0,0,0,88,24.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:100},9,cjs.Ease.quadIn).wait(66).to({alpha:0.0117},9,cjs.Ease.quadOut).to({_off:true},1).wait(145));

	// der_aldi_preis
	this.instance_2 = new lib.deraldipreis();
	this.instance_2.setTransform(279.2,193,1,1,0,0,0,79.2,10.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:91.2,y:195.5},9,cjs.Ease.quadIn).wait(51).to({alpha:0.0117},9,cjs.Ease.quadOut).to({_off:true},1).wait(145));

	// _AAuszeichnungen_beziehen_sich_auf_die_Branche__Lebensmittelmär
	this.instance_3 = new lib.Legal_Text_1();
	this.instance_3.setTransform(100,562.5,1,1,0,0,0,88,14.5);
	this.instance_3.alpha = 0.0117;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({alpha:1},10).wait(41).to({alpha:0.0117},9).to({_off:true},1).wait(145));

	// Podest
	this.instance_4 = new lib.Podest_1();
	this.instance_4.setTransform(100,309.25,0.5,0.5,0,0,0,100,206.3);
	this.instance_4.alpha = 0.1992;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).to({regY:206.2,scaleX:1,scaleY:1,y:309.2,alpha:1},10).wait(41).to({x:-100,y:307.2},9,cjs.Ease.quadIn).to({_off:true},1).wait(145));

	// GFA
	this.instance_5 = new lib.GFA_1();
	this.instance_5.setTransform(279,297.2,1,1,0,0,0,79,112.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({x:100,y:300.2},9,cjs.Ease.quadIn).wait(46).to({regX:79.4,scaleX:0.075},4).to({_off:true},1).wait(95));

	// AS_GFA_weiss_sRGB
	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.setTransform(100.5,300,0.075,1,0,0,0,0.7,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(154).to({_off:false},0).to({regX:0,scaleX:1},4).wait(91));

	// Cyan
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(100,-128);

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(100,294);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,y:294},18,cjs.Ease.quadIn).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},18,cjs.Ease.quadIn).wait(28).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,x:99.95,y:293.95},7).wait(50).to({startPosition:0},0).to({scaleX:1,scaleY:1},9).wait(137));

	// Blau
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(100,-422.75);

	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(100,17.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,y:17.25},18,cjs.Ease.quadIn).wait(231));

	// Rot
	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.setTransform(100,98.25);

	this.instance_12 = new lib.Tween6("synched",0);
	this.instance_12.setTransform(100,297.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,y:297.25},18,cjs.Ease.quadIn).wait(231));

	// Orange
	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.setTransform(100,248.25);

	this.instance_14 = new lib.Tween8("synched",0);
	this.instance_14.setTransform(100,300.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,y:300.25},18,cjs.Ease.quadIn).wait(231));

	// Gelb
	this.instance_15 = new lib.Tween9("synched",0);
	this.instance_15.setTransform(100,307.5);

	this.instance_16 = new lib.Tween10("synched",0);
	this.instance_16.setTransform(100,307.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},18,cjs.Ease.quadIn).wait(231));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-140,476,740);
// library properties:
lib.properties = {
	id: 'B43FFDE2A3AA4B69B1B52961C983A51A',
	width: 200,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AS_GFA_weiss_sRGB.png", id:"AS_GFA_weiss_sRGB"},
		{src:"images/AS_Logo_ohneGFA.png", id:"AS_Logo_ohneGFA"},
		{src:"images/Blau.jpg", id:"Blau"},
		{src:"images/Cyan.png", id:"Cyan"},
		{src:"images/DER_ALDI_PREIS.png", id:"DER_ALDI_PREIS"},
		{src:"images/EINMAL_GUENSTIG.png", id:"EINMAL_GUENSTIG"},
		{src:"images/Gelb.jpg", id:"Gelb"},
		{src:"images/GFA.png", id:"GFA"},
		{src:"images/IMMER_GUENSTIG.png", id:"IMMER_GUENSTIG"},
		{src:"images/Legal_Text.png", id:"Legal_Text"},
		{src:"images/Orange.png", id:"Orange"},
		{src:"images/Podest.png", id:"Podest"},
		{src:"images/Rechteck_Kopie_2.png", id:"Rechteck_Kopie_2"},
		{src:"images/Rechteck_Kopie_4.png", id:"Rechteck_Kopie_4"},
		{src:"images/Rechteck_Kopie_5.png", id:"Rechteck_Kopie_5"},
		{src:"images/Rot.png", id:"Rot"}
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
an.compositions['B43FFDE2A3AA4B69B1B52961C983A51A'] = {
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