﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oCZombie, oCZombie2, oCZombie3, oCConeheadZombie, oCBucketheadZombie, oCJackinTheBoxZombie, oCNewspaperZombie, oScreenDoorZombie, oEunZombie],
    PicArr: ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX2.jpg"], 
    LF: [0, 1, 1, 3, 1, 1, 0], 
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX2.jpg",
    CanSelectCard: 1, 
    LevelName: "坟墓村庄",  
    LvlEName: 9,  
    SunNum: 200, 
    DKind: 0,
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
     },
    InitLawnMower: function() {
        CustomSpecial(oCleaner, 1, -1)
        CustomSpecial(oCleaner, 2, -1)
        CustomSpecial(oCleaner, 3, -1)
        CustomSpecial(oCleaner, 4, -1)
        CustomSpecial(oCleaner, 5, -1)
    },
    AudioArr: ["crazydaveshort2", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
    StartGameMusic: "The Great Wall1",  
    LoadMusic: "Faster", 
    LoadAccess: function(a) {
        NewImg("dDave", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">晚上好，邻居。(点击继续)</span>';
                break;
            case 1:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [2])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">看来我们运气不错，天黑时找到了这个小村庄</span>';
                break;
            case 2:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [3])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">不过好像，村子后面有一个充满僵尸的墓地(点击继续)</span>';
                break;
            case 3:
                PlayAudio("crazydaveshort2");
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">倒霉的是，村庄前的路是石路。(点击继续)</span>';
                break;
            case 4:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [5])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">更倒霉的是，现在已经进入了深夜。(点击继续)</span>';
                break;
            case 4:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [5])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">这鬼地方比我还疯狂！(点击继续)</span>';
                break;
            case 5:
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(5,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                    StopMusic();
                    PlayMusic(oS.LoadMusic = "Look up at the Sky")
                },
                [])
            }
        })(0)
    }
},
{
    AZ: [[oCZombie, 1, 1], [oCZombie2, 2, 2], [oCZombie3, 2, 3], [oCConeheadZombie, 2, 1], [oCBucketheadZombie, 1, 10], [oCJackinTheBoxZombie, 1, 3], [oCNewspaperZombie, 1, 2], [oScreenDoorZombie, 1, 1], [oEunZombie, 1, 5]], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 25] 
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0] 
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/ZombieNoteSmall.png", "left:667px;top:220px", EDAll, {
            onclick: function() {
                PlayAudio("winmusic");
                SetHidden($("PointerUD")); (SetStyle(this, {
                    width: "613px",
                    height: "399px",
                    left: "193px",
                    top: "100px"
                })).src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/ZombieNoteB.png";
                this.onclick = function() {
                    SelectModal(107)
                }
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});