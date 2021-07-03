// import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
// 引入全局样式
import { BrowserRouter as Router } from 'react-router-dom';

// import Hello from './hello.js';
// import Comment from './demo1-comment';
// import Parent from './props';
// import Parent3 from './context';
// import ValidCom from './valid';
// import Child from './lifestyle';
// import Temp from './hoc';
// import Temp from './redux';
ReactDom.render(
    <Router>
        <App />
    </Router>
    ,document.getElementById('root')
);
