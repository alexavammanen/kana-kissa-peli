import React from "react";
import '../App.css';


const kopis = ()=>{
    return(
        <div>   
            <h1>Firewall Breach Detected
            
            </h1>
            <img src="data:image/png;base64,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"/>
                
                

        </div>
        
        
    );
};



















































































export default kopis;