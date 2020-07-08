var randomno1=Math.floor(Math.random()*6)+1;
var randomadd="images/"+"dice"+randomno1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomadd);

//second dice
var randomno2=Math.floor(Math.random()*6)+1;
var randomadd2="images/"+"dice"+randomno2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomadd2);

if (randomno1 > randomno2){
    document.querySelector("h1").innerHTML="🎉Player1 wins";
}
else if(randomno1<randomno2){
    document.querySelector("h1").innerHTML="🎉Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="😢Draw";
}

