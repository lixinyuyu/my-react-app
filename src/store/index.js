/**
 * redux学习总结
 * 1.安装redux yarn add redux
 * 2.建立action文件
 * 3.建立reducer文件
 *   3.1 创建并导出reducer
 * 4.建立store文件
 *   4.1 引入redux中的createStore
 *   4.2 引入reducer
 *   4.3 创建并导出store
 * 5. 在组件中导入store,action
 *   5.1 在发送信息中使用store.dispatch(action信息) action 信息具体内容需要提前设置
 *   5.2 使用state的信息，在compoentDidMount中 store.subscribe(() => {store.getState()})获取
 */
import { createStore } from 'redux';
import { reducer } from '../reducer/index';

const store = createStore(reducer);
export default store;