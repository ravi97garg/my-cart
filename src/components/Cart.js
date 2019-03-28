import React from 'react';
import AddItem from "./AddItem";
import Item from "./Item";
import './Cart.css';

class Cart extends React.Component{
    state = {
        items: []
    };

    increaseQty = (id) => {
        let items = this.state.items;
        items[id].itemQty++;
        this.setState({
            items: items
        })
    }

    decreaseQty = (id) => {
        let items = this.state.items;
        if(items[id].itemQty === 1){
            this.removeItem(id);
        } else {
            items[id].itemQty--;
            this.setState({
                items: items
            })
        }

    }
    removeItem = (id) => {
        let items = this.state.items;
        items.splice(id,1);
        this.setState({
            items: items
        })
    }

    addItem = (itemName, itemCost) => {
        let items = this.state.items;
        let flag = 0;
        items.forEach((item, i) => {
            if(item.itemName === itemName && item.itemCost === itemCost){
                item.itemQty = item.itemQty+1;
                flag = 1;
            }
        });
        if(!flag){
            let itemObj = {};
            itemObj.itemName = itemName;
            itemObj.itemCost = itemCost;
            itemObj.itemQty = 1;
            items.push(itemObj);
        }
        this.setState({
            items: items
        })
    }

    render(){
        let {items} = this.state;
        return (
            <div className='cart'>
                <h2>My Cart</h2>
                <AddItem callback = {this.addItem}/>
                <table>
                    <tbody>
                        {items.map((item, i) => {
                            return (
                                <Item name={item.itemName}
                                      cost={item.itemCost}
                                      qty ={item.itemQty}
                                      key ={i}
                                      id  ={i}
                                      increaseCallback={this.increaseQty}
                                      decreaseCallback={this.decreaseQty}
                                      removeItemCallback={this.removeItem}
                                />
                                )
                        })}
                    </tbody>
                </table>
                <Total items={items}/>
            </div>
        )
    }
}

function Total(props) {
    let {items} = props;
    let total = 0;
    items.forEach((item) => {
        total+=(item.itemCost*item.itemQty);
    });
    return (
        <div className='total clearfix'>
            <span className='left'>Total</span>
            <span className='right'>{total}</span>
        </div>
    )

}

export default Cart;