//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function draw(){
    const canvas = document.querySelector('canvas')
  if (canvas.getContext) {
     const ctx = canvas.getContext('2d')
     
        
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); 
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  
    ctx.moveTo(65, 65);
    ctx.stroke();
    
        
   
  }

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = document.getElementById('c').value
        ctx.fillRect(200 + i * 116, 300, 50, 40);
      }

  }



  let r = Math.random()
  if(r<.5){
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = "red";
    ctx.fill()
            }
      else{
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = "blue";
        ctx.fill()
    }


  let c = document.querySelector('canvas')
  if(c.getContext){
      let ctx = c.getContext('2d')
      ctx.beginPath()
      ctx.arc(document.getElementById('x').value, 500,50,0,2 * Math.PI)
      ctx.fill() 
  }
  
  if(c.getContext){
    let ctx = c.getContext('2d')
    ctx.fillStyle = "red";
    ctx.fillRect(500, 500, 300, 300);
    ctx.fillStyle = "blue";
    ctx.fillRect(600, 600, 100, 50);
    
        
  }
    
}
   
document.body.onload = draw
document.getElementById('x').onchange = draw
document.getElementById('c').onchange = draw
