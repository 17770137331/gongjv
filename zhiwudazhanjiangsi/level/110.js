﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oCZombie, oCZombie2, oCZombie3, oCConeheadZombie, oCBucketheadZombie],
    PicArr: ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX4.jpg"], 
    LF: [0, 3, 0, 3, 0, 3, 0], 
    ZF: [0, 3, 0, 3, 0, 3, 0], 
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX4.jpg",
    CanSelectCard: 1, 
    LevelName: "魔王宫殿",  
    LvlEName: 1,  
    SunNum: 500, 
    DKind: 0,
    LargeWaveFlag: {
        10 : $("imgFlag2"),
        20 : $("imgFlag1")
     },
    InitLawnMower: function() {
        CustomSpecial(oCleaner, 1, -1)
        CustomSpecial(oCleaner, 3, -1)
        CustomSpecial(oCleaner, 5, -1)
    },
    AudioArr: ["crazydaveshort2", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
    StartGameMusic: "The Great Wall1",  
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
                oSym.addTask(200,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">欢迎来到地狱，我的朋友(点击继续)</span>';
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
                c.innerHTML = '<span style="font-size:22px">我必须忠告你,(点击继续)</span>';
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
                c.innerHTML = '<span style="font-size:22px">这游戏太危险了，现在每一场战斗都是举步为难(点击继续)</span>';
                break;
            case 3:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">没有阳光，缺少花盆，(点击继续)</span>';
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
                c.innerHTML = '<span style="font-size:22px">僵尸甚至在门口炸毁了两条线路，(点击继续)</span>';
                break;
            case 5:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [6])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">运用你之前所学的知识吧！没有过不去的坎！(点击继续)</span>';
                break;
            case 6:
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
    AZ: [[oCZombie, 1, 1], [oCZombie2, 3, 3], [oCZombie3, 1, 5], [oCConeheadZombie, 3, 6], [oCBucketheadZombie, 1, 10]], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 25, 48, 60] 
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(0)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});