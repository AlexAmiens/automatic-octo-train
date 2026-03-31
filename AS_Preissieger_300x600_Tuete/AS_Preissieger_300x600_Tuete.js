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
p.nominalBounds = new cjs.Rectangle(0,0,364,392);


(lib.AS_KuMo_Siegel = function() {
	this.initialize(img.AS_KuMo_Siegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,398);


(lib.AS_Logo_ohneGFA_Kopie_8 = function() {
	this.initialize(img.AS_Logo_ohneGFA_Kopie_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,146);


(lib.BEZAHLBAR = function() {
	this.initialize(img.BEZAHLBAR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,46);


(lib.BLEIBEN_MUSS = function() {
	this.initialize(img.BLEIBEN_MUSS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,47);


(lib.DER_ALDI_PREIS = function() {
	this.initialize(img.DER_ALDI_PREIS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,47);


(lib.Ebene0 = function() {
	this.initialize(img.Ebene0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.GFA = function() {
	this.initialize(img.GFA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,412,586);


(lib.Legal_Text = function() {
	this.initialize(img.Legal_Text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,43);


(lib.Rechteck = function() {
	this.initialize(img.Rechteck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,69);


(lib.Rechteck_Kopie = function() {
	this.initialize(img.Rechteck_Kopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,382,69);


(lib.Rechteck_Kopie_2 = function() {
	this.initialize(img.Rechteck_Kopie_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,69);


(lib.Rechteck_Kopie_3 = function() {
	this.initialize(img.Rechteck_Kopie_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,506,68);


(lib.Tuete = function() {
	this.initialize(img.Tuete);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,647);


(lib.VektorSmartobjekt = function() {
	this.initialize(img.VektorSmartobjekt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1157);


(lib.VektorSmartobjekt_1 = function() {
	this.initialize(img.VektorSmartobjekt_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.VektorSmartobjekt_2 = function() {
	this.initialize(img.VektorSmartobjekt_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,486);


(lib.VektorSmartobjekt_3 = function() {
	this.initialize(img.VektorSmartobjekt_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,479);


(lib.VektorSmartobjekt_4 = function() {
	this.initialize(img.VektorSmartobjekt_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,64);


(lib.WEIL_DER_ALLTAG = function() {
	this.initialize(img.WEIL_DER_ALLTAG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,526,47);// helper functions:

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


(lib.WeilderAlltagbezahlbarbleibenmuss = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(5,5,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rechteck
	this.instance_1 = new lib.Rechteck();
	this.instance_1.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BEZAHLBAR_
	this.instance_2 = new lib.BEZAHLBAR();
	this.instance_2.setTransform(7,44,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Rechteck_Kopie
	this.instance_3 = new lib.Rechteck_Kopie();
	this.instance_3.setTransform(0,38,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// BLEIBEN_MUSS_
	this.instance_4 = new lib.BLEIBEN_MUSS();
	this.instance_4.setTransform(7,82,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Rechteck_Kopie_2
	this.instance_5 = new lib.Rechteck_Kopie_2();
	this.instance_5.setTransform(0,76,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WeilderAlltagbezahlbarbleibenmuss, new cjs.Rectangle(0,0,276.5,110.5), null);


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
	this.instance = new lib.VektorSmartobjekt_1();
	this.instance.setTransform(-150,-124.8,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-124.8,300,249.6);


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
	this.instance = new lib.VektorSmartobjekt_1();
	this.instance.setTransform(-150,-124.8,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-124.8,300,249.6);


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
	this.instance = new lib.VektorSmartobjekt_2();
	this.instance.setTransform(-150,-121.3,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-121.3,300,242.6);


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
	this.instance = new lib.VektorSmartobjekt_2();
	this.instance.setTransform(-150,-121.3,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-121.3,300,242.6);


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
	this.instance = new lib.VektorSmartobjekt_3();
	this.instance.setTransform(-150,-119.55,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-119.5,300,239.1);


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
	this.instance = new lib.VektorSmartobjekt_3();
	this.instance.setTransform(-150,-119.55,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-119.5,300,239.1);


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
	this.instance = new lib.VektorSmartobjekt_4();
	this.instance.setTransform(-150,-15.95,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-15.9,300,31.9);


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
	this.instance = new lib.VektorSmartobjekt_4();
	this.instance.setTransform(-150,-15.95,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-15.9,300,31.9);


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
	this.instance = new lib.VektorSmartobjekt();
	this.instance.setTransform(-150,-288.8,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-288.8,300,577.6);


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
	this.instance = new lib.VektorSmartobjekt();
	this.instance.setTransform(-150,-288.8,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-288.8,300,577.6);


(lib.Tuete_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tüte
	this.instance = new lib.Tuete();
	this.instance.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tuete_1, new cjs.Rectangle(0,0,300,323), null);


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

	// AS_Logo_ohneGFA_Kopie_8
	this.instance = new lib.AS_Logo_ohneGFA_Kopie_8();
	this.instance.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,61,72.9), null);


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
	this.instance.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Legal_Text_1, new cjs.Rectangle(0,0,274.5,21.5), null);


(lib.KuMoSiegel = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KuMoSiegel, new cjs.Rectangle(0,0,247,198.7), null);


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
	this.instance.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GFA_1, new cjs.Rectangle(0,0,206,292.6), null);


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

	// AS_GFA_weiss_sRGB
	this.instance = new lib.AS_GFA_weiss_sRGB();
	this.instance.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EndLogo, new cjs.Rectangle(0,0,182,195.7), null);


(lib.DerAldiPreis = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(7,5,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rechteck_Kopie_3
	this.instance_1 = new lib.Rechteck_Kopie_3();
	this.instance_1.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DerAldiPreis, new cjs.Rectangle(0,0,253,34), null);


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
	this.shape.graphics.f("#FF0000").s().p("EgUYAglMAAAhBJMAoxAAAMAAABBJg");
	this.shape.setTransform(149.9899,299.9884,1.1494,1.439);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clickable_area, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib.AS_Preissieger_300x600_Tüte_gerastert = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(150,300,1,1,0,0,0,150,300);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(249));

	// End_Logo
	this.instance = new lib.EndLogo();
	this.instance.setTransform(149,289.9,0.075,1,0,0,0,91.4,97.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(204).to({_off:false},0).to({regX:91,scaleX:1},4).wait(41));

	// GFA
	this.instance_1 = new lib.GFA_1();
	this.instance_1.setTransform(403,305.2,1,1,0,0,0,103,146.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:151},9,cjs.Ease.quadIn).wait(46).to({regX:103.4,scaleX:0.075},4).to({_off:true},1).wait(45));

	// KuMo_Siegel
	this.instance_2 = new lib.KuMoSiegel();
	this.instance_2.setTransform(423.5,300.4,1,1,0,0,0,123.5,99.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({x:150.5},9,cjs.Ease.quadIn).wait(41).to({x:-123.5,y:295.85},9,cjs.Ease.quadIn).to({_off:true},1).wait(95));

	// Legal_Text
	this.instance_3 = new lib.Legal_Text_1();
	this.instance_3.setTransform(149.2,566.7,1,1,0,0,0,137.2,10.7);
	this.instance_3.alpha = 0.0117;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({alpha:1},9).wait(41).to({alpha:0.0117},9).to({_off:true},1).wait(95));

	// Tuete
	this.instance_4 = new lib.Tuete_1();
	this.instance_4.setTransform(150,438.5,0.5,0.5,0,0,0,150,161.5);
	this.instance_4.alpha = 0.25;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).wait(41).to({x:-150},9,cjs.Ease.quadIn).to({_off:true},1).wait(145));

	// Logo
	this.instance_5 = new lib.Logo();
	this.instance_5.setTransform(333.5,62.05,1,1,0,0,0,30.5,36.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({x:45.5,y:58.5},10,cjs.Ease.quadIn).to({_off:true},176).wait(45));

	// Weil_der_Alltag_bezahlbar_bleiben_muss
	this.instance_6 = new lib.WeilderAlltagbezahlbarbleibenmuss();
	this.instance_6.setTransform(438.2,178.75,1,1,0,0,0,138.2,55.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:150.2,y:175.2},10,cjs.Ease.quadIn).wait(66).to({alpha:0.0117},9,cjs.Ease.quadOut).to({_off:true},1).wait(145));

	// Der_Aldi_Preis
	this.instance_7 = new lib.DerAldiPreis();
	this.instance_7.setTransform(433.1,247.35,1,1,0,0,0,126.5,16.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({x:138.5,y:250.9},14,cjs.Ease.quadIn).wait(46).to({alpha:0.0117},9,cjs.Ease.quadOut).to({_off:true},1).wait(145));

	// Vektor_Smartobjekt
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(150,60.8);

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(150,295.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:295.8},18,cjs.Ease.quadIn).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},18,cjs.Ease.quadIn).wait(21).to({startPosition:0},0).to({scaleX:1.05,scaleY:1.05,x:149.95,y:295.75},14).wait(91).to({startPosition:0},0).to({scaleX:1,scaleY:1},14).wait(91));

	// Vektor_Smartobjekt_4
	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(150,15.95);

	this.instance_11 = new lib.Tween4("synched",0);
	this.instance_11.setTransform(150,15.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},18,cjs.Ease.quadIn).wait(231));

	// Vektor_Smartobjekt_3
	this.instance_12 = new lib.Tween5("synched",0);
	this.instance_12.setTransform(150,378.55);

	this.instance_13 = new lib.Tween6("synched",0);
	this.instance_13.setTransform(150,469.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,y:469.55},18,cjs.Ease.quadIn).wait(231));

	// Vektor_Smartobjekt_2
	this.instance_14 = new lib.Tween7("synched",0);
	this.instance_14.setTransform(150,444.3);

	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.setTransform(150,471.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,y:471.3},18,cjs.Ease.quadIn).wait(231));

	// Vektor_Smartobjekt_1
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.setTransform(150,474.8);

	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.setTransform(150,474.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},18,cjs.Ease.quadIn).wait(231));

	// Ebene_0
	this.instance_18 = new lib.Ebene0();
	this.instance_18.setTransform(0,0,0.5,0.4992);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},1).wait(248));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150,72,726.5,528);
// library properties:
lib.properties = {
	id: 'C3929E3A5D884BD09A406C1881B4D9F6',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AS_GFA_weiss_sRGB.png", id:"AS_GFA_weiss_sRGB"},
		{src:"images/AS_KuMo_Siegel.png", id:"AS_KuMo_Siegel"},
		{src:"images/AS_Logo_ohneGFA_Kopie_8.png", id:"AS_Logo_ohneGFA_Kopie_8"},
		{src:"images/BEZAHLBAR.png", id:"BEZAHLBAR"},
		{src:"images/BLEIBEN_MUSS.png", id:"BLEIBEN_MUSS"},
		{src:"images/DER_ALDI_PREIS.png", id:"DER_ALDI_PREIS"},
		{src:"images/Ebene0.jpg", id:"Ebene0"},
		{src:"images/GFA.png", id:"GFA"},
		{src:"images/Legal_Text.png", id:"Legal_Text"},
		{src:"images/Rechteck.png", id:"Rechteck"},
		{src:"images/Rechteck_Kopie.png", id:"Rechteck_Kopie"},
		{src:"images/Rechteck_Kopie_2.png", id:"Rechteck_Kopie_2"},
		{src:"images/Rechteck_Kopie_3.png", id:"Rechteck_Kopie_3"},
		{src:"images/Tuete.png", id:"Tuete"},
		{src:"images/VektorSmartobjekt.png", id:"VektorSmartobjekt"},
		{src:"images/VektorSmartobjekt_1.jpg", id:"VektorSmartobjekt_1"},
		{src:"images/VektorSmartobjekt_2.png", id:"VektorSmartobjekt_2"},
		{src:"images/VektorSmartobjekt_3.png", id:"VektorSmartobjekt_3"},
		{src:"images/VektorSmartobjekt_4.jpg", id:"VektorSmartobjekt_4"},
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
an.compositions['C3929E3A5D884BD09A406C1881B4D9F6'] = {
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