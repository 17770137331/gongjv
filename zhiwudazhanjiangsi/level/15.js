﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom],
    ZName: [oZombie, oZombie2, oZombie3, oScreenDoorZombie],
    PicArr: function() {
        var a = oFumeShroom.prototype,
        b = a.PicArr;
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background2.jpg", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Tombstones.png", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
    } (),
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background2.jpg",
    CanSelectCard: 1,
    DKind: 0,
    SunNum: 375,
    LevelName: "2-5 特别关：乱葬岗",
    LvlEName: 15,
    LargeWaveFlag: {
        10 : $("imgFlag1")
    },
    LoadAccess: function(a) {
        NewImg("dDave", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydaveshort1");
                $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                innerText(c, "伙计，你有想象过你在一个晚上独自在墓地过夜吗？(点击继续)");
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
                innerText(c, "当然，墓地里还得有僵尸。(点击继续)");
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
                innerText(c, "别太放松布阵速度，僵尸随时都会从墓碑里钻出！。(点击继续)");
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
                innerText(c, "嗯，咱们或许需要一些布阵快速的植物！(点击继续)");
                break;
            case 4:
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
    },
    Monitor: {
        f: AppearTombstones,
        ar: [7, 9, 12]
    },
    UserDefinedFlagFunc: function(b) {
        var a = oP.FlagZombies;
        switch (true) {
        case a > 8 : oP.SetTimeoutTomZombie([oZombie]);
            break;
        case a > 5 : oP.SetTimeoutTomZombie([oZombie])
        }
    },
    StartGameMusic: "Ultimate battle"
},
{
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 1, 1], [oScreenDoorZombie, 1, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [3, 5, 9],
        a2: [1, 2, 3, 10]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/Card/Plants/HypnoShroom.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oHypnoShroom, 16)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
    }
});