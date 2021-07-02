import React from 'react';
import { Route, Link } from 'react-router-dom';
import ValidCom from './valid';
import Child from './lifestyle';
import Temp from './hoc';

function App() {
  return (
    // 如果想要包括多个标签。理论上使用会报错，可以使用<Fragment></Fragment>包裹
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/child">child</Link>
        </li>
        <li>
          <Link to="/temp">temp</Link>
        </li>
      </ul>
      <Route path="/" exact component={ValidCom}></Route>
      <Route path="/child" component={Child}></Route>
      <Route path="/temp" component={Temp}></Route>
    </div>
  );
}

export default App;
