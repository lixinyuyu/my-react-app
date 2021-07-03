import React from 'react';
import { ReduxDemo } from '../src/pages/redux-demo/index';

function App() {
  return (
    // 如果想要包括多个标签。理论上使用会报错，可以使用<Fragment></Fragment>包裹
    <div>
      <ReduxDemo />
    </div>
  );
}

export default App;
