﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oWallNut, oSnowPea, oSplitPea, oSpikeweed, oRepeater, oTallNut, oPumpkinHead, oFlowerPot, oTorchwood, oThreepeater, oGatlingPea, oTwinSunflower, oSpikerock, oFumeShroom, oCoffeeBean, oGloomShroom, oSunShroom, oPuffShroom, oScaredyShroom, oGarlic, oGraveBuster, oStarfruit, oLilyPad, oIceShroom, oSeaShroom, oPlantern, oCactus, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean], 
    ZName: [oCZombie, oCZombie2, oCZombie3, oCBucketheadZombie, oDuckyTubeZombie1, oCSnorkelZombie, oScreenDoorZombie, oDuckyTubeZombie2, oWJY, oWJY1],
    PicArr: ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX1.jpg"], 
    LF: [0, 2, 3, 3, 2, 2, 0], 
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/backgroundX1.jpg",
    CanSelectCard: 1, 
    LevelName: "副本-江轶同学会晤",  
    LvlEName: 9,  
    SunNum: 2000, 
    coord: 2, 
    InitLawnMower: function() {
    },
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag2"),
        30 : $("imgFlag1")  
     },
    StartGameMusic: "Zombieboss",
},
{
    AZ: [[oCZombie, 1, 1], [oCZombie2, 1, 2], [oCZombie3, 2, 3], [oCBucketheadZombie, 1, 10], [oDuckyTubeZombie1, 1, 5], [oCSnorkelZombie, 1, 17], [oScreenDoorZombie, 1, 9], [oDuckyTubeZombie2, 1, 10], [oWJY, 1, 30, [30]], [oWJY1, 1, 30, [30]]], 
    FlagNum: 30,
    FlagToSumNum: {
        a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 25] 
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowLargeWave, 0],
        29 : [ShowFinalWave, 0] 
    },
    FlagToEnd: function() {
        NewImg("imgSF", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/0.gif", "left:667px;top:330px;clip:rect(auto,auto,237px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oGoldenPrize, 0)
            }
        });
    }
});