export default(stx, studio, paddleProps) =>{
    class Paddle{
        constructor(x
            ){
                this.x = x;
                this.y = studio.height - 30;
                this.height = 20;
                this.width = paddleProps.width;
                this.colors = ["red", "white"];


            }
            move() {
                stx.beginPath();
                stx.rect(this.x, this.y, this.width, this.height);
                stx.fillStyle = this.broke ? "white" : this.colors[1];
                stx.strokeStyle = this.broke ? "white" : "red";
                stx.lineWidth = 1;
                stx.fillStyle = this.broke ? "white" : this.colors[1];
                stx.shadowBlur = 0;
                stx.shadowColor = "blue";
                stx.strokeRect(this.x, this.y, this.width, this.height);
                stx.fill();
              }


    }
    let paddle = new Paddle(paddleProps.x);
    paddle.move();
    




}