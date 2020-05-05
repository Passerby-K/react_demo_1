import React, { Component ,Fragment} from 'react';
import './style.css';
// 引入组件
import Todoitem from './todoitem';

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
                    <label htmlFor="ld">输入内容：</label>
                    <input
                        id="ld"
                        className='input'
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
                                <div>
                                    {/*// 第一种  父组件像子组件传值 和事件*/}
                                        <Todoitem content={item} index={index} delItem={this.handDel.bind(this)}/>
                                    {/*// 第二种   直接写入页面上的方式*/}
                                    {
                                        // <li key={index} onClick={this.handDel.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}>
                                        //     {/* {index+1}--{item} */}
                                        // </li>
                                    }
                                </div>
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