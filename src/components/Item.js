import React from 'react';
import './Item.css';

class Item extends React.Component{
    render(){
        let {name, cost, qty} = this.props;
        return (
            <tr className='row'>
                <td className='itemName'>{name}</td>
                <td className='itemQty'>{qty}</td>
                <td className='itemCost'>{cost}</td>
                <td><button onClick={() => this.props.increaseCallback(this.props.id)} className='add-btn'>+</button></td>
                <td><button onClick={() => this.props.decreaseCallback(this.props.id)} className='sub-btn'>-</button></td>
                <td><button onClick={() => this.props.removeItemCallback(this.props.id)} className='rem-btn'>x</button></td>
            </tr>
        )
    }

}
export default Item;