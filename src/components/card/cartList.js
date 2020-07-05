import React from 'react';
import { Card } from './cartComponent';
import "./cardStyles.css";

export const CartList = props =>{
return(<div className='cartListStyles'>
 {
    props.monsters.map(monster => (
    <Card key={monster.id} monster ={monster}/>
    ))
  }

</div>)
};