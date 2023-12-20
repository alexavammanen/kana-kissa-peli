import React, { useEffect, useRef } from "react";
import { Palikkanope } from "./Palikkanope";
import Sein from "./Seinei";
import Paddle from "./paddle";

import datmi from "./datmi";
//let x = 0;

let {ballObj, paddleProps} = datmi
export default function Roblox_TM(){
    const studioRef = useRef(null);

    useEffect(()=>{
        const lataaja = () =>{
            
            const studio = studioRef.current
        const stx = studio.getContext('2d');
        stx.clearRect(0,0,studio.width, studio.height)
       // stx.fillStyle = "green";
       // stx.fillRect(78,50,90,12);
            Palikkanope(stx,ballObj);
            Paddle(stx, studio, paddleProps);
            Sein(ballObj, studio);
        
       requestAnimationFrame(lataaja);

        }
        lataaja();
        
;

    }, [3])

    return(

        <canvas id="studio" ref={studioRef} height="900px" width="500px"/>
        



    );  




};