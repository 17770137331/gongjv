﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oGun, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean], 
    ZName: [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDolphinRiderZombie, oSubZombie, oSnorkelZombie, oWJY1],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background5.jpg"]
    } (),
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background5.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 30层",
    LvlEName: 180,
    SunNum: 7000,
    LF: [0, 2, 2, 2, 2, 2, 2], 
    StartGameMusic: "jiaxing",
    LargeWaveFlag: {
    },
    InitLawnMower: function() {
        CustomSpecial(oPoolCleaner, 1, -1)
        CustomSpecial(oPoolCleaner, 2, -1)
        CustomSpecial(oPoolCleaner, 3, -1)
        CustomSpecial(oPoolCleaner, 4, -1)
        CustomSpecial(oPoolCleaner, 5, -1)
    }
},
{
    AZ: [[oDuckyTubeZombie1, 1, 1], [oDuckyTubeZombie2, 1, 1], [oDuckyTubeZombie3, 1, 1], [oDuckyTubeZombie4, 1, 1], [oDolphinRiderZombie, 1, 1], [oSubZombie, 1, 1], [oSnorkelZombie, 1, 1], [oWJY1, 1, 10, [10]]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [30, 60, 94, 95, 102],
        a2: [30, 60, 94, 95, 117]
    },
    FlagToMonitor: {
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(181)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});