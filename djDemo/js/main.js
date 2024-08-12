var loader=new ImagesLoader();
    loader.loadImages([
      'btn-l.png',
      'btn-r.png',
      'carpet.png',
      'cloud1.png',
      'cloud2.png',
      'fn-b-flower.png',
      'fn-cloth.png',
      'fn-sepr-flower.png',
      'fn-up-mask.png',
      'girl.png',
      'knock-human.png',
      'main-bg.jpg',
      'main-btn.png',
      'main-title.png',
      'run.png',
      'sakura1.png',
      'sakura2.png',
      'sakura3.png',
      'trans-bg.jpg',
      'img/bg1.jpg',
      'img/bg2.jpg',
      'img/bg3.jpg',
      'img/bg4.jpg',
      'img/bg5.jpg',
      'img/bg6.jpg',
      'img/bg7.jpg',
      'img/bg8.jpg',
      'img/bg9.jpg',
      'img/bm1.png',
      'img/bm2.png',
      'img/bm3.png',
      'img/bmm1.png',
      'img/bmm2.png',
      'img/bmm3.png',
      'img/bride-face.png',
      'img/bridegroom-face.png',
      'img/btn-del.png',
      'img/btn-generate.png',
      'img/btn-resize.png',
      'img/cf1.png',
      'img/cf2.png',
      'img/cf3.png',
      'img/cm1.png',
      'img/cm2.png',
      'img/cm3.png',
      'img/fn-desc.png',
      'img/nav-arrow.png',
      'img/nav-dec.png',
      'img/nav-human.png',
      'img/nav-pet.png',
      'img/nav-place.png',
      'img/pet1.png',
      'img/pet2.png',
      'img/pet3.png',
      'img/pet4.png',
      'img/pet5.png',
      'img/pet6.png',
      'txt.png',
      'fn-up-mask.png',
      'pause.png',
      'play.png',
      'pixels.png',
    ],'https://gongjv.jun-ye.top/djDemo/images/');
    loader.complete(function(){
        console.log('completed');
        $('.loading').hide()
        $('.kv').show()
    });
    loader.process(function(){
        console.log('process'+this.processNum);
        $('.loadingNum').html(this.processNum+'%')
        $('.line').css({'width':37.75/2*this.processNum/100+'rem'})

        if(this.processNum>60){
          $('.man').css({'visibility':'hidden'})
          $('.man2').show()
          $('.woman').show()
        }else{
          $('.man').css({'transform':'translate('+37.75/2*this.processNum/100+'rem,0)'})
        }
    });
    loader.start();
    startMake();
    //用户点击开始制作按钮，出现告白页，再出现场景布置页面
    function startMake(){
      $('.kv').hide()
      $('.gb').show()

      //告白出现
      $('.txt1').show()
      $('.txt1').addClass('enterTxt1')

      // setTimeout(()=>{
        $('.txt2').show()
        $('.txt2').addClass('enterTxt2')
      // },500)

      // setTimeout(()=>{
        $('.gb').hide()
        $('.bzcj').show()
      // },3000)
      

    }

    $('.startBtn').bind('touchend',startMake)


    //布置场景隐藏，显示海报页
    function showHaibao(){
      $('.bzcj').hide()
      $('.wy').show()
    }

    $('.saveBtn').bind('touchend',showHaibao)


//页卡
let tab=$('.tab')
let tCont=$('.tCont')

tab.each(function(i){
  $(this).click(function(){
    tab.removeClass('selected')
    tCont.removeClass('selected')

    tab.eq(i).addClass('selected')
    tCont.eq(i).addClass('selected')
  })
})
let squ=0
//场景布置正经代码

//创建舞台和默认背景
const app=new PIXI.Application({
  width:750,
  height:1334,
  transparent:true,
})

document.getElementById('stage').appendChild(app.view)

// let text=new PIXI.Text("hello world", {
//   fontSize: 100,
//   fill: 0xff0000
// })

// let feface2=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/pet3.png')
// feface2.position.set(140,60)

let bgSpr=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/bg1.jpg')
bgSpr.position.set(0,0)
bgSpr.width=750
bgSpr.height=1334
bgSpr.name='bg'

// bgSpr.mask = feface2;
addSpr(2, 'pet2')
app.stage.addChild(bgSpr)


//点击页卡内容
$('.tabCont li').each(function(i){
  $(this).click(function(){
    let tadid=$('.tabCont li').eq(i).attr('id')
    console.log(tadid)
    console.log(i)
    //风景 0-8
    if((i<=8)&&(i>=0)){
      let n=i+1
      let key = new PIXI.Texture.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/bg'+n+'.jpg');
      app.stage.getChildByName('bg').texture= key;
    }

    //人物 9-14  9新郎  12新娘

    if((i<=14)&&(i>=9)){
      showSub(i,tadid)
    }

    //修饰 15-26
    if((i<=26)&&(i>=15)){
      addSpr(2,tadid)
    }

    //宠物 27-32
    if((i<=32)&&(i>=27)){
      
      addSpr(2,tadid)
    }
  })
})

$('.subtab li').each(function(i){
  $(this).click(function(){
    let suid=$('.subtab li').eq(i).attr('id')
    console.log(suid)
    //新郎头发 0-5
    if(i<=5){
      app.stage.getChildByName('xinliangSuper').children[0].children[2].texture=new PIXI.Texture.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/'+suid+'.png')
    }
    
    //新郎衣服 6-11
    if((i<=11)&&(i>=6)){
      app.stage.getChildByName('xinliangSuper').children[0].children[0].texture=new PIXI.Texture.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/'+suid+'.png')
    }

    //新娘头发 18-23
    if((i<=23)&&(i>=18)){
      app.stage.getChildByName('xinniangSuper').children[0].children[2].texture=new PIXI.Texture.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/'+suid+'.png')
    }

    //新娘衣服 24-29
    if((i<=29)&&(i>=24)){
      app.stage.getChildByName('xinniangSuper').children[0].children[0].texture=new PIXI.Texture.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/'+suid+'.png')
    }

    //伴郎 12-14 男童 15-17 伴娘 30-32 女童 33-35
    if(((i>=12)&&(i<=17))||((i>=30)&&(i<=35))){
      addSpr(2,suid)
    }

    
  })
})


function showSub(n,tadid){
  //9新郎 10伴郎 11男童 12新娘 13伴娘 14女童
  $('.subtab ul').hide()
  switch(n){
    case 9:
    $('.subtab ul').eq(0).show()
    addSpr(0,'')
    break;
    case 12:
    $('.subtab ul').eq(3).show()
    addSpr(1,'')
    break;
    default:
    let m=n-9
    $('.subtab ul').eq(m).show()

  }

}

//添加不同的内容 特别注意：背景图片+人物部分
function randomPos(){
  return{
    x:750/2+Math.random()*40,
    y:1334/2+Math.random()*40
  }
}


//清除选中状态
function clearSelected(){
  let appAllChildren=app.stage.children
  let acNum=appAllChildren.length

  for(let w=1;w<acNum;w++){
    let spr=appAllChildren[w]
    spr.children[1].visible=false
    spr.children[2].visible=false
    spr.children[3].visible=false
  }
}

//who 0新郎 1新娘 2其他
function addSpr(who,picname){
  $('.subtab ul').hide()
  let container=new PIXI.Container()

  let cpos=randomPos()
  container.position.set(cpos.x,cpos.y)

  //边框、缩放按钮、删除按钮
  const space=20
  const btnSize=50

  let borderline=new PIXI.Graphics()
  borderline.name='borderline'
  borderline.lineStyle(1,0xaaaaaa)
  

  let resizeBtn=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/btn-resize.png')
  resizeBtn.name='resizeBtn'
  resizeBtn.width=btnSize
  resizeBtn.height=btnSize
  resizeBtn.interactive=true

  let delBtn=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/btn-del.png')
  delBtn.name='delBtn'
  delBtn.width=btnSize
  delBtn.height=btnSize
  delBtn.interactive=true

  let imgContainer=new PIXI.Container()
  imgContainer.position.set(space/2,space/2)
  imgContainer.interactive=true

  //总精灵组container的宽高；borderline.drawRoundedRect(0,0,)；resizeBtn的position.set；delBtn的position.set;imgContainer的name;container.pivot.set
  let boxSpce=[0,0]

  //新郎新娘唯一性
  if((who==0)||(who==1)){
    let tiptxt=['新郎','新娘']
    let stageChildren=app.stage.children
    let scNum=stageChildren.length
    for(let v=0;v<scNum;v++){
      if(((stageChildren[v].name=='xinliangSuper')&&(who==0))||((stageChildren[v].name=='xinniangSuper')&&(who==1))){
        alert(tiptxt[who]+'只允许添加一个哦！')
        return
      }
    }
  }
try{
  //清除选中状态
  // clearSelected()
}
catch{

}


  if(who==0){
    //新郎
    $('.subtab ul').eq(0).show()
    container.name='xinliangSuper'

    const male=[340,681]
    boxSpce=[340+space,681+space]

    imgContainer.name='xinlang'

    let mbody=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/bg-clothes1.png')
    mbody.position.set(0,148)

    let mface=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/bridegroom-face.png')
    mface.position.set(135,2)

    let mhair=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/bg-hair1.png')
    mhair.position.set(137,0)

    imgContainer.addChild(mbody)
    imgContainer.addChild(mface)
    imgContainer.addChild(mhair)

  }else if(who==1){
    //新娘
    $('.subtab ul').eq(3).show()
    container.name='xinniangSuper'
    const female=[460,806]
    boxSpce=[460+space,806+space]

    imgContainer.name='xinniang'

    let febody=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/b-clothes1.png')
    febody.position.set(0,200)

    let feface=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/bride-face.png')
    feface.position.set(140,60)

    let fehair=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/b-hair1.png')
    fehair.position.set(60,0)

    imgContainer.addChild(febody)
    imgContainer.addChild(feface)
    imgContainer.addChild(fehair)

  }else{
    //其他
    container.name='sprite'+squ
    squ++

    let imgsize=sizeJson[picname]
    let imgSpr=new PIXI.Sprite.fromImage('https://gongjv.jun-ye.top/djDemo/images/img/'+picname+'.png')
    bgSpr.mask = imgSpr
    boxSpce=[imgsize.width,imgsize.height]
    imgContainer.addChild(imgSpr)

  }

  container.width=boxSpce[0]
  container.height=boxSpce[1]
  container.pivot.set(boxSpce[0]/2,boxSpce[1]/2)

  borderline.drawRoundedRect(0,0,boxSpce[0],boxSpce[1],10)

  resizeBtn.position.set(boxSpce[0]-btnSize/2,-btnSize/2)
  delBtn.position.set(-btnSize/2,boxSpce[1]-btnSize/2)


  container.addChild(imgContainer)
  container.addChild(borderline)
  container.addChild(resizeBtn)
  container.addChild(delBtn)

  imgContainer.on('touchstart',drapdropTouchStart)
    .on('touchmove',drapdropTouchMove)
    .on('touchend',clearTouchEnd)
  
  resizeBtn.on('touchstart',resizeTouchStart)

  delBtn.on('touchend',del)

  
  app.stage.addChild(container)

}


//拖拽
let startPos={
  x:0,
  y:0
}
let objPos={
  x:0,
  y:0
}
let flag=true //是否可以执行拖拽操作
let sprName='' //执行拖拽的精灵组别名

function drapdropTouchStart(e){
  //清除选中状态
  // clearSelected()
  $('.subtab ul').hide()

  //当前精灵组选中状态
  this.parent.children[1].visible=true
  this.parent.children[2].visible=true
  this.parent.children[3].visible=true

  //调整顺序
  app.stage.setChildIndex(this.parent,app.stage.children.length-1)

  if(flag&&(this.name!='resizeBtn')){
    flag=false

    startPos={
      x:e.data.global.x,
      y:e.data.global.y
    }

    objPos={
      x:this.parent.getGlobalPosition().x,
      y:this.parent.getGlobalPosition().y
    }

    sprName=this.parent.name

    //新郎新娘展示二级菜单
    if(sprName=='xinliangSuper'){
      $('.subtab ul').eq(0).show()
    }

    if(sprName=='xinniangSuper'){
      $('.subtab ul').eq(3).show()
    }

  }

}

function drapdropTouchMove(e){
  if((this.name!='resizeBtn')&&(this.parent.name==sprName)){
    let tempPos={
      x:e.data.global.x,
      y:e.data.global.y
    }

    this.parent.position.set(objPos.x+(tempPos.x-startPos.x),objPos.y+(tempPos.y-startPos.y))
  }
}

function clearTouchEnd(){
  flag=true

  sprName=''
  resizeSprName=''

  app.stage.getChildByName('bg').off('touchmove')
  app.stage.getChildByName('bg').interactive=false
}

//缩放
let resizeStartPosX=0
let resizeSprName=''

function resizeTouchStart(e){
  if(flag){
    resizeStartPosX=e.data.global.x
    resizeSprName=this.parent.name

    app.stage.getChildByName('bg').interactive=true

    app.stage.getChildByName('bg').on('touchmove',resizeTouchMove)
      .on('touchend',clearTouchEnd)
  }
}

function resizeTouchMove(e){
  if(this.name=='bg'){
    let tempPosX=e.data.global.x

    let dur=tempPosX-resizeStartPosX
    resizeStartPosX=tempPosX

    if(dur>0){
      //放大
      let scale1=app.stage.getChildByName(resizeSprName).scale.x+0.01
      if(app.stage.getChildByName(resizeSprName).scale.x<=1.5){
        app.stage.getChildByName(resizeSprName).scale.set(scale1,scale1)
      }
    }

    if(dur<0){
      //缩小
      if(app.stage.getChildByName(resizeSprName).scale.x>=0.4){
        let sclae2=app.stage.getChildByName(resizeSprName).scale.x-0.01
        app.stage.getChildByName(resizeSprName).scale.set(sclae2,sclae2)
      }
    }


  }
}

//删除
function del(){
  app.stage.removeChild(this.parent)
}

//生成海报
function makehaibao(){
  //清除选中状态
  // clearSelected()

  setTimeout(function(){
    app.render()
    let tupic=app.view.toDataURL('image/png')

    let app2=new PIXI.Application({
      width:750,
      height:1579,
      transparent:true
    })

    document.getElementById('stage').appendChild(app2.view)


    let picBase64=new PIXI.Sprite.fromImage(tupic)
    picBase64.position.set(0,0)
    picBase64.width=750
    picBase64.height=1334
    app2.stage.addChild(picBase64)

    let txt=new PIXI.Sprite.fromImage('../images/txt.png')
    txt.position.set(0,1334)
    txt.width=750
    txt.height=245
    app2.stage.addChild(txt)
    
    let rand=Math.floor(words.length*Math.random())
    let word=words[rand]
    let wordStyle={
      fontSize:'22px',
      fill:'#5e7091'
    }
    let myword=new PIXI.Text(word,wordStyle)
    myword.position.set(48,139+1334)
    app2.stage.addChild(myword)

    setTimeout(function(){
      let myhaibao=app2.renderer.plugins.extract.base64(app2.stage)
      document.getElementById('myhaibao').src=myhaibao
    },200)

  },200)

  


}

$('.saveBtn').bind('touchend',makehaibao)

//音乐
let objMusic=document.getElementById('bgMusic')
let musicState=true //是否播放中

function musicPlay(){
  musicState=true
  objMusic.play()
  
  document.addEventListener('WeixinJSBridgeReady',function(){
    objMusic.play()
  },false)

  $('.music').removeClass('musicPause').addClass('musicPlay')
}

function musicPause(){
  musicState=false
  objMusic.pause()
  
  document.addEventListener('WeixinJSBridgeReady',function(){
    objMusic.pause()
  },false)

  $('.music').removeClass('musicPlay').addClass('musicPause')
}

musicPlay()

$('.music').bind('touchend',function(){
  if(musicState){
    musicPause()
  }else{
    musicPlay()
  }
})

//分享和在玩一下
$('.replayBtn').bind('touchend',function(){
  window.location.href=window.location.href+'?v='+Math.random()
})

$('.shareBtn').bind('touchend',function(){
  $('.sharelayer').show()
})
$('.sharelayer').bind('touchend',function(){
  $('.sharelayer').hide()
})


