var img1=document.querySelector("#iiitkotaimage");
var body=document.querySelector("body");
var h1=document.querySelector("#name");
var img2=document.querySelector("#sticker");
var news1=document.querySelector("#news1");
var news1=document.querySelector("#news1");
var myname=document.getElementById("myname");
myname.style.backgroundColor="yellow";
news1.style.position="absolute";
news1.style.left="2px";
news1.style.width="400px";
news2.style.position="absolute";
news2.style.right="2px";
news2.style.width="400px";
news1.style.top="125px";
news2.style.top="125px";
img2.style.position="absolute";
img2.style.left="0px";
img2.style.up="0px";
img2.style.border="solid white 2px";
img1.style.position="absolute";
img1.style.left="0px";
img1.style.up="0px";
img1.style.up="0px";
h1.style.position="absolute";
h1.style.left="240px";
h1.style.up="0px";
var body=document.querySelector("body");

button=document.querySelectorAll(".dropdown");
for(var i=0;i<button.length;i++)
{
button[i].addEventListener("mouseover",function(){
document.getElementById("myDropdown").classList.add("show");
document.getElementById("myDropdown2").classList.add("show");
document.getElementById("myDropdown3").classList.add("show");
document.getElementById("myDropdown4").classList.add("show");
});
}
for(var i=0;i<button.length;i++)
{
	button[i].addEventListener("mouseout",function(){
document.getElementById("myDropdown").classList.remove("show");
document.getElementById("myDropdown2").classList.remove("show");
document.getElementById("myDropdown3").classList.remove("show");
document.getElementById("myDropdown4").classList.remove("show");
});

}


var arr = [];

arr[0]= new Image();
arr[0].src = "https://cdn.cybrhome.com/media/website/live/screenshot/scr_iiitkota.ac.in_add2b3.png";

arr[1]= new Image();
arr[1].src = "https://www.pinkcitypost.com/wp-content/uploads/2019/05/mnit-jaipur.jpg";

arr[2]= new Image();
arr[2].src = "https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-9/66586461_2983478868592572_7000318486526296064_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_oc=AQlzeIwq4JQnmKv-0_Tpd4cVDHiAOnlrhYKsLDVZj43Feu0QVG1hTxsPXpMVu7J-Im8IIht3EvaxhIOxzox_vsqC&_nc_ht=scontent.fdel1-1.fna&oh=dd05b9ca28239e9b7562dbe8e643bffb&oe=5EBE02C9";

arr[3]=new Image();
arr[3].src="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/66530116_2983479055259220_7997989043780452352_n.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_oc=AQlYWB1tKXTmpxIgub2T3XYTy7N2XymUoahz4N7RQVW11YHGrbjakSc6kCsoi0pvnaSRbTIbS5lsmKSidTrxao5t&_nc_ht=scontent.fdel1-4.fna&oh=fa361e1d0f10705a8efee174d9ab9cf6&oe=5EBEA416";
var i=0;

function slide(){
 document.getElementById("image1").src= arr[i].src;
 i++;
 if(i==arr.length){
  i=0;
 }
 setTimeout(function(){ slide(); },3000);
}

