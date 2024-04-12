oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom],
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oFootballZombie],
    PicArr: function() {
        var a = oScaredyShroom.prototype,
        b = a.PicArr;
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background2.jpg", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Tombstones.png", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
    } (),
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background2.jpg",
    CanSelectCard: 1,
    DKind: 0,
    SunNum: 50,
    LevelName: "关卡 2-6",
    LvlEName: 16,
    LargeWaveFlag: {
        10 : $("imgFlag1")
    },
    Monitor: {
        f: AppearTombstones,
        ar: [6, 9, 7]
    },
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie])
    },
    StartGameMusic: "Ultimate battle"
},
{
    AZ: [[oZombie, 3, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 2, 1], [oFootballZombie, 1, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [3, 5, 9],
        a2: [1, 2, 3, 10]
    },
    FlagToMonitor: {
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/Card/Plants/ScaredyShroom.png", "left:587px;top:270px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oScaredyShroom, 17)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:235px;left:596px", EDAll)
    }
});