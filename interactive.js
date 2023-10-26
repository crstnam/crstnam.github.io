(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"interactive_atlas_1", frames: [[0,722,2036,288],[0,1615,791,199],[793,1813,791,199],[807,1415,804,197],[807,1614,802,197],[0,1816,791,199],[0,1415,805,198],[0,1214,808,199],[810,1214,807,199],[814,1012,810,200],[0,1012,812,200],[0,0,1280,720]]},
		{name:"interactive_atlas_2", frames: [[0,1598,796,195],[798,1598,795,194],[0,801,789,198],[0,0,790,199],[0,1795,787,197],[803,603,799,196],[789,1795,787,197],[792,0,790,199],[0,201,790,199],[791,801,789,198],[792,201,790,199],[791,1001,788,198],[0,402,790,199],[0,1401,798,195],[800,1400,786,196],[0,1201,788,198],[790,1201,788,197],[792,402,790,199],[0,1001,789,198],[0,603,801,196]]},
		{name:"interactive_atlas_3", frames: [[0,395,1430,107],[787,198,793,193],[0,1675,787,191],[788,0,785,196],[0,504,784,195],[786,504,792,193],[789,1671,784,190],[786,699,784,194],[0,1091,790,192],[783,1285,779,192],[0,198,785,195],[783,1479,786,190],[0,1285,781,193],[785,895,782,194],[0,0,786,196],[792,1091,789,192],[0,701,783,194],[0,897,780,192],[0,1480,781,193]]},
		{name:"interactive_atlas_4", frames: [[0,384,781,189],[774,1338,771,187],[0,1715,774,186],[0,1525,771,187],[0,958,778,187],[0,0,778,191],[0,193,783,189],[0,1336,772,187],[785,193,777,190],[0,1147,777,187],[780,958,773,188],[773,1527,775,186],[0,575,780,188],[783,385,776,190],[0,765,774,189],[782,577,775,189],[780,0,778,191],[776,768,774,188],[776,1715,770,186],[779,1148,772,188]]},
		{name:"interactive_atlas_5", frames: [[0,750,768,185],[0,1684,768,184],[771,1675,767,184],[772,187,768,184],[0,1498,769,184],[0,937,768,185],[773,373,768,184],[772,0,772,185],[773,559,768,184],[770,1861,767,184],[771,745,768,184],[770,931,768,184],[0,188,769,186],[0,1124,768,185],[770,1117,768,184],[770,1303,768,184],[0,376,771,185],[0,563,769,185],[771,1489,768,184],[0,0,770,186],[0,1311,768,185]]},
		{name:"interactive_atlas_6", frames: [[0,0,1183,111],[0,113,1146,111],[0,226,1109,111],[0,339,1072,110],[0,451,1034,110],[1036,451,997,110],[1074,339,960,110],[1111,226,923,110],[726,563,885,110],[726,675,848,110],[0,787,811,110],[813,787,774,111],[0,899,738,111],[740,900,704,111],[0,1012,670,111],[672,1013,637,111],[1446,900,602,111],[1311,1013,568,111],[0,1126,760,79],[1185,0,612,172],[0,1411,417,94],[1613,563,421,100],[0,1966,445,73],[0,705,465,73],[419,1432,417,94],[1613,665,421,100],[838,1720,465,73],[838,1432,417,94],[1589,767,421,100],[1305,1720,465,73],[1257,1432,417,94],[762,1126,421,100],[838,1795,465,73],[0,1507,417,94],[1185,1126,421,100],[1305,1795,465,73],[419,1528,417,94],[1608,1126,421,100],[0,1816,465,73],[838,1528,417,94],[0,1207,421,100],[467,1870,465,73],[1257,1528,417,94],[423,1228,421,100],[934,1870,465,73],[0,1603,417,94],[846,1228,421,100],[1401,1870,465,73],[419,1624,417,94],[1269,1228,421,100],[0,1891,465,73],[838,1624,417,94],[0,1309,421,100],[467,1945,465,73],[1257,1624,417,94],[423,1330,421,100],[934,1945,465,73],[0,1699,417,94],[846,1330,421,100],[1401,1945,465,73],[419,1720,417,94],[1269,1330,421,100],[0,563,724,140]]},
		{name:"interactive_atlas_7", frames: [[277,613,668,17],[1191,460,804,38],[927,581,438,30],[0,540,648,26],[1191,500,320,79],[1513,500,296,57],[0,300,395,78],[0,0,445,73],[397,300,395,78],[447,0,445,73],[794,300,395,78],[894,0,445,73],[1191,300,395,78],[1341,0,445,73],[1588,300,395,78],[0,75,445,73],[447,75,445,73],[0,380,395,78],[894,75,445,73],[1341,75,445,73],[397,380,395,78],[0,150,445,73],[794,380,395,78],[447,150,445,73],[894,150,445,73],[1191,380,395,78],[1341,150,445,73],[1588,380,395,78],[0,225,445,73],[447,225,445,73],[0,460,395,78],[894,225,445,73],[397,460,395,78],[1341,225,445,73],[794,460,395,78],[650,540,275,60],[1513,559,275,60],[0,568,275,60]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_99 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c9bcac94_9f41_4677_bb54_e58ba4fa894d = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_028ce37d_20ec_4b99_bd71_d8b6123db823 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_030dde22_8314_4ee8_86e2_f8a753dd92f0 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_05090bc7_b8b5_444a_8748_a8aa69a8cb47 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_05f19895_d33f_4ad4_a572_50932493ba63 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_07a27758_58bc_4707_aa48_bfd357cee7c1 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_07a51f5b_4ad9_4134_b89f_613d558732bd = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_07b9e02b_9849_494a_ae5c_dbdffd369c47 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0925b421_6e8e_4d5f_9d9f_dcae5c5e42a9 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_10fb69e5_c153_4e16_85ba_1cd982089855 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_11a81725_7394_4b1d_b4a5_9c9b05e79684 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1a8060b2_91a8_4e01_976b_68e2c31856e9 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1c2a3b20_4f84_41bc_b00f_78d35a31b031 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1d78078b_7c4a_44cf_a3ed_0b5ba8043d64 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1fd9df82_7907_4dae_b2f6_c8518e483c86 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_25dd3e6d_bce4_4e8d_b067_e73f9ada74df = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_26cb56d2_4735_400b_a44c_256ff3a4201f = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_26ebfcb2_56f6_4865_a2ae_a04f0b651f20 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_27076113_7b2d_4923_997e_0b20bb7ff264 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2e8e47ac_347a_4921_b666_d939924f10a8 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_34402bb1_d5ae_45e3_a5f2_56625a4e0d57 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_377f027b_01ca_4972_b8ab_9221581d5afc = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3797dc8a_092e_4435_8174_329b48be34ec = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_38f1464a_f22b_4f89_8ae1_080462984ad2 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3d4b3b7b_fcce_46c0_962d_e5c9cb1007a9 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3eae56f1_c9f0_40bf_af41_2b38f8b3a1bb = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_44b9b88d_5dd0_4051_a015_dcfcde592f51 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_49df7a24_06ce_473b_81cc_e52f4d3a977a = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4a119839_dc79_4a10_be14_2dd664137344 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4bdf9928_8f50_465d_835a_1956740b02bd = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5a05f375_a67a_40e3_84d7_150a218b16fb = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5de461fe_320f_400d_970a_b98b50952070 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5e7dd8dd_41ed_4780_a7d1_b50c7a531741 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_64ecbe2e_33cb_41be_b938_2228e1dd0163 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_678af92e_427d_4f2f_ae8c_46098b755dd1 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6b033c84_0b0f_426b_9726_fdae667f15d6 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6b7e03d4_0756_423f_9e0a_ebd6e0839128 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6d423414_d40d_4c35_b0a8_3476c09c6317 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6fb50f32_879d_42a0_b5af_08a3242ac67e = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_71b0e59a_9b0c_4888_bb0e_d96340d1f242 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7481eb85_7e24_4e7d_86b0_77dfbe13a1b7 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7579c9e7_a672_4034_bf20_010f6ee8d910 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_77fc480d_3101_455b_9822_f76c3b77688f = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_79ce5e1b_ca86_4d91_9972_e6c36e8eb7af = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7abc84ce_1c87_407c_b532_c1a5389b542e = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7b4ba4f3_3a37_46bb_8a6d_ed650523db52 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_82ba114b_37fb_4154_9751_a5f901e61cb6 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_83e71165_e059_4da4_aaf7_1f49c8c7ba2e = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_85618301_2561_4a31_a072_f12fc9e0316d = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_857164f9_8e3f_4256_ae8c_c1a07fe84155 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_85d5ad9e_f031_4738_8391_696c4d46b198 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_86828c94_50f5_45e1_a5f1_5be7800a4614 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8785e1f2_3ca5_4752_9811_d4b5d288d14d = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_87f53995_1324_4c9d_80c4_fddb7a70aa71 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8ebc8331_1d2c_4895_b516_992e35a98cab = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_92550d65_ea0b_49d0_8177_5df1a34de32c = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_931555c4_2862_4b84_a71a_b8a10563809d = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_97669a33_1c69_40e7_948e_6e47d66eb4fb = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9a6b881d_1e46_4dde_bc9a_524e56997a94 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9e831d91_10d1_4561_82f5_e434ff830b28 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9f4b2cb7_d0b3_4163_8d15_ac5c2c67c526 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a5ac006b_0f08_4566_a8f4_7aa718d3f709 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a64cf5dc_d054_4387_b714_5d8a7b7ed99c = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a8c2030f_8838_40b0_aa65_2750608ab331 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_aa8028b2_e1e3_456c_bf71_f759d7243c32 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b1ef7967_96d9_4203_ac69_186fb5c7b0d4 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b5cd9333_f7b7_4b45_a54d_4317e43a8522 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_bbea6a35_7e55_4ec1_8469_d7dda37a5519 = function() {
	this.initialize(ss["interactive_atlas_6"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.BMP_bcc0d77e_fe8a_45f9_b6c9_264e72ca49d4 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c4d59918_e604_4cdf_9609_b2bab6d322d6 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c589a100_06f9_456d_891c_f21ae4d2996a = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c7d580e6_f7ca_48b1_9955_34ab5c7930d6 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ca3c3ea5_b5e4_4a20_ba4c_27f53a644682 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cdf3db43_5d89_4c75_8d5f_c5bf8d2becc2 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cf45db73_a90a_4150_b6d9_0a80d92af239 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d4dc6206_1f14_4eee_afe5_05cc74e7b3fa = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_da386047_d360_4d01_8a1f_f8bbb59dbb63 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_db361c00_e430_4668_a7c8_2ce1e0427063 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e01465ab_243c_4864_918e_91106d9b0b47 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e15afa35_80a3_425a_84b9_68d6a0fa8731 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e3211af1_9f57_41aa_8025_350c1c045ba7 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e4caa24a_7300_469b_831a_ce6d6543d88a = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e7bdbad8_4edf_4d09_a52b_9712140b38ec = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e81c7f38_03cd_4873_aef4_a1adbddd1837 = function() {
	this.initialize(ss["interactive_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_edade931_f5c3_4f6a_8068_6a5db8984527 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ee21ada5_c35a_4332_883a_ccea56d57417 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f031c3b1_4fcb_4cab_91d5_46b3f2ef29e9 = function() {
	this.initialize(ss["interactive_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f7db392a_d2f1_4ca2_a3ab_1e8658fd45ff = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fae2c426_9109_4b42_89f3_f54b30be82e1 = function() {
	this.initialize(ss["interactive_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ffb7a9b7_f37f_46da_a252_162e030dd924 = function() {
	this.initialize(ss["interactive_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Chrome = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.HoverButton = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.PressedButton = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.RestButton = function() {
	this.initialize(ss["interactive_atlas_7"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_bbea6a35_7e55_4ec1_8469_d7dda37a5519();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,724,140);


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("hover");
	}
	this.frame_2 = function() {
		playSound("press");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApyCUQgUgFgRgKIgLAKIgJACQgMAAgGgIQgIgHABgSIAAghQgBgRAIgIQAGgIAMAAQAIAAAGAFQAFAFADAKQAEALADAEQAHAHASAIQASAHAUAAQAiAAAUgPQAOgJAAgOQAAgJgGgIQgHgIgOgFIgrgKQgogIgVgKQgVgKgMgTQgMgTAAgWQAAgjAdgbQAegaAvAAQATAAARAEQAPAEAOAJQAJgJAJAAQAMAAAGAHQAHAIAAARIAAAlQAAASgHAHQgGAIgMAAQgJAAgGgGQgGgEgCgMQgCgMgEgGQgIgJgOgGQgOgGgRAAQgbAAgQAMQgPANAAANQAAAJAGAJQAHAIAMAFIAuALQAlAHAVAJQAUAIANATQANASABAbQAAAkgaAWQgiAcg0AAQgVAAgTgEgAINCRQgSAAgHgGQgIgHAAgLQAAgLAIgHQAHgHASAAIAhAAIAAi/Ig1AAIAAAvQgBARgGAIQgHAIgLAAQgKAAgIgIQgGgIgBgRIAAhgID/AAIAABgQAAARgHAIQgHAIgLAAQgKAAgIgIQgHgIAAgRIAAgvIg1AAIAAC/IAhAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAGgSAAgAGCCRQg8hcgngTIgxAAIAAA+IASAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAGgSAAIhLAAQgRAAgIgGQgDgDgCgEQgCAEgDADQgIAGgRAAIhCAAQgSAAgIgGQgHgHAAgLQAAgLAHgHQAIgHASAAIALAAIgLgeIh2AAIgMAeIAMAAQASAAAHAHQAIAHgBALQABALgIAHQgHAGgSAAIhCAAQgSAAgHgGQgIgHAAgLQAAgLAIgHQAIgHASAAIBNi/IggAAQgSAAgHgGQgIgHAAgLQAAgLAIgHQAHgHASAAIBpAAIBhDwQASAAAGAEQAGAEACAGQACgEADgDQAJgHAQAAIAJAAIAAi/IgJAAQgRAAgIgGQgHgHAAgLQAAgLAHgHQAIgHARAAIBvAAQA0AAAdAaQAdAaAAAlQAAAXgNASQgOASgbAPQAQANARAWIAeAqQASAAAGAEQALAHAAAOQABALgIAHQgHAGgSAAgAAjARIgnhgIgnBgIBOAAgADugOIAnAAQAVAAARgGQAWgJAIgJQAIgKAAgJQAAgOgPgMQgPgMgcAAIg5AAgAlkCRQgSAAgHgGQgIgHAAgLQAAgLAIgHQAHgHASAAIAhAAIAAi/Ig1AAIAAAvQgBARgGAIQgHAIgLAAQgKAAgIgIQgGgIgBgRIAAhgID/AAIAABgQAAARgHAIQgHAIgLAAQgKAAgHgIQgIgIAAgRIAAgvIg1AAIAAC/IAhAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAGgSAAg");
	this.shape.setTransform(133.95,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// skins
	this.instance = new lib.RestButton();

	this.instance_1 = new lib.HoverButton();

	this.instance_2 = new lib.PressedButton();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,60);


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("Au6O6QmLmLAAovQAAouGLmMQGLmLIvAAQIvAAGLGLQGMGMAAIuQAAIvmMGLQmLGMovAAQovAAmLmMg");
	this.shape.setTransform(933,233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("Au6O6QmLmLAAovQAAovGLmLQGMmLIuAAQIvAAGMGLQGLGLAAIvQAAIvmLGLQmMGMovAAQouAAmMmMg");
	this.shape_1.setTransform(932.95,233.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("Au6O7QmLmMAAovQAAouGLmMQGMmLIuAAQIvAAGMGLQGLGMAAIuQAAIvmLGMQmMGLovAAQouAAmMmLg");
	this.shape_2.setTransform(932.85,233.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("Au6O6QmLmLAAovQAAovGLmLQGLmLIvAAQIvAAGLGLQGMGLAAIvQAAIvmMGLQmLGMovAAQovAAmLmMg");
	this.shape_3.setTransform(932.65,233.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("Au6O6QmLmLAAovQAAouGLmMQGMmLIuAAQIvAAGMGLQGLGMAAIuQAAIvmLGLQmMGMovAAQouAAmMmMg");
	this.shape_4.setTransform(932.4,233.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("Au6O7QmLmLAAowQAAouGLmLQGLmMIvAAQIvAAGMGMQGLGLAAIuQAAIwmLGLQmMGLovAAQovAAmLmLg");
	this.shape_5.setTransform(932.075,233.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC66").s().p("Au7O7QmKmMgBovQABouGKmMQGMmMIvAAQIvAAGLGMQGNGMgBIuQABIvmNGMQmLGLovABQovgBmMmLg");
	this.shape_6.setTransform(931.65,234);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("Au7O7QmKmLAAowQAAouGKmMQGNmMIuAAQIvAAGMGMQGMGMAAIuQAAIwmMGLQmMGLovAAQouAAmNmLg");
	this.shape_7.setTransform(931.15,234.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC66").s().p("Au6O7QmMmMAAovQAAovGMmLQGLmMIvAAQIvAAGMGMQGMGLAAIvQAAIvmMGMQmMGLovAAQovAAmLmLg");
	this.shape_8.setTransform(930.575,234.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCB66").s().p("Au7O7QmLmLAAowQAAovGLmLQGMmMIvAAQIvAAGMGMQGMGLAAIvQAAIwmMGLQmMGMovAAQovAAmMmMg");
	this.shape_9.setTransform(929.925,235.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCB66").s().p("Au6O7QmMmLAAowQAAovGMmMQGLmLIvAAQIwAAGLGLQGMGMAAIvQAAIwmMGLQmLGMowAAQovAAmLmMg");
	this.shape_10.setTransform(929.2,235.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCB66").s().p("Au7O8QmLmMAAowQAAovGLmLQGMmMIvAAQIvAAGMGMQGMGLAAIvQAAIwmMGMQmMGLovAAQovAAmMmLg");
	this.shape_11.setTransform(928.425,236.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCB66").s().p("Au7O8QmLmMgBowQABowGLmLQGMmLIvgBQIvABGNGLQGLGLABIwQgBIwmLGMQmNGMovAAQovAAmMmMg");
	this.shape_12.setTransform(927.55,237.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCB66").s().p("Au7O8QmMmMAAowQAAovGMmMQGMmMIvAAQIwAAGMGMQGMGMAAIvQAAIwmMGMQmMGMowAAQovAAmMmMg");
	this.shape_13.setTransform(926.575,237.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCB66").s().p("Au8O8QmLmLAAoxQAAowGLmLQGNmMIvAAQIwAAGMGMQGMGLAAIwQAAIxmMGLQmMGMowAAQovAAmNmMg");
	this.shape_14.setTransform(925.575,238.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCA66").s().p("Au8O8QmLmMAAowQAAowGLmLQGMmNIwAAQIwAAGMGNQGMGLAAIwQAAIwmMGMQmMGMowABQowgBmMmMg");
	this.shape_15.setTransform(924.475,239.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCA66").s().p("Au8O8QmMmLAAoxQAAowGMmLQGMmNIwAAQIwAAGNGNQGMGLAAIwQAAIxmMGLQmNGNowAAQowAAmMmNg");
	this.shape_16.setTransform(923.3,240.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCA66").s().p("Au8O9QmMmMAAoxQAAowGMmMQGMmMIwAAQIwAAGNGMQGMGMAAIwQAAIxmMGMQmNGMowAAQowAAmMmMg");
	this.shape_17.setTransform(922.05,241.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCA66").s().p("Au9O9QmLmMgBoxQABowGLmMQGNmMIwAAQIwAAGNGMQGNGMAAIwQAAIxmNGMQmNGMowAAQowAAmNmMg");
	this.shape_18.setTransform(920.7,242.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC966").s().p("Au9O9QmMmMAAoxQAAowGMmMQGNmNIwAAQIwAAGNGNQGNGMAAIwQAAIxmNGMQmNGNowAAQowAAmNmNg");
	this.shape_19.setTransform(919.325,243.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC966").s().p("Au9O9QmMmMAAoxQAAowGMmNQGNmMIwAAQIxAAGNGMQGMGNAAIwQAAIxmMGMQmNGNoxAAQowAAmNmNg");
	this.shape_20.setTransform(917.825,244.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC966").s().p("Au9O+QmNmNAAoxQAAowGNmNQGNmMIwgBQIxABGNGMQGNGNAAIwQAAIxmNGNQmNGMoxAAQowAAmNmMg");
	this.shape_21.setTransform(916.275,245.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC966").s().p("Au9O+QmNmMAAoyQAAoxGNmMQGMmNIxAAQIxAAGNGNQGNGMAAIxQAAIymNGMQmNGNoxAAQoxAAmMmNg");
	this.shape_22.setTransform(914.65,246.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC866").s().p("Au+O/QmMmNAAoyQAAoxGMmMQGNmOIxAAQIxAAGOGOQGMGMAAIxQAAIymMGNQmOGNoxAAQoxAAmNmNg");
	this.shape_23.setTransform(912.95,247.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC865").s().p("Au+O+QmNmMAAoyQAAoxGNmNQGNmNIxAAQIxAAGOGNQGNGNAAIxQAAIymNGMQmOGOoxAAQoxAAmNmOg");
	this.shape_24.setTransform(911.15,249.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC865").s().p("Au/O/QmMmNgBoyQABoxGMmNQGOmOIxAAQIyAAGNGOQGNGNAAIxQAAIymNGNQmNGOoyAAQoxAAmOmOg");
	this.shape_25.setTransform(909.3,250.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC765").s().p("Au/PAQmNmOAAoyQAAoxGNmOQGNmNIyAAQIyAAGOGNQGNGOAAIxQAAIymNGOQmOGNoyAAQoyAAmNmNg");
	this.shape_26.setTransform(907.375,251.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC765").s().p("AvAPAQmNmNAAozQAAoyGNmNQGOmOIyAAQIyAAGOGOQGOGNAAIyQAAIzmOGNQmOGOoyAAQoyAAmOmOg");
	this.shape_27.setTransform(905.375,253.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFC665").s().p("AvAPAQmNmNAAozQAAoyGNmNQGOmOIyAAQIyAAGOGOQGOGNAAIyQAAIzmOGNQmOGOoyAAQoyAAmOmOg");
	this.shape_28.setTransform(903.275,254.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC665").s().p("AvAPBQmOmOAAozQAAoyGOmOQGOmOIyAAQIzAAGOGOQGOGOAAIyQAAIzmOGOQmOGOozAAQoyAAmOmOg");
	this.shape_29.setTransform(901.1,256.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFC665").s().p("AvBPBQmOmOAAozQAAoyGOmPQGOmNIzAAQIzAAGOGNQGPGPAAIyQAAIzmPGOQmOGPozgBQozABmOmPg");
	this.shape_30.setTransform(898.875,258.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFC565").s().p("AvBPCQmOmOAAo0QAAozGOmOQGOmOIzAAQIzAAGPGOQGOGOAAIzQAAI0mOGOQmPGOozAAQozAAmOmOg");
	this.shape_31.setTransform(896.575,259.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFC565").s().p("AvCPCQmOmOAAo0QAAozGOmOQGPmPIzAAQI0AAGOGPQGPGOAAIzQAAI0mPGOQmOGPo0AAQozAAmPmPg");
	this.shape_32.setTransform(894.175,261.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFC465").s().p("AvCPDQmPmPAAo0QAAozGPmPQGPmPIzAAQI0AAGPGPQGOGPABIzQgBI0mOGPQmPGPo0AAQozAAmPmPg");
	this.shape_33.setTransform(891.7,263.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFC465").s().p("AvDPDQmOmPAAo0QAAo0GOmOQGPmPI0AAQI0AAGPGPQGPGOAAI0QAAI0mPGPQmPGPo0AAQo0AAmPmPg");
	this.shape_34.setTransform(889.175,265.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFC365").s().p("AvDPDQmPmOAAo1QAAo0GPmPQGPmPI0AAQI0AAGPGPQGQGPAAI0QAAI1mQGOQmPGQo0AAQo0AAmPmQg");
	this.shape_35.setTransform(886.55,267.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFC365").s().p("AvEPEQmPmPAAo1QAAo0GPmPQGQmQI0AAQI1AAGPGQQGQGPAAI0QAAI1mQGPQmPGQo1AAQo0AAmQmQg");
	this.shape_36.setTransform(883.875,269.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFC265").s().p("AvFPEQmOmPAAo1QAAo1GOmPQGRmPI0gBQI1ABGQGPQGPGPAAI1QAAI1mPGPQmQGRo1AAQo0AAmRmRg");
	this.shape_37.setTransform(881.1,271.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC265").s().p("AvFPFQmQmPAAo2QAAo1GQmPQGQmQI1AAQI1AAGQGQQGRGPAAI1QAAI2mRGPQmQGQo1AAQo1AAmQmQg");
	this.shape_38.setTransform(878.25,273.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFC165").s().p("AvFPGQmQmQAAo2QAAo1GQmQQGQmQI1AAQI2AAGQGQQGQGQAAI1QAAI2mQGQQmQGQo2AAQo1AAmQmQg");
	this.shape_39.setTransform(875.325,275.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFC165").s().p("AvGPGQmQmQAAo2QAAo2GQmQQGRmQI1AAQI2AAGRGQQGQGQAAI2QAAI2mQGQQmRGRo2AAQo1AAmRmRg");
	this.shape_40.setTransform(872.35,277.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFC064").s().p("AvHPHQmQmQAAo3QAAo2GQmQQGRmRI2AAQI2AAGRGRQGRGQAAI2QAAI3mRGQQmRGRo2AAQo2AAmRmRg");
	this.shape_41.setTransform(869.275,280.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFC064").s().p("AvHPHQmRmQAAo3QAAo3GRmQQGRmQI2AAQI3AAGRGQQGRGQAAI3QAAI3mRGQQmRGSo3AAQo2AAmRmSg");
	this.shape_42.setTransform(866.125,282.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFBF64").s().p("AvIPIQmRmRAAo3QAAo3GRmQQGRmSI3AAQI3AAGRGSQGRGQAAI3QAAI3mRGRQmRGRo3ABQo3gBmRmRg");
	this.shape_43.setTransform(862.9,284.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFBE64").s().p("AvIPJQmSmRAAo4QAAo3GSmRQGRmSI3ABQI3gBGSGSQGRGRABI3QgBI4mRGRQmSGRo3AAQo3AAmRmRg");
	this.shape_44.setTransform(859.6,287.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFBE64").s().p("AvJPKQmSmRAAo5QAAo4GSmRQGRmSI4ABQI4gBGSGSQGSGRgBI4QABI5mSGRQmSGRo4AAQo4AAmRmRg");
	this.shape_45.setTransform(856.2,289.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFBD64").s().p("AvKPKQmSmRAAo5QAAo4GSmRQGTmSI3AAQI5AAGRGSQGTGRAAI4QAAI5mTGRQmRGSo5AAQo3AAmTmSg");
	this.shape_46.setTransform(852.75,292.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFBC64").s().p("AvLPLQmRmSAAo5QAAo4GRmSQGTmSI4AAQI5AAGSGSQGSGSAAI4QAAI5mSGSQmSGSo5AAQo4AAmTmSg");
	this.shape_47.setTransform(849.225,294.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFBC64").s().p("AvLPLQmSmSAAo5QAAo5GSmSQGSmTI5AAQI5AAGTGTQGSGSAAI5QAAI5mSGSQmTGUo5AAQo5AAmSmUg");
	this.shape_48.setTransform(845.65,297.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFBB64").s().p("AvMPMQmSmSAAo6QAAo5GSmTQGTmTI5AAQI5AAGUGTQGSGTAAI5QAAI6mSGSQmUGTo5ABQo5gBmTmTg");
	this.shape_49.setTransform(841.95,300.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFBA64").s().p("AvNPNQmTmTABo6QgBo5GTmUQGUmTI5AAQI6AAGTGTQGUGUAAI5QAAI6mUGTQmTGUo6gBQo5ABmUmUg");
	this.shape_50.setTransform(838.2,303.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFBA64").s().p("AvNPOQmUmTAAo7QAAo6GUmTQGTmUI6AAQI7AAGTGUQGUGTgBI6QABI7mUGTQmTGTo7AAQo6AAmTmTg");
	this.shape_51.setTransform(834.35,305.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFB964").s().p("AvOPPQmUmUAAo7QAAo6GUmUQGUmUI6AAQI7AAGUGUQGUGUAAI6QAAI7mUGUQmUGUo7AAQo6AAmUmUg");
	this.shape_52.setTransform(830.475,308.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFB863").s().p("AvPPQQmUmUAAo8QAAo7GUmTQGUmVI7AAQI7AAGVGVQGUGTAAI7QAAI8mUGUQmVGUo7AAQo7AAmUmUg");
	this.shape_53.setTransform(826.475,311.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFB763").s().p("AvQPQQmUmTAAo9QAAo7GUmVQGVmUI7AAQI8AAGUGUQGVGVAAI7QAAI9mVGTQmUGVo8AAQo7AAmVmVg");
	this.shape_54.setTransform(822.425,314.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFB763").s().p("AvRPRQmUmUAAo9QAAo8GUmUQGVmVI8AAQI8AAGVGVQGVGUAAI8QAAI9mVGUQmVGVo8AAQo8AAmVmVg");
	this.shape_55.setTransform(818.3,317.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFB663").s().p("AvSPSQmUmVAAo9QAAo8GUmVQGWmVI8AAQI9AAGVGVQGVGVAAI8QAAI9mVGVQmVGVo9AAQo8AAmWmVg");
	this.shape_56.setTransform(814.075,320.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFB563").s().p("AvTPSQmVmUAAo+QAAo9GVmVQGWmWI9ABQI9gBGWGWQGWGVgBI9QABI+mWGUQmWGWo9AAQo9AAmWmWg");
	this.shape_57.setTransform(809.8,324.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFB463").s().p("AvTPTQmWmVAAo+QAAo+GWmVQGWmWI9AAQI+AAGWGWQGWGVAAI+QAAI+mWGVQmWGWo+AAQo9AAmWmWg");
	this.shape_58.setTransform(805.425,327.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFB363").s().p("AvUPVQmWmWAAo/QAAo+GWmVQGWmXI+AAQI/AAGVGXQGXGVAAI+QAAI/mXGWQmVGWo/AAQo+AAmWmWg");
	this.shape_59.setTransform(801,330.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFB363").s().p("AvVPVQmWmWAAo/QAAo+GWmWQGWmXI/AAQI+AAGYGXQGWGWAAI+QAAI/mWGWQmYGXo+AAQo/AAmWmXg");
	this.shape_60.setTransform(796.5,333.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFB263").s().p("AvWPWQmWmWAApAQAAo/GWmWQGXmYI/ABQI/gBGYGYQGXGWAAI/QAAJAmXGWQmYGYo/AAQo/AAmXmYg");
	this.shape_61.setTransform(791.9,337.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFB162").s().p("AvXPXQmXmXAApAQAApAGXmWQGYmYI/AAQJAAAGXGYQGYGWAAJAQAAJAmYGXQmXGYpAAAQo/AAmYmYg");
	this.shape_62.setTransform(787.225,340.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFB062").s().p("AvYPZQmXmYAApBQAApAGXmXQGYmYJAAAQJBAAGXGYQGYGXAAJAQAAJBmYGYQmXGXpBAAQpAAAmYmXg");
	this.shape_63.setTransform(782.5,344.25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFAF62").s().p("AvZPZQmXmYAApBQAApBGXmXQGZmYJAAAQJBAAGYGYQGYGXAAJBQAAJBmYGYQmYGYpBAAQpAAAmZmYg");
	this.shape_64.setTransform(777.675,347.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFAE62").s().p("AvaPaQmYmYAApCQAApBGYmYQGZmZJBAAQJCAAGYGZQGZGYAAJBQAAJCmZGYQmYGZpCAAQpBAAmZmZg");
	this.shape_65.setTransform(772.775,351.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFAD62").s().p("AvbPbQmYmYAApDQAApCGYmYQGZmZJCAAQJCAAGZGZQGZGYAAJCQAAJDmZGYQmZGZpCAAQpCAAmZmZg");
	this.shape_66.setTransform(767.825,355.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFAC62").s().p("AvcPcQmZmZAApDQAApCGZmZQGamaJCAAQJDAAGZGaQGaGZAAJCQAAJDmaGZQmZGZpDABQpCgBmamZg");
	this.shape_67.setTransform(762.775,358.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFAB62").s().p("AvcPdQmamaAApDQAApDGamaQGZmZJDAAQJDAAGaGZQGaGaAAJDQAAJDmaGaQmaGapDAAQpDAAmZmag");
	this.shape_68.setTransform(757.65,362.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFAA62").s().p("AvePeQmZmagBpEQABpEGZmZQGamaJEAAQJEAAGaGaQGaGZABJEQgBJEmaGaQmaGapEAAQpEAAmamag");
	this.shape_69.setTransform(752.45,366.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFA962").s().p("AvfPfQmamaAApFQAApEGamaQGbmbJEAAQJFAAGaGbQGbGaAAJEQAAJFmbGaQmaGbpFAAQpEAAmbmbg");
	this.shape_70.setTransform(747.2,370.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFA861").s().p("AvgPgQmbmaAApGQAApFGbmaQGbmbJFAAQJFAAGbGbQGbGaAAJFQAAJGmbGaQmbGbpFAAQpFAAmbmbg");
	this.shape_71.setTransform(741.85,374.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFA761").s().p("AvhPhQmbmbAApGQAApFGbmbQGcmcJFAAQJGAAGbGcQGcGbAAJFQAAJGmcGbQmbGcpGAAQpFAAmcmcg");
	this.shape_72.setTransform(736.425,378.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFA661").s().p("AviPjQmbmcAApHQAApGGbmbQGcmdJGAAQJGAAGcGdQGcGbAAJGQAAJHmcGcQmcGbpGABQpGgBmcmbg");
	this.shape_73.setTransform(730.925,382.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFA561").s().p("AvjPkQmcmcAApIQAApGGcmdQGcmcJHAAQJHAAGdGcQGcGdAAJGQAAJImcGcQmdGcpHAAQpHAAmcmcg");
	this.shape_74.setTransform(725.35,386.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFA461").s().p("AvlPkQmbmcAApIQAApIGbmbQGdmeJIAAQJHAAGeGeQGcGbABJIQgBJImcGcQmeGdpHAAQpIAAmdmdg");
	this.shape_75.setTransform(719.7,390.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFA361").s().p("AvlPmQmdmdAApJQAApIGdmdQGdmdJIAAQJIAAGeGdQGdGdAAJIQAAJJmdGdQmeGdpIAAQpIAAmdmdg");
	this.shape_76.setTransform(713.975,394.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFA261").s().p("AvnPnQmdmeAApJQAApJGdmdQGemeJJAAQJJAAGeGeQGeGdAAJJQAAJJmeGeQmeGepJAAQpJAAmemeg");
	this.shape_77.setTransform(708.175,399.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFA160").s().p("AvoPoQmemeABpKQgBpJGemeQGfmfJJAAQJKAAGeGfQGeGeABJJQgBJKmeGeQmeGfpKAAQpJAAmfmfg");
	this.shape_78.setTransform(702.3,403.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFA060").s().p("AvpPqQmemfAApLQAApKGemeQGfmfJKAAQJKAAGfGfQGfGeAAJKQAAJLmfGfQmfGepKAAQpKAAmfmeg");
	this.shape_79.setTransform(696.35,407.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF9F60").s().p("AvqPqQmfmfAApLQAApLGfmeQGfmgJLAAQJLAAGfGgQGgGeAAJLQAAJLmgGfQmfGgpLAAQpLAAmfmgg");
	this.shape_80.setTransform(690.325,412.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF9E60").s().p("AvsPsQmfmgAApMQAApMGfmfQGhmgJLABQJMgBGfGgQGgGfAAJMQAAJMmgGgQmfGgpMgBQpLABmhmgg");
	this.shape_81.setTransform(684.2,416.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF9D60").s().p("AvtPtQmfmgAApNQAApMGfmgQGhmgJMAAQJMAAGhGgQGgGgAAJMQAAJNmgGgQmhGgpMAAQpMAAmhmgg");
	this.shape_82.setTransform(678.025,421.525);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF9B60").s().p("AvtPuQmhmgAApOQAApNGhmgQGgmhJNAAQJOAAGgGhQGhGgAAJNQAAJOmhGgQmgGhpOAAQpNAAmgmhg");
	this.shape_83.setTransform(671.75,426.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF9A60").s().p("AvvPvQmhmhAApOQAApOGhmgQGhmiJOAAQJOAAGhGiQGiGgAAJOQAAJOmiGhQmhGipOAAQpOAAmhmig");
	this.shape_84.setTransform(665.425,430.825);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF995F").s().p("AvwPwQmimhAApPQAApOGimhQGimjJOAAQJPAAGiGjQGiGhAAJOQAAJPmiGhQmiGipPAAQpOAAmimig");
	this.shape_85.setTransform(659.025,435.55);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF985F").s().p("AvyPyQmhmiAApQQAApPGhmiQGjmiJPAAQJPAAGjGiQGiGiAAJPQAAJQmiGiQmjGjpPAAQpPAAmjmjg");
	this.shape_86.setTransform(652.525,440.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF975F").s().p("AvzPzQmimiAApRQAApQGimiQGjmjJQAAQJQAAGjGjQGjGiAAJQQAAJRmjGiQmjGjpQAAQpQAAmjmjg");
	this.shape_87.setTransform(645.975,445.175);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF955F").s().p("Av0P0QmjmjAApRQAApRGjmjQGkmjJQAAQJRAAGkGjQGjGjAAJRQAAJRmjGjQmkGkpRAAQpQAAmkmkg");
	this.shape_88.setTransform(639.35,450.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF945F").s().p("Av1P2QmkmjAApTQAApSGkmjQGkmkJRAAQJSAAGkGkQGkGjAAJSQAAJTmkGjQmkGkpSAAQpRAAmkmkg");
	this.shape_89.setTransform(632.625,455.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF935F").s().p("Av3P3QmkmkAApTQAApSGkmkQGlmlJSAAQJTAAGkGlQGlGkAAJSQAAJTmlGkQmkGlpTAAQpSAAmlmlg");
	this.shape_90.setTransform(625.825,460.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF925E").s().p("Av4P5QmlmlAApUQAApTGlmkQGlmlJTgBQJTABGmGlQGlGkAAJTQAAJUmlGlQmmGlpTAAQpTAAmlmlg");
	this.shape_91.setTransform(618.975,465.15);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF905E").s().p("Av5P6QmlmlgBpVQABpUGlmlQGlmmJUAAQJUAAGmGmQGlGlABJUQgBJVmlGlQmmGmpUAAQpUAAmlmmg");
	this.shape_92.setTransform(612.05,470.275);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF8F5E").s().p("Av7P7QmmmmAApVQAApVGmmlQGmmnJVAAQJVAAGmGnQGnGlAAJVQAAJVmnGmQmmGnpVAAQpVAAmmmng");
	this.shape_93.setTransform(605.025,475.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF8E5E").s().p("Av8P9QmnmnAApWQAApWGnmmQGnmmJVgBQJWABGnGmQGnGmAAJWQAAJWmnGnQmnGnpWgBQpVABmnmng");
	this.shape_94.setTransform(597.925,480.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF8C5E").s().p("Av+P+QmnmnAApXQAApWGnmnQGomnJWAAQJWAAGoGnQGoGnAAJWQAAJXmoGnQmoGnpWAAQpWAAmomng");
	this.shape_95.setTransform(590.775,486);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF8B5E").s().p("Av/QAQmomoAApYQAApXGomoQGomnJXgBQJXABGpGnQGoGoAAJXQAAJYmoGoQmpGnpXABQpXgBmomng");
	this.shape_96.setTransform(583.525,491.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF8A5D").s().p("AwAQBQmpmoABpZQgBpYGpmoQGompJYAAQJYAAGpGpQGpGoAAJYQAAJZmpGoQmpGppYAAQpYAAmompg");
	this.shape_97.setTransform(576.2,496.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF885D").s().p("AwCQDQmpmpAApaQAApZGpmoQGpmqJZAAQJZAAGpGqQGqGoAAJZQAAJamqGpQmpGppZAAQpZAAmpmpg");
	this.shape_98.setTransform(568.825,502.225);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF875D").s().p("AwEQEQmpmqAApaQAApaGpmpQGqmqJaAAQJaAAGqGqQGqGpAAJaQAAJamqGqQmqGqpaAAQpaAAmqmqg");
	this.shape_99.setTransform(561.325,507.775);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF855D").s().p("AwGQGQmpmrAApbQAApaGpmrQGsmqJaAAQJbAAGqGqQGrGrAAJaQAAJbmrGrQmqGqpbAAQpaAAmsmqg");
	this.shape_100.setTransform(553.8,513.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF845D").s().p("AwHQHQmqmrAApcQAApbGqmrQGrmrJcAAQJcAAGrGrQGrGrAAJbQAAJcmrGrQmrGrpcAAQpcAAmrmrg");
	this.shape_101.setTransform(546.175,518.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF835C").s().p("AwIQIQmrmrAApdQAApcGrmrQGsmsJcAAQJdAAGrGsQGsGrAAJcQAAJdmsGrQmrGspdAAQpcAAmsmsg");
	this.shape_102.setTransform(538.475,524.675);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF815C").s().p("AwKQKQmrmsAApeQAApdGrmsQGsmsJeAAQJdAAGtGsQGsGsABJdQgBJemsGsQmtGspdAAQpeAAmsmsg");
	this.shape_103.setTransform(530.7,530.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF805C").s().p("AwLQLQmtmsAApfQAApeGtmtQGtmtJeAAQJeAAGtGtQGuGtAAJeQAAJfmuGsQmtGupeAAQpeAAmtmug");
	this.shape_104.setTransform(522.85,536.225);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF7E5C").s().p("AwNQNQmtmtAApgQAApfGtmtQGumuJfAAQJfAAGuGuQGuGtAAJfQAAJgmuGtQmuGupfAAQpfAAmumug");
	this.shape_105.setTransform(514.925,542.075);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF7D5C").s().p("AwPQPQmtmuAAphQAApgGtmuQGvmuJgAAQJgAAGvGuQGuGuAAJgQAAJhmuGuQmvGupgAAQpgAAmvmug");
	this.shape_106.setTransform(506.9,548);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF7B5B").s().p("AwQQQQmumuAApiQAAphGumuQGvmvJhAAQJhAAGvGvQGvGuAAJhQAAJimvGuQmvGvphAAQphAAmvmvg");
	this.shape_107.setTransform(498.825,553.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF7A5B").s().p("AwSQSQmvmwABpiQgBpiGvmvQGwmwJiAAQJiAAGvGwQGwGvAAJiQAAJimwGwQmvGvpiAAQpiAAmwmvg");
	this.shape_108.setTransform(490.7,560);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF785B").s().p("AwTQTQmwmvAApkQAApjGwmvQGwmxJjAAQJjAAGwGxQGxGvAAJjQAAJkmxGvQmwGxpjAAQpjAAmwmxg");
	this.shape_109.setTransform(482.475,566.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF775B").s().p("AwVQVQmwmxAApkQAApkGwmwQGxmxJkAAQJkAAGxGxQGxGwAAJkQAAJkmxGxQmxGxpkAAQpkAAmxmxg");
	this.shape_110.setTransform(474.175,572.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF755B").s().p("AwXQXQmwmyAAplQAAplGwmwQGymyJlAAQJkAAGyGyQGyGwABJlQgBJlmyGyQmyGypkAAQplAAmymyg");
	this.shape_111.setTransform(465.8,578.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF735A").s().p("AwYQYQmymyAApmQAApmGymyQGymyJmAAQJmAAGyGyQGzGyAAJmQAAJmmzGyQmyGzpmAAQpmAAmymzg");
	this.shape_112.setTransform(457.325,584.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF725A").s().p("AwaQaQmymzAApnQAApnGymyQGzmzJnAAQJnAAGzGzQGzGyAAJnQAAJnmzGzQmzGzpnAAQpnAAmzmzg");
	this.shape_113.setTransform(448.775,590.975);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF705A").s().p("AwcQcQmzmzAAppQAApoGzmzQG0m0JoAAQJoAAG0G0QG0GzAAJoQAAJpm0GzQm0G0poAAQpoAAm0m0g");
	this.shape_114.setTransform(440.175,597.325);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF6F5A").s().p("AwdQeQm0m0AApqQAAppG0mzQG0m1JpAAQJpAAG0G1QG1GzAAJpQAAJqm1G0Qm0G0ppAAQppAAm0m0g");
	this.shape_115.setTransform(431.5,603.75);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF6D5A").s().p("AwgQfQmzm1AApqQAApqGzm0QG2m2JqAAQJqAAG1G2QG2G0AAJqQAAJqm2G1Qm1G1pqABQpqgBm2m1g");
	this.shape_116.setTransform(422.75,610.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF6B59").s().p("AwhQhQm1m1AApsQAAprG1m1QG2m2JrAAQJrAAG2G2QG2G1AAJrQAAJsm2G1Qm2G2prAAQprAAm2m2g");
	this.shape_117.setTransform(413.9,616.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF6A59").s().p("AwjQjQm1m3gBpsQABpsG1m2QG3m3JsAAQJsAAG2G3QG4G2AAJsQAAJsm4G3Qm2G2psAAQpsAAm3m2g");
	this.shape_118.setTransform(405,623.35);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF6859").s().p("AwkQkQm3m2AApuQAAptG3m2QG3m4JtAAQJtAAG3G4QG4G2AAJtQAAJum4G2Qm3G4ptAAQptAAm3m4g");
	this.shape_119.setTransform(396,630);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(181));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3eZQgDgCgCgFQAFgHAFgEQAEgEAGgBIAFgBQAGAJAAAIQAAAJgGAIQgLgFgJgFgAQUbnQgDgBgBgFQAEgHAGgFQADgCAGgBIAFgBQAGAJAAAHQAAAJgGAIQgLgEgJgHgAG0QlQgCgCgCgEQAEgHAGgFQAEgDAGgCIAFAAQAGAIAAAJQAAAIgGAJQgLgFgKgGgAl8MRQgDgCgBgFQAEgGAGgFQAEgEAFgBIAGAAQAFAJAAAHQAAAJgFAIQgLgEgKgGgAUzJrQgDgCgBgEQAEgHAGgFQAEgDAFgBIAGAAQAFAHAAAJQAAAJgFAIQgLgFgKgGgA22gqQgDgDgBgEQAEgGAGgFQADgEAGgBIAFAAQAGAIAAAIQAAAJgGAIQgLgEgJgGgEAwPgDcQgDgBgBgFQAEgHAGgFQAEgCAFgBIAGgBQAFAJAAAHQAAAJgFAIQgLgEgKgHgAiWlwQgIgEgFgIIADgIQACgDAEgBIAKgGIAAgCQAIACAIAEQAFACAEADIABAJQAAAEgCADIgHAJQgNAAgKgEgEgo+gHwQgDgCgBgDQAEgIAGgFQAEgDAFgBIAGAAQAFAIAAAJQAAAIgFAIQgLgEgKgHgEhPdgI8QgCgCgCgFQAEgHAGgEQAEgEAGgBIAFgBQAGAJAAAIQAAAIgGAJQgLgFgKgFgEhd8gKgQgDgCgCgEQAFgHAFgFQAEgEAGgBIAFAAQAGAIAAAJQAAAIgGAIQgLgEgJgGgEg/ZgNGQgDgBgCgFQAEgHAGgFQAEgDAGgBIAFAAQAGAIAAAIQAAAJgGAIQgLgFgJgGgEBXwgPKQgDgCgBgFQAEgHAGgEQAEgEAFgBIAGAAQAFAIAAAIQAAAJgFAIQgLgEgKgGgAQfxaQgDgCgBgEQAEgHAGgFQADgDAGgBIAGgBQAFAJAAAIQAAAIgFAJQgMgEgJgHgA//xaQgDgCgCgEQAEgHAGgFQAEgDAGgBIAFgBQAGAJAAAIQAAAIgGAJQgLgEgJgHgEA4MgVpQgCgEAAgEQABgIAEgJIALgDIAGgDQAHAFAFAFQADADABAEQgDAIgFACQgJAEgMAAIgHAAgEhZSgWPQgDgCgBgEQAEgHAGgFQADgDAGgBIAFgBQAGAJAAAIQAAAIgGAJQgLgFgJgGgAlm5sQgDgCgBgEQAEgHAGgFQAEgDAFgBIAGgBQAFAJAAAIQAAAIgFAIQgLgDgKgHgEgvsgaYQgDgCgCgEQAEgHAGgFQAEgDAGgCIAFAAQAGAJAAAIQAAAIgGAIQgLgEgJgGgEApVgbaQgDgDgBgDQAEgIAGgEQAEgEAFgBIAGAAQAFAIAAAJQAAAIgFAIQgLgEgKgGgEBdogcdQgDgCgCgEQAFgGAFgGQAEgDAGgBIAFAAQAGAIAAAIQAAAJgGAIQgLgEgJgHgEhEPgdqQgDgCgBgEQAEgHAGgFQAEgDAFgBIAGgBQAFAJAAAIQAAAIgFAJQgLgFgKgGgEBMBgeLQgDgCgBgEQAEgHAGgFQAEgDAFgCIAGAAQAFAJAAAIQAAAIgFAIQgLgEgKgGg");
	this.shape.setTransform(650.675,255.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066CC","#002E5C"],[0,1],180,-470,180,190.1).s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shimmer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shimmer
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(251.55,572.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(233.55,577,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(244.55,581.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(209.55,587.65,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(219.55,586.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(251.55,572.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(233.55,577,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(244.55,581.4,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_9();
	this.instance_8.setTransform(209.55,587.65,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(219.55,586.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_11();
	this.instance_10.setTransform(251.55,572.2,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_12();
	this.instance_11.setTransform(233.55,577,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_13();
	this.instance_12.setTransform(244.55,581.4,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_14();
	this.instance_13.setTransform(209.55,587.65,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_15();
	this.instance_14.setTransform(219.55,586.4,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_16();
	this.instance_15.setTransform(219.55,586.4,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_17();
	this.instance_16.setTransform(251.55,572.2,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_18();
	this.instance_17.setTransform(233.55,577,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_19();
	this.instance_18.setTransform(244.55,581.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_20();
	this.instance_19.setTransform(209.55,587.65,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_21();
	this.instance_20.setTransform(219.55,586.4,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_22();
	this.instance_21.setTransform(251.55,572.2,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_23();
	this.instance_22.setTransform(233.55,577,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_24();
	this.instance_23.setTransform(244.55,581.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_25();
	this.instance_24.setTransform(209.55,587.65,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_26();
	this.instance_25.setTransform(219.55,586.4,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_27();
	this.instance_26.setTransform(219.55,586.4,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_28();
	this.instance_27.setTransform(251.55,572.2,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_29();
	this.instance_28.setTransform(233.55,577,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_30();
	this.instance_29.setTransform(244.55,581.4,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_31();
	this.instance_30.setTransform(209.55,587.65,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_32();
	this.instance_31.setTransform(219.55,586.4,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_33();
	this.instance_32.setTransform(251.55,572.2,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_34();
	this.instance_33.setTransform(233.55,577,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_35();
	this.instance_34.setTransform(244.55,581.4,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_36();
	this.instance_35.setTransform(209.55,587.65,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_37();
	this.instance_36.setTransform(219.55,586.4,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_38();
	this.instance_37.setTransform(219.55,586.4,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_39();
	this.instance_38.setTransform(251.55,572.2,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_40();
	this.instance_39.setTransform(233.55,577,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_41();
	this.instance_40.setTransform(244.55,581.4,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_42();
	this.instance_41.setTransform(209.55,587.65,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_43();
	this.instance_42.setTransform(219.55,586.4,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_44();
	this.instance_43.setTransform(219.55,586.4,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_45();
	this.instance_44.setTransform(251.55,572.2,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_46();
	this.instance_45.setTransform(233.55,577,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_47();
	this.instance_46.setTransform(244.55,581.4,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_48();
	this.instance_47.setTransform(209.55,587.65,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_49();
	this.instance_48.setTransform(219.55,586.4,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_50();
	this.instance_49.setTransform(251.55,572.2,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_51();
	this.instance_50.setTransform(233.55,577,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_52();
	this.instance_51.setTransform(244.55,581.4,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_53();
	this.instance_52.setTransform(209.55,587.65,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_54();
	this.instance_53.setTransform(219.55,586.4,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_55();
	this.instance_54.setTransform(251.55,572.2,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_56();
	this.instance_55.setTransform(233.55,577,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_57();
	this.instance_56.setTransform(244.55,581.4,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_58();
	this.instance_57.setTransform(209.55,587.65,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_59();
	this.instance_58.setTransform(219.55,586.4,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_60();
	this.instance_59.setTransform(251.55,572.2,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_61();
	this.instance_60.setTransform(233.55,577,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_62();
	this.instance_61.setTransform(244.55,581.4,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_63();
	this.instance_62.setTransform(209.55,587.65,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_64();
	this.instance_63.setTransform(219.55,586.4,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_65();
	this.instance_64.setTransform(251.55,572.2,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_66();
	this.instance_65.setTransform(233.55,577,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_67();
	this.instance_66.setTransform(244.55,581.4,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_68();
	this.instance_67.setTransform(209.55,587.65,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_69();
	this.instance_68.setTransform(219.55,586.4,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_70();
	this.instance_69.setTransform(251.55,572.2,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_71();
	this.instance_70.setTransform(233.55,577,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},4).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},4).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},4).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},4).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},4).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},3).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},4).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_57}]},3).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},4).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},3).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_64}]},2).to({state:[{t:this.instance_65}]},4).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},3).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_70}]},4).wait(122));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_mountains = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mountains
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ehv1AhpMAAAgj8ISxpYIEsEtQFFGPNqq8IJZDJIHzEsIK8mRQD/LBH2KRQHtKFKKHsIUUAAQCZhpCOiRQBBhCCvjJQCaivByhtQCsihDNiJIOEuEIHlvtIMgvoIMgPoIHzMgIEsuEIZzhaMgLMA2ng");
	this.shape.setTransform(704.25,334.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333333","#000000"],[0,1],0,130,0,-130).s().p("Ehj/AOEIAA8HMDH/AAAIAAcHg");
	this.shape.setTransform(640,630);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_detail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// detail
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(171.25,556.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_72();
	this.instance_1.setTransform(108.05,547.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Comet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bits
	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(137.75,-21.9,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkMAlQgHgCgJABQgJAAgGABQAAgHgLgCIgJgCIgIgCQgBADADABQAGACABACQgCAAgCADQgBADgGgDQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAABgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAgDgFAAIAAAFIgGgGIgZABQgMAAgMACQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIgMgCQgHgCgFACIADABIgFAAIgEAAIgFgBQgKgCgFAAIAGAAQAGAAAAgCIgCgBIADAAIgBgBIAOABIgHAAQABACAHAAIAIgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIACgDQAHgBAEACQAFAEAFACIgCABIAFACQAEACADgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgFgCIAGACQAEACADgBQgEgEgGgBIgLgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIAfADQATACALgDQgBAAgBgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAFAAgBgEQAAABABAAQAAAAABABQAAAAABAAQABAAABgBQAGgBACABQAAgDgFgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAABgBQAEAAAOAFQANAEAHgCQgCgCgDgBQAEAAAKAHQAKAEACgGIgNgLQACAAACgCIgEgFQAGgBAEAGIAGAKIAGgHQAIgDAIABQAJACAGAIIAGgCQADgBgCgFIgIgJQgGgEgIABQgBADAGACQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAABQgDgBgHACQgGABgCgDIAMgBQAAgFgDABQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQACgFAFACQAIAAABgCIgBgBIAJABIAKACQABAGgCABIgHADQAJgBATAEQATADAJgJIgLgGQAEgBAIABQAGABgCgHQgDACgBgDQgCgDgCgBIAAABQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAEAEAGADIALAEQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBIADgDQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIgCAFIAFADQAEABABgDQADgEgEgCQgGgCAAgCIARAHIAAgBQAEADACgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAEgDAJAFQAHAFAFgHIAEADQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAFADQAGACgBgFQgBgFABgBIgBAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAKAEQABADAJAEQAJAFAAAGQAEgCgBgCQADAAAAgFQAAgEAGABIgDgCQAEAAABACIABgFQAAAFAHgDIgEgGQADAEAGgCIgDgDQADAAABADQABADAGgCIgJAFQAGAAADAFIADAHQAFADALgDQAKgBAGAHIAAgFQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQgKgCgEgGQgHgDgBAHQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgCABgEgDQAAgIAIAFQAAgEgHgGQAEABAIgCIALgCIAAAAIAGADQAEACADgBQAAABAFAEQAGAEgCADQAEAAADgEQACgCAEADQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAAAAAgBQgBAAAAgBQgBADgGgDIgKgGIANgEQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAIACgFQABAGALgEQAMgEAFAHIgGAAQgDAAgBgDQgEACACAEQACAEgBACQAEABARgBQANgBAIADIgFgCQgDgBgBgDQAFgBAKAEIARAGIgCgFQAEACACgBQACgCAEAAIAAACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAFAEADgEQADgDAGABIgBgCQAFACALgDIAKgCQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAOAAIACgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgEABIABgDQAIABgDAEQgFADAAACQAHgCAGAEQABgCgDgDQgEgBAEgCQACgCAIACQAGAAAFADQAEgFALAAQAKgBAAgCIABABIAFAAIgDgCQAGgBADADQAEACACAAIgCgDQAEAAAMACQAHACAIgBIgCgCQgBgBAHACIgFACQAEACAJgBQAJgDAFAAIgDgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAIAGABQADACAFgBIgDgCIgDgCQAKgBABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQADACAIgCIgBgBQAFADAEgCIAKgBIgBAAIAHAAIAJAAIgEgCQAEABAGgBQAGAAADABIgCgBQAAAAABAAQAAgBAAAAQABAAABAAQABAAABAAQAGACAEgBQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIAAABIgDgBIAMAAIgEgBIAZACIgBAAIAAABIgIAAQAAAAAAAAQgBAAAAAAQABAAAAAAQABABAAAAIAHAAIgFAAIgEABIADAAIgDAAQgFABAEAAIgHAAIgHABIAJAAIgFABIABAAIgEABQgHABgGACIgKACQgCABAAAAQgBAAgBAAQAAAAAAgBQAAAAABAAQAEgCgEABIgEABIgDAAIgDgBQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBgBQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAABAAIAEABQgFgBgFACQACAAABAAQABAAABAAQAAAAAAAAQgBAAgBAAIgUADIgSADIABABIgEAAIABABIgdADIAFABIgJgBIACADQgEgCgGACIgOABIAAABIgFAAIACABIgIAAQgGgBgEACQAFgBAAAFIgQgCIgEACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgFgBIAAABQgLADgYgBIgRAAQgKABgIAEIAAABIgPgEQgDAGgFABQABAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgHAAgBgBQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIABACQgHAEgMAAQgPgBgGADQAJgGAFgBIALgDQgGgBgHABQgGADgJAAIAHABQgDAFgKgBQgJgBAAAEIgMgDQgIgDgFABIAEAHIgIABIgBgFQgEAAAAACQgDgCgIAAQgIAAgFgCIAAACIgCgBQAAACgFACQgDACAAACQAJACAAgCQAEACgGABIgLABQABAAAAgBQABAAAAgBQAAAAgBAAQAAAAAAAAIgGgCIABACQgEACgFgEQgEgDgDAGIgBgGIgHAFQAAgFgEAAQgGAAgBgEQgEAAACACIABACQgDACgJgDIgGgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQgEgCgGABIgIgBIAAAGIgFgCQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAAAAAIABACQgMgCgOACQABAFAEABQgEADgKgCQgNgEgGACIACADIgIgFQACADgBAEQgLACgHgBIgIgCQgDgCgCgEIgBAFQgBAEAEACIgFgDIgFgBIgegBIAAgBIgFgDIgBACIAEABIgIgBIgGgFQgCAJgDABQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIgHACQgJADgDgEIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgdgEgAiuAdIACACIACgDIgBAAIgDABgAj7AbQgCgGACgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAGACQADACABgDQgEgBgCgCQADgEAEACIAAgFQgIAIgOgBQgBACADADIAGAEIAAAAgAliAbIADgFIgFAAgAiqAYQACACAEAAQAFgBABgDIABgBIgNADgAhpASQgCAFgCACIAJgEQgCgDgCAAIgBAAgAhxARQACAEAFgDIgHgIIgCgCQAAAFACAEgAkrASIAEAAIABgCgAA6AQIgCABIAEAAIgBgCIgBABgABIAMIAEADQADgBgFgFIAEAAIgBgCIgCABQgEADgDgCQAAABAAAAQABABAAAAQABAAAAABQABAAABAAgAidAHQABAAAAABQAAAAAAABQABAAAAAAQABABAAAAQACgEgFgCgACwACQADABADgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEAAIADACgAiWABIgEgDIAHACQgBgDgEgDQgGgCgDACIALAHgACBgBIgHgEQgEgBgFACIAGACQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAHACgAAsgEQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIADAAIgEgEQgBgCgEACIACAAIABAAIACABgAC6gGQABABAAAAQAAABAAAAQgBABAAAAQgBAAgBABQAAAAAAAAQgBAAABAAQAAAAAAAAQABAAABABQAEAAACgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIADAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIADAAQAAAAAAAAQgBABAAAAQAAAAABABQAAAAABAAgABBgGQAEgIgSAFIAHABIABgBQAFAAABADgAA5gPIAFgBIgDgCgAFLgRIAFABQACACADgCIgEgBIgCAAIgEAAgAD4gUQABAAAAAAQAAAAAAAAQABABAAAAQAAAAgBAAIAEgBQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCAEIABAAIAEABgADkgZQgFACAAABIAMgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgDAAgAEmgaIAJAAIACAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgHgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABgAnFAZIAAgBIAFABgAm2AVIAFABIgGACgAlXASIgFgCIADgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQADABAEAFIgCABIgEgBgAmrARQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAFAAIgEABIgBAAgAlwAOIgEABQAHgCgDgCQgHgBAAgBQAFAAACABIAFAFIgFgBgAkegEQADgBACACIADADgAjGgHQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIABAIgAjigRIgBgCIAHgBQACABgFACIgDAAgACBgWQAGAAABgCQABACgGACIgIABQABgEAFABgAiBgUIABgDIAHADgAidgbIACABIADAAIAFABIgHABg");
	this.shape.setTransform(99.55,-28.4);

	this.instance_1 = new lib.CachedBmp_75();
	this.instance_1.setTransform(88.85,-31.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_76();
	this.instance_2.setTransform(88.85,-31.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_77();
	this.instance_3.setTransform(104.75,-31.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_78();
	this.instance_4.setTransform(100.85,4.45,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipAeIgdgEIAAAAIgEgDIgBABIAEACIgIgCIgFgEIgCAFQgCADgCABQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgGABQgJADgDgEIABACIgBACIgagGIgPgCQgHAAgHABQgBgIgJgCIgIgCIgJgDQgBADADACQAFABACADQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCACQgBADgFgDIACACQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDgFAAIAAAFIgFgGIgYAAQgQgBgIABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQgDAAgIgDQgHgCgFACIACABIgEAAIgDAAIgFgCQgHgCgHgBIAGAAQAEAAAAgBQgBgBgEAAIgGABIABgDIAMACIgCgBIAPACIgIAAQADACAFgBIAIAAIgDgDQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABgBQAGgBAEACQAEAEAFACIgCABIAFADQADACAEgCQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCQABAAAAAAQABAAAAAAQABAAAAAAQABABABABQAFACABgBQgCgEgGgBQgGgCgFABIAAgEIAdAEQAUADAJgCQgBgBgBAAQgBgBAAAAQAAgBAAAAQAAAAABAAQAFAAgBgDQABADADgBIAIAAQABgDgFgCQgEgBACgDIAQAGQANAEAHAAQgCgDgDgBQADAAALAHQAIAFAEgGIgOgLQACAAADgDIgDgEQAGgCADAHIACAGQABADABACIAHgHQAHgDAJACQAIADAFAHQALAAgEgGIgIgMQgEgEgIAAQgBAEAEACIACACIgJABQgFABgDgEIANABQAAgGgDABQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQABgFAGABQAFABADgCIAIABIAJADQAAAFgCABIgGADQAFAAAIACIAOAEQAQAEAKgJIgKgIIALABQAGABgBgHQgEACgBgCIgDgFIAAABQAAgBgBAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQADAEAHADIAJAFQAAAAAAgBQAAAAAAAAQAAgBAAgBQABAAAAgBIADgDQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCAFIAFADQADABACgDQABgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQgFgDgBgCIARAJIAAgCQADAEACgCQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAEgCAHAFQAHAFAEgGIgDgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIAAABIAFADQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBAAIAFADQAFACAAgEQAAgGAAgBIAAAAIADgCQAAgBAAAAQABAAAAgBQAAAAgBAAQAAAAAAgBIAJAFIALAIQAGAFAAAGQAGgBgCgDQADAAAAgEQAAgEAHABQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIABgEQAAAEAHgBIgEgHQADAEAGgBIgDgEQAEAAAAAEQABADAEgCIgIAEQAGABACAFIADAIQAEACAMgBQAKgBAEAGIABgEIABgEQgJgDgDgGQgDgCgCABIgCAFIgCAEQgCABgFgDQABgIAIAFQAAgEgIgGQAFACAIgCIAKgCIABAAQAHAHAEgDIAFAFQAFAEgCAEQAEABADgEQACgDAEAEQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQgCADgFgEQgEgCgFgEIAMgDQAAAAgBABQAAAAAAAAQAAABAAAAQABABAAAAIADADIACgFQAAAEAEAAIAIgCQAMgDAEAHIgGAAQgCAAgBgDQgEABABAEQACAFgCACQAHACAOgBQANAAAHAEIgFgDIgDgCIAAgBIgBgBQAGgCAJAFIAPAHIgCgFQAFACACgBQACgCAEABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAABAAQABAAAAAAQABAAABgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAFAEADgDQADgEAGACIgBgBQAFABALgCIAJgCQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIANABIACgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIACgCQAGABgDAEIgEAFQAGgBAGADQABAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBgBQgBAAAAgBQgBAAAAgBQAAAAABgBQAAAAABgBQACgBAIACQAFAAAFAEQAEgFALAAQAJAAABgCIABABIAEAAIgCgBQAFgBADADQAEADACgBIgCgDIAOADQAIACAHgBIgBgBQgCgBAHACIgEACQAEADAHgCQALgDAEABIgEgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEAAACACQADABAFgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgCIAHgBIADABQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAEABAIgBIgBAAQADACAFAAIgCAAIACABIgIgBIAGACIAGAAQAAgBAAAAQABAAgBAAQAAgBAAAAQgBAAAAAAIgDAAIAKgBIgBgBIAGABIAIAAIgDgCIAJABIAJABIgBgBIADgBQAFADAFgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIABAAIgDgBIALABQAAAAAAAAQAAAAAAAAQgBgBgBAAQAAAAgCAAIAYADIgBAAQgBAAACABIgIAAQgGABAIAAIAAAAIgDAAIACABIgCAAIgGABIgCgBQgEAAgDABIAIABIgEAAQABAAABAAQAAAAAAAAQAAABgBAAQgCAAgCAAQgIAAgFACIgKACQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAAAABgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgEABIgCABIgDgCQgBAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAFABIgFAAIgFAAQACAAABAAQABAAAAAAQAAAAAAAAQAAAAgBAAQgLAAgIACQgLACgGAAIABABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIABABIgLAAIgRABIAGABIgKgBIABACQgBgBgIAAIgMABIAAACIgGgBIACACIgIgBQgFgBgEABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgQgCIgDACIgBABIgEgCIAAACQgNADgVgDIgQgBQgKABgIAEIABAAIgPgEIgDADIgEAEQAAgBAAAAQAAAAAAgBQgBAAgBAAQgBAAgBAAQgFABgCgCQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIACACQgHADgMgBQgMgBgIACIAPgGIAKgDQgHgBgGACQgHACgGAAIAFABQgCADgDAAIgHAAQgIgBgBAEIgLgEQgHgEgGABIAFAHIgJABIAAgFQgDAAgCACQgDgDgHAAQgIgBgDgCIgBADIgCgCQAAACgFACQgDABAAADQAIADAAgDQAEADgGAAIgKABQADgDgHgBIABACQgEABgFgEQgDgDgEAFIgBgFIgGAFQAAgFgFgBQgEAAgBgFQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAABABIAAACQgEABgHgDIgGgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgDgCgGAAIgIgBIAAAFQgIgDAAABIAAACQgIgCgRAAQABAGAEABQgEADgKgEQgNgDgFABIABADIgGgFIABAGQgKACgHgBIgFgBIgDgCQgDgDgCgDIgBAEQgBAEADADgAiuAXIACACIABgDIAAgBIgDACgAAwAWIgCABIADAAIgBgBIAAAAgAA9ATIAFADQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgDIAEABQgBgBAAgBQAAgBgBAAQAAAAgBAAQAAAAgBABQgEACgCgBQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAgAhsAQIgEAGIAJgEQgBgBAAAAQgBgBAAgBQAAAAgBAAQAAgBAAAAIgCACgAiqASQACACAEgBQAEAAABgDgAj3ARQgBgHABgBQAAgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAHAFACgDIgCgCQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQADgDAEACIgBgEQgDACgHACQgGABgFgBQgBACADAEIAGAFIAAAAgAh1AFQgBADACAFQACAFAFgDIgGgIQgCgEgFgCIgBAGIACgDIABAAIADABgAChAPQADABADgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgFABIADADgACnAEIADAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQgBAAAAABQgBAAgBAAQAFADACgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAIACgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgDgBIgCABgAlZAKIACgEIgFAAgABrAJQgBgFAEABIAGADIgFgEQgGgCgDACIAEACIgBAAgAE2ADIAEACIAFgBIgDgBIgDAAIgDAAgAicABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABgEgDgCgAkkAFIACAAIABgDgAAjAAIABADIADAAIgEgDQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACAAgAAqgDIAHAAQAGAAABADQABgEgFAAIgCAAIgIABgADmgEQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIAEgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgIAAAAgCIgCADIABAAIADABgAiWgDIgEgFIAHAEQgBgEgDgDQgFgDgEADIAKAIgAF9gGIACAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgDAAgAETgIIAJABIACAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAIgGgBQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAgADUgKQgCABgBAAQAAAAgBABQgBAAAAAAQAAABABAAQAAgBAKgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgCAAgAAxgJIAEgBIgCgDgAlPACIgEgCIADAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAEAAAEAFIgDABIgEgCgAk/gDIAAAAIAAAAgAB2gMQAEABACgDQABADgFAAIgIABQABgDAFABgAkYgQQAEgCACACIACAFgAjDgPQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIAAAJgAiBgZIABgBIAHACgAjegdIAGAAQABAAAAAAQAAABAAAAQgBAAgBABQgBAAgBABQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgAiYgeIgDgDIACABIADABIAEABg");
	this.shape_1.setTransform(111.15,-26.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAiQABAAAAgBQABAAAAAAQAAgBAAAAQgBAAAAgBIgDgBIAAACQgCACgFgFQgCgDgCAFIgBgEIgFADQAAgFgDAAQgEAAgBgFQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAABABIABADQgEABgGgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAgBAAQgCgCgEAAIgGgBIAAAGQgGgDgBAAIABADQgIgDgMAAQABAGADABQgDADgIgEQgJgDgDABIAAACIgFgDIAAAFQgJABgDgBIgDgBIgDgBIgEgHIAAAFQgCAEADACIgDgCIgEgCIgHgBIgPgCIABgBIgFgDIAAABIADADIgFgDIgGgEQgCAIgBABQAAgDgGADQgIABgCgDIABACIgBABIgUgGIgLgCIgLABQgBgIgGgCIgHgCQgEgBgCgDQgBAEADABQADACABACIgCABIgBACQgBADgEgDIgBgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAAFIgFgHIgSAAQgLgBgHABQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIgIgDQgEgCgFABIACABIgEABIgCgBIgEgBQgEgDgFAAIADAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDgBgCABIABgDQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAFABIgCgCIALACIgFAAQABACAEAAIAGgBIgBgCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAHgBABADIAHAFIgBABIAEADQABAAAAABQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAEADABgCQgCgDgEgCQgDAAgFAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBIAWAFQAOADAIgCQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAEABgBgEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEgBACABQAAgEgDgBQgBAAAAgBQgBAAAAgBQgBAAABgBQAAAAAAgBIANAGQAJAGAFgCQgBgCgCgCIALAIQAGAEACgGIgJgLIADgCIgCgFQAEgBACAGIAEAMIAEgHQAHgEAGADQAGADAEAHQAIAAgCgHIgGgKQgEgFgFAAQgCAEAEACIABABIgGABQgFACgBgEIAJAAQAAgBgBgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAgBQgBAAAAgBQACgEAEABQAEABACgCIgBAAIAHABQACAAAFACQABAGgCABIgFADQADAAAGADIALADQANAEAIgIIgIgIIAIABQAFABgBgHQgBABAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIgBABQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQADAEAEADIAHAFQgBgDAEgEQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgCAFIAEADQABAAAAAAQABABAAgBQABAAAAgBQAAAAAAgBQACgDgDgCIgDgEIAMAIIAAgCQABABAAABQABAAAAABQABAAAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQADgDAGAHQAGAEADgGIAEAEIABgDIADADQADACAAgEIAAgHIADgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAGAGIAAAAIAIAIQAGAFAAAFQABAAAAAAQABAAAAgBQABAAAAgBQAAgBgBAAQABAAAAgBQABAAAAAAQAAgBAAgBQAAgBAAgBQABgDAEABIgBgCQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAgEQABAFAFgCIgDgHQADAEAEgBIgCgEQACAAABAEQAAABAAABQABAAAAAAQABAAAAAAQABAAABAAIgHADQAFABACAFIACAIQACACAJgBQAHgBAEAGIABgDIACgFQgIgDgCgGQgGgDgBAHIAAAEQgCABgEgDQACgIAEAFQAAgEgEgGQAEACAFgCQAHgCABAAQAFAHAEgCIAEAFQAEAEgCADQADABACgDQACgDADAEQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAADgFgEIgHgHIAJgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIADACIABgEQABAEADAAIAGgCQAJgCADAGIgFAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgCACABAEQACAEgCACQAFACAKgBQALAAAEAEIgDgDQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAEgBAHAFIAMAHIgCgFQABABABAAQABAAAAABQABAAAAAAQABgBAAAAQABgCAEABIAAACQABAAABAAQABAAAAAAQAAgBAAAAQABAAgBgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQADAEACgDQADgDAFACIgBgCQAEACAIgDIAJgCQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABIAKABQAFgCgDgCIgDABIABgCQAFACgCACQgDADAAACQACAAADABIAEACQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQACgBAGACQAFABADACQACgDAJAAQAHAAABgDIABACIACAAIgBgCQAEgBACADQADADABAAIgBgDQAEAAAHADQAGACAFgCIgBAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIgDACQADADAGgCQAIgCADABIgDgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAGACQABACADgCIgCgBIgBgCIAEAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAJAAIgBgBQACACAEAAIAHAAIgBgCIAGACIAFgBIgCgBIAOACIgBgBIADgBQAEACAEAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAAAIgDgBQAFAAADACQABgBAAAAQAAAAgBAAQAAAAAAgBQgBAAgBAAIASADIAAAAIAAABIgGAAQgBAAgBAAQAAABAAAAQABAAABAAQABAAACAAIgCAAIABAAIgEAAIADABIgDAAIgDAAIgCAAIgFABIAHABIgFAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBABQgDgBgGACIgIACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAABAAQABAAAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAIgDAAIgDABIgCgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIgFABQABAAABAAQABAAAAAAQAAAAAAAAQAAAAgBAAIgOACIgOACIABABIgEAAIABABIgUAAIADACIgHgCIABADQgBgBgFAAIgKABIAAABIgFAAIACABIgGgBQgEgBgDABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgMgCIgCACQAAAAgBAAQAAAAAAABQAAAAABAAQAAAAABAAIgFgBIAAABQgKADgQgDIgNgBQgHAAgGAEIABAAIgMgDIgCACIgDAEQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgEAAgBgCQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIACACQgGADgJgBQgLgBgEACQAHgFAEgBIAIgDQgGgBgEABQgGACgFAAIAFACQgDAEgGgCQgHgBgBAEIgIgEQgGgEgEABIAEAHIgGABIgBgFQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQgDgEgFAAQgGgBgDgCIgBADIgBgCQAAADgDACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAHADgBgDQADADgFABIgIAAgAiAAWIACACIABgDIAAAAIgDABgAA0AVIADADQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAgBIgCgCIADAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAAAgBABQgEACgBgBQAAAAAAABQAAAAABABQAAAAAAABQABAAABAAgAhOAPIgDAHIAHgDQAAgBgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgBAAgAh9ARQACACADAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABAAIgJABgACAASQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgDABIACADgAhUAFIABAIQABAFADgDIgDgIIgGgGIgBAHIABgEIACAAIACABgAi4APQgBgKAEADQAFAFACgDIgCgCIgCgDQACgDADACIAAgDQgCACgGABQgFACgDgBQgBACACAEIAEAEIAAAAgACHAKQABAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIACAAIgCgCQAAgBgBAAQAAgBAAAAQgBAAAAABQgBAAAAABIACgBQAAAAgBAAQAAABAAAAQAAAAABABQAAAAAAABgAkDAIIACgFIgEAAgAAgACIABACIACABIgCgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBABQABAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACAAgAhyABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAgEgCgBIAAACgAAlgCIAGABQAEAAAAADQACgEgEgBIgCAAIgGABgAC1AAIABAAIADAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIgEgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgBAEIABAAIACABgADYgEIAGACIACgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgFgBIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAgAEQgDIAFgBQAAAAAAAAQABAAgBgBQAAAAAAAAQAAgBgBAAIgEAAIACABIgGgBIAEADgACngGQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIAJgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCAAgAhtgEIgDgEIAFAEQgBgEgCgEQgEgDgDADIAIAIgAArgHIADgBIgCgDgAj6AAIgEgCQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBQACABAEAFIgCAAIgDgBgAlLAAIAAAAIAEAAgAkNgFIgCABQAFgBgDgCIgEgEQADABABACIAEAFQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBgBAAgAk4gGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAEAAIgDABIgBgBgABfgJQADABACgDQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgGAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAgAiQgPQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIgBAIgAjQgSQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABIABAEgAhcgYIAAgCIAFACgAikgeIAFgBQABABAAAAQAAABgBAAQAAABgBAAQAAAAgCABQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBgAhugeIgDgDIACABIACAAIADACg");
	this.shape_2.setTransform(119.75,-31.75);

	this.instance_5 = new lib.CachedBmp_79();
	this.instance_5.setTransform(185.15,-7.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_80();
	this.instance_6.setTransform(61,-27.5,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_81();
	this.instance_7.setTransform(24.1,-29.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},2).wait(2));

	// Comet
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Av9EXIhRgEIAFAAIgPgFIADAIIgDgCIgFgDIgMgCQgNgDACgDIACAAQAAgBABAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgBIgBgBIgNgGIgDgCQgBADADADIgNgDQgGgGgLgHIgWgOIgEgDIgCgBIgJgIIgDgEIgFgGIgKgCQgEgHgLgNIgTgUQgKgLgFgKQgGgMAAgKIgHgNIgBgBIABAAIgBgBIgFgKIgBgCIgBgCIgKgaIgJgcIgGggIABgUQAAgJACgLQACgMADgHIAEgHQABgDAEgCIAHgVIAFgQIAAgCIABgFIAAAAIABgBIAFgRIAGgNQADADADgCIAEgGIAGgJIADgEIADgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBABgBIAEgGIAEgEIABgBQACgEAAgDIAFADQAJgJAHgGQAIgIAJgGIgBADQAAAAABABQAAAAABAAQAAAAABgBQAAAAABgBIAHgGIAEgKIACAHIAEgDIACgDIABACIAHgDQADgCACgDQADgCAAgDIABgEIACAAIACAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgGgBIACgBIAKAAIAFgCIAIgFIgEAFIAIgDIABAAIABAAIAFgBIADgCIAHgFIgCgJIgKAHIAAAAIAAAAIASgPIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIAHgDIAFAAIAEgBQACAAACgEIADAHIAJgIIgBAHQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAIABIAOAAIgFgHIAFADIACAAIADACIAEABQAFAAADgDIAAAGQAEAAACgBIACgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBAEABIgEAFIAmgCIASABIAIADIAIADIAAACQAGADAJACIAMABIgCgBIASAEIgBAEIAHACIABAAIAAAAIAFABIgBACIAHAEIACABIACAAIAEACIAHABIAHAAIgCgDIABgBIABAAIAKgMQADAAAEgCIAEAAIAFADIgDACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIAKAAIAJgFQgGAEABAGQAAACAEADIAGAFIANACIAKAAQALAAAHAEIAHALQAFACAFgEQAFgDACADIAHACQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABgCAIADIAAAAIABABQAFADAFAAIAIACIAMgBQADgEAFADIAHAGIAFgFQAKAHARAHQAOAFAWAGQABAFARAAIgEgDIAnANIAQAEIAJADIAFgIIAAABQAFADAJgCQAHgDAGADIAAgBQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAQABAAAFgCQAJgDACADQADACAFgCIAHgEIACACQADADADgCIAFgFQADgDADACQADACAFAAIAJgBIgBgCQAHACAbgBQAXAAAKACIAAABIABgBIABgCIgBACIAIABIAAgBQAEgEADAAQAEgDADAEQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAHgDAHAAQAEgBAIACIAMABQAHAAAHgDIgBAAIAFABIgCgEQABACAGgCQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIAAABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAGAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIADgCQAGADAJgBQAJgBADADIADgCQAEABANgBQAKgDAGAFIAogFIANABQAJABACACQAGABAIgBQAJgCAEABQAAAAAAABQAAABAAAAQABAAABAAQAAAAABAAQAGAAAAABQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQABAAAAAAQABgBABAAQAAAAABAAQAAgBAAAAIABADIAPAAIgBABIABABIADAAIADgDIAAADIACAAIAAABIAFAAQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABACIABAAQABAAAAAAQABAAAAAAQAAAAgBgBQAAAAgBAAIAEABIAFABIgCAAIAEABQADABACgCIABgEIgFACIAHgFIABACIAAABIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABACIAEgCQgDAFAFABIAFAAIgCgDIAEADQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIAAACQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgBACIANgCQAHgBAFACIAAABIAKAAIgBAAIAGgBIAAABIAFAAIAAABQAGACAGgCIgBgBQABAAACgFIADgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIADgBIADgCQAAABgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAKgBIAHAAIAEADQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgBIAEAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIABABIAEAAIAEAAIAEAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIADACIABgCQALADAQAAQABABAGAAIgBgBIAhABIABAAIABABIADAAIANAAIAAABIgZAAIgBABIAHABIABgCIALABIAIAAQAFAAACgBIALABIgFAAIAFABIAEAAIAIAAIADABIAGAAIAKABIgHgDIATAAIABABIADgBIACABIACgBIAAgBIALAAIAMABIABgBIAIABIAGgBIAKABIABAAIAEAAQAFAAAEABIAcAAQAKAAACgBIAAABIAHAAIAAgBIAAABIAfgBIgTABIAAAAIgDABIgXABIgCAAIgJABIABAAIghACIgYACIgbACIAHAAIgiAEQggADgDgBIgrADQgcADgNAAIgpACIgoADIhPAHIgPgBQgJAAgFACIAAgBIgHABIgVACIgIABIABADQABAHAGgDIADgBIAAAEQAMgHAOAAQAIAAAPADQAOAEAJgBQAOAAAOgIIgCACIAJACIgDgLQADAGAJgDQAEgCADABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABIgCABQAAAGAGACIAJACQAAgGgCgBQACAAAFgEQAKAGARgBIANAAQAHABAEAFIAFgIQAIAEAIgBIASgCQAVgEAKAJIBNgKIAaACQAQACAFAHQAOAEAOgDQARgEAIAAQgCAHAIAAQAKAAADACQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQACgBADABQAIABABgEIABAGIAdADIgCABQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAQAEgBACACIAFgIIgBAIIADAAIACgBIAAACQAGACAEgBQAEgCABgFIACADQABABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAEgCgFgEIAGADQAEACAHgBIgEADQACgBAGACQAGACAEgEIABgKIgJAEIAOgIQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACQADgBAFACIACAAIAEgCIABAGIAGgGIgBAIQAAAEAHABIAJACIgDgHIAGAGQAEADAEgFIABAGQADABABgEQABgDAEACIgCADQAGABAHgBIAMgCQAOgDAKAEIAAACQAHADAMgCIgCgBIANgBIABAEIAJgBIAAADQALADAOgEIgDgCQACAAAFgNQACAAADgCQACgCAFACIgCADIAAADIAJgCIAFgEQgDACACAFQACAEAHACQAIAAALgCQAHgCAHACIAHAHQAEAAADgDQACgEAEACQAHACAAgCQAAgBAHABIAAgBIABAAQAGADAJgBIAIgCQABgDAFABIAGADIADgEQASAIAhABQADACAMAAIgCgCQATADAMAAIAfABIAEgCQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABABIAFACIAaAAIAAABIgyAAIAAACIAMADIAEgEQAKACAKAAIAPAAQALABADgDIABAAIgBAAIAAgBIAXAFIgKAAIAKADIAEAAIACgCQACgBADABIALABIAGACIAMAAIAUADIgOgGIATAAIARAAIAAABIACABIAGgBIAEABQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAIABgDIAUAAQAXADAEAAIgCgBIADAAIgGgBIAUACQABgBAMAAIARABIADABIgEAAIALACIgBgBIAAgBIADABIAGABIALAAIBOABIgBABIAMgBIAAABIADgBIALABIACgBIAFABIAggBIgbABIgHACIgNAAIgGABIgcACIgUACIALAAIgGAAIgjABIgTABQgLADgDgBIACAAIgvAEIgXACIgcACIANABIhwALQgUACgEgBIgqACIgqAEIgpAEQgVACgRgBQgkABgrADQgnACgmAFIhOAIIhPAIIABgBIgegCQgRAAgKAEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgNACIABAAQgZAAgSADQgYACgTAIQgEgCgQABQgRgBgEgCQgfgBgkADQgeABgoAEIhIAJIhJAJIgCgEQgDgDgGABIAAAKQgNgEgQABIgeAEIgdADQgRAAgKgHIgNANIitAWIgGgBIAAACQAAAAAAABQAAAAABABQAAAAABAAQABABABAAIADABIgBgEIAEADQAAAAABABQAAAAAAAAQABAAAAgBQABAAAAAAIAAACQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAABIgBACIANgCQAHgCAFADIAAABIAKAAIgBgBIAGAAIABABIAEAAIAAABQAGABAGgBIgBgBIADgHIACgBIAEAAQAAAAAAABQgBAAAAAAQAAABAAAAQABAAAAABIADgBIADgDQgEAEAJADIAJgBIAHAAIAEADQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQABAAABAAQAAAAAAAAQAAAAAAgBIADAAIABABIAEAAIAEgBIAEAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAEACIABgDQAIADASABQABABAHgBIgCAAIAQABQAIABAHgBIACAAIABAAIADACIgNAAIABACIAGAAIACgBQADABAGgBIAHAAQAHAAABgBIAAAAIALACIgFAAIAGABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQACgBAGABIAEACIAGAAIAJABIgGgEIARABIACAAIACAAIACAAIADgBIAAgCIAAABQAAgBAKABIANAAQgCgBACABIAAAAIAGAAIAHAAIAJAAIABABIgCAAIAGAAQgBAAgBAAQAAAAAAAAQAAAAABAAQABAAABAAIAjAAQAKABACgBIAAABIAHgBIAAgBIAAABIAGAAIAAAAIABAAIABAAIAWgBIgQABIgCABIgEAAIgJABIgYACIAFAAIhTAIIAGABIgiAEQgdAEgEgBIg/AHIgTABIgnADIgnAEIgmAFIgoAFIAAgBIgOAAQgJAAgFACIAAgBIgHABIgVACQgKACgLAEQgCgBgIABIgKgBQgbgBgqAFIhIALIgCgDIgBAAIgDAAIgBAFIgJgBIgGACQgVAKgEgEQgLAAgLAHIgIAFIgGAEIgGgCQgIgCgIAFIgJAIQgIAHgHgBQgHgBgMADIgWAHIADACIihApIACgDIgDAEQgFAGAEgHIgSAFIAAABQgDACgDAEIgJAJIgDABIgFABIgCAAIgDgBQgBgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgCAAIgBABIgDACIgCABIgCABQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgBAAgBQgJAGgKAEQgLAEgHABQgOADgSAAIgEAAgAllBLIACAAIABAAIACAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACABIAAABQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIAEACQACACADgBIgCABIAEABQACABADgDIAAgEIgEABIAHgEIgegGIgiALQAFgBABABQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIABADIAPABIgBABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAIACgBIADgDIgBAEQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBgAlBBGIACgCIgCAAgAlJBDIABACQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgGgCIgBABgAjMh3QAVABAPAFIgCADIADgEQAGgKgFAMIAOABIABgCIAGgFIACgCQgDgBgEAAIgLAAIgLAAQgPAAgRACgAo5iWIABgCIAAAAgAhbBNIgBAAIgMABg");
	this.shape_3.setTransform(105.425,-2.0222);

	this.instance_8 = new lib.CachedBmp_82();
	this.instance_8.setTransform(-28.15,-29.9,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_83();
	this.instance_9.setTransform(-28.15,-29.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_84();
	this.instance_10.setTransform(-28.15,-29.75,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_85();
	this.instance_11.setTransform(-28.15,-29.65,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_86();
	this.instance_12.setTransform(-28.15,-29.6,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_87();
	this.instance_13.setTransform(-28.15,-29.5,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_88();
	this.instance_14.setTransform(-28.15,-29.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_89();
	this.instance_15.setTransform(-28.15,-29.4,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_90();
	this.instance_16.setTransform(-28.15,-29.3,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_91();
	this.instance_17.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_92();
	this.instance_18.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_93();
	this.instance_19.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_94();
	this.instance_20.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_95();
	this.instance_21.setTransform(-28.2,-29.2,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_96();
	this.instance_22.setTransform(-28.2,-29.3,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_97();
	this.instance_23.setTransform(-28.2,-29.45,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_98();
	this.instance_24.setTransform(-28.2,-29.6,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_99();
	this.instance_25.setTransform(-28.2,-29.8,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgkaAEXIi7gEIAMAAIgjgFIAHAIIgHgCIgLgDIgbgCQgfgDAFgDIAGAAQABgBAAAAQAAAAAAgBQgBAAAAgBQgBAAgBgBIgDgBIgngJQgCADAHADIgegDQgPgGgZgHIgzgOIgJgDIgEgBIgVgIIgHgEIgLgGIgWgCQgJgHgagNIgtgUQgVgLgMgKQgPgMABgKIgQgNIgCgBIABAAIgCgBIgMgKIgBgCIgCgCQgRgRgHgJQgPgSgGgKIgMggIACgUQAAgJAEgLQAFgMAHgHIAJgHQACgDAJgCQAKgLAHgKIAKgQIAAgCIADgFIAAAAIABgBIAMgRIAPgNQAHADAGgCQACAAAIgGIAMgJIAIgEIAHgCQgHgCAEgDQABgCAJgEIAJgEIACgBQAGgEgCgDIAMADQAVgJAQgGQASgIAWgGIgDADQABACAIgDIARgGIAIgKIAEAHIAKgDIAEgDIADACIAQgDQAGgCAFgDQAHgCABgDQABAAAAgBQAAgBABAAQAAgBAAAAQgBgBAAAAIAJAAQAGACADgCQAIgCgDgBIgNgBIAFgBIAWAAIANgCIASgFIgLAFIATgDIADAAIACAAIAjgIIgFgJIgWAHIgBAAIAAAAIApgPIAFAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIAQgDIALAAIALgBQAEAAAFgEIAHAHIAVgIIgEAHQACADAGABIAyABIgLgHIAMADIADAAIAIACIAJABQAKAAAHgDIABAGQAKAAAEgBIAFgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQADgBAIABIgJAFICAgBIATADIATADIgBACQAPADATACIAcABIgEgBIApAEIgBAEIAPACIACAAIABAAIAKABIgCACIAQAEIAFABIAFAAIAJACIAQABIARAAIgGgDIAGgBIAXgMQAHAAAJgCIAIAAIAMADIgIACQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABIAYAAIAUgFQgNAEADAGQAAACAIADIANAFIAgACIAWAAQAYAAASAEIAQALQALACALgEQAMgDAEADIARACQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQADgCARADIACAAIABABQAMADAKAAIAUACIAcgBQAGgEALADIAQAGIAMgFQAWAHApAHQAfAFAyAGQACAFAnAAIgJgDIBbANIAkAEIAUADIANgIIgBABQAMADATgCQASgDANADIABgBQAAADAFAAQAEAAALgCQAUgDAFADQAIACALgCIAQgEQAAAAAAABQAAAAABAAQAAAAABABQABAAABAAQAHADAHgCIALgFQAIgDAHACQAFACANAAIAVgBIgDgCQARACA9gBQA1AAAYACIAAABIABgBIADgCIgDACIASABIAAgBQAKgEAGAAQAJgDAHAEQAAADAIgBQABgBABAAQABAAAAABQAAAAAAAAQAAABAAAAQAOgDAQAAQAKgBASACIAbABQARAAARgDIgCAAIALABIgGgEQAEACAMgCQALAAgBABIgBABQABACAFABIAMAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIAGgCQANADAUgBQAVgBAHADIAHgCQAJABAegBQAXgDANAFIBegFIAdABQAUABAFACQAPABASgBQATgCAKABQgBADAJgBQAOAAgBABQAAgCAJABQAHAAADgCIABADIAiAAIgCABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAIAAIAIgDIgCADIAGAAIgBABQAFABAGgBQAGgBgBgDIADACIADAAQAFAAgFgBIAHABIANABIgDABIAIAAQAFABAHgCIABgEIgLACIAQgFQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAABIAAABIAKAAQACAAADgBIADACIAIgCQgHAFAMABIALAAIgEgDIAJADQAEABAGgCIgBACQAFABACgCQABgCAEABIgDACIAegCQAQgBALACIABABIAWAAIgCAAIAPgBIABABIALAAIAAABQAPACAOgCIgEgBQACAAAGgFIAGgBQACgBAHABQgBAAAAABQgBAAAAAAQAAAAABABQAAAAABAAIAPgDQgFACAEACQABACAJAAIAXgBIAPAAIAJADQAFAAADgBIAHgBIAIAAQABgBAGAAIACABIAKAAIAJAAIAJAAQACgCAEAAIAHACIAEgCQAZADAjAAQAEABAOAAIgDgBIBLABIAEAAIABABIAIAAIAeAAIgBABIg6AAIgBABIAPABIACgCIAZABIATAAQAMAAAEgBIAbABIgOAAIAOABIAJAAIARAAIAIABIANAAIAXABIgPgDIAqAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAHgBIAEABIAGgBIABgBIAXAAIAeABIABgBIATABIANgBIAYABIACAAIAJAAQALAAAKABIBAAAQAWAAAFgBIABABIAOAAIACgBIAAABIBHgBIiCAEIADAAIhLACIg4ACIg9ACIAQAAIhOAEQhKADgHgBIhkADQg/ADgeAAIheACIhcADIjYAGQgVAAgNACIABgBIgQABIgxACQgJAAgJABIADADQACAHANgDIAIgBQAAAAAAAAQAAAAAAABQAAAAAAABQgBABAAABQAcgHAfAAQATAAAjADQAgAEAVgBQAfAAAhgIIgFACIAVACIgIgLQAJAGAVgDQAJgCAGABQAFAAAAADIgDABQgCAGAOACIAWACQgBgGgEgBQAEAAANgEQAWAGAogBIAeAAQAOABALAFIALgIQASAEATgBIAogCQAwgEAZAJICwgKIA8ACQAkACALAHQAgAEAggDQAogEASAAQgFAHASAAQAYAAAGACQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAABAAQADgBAIABQARABADgEIABAGIBFADIgHABQAAADAIgBQAKgBAFACIALgIIgCAIIAGAAIAFgBIgBACQAOACAKgBQAIgCADgFIAFADQADACADAAQAKgCgMgEIAOADQAKACAPgBIgJADQAFgBAOACQAMACAKgEIACgKIgTAEIAegIQAFAAAAACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAIgBALACIAFAAIAIgCIACAGIAPgGQgDAGAAACQABAEAPABIAVACIgHgHIAPAGQAJADAJgFIACAGQAHABADgEQACgDAJACIgFADQANABASgBIAbgCQAfgDAYAEIgBACQAQADAdgCIgFgBIAegBIACAEIAVgBIAAADQAZADAfgEIgGgCQAEAAAMgNQAFAAAGgCQAFgCAMACIgGADQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAUgCIAMgEQgHADAEAEQAGAEAPACQASAAAagCQARgCAQACIAQAHQAJAAAGgDQAGgEAHACQASACgCgCQACgBAPABIAAgBIACAAQAPADATgBIATgCQADgDALABIAOADIAGgEQApAIBOABQAFACAcAAIgFgCQAtADAaAAIBIABIAKgCQgEABAFACIANACIA6AAIAAABIhzAAIAAACIAdADIAKgEQAVACAYAAIAhAAQAbABAFgDIADAAIgDAAIAAgBIA2AFIgYAAIAYADIAKAAIAFgCQADgBAIABIAZABIAOACIAbAAIAtADIgfgGIAqAAIAoAAIAAABIAFABIANgBIAKABQAJgBABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAvAAQA0ADAKAAIgGgBIAHAAIgOgBIAuACQAEgBAaAAIAoABIAGABIgKAAIAbACIgCgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABAAIAIABIAMABIAZAAIC0ABIgBABIAbgBIgBABIAHgBIAaABIAEgBIAMABIAqgBIhMADIgOABIhAACIgwACIAaAAIgOAAIhQABIgsABQgZADgHgBIAGAAIhtAEIg0ACIhBACIAeABIkAALQgvACgIgBIhiACIhgAEIhdAEQgxACgogBQhSABhiADQhaAChYAFIiyAIIi2AIIACgBIhEgCQgpAAgVAEQAAAAABAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgeACIAEAAQg6AAgqADQg3ACgsAIQgKgCgkABQgogBgIgCQhHgBhSADQhFABhdAEIimAJIimAJIgGgEQgJgDgNABIAAAKQgcgEgmABIhFAEIhBADQgnAAgYgHIgdANImOAWIgPgBIAAACQABACAJABIAIABIgDgEIAJADQADABAEgBIAAACQAFABACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABABIgCACIAdgCQAQgCAMADIgBABIAXAAIgDgBIAQAAIABABIAKAAIAAABQAOABAOgBIgCgBQABAAAEgHIAGgBIAJAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAABABIAIgBIAHgCQgKADAUADIAVgBQAIgBAIABIAJADQAFABADgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQALABgBgCIAGAAIACABIAKAAIAIgBIAJAAQADgCADABIAKACIABgDQATADAqABQAAABARgBIgEAAIAlABQARABARgBIAFAAIACAAIAGACIgdAAIACACIANAAIAFgBQAHABAPgBIAQAAQAQAAABgBIAAAAIAbACIgMAAIANABQACABADgCQAFgBANABIAIACIAPAAIAUABIgNgEIAnABIAEAAIAFAAIAFAAQAFAAABgBIAAgCIABABQAAgBAXABIAdAAQgGgBAGABIgBAAIARAAIAPAAIAVAAIACABIgDAAIAMAAQgCAAgBAAQgBAAAAAAQABAAACAAQABAAAEAAIBQAAQAVABAHgBIAAABIAOgBIABgBIAAABIANAAIABAAIACAAIADAAIAxgBIgxACIgWABIg2ACIAKAAIi/AIIANABIhMAEQhEAEgKgBIiPAHIgtABIhaADIhXAEIhZAFIhbAFIAAgBIggAAQgWAAgMACIAAgBIgOABIgxACQgWACgaAEQgFgBgTABQgRAAgFgBQg/gBhgAFIilALIgEgDIgCAAIgIAAIgCAFIgVgBIgOACQgwAKgJgEQgZAAgaAHIgSAFIgOAEIgOgCQgSgCgSAFIgUAIQgTAHgQgBQgQgBgdADIgyAHIAHACIlxApIAFgDQgBAAgGAEQgLAGAIgHIgpAFIAAABQgHACgGAEIgWAJIgHABIgMABIgEAAIgHgBQgDgCgGAAIgEAAIgDABIgHACIgEABIgEABQgGABAGgEQgVAGgWAEQgbAEgQABQggADgoAAIgKAAgAslBLIAEAAIACAAIAEAAQAFgCACgCIACABIACABQAEAAgEgDIAIACQAEACAIgBIgFABIAJABQAFABAGgDIAAgEIgHABIAOgEIhDgGIhPALQALgBACABQgBgCAIABQAIAAAAgCIACADIAhABIgBABQAAAAAAAAQAAAAABAAQAAABABAAQABAAABAAIAGgBIAGgDIgCAEQAEABACgCgArUBGIAHgCIgHAAgArlBDIABACQAGgCAEABQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIgPgCIgBABgAnHh3QAxABAiAFIgDADIAHgEQAOgKgMAMIAgABIACgCIAOgFIAFgCQgIgBgJAAIgaAAIgaAAQghAAgoACgA0MiWIACgCIgBAAg");
	this.shape_4.setTransform(276.95,-2.0222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-35.1,767.3000000000001,61.2);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Scene_1_ui = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ui
	this.startbutton = new lib.StartBtn();
	this.startbutton.name = "startbutton";
	this.startbutton.setTransform(640.5,680,1,1,0,0,0,137.5,30);
	new cjs.ButtonHelper(this.startbutton, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.instance = new lib.Chrome();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.startbutton}]}).to({state:[]},1).wait(299));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shootingstar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shootingstar
	this.instance = new lib.Comet();
	this.instance.setTransform(940,-0.05,1,1,-29.9992,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).wait(1).to({regX:355.4,regY:-4.5,x:1219.9,y:-165.8},0).wait(1).to({x:1194.45,y:-149.8},0).wait(1).to({x:1169,y:-133.8},0).wait(1).to({x:1143.55,y:-117.8},0).wait(1).to({x:1118.1,y:-101.8},0).wait(1).to({x:1092.65,y:-85.8},0).wait(1).to({x:1067.2,y:-69.8},0).wait(1).to({x:1041.75,y:-53.8},0).wait(1).to({x:1016.3,y:-37.8},0).wait(1).to({x:990.85,y:-21.8},0).wait(1).to({x:965.4,y:-5.8,alpha:0.875},0).wait(1).to({x:939.95,y:10.2,alpha:0.75},0).wait(1).to({x:914.5,y:26.2,alpha:0.625},0).wait(1).to({x:889.05,y:42.2,alpha:0.5},0).wait(1).to({x:863.6,y:58.2,alpha:0.375},0).wait(1).to({x:838.15,y:74.2,alpha:0.25},0).wait(1).to({x:812.7,y:90.2,alpha:0.125},0).wait(1).to({x:787.25,y:106.2,alpha:0},0).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_c9bcac94_9f41_4677_bb54_e58ba4fa894d();
	this.instance_1.setTransform(-37.8,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-25.2,791,199);


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_82ba114b_37fb_4154_9751_a5f901e61cb6();
	this.instance_1.setTransform(-21.95,-21.95);

	this.instance_2 = new lib.BMP_79ce5e1b_ca86_4d91_9972_e6c36e8eb7af();
	this.instance_2.setTransform(-21.95,-21.95);

	this.instance_3 = new lib.BMP_678af92e_427d_4f2f_ae8c_46098b755dd1();
	this.instance_3.setTransform(-21.95,-21.95);

	this.instance_4 = new lib.BMP_07a27758_58bc_4707_aa48_bfd357cee7c1();
	this.instance_4.setTransform(-21.95,-21.95);

	this.instance_5 = new lib.BMP_10fb69e5_c153_4e16_85ba_1cd982089855();
	this.instance_5.setTransform(-21.95,-21.95);

	this.instance_6 = new lib.BMP_ee21ada5_c35a_4332_883a_ccea56d57417();
	this.instance_6.setTransform(-21.95,-22);

	this.instance_7 = new lib.BMP_e3211af1_9f57_41aa_8025_350c1c045ba7();
	this.instance_7.setTransform(-21.95,-22);

	this.instance_8 = new lib.BMP_9a6b881d_1e46_4dde_bc9a_524e56997a94();
	this.instance_8.setTransform(-21.95,-22.05);

	this.instance_9 = new lib.BMP_931555c4_2862_4b84_a71a_b8a10563809d();
	this.instance_9.setTransform(-21.95,-22.05);

	this.instance_10 = new lib.BMP_05f19895_d33f_4ad4_a572_50932493ba63();
	this.instance_10.setTransform(-21.95,-22.1);

	this.instance_11 = new lib.BMP_e01465ab_243c_4864_918e_91106d9b0b47();
	this.instance_11.setTransform(-21.95,-22.1);

	this.instance_12 = new lib.BMP_fae2c426_9109_4b42_89f3_f54b30be82e1();
	this.instance_12.setTransform(-21.95,-22.15);

	this.instance_13 = new lib.BMP_ca3c3ea5_b5e4_4a20_ba4c_27f53a644682();
	this.instance_13.setTransform(-21.95,-22.2);

	this.instance_14 = new lib.BMP_4a119839_dc79_4a10_be14_2dd664137344();
	this.instance_14.setTransform(-21.95,-22.2);

	this.instance_15 = new lib.BMP_030dde22_8314_4ee8_86e2_f8a753dd92f0();
	this.instance_15.setTransform(-22,-22.25);

	this.instance_16 = new lib.BMP_e7bdbad8_4edf_4d09_a52b_9712140b38ec();
	this.instance_16.setTransform(-22.3,-22.3);

	this.instance_17 = new lib.BMP_a5ac006b_0f08_4566_a8f4_7aa718d3f709();
	this.instance_17.setTransform(-22.6,-22.35);

	this.instance_18 = new lib.BMP_f7db392a_d2f1_4ca2_a3ab_1e8658fd45ff();
	this.instance_18.setTransform(-22.95,-22.4);

	this.instance_19 = new lib.BMP_da386047_d360_4d01_8a1f_f8bbb59dbb63();
	this.instance_19.setTransform(-23.3,-22.45);

	this.instance_20 = new lib.BMP_1fd9df82_7907_4dae_b2f6_c8518e483c86();
	this.instance_20.setTransform(-23.7,-22.55);

	this.instance_21 = new lib.BMP_26ebfcb2_56f6_4865_a2ae_a04f0b651f20();
	this.instance_21.setTransform(-24.1,-22.6);

	this.instance_22 = new lib.BMP_6fb50f32_879d_42a0_b5af_08a3242ac67e();
	this.instance_22.setTransform(-24.5,-22.65);

	this.instance_23 = new lib.BMP_e81c7f38_03cd_4873_aef4_a1adbddd1837();
	this.instance_23.setTransform(-24.95,-22.7);

	this.instance_24 = new lib.BMP_857164f9_8e3f_4256_ae8c_c1a07fe84155();
	this.instance_24.setTransform(-25.4,-22.8);

	this.instance_25 = new lib.BMP_cf45db73_a90a_4150_b6d9_0a80d92af239();
	this.instance_25.setTransform(-25.85,-22.85);

	this.instance_26 = new lib.BMP_a8c2030f_8838_40b0_aa65_2750608ab331();
	this.instance_26.setTransform(-26.35,-22.95);

	this.instance_27 = new lib.BMP_b1ef7967_96d9_4203_ac69_186fb5c7b0d4();
	this.instance_27.setTransform(-26.9,-23);

	this.instance_28 = new lib.BMP_97669a33_1c69_40e7_948e_6e47d66eb4fb();
	this.instance_28.setTransform(-27.4,-23.1);

	this.instance_29 = new lib.BMP_7481eb85_7e24_4e7d_86b0_77dfbe13a1b7();
	this.instance_29.setTransform(-27.95,-23.15);

	this.instance_30 = new lib.BMP_b5cd9333_f7b7_4b45_a54d_4317e43a8522();
	this.instance_30.setTransform(-28.5,-23.25);

	this.instance_31 = new lib.BMP_3d4b3b7b_fcce_46c0_962d_e5c9cb1007a9();
	this.instance_31.setTransform(-29.1,-23.35);

	this.instance_32 = new lib.BMP_7b4ba4f3_3a37_46bb_8a6d_ed650523db52();
	this.instance_32.setTransform(-29.7,-23.45);

	this.instance_33 = new lib.BMP_edade931_f5c3_4f6a_8068_6a5db8984527();
	this.instance_33.setTransform(-30.25,-23.5);

	this.instance_34 = new lib.BMP_ffb7a9b7_f37f_46da_a252_162e030dd924();
	this.instance_34.setTransform(-30.8,-23.6);

	this.instance_35 = new lib.BMP_bcc0d77e_fe8a_45f9_b6c9_264e72ca49d4();
	this.instance_35.setTransform(-31.3,-23.65);

	this.instance_36 = new lib.BMP_c4d59918_e604_4cdf_9609_b2bab6d322d6();
	this.instance_36.setTransform(-31.85,-23.75);

	this.instance_37 = new lib.BMP_db361c00_e430_4668_a7c8_2ce1e0427063();
	this.instance_37.setTransform(-32.3,-23.85);

	this.instance_38 = new lib.BMP_4bdf9928_8f50_465d_835a_1956740b02bd();
	this.instance_38.setTransform(-32.75,-23.95);

	this.instance_39 = new lib.BMP_07b9e02b_9849_494a_ae5c_dbdffd369c47();
	this.instance_39.setTransform(-33.2,-24.05);

	this.instance_40 = new lib.BMP_83e71165_e059_4da4_aaf7_1f49c8c7ba2e();
	this.instance_40.setTransform(-33.6,-24.15);

	this.instance_41 = new lib.BMP_07a51f5b_4ad9_4134_b89f_613d558732bd();
	this.instance_41.setTransform(-34,-24.25);

	this.instance_42 = new lib.BMP_c589a100_06f9_456d_891c_f21ae4d2996a();
	this.instance_42.setTransform(-34.4,-24.35);

	this.instance_43 = new lib.BMP_85d5ad9e_f031_4738_8391_696c4d46b198();
	this.instance_43.setTransform(-34.75,-24.45);

	this.instance_44 = new lib.BMP_3eae56f1_c9f0_40bf_af41_2b38f8b3a1bb();
	this.instance_44.setTransform(-35.1,-24.5);

	this.instance_45 = new lib.BMP_2e8e47ac_347a_4921_b666_d939924f10a8();
	this.instance_45.setTransform(-35.4,-24.6);

	this.instance_46 = new lib.BMP_87f53995_1324_4c9d_80c4_fddb7a70aa71();
	this.instance_46.setTransform(-35.7,-24.7);

	this.instance_47 = new lib.BMP_71b0e59a_9b0c_4888_bb0e_d96340d1f242();
	this.instance_47.setTransform(-35.95,-24.75);

	this.instance_48 = new lib.BMP_8785e1f2_3ca5_4752_9811_d4b5d288d14d();
	this.instance_48.setTransform(-36.25,-24.8);

	this.instance_49 = new lib.BMP_5e7dd8dd_41ed_4780_a7d1_b50c7a531741();
	this.instance_49.setTransform(-36.45,-24.85);

	this.instance_50 = new lib.BMP_1d78078b_7c4a_44cf_a3ed_0b5ba8043d64();
	this.instance_50.setTransform(-36.7,-24.9);

	this.instance_51 = new lib.BMP_cdf3db43_5d89_4c75_8d5f_c5bf8d2becc2();
	this.instance_51.setTransform(-36.9,-24.95);

	this.instance_52 = new lib.BMP_25dd3e6d_bce4_4e8d_b067_e73f9ada74df();
	this.instance_52.setTransform(-37.1,-25);

	this.instance_53 = new lib.BMP_9e831d91_10d1_4561_82f5_e434ff830b28();
	this.instance_53.setTransform(-37.25,-25.05);

	this.instance_54 = new lib.BMP_7579c9e7_a672_4034_bf20_010f6ee8d910();
	this.instance_54.setTransform(-37.4,-25.05);

	this.instance_55 = new lib.BMP_64ecbe2e_33cb_41be_b938_2228e1dd0163();
	this.instance_55.setTransform(-37.5,-25.1);

	this.instance_56 = new lib.BMP_5de461fe_320f_400d_970a_b98b50952070();
	this.instance_56.setTransform(-37.6,-25.15);

	this.instance_57 = new lib.BMP_5a05f375_a67a_40e3_84d7_150a218b16fb();
	this.instance_57.setTransform(-37.7,-25.15);

	this.instance_58 = new lib.BMP_3797dc8a_092e_4435_8174_329b48be34ec();
	this.instance_58.setTransform(-37.75,-25.2);

	this.instance_59 = new lib.BMP_6d423414_d40d_4c35_b0a8_3476c09c6317();
	this.instance_59.setTransform(-37.8,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-25.2,791.0999999999999,199.2);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_e15afa35_80a3_425a_84b9_68d6a0fa8731();
	this.instance_1.setTransform(-53.4,-26.25);

	this.instance_2 = new lib.BMP_d4dc6206_1f14_4eee_afe5_05cc74e7b3fa();
	this.instance_2.setTransform(-52.3,-26.1);

	this.instance_3 = new lib.BMP_9f4b2cb7_d0b3_4163_8d15_ac5c2c67c526();
	this.instance_3.setTransform(-51.25,-25.95);

	this.instance_4 = new lib.BMP_aa8028b2_e1e3_456c_bf71_f759d7243c32();
	this.instance_4.setTransform(-50.15,-25.8);

	this.instance_5 = new lib.BMP_92550d65_ea0b_49d0_8177_5df1a34de32c();
	this.instance_5.setTransform(-49.1,-25.65);

	this.instance_6 = new lib.BMP_49df7a24_06ce_473b_81cc_e52f4d3a977a();
	this.instance_6.setTransform(-48.05,-25.5);

	this.instance_7 = new lib.BMP_6b7e03d4_0756_423f_9e0a_ebd6e0839128();
	this.instance_7.setTransform(-46.95,-25.35);

	this.instance_8 = new lib.BMP_f031c3b1_4fcb_4cab_91d5_46b3f2ef29e9();
	this.instance_8.setTransform(-45.9,-25.2);

	this.instance_9 = new lib.BMP_34402bb1_d5ae_45e3_a5f2_56625a4e0d57();
	this.instance_9.setTransform(-44.8,-25.05);

	this.instance_10 = new lib.BMP_85618301_2561_4a31_a072_f12fc9e0316d();
	this.instance_10.setTransform(-43.7,-24.9);

	this.instance_11 = new lib.BMP_11a81725_7394_4b1d_b4a5_9c9b05e79684();
	this.instance_11.setTransform(-42.65,-24.75);

	this.instance_12 = new lib.BMP_1a8060b2_91a8_4e01_976b_68e2c31856e9();
	this.instance_12.setTransform(-41.6,-24.6);

	this.instance_13 = new lib.BMP_028ce37d_20ec_4b99_bd71_d8b6123db823();
	this.instance_13.setTransform(-40.5,-24.4);

	this.instance_14 = new lib.BMP_0925b421_6e8e_4d5f_9d9f_dcae5c5e42a9();
	this.instance_14.setTransform(-39.4,-24.3);

	this.instance_15 = new lib.BMP_77fc480d_3101_455b_9822_f76c3b77688f();
	this.instance_15.setTransform(-38.35,-24.15);

	this.instance_16 = new lib.BMP_c7d580e6_f7ca_48b1_9955_34ab5c7930d6();
	this.instance_16.setTransform(-37.25,-23.95);

	this.instance_17 = new lib.BMP_05090bc7_b8b5_444a_8748_a8aa69a8cb47();
	this.instance_17.setTransform(-36.15,-23.8);

	this.instance_18 = new lib.BMP_a64cf5dc_d054_4387_b714_5d8a7b7ed99c();
	this.instance_18.setTransform(-35.1,-23.7);

	this.instance_19 = new lib.BMP_38f1464a_f22b_4f89_8ae1_080462984ad2();
	this.instance_19.setTransform(-34,-23.5);

	this.instance_20 = new lib.BMP_44b9b88d_5dd0_4051_a015_dcfcde592f51();
	this.instance_20.setTransform(-32.9,-23.35);

	this.instance_21 = new lib.BMP_1c2a3b20_4f84_41bc_b00f_78d35a31b031();
	this.instance_21.setTransform(-31.85,-23.2);

	this.instance_22 = new lib.BMP_8ebc8331_1d2c_4895_b516_992e35a98cab();
	this.instance_22.setTransform(-30.75,-23.05);

	this.instance_23 = new lib.BMP_377f027b_01ca_4972_b8ab_9221581d5afc();
	this.instance_23.setTransform(-29.7,-22.9);

	this.instance_24 = new lib.BMP_7abc84ce_1c87_407c_b532_c1a5389b542e();
	this.instance_24.setTransform(-28.6,-22.7);

	this.instance_25 = new lib.BMP_86828c94_50f5_45e1_a5f1_5be7800a4614();
	this.instance_25.setTransform(-27.5,-22.55);

	this.instance_26 = new lib.BMP_26cb56d2_4735_400b_a44c_256ff3a4201f();
	this.instance_26.setTransform(-26.4,-22.45);

	this.instance_27 = new lib.BMP_6b033c84_0b0f_426b_9726_fdae667f15d6();
	this.instance_27.setTransform(-25.3,-22.3);

	this.instance_28 = new lib.BMP_e4caa24a_7300_469b_831a_ce6d6543d88a();
	this.instance_28.setTransform(-24.2,-22.2);

	this.instance_29 = new lib.BMP_27076113_7b2d_4923_997e_0b20bb7ff264();
	this.instance_29.setTransform(-23.1,-22.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-26.2,812,200.1);


(lib.MessageText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// message
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(467,71,1,1,0,0,0,362,70);

	this.instance_1 = new lib.PuppetShape_2("synched",1,false);
	this.instance_1.setTransform(467,71,1,1,0,0,0,362,70);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_4("synched",1,false);
	this.instance_2.setTransform(467,71,1,1,0,0,0,362,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).wait(1).to({regX:357.7,regY:74.4,x:462.7,y:75.4,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.2,863.6,200.2);


(lib.Scene_1_message = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// message
	this.instance = new lib.MessageText("synched",0);
	this.instance.setTransform(640,96.8,1,1,0,0,0,463.5,66.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({alpha:1,mode:"single",startPosition:29},30).wait(30).to({mode:"synched",loop:false},0).to({alpha:0,startPosition:0},60,cjs.Ease.quadOut).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.interactive = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,299];
	this.streamSoundSymbolsList[0] = [{id:"Gothic",startFrame:0,endFrame:300,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("Gothic",0);
		this.InsertIntoSoundStreamData(soundInstance,0,300,1);
		this.startbutton = this.ui.startbutton;
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.startbutton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_1 = function() {
		this.startbutton = undefined;
	}
	this.frame_299 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(298).call(this.frame_299).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(680.1,285.15,0.7812,0.7812,0,0,0,0.6,0.5);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:0.5,regY:0.4,scaleX:1,scaleY:1,x:641.1,y:359.1},89,cjs.Ease.sineOut).wait(60).to({regX:0.6,regY:0.5,scaleX:0.8333,scaleY:0.8333,x:642.15,y:302.55},46,cjs.Ease.quadInOut).wait(37).to({regX:0.9,regY:0.8,scaleX:0.7407,scaleY:0.7407,x:640.7,y:301.15},49,cjs.Ease.quadOut).wait(19));

	// ui_obj_
	this.ui = new lib.Scene_1_ui();
	this.ui.name = "ui";
	this.ui.setTransform(640,360,1,1,0,0,0,640,360);
	this.ui.depth = 0;
	this.ui.isAttachedToCamera = 1
	this.ui.isAttachedToMask = 0
	this.ui.layerDepth = 0
	this.ui.layerIndex = 0
	this.ui.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ui).wait(300));

	// message_obj_
	this.message = new lib.Scene_1_message();
	this.message.name = "message";
	this.message.setTransform(0,0.05,1.2801,1.2801,0,0,0,179.6,3.5);
	this.message.depth = 0;
	this.message.isAttachedToCamera = 0
	this.message.isAttachedToMask = 0
	this.message.layerDepth = 0
	this.message.layerIndex = 1
	this.message.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.message).wait(149).to({regX:0.7,regY:-1.2,scaleX:1,scaleY:1,x:0.05,y:0},0).to({regX:82.4,regY:1.4,scaleX:1.1447,scaleY:1.1447,x:0,y:-0.05},30).wait(30).to({regX:108.3,regY:2.1,scaleX:1.2001,scaleY:1.2001},0).to({regX:162.7,regY:32.1,scaleX:1.3401,scaleY:1.3401,x:0.05},60,cjs.Ease.quadOut).wait(31));

	// shootingstar_obj_
	this.shootingstar = new lib.Scene_1_shootingstar();
	this.shootingstar.name = "shootingstar";
	this.shootingstar.setTransform(0,0.05,1.2801,1.2801,0,0,0,179.6,3.5);
	this.shootingstar.depth = 0;
	this.shootingstar.isAttachedToCamera = 0
	this.shootingstar.isAttachedToMask = 0
	this.shootingstar.layerDepth = 0
	this.shootingstar.layerIndex = 2
	this.shootingstar.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shootingstar).wait(33).to({regX:81,regY:0.7,scaleX:1.1092,scaleY:1.1092,x:-0.05,y:0},0).wait(179).to({regX:108.3,regY:2.1,scaleX:1.2001,scaleY:1.2001,x:0,y:-0.05},0).wait(1).to({regX:1016.3,regY:-37.8,scaleX:1,scaleY:1,x:908.05,y:-39.9},0).wait(87));

	// shimmer_obj_
	this.shimmer = new lib.Scene_1_shimmer();
	this.shimmer.name = "shimmer";
	this.shimmer.setTransform(356.8,597.2,1.2801,1.2801,0,0,0,458.3,470);
	this.shimmer.depth = 0;
	this.shimmer.isAttachedToCamera = 0
	this.shimmer.isAttachedToMask = 0
	this.shimmer.layerDepth = 0
	this.shimmer.layerIndex = 3
	this.shimmer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shimmer).wait(4).to({regX:451.2,regY:478.9,scaleX:1.2553,scaleY:1.2553,y:597.25},0).wait(2).to({regX:447.7,regY:483.3,scaleX:1.2433,scaleY:1.2433,x:356.85,y:597.2},0).wait(3).to({regX:442.4,regY:489.9,scaleX:1.2258,scaleY:1.2258},0).wait(2).to({regX:438.9,regY:494.2,scaleX:1.2145,scaleY:1.2145,y:597.15},0).wait(3).to({regX:433.7,regY:500.7,scaleX:1.1981,scaleY:1.1981,y:597.2},0).wait(4).to({regX:426.8,regY:509.4,scaleX:1.1771,scaleY:1.1771,y:597.25},0).wait(2).to({regX:423.4,regY:513.5,scaleX:1.1671,scaleY:1.1671,x:356.8,y:597.2},0).wait(3).to({regX:418.4,regY:519.6,scaleX:1.1526,scaleY:1.1526,x:356.75,y:597.15},0).wait(2).to({regX:415.2,regY:523.7,scaleX:1.1434,scaleY:1.1434,x:356.85,y:597.2},0).wait(2).to({regX:411.9,regY:527.6,scaleX:1.1344,scaleY:1.1344,x:356.75,y:597.15},0).wait(4).to({regX:405.8,regY:535.5,scaleX:1.1173,scaleY:1.1173,x:356.85,y:597.3},0).wait(2).to({regX:402.7,regY:539.1,scaleX:1.1092,scaleY:1.1092,x:356.8,y:597.2},0).wait(3).to({regX:398.4,regY:544.6,scaleX:1.0977,scaleY:1.0977,x:356.85},0).wait(2).to({regX:395.5,regY:548.1,scaleX:1.0903,scaleY:1.0903,x:356.75,y:597.15},0).wait(2).to({regX:392.7,regY:551.6,scaleX:1.0833,scaleY:1.0833,x:356.8,y:597.25},0).wait(1).to({regX:391.4,regY:553.2,scaleX:1.0799,scaleY:1.0799,y:597.2},0).wait(4).to({regX:386.2,regY:559.7,scaleX:1.067,scaleY:1.067},0).wait(2).to({regX:383.8,regY:562.8,scaleX:1.061,scaleY:1.061,x:356.85},0).wait(3).to({regX:380.2,regY:567.1,scaleX:1.0525,scaleY:1.0525,x:356.75,y:597.15},0).wait(2).to({regX:378.1,regY:569.9,scaleX:1.0472,scaleY:1.0472,x:356.85,y:597.2},0).wait(2).to({regX:375.9,regY:572.6,scaleX:1.0422,scaleY:1.0422,x:356.8,y:597.25},0).wait(4).to({regX:371.9,regY:577.4,scaleX:1.033,scaleY:1.033,x:356.75,y:597.15},0).wait(2).to({regX:370.2,regY:579.7,scaleX:1.0289,scaleY:1.0289,x:356.85,y:597.2},0).wait(3).to({regX:367.7,regY:582.8,scaleX:1.0232,scaleY:1.0232},0).wait(2).to({regX:366.2,regY:584.6,scaleX:1.0198,scaleY:1.0198,y:597.15},0).wait(2).to({regX:364.8,regY:586.5,scaleX:1.0166,scaleY:1.0166,y:597.2},0).wait(1).to({regX:364.1,regY:587.2,scaleX:1.0151,scaleY:1.0151,y:597.15},0).wait(4).to({regX:361.7,regY:590.1,scaleX:1.0099,scaleY:1.0099,x:356.8},0).wait(2).to({regX:360.8,regY:591.4,scaleX:1.0077,scaleY:1.0077,x:356.85,y:597.25},0).wait(3).to({regX:359.4,regY:593,scaleX:1.005,scaleY:1.005,x:356.8},0).wait(2).to({regX:358.8,regY:593.9,scaleX:1.0035,scaleY:1.0035,x:356.85},0).wait(2).to({regX:358.2,regY:594.6,scaleX:1.0022,scaleY:1.0022,x:356.75},0).wait(4).to({regX:357.5,regY:595.5,scaleX:1.0006,scaleY:1.0006,x:356.8},0).wait(2).to({regX:357.2,regY:595.7,scaleX:1.0002,scaleY:1.0002,x:356.75,y:597.2},0).wait(3).to({regX:357.4,regY:596,scaleX:1,scaleY:1,x:356.8,y:597.25},0).wait(62).to({regX:357.8,regY:595.2,scaleX:1.0015,scaleY:1.0015,y:597.2},0).wait(2).to({regX:358.5,regY:593.8,scaleX:1.004,scaleY:1.004,y:597.25},0).wait(3).to({regX:360.2,regY:590.2,scaleX:1.0102,scaleY:1.0102,x:356.75,y:597.2},0).wait(2).to({regX:361.9,regY:587,scaleX:1.016,scaleY:1.016,y:597.25},0).wait(2).to({regX:364,regY:583,scaleX:1.0233,scaleY:1.0233,x:356.8},0).wait(4).to({regX:369.1,regY:572.8,scaleX:1.0421,scaleY:1.0421,y:597.2},0).wait(2).to({regX:372.2,regY:566.6,scaleX:1.0538,scaleY:1.0538},0).wait(3).to({regX:377.6,regY:555.9,scaleX:1.0747,scaleY:1.0747,y:597.15},0).wait(2).to({regX:381.6,regY:548,scaleX:1.091,scaleY:1.091,x:356.85,y:597.25},0).wait(2).to({regX:385.6,regY:540,scaleX:1.1077,scaleY:1.1077},0).wait(4).to({regX:392.5,regY:526.2,scaleX:1.1379,scaleY:1.1379,x:356.8,y:597.2},0).wait(122));

	// detail_obj_
	this.detail = new lib.Scene_1_detail();
	this.detail.name = "detail";
	this.detail.setTransform(617.05,619.35,1.2801,1.2801,0,0,0,661.6,487.3);
	this.detail.depth = 0;
	this.detail.isAttachedToCamera = 0
	this.detail.isAttachedToMask = 0
	this.detail.layerDepth = 0
	this.detail.layerIndex = 4
	this.detail.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.detail).wait(300));

	// ground_obj_
	this.ground = new lib.Scene_1_ground();
	this.ground.name = "ground";
	this.ground.setTransform(640.05,630,1.2801,1.2801,0,0,0,679.6,495.6);
	this.ground.depth = 0;
	this.ground.isAttachedToCamera = 0
	this.ground.isAttachedToMask = 0
	this.ground.layerDepth = 0
	this.ground.layerIndex = 5
	this.ground.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(300));

	// mountains_obj_
	this.mountains = new lib.Scene_1_mountains();
	this.mountains.name = "mountains";
	this.mountains.setTransform(704.35,334.25,1.2801,1.2801,0,0,0,729.8,264.6);
	this.mountains.depth = 0;
	this.mountains.isAttachedToCamera = 0
	this.mountains.isAttachedToMask = 0
	this.mountains.layerDepth = 0
	this.mountains.layerIndex = 6
	this.mountains.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mountains).wait(300));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.setTransform(933.1,233,1.2801,1.2801,0,0,0,908.5,185.5);
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 7
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1).to({regX:908.9,regY:186.3,scaleX:1.2738,scaleY:1.2738,x:933,y:232.95},0).wait(1).to({regX:909.3,regY:187.1,scaleX:1.2676,scaleY:1.2676,x:932.95,y:233},0).wait(1).to({regX:909.8,regY:187.9,scaleX:1.2614,scaleY:1.2614,y:232.95},0).wait(1).to({regX:910.2,regY:188.8,scaleX:1.2553,scaleY:1.2553,x:933,y:233.05},0).wait(1).to({regX:910.6,regY:189.6,scaleX:1.2493,scaleY:1.2493,x:932.95},0).wait(1).to({regX:911.1,regY:190.3,scaleX:1.2433,scaleY:1.2433,x:933,y:232.9},0).wait(1).to({regX:911.6,regY:191.2,scaleX:1.2374,scaleY:1.2374,x:933.05,y:233.05},0).wait(1).to({regX:912,regY:192,scaleX:1.2316,scaleY:1.2316},0).wait(1).to({regX:912.4,regY:192.8,scaleX:1.2258,scaleY:1.2258,x:933,y:233},0).wait(1).to({regX:912.9,regY:193.6,scaleX:1.2201,scaleY:1.2201,x:933.05,y:233.05},0).wait(1).to({regX:913.3,regY:194.3,scaleX:1.2145,scaleY:1.2145,x:933,y:232.95},0).wait(1).to({regX:913.8,regY:195.2,scaleX:1.2089,scaleY:1.2089,x:933.1,y:233},0).wait(1).to({regX:914.1,regY:196,scaleX:1.2035,scaleY:1.2035,x:933,y:233.05},0).wait(1).to({regX:914.6,regY:196.7,scaleX:1.1981,scaleY:1.1981,y:233},0).wait(1).to({regX:915,regY:197.6,scaleX:1.1927,scaleY:1.1927,x:932.95,y:233.05},0).wait(1).to({regX:915.4,regY:198.3,scaleX:1.1875,scaleY:1.1875,x:933,y:232.9},0).wait(1).to({regX:915.8,regY:199.1,scaleX:1.1823,scaleY:1.1823,y:233},0).wait(1).to({regX:916.2,regY:200,scaleX:1.1771,scaleY:1.1771,x:932.9,y:233.05},0).wait(1).to({regX:916.6,regY:200.6,scaleX:1.1721,scaleY:1.1721,y:232.95},0).wait(1).to({regX:917.1,regY:201.5,scaleX:1.1671,scaleY:1.1671,x:933,y:233.1},0).wait(1).to({regX:917.5,regY:202.2,scaleX:1.1622,scaleY:1.1622,y:233.05},0).wait(1).to({regX:917.8,regY:203,scaleX:1.1574,scaleY:1.1574},0).wait(1).to({regX:918.4,regY:203.7,scaleX:1.1526,scaleY:1.1526,x:933.1},0).wait(1).to({regX:918.7,regY:204.4,scaleX:1.148,scaleY:1.148,x:933,y:233},0).wait(1).to({regX:919.1,regY:205.2,scaleX:1.1434,scaleY:1.1434},0).wait(1).to({regX:919.5,regY:205.8,scaleX:1.1388,scaleY:1.1388,y:232.9},0).wait(1).to({regX:919.9,regY:206.6,scaleX:1.1344,scaleY:1.1344,y:233},0).wait(1).to({regX:920.4,regY:207.3,scaleX:1.13,scaleY:1.13,x:933.05},0).wait(1).to({regX:920.6,regY:208.1,scaleX:1.1257,scaleY:1.1257,x:932.95,y:233.05},0).wait(1).to({regX:921.1,regY:208.8,scaleX:1.1215,scaleY:1.1215,x:933.05},0).wait(1).to({regX:921.5,regY:209.5,scaleX:1.1173,scaleY:1.1173},0).wait(1).to({regX:921.8,regY:210.1,scaleX:1.1133,scaleY:1.1133,x:933,y:233},0).wait(1).to({regX:922.1,regY:210.8,scaleX:1.1092,scaleY:1.1092,x:932.9},0).wait(1).to({regX:922.6,regY:211.6,scaleX:1.1053,scaleY:1.1053,x:933.05,y:233.1},0).wait(1).to({regX:922.9,regY:212.2,scaleX:1.1015,scaleY:1.1015,y:233.05},0).wait(1).to({regX:923.2,regY:212.8,scaleX:1.0977,scaleY:1.0977,x:932.95,y:233},0).wait(1).to({regX:923.6,regY:213.4,scaleX:1.0939,scaleY:1.0939,x:933},0).wait(1).to({regX:924,regY:214.1,scaleX:1.0903,scaleY:1.0903},0).wait(1).to({regX:924.4,regY:214.7,scaleX:1.0868,scaleY:1.0868,x:933.05},0).wait(1).to({regX:924.6,regY:215.3,scaleX:1.0833,scaleY:1.0833,x:933,y:232.95},0).wait(1).to({regX:925,regY:216,scaleX:1.0799,scaleY:1.0799,y:233.05},0).wait(1).to({regX:925.3,regY:216.6,scaleX:1.0765,scaleY:1.0765},0).wait(1).to({regX:925.6,regY:217.2,scaleX:1.0733,scaleY:1.0733,x:932.95,y:233},0).wait(1).to({regX:926,regY:217.8,scaleX:1.0701,scaleY:1.0701,x:933.05,y:233.05},0).wait(1).to({regX:926.2,regY:218.4,scaleX:1.067,scaleY:1.067,x:932.95,y:233},0).wait(1).to({regX:926.6,regY:219,scaleX:1.0639,scaleY:1.0639,x:933.05,y:233.05},0).wait(1).to({regX:926.9,regY:219.5,scaleX:1.061,scaleY:1.061,y:233},0).wait(1).to({regX:927.2,regY:220.1,scaleX:1.058,scaleY:1.058,x:933},0).wait(1).to({regX:927.5,regY:220.6,scaleX:1.0552,scaleY:1.0552,x:933.05,y:233.05},0).wait(1).to({regX:927.7,regY:221.1,scaleX:1.0525,scaleY:1.0525,x:933,y:233},0).wait(1).to({regX:928,regY:221.7,scaleX:1.0498,scaleY:1.0498,y:233.05},0).wait(1).to({regX:928.3,regY:222.1,scaleX:1.0472,scaleY:1.0472,y:233},0).wait(1).to({regX:928.5,regY:222.6,scaleX:1.0447,scaleY:1.0447,x:933.05},0).wait(1).to({regX:928.8,regY:223.1,scaleX:1.0422,scaleY:1.0422,x:933},0).wait(1).to({regX:929.1,regY:223.6,scaleX:1.0398,scaleY:1.0398,x:933.05},0).wait(1).to({regX:929.3,regY:224,scaleX:1.0375,scaleY:1.0375,x:933},0).wait(1).to({regX:929.5,regY:224.5,scaleX:1.0352,scaleY:1.0352,x:933.05,y:233.05},0).wait(1).to({regX:929.8,regY:224.8,scaleX:1.033,scaleY:1.033,y:232.95},0).wait(1).to({regX:930,regY:225.3,scaleX:1.0309,scaleY:1.0309,x:933,y:233},0).wait(1).to({regX:930.1,regY:225.8,scaleX:1.0289,scaleY:1.0289,x:932.95,y:233.1},0).wait(1).to({regX:930.4,regY:226.1,scaleX:1.0269,scaleY:1.0269,x:933.05,y:233},0).wait(1).to({regX:930.6,regY:226.5,scaleX:1.0251,scaleY:1.0251,x:932.95},0).wait(1).to({regX:930.8,regY:226.8,scaleX:1.0232,scaleY:1.0232,x:933,y:232.95},0).wait(1).to({regX:931,regY:227.2,scaleX:1.0215,scaleY:1.0215,y:233},0).wait(1).to({regX:931.2,regY:227.5,scaleX:1.0198,scaleY:1.0198},0).wait(1).to({regX:931.4,regY:227.8,scaleX:1.0181,scaleY:1.0181,x:933.05,y:232.95},0).wait(1).to({regX:931.6,regY:228.2,scaleX:1.0166,scaleY:1.0166,y:233},0).wait(1).to({regY:228.5,scaleX:1.0151,scaleY:1.0151,x:932.95},0).wait(1).to({regX:931.9,regY:228.8,scaleX:1.0137,scaleY:1.0137,x:933.05,y:233.05},0).wait(1).to({regX:932,regY:229.1,scaleX:1.0124,scaleY:1.0124,x:933},0).wait(1).to({regX:932.1,regY:229.3,scaleX:1.0111,scaleY:1.0111,x:932.95,y:233},0).wait(1).to({regX:932.2,regY:229.5,scaleX:1.0099,scaleY:1.0099},0).wait(1).to({regX:932.4,regY:229.8,scaleX:1.0088,scaleY:1.0088,x:933,y:233.05},0).wait(1).to({regX:932.6,regY:229.9,scaleX:1.0077,scaleY:1.0077,x:933.05,y:233},0).wait(1).to({regY:230.2,scaleX:1.0067,scaleY:1.0067,x:933},0).wait(1).to({regX:932.7,regY:230.4,scaleX:1.0058,scaleY:1.0058},0).wait(1).to({regX:932.8,regY:230.6,scaleX:1.005,scaleY:1.005,x:933.05,y:233.05},0).wait(1).to({regX:933,regY:230.8,scaleX:1.0042,scaleY:1.0042},0).wait(1).to({regY:230.9,scaleX:1.0035,scaleY:1.0035,y:233},0).wait(1).to({regX:933.1,regY:231,scaleX:1.0028,scaleY:1.0028},0).wait(1).to({regY:231.2,scaleX:1.0022,scaleY:1.0022,x:932.9,y:233.05},0).wait(1).to({regX:933.2,scaleX:1.0017,scaleY:1.0017,x:933,y:232.95},0).wait(1).to({regY:231.3,scaleX:1.0013,scaleY:1.0013,x:932.95},0).wait(1).to({regX:933.3,regY:231.4,scaleX:1.0009,scaleY:1.0009,x:933,y:233},0).wait(1).to({regX:933.4,regY:231.5,scaleX:1.0006,scaleY:1.0006,x:933.05,y:233.05},0).wait(1).to({regX:933.3,scaleX:1.0004,scaleY:1.0004,x:933,y:233},0).wait(1).to({regY:231.6,scaleX:1.0002,scaleY:1.0002,x:932.95,y:233.05},0).wait(1).to({regX:933.4,scaleX:1.0001,scaleY:1.0001,y:233},0).wait(1).to({regX:933.6,regY:231.8,scaleX:1,scaleY:1,x:933.05,y:233.05},0).wait(211));

	// stars_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EiAAAAGIAAgLMEABAAAIAAALg");
	var mask_graphics_1 = new cjs.Graphics().p("Eh/XAAGIAAgLMD+vAAAIAAALg");
	var mask_graphics_2 = new cjs.Graphics().p("Eh+wAAGIAAgLMD9gAAAIAAALg");
	var mask_graphics_3 = new cjs.Graphics().p("Eh+IAAGIAAgLMD8RAAAIAAALg");
	var mask_graphics_4 = new cjs.Graphics().p("Eh9hAAGIAAgLMD7DAAAIAAALg");
	var mask_graphics_5 = new cjs.Graphics().p("Eh87AAGIAAgLMD53AAAIAAALg");
	var mask_graphics_6 = new cjs.Graphics().p("Eh8VAAGIAAgLMD4qAAAIAAALg");
	var mask_graphics_7 = new cjs.Graphics().p("Eh7uAAGIAAgLMD3eAAAIAAALg");
	var mask_graphics_8 = new cjs.Graphics().p("Eh7JAAGIAAgLMD2TAAAIAAALg");
	var mask_graphics_9 = new cjs.Graphics().p("Eh6kAAGIAAgLMD1JAAAIAAALg");
	var mask_graphics_10 = new cjs.Graphics().p("Eh6AAAGIAAgLMD0BAAAIAAALg");
	var mask_graphics_11 = new cjs.Graphics().p("Eh5cAAGIAAgLMDy5AAAIAAALg");
	var mask_graphics_12 = new cjs.Graphics().p("Eh44AAGIAAgLMDxxAAAIAAALg");
	var mask_graphics_13 = new cjs.Graphics().p("Eh4VAAGIAAgLMDwrAAAIAAALg");
	var mask_graphics_14 = new cjs.Graphics().p("Eh3zAAGIAAgLMDvnAAAIAAALg");
	var mask_graphics_15 = new cjs.Graphics().p("Eh3QAAGIAAgLMDuhAAAIAAALg");
	var mask_graphics_16 = new cjs.Graphics().p("Eh2vAAGIAAgLMDtfAAAIAAALg");
	var mask_graphics_17 = new cjs.Graphics().p("Eh2NAAGIAAgLMDsbAAAIAAALg");
	var mask_graphics_18 = new cjs.Graphics().p("Eh1sAAGIAAgLMDraAAAIAAALg");
	var mask_graphics_19 = new cjs.Graphics().p("Eh1NAAGIAAgLMDqaAAAIAAALg");
	var mask_graphics_20 = new cjs.Graphics().p("Eh0tAAGIAAgLMDpbAAAIAAALg");
	var mask_graphics_21 = new cjs.Graphics().p("Eh0NAAGIAAgLMDobAAAIAAALg");
	var mask_graphics_22 = new cjs.Graphics().p("EhzvAAGIAAgLMDneAAAIAAALg");
	var mask_graphics_23 = new cjs.Graphics().p("EhzQAAGIAAgLMDmhAAAIAAALg");
	var mask_graphics_24 = new cjs.Graphics().p("EhyyAAGIAAgLMDllAAAIAAALg");
	var mask_graphics_25 = new cjs.Graphics().p("EhyUAAGIAAgLMDkqAAAIAAALg");
	var mask_graphics_26 = new cjs.Graphics().p("Ehx3AAGIAAgLMDjvAAAIAAALg");
	var mask_graphics_27 = new cjs.Graphics().p("EhxbAAGIAAgLMDi3AAAIAAALg");
	var mask_graphics_28 = new cjs.Graphics().p("Ehw/AAGIAAgLMDh/AAAIAAALg");
	var mask_graphics_29 = new cjs.Graphics().p("EhwjAAGIAAgLMDhIAAAIAAALg");
	var mask_graphics_30 = new cjs.Graphics().p("EhwJAAGIAAgKMDgSAAAIAAAKg");
	var mask_graphics_31 = new cjs.Graphics().p("EhvuAAGIAAgLMDfdAAAIAAALg");
	var mask_graphics_32 = new cjs.Graphics().p("EhvUAAFIAAgKMDepAAAIAAAKg");
	var mask_graphics_33 = new cjs.Graphics().p("Ehu6AAFIAAgKMDd1AAAIAAAKg");
	var mask_graphics_34 = new cjs.Graphics().p("EhuhAAFIAAgKMDdDAAAIAAAKg");
	var mask_graphics_35 = new cjs.Graphics().p("EhuIAAFIAAgKMDcRAAAIAAAKg");
	var mask_graphics_36 = new cjs.Graphics().p("EhtwAAGIAAgLMDbhAAAIAAALg");
	var mask_graphics_37 = new cjs.Graphics().p("EhtYAAFIAAgKMDaxAAAIAAAKg");
	var mask_graphics_38 = new cjs.Graphics().p("EhtBAAFIAAgKMDaDAAAIAAAKg");
	var mask_graphics_39 = new cjs.Graphics().p("EhsqAAFIAAgKMDZVAAAIAAAKg");
	var mask_graphics_40 = new cjs.Graphics().p("EhsUAAGIAAgKMDYpAAAIAAAKg");
	var mask_graphics_41 = new cjs.Graphics().p("Ehr+AAFIAAgJMDX9AAAIAAAJg");
	var mask_graphics_42 = new cjs.Graphics().p("EhrpAAGIAAgLMDXTAAAIAAALg");
	var mask_graphics_43 = new cjs.Graphics().p("EhrUAAFIAAgJMDWpAAAIAAAJg");
	var mask_graphics_44 = new cjs.Graphics().p("EhrAAAFIAAgJMDWAAAAIAAAJg");
	var mask_graphics_45 = new cjs.Graphics().p("EhqsAAFIAAgJMDVYAAAIAAAJg");
	var mask_graphics_46 = new cjs.Graphics().p("EhqYAAFIAAgJMDUxAAAIAAAJg");
	var mask_graphics_47 = new cjs.Graphics().p("EhqFAAFIAAgJMDULAAAIAAAJg");
	var mask_graphics_48 = new cjs.Graphics().p("EhpyAAFIAAgJMDTlAAAIAAAJg");
	var mask_graphics_49 = new cjs.Graphics().p("EhpgAAFIAAgJMDTCAAAIAAAJg");
	var mask_graphics_50 = new cjs.Graphics().p("EhpPAAFIAAgJMDSfAAAIAAAJg");
	var mask_graphics_51 = new cjs.Graphics().p("Eho+AAFIAAgJMDR9AAAIAAAJg");
	var mask_graphics_52 = new cjs.Graphics().p("EhotAAFIAAgJMDRbAAAIAAAJg");
	var mask_graphics_53 = new cjs.Graphics().p("EhodAAFIAAgJMDQ7AAAIAAAJg");
	var mask_graphics_54 = new cjs.Graphics().p("EhoNAAFIAAgJMDQbAAAIAAAJg");
	var mask_graphics_55 = new cjs.Graphics().p("Ehn+AAFIAAgJMDP9AAAIAAAJg");
	var mask_graphics_56 = new cjs.Graphics().p("EhnvAAFIAAgJMDPfAAAIAAAJg");
	var mask_graphics_57 = new cjs.Graphics().p("EhngAAFIAAgJMDPCAAAIAAAJg");
	var mask_graphics_58 = new cjs.Graphics().p("EhnTAAFIAAgJMDOmAAAIAAAJg");
	var mask_graphics_59 = new cjs.Graphics().p("EhnFAAFIAAgJMDOLAAAIAAAJg");
	var mask_graphics_60 = new cjs.Graphics().p("Ehm4AAFIAAgJMDNxAAAIAAAJg");
	var mask_graphics_61 = new cjs.Graphics().p("EhmrAAFIAAgJMDNXAAAIAAAJg");
	var mask_graphics_62 = new cjs.Graphics().p("EhmfAAFIAAgJMDM/AAAIAAAJg");
	var mask_graphics_63 = new cjs.Graphics().p("EhmUAAFIAAgJMDMpAAAIAAAJg");
	var mask_graphics_64 = new cjs.Graphics().p("EhmIAAFIAAgJMDMRAAAIAAAJg");
	var mask_graphics_65 = new cjs.Graphics().p("Ehl9AAFIAAgJMDL8AAAIAAAJg");
	var mask_graphics_66 = new cjs.Graphics().p("EhlzAAFIAAgJMDLnAAAIAAAJg");
	var mask_graphics_67 = new cjs.Graphics().p("EhlpAAFIAAgJMDLTAAAIAAAJg");
	var mask_graphics_68 = new cjs.Graphics().p("EhlgAAFIAAgJMDLBAAAIAAAJg");
	var mask_graphics_69 = new cjs.Graphics().p("EhlXAAFIAAgJMDKvAAAIAAAJg");
	var mask_graphics_70 = new cjs.Graphics().p("EhlOAAFIAAgJMDKdAAAIAAAJg");
	var mask_graphics_71 = new cjs.Graphics().p("EhlGAAFIAAgJMDKNAAAIAAAJg");
	var mask_graphics_72 = new cjs.Graphics().p("Ehk+AAFIAAgJMDJ+AAAIAAAJg");
	var mask_graphics_73 = new cjs.Graphics().p("Ehk3AAFIAAgJMDJvAAAIAAAJg");
	var mask_graphics_74 = new cjs.Graphics().p("EhkxAAFIAAgJMDJiAAAIAAAJg");
	var mask_graphics_75 = new cjs.Graphics().p("EhkqAAFIAAgJMDJVAAAIAAAJg");
	var mask_graphics_76 = new cjs.Graphics().p("EhkkAAFIAAgJMDJJAAAIAAAJg");
	var mask_graphics_77 = new cjs.Graphics().p("EhkfAAFIAAgJMDI/AAAIAAAJg");
	var mask_graphics_78 = new cjs.Graphics().p("EhkaAAFIAAgJMDI1AAAIAAAJg");
	var mask_graphics_79 = new cjs.Graphics().p("EhkVAAFIAAgJMDIrAAAIAAAJg");
	var mask_graphics_80 = new cjs.Graphics().p("EhkRABBIAAiBMDIjAAAIAACBg");
	var mask_graphics_81 = new cjs.Graphics().p("EhkNAB9IAAj5MDIbAAAIAAD5g");
	var mask_graphics_82 = new cjs.Graphics().p("EhkKAC5IAAlxMDIVAAAIAAFxg");
	var mask_graphics_83 = new cjs.Graphics().p("EhkHAD1IAAnpMDIPAAAIAAHpg");
	var mask_graphics_84 = new cjs.Graphics().p("EhkFAExIAAphMDILAAAIAAJhg");
	var mask_graphics_85 = new cjs.Graphics().p("EhkDAFtIAArZMDIHAAAIAALZg");
	var mask_graphics_86 = new cjs.Graphics().p("EhkBAGpIAAtRMDIDAAAIAANRg");
	var mask_graphics_87 = new cjs.Graphics().p("EhkAAHkIAAvHMDIBAAAIAAPHg");
	var mask_graphics_88 = new cjs.Graphics().p("EhkAAIgIAAw/MDIBAAAIAAQ/g");
	var mask_graphics_89 = new cjs.Graphics().p("Ehj/AJcIAAy3MDH/AAAIAAS3g");
	var mask_graphics_90 = new cjs.Graphics().p("Ehj/AKYIAA0vMDH/AAAIAAUvg");
	var mask_graphics_91 = new cjs.Graphics().p("Ehj/ALUIAA2nMDH/AAAIAAWng");
	var mask_graphics_92 = new cjs.Graphics().p("Ehj/AMQIAA4fMDH/AAAIAAYfg");
	var mask_graphics_93 = new cjs.Graphics().p("Ehj/ANMIAA6XMDH/AAAIAAaXg");
	var mask_graphics_94 = new cjs.Graphics().p("Ehj/AOIIAA8PMDH/AAAIAAcPg");
	var mask_graphics_95 = new cjs.Graphics().p("Ehj/APEIAA+HMDH/AAAIAAeHg");
	var mask_graphics_96 = new cjs.Graphics().p("Ehj/AP/IAA/9MDH/AAAIAAf9g");
	var mask_graphics_97 = new cjs.Graphics().p("Ehj/AQ8MAAAgh2MDH/AAAMAAAAh2g");
	var mask_graphics_98 = new cjs.Graphics().p("Ehj/AR3MAAAgjtMDH/AAAMAAAAjtg");
	var mask_graphics_99 = new cjs.Graphics().p("Ehj/ASzMAAAgllMDH/AAAMAAAAllg");
	var mask_graphics_100 = new cjs.Graphics().p("Ehj/ATvMAAAgndMDH/AAAMAAAAndg");
	var mask_graphics_101 = new cjs.Graphics().p("Ehj/AUrMAAAgpVMDH/AAAMAAAApVg");
	var mask_graphics_102 = new cjs.Graphics().p("Ehj/AVnMAAAgrNMDH/AAAMAAAArNg");
	var mask_graphics_103 = new cjs.Graphics().p("Ehj/AWjMAAAgtFMDH/AAAMAAAAtFg");
	var mask_graphics_104 = new cjs.Graphics().p("Ehj/AXfMAAAgu9MDH/AAAMAAAAu9g");
	var mask_graphics_105 = new cjs.Graphics().p("Ehj/AYbMAAAgw1MDH/AAAMAAAAw1g");
	var mask_graphics_106 = new cjs.Graphics().p("Ehj/AZXMAAAgytMDH/AAAMAAAAytg");
	var mask_graphics_107 = new cjs.Graphics().p("Ehj/AaTMAAAg0lMDH/AAAMAAAA0lg");
	var mask_graphics_108 = new cjs.Graphics().p("Ehj/AbOMAAAg2bMDH/AAAMAAAA2bg");
	var mask_graphics_109 = new cjs.Graphics().p("Ehj/AcKMAAAg4TMDH/AAAMAAAA4Tg");
	var mask_graphics_110 = new cjs.Graphics().p("Ehj/AdHMAAAg6MMDH/AAAMAAAA6Mg");
	var mask_graphics_111 = new cjs.Graphics().p("Ehj/AeCMAAAg8DMDH/AAAMAAAA8Dg");
	var mask_graphics_112 = new cjs.Graphics().p("Ehj/Ae+MAAAg97MDH/AAAMAAAA97g");
	var mask_graphics_113 = new cjs.Graphics().p("Ehj/Af6MAAAg/zMDH/AAAMAAAA/zg");
	var mask_graphics_114 = new cjs.Graphics().p("Ehj/Ag2MAAAhBrMDH/AAAMAAABBrg");
	var mask_graphics_115 = new cjs.Graphics().p("Ehj/AhyMAAAhDjMDH/AAAMAAABDjg");
	var mask_graphics_116 = new cjs.Graphics().p("Ehj/AiuMAAAhFbMDH/AAAMAAABFbg");
	var mask_graphics_117 = new cjs.Graphics().p("Ehj/AjqMAAAhHTMDH/AAAMAAABHTg");
	var mask_graphics_118 = new cjs.Graphics().p("Ehj/AkmMAAAhJLMDH/AAAMAAABJLg");
	var mask_graphics_119 = new cjs.Graphics().p("Ehj/AliMAAAhLDMDH/AAAMAAABLDg");
	var mask_graphics_120 = new cjs.Graphics().p("Ehj/AmeMAAAhM6MDH/AAAMAAABM6g");
	var mask_graphics_121 = new cjs.Graphics().p("Ehj/AnZMAAAhOxMDH/AAAMAAABOxg");
	var mask_graphics_122 = new cjs.Graphics().p("Ehj/AoWMAAAhQqMDH/AAAMAAABQqg");
	var mask_graphics_123 = new cjs.Graphics().p("Ehj/ApRMAAAhShMDH/AAAMAAABShg");
	var mask_graphics_124 = new cjs.Graphics().p("Ehj/AqNMAAAhUZMDH/AAAMAAABUZg");
	var mask_graphics_125 = new cjs.Graphics().p("Ehj/ArJMAAAhWRMDH/AAAMAAABWRg");
	var mask_graphics_126 = new cjs.Graphics().p("Ehj/AsFMAAAhYJMDH/AAAMAAABYJg");
	var mask_graphics_127 = new cjs.Graphics().p("Ehj/AtBMAAAhaBMDH/AAAMAAABaBg");
	var mask_graphics_128 = new cjs.Graphics().p("Ehj/At9MAAAhb5MDH/AAAMAAABb5g");
	var mask_graphics_129 = new cjs.Graphics().p("Ehj/Au5MAAAhdxMDH/AAAMAAABdxg");
	var mask_graphics_130 = new cjs.Graphics().p("Ehj/Av1MAAAhfpMDH/AAAMAAABfpg");
	var mask_graphics_131 = new cjs.Graphics().p("Ehj/AwxMAAAhhhMDH/AAAMAAABhhg");
	var mask_graphics_132 = new cjs.Graphics().p("Ehj/AxtMAAAhjYMDH/AAAMAAABjYg");
	var mask_graphics_133 = new cjs.Graphics().p("Ehj/AyoMAAAhlPMDH/AAAMAAABlPg");
	var mask_graphics_134 = new cjs.Graphics().p("Ehj/AzkMAAAhnHMDH/AAAMAAABnHg");
	var mask_graphics_135 = new cjs.Graphics().p("Ehj/A0gMAAAho/MDH/AAAMAAABo/g");
	var mask_graphics_136 = new cjs.Graphics().p("Ehj/A1cMAAAhq3MDH/AAAMAAABq3g");
	var mask_graphics_137 = new cjs.Graphics().p("Ehj/A2YMAAAhsvMDH/AAAMAAABsvg");
	var mask_graphics_138 = new cjs.Graphics().p("Ehj/A3UMAAAhunMDH/AAAMAAABung");
	var mask_graphics_139 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_140 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_141 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_142 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_143 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_144 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_145 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_146 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_147 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_148 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_149 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_150 = new cjs.Graphics().p("EhkAA4RMAAAhwhMDIBAAAMAAABwhg");
	var mask_graphics_151 = new cjs.Graphics().p("EhkDA4SMAAAhwjMDIHAAAMAAABwjg");
	var mask_graphics_152 = new cjs.Graphics().p("EhkJA4VMAAAhwpMDITAAAMAAABwpg");
	var mask_graphics_153 = new cjs.Graphics().p("EhkPA4ZMAAAhwxMDIfAAAMAAABwxg");
	var mask_graphics_154 = new cjs.Graphics().p("EhkZA4eMAAAhw8MDIzAAAMAAABw8g");
	var mask_graphics_155 = new cjs.Graphics().p("EhkkA4lMAAAhxJMDJJAAAMAAABxJg");
	var mask_graphics_156 = new cjs.Graphics().p("EhkxA4sMAAAhxXMDJjAAAMAAABxXg");
	var mask_graphics_157 = new cjs.Graphics().p("EhlAA41MAAAhxpMDKBAAAMAAABxpg");
	var mask_graphics_158 = new cjs.Graphics().p("EhlSA4/MAAAhx9MDKlAAAMAAABx9g");
	var mask_graphics_159 = new cjs.Graphics().p("EhlmA5KMAAAhyTMDLNAAAMAAAByTg");
	var mask_graphics_160 = new cjs.Graphics().p("Ehl8A5WMAAAhyrMDL4AAAMAAAByrg");
	var mask_graphics_161 = new cjs.Graphics().p("EhmUA5kMAAAhzHMDMpAAAMAAABzHg");
	var mask_graphics_162 = new cjs.Graphics().p("EhmuA5zMAAAhzkMDNdAAAMAAABzkg");
	var mask_graphics_163 = new cjs.Graphics().p("EhnLA6DMAAAh0FMDOXAAAMAAAB0Fg");
	var mask_graphics_164 = new cjs.Graphics().p("EhnqA6UMAAAh0oMDPVAAAMAAAB0og");
	var mask_graphics_165 = new cjs.Graphics().p("EhoMA6nMAAAh1OMDQZAAAMAAAB1Og");
	var mask_graphics_166 = new cjs.Graphics().p("EhoxA68MAAAh13MDRiAAAMAAAB13g");
	var mask_graphics_167 = new cjs.Graphics().p("EhpYA7SMAAAh2jMDSxAAAMAAAB2jg");
	var mask_graphics_168 = new cjs.Graphics().p("EhqBA7pMAAAh3RMDUDAAAMAAAB3Rg");
	var mask_graphics_169 = new cjs.Graphics().p("EhquA8CMAAAh4DMDVdAAAMAAAB4Dg");
	var mask_graphics_170 = new cjs.Graphics().p("EhrdA8dMAAAh45MDW7AAAMAAAB45g");
	var mask_graphics_171 = new cjs.Graphics().p("EhsQA85MAAAh5xMDYgAAAMAAAB5xg");
	var mask_graphics_172 = new cjs.Graphics().p("EhtFA9XMAAAh6uMDaLAAAMAAAB6ug");
	var mask_graphics_173 = new cjs.Graphics().p("Eht8A92MAAAh7rMDb4AAAMAAAB7rg");
	var mask_graphics_174 = new cjs.Graphics().p("EhuwA+UMAAAh8nMDdhAAAMAAAB8ng");
	var mask_graphics_175 = new cjs.Graphics().p("EhvkA+xMAAAh9hMDfJAAAMAAAB9hg");
	var mask_graphics_176 = new cjs.Graphics().p("EhwVA/MMAAAh+XMDgrAAAMAAAB+Xg");
	var mask_graphics_177 = new cjs.Graphics().p("EhxEA/nMAAAh/NMDiJAAAMAAAB/Ng");
	var mask_graphics_178 = new cjs.Graphics().p("EhxxBAAMAAAh//MDjkAAAMAAAB//g");
	var mask_graphics_179 = new cjs.Graphics().p("EhydBAZMAAAiAxMDk7AAAMAAACAxg");
	var mask_graphics_180 = new cjs.Graphics().p("EhzGBAwMAAAiBfMDmNAAAMAAACBfg");
	var mask_graphics_181 = new cjs.Graphics().p("EhztBBGMAAAiCLMDnbAAAMAAACCLg");
	var mask_graphics_182 = new cjs.Graphics().p("Eh0SBBaMAAAiCzMDolAAAMAAACCzg");
	var mask_graphics_183 = new cjs.Graphics().p("Eh00BBuMAAAiDbMDppAAAMAAACDbg");
	var mask_graphics_184 = new cjs.Graphics().p("Eh1UBCAMAAAiD/MDqpAAAMAAACD/g");
	var mask_graphics_185 = new cjs.Graphics().p("Eh1xBCQMAAAiEfMDrjAAAMAAACEfg");
	var mask_graphics_186 = new cjs.Graphics().p("Eh2MBCfMAAAiE9MDsZAAAMAAACE9g");
	var mask_graphics_187 = new cjs.Graphics().p("Eh2kBCtMAAAiFZMDtJAAAMAAACFZg");
	var mask_graphics_188 = new cjs.Graphics().p("Eh25BC5MAAAiFxMDtzAAAMAAACFxg");
	var mask_graphics_189 = new cjs.Graphics().p("Eh3MBDDMAAAiGFMDuYAAAMAAACGFg");
	var mask_graphics_190 = new cjs.Graphics().p("Eh3bBDMMAAAiGXMDu4AAAMAAACGXg");
	var mask_graphics_191 = new cjs.Graphics().p("Eh3oBDTMAAAiGlMDvRAAAMAAACGlg");
	var mask_graphics_192 = new cjs.Graphics().p("Eh3yBDZMAAAiGxMDvmAAAMAAACGxg");
	var mask_graphics_193 = new cjs.Graphics().p("Eh36BDdMAAAiG5MDv1AAAMAAACG5g");
	var mask_graphics_194 = new cjs.Graphics().p("Eh3+BDgMAAAiG+MDv9AAAMAAACG+g");
	var mask_graphics_195 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_196 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_197 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_198 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_199 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_200 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_201 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_202 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_203 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_204 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_205 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_206 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_207 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_208 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_209 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_210 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_211 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_212 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_213 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_214 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_215 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_216 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_217 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_218 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_219 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_220 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_221 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_222 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_223 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_224 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_225 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_226 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_227 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_228 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_229 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_230 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_231 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_232 = new cjs.Graphics().p("Eh4ABDgMAAAiG/MDwBAAAMAAACG/g");
	var mask_graphics_233 = new cjs.Graphics().p("Eh4iBD0MAAAiHnMDxFAAAMAAACHng");
	var mask_graphics_234 = new cjs.Graphics().p("Eh5FBEHMAAAiINMDyKAAAMAAACINg");
	var mask_graphics_235 = new cjs.Graphics().p("Eh5mBEaMAAAiIzMDzNAAAMAAACIzg");
	var mask_graphics_236 = new cjs.Graphics().p("Eh6IBEtMAAAiJZMD0RAAAMAAACJZg");
	var mask_graphics_237 = new cjs.Graphics().p("Eh6oBFAMAAAiJ+MD1RAAAMAAACJ+g");
	var mask_graphics_238 = new cjs.Graphics().p("Eh7JBFSMAAAiKjMD2TAAAMAAACKjg");
	var mask_graphics_239 = new cjs.Graphics().p("Eh7pBFkMAAAiLHMD3TAAAMAAACLHg");
	var mask_graphics_240 = new cjs.Graphics().p("Eh8IBF1MAAAiLpMD4RAAAMAAACLpg");
	var mask_graphics_241 = new cjs.Graphics().p("Eh8nBGHMAAAiMNMD5PAAAMAAACMNg");
	var mask_graphics_242 = new cjs.Graphics().p("Eh9GBGYMAAAiMvMD6NAAAMAAACMvg");
	var mask_graphics_243 = new cjs.Graphics().p("Eh9jBGpMAAAiNRMD7IAAAMAAACNRg");
	var mask_graphics_244 = new cjs.Graphics().p("Eh+BBG5MAAAiNxMD8DAAAMAAACNxg");
	var mask_graphics_245 = new cjs.Graphics().p("Eh+eBHJMAAAiORMD89AAAMAAACORg");
	var mask_graphics_246 = new cjs.Graphics().p("Eh+6BHZMAAAiOxMD91AAAMAAACOxg");
	var mask_graphics_247 = new cjs.Graphics().p("Eh/VBHoMAAAiPPMD+rAAAMAAACPPg");
	var mask_graphics_248 = new cjs.Graphics().p("Eh/wBH4MAAAiPvMD/hAAAMAAACPvg");
	var mask_graphics_249 = new cjs.Graphics().p("EiAKBIGMAAAiQLMEAWAAAMAAACQLg");
	var mask_graphics_250 = new cjs.Graphics().p("EiAkBIVMAAAiQpMEBJAAAMAAACQpg");
	var mask_graphics_251 = new cjs.Graphics().p("EiA9BIjMAAAiRFMEB7AAAMAAACRFg");
	var mask_graphics_252 = new cjs.Graphics().p("EiBWBIwMAAAiRfMECtAAAMAAACRfg");
	var mask_graphics_253 = new cjs.Graphics().p("EiBtBI+MAAAiR7MEDbAAAMAAACR7g");
	var mask_graphics_254 = new cjs.Graphics().p("EiCEBJLMAAAiSVMEEJAAAMAAACSVg");
	var mask_graphics_255 = new cjs.Graphics().p("EiCaBJXMAAAiStMEE1AAAMAAACStg");
	var mask_graphics_256 = new cjs.Graphics().p("EiCwBJjMAAAiTFMEFhAAAMAAACTFg");
	var mask_graphics_257 = new cjs.Graphics().p("EiDEBJvMAAAiTdMEGJAAAMAAACTdg");
	var mask_graphics_258 = new cjs.Graphics().p("EiDYBJ6MAAAiTzMEGxAAAMAAACTzg");
	var mask_graphics_259 = new cjs.Graphics().p("EiDsBKFMAAAiUJMEHYAAAMAAACUJg");
	var mask_graphics_260 = new cjs.Graphics().p("EiD+BKQMAAAiUeMEH9AAAMAAACUeg");
	var mask_graphics_261 = new cjs.Graphics().p("EiEQBKZMAAAiUyMEIhAAAMAAACUyg");
	var mask_graphics_262 = new cjs.Graphics().p("EiEgBKjMAAAiVFMEJBAAAMAAACVFg");
	var mask_graphics_263 = new cjs.Graphics().p("EiExBKsMAAAiVXMEJjAAAMAAACVXg");
	var mask_graphics_264 = new cjs.Graphics().p("EiFABK0MAAAiVnMEKBAAAMAAACVng");
	var mask_graphics_265 = new cjs.Graphics().p("EiFOBK9MAAAiV5MEKdAAAMAAACV5g");
	var mask_graphics_266 = new cjs.Graphics().p("EiFcBLEMAAAiWHMEK5AAAMAAACWHg");
	var mask_graphics_267 = new cjs.Graphics().p("EiFpBLMMAAAiWXMELSAAAMAAACWXg");
	var mask_graphics_268 = new cjs.Graphics().p("EiF1BLSMAAAiWjMELrAAAMAAACWjg");
	var mask_graphics_269 = new cjs.Graphics().p("EiGABLZMAAAiWwMEMBAAAMAAACWwg");
	var mask_graphics_270 = new cjs.Graphics().p("EiGKBLeMAAAiW7MEMVAAAMAAACW7g");
	var mask_graphics_271 = new cjs.Graphics().p("EiGTBLjMAAAiXFMEMnAAAMAAACXFg");
	var mask_graphics_272 = new cjs.Graphics().p("EiGcBLoMAAAiXPMEM5AAAMAAACXPg");
	var mask_graphics_273 = new cjs.Graphics().p("EiGjBLtMAAAiXZMENHAAAMAAACXZg");
	var mask_graphics_274 = new cjs.Graphics().p("EiGqBLwMAAAiXfMENVAAAMAAACXfg");
	var mask_graphics_275 = new cjs.Graphics().p("EiGwBLzMAAAiXmMENhAAAMAAACXmg");
	var mask_graphics_276 = new cjs.Graphics().p("EiG1BL2MAAAiXrMENrAAAMAAACXrg");
	var mask_graphics_277 = new cjs.Graphics().p("EiG5BL4MAAAiXvMENzAAAMAAACXvg");
	var mask_graphics_278 = new cjs.Graphics().p("EiG8BL6MAAAiXzMEN5AAAMAAACXzg");
	var mask_graphics_279 = new cjs.Graphics().p("EiG+BL7MAAAiX2MEN9AAAMAAACX2g");
	var mask_graphics_280 = new cjs.Graphics().p("EiG/BL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_281 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_282 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_283 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_284 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_285 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_286 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_287 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_288 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_289 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_290 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_291 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_292 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_293 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_294 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_295 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_296 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_297 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_298 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");
	var mask_graphics_299 = new cjs.Graphics().p("EiHABL9MAAAiX4MEOBAAAMAAACX4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:589.375,y:-3.8}).wait(1).to({graphics:mask_graphics_1,x:590.5,y:-3.725}).wait(1).to({graphics:mask_graphics_2,x:591.6,y:-3.525}).wait(1).to({graphics:mask_graphics_3,x:592.65,y:-3.425}).wait(1).to({graphics:mask_graphics_4,x:593.8,y:-3.325}).wait(1).to({graphics:mask_graphics_5,x:594.9,y:-3.175}).wait(1).to({graphics:mask_graphics_6,x:595.95,y:-3.075}).wait(1).to({graphics:mask_graphics_7,x:597,y:-2.925}).wait(1).to({graphics:mask_graphics_8,x:598.05,y:-2.775}).wait(1).to({graphics:mask_graphics_9,x:599.075,y:-2.725}).wait(1).to({graphics:mask_graphics_10,x:600.075,y:-2.55}).wait(1).to({graphics:mask_graphics_11,x:601.075,y:-2.45}).wait(1).to({graphics:mask_graphics_12,x:602.075,y:-2.4}).wait(1).to({graphics:mask_graphics_13,x:603.125,y:-2.25}).wait(1).to({graphics:mask_graphics_14,x:604.025,y:-2.05}).wait(1).to({graphics:mask_graphics_15,x:604.975,y:-2.05}).wait(1).to({graphics:mask_graphics_16,x:605.975,y:-1.95}).wait(1).to({graphics:mask_graphics_17,x:606.95,y:-1.8}).wait(1).to({graphics:mask_graphics_18,x:607.8,y:-1.75}).wait(1).to({graphics:mask_graphics_19,x:608.7,y:-1.575}).wait(1).to({graphics:mask_graphics_20,x:609.625,y:-1.525}).wait(1).to({graphics:mask_graphics_21,x:610.475,y:-1.375}).wait(1).to({graphics:mask_graphics_22,x:611.45,y:-1.325}).wait(1).to({graphics:mask_graphics_23,x:612.175,y:-1.175}).wait(1).to({graphics:mask_graphics_24,x:613.05,y:-1.075}).wait(1).to({graphics:mask_graphics_25,x:613.9,y:-1.025}).wait(1).to({graphics:mask_graphics_26,x:614.7,y:-0.875}).wait(1).to({graphics:mask_graphics_27,x:615.5,y:-0.775}).wait(1).to({graphics:mask_graphics_28,x:616.2,y:-0.675}).wait(1).to({graphics:mask_graphics_29,x:617.1,y:-0.625}).wait(1).to({graphics:mask_graphics_30,x:617.8,y:-0.55}).wait(1).to({graphics:mask_graphics_31,x:618.55,y:-0.5}).wait(1).to({graphics:mask_graphics_32,x:619.3,y:-0.35}).wait(1).to({graphics:mask_graphics_33,x:620,y:-0.25}).wait(1).to({graphics:mask_graphics_34,x:620.7,y:-0.25}).wait(1).to({graphics:mask_graphics_35,x:621.425,y:-0.15}).wait(1).to({graphics:mask_graphics_36,x:622.075,y:-0.05}).wait(1).to({graphics:mask_graphics_37,x:622.775,y:0.1}).wait(1).to({graphics:mask_graphics_38,x:623.375,y:0.1}).wait(1).to({graphics:mask_graphics_39,x:623.975,y:0.2}).wait(1).to({graphics:mask_graphics_40,x:624.7,y:0.25}).wait(1).to({graphics:mask_graphics_41,x:625.275,y:0.35}).wait(1).to({graphics:mask_graphics_42,x:625.875,y:0.4}).wait(1).to({graphics:mask_graphics_43,x:626.425,y:0.425}).wait(1).to({graphics:mask_graphics_44,x:627,y:0.525}).wait(1).to({graphics:mask_graphics_45,x:627.6,y:0.525}).wait(1).to({graphics:mask_graphics_46,x:628.1,y:0.575}).wait(1).to({graphics:mask_graphics_47,x:628.675,y:0.625}).wait(1).to({graphics:mask_graphics_48,x:629.15,y:0.675}).wait(1).to({graphics:mask_graphics_49,x:629.7,y:0.775}).wait(1).to({graphics:mask_graphics_50,x:630.2,y:0.825}).wait(1).to({graphics:mask_graphics_51,x:630.675,y:0.825}).wait(1).to({graphics:mask_graphics_52,x:631.1,y:0.925}).wait(1).to({graphics:mask_graphics_53,x:631.675,y:0.975}).wait(1).to({graphics:mask_graphics_54,x:632.05,y:1.025}).wait(1).to({graphics:mask_graphics_55,x:632.475,y:1.025}).wait(1).to({graphics:mask_graphics_56,x:632.875,y:1.125}).wait(1).to({graphics:mask_graphics_57,x:633.35,y:1.175}).wait(1).to({graphics:mask_graphics_58,x:633.7,y:1.225}).wait(1).to({graphics:mask_graphics_59,x:634.025,y:1.275}).wait(1).to({graphics:mask_graphics_60,x:634.45,y:1.275}).wait(1).to({graphics:mask_graphics_61,x:634.825,y:1.325}).wait(1).to({graphics:mask_graphics_62,x:635.075,y:1.375}).wait(1).to({graphics:mask_graphics_63,x:635.45,y:1.4}).wait(1).to({graphics:mask_graphics_64,x:635.775,y:1.45}).wait(1).to({graphics:mask_graphics_65,x:636.05,y:1.5}).wait(1).to({graphics:mask_graphics_66,x:636.35,y:1.5}).wait(1).to({graphics:mask_graphics_67,x:636.625,y:1.5}).wait(1).to({graphics:mask_graphics_68,x:636.925,y:1.55}).wait(1).to({graphics:mask_graphics_69,x:637.15,y:1.6}).wait(1).to({graphics:mask_graphics_70,x:637.375,y:1.6}).wait(1).to({graphics:mask_graphics_71,x:637.625,y:1.65}).wait(1).to({graphics:mask_graphics_72,x:637.85,y:1.7}).wait(1).to({graphics:mask_graphics_73,x:638.025,y:1.75}).wait(1).to({graphics:mask_graphics_74,x:638.2,y:1.8}).wait(1).to({graphics:mask_graphics_75,x:638.4,y:1.75}).wait(1).to({graphics:mask_graphics_76,x:638.625,y:1.75}).wait(1).to({graphics:mask_graphics_77,x:638.775,y:1.8}).wait(1).to({graphics:mask_graphics_78,x:638.825,y:1.8}).wait(1).to({graphics:mask_graphics_79,x:639.025,y:1.8}).wait(1).to({graphics:mask_graphics_80,x:639.1,y:7.875}).wait(1).to({graphics:mask_graphics_81,x:639.175,y:13.85}).wait(1).to({graphics:mask_graphics_82,x:639.3,y:19.85}).wait(1).to({graphics:mask_graphics_83,x:639.375,y:25.85}).wait(1).to({graphics:mask_graphics_84,x:639.425,y:31.875}).wait(1).to({graphics:mask_graphics_85,x:639.475,y:37.875}).wait(1).to({graphics:mask_graphics_86,x:639.575,y:43.875}).wait(1).to({graphics:mask_graphics_87,x:639.625,y:49.825}).wait(1).to({graphics:mask_graphics_88,x:639.55,y:55.825}).wait(1).to({graphics:mask_graphics_89,x:639.425,y:61.675}).wait(1).to({graphics:mask_graphics_90,x:639.425,y:67.65}).wait(1).to({graphics:mask_graphics_91,x:639.425,y:73.65}).wait(1).to({graphics:mask_graphics_92,x:639.425,y:79.65}).wait(1).to({graphics:mask_graphics_93,x:639.425,y:85.625}).wait(1).to({graphics:mask_graphics_94,x:639.425,y:91.625}).wait(1).to({graphics:mask_graphics_95,x:639.425,y:97.625}).wait(1).to({graphics:mask_graphics_96,x:639.425,y:103.6}).wait(1).to({graphics:mask_graphics_97,x:639.425,y:109.6}).wait(1).to({graphics:mask_graphics_98,x:639.425,y:115.6}).wait(1).to({graphics:mask_graphics_99,x:639.425,y:121.575}).wait(1).to({graphics:mask_graphics_100,x:639.425,y:127.575}).wait(1).to({graphics:mask_graphics_101,x:639.425,y:133.575}).wait(1).to({graphics:mask_graphics_102,x:639.425,y:139.55}).wait(1).to({graphics:mask_graphics_103,x:639.425,y:145.55}).wait(1).to({graphics:mask_graphics_104,x:639.425,y:151.55}).wait(1).to({graphics:mask_graphics_105,x:639.425,y:157.525}).wait(1).to({graphics:mask_graphics_106,x:639.425,y:163.525}).wait(1).to({graphics:mask_graphics_107,x:639.425,y:169.525}).wait(1).to({graphics:mask_graphics_108,x:639.425,y:175.5}).wait(1).to({graphics:mask_graphics_109,x:639.425,y:181.5}).wait(1).to({graphics:mask_graphics_110,x:639.425,y:187.5}).wait(1).to({graphics:mask_graphics_111,x:639.425,y:193.475}).wait(1).to({graphics:mask_graphics_112,x:639.425,y:199.475}).wait(1).to({graphics:mask_graphics_113,x:639.425,y:205.475}).wait(1).to({graphics:mask_graphics_114,x:639.425,y:211.45}).wait(1).to({graphics:mask_graphics_115,x:639.425,y:217.45}).wait(1).to({graphics:mask_graphics_116,x:639.425,y:223.45}).wait(1).to({graphics:mask_graphics_117,x:639.425,y:229.425}).wait(1).to({graphics:mask_graphics_118,x:639.425,y:235.425}).wait(1).to({graphics:mask_graphics_119,x:639.425,y:241.425}).wait(1).to({graphics:mask_graphics_120,x:639.425,y:247.4}).wait(1).to({graphics:mask_graphics_121,x:639.425,y:253.4}).wait(1).to({graphics:mask_graphics_122,x:639.425,y:259.4}).wait(1).to({graphics:mask_graphics_123,x:639.425,y:265.375}).wait(1).to({graphics:mask_graphics_124,x:639.425,y:271.375}).wait(1).to({graphics:mask_graphics_125,x:639.425,y:277.375}).wait(1).to({graphics:mask_graphics_126,x:639.425,y:283.35}).wait(1).to({graphics:mask_graphics_127,x:639.425,y:289.35}).wait(1).to({graphics:mask_graphics_128,x:639.425,y:295.35}).wait(1).to({graphics:mask_graphics_129,x:639.425,y:301.325}).wait(1).to({graphics:mask_graphics_130,x:639.425,y:307.325}).wait(1).to({graphics:mask_graphics_131,x:639.425,y:313.325}).wait(1).to({graphics:mask_graphics_132,x:639.425,y:319.3}).wait(1).to({graphics:mask_graphics_133,x:639.425,y:325.3}).wait(1).to({graphics:mask_graphics_134,x:639.425,y:331.3}).wait(1).to({graphics:mask_graphics_135,x:639.425,y:337.275}).wait(1).to({graphics:mask_graphics_136,x:639.425,y:343.275}).wait(1).to({graphics:mask_graphics_137,x:639.425,y:349.275}).wait(1).to({graphics:mask_graphics_138,x:639.425,y:355.25}).wait(1).to({graphics:mask_graphics_139,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_140,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_141,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_142,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_143,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_144,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_145,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_146,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_147,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_148,x:639.425,y:361.25}).wait(1).to({graphics:mask_graphics_149,x:639.375,y:361.2}).wait(1).to({graphics:mask_graphics_150,x:639.425,y:361.225}).wait(1).to({graphics:mask_graphics_151,x:639.425,y:361.375}).wait(1).to({graphics:mask_graphics_152,x:639.45,y:361.675}).wait(1).to({graphics:mask_graphics_153,x:639.45,y:362.025}).wait(1).to({graphics:mask_graphics_154,x:639.4,y:362.55}).wait(1).to({graphics:mask_graphics_155,x:639.375,y:363.125}).wait(1).to({graphics:mask_graphics_156,x:639.4,y:363.825}).wait(1).to({graphics:mask_graphics_157,x:639.4,y:364.625}).wait(1).to({graphics:mask_graphics_158,x:639.35,y:365.625}).wait(1).to({graphics:mask_graphics_159,x:639.325,y:366.625}).wait(1).to({graphics:mask_graphics_160,x:639.25,y:367.75}).wait(1).to({graphics:mask_graphics_161,x:639.225,y:369.075}).wait(1).to({graphics:mask_graphics_162,x:639.225,y:370.45}).wait(1).to({graphics:mask_graphics_163,x:639.175,y:372.025}).wait(1).to({graphics:mask_graphics_164,x:639.15,y:373.7}).wait(1).to({graphics:mask_graphics_165,x:639.125,y:375.45}).wait(1).to({graphics:mask_graphics_166,x:639.05,y:377.4}).wait(1).to({graphics:mask_graphics_167,x:639,y:379.475}).wait(1).to({graphics:mask_graphics_168,x:638.925,y:381.725}).wait(1).to({graphics:mask_graphics_169,x:638.925,y:384.125}).wait(1).to({graphics:mask_graphics_170,x:638.825,y:386.65}).wait(1).to({graphics:mask_graphics_171,x:638.8,y:389.375}).wait(1).to({graphics:mask_graphics_172,x:638.775,y:392.15}).wait(1).to({graphics:mask_graphics_173,x:638.7,y:395.05}).wait(1).to({graphics:mask_graphics_174,x:638.65,y:397.875}).wait(1).to({graphics:mask_graphics_175,x:638.55,y:400.6}).wait(1).to({graphics:mask_graphics_176,x:638.525,y:403.225}).wait(1).to({graphics:mask_graphics_177,x:638.425,y:405.75}).wait(1).to({graphics:mask_graphics_178,x:638.4,y:408.1}).wait(1).to({graphics:mask_graphics_179,x:638.3,y:410.425}).wait(1).to({graphics:mask_graphics_180,x:638.275,y:412.65}).wait(1).to({graphics:mask_graphics_181,x:638.2,y:414.7}).wait(1).to({graphics:mask_graphics_182,x:638.175,y:416.65}).wait(1).to({graphics:mask_graphics_183,x:638.15,y:418.425}).wait(1).to({graphics:mask_graphics_184,x:638.075,y:420.175}).wait(1).to({graphics:mask_graphics_185,x:638.05,y:421.65}).wait(1).to({graphics:mask_graphics_186,x:638.075,y:423.125}).wait(1).to({graphics:mask_graphics_187,x:637.975,y:424.475}).wait(1).to({graphics:mask_graphics_188,x:637.95,y:425.625}).wait(1).to({graphics:mask_graphics_189,x:637.95,y:426.5}).wait(1).to({graphics:mask_graphics_190,x:637.9,y:427.35}).wait(1).to({graphics:mask_graphics_191,x:637.85,y:427.975}).wait(1).to({graphics:mask_graphics_192,x:637.85,y:428.5}).wait(1).to({graphics:mask_graphics_193,x:637.875,y:428.95}).wait(1).to({graphics:mask_graphics_194,x:637.875,y:429.15}).wait(1).to({graphics:mask_graphics_195,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_196,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_197,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_198,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_199,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_200,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_201,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_202,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_203,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_204,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_205,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_206,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_207,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_208,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_209,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_210,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_211,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_212,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_213,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_214,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_215,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_216,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_217,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_218,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_219,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_220,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_221,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_222,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_223,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_224,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_225,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_226,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_227,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_228,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_229,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_230,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_231,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_232,x:638.1,y:429.475}).wait(1).to({graphics:mask_graphics_233,x:638.175,y:429.925}).wait(1).to({graphics:mask_graphics_234,x:638.25,y:430.25}).wait(1).to({graphics:mask_graphics_235,x:638.325,y:430.6}).wait(1).to({graphics:mask_graphics_236,x:638.375,y:431}).wait(1).to({graphics:mask_graphics_237,x:638.4,y:431.35}).wait(1).to({graphics:mask_graphics_238,x:638.55,y:431.775}).wait(1).to({graphics:mask_graphics_239,x:638.525,y:432.05}).wait(1).to({graphics:mask_graphics_240,x:638.65,y:432.425}).wait(1).to({graphics:mask_graphics_241,x:638.675,y:432.725}).wait(1).to({graphics:mask_graphics_242,x:638.725,y:433.075}).wait(1).to({graphics:mask_graphics_243,x:638.75,y:433.45}).wait(1).to({graphics:mask_graphics_244,x:638.75,y:433.75}).wait(1).to({graphics:mask_graphics_245,x:638.825,y:434.025}).wait(1).to({graphics:mask_graphics_246,x:638.875,y:434.35}).wait(1).to({graphics:mask_graphics_247,x:638.925,y:434.65}).wait(1).to({graphics:mask_graphics_248,x:638.975,y:434.975}).wait(1).to({graphics:mask_graphics_249,x:639.05,y:435.25}).wait(1).to({graphics:mask_graphics_250,x:639.05,y:435.425}).wait(1).to({graphics:mask_graphics_251,x:639.075,y:435.75}).wait(1).to({graphics:mask_graphics_252,x:639.15,y:436.1}).wait(1).to({graphics:mask_graphics_253,x:639.2,y:436.4}).wait(1).to({graphics:mask_graphics_254,x:639.25,y:436.575}).wait(1).to({graphics:mask_graphics_255,x:639.225,y:436.875}).wait(1).to({graphics:mask_graphics_256,x:639.325,y:437.025}).wait(1).to({graphics:mask_graphics_257,x:639.375,y:437.3}).wait(1).to({graphics:mask_graphics_258,x:639.4,y:437.525}).wait(1).to({graphics:mask_graphics_259,x:639.4,y:437.7}).wait(1).to({graphics:mask_graphics_260,x:639.5,y:437.95}).wait(1).to({graphics:mask_graphics_261,x:639.425,y:438.1}).wait(1).to({graphics:mask_graphics_262,x:639.5,y:438.325}).wait(1).to({graphics:mask_graphics_263,x:639.525,y:438.5}).wait(1).to({graphics:mask_graphics_264,x:639.55,y:438.7}).wait(1).to({graphics:mask_graphics_265,x:639.575,y:438.875}).wait(1).to({graphics:mask_graphics_266,x:639.6,y:438.925}).wait(1).to({graphics:mask_graphics_267,x:639.65,y:439.15}).wait(1).to({graphics:mask_graphics_268,x:639.625,y:439.275}).wait(1).to({graphics:mask_graphics_269,x:639.675,y:439.4}).wait(1).to({graphics:mask_graphics_270,x:639.7,y:439.525}).wait(1).to({graphics:mask_graphics_271,x:639.725,y:439.6}).wait(1).to({graphics:mask_graphics_272,x:639.725,y:439.675}).wait(1).to({graphics:mask_graphics_273,x:639.675,y:439.75}).wait(1).to({graphics:mask_graphics_274,x:639.65,y:439.825}).wait(1).to({graphics:mask_graphics_275,x:639.85,y:439.9}).wait(1).to({graphics:mask_graphics_276,x:639.8,y:439.925}).wait(1).to({graphics:mask_graphics_277,x:639.8,y:440}).wait(1).to({graphics:mask_graphics_278,x:639.75,y:440.025}).wait(1).to({graphics:mask_graphics_279,x:639.825,y:440}).wait(1).to({graphics:mask_graphics_280,x:639.75,y:440.075}).wait(1).to({graphics:mask_graphics_281,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_282,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_283,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_284,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_285,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_286,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_287,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_288,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_289,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_290,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_291,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_292,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_293,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_294,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_295,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_296,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_297,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_298,x:640,y:440.3}).wait(1).to({graphics:mask_graphics_299,x:640,y:440.3}).wait(1));

	// stars_obj_
	this.stars = new lib.Scene_1_stars();
	this.stars.name = "stars";
	this.stars.setTransform(650.7,255.65,1.2801,1.2801,0,0,0,687.9,203.2);
	this.stars.depth = 0;
	this.stars.isAttachedToCamera = 0
	this.stars.isAttachedToMask = 0
	this.stars.layerDepth = 0
	this.stars.layerIndex = 8
	this.stars.maskLayerName = 0

	var maskedShapeInstanceList = [this.stars];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.stars).wait(300));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.setTransform(640.05,360,1.2801,1.2801,0,0,0,679.6,284.7);
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 9
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(628.5,198.1,791.5,581.9);
// library properties:
lib.properties = {
	id: 'F4B85609068F4C94B412965E73DC4F63',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/interactive_atlas_1.png?1698348229342", id:"interactive_atlas_1"},
		{src:"images/interactive_atlas_2.png?1698348229343", id:"interactive_atlas_2"},
		{src:"images/interactive_atlas_3.png?1698348229344", id:"interactive_atlas_3"},
		{src:"images/interactive_atlas_4.png?1698348229344", id:"interactive_atlas_4"},
		{src:"images/interactive_atlas_5.png?1698348229345", id:"interactive_atlas_5"},
		{src:"images/interactive_atlas_6.png?1698348229348", id:"interactive_atlas_6"},
		{src:"images/interactive_atlas_7.png?1698348229349", id:"interactive_atlas_7"},
		{src:"sounds/Gothic.mp3?1698348229643", id:"Gothic"},
		{src:"sounds/hover.mp3?1698348229643", id:"hover"},
		{src:"sounds/press.mp3?1698348229643", id:"press"}
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
an.compositions['F4B85609068F4C94B412965E73DC4F63'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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