//import logo from './logo.svg';
import React from 'react';
import './App.css';
import PackagingList from './PackagingList';

// function App() {
//   return (
//     <div>
//       <div className="header">
//          The Git hub App
//       </div>
//     </div>
//   );
// }


class Card extends React.Component{
  render(){
    return(
      <div style={{margin:'1rem'}}>
<imp src='https://dummyimage.com/75x75/000/fff'/>
<div style={{display:'inline-block',marginLeft:'12px'}}>

      </div>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <div className='header'>
                The Gi Hub App
          </div>
        <Card/>
      </div>
    )
  }
}
export default App;
