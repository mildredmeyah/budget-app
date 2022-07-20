import React  from 'react'

function DisplayTransaction (props){
    return(
        <div>
        {props.List.map((item) => (
            <div>
            <h3>{item.item}</h3>

            <h3>{item.amount}</h3>

            <h3>{item.transactiontype}</h3>
        </div>

        ))}

        
        </div>
       
    );
}
export default DisplayTransaction;
