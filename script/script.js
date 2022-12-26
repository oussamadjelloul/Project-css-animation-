let cl=document.querySelectorAll("header a");
cl.forEach(e=>{
    e.onclick= _ => {
        cl.forEach(element => {
            element.classList.remove("active");
        });
        e.classList.add("active");
    }
});


let stars=document.querySelector("#stars");
let moon=document.querySelector("#moon");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let mountains7=document.getElementById("mountains7");
let oussama = document.getElementById("oussama");
let main=document.querySelector(".main");
window.onscroll=function(){
    let value=scrollY;
    if(value>3){
        oussama.style.display="block";
    }
    stars.style.left=  value*4+"px";
    moon.style.top= value*4+"px";
    if(value>318){
        moon.style.display="none";
    }else {
        moon.style.display="block";
    }
    river.style.top=value*4+"px";
    boat.style.top=value*3+"px";
    boat.style.left=value*3+"px";
    mountains3.style.top=value*2.5+"px";
    mountains4.style.top=value*2.5+"px";
    mountains7.style.top=value*1.5+"px";
    if(value<100){oussama.style.fontSize = value+"px";}else{oussama.style.position="fixed"}
    if(value>318){
        oussama.style.display="none";
    }
    console.log(main);
    if(value>100){
        main.style.background="linear-gradient(#376281,#10001f)";
    }else{
        main.style.background="linear-gradient(#200016,#10001f)";
    }
    console.log(value);
    console.log(main);
}
