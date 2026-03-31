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
p.nominalBounds = new cjs.Rectangle(0,0,242,260);


(lib.AS_KuMo_Siegel = function() {
	this.initialize(img.AS_KuMo_Siegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,271);


(lib.AS_Logo_ohneGFA_Kopie_2 = function() {
	this.initialize(img.AS_Logo_ohneGFA_Kopie_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,110);


(lib.BEZAHLBAR = function() {
	this.initialize(img.BEZAHLBAR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,28);


(lib.BLEIBEN_MUSS = function() {
	this.initialize(img.BLEIBEN_MUSS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,29);


(lib.DER_ALDI_PREIS = function() {
	this.initialize(img.DER_ALDI_PREIS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,29);


(lib.GFA = function() {
	this.initialize(img.GFA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,298);


(lib.Legal_Text = function() {
	this.initialize(img.Legal_Text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,43);


(lib.Rechteck = function() {
	this.initialize(img.Rechteck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,41);


(lib.Rechteck_Kopie = function() {
	this.initialize(img.Rechteck_Kopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,41);


(lib.Rechteck_Kopie_2 = function() {
	this.initialize(img.Rechteck_Kopie_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,42);


(lib.Rechteck_Kopie_3 = function() {
	this.initialize(img.Rechteck_Kopie_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,40);


(lib.Tuete = function() {
	this.initialize(img.Tuete);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,280);


(lib.VektorSmartobjekt = function() {
	this.initialize(img.VektorSmartobjekt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,457);


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
p.nominalBounds = new cjs.Rectangle(0,0,312,29);// helper functions:

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


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-125,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-125,299.29999999999995,250);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-125,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-125,299.29999999999995,250);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-121.5,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-121.5,299.29999999999995,243);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-121.5,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-121.5,299.29999999999995,243);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-119.75,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-119.7,299.29999999999995,239.5);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-119.75,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-119.7,299.29999999999995,239.5);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-16,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-16,299.29999999999995,32);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-16,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-16,299.29999999999995,32);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-114.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-114.2,299.29999999999995,228.5);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-149.65,-114.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-114.2,299.29999999999995,228.5);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-136.95,-10.75,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.9,-10.7,273.9,21.5);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AS_KuMo_Siegel();
	this.instance.setTransform(-83.55,-67.75,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-67.7,167.1,135.5);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AS_KuMo_Siegel();
	this.instance.setTransform(-83.55,-67.75,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-67.7,167.1,135.5);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rechteck_Kopie_3();
	this.instance.setTransform(-75.05,-10,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-10,150.1,20);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rechteck_Kopie_3();
	this.instance.setTransform(-75.05,-10,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-10,150.1,20);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DER_ALDI_PREIS();
	this.instance.setTransform(-70.85,-7.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-7.2,141.7,14.5);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DER_ALDI_PREIS();
	this.instance.setTransform(-70.85,-7.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-7.2,141.7,14.5);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rechteck_Kopie_2();
	this.instance.setTransform(-71.1,-10.5,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-10.5,142.2,21);


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
	this.instance = new lib.Rechteck_Kopie_2();
	this.instance.setTransform(-71.1,-10.5,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-10.5,142.2,21);


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
	this.instance = new lib.BLEIBEN_MUSS();
	this.instance.setTransform(-66.6,-7.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-7.2,133.2,14.5);


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
	this.instance = new lib.BLEIBEN_MUSS();
	this.instance.setTransform(-66.6,-7.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-7.2,133.2,14.5);


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
	this.instance = new lib.Rechteck_Kopie();
	this.instance.setTransform(-56.6,-10.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-10.2,113.30000000000001,20.5);


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
	this.instance = new lib.Rechteck_Kopie();
	this.instance.setTransform(-56.6,-10.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-10.2,113.30000000000001,20.5);


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
	this.instance = new lib.BEZAHLBAR();
	this.instance.setTransform(-52.1,-7,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-7,104.30000000000001,14);


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
	this.instance = new lib.BEZAHLBAR();
	this.instance.setTransform(-52.1,-7,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-7,104.30000000000001,14);


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
	this.instance = new lib.Rechteck();
	this.instance.setTransform(-81.8,-10.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-10.2,163.7,20.5);


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
	this.instance = new lib.Rechteck();
	this.instance.setTransform(-81.8,-10.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-10.2,163.7,20.5);


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
	this.instance = new lib.WEIL_DER_ALLTAG();
	this.instance.setTransform(-77.8,-7.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-7.2,155.7,14.5);


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
	this.instance = new lib.WEIL_DER_ALLTAG();
	this.instance.setTransform(-77.8,-7.25,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-7.2,155.7,14.5);


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

	// Ebene_1
	this.instance = new lib.Tuete();
	this.instance.setTransform(0,0,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tuete_1, new cjs.Rectangle(0,0,231,140), null);


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

	// AS_Logo_ohneGFA_Kopie_2
	this.instance = new lib.AS_Logo_ohneGFA_Kopie_2();
	this.instance.setTransform(0,0,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,45.9,55), null);


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
	this.instance.setTransform(0,0,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GFA_1, new cjs.Rectangle(0,0,104.8,149), null);


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
	this.instance.setTransform(0,0,0.4989,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EndLogo, new cjs.Rectangle(0,0,120.8,130), null);


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
	this.shape.graphics.f("#FF0000").s().p("A+xS1MAAAglpMA9jAAAMAAAAlpg");
	this.shape.setTransform(150.0147,124.9851,0.7615,1.0373);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clickable_area, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.AS_Preissieger_600x500_Tüte = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(150,125,1,1,0,0,0,150,125);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(249));

	// Logo
	this.instance = new lib.Logo();
	this.instance.setTransform(322.25,46.5,1,1,0,0,0,22.9,27.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:34.9},9,cjs.Ease.quadIn).wait(166).to({alpha:0.0313},9).to({_off:true},1).wait(45));

	// WEIL_DER_ALLTAG
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(441.8,30.25);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(154.8,30.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true,x:154.8},9,cjs.Ease.quadIn).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},9,cjs.Ease.quadIn).wait(66).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// Rechteck
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(442.8,30.25);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(155.8,30.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({_off:true,x:155.8},9,cjs.Ease.quadIn).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},9,cjs.Ease.quadIn).wait(66).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// BEZAHLBAR
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(417.1,52);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(130.1,52);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true,x:130.1},9,cjs.Ease.quadIn).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},9,cjs.Ease.quadIn).wait(66).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// Rechteck_Kopie
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.setTransform(417.6,52.25);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.setTransform(130.6,52.25);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({_off:true,x:130.6},9,cjs.Ease.quadIn).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},9,cjs.Ease.quadIn).wait(66).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// BLEIBEN_MUSS_
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.setTransform(431.6,75.25);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.setTransform(144.6,75.25);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({_off:true,x:144.6},9,cjs.Ease.quadIn).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},9,cjs.Ease.quadIn).wait(66).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// Rechteck_Kopie_2
	this.instance_11 = new lib.Tween11("synched",0);
	this.instance_11.setTransform(432.1,75.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween12("synched",0);
	this.instance_12.setTransform(145.1,75.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({_off:true,x:145.1},9,cjs.Ease.quadIn).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},9,cjs.Ease.quadIn).wait(66).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// DER_ALDI_PREIS_
	this.instance_13 = new lib.Tween13("synched",0);
	this.instance_13.setTransform(435.85,98.25);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween14("synched",0);
	this.instance_14.setTransform(148.85,98.25);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(34).to({_off:false},0).to({_off:true,x:148.85},15,cjs.Ease.quadIn).wait(200));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},15,cjs.Ease.quadIn).wait(45).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// Rechteck_Kopie_3
	this.instance_15 = new lib.Tween15("synched",0);
	this.instance_15.setTransform(436.05,98);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween16("synched",0);
	this.instance_16.setTransform(149.05,98);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(34).to({_off:false},0).to({_off:true,x:149.05},15,cjs.Ease.quadIn).wait(200));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(34).to({_off:false},15,cjs.Ease.quadIn).wait(45).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// Tüte
	this.instance_17 = new lib.Tuete_1();
	this.instance_17.setTransform(184.5,180,0.5,0.5,0,0,0,115.5,70);
	this.instance_17.alpha = 0.25;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(41).to({x:-75.45},9,cjs.Ease.quadIn).to({_off:true},1).wait(145));

	// _AAuszeichnungen_beziehen_sich_auf_die_Branche__Lebensmittelmär
	this.instance_18 = new lib.Tween19("synched",0);
	this.instance_18.setTransform(146.95,221.75);
	this.instance_18.alpha = 0.0313;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(99).to({_off:false},0).to({alpha:1},8).wait(37).to({startPosition:0},0).to({alpha:0.0117},9).to({_off:true},1).wait(95));

	// AS_KuMo_Siegel
	this.instance_19 = new lib.Tween17("synched",0);
	this.instance_19.setTransform(400.55,118.75);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween18("synched",0);
	this.instance_20.setTransform(161.55,118.75);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(94).to({_off:false},0).to({_off:true,x:161.55},9,cjs.Ease.quadIn).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(94).to({_off:false},9,cjs.Ease.quadIn).wait(41).to({startPosition:0},0).to({x:-83.6},9,cjs.Ease.quadIn).to({_off:true},1).wait(95));

	// GFA
	this.instance_21 = new lib.GFA_1();
	this.instance_21.setTransform(351.75,125.5,1,1,0,0,0,52.4,74.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(144).to({_off:false},0).to({x:159.4},9,cjs.Ease.quadIn).wait(45).to({regX:52.6,scaleX:0.075,x:159.35},5).to({_off:true},1).wait(45));

	// End_Logo
	this.instance_22 = new lib.EndLogo();
	this.instance_22.setTransform(150.35,125,0.075,1,0,0,0,61.4,65);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(204).to({_off:false},0).to({regX:60.4,scaleX:1,x:150.4},5).wait(40));

	// Vektor_Smartobjekt
	this.instance_23 = new lib.Tween20("synched",0);
	this.instance_23.setTransform(149.65,-114.75);

	this.instance_24 = new lib.Tween21("synched",0);
	this.instance_24.setTransform(149.65,121.25);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true,y:121.25},18,cjs.Ease.quadIn).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:false},18,cjs.Ease.quadIn).wait(21).to({startPosition:0},0).to({scaleX:1.13,scaleY:1.13},15).wait(90).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:149.6},14).wait(91));

	// Vektor_Smartobjekt_4
	this.instance_25 = new lib.Tween22("synched",0);
	this.instance_25.setTransform(149.65,-245);

	this.instance_26 = new lib.Tween23("synched",0);
	this.instance_26.setTransform(149.65,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).to({state:[{t:this.instance_26}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:true,y:16},18,cjs.Ease.quadIn).wait(231));

	// Vektor_Smartobjekt_3
	this.instance_27 = new lib.Tween24("synched",0);
	this.instance_27.setTransform(149.65,30.75);

	this.instance_28 = new lib.Tween25("synched",0);
	this.instance_28.setTransform(149.65,119.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.instance_28}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true,y:119.75},18,cjs.Ease.quadIn).wait(231));

	// Vektor_Smartobjekt_2
	this.instance_29 = new lib.Tween26("synched",0);
	this.instance_29.setTransform(149.65,95.5);

	this.instance_30 = new lib.Tween27("synched",0);
	this.instance_30.setTransform(149.65,121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_30}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({_off:true,y:121.5},18,cjs.Ease.quadIn).wait(231));

	// Vektor_Smartobjekt_1
	this.instance_31 = new lib.Tween28("synched",0);
	this.instance_31.setTransform(149.65,125);

	this.instance_32 = new lib.Tween29("synched",0);
	this.instance_32.setTransform(149.65,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31}]}).to({state:[{t:this.instance_32}]},18).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({_off:true},18,cjs.Ease.quadIn).wait(231));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-136,565.6,386.4);
// library properties:
lib.properties = {
	id: '8275B3F933CA46828EF2E62D96F1FBBA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AS_GFA_weiss_sRGB.png", id:"AS_GFA_weiss_sRGB"},
		{src:"images/AS_KuMo_Siegel.png", id:"AS_KuMo_Siegel"},
		{src:"images/AS_Logo_ohneGFA_Kopie_2.png", id:"AS_Logo_ohneGFA_Kopie_2"},
		{src:"images/BEZAHLBAR.png", id:"BEZAHLBAR"},
		{src:"images/BLEIBEN_MUSS.png", id:"BLEIBEN_MUSS"},
		{src:"images/DER_ALDI_PREIS.png", id:"DER_ALDI_PREIS"},
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
an.compositions['8275B3F933CA46828EF2E62D96F1FBBA'] = {
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