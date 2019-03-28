import React, {Component} from 'react';

class AddItem extends Component{
    state = {
        item: ''
    }

    changeHandle = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.item){
            alert('Please enter item and price');
        } else if (isNaN(this.state.item.split('-')[1]) || Number(this.state.item)<0){
            alert('Please enter correct values');
        } else {
            this.setState({
                item: ''
            })
            this.props.callback(this.state.item.split('-')[0].trim(),this.state.item.split('-')[1].trim());
        }

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                           onChange={this.changeHandle}
                           value={this.state.item}
                           placeholder='Enter item and price separated by a - (hyphen)'/>
                </form>
            </div>
        )
    }

}
export default AddItem;