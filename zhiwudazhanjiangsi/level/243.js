﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oCPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oJX, oNewspaperZombie, oCNewspaperZombie, oCJackinTheBoxZombie, oCFootballZombie, oZZ, othugZombie, oZomboni, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDolphinRiderZombie, oSubZombie, oSnorkelZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX1.jpg"]
    } (),
    InitLawnMower: function() {
        CustomSpecial(oPoolCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oPoolCleaner, 4, -1)
        CustomSpecial(oPoolCleaner, 5, -1)
    },
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX1.jpg",
    CanSelectCard: 1,
    LF: [0, 2, 3, 3, 2, 2, 0], 
    DKind: 1,
    LevelName: "常青之塔 93层",
    LvlEName: 243,
    SunNum: 9900,
    CanSelectCard: 1,
    StartGameMusic: "The Great Wall",
    LargeWaveFlag: {
        4 : $("imgFlag3"),
        8 : $("imgFlag2"),
        12 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oCXZombie, 1, 4], [oJackinTheBoxZombie, 1, 5], [oFootballZombie, 1, 6],  [oCConeheadZombie, 1, 7], [oPoleVaultingZombie, 1, 8], [oHeiFootballZombie, 1, 9], [oCZombie, 1, 10], [oXBZombie, 1, 11], [oCBucketheadZombie, 1, 12], [oMustacheZombie, 1, 11], [oTrashZombie, 1, 10], [oJX, 1, 9], [oNewspaperZombie, 1, 8], [oCJackinTheBoxZombie, 1, 7], [oCFootballZombie, 1, 6], [oCNewspaperZombie, 1, 5], [oCPoleVaultingZombie, 1, 4], [oZZ, 1, 3], [othugZombie, 1, 2], [oZomboni, 1, 2], [oDuckyTubeZombie1, 1, 3], [oDuckyTubeZombie2, 1, 4], [oDuckyTubeZombie3, 1, 5], [oDuckyTubeZombie4, 1, 6], [oDolphinRiderZombie, 2, 7], [oSubZombie, 3, 8], [oSnorkelZombie, 3, 9]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [42, 158, 273, 316, 357],
        a2: [42, 158, 273, 316, 357]
    },
    FlagToMonitor: {
        3 : [ShowLargeWave, 0],
        7 : [ShowLargeWave, 0],
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(244)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});