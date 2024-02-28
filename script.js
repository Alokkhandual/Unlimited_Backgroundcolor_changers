
const randomColor=function(){
    const color='0123456789ABCDEF'
    let hex='#'
    for(let i=0;i<6;i++){
      hex +=color[Math.floor(Math.random()*16)]
    }
    return hex
}
let change;

document.querySelector('#start').addEventListener('click',function(){
    if(!change){
    change=setInterval(function(){
        document. body.style.backgroundColor=randomColor()
        
    },1000)
}
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(change)
    change=null;
   
})
