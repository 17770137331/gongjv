﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad],
    ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oConeheadZombie],
    PicArr: function() {
        var a = oSquash.prototype,
        b = a.PicArr;
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background3.jpg", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave2.gif", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif", b[a.CardGif], b[a.NormalGif]]
    } (),
    Coord: 2,
    SunNum: 50,
    LF: [0, 1, 1, 2, 2, 1, 1],
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background3.jpg",
    CanSelectCard: 1,
    LevelName: "关卡 3-1",
    LvlEName: 21,
    AudioArr: ["crazydaveshort2", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
    LargeWaveFlag: {
        10 : $("imgFlag1")
    },
    StartGameMusic: "Kitanai Sekai",
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
                innerText(c, "看来僵尸们要放弃进攻你的前院了。(点击继续)");
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
                innerText(c, "现在他们想试试你的后院。(点击继续)");
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
                innerText(c, "但最重要的是你不能使用你的蘑菇了！(点击继续)");
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
                innerText(c, "因为他们白天时要睡觉！(点击继续)");
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
                innerText(c, "这难道不是花花公子的作风吗？(点击继续)");
                break;
            case 5:
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(5,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            }
        })(0)
    }
},
{
    AZ: [[oZombie, 3, 1], [oZombie2, 2, 1], [oZombie3, 3, 1], [oDuckyTubeZombie1, 1, 6, [6, 7, 8, 10]], [oConeheadZombie, 2, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [3, 5, 9],
        a2: [1, 2, 3, 10]
    },
    FlagToMonitor: {
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/Card/Plants/Squash.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                SelectModal(22)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
    }
});