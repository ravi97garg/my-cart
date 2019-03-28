import React from 'react';

class Item extends React.Component{
    render(){
        let {name, cost, qty} = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{qty}</td>
                <td>{cost}</td>
                <td><button onClick={() => this.props.increaseCallback(this.props.id)}>+</button></td>
                <td><button onClick={() => this.props.decreaseCallback(this.props.id)}>-</button></td>
                <td><button onClick={() => this.props.removeItemCallback(this.props.id)}>x</button></td>
            </tr>
        )
    }

}
export default Item;