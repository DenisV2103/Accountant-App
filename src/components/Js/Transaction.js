import React from "react"
import '../Css/Transaction.css'
function Transaction({ texto,time,type }){
   
  

    return(
        <div className='transaction-container'>
        
                
                <div className='transaction-info'>
                   <div className="text">{Number(texto)}</div>    
                   <div>{time}</div> 
                   <div className={type}>{type}</div>
                </div> 
        </div>
        

    )
}

export default Transaction;