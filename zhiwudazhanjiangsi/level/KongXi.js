﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oSplitPea, oJalapeno, oSpikeweed, oRepeater, oTallNut, oPumpkinHead, oSquash, oFlowerPot, oTorchwood, oThreepeater, oGatlingPea, oTwinSunflower, oSpikerock, oFumeShroom, oCoffeeBean, oGloomShroom, oSunShroom, oPuffShroom, oScaredyShroom, oGarlic, oGraveBuster, oStarfruit, oLilyPad, oHypnoShroom, oIceShroom, oDoomShroom, oTangleKlep, oSeaShroom, oPlantern, oCactus, oTenManNut, oSnowRepeater, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oImp, oBalloonZombie],
    PicArr: ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background1.jpg"], 
    LF: [0, 1, 1, 1, 1, 1, 0], 
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background1.jpg",
    CanSelectCard: 1, 
    LevelName: "空袭",  
    LvlEName: 9,  
    SunNum: 500, 
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
     }
},
{
    AZ: [[oImp, 3, 1, [1, 10, 20]], [oBalloonZombie, 9, 2]], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5],
        a2: [1, 2, 3]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(0)
            }
        });
        NewImg("PointerUD", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});