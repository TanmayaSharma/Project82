canvas=document.getElementById("myCanvas");
pencil =canvas.getContext("2d");

pencil.beginPath();
pencil.lineWidth=4;
pencil.strokeStyle="cyan";
pencil.arc(100,200,40,0,360);
pencil.stroke();

canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e)
 {
    colour = document.getElementById("colour").value; 
    
    mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop; 
     
     
     circle(mouse_x , mouse_y);
 }
 function circle(mouse_x , mouse_y)
 {
    pencil.beginPath();
    pencil.strokeStyle =colour;
    pencil.lineWidth=2;
    pencil.arc(mouse_x,mouse_y,40,0,360);
    pencil.stroke();

 }
  function clearcanvas()
  {
      pencil.clearRect(0,0,canvas.width,canvas.height);
  }