export function Palikkanope(stx,ballObj){
    let data = new Baller(ballObj.x, ballObj.y, ballObj.rad);
    data.draw(stx);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;

}

class Baller{

        constructor(x, y, rad,){
            this.x = x;
            this.y = y;
            this.rad = rad;
        }
        draw(stx){
            stx.beginPath();
            stx.fillStyle = "Gainsboro"
            stx.arc(this.x,this.y,this.rad,this.y,2 * Math.PI);
            stx.strokeStyle= "SpringGreen";
            stx.lineWidth = 2;
            stx.fill();
            stx.stroke();
           // console.log("pallo");
            //x++;

        }
        draw(stx){
            stx.beginPath();
            stx.fillStyle = "Gainsboro"
            stx.arc(this.x -1,this.y,this.rad,0,2 * Math.PI);
            stx.strokeStyle= "SpringGreen";
            stx.lineWidth = 2;
            stx.fill();
            stx.stroke();
           // console.log("pallo");
            //x++;

        }
        draw(stx){
            stx.beginPath();
            stx.fillStyle = "Gainsboro"
            stx.arc(this.x -100,this.y,this.rad,0,2 * Math.PI);
            stx.strokeStyle= "SpringGreen";
            stx.lineWidth = 2;
            stx.fill();
            stx.stroke();
           // console.log("pallo");
            //x++;

        }
       
};

