import React,{ useState } from "react"
import './CSS/add.css'


function AddItem (props){
    const[amount,setamount] = useState ('')
    const[item,setitem] = useState ("")
    const[transactiontype,settransactiontype] = useState ("")
    const add =(()=> {
        console.log(item)
        console.log(amount)
        console.log(transactiontype)

        props.add(amount,item,transactiontype) ;

    } )
   
    return(
        <div class="container">
            <h1> ADD TRANSACTION APP</h1>
            
            <input
             placeholder="Enter Item"
              onChange={(e) => setitem(e.target.value)}/>{" "}
              <br></br>
            <input
             placeholder="Enter Amount"
             onChange={(e) => setamount(e.target.value)}/>{" "}
             <br></br>
            <select  onChange={(e) => settransactiontype(e.target.value)}>
                <option>Income</option><br></br>
                <option>Expence</option>
            </select>
            <br></br>
            <button id="btn" onClick={add}>add </button>
    </div>

    )
    
    
}
export default AddItem;