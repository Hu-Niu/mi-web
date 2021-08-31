window.onload=function(){
  var imgLIst=document.getElementsByClassName('all-imgs');
  var imgs=imgLIst[0].getElementsByTagName("li");
  var navList=document.getElementsByClassName("dian-list");
  
  //通过图片数量获取img-list的宽度
  imgLIst[0].style.width=1226*imgs.length + "px";
  
  //永远先显示第一张图片，连同它的导航栏变色
  var arrA=navList[0].getElementsByTagName("a");
  var index=0;
  arrA[index].style.backgroundColor="white";
  
  //为所有a添加单机响应函数
  for(var i=0;i<arrA.length;i++){
    arrA[i].num=i;
    arrA[i].onclick=function(){
      clearInterval(timer);
      index=this.num;
      setA();
      //imgLIst.style.left=-520*index + "px";
      //调用move()方法
      move(imgLIst[0],-1226*index,100,"left",function(){
        autoChange();
      })
    }
  }
  
  //调用自动播放函数
  autoChange();
  
  //创建一个导航栏变色的函数
  function setA(){
    if(index>=5){
      index=0;
      imgLIst[0].style.left=0 + "px";
    }
    for(var i=0;i<arrA.length;i++){
      arrA[i].style.backgroundColor='';
    }
    arrA[index].style.backgroundColor="white";
  }
  
  //创建一个自动播放函数
  //创建timer
  var timer;
  function autoChange(){
    timer=setInterval(function(){
      index++;
      index%=imgs.length;
      setA();
      move(imgLIst[0],-1226*index,100,"left",function(){
        
      })
    },10000)
  }

  
}
