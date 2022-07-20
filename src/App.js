import logo from './logo.svg';
import './App.css';
import AddItem from './components/addItems';

import React, {useState} from 'react'
import DisplayTransaction from './components/displayItems';




function App() {
  
  const[transaction, settransaction] = useState ([])
  const addtrasaction =((amount,items, transactiontype) => {


    settransaction((item)=> [...item, {
      amount:amount,
      item:items,
      transactiontype:transactiontype
    }
    ])
  }
  )
  return (
    <div className="container">
      <DisplayTransaction List={transaction}/>
     <AddItem add={addtrasaction}/>
     
     
    </div>
  );
}

export default App;
