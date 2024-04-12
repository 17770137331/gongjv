﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oGun, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean], 
    ZName: [oZomboni, oZombie, oBucketheadZombie, oConeheadZombie, oCZombie, oCBucketheadZombie, oCConeheadZombie, oFootballZombie, oHeiFootballZombie, othugZombie, oCJackinTheBoxZombie, oZZ, oDancingZombie, oBackupDancer, oMustacheZombie, oXBZombie, oPoleVaultingZombie, oCPoleVaultingZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundwall2.jpg"]
    } (),
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundwall2.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 39层",
    LvlEName: 189,
    SunNum: 8000,
    LF: [0, 3, 3, 3, 3, 3, 3], 
    DKind: 0,
    StartGameMusic: "The Great Wall1",
    LargeWaveFlag: {
        5 : $("imgFlag3"),
        10 : $("imgFlag2"),
        15 : $("imgFlag1")
    },
    InitLawnMower: function() {
        CustomSpecial(oCleaner, 1, -1)
        CustomSpecial(oCleaner, 2, -1)
        CustomSpecial(oCleaner, 3, -1)
        CustomSpecial(oCleaner, 4, -1)
        CustomSpecial(oCleaner, 5, -1)
    }
},
{
    AZ: [[oZomboni, 1, 1], [oZombie, 1, 1], [oBucketheadZombie, 1, 1], [oConeheadZombie, 1, 1], [oCZombie, 1, 1], [oCBucketheadZombie, 1, 1], [oCConeheadZombie, 1, 1], [oFootballZombie, 1, 1], [oHeiFootballZombie, 1, 1], [othugZombie, 1, 1], [oCJackinTheBoxZombie, 1, 1], [oZZ, 1, 1], [oDancingZombie, 1, 1], [oMustacheZombie, 1, 1] [oXBZombie, 1, 1], [oPoleVaultingZombie, 1, 1], [oCPoleVaultingZombie, 1, 1]],
    FlagNum: 15,
    FlagToSumNum: {
        a1: [41, 64, 88, 117, 132, 158, 157, 160],
        a2: [41, 64, 88, 117, 132, 158, 157, 178]
    },
    FlagToMonitor: {
        4 : [ShowLargeWave, 0],
        9 : [ShowLargeWave, 0],
        14 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(190)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});