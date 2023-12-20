export default function Sein(ballObj, studio){
    if(ballObj.y - ballObj.rad < 0 || ballObj.y + ballObj.rad > studio.height){
        ballObj.dy *= -1



    }
    if(ballObj.x - ballObj.rad > studio.width || ballObj.x - ballObj.rad < 0){
        ballObj.dx *= -1



    }


}