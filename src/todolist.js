import React, { Component ,Fragment} from 'react';
import './style.css'
// Fragment //可以代替组件中的最外围标签  相当于一个占位符
class Todolist extends Component {
    // constructor 构造函数是最先被执行的一个函数
    // super(props) 继承todolist 的组件
    constructor(props){
        super(props);
        // 定义组件状态  数据
        this.state ={
            inputValue:'',
            list:[]
        }

    }
    render() {
        return (
            <Fragment>
                {/* input框 */}
                <div>
                    <input
                        class="inpit"
                        placeholder='请输入内容'
                        value={this.state.inputValue}
                        // .bind(this) 改变的change() 事件 的this，让其指向组件
                        onChange={this.handchage.bind(this)}
                    />
                    <button onClick={this.handClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item ,index) =>{
                            return (
                                <li key={index} onClick={this.handDel.bind(this,index)}>
                                    {index+1}--{item}
                                </li>
                                )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handchage(e){
        // 获取input value 值
        this.setState({
            inputValue:e.target.value,
        })
    }
    handClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handDel(index){
        console.log(index)
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Todolist;