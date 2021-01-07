var frame1;
var height, width;
var imgInFrame;
var frameSrcArray = [
  'url("https://d29mtkonxnc5fw.cloudfront.net/site_assets/black-frame-face17.jpg") 100 round',
  'url("https://d29mtkonxnc5fw.cloudfront.net/site_assets/natural-walnut-face2-darker.jpg") 100 round',
  'url("images/frm2.jpg") 150 round',
  'url("images/frm1.jpg") 150 round'
];


function changeFrame(frameNo){
  frame1 = document.getElementById("myFrame");  
  frame1.style.borderImage = frameSrcArray[frameNo-1];
  imgInFrame = document.getElementById("imageFrame");
  if(imgInFrame.height == 0){
    frame1.style.width = "500px";
    frame1.style.height = "450px";  
  }else{
    frame1.style.width = imgInFrame.width+30+"px";
  frame1.style.height = imgInFrame.height+30+"px";
  }
}

function changeImg(imageNo){
  var imgSrc;
  imgInFrame = new Image();
  frame1 = document.getElementById("myFrame");
  if(document.getElementById("img"+imageNo)){
    imgSrc = document.getElementById("img"+imageNo).src;
    imgInFrame = document.getElementById("imageFrame");
    imgInFrame
    imgInFrame.src = imgSrc;
    frame1.style.width = imgInFrame.width+30+"px";
    frame1.style.height = imgInFrame.height+30+"px";
  }
  
}