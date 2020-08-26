import React, { Component } from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from 'react-redux'
class List extends Component {
  constructor(props) {
    super(props);
    // this.deleteItem=this.deleteItem.bind(this);
  }

  
  render() {
      console.log(this.props.list)
    const list = this.props.list.map((value, id) => {
      return <Item content={value} id= {id}key={id} ></Item>;
    });
    return (
      <div>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleInput}
        ></input>
        <button className="btn btn-primary" onClick={() => this.props.addItem(this.props.inputValue)}>
          New
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}
const mapState=(state)=>{
    return (
        {
            inputValue:state.inputValue,
            list:state.list
        }
        
    )
}
const mapDispatch=(dispatch)=>{
    return {
      handleInput(e) {
        const action = {
          type: "INPUT_CHANGE",
          value: e.target.value,
        };
        console.log(e.target.value);
        dispatch(action);
      },
      addItem(value) {
        const action={
            type:"ADD_ITEM",
            value:value
        }
        dispatch(action)

      }
    };
}

export default connect(mapState,mapDispatch)(List);
