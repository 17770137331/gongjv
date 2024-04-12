﻿oS.Init({
    PName: [oPeashooter, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oJalapeno, oSpikeweed, oRepeater, oSquash, oTorchwood, oLilyPad, oTangleKlep, oTallNut, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oScreenDoorZombie, oNewspaperZombie, oDolphinRiderZombie, oPoleVaultingZombie, oSnorkelZombie],
    PicArr: function() {
        return ["https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background3.jpg", "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/trophy.png"]
    } (),
    Coord: 2,
    SunNum: 2500,
    LF: [0, 1, 1, 2, 2, 1, 1],
    backgroundImage: "https://gongjv.jun-ye.top/zhiwudazhanjiangsi/images/interface/background3.jpg",
    CanSelectCard: 1,
    LevelName: "靠天吃饭",
    LvlEName: "yy",
    LargeWaveFlag: {
        10 : $("imgFlag4"),
        20 : $("imgFlag3"),
        30 : $("imgFlag2"),
        40 : $("imgFlag1")
    },
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie2])
    },
    StartGameMusic: "GAMEPK",
    StartGame: function() {
        StopMusic();
        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
        SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
        oS.InitLawnMower();
        PrepareGrowPlants(function() {
            oP.Monitor({
                ar: [],
                f: function() {
                    oSym.TimeStep = 4
                }
            });
            BeginCool();
            AutoProduceSun(25);
            oSym.addTask(1500,
            function() {
                oP.AddZombiesFlag();
                SetVisible($("dFlagMeterContent"))
            },
            [])
        })
    }
},
{
    AZ: [[oZombie, 2, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oNewspaperZombie, 1, 5], [oPoleVaultingZombie, 1, 10], [oDuckyTubeZombie1, 1, 20], [oScreenDoorZombie, 1, 12], [oDolphinRiderZombie, 1, 20], [oSnorkelZombie, 1, 25]],
    FlagNum: 40,
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25, 48, 60]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowLargeWave, 0],
        29 : [ShowLargeWave, 0],
        39 : [ShowFinalWave, 0]
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