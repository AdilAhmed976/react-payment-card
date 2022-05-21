import './App.css';
import { Cards } from './components/Cards';
import React from 'react';

function App() {

  const [datacard , setcard] = React.useState([    

    { date: "28/10/2020",
    name : "Amazon Gift",
    pay : "Pay",
    site : "Desktop - Mobile",
    logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/900px-Amazon_icon.svg.png"
    },
    { date: "17 Sep 2020",
    name : "Apple",
    pay : "Pay",
    site : "MacOs - Mobile",
    logo : "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
    }
    
  ])

  
  return (
    <div className="App">
      <Cards  form = {datacard} />
      
      
    </div>
  );

}

export default App;
