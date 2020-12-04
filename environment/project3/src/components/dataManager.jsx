import React, { Component } from 'react';

class DataManager extends Component {
    state = {
        defaultValue: "",
        value: this.props.dataManagerValue
    }

    handleChange = (e) => {
        
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
      
        document.getElementById("itemValue").value = "";
        
        this.setState({value:""});
    }

    addItem = () => {
        this.props.fooAddItem(this.state.value);
        this.clearInput();
    }

    render() {

        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="itemValue" placeholder="Item" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addItem} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New Item</button>
                </div>
            </div>
        );
    }
}

export default DataManager;
