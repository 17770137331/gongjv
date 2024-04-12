﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1, oSubZombie, oDolphinRiderZombie, oSnorkelZombie, oCDolphinRiderZombie, oCSnorkelZombie, oSmallDuckyTubeZombie1, oSmallSnorkelZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background5.jpg"]
    } (),
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oWarshipsZombie])
    },
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background5.jpg",
    CanSelectCard: 1,
    Coord: 2,
    DKind: 0,
    LevelName: "常青之塔 72层",
    LvlEName: 222,
    SunNum: 9900,
    CanSelectCard: 1,
    Coord: 2,
    HaveFog: 6,
    LF: [0, 2, 2, 2, 2, 2, 2],
    InitLawnMower: function() {
        CustomSpecial(oPoolCleaner, 1, -1)
        CustomSpecial(oPoolCleaner, 2, -1)
        CustomSpecial(oPoolCleaner, 3, -1)
        CustomSpecial(oPoolCleaner, 4, -1)
        CustomSpecial(oPoolCleaner, 5, -1)
        CustomSpecial(oPoolCleaner, 6, -1)
    },
    StartGameMusic: "jiaxing",
    LargeWaveFlag: {
        4 : $("imgFlag3"),
        8 : $("imgFlag2"),
        12 : $("imgFlag1")
    }
},
{
    AZ: [[oDuckyTubeZombie2, 1, 1], [oDuckyTubeZombie1, 1, 2], [oDuckyTubeZombie3, 1, 3], [oDuckyTubeZombie4, 1, 4], [oSubZombie, 1, 5], [oDolphinRiderZombie, 1, 6],  [oSnorkelZombie, 1, 7], [oCSnorkelZombie, 1, 8], [oCDolphinRiderZombie, 1, 9], [oSmallDuckyTubeZombie1, 1, 10], [oSmallSnorkelZombie, 1, 11]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [145, 198, 252, 241, 241, 245, 235, 241],
        a2: [145, 198, 252, 241, 241, 245, 235, 241]
    },
    FlagToMonitor: {
        3 : [ShowLargeWave, 0],
        8 : [ShowLargeWave, 0],
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(223)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});