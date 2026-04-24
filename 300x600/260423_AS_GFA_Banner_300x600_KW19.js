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



(lib._16MalinFolge = function() {
	this.initialize(img._16MalinFolge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,415,38);


(lib.A = function() {
	this.initialize(img.A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.AAuszeichnungenbeziehensichaufdieBrancheLebensmittelmaer = function() {
	this.initialize(img.AAuszeichnungenbeziehensichaufdieBrancheLebensmittelmaer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,36);


(lib.AS_GFA_Qualitaet_MoserRoth_rgb = function() {
	this.initialize(img.AS_GFA_Qualitaet_MoserRoth_rgb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.AS_GFA_weiss_sRGB = function() {
	this.initialize(img.AS_GFA_weiss_sRGB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,304);


(lib.AS_Logo_ohneGFAKopie = function() {
	this.initialize(img.AS_Logo_ohneGFAKopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,126);


(lib.Farbfuellung1 = function() {
	this.initialize(img.Farbfuellung1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.Farbfuellung2 = function() {
	this.initialize(img.Farbfuellung2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.Kundenmonitor_2025_ANAS_04_Preissieger = function() {
	this.initialize(img.Kundenmonitor_2025_ANAS_04_Preissieger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,260);


(lib.milch = function() {
	this.initialize(img.milch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.Rechteck = function() {
	this.initialize(img.Rechteck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,74);


(lib.Rechteck10 = function() {
	this.initialize(img.Rechteck10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,1173);


(lib.Rechteck11 = function() {
	this.initialize(img.Rechteck11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,370);


(lib.Rechteck_1 = function() {
	this.initialize(img.Rechteck_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,74);


(lib.undderpreis = function() {
	this.initialize(img.undderpreis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,44);


(lib.VektorSmartobjekt = function() {
	this.initialize(img.VektorSmartobjekt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,524,244);


(lib.VektorSmartobjekt_1 = function() {
	this.initialize(img.VektorSmartobjekt_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,35);


(lib.WEITEREANGEBOTE = function() {
	this.initialize(img.WEITEREANGEBOTE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,33);


(lib.wenndieQualitaetstimmt = function() {
	this.initialize(img.wenndieQualitaetstimmt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,127);// helper functions:

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


(lib.QUALITAET = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// und_der_preis_
	this.instance = new lib.undderpreis();
	this.instance.setTransform(37,466,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wenn_die_Qualitaet_stimmt
	this.instance_1 = new lib.wenndieQualitaetstimmt();
	this.instance_1.setTransform(23,103,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// AS_GFA_Qualitaet_Moser_Roth_rgb
	this.instance_2 = new lib.AS_GFA_Qualitaet_MoserRoth_rgb();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Rechteck_10
	this.instance_3 = new lib.Rechteck10();
	this.instance_3.setTransform(7,6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Farbfuellung_1
	this.instance_4 = new lib.Farbfuellung1();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.MILCHMA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_6
	this.instance = new lib.milch();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(60).to({_off:true},1).wait(144));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.GUTES = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vektor_Smartobjekt
	this.instance = new lib.VektorSmartobjekt();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262,122);


(lib.FARBE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Farbfuellung_2
	this.instance = new lib.Farbfuellung2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.CLICKABLE_AREA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AryUZMAAAgoxIXlAAMAAAAoxg");
	this.shape.setTransform(150.0036,300.0039,1.9868,2.2988);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CLICKABLE_AREA, new cjs.Rectangle(0,0,300,600), null);


(lib.AUSZECIHNUNG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Auszeichnung
	this.instance = new lib.AAuszeichnungenbeziehensichaufdieBrancheLebensmittelmaer();
	this.instance.setTransform(0,368,0.5,0.4993);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// _6_Mal_in_Folge
	this.instance_1 = new lib._16MalinFolge();
	this.instance_1.setTransform(32,11,0.5,0.4993);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Kundenmonitor_2025_ANAS_04_Preissieger
	this.instance_2 = new lib.Kundenmonitor_2025_ANAS_04_Preissieger();
	this.instance_2.setTransform(27,39,0.5,0.4993);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// A
	this.instance_3 = new lib.A();
	this.instance_3.setTransform(243,41,0.5,0.4993);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Rechteck_11
	this.instance_4 = new lib.Rechteck11();
	this.instance_4.setTransform(18,0,0.5,0.4993);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,386);


(lib.ANGEBOTE = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(50,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// WEITERE_ANGEBOTE
	this.instance_1 = new lib.WEITEREANGEBOTE();
	this.instance_1.setTransform(10,195,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Rechteck
	this.instance_2 = new lib.Rechteck();
	this.instance_2.setTransform(0,184,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Vektor_Smartobjekt
	this.instance_3 = new lib.VektorSmartobjekt_1();
	this.instance_3.setTransform(231,195,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Rechteck_1
	this.instance_4 = new lib.Rechteck_1();
	this.instance_4.setTransform(17,184,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,221);


// stage content:
(lib._260423_AS_GFA_Banner_600x1200_KW19 = function(mode,startPosition,loop,reversed) {
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

	// ACTION
	this.btn = new lib.CLICKABLE_AREA();
	this.btn.name = "btn";
	this.btn.setTransform(150,300,1,1,0,0,0,150,300);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(249));

	// LOGO
	this.instance = new lib.AS_Logo_ohneGFAKopie();
	this.instance.setTransform(14,14,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},199).wait(50));

	// QUALITAET
	this.instance_1 = new lib.QUALITAET("synched",0);
	this.instance_1.setTransform(150,300,0.9533,0.9767,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({scaleX:1,scaleY:1},0).to({x:-160},10,cjs.Ease.quadIn).to({_off:true},1).wait(194));

	// MILCHMA
	this.instance_2 = new lib.MILCHMA("synched",44);
	this.instance_2.setTransform(468.1,300,1,1,0,0,0,150,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({x:150,startPosition:54},10,cjs.Ease.quadIn).wait(40).to({startPosition:94},0).to({x:-168.1,startPosition:104},10,cjs.Ease.quadIn).to({_off:true},1).wait(144));

	// AUSZECIHNUNG
	this.instance_3 = new lib.AUSZECIHNUNG("synched",0);
	this.instance_3.setTransform(447.7,394,1,1,0,0,0,137,193);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({x:151},10,cjs.Ease.quadIn).wait(40).to({startPosition:0},0).to({x:-145.7},10,cjs.Ease.quadIn).to({_off:true},1).wait(94));

	// GUTES
	this.instance_4 = new lib.GUTES("synched",0);
	this.instance_4.setTransform(446,268,1,1,0,0,0,131,61);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},0).to({x:151},10,cjs.Ease.quadIn).wait(40).to({startPosition:0},0).to({scaleX:0.0538},5).to({_off:true},1).wait(49));

	// ANGEBOTE
	this.instance_5 = new lib.ANGEBOTE("synched",0);
	this.instance_5.setTransform(150.05,299.5,0.1152,1,0,0,0,122,110.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(199).to({_off:false},0).to({scaleX:1,x:150},6).wait(44));

	// FARBE
	this.instance_6 = new lib.FARBE("synched",0);
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(249));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-168.1,300,786.2,300);
// library properties:
lib.properties = {
	id: '06710825B7D447A4A550D7ECD93E3166',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_16MalinFolge.png", id:"_16MalinFolge"},
		{src:"images/A.png", id:"A"},
		{src:"images/AAuszeichnungenbeziehensichaufdieBrancheLebensmittelmaer.png", id:"AAuszeichnungenbeziehensichaufdieBrancheLebensmittelmaer"},
		{src:"images/AS_GFA_Qualitaet_MoserRoth_rgb.jpg", id:"AS_GFA_Qualitaet_MoserRoth_rgb"},
		{src:"images/AS_GFA_weiss_sRGB.png", id:"AS_GFA_weiss_sRGB"},
		{src:"images/AS_Logo_ohneGFAKopie.png", id:"AS_Logo_ohneGFAKopie"},
		{src:"images/Farbfuellung1.jpg", id:"Farbfuellung1"},
		{src:"images/Farbfuellung2.jpg", id:"Farbfuellung2"},
		{src:"images/Kundenmonitor_2025_ANAS_04_Preissieger.png", id:"Kundenmonitor_2025_ANAS_04_Preissieger"},
		{src:"images/milch.jpg", id:"milch"},
		{src:"images/Rechteck.png", id:"Rechteck"},
		{src:"images/Rechteck10.png", id:"Rechteck10"},
		{src:"images/Rechteck11.png", id:"Rechteck11"},
		{src:"images/Rechteck_1.png", id:"Rechteck_1"},
		{src:"images/undderpreis.png", id:"undderpreis"},
		{src:"images/VektorSmartobjekt.png", id:"VektorSmartobjekt"},
		{src:"images/VektorSmartobjekt_1.png", id:"VektorSmartobjekt_1"},
		{src:"images/WEITEREANGEBOTE.png", id:"WEITEREANGEBOTE"},
		{src:"images/wenndieQualitaetstimmt.png", id:"wenndieQualitaetstimmt"}
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
an.compositions['06710825B7D447A4A550D7ECD93E3166'] = {
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