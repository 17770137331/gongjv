﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen],
    ZName: [oZombie, oZombie2, oConeheadZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundLG.jpg", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif"]
    } (),
    SunNum: 100,
    LF: [0, 3, 3, 3, 3, 3, 3], 
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundLG.jpg",
    CanSelectCard: 1,
    DKind: 0,
    LevelName: "关卡 4-1",
    LvlEName: 31,
    AudioArr: ["crazydavelong1", "crazydavelong3"],
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
    },
    StartGameMusic: "Lg_pk",
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
                c.innerHTML = '<span style="font-size:22px">我们进入了一个之前我在水池下发现的秘密通道。</span>';
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
                   c.innerHTML = '<span style="font-size:22px">但这里似乎是龙王的禁地，而且出口被锁住了</span>';
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
                c.innerHTML = '<span style="font-size:22px">先带上氧气藻消灭这里的僵尸吧。(点击继续)</span>';
                break;
            case 3:
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
    AZ: [[oZombie, 6, 1], [oZombie2, 1, 1], [oConeheadZombie, 3, 10]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 3, 7],
        a2: [1, 2, 3, 8]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/Card/Plants/star.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, ostar, 32)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
    }
});