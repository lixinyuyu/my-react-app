// import React from 'react';
import ReactDom from 'react-dom';

/**
 * react中创建组件
 * */

//  1.函数创建
// function Hello() {
//   return (
//     <div>hello my compoent</div>
//   )
// }
// const Hello = () => (<div>Hello !!!</div>)

// 2.类组件
// class ClasshelloCom extends React.Component {
//   render() {
//     return (
//       <div>my ClasshelloCom</div>
//     )
//   }
// }


// ReactDom.render(<Hello />, document.getElementById('root'));
// ReactDom.render(<ClasshelloCom />, document.getElementById('root'));

// import Hello from './hello.js';
import Comment from './demo1-comment';
ReactDom.render(<Comment />, document.getElementById('root'));
