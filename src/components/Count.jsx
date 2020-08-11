import React, { Component } from 'react'
// import store from '../redux/store'
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count_action'

export default class Count extends Component {
    state = {
        // count:0,
        name:'丹丹'
    }

    // 加法
    increment = () =>{
        // 获取用户输入
        const {value} = this.refs.selectedNumber
        // 获取原状态
        // const {count} = this.state
        // this.setState({count:count + value*1})
        this.props.store.dispatch(incrementAction(value*1))
        
    }
    // 减法
    decrement = () =>{
         // 获取用户输入
         const {value} = this.refs.selectedNumber
         // 获取原状态
        //  const {count} = this.state
        //  更新状态
        //  this.setState({count:count - value*1})
        this.props.store.dispatch(decrementAction(value*1))
    }
    // 奇数加
    incrementIfOdd = () =>{
        if (this.props.store.getState() % 2 !== 0) {
            const {value} = this.refs.selectedNumber
            // const {count} = this.state
            // this.setState({count:count + value*1})
            this.props.store.dispatch(incrementAction(value*1))
        }
    }
    // 等一等加
    incrementWait = () =>{
        // setTimeout(()=>{
            const {value} = this.refs.selectedNumber
            // const {count} = this.state
            // this.setState({count:count + value*1})
            this.props.store.dispatch(incrementWaitAction(value*1))
        // },500)
    }

    render() {
        return (
            <div style={{marginLeft:'500px'}}>
                <h1>{this.state.name}计算得结果为{this.props.store.getState()}</h1>
                <select ref="selectedNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>奇数 +</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementWait}>等一等再 +</button>
                &nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}
