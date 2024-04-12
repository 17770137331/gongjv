﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oBalloonZombie, oJX, oNewspaperZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX3.jpg"]
    } (),
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX3.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 52层",
    LvlEName: 200,
    SunNum: 9900,
    LF: [0, 3, 3, 0, 3, 3, 0], 
    StartGameMusic: "The Great Wall",  
    LargeWaveFlag: {
        4 : $("imgFlag3"),
        8 : $("imgFlag2"),
        12 : $("imgFlag1"),
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oCXZombie, 1, 1], [oJackinTheBoxZombie, 1, 1], [oFootballZombie, 1, 1],  [oCConeheadZombie, 1, 1], [oPoleVaultingZombie, 1, 1], [oHeiFootballZombie, 1, 1], [oCZombie, 1, 1], [oXBZombie, 1, 1], [oCBucketheadZombie, 1, 1], [oMustacheZombie, 1, 1], [oTrashZombie, 1, 1], [oBalloonZombie, 1, 1], [oJX, 1, 1], [oNewspaperZombie, 1, 1]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [73, 145, 149, 165, 189, 197, 221, 215],
        a2: [73, 145, 149, 165, 189, 197, 221, 234]
    },
    FlagToMonitor: {
        3 : [ShowLargeWave, 0],
        8 : [ShowLargeWave, 0],
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(203)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});