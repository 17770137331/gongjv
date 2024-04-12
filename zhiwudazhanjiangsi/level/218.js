﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oCPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oJX, oNewspaperZombie, oCNewspaperZombie, oCJackinTheBoxZombie, oCFootballZombie, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1, oSubZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background4.jpg"]
    } (),
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oWarshipsZombie])
    },
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background4.jpg",
    CanSelectCard: 1,
    Coord: 2,
    DKind: 0,
    LevelName: "常青之塔 68层",
    LvlEName: 218,
    SunNum: 9900,
    CanSelectCard: 1,
    Coord: 2,
    HaveFog: 6,
    LF: [0, 1, 1, 2, 2, 1, 1],
    StartGameMusic: "Loonboon",
    LargeWaveFlag: {
        4 : $("imgFlag3"),
        8 : $("imgFlag2"),
        12 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oCXZombie, 1, 4], [oJackinTheBoxZombie, 1, 5], [oFootballZombie, 1, 6],  [oCConeheadZombie, 1, 7], [oPoleVaultingZombie, 1, 8], [oHeiFootballZombie, 1, 9], [oCZombie, 1, 10], [oXBZombie, 1, 11], [oCBucketheadZombie, 1, 12], [oMustacheZombie, 1, 11], [oTrashZombie, 1, 10], [oJX, 1, 9], [oNewspaperZombie, 1, 8], [oCJackinTheBoxZombie, 1, 7], [oCFootballZombie, 1, 6], [oCNewspaperZombie, 1, 5], [oCPoleVaultingZombie, 1, 4], [oDuckyTubeZombie2, 1, 3], [oDuckyTubeZombie3, 1, 2], [oDuckyTubeZombie1, 1, 1], [oDuckyTubeZombie4, 1, 2], [oSubZombie, 1, 1]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [121, 177, 234, 226, 229, 236, 229, 238, 221],
        a2: [121, 177, 234, 226, 229, 236, 229, 238, 240]
    },
    FlagToMonitor: {
        3 : [ShowLargeWave, 0],
        8 : [ShowLargeWave, 0],
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(219)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});