import React, {Component} from 'react';
import './App.css';
import { CartList} from './components/card/cartList';
import { SearchBox } from './components/SearchBox/SearchBox';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFieldd: ""

    };

  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState ({monsters: users}))
 }

 handChange =(e) => {
 this.setState({searchFieldd: e.target.value})
 }

  render(){
    const { monsters, searchFieldd } = this.state;

    const FilterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFieldd.toLowerCase())
    
    )

    return (
      <div className="App">
        <h1>Monsters larning reactJS</h1>
          <SearchBox
          placeholder= "Search Monsters" 
          handChange = {this.handChange}
          />
        <CartList monsters ={FilterMonsters}/> 
    </div>
    )
  }
}

export default App;
