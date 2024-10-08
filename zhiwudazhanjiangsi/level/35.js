﻿oS.Init({
    PName: [ostar1],
    ZName: [oZombie, oZombie2, oConeheadZombie, oCXZombie, oBucketheadZombie, oXBZombie, oJX, oJackinTheBoxZombie, oHeiFootballZombie],
    PicArr: ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundLG.jpg", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Stripe.png"],
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundLG.jpg",
    LF: [0, 3, 3, 3, 3, 3],
    CanSelectCard: 0,
    DKind: 0,
    LevelName: "3-5小游戏:海星滚滚",
    LvlEName: "35",
    LargeWaveFlag: {
        10 : $("imgFlag2"),
        20 : $("imgFlag1")
    },
    StartGameMusic: "Watery Graves",
    StaticCard: 0,
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
                innerText(c, "我至今依然记得小时候和彼得玩滚球的乐趣(点击继续)");
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
                innerText(c, "现在彼得不在这个该死的鬼地方，你来陪我玩吧~(点击继续)");
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
                innerText(c, "然而这次我们滚的不是滚球，是海星！。(点击继续)");
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
                innerText(c, "我相信这是一件非常好玩的事！(点击继续)");
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
    StartGame: function() {
        NewEle(0, "div", "width:22px;height:502px;margin:75px 0 0 485px;position:absolute;z-index:1;background:url(https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Stripe.png)", 0, $("tGround"));
        StopMusic();
        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
        SetHidden($("dSunNum"));
        oS.InitLawnMower();
        PrepareGrowPlants(function() {
            oP.Monitor({
                f: function() { (function() {
                        var a = ArCard.length;
                        if (a < 10) {
                            var c = [ostar1],
                            b = Math.floor(Math.random() * c.length),
                            e = c[b],
                            d = e.prototype,
                            f = "dCard" + Math.random();
                            ArCard[a] = {
                                DID: f,
                                PName: e,
                                PixelTop: 600
                            };
                            NewImg(f, d.PicArr[d.CardGif], "top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)", $("dCardList"), {
                                onmouseover: function(g) {
                                    ViewPlantTitle(GetChoseCard(f), g)
                                },
                                onmouseout: function() {
                                    SetHidden($("dTitle"))
                                },
                                onclick: function(g) {
                                    ChosePlant(g, oS.ChoseCard, f)
                                }
                            })
                        }
                        oSym.addTask(500, arguments.callee, [])
                    })(); (function() {
                        var b = ArCard.length,
                        a, c;
                        while (b--) { (c = (a = ArCard[b]).PixelTop) > 60 * b && ($(a.DID).style.top = (a.PixelTop = c - 1) + "px")
                        }
                        oSym.addTask(5, arguments.callee, [])
                    })()
                },
                ar: []
            });
            oP.AddZombiesFlag();
            SetVisible($("dFlagMeter"))
        })
    }
},
{
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oConeheadZombie, 1, 1], [oCXZombie, 1, 11], [oBucketheadZombie, 1, 1], [oXBZombie, 1, 1], [oJX, 1, 1], [oJackinTheBoxZombie, 1, 1], [oHeiFootballZombie, 1, 17]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19],
        a2: [4, 7, 12, 20, 13, 16, 21, 40]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/Card/Plants/SeaAnemone.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oSeaAnemone, 36)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
    }
},
{
    GetChoseCard: function(b) {
        var a = ArCard.length;
        while (a--) {
            ArCard[a].DID == b && (oS.ChoseCard = a, a = 0)
        }
        return oS.ChoseCard
    },
    ChosePlant: function(a, b) {
        PlayAudio("seedlift");
        a = window.event || a;
        var f = ArCard[oS.ChoseCard],
        e = a.clientX + EBody.scrollLeft || EElement.scrollLeft,
        d = a.clientY + EBody.scrollTop || EElement.scrollTop,
        c = f.PName.prototype;
        oS.Chose = 1;
        EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(false), "MovePlantAlpha", "", {
            visibility: "hidden",
            filter: "alpha(opacity=40)",
            opacity: 0.4,
            zIndex: 30
        },
        EDAll);
        SetAlpha($(f.DID), 50, 0.5);
        SetHidden($("dTitle"));
        GroundOnmousemove = GroundOnmousemove1
    },
    CancelPlant: function() {
        ClearChild($("MovePlant"), $("MovePlantAlpha"));
        oS.Chose = 0;
        SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
        oS.ChoseCard = "";
        GroundOnmousemove = function() {}
    },
    GrowPlant: function(l, c, b, f, a) {
        var j = $("DivTeach");
        j && j.parentNode.removeChild(j);
        if (c > 347) {
            innerText(NewEle("DivTeach", "div", "line-height:40px;font-size: 14px", 0, EDAll), "在红线的左边才能放海星果！");
            return false
        }
        var i = oS.ChoseCard,
        g = ArCard[i],
        h = g.PName,
        k = h.prototype,
        d = g.DID,
        e; (new h()).Birth(c, b, f, a, l);
        ClearChild($("MovePlant"), $("MovePlantAlpha"));
        $("dCardList").removeChild(e = $(d));
        e = null;
        ArCard.splice(i, 1);
        oS.ChoseCard = "";
        oS.Chose = 0;
        GroundOnmousemove = function() {}
    },
    ViewPlantTitle: function(a) {}
});