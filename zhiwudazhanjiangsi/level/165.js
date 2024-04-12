﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oJackinTheBoxZombie, oFootballZombie, oDancingZombie, oScreenDoorZombie, oBackupDancer, oZomboni, oPoleVaultingZombie, oJY, oEunZombie, oSnorkelZombie, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1, oWJY],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background3.jpg"]
    } (),
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background3.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 15层",
    LvlEName: 165,
    SunNum: 4500,
    Coord: 2,
    LF: [0, 1, 1, 2, 2, 1, 1],
    StartGameMusic: "Kitanai Sekai",
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oNewspaperZombie, 1, 1], [oJackinTheBoxZombie, 1, 1], [oFootballZombie, 1, 1], [oDancingZombie, 1, 1], [oScreenDoorZombie, 1, 1], [oZomboni, 1, 1], [oPoleVaultingZombie, 1, 1], [oJY, 1, 1], [oDuckyTubeZombie2, 1, 1], [oDuckyTubeZombie3, 1, 1], [oDuckyTubeZombie1, 1, 1], [oDuckyTubeZombie4, 1, 1], [oSnorkelZombie, 1, 1], [oEunZombie, 1, 1], [oWJY, 1, 20, [20]]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [29, 32, 47],
        a2: [29, 32, 67]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(166)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});