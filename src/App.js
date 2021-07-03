import React from 'react';
import ComA from '../src/pages/react-redux-demo/comA';
import ComB from '../src/pages/react-redux-demo/comB';

import store from '../src/store';
import { Provider } from 'react-redux';
function App() {
  return (
    // 如果想要包括多个标签。理论上使用会报错，可以使用<Fragment></Fragment>包裹
    <Provider store={store}>
      <div>
        <ComB />
        <ComA />
      </div>
    </Provider>
  );
}

export default App;
