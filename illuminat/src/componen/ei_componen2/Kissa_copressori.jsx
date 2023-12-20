

import Cart from './Cart.jsx';
import { useState } from 'react';
const jauhe_kissaa = (min, max) => Math.floor(Math.random() * (max - min +1) + min);
import Kissanlelu from './Kissanlelu.jsx';

const kissa = {
Image: 'http://placekitten.com/120/100?image=' + jauhe_kissaa(0,),
Image:'http://placekitten.com/120/100?image=7/' + jauhe_kissaa(0,),

kissar: [{name:'ominasuudet', value: 2 + jauhe_kissaa(0,89141+ jauhe_kissaa(0,89131+ jauhe_kissaa(0,89141))) 
},
{name:'hyötyu',
 value: 91},

 {name:'kallis',
  value: 911}
], 




};

const opponinCart = {

  
  Image: 'http://placekitten.com/120/100?image=' + jauhe_kissaa(0,),
  Image:'http://placekitten.com/120/100?image=7/' + jauhe_kissaa(0,),
  
  kissar: [{name:'ominasuudet', value: 2 + jauhe_kissaa(0,89141+ jauhe_kissaa(0,89141+ jauhe_kissaa(0,89141))) 
  },
  {name:'hyötyu',
   value: 91},
  
   {name:'kallis',
    value:( 911)}
  ], 
  
  
};

  

  


const cart_creates =(index) =>({
  Image: 'http://placekitten.com/120/100?image=' + index + 5,
  Image:'http://placekitten.com/120/100?image=' + index + 5,
  
  kissar: [{name: 'ominasuud1et', value: 12 + jauhe_kissaa(0,89141)},
  {name: 'hyötyu', name: 91 + jauhe_kissaa(0,89141)},{name: 'kallis', value: 911}],
  id: crypto.randomUUID()
}); 
function blender(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];


  }
  return array;
}


const cart_pile = Array (16 + jauhe_kissaa(1,160)).fill(null).map((_,index)=>cart_creates())
const romu = Math.ceil(cart_pile.length / 2);

const myy = () =>{
  blender(cart_pile);
  return{

    omistaja: cart_pile.slice(0,romu),
  ei_omistaja: cart_pile.slice(romu)
  }
  
}





export default function kissa_copressori(){
  const[carts,pistaCarts] = useState(myy);
  const[result, lopeta] = useState('');
  
  const[gameState, setGameState] = useState ('play');
  const[valitseominaisuus, setSelected] = useState(0);

  



if(gameState !== 'lopetus_ja_udeenhankkiminen' && (!carts.ei_omistaja.length || !carts.omistaja.length)){
  lopeta(() =>{if(!carts.ei_omistaja.length)
     return 'eez1';
  else if (!carts.omistaja.length)
  return 'miten'
  });
    
  
  setGameState("lopetus_ja_udeenhankkiminen")
  
}




  function verta(){
    
    
    const oppo = carts.omistaja[0].kissar[0];
    const kisssr = carts.ei_omistaja[0].kissar[valitseominaisuus];
    console.log(oppo)
    console.log(kisssr)
    console.log("vertasit");
    if(oppo.value > kisssr.value){
      lopeta('eez1');
    }
    else if(oppo.value < kisssr.value){
      lopeta('eze2');
    }
    
    else if(oppo.value === kisssr.value){
      lopeta('miten');
    }
    
    
    setGameState('result');
   
   
    //console.log(result);

  }
  function seuraava (){
    pistaCarts(carts =>{
      const usedcarts = [{...carts.omistaja[0]},{...carts.ei_omistaja[0]}];
      const omistaja = carts.omistaja.slice(1);
      const ei_omistaja = carts.ei_omistaja.slice(1);
      if(result === 'eez1'){
        return{
          omistaja:[...omistaja,...usedcarts],
        ei_omistaja

        }
      };
      if(result === 'miten'){
        return{
          omistaja,
        ei_omistaja

        }
        

      };
      if(result === 'eze2'){
        return{
          omistaja,
        ei_omistaja:[...ei_omistaja, ...usedcarts]

        }
      };
    });
    setGameState('play');
    lopeta('');
  }
  function lopetus_ja_udeenhankkiminen(){
    pistaCarts(myy);
    lopeta('');
    setGameState('play');
    




  }




  return( 

    <>
      
      <div className='kissan_ruoka'>
      <div className='kinkkukasa'>
        <ul className='kinkkupaketti'>
        {carts.omistaja.map((oCart,index) =>(
          <li className='ajaja' key={oCart.id}>
            
            <Cart  cat = { index === 0 ? oCart : null}
            handleSelect ={statIndex => gameState ==='play' && setSelected(statIndex)}
           valitseominaisuus ={valitseominaisuus}
            />
            

          </li>


        ))}
        </ul>
      </div>


        <div className='nupero'>
          <p>
            {result || 'ruoki'}
            
            {

              gameState === ('play') ? 
                (<Kissanlelu text={'ez'} handleClick={verta}/>) :
                gameState === 'lopetettava' ?
                (<Kissanlelu text={'voivoi'} handleClick={lopetus_ja_udeenhankkiminen}/>
                ):

                (<Kissanlelu text={'ez'} handleClick={seuraava}/>) 
              


            
            
            


          }
          
          </p>
          


          
          


          </div>

          <div className='kinkkukasa'>
        <ul className='kissapakettien omistaja'>
        {carts.ei_omistaja.map((oeCart,index) =>(
          <li className='ojojoj' key={oeCart.id}>
            
            <Cart cat = { result && index === 0 ? oeCart : null}/>
            
          </li>


        ))}
        </ul>
      </div>


      <h1>toimii??</h1>


      </div>
      

    </>
    
    

  );


}



