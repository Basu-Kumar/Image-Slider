let flag=0;

slideShow(flag);

function slideShow(num){
    let slides=document.getElementsByClassName('slide');
    slides[num].style.display = "block" ;
}