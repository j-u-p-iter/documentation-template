import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
