
export default function Cart({cat,valitseominaisuus,handleSelect}){













if (!cat)return<div className="liha_kasa"/>;
























    return(
       
        <div className="liha">

            <img src = {cat.Image}/>
            <ul className="kana">

            {cat.kissar.map((kissarna,index) =>(
                <li className={`taidot${valitseominaisuus === index ? ' selected' : ''}`} onClick={()=> handleSelect(index)} key ={index}
                >
                    <span>ominaisuudet = {kissarna.name}      </span>
                    <span>ominaisuudet = {kissarna.name}      </span>
                    
                </li>


            ))}
            </ul>
            

        </div>
    );

}