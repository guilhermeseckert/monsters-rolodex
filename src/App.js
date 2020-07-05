import React, {Component} from 'react';
import './App.css';
import { CartList} from './components/card/cartList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []

    };
  }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState ({monsters: users}))
 }

  render(){
    
    return (
      <div className="App">
        <CartList monsters ={this.state.monsters}/> 
       
      
    </div>
    )
  }
}

export default App;
