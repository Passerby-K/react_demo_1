import React, { Component } from 'react';
class todoitem extends Component{
    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this)
    }
    render(){
        return (
            <div onClick={this.handClick} >{this.props.content}</div>
        )
    }
    handClick(){
        // 子组件向父组件传递删除的索引
        this.props.delItem(this.props.index)
    }
}
export default todoitem