import {INCREMENT,DECREMENT} from './constant'
// 创建加
export const incrementAction = number => ({type:INCREMENT,data:number})
// 创建异步的加
export const incrementWaitAction = number => {
    return(dispatch) =>{
        // 异步action里面嵌套了同步action
        setTimeout(()=>{
            dispatch(incrementAction(number))
        },1000)
    }
}
// 创建减
export const decrementAction = number => ({type:DECREMENT,data:number})