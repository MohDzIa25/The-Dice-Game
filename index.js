function setImage( image, no)
{
    switch (no)
    {
        case  1:
          image.setAttribute("src","./Images/dice 1.png");
          break;  
        case 2:
            image.setAttribute("src","./Images/dice 2.png");
            break;
        case  3:
            image.setAttribute("src","./Images/dice 3.png");
            break;
        case 4:
            image.setAttribute("src","./Images/dice 4.png");
            break;
        case  5:
            image.setAttribute("src","./Images/dice 5.png");
            break;
        case 6:
            image.setAttribute("src","./Images/dice 6.png");
            break;
    }



}

var player1=Math.ceil(Math.random()*6);
var player2=Math.ceil(Math.random()*6);
var p1image=document.querySelector(".player1 img");
var p2image=document.querySelector(".player2 img");


document.querySelector(".player1 p").textContent="Score: "+player1;
document.querySelector(".player2 p").textContent="Score: "+player2;
if(player1>player2)
    document.querySelector("h2").textContent="🏆 Player 1 won";
else if(player1<player2)
    document.querySelector("h2").textContent="Player 2 won 🏆";
else
    document.querySelector("h2").textContent=" OOPS! 🤖 It's a Draw ";
setImage(p1image,player1);
setImage(p2image,player2);
  
    
    