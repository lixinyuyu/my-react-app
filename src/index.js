// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

// 使用jsx语法
const title = (
  <h1 className="title-class-name">test h1
    <span />
  </h1>
);

/**
 * jsx的基本使用
 */

// 1.jsx中嵌入表达式
const name = 'zs'
const obj = name;
const fn = () => obj; // 也可以直接放置一个函数
const title2 = (
  <h1>{name ? 'ls' : 'no'}</h1>
)
// 2.jsx自身也是一个合法的表达式（不能直接放置对象，会报错）
const title3 = (
  <h1>{fn()}</h1>
)

// 3.条件渲染
const loadData = () => {
  const loading = true;
  setTimeout((loading) => {
    loading = false;
    console.log(loading);
  }, 2000);
  if (loading) {
    return (<div>loading...</div>)
  }
  return (<div>end</div>)
}
const title4 = (
  <div>{loadData()}</div>
)

const arrs = [
  { label: 'label1', value: 1 },
  { label: 'label2', value: 2 },
  { label: 'label3', value: 3 },
];
// 4.jsx列表渲染
const title5 = (
  <ul>
    {arrs.map(item => <li key={item.value}>{item.label}</li>)}
  </ul>
)

// 5.jsx样式处理
const title6 = (
  <div style={ { color: 'red' } }>样式处理</div>
)

const title7 = (
  <div className="color-text">样式处理</div>
)
ReactDOM.render(title, document.getElementById('root'));
ReactDOM.render(title2, document.getElementById('root'));
ReactDOM.render(title3, document.getElementById('root'));
ReactDOM.render(title4, document.getElementById('root'));
ReactDOM.render(title5, document.getElementById('root'));
ReactDOM.render(title6, document.getElementById('root'));
ReactDOM.render(title7, document.getElementById('root'));
