import React, { Component } from 'react'
import {connect} from 'react-redux'
class Item extends Component {
    render() {
        return (
          <div>
            <li>
              <h1>{this.props.content}</h1>
              <button onClick={()=>this.props.deleteItem(this.props.id)}>Delete</button>
            </li>
          </div>
        );
    }
}
const mapState=(state)=>{
    return {

    }
}
const mapDispatch=(dispatch)=>{
    return {
        deleteItem(id){
            const action = {
              type: "DEL_ITEM",
              value:id
            };
            dispatch(action)
        }
    }
}

export default connect(null,mapDispatch)(Item)
