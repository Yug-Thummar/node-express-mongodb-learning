let imgs = document.querySelectorAll("img");
for(let img of imgs){
    img.addEventListener("click",function clk(){
        console.log("button was clicked");
    });
}