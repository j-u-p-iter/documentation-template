import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createLayoutWithInternalParts } from './layout';

class App extends React.Component {
  render() {
    const LayoutWithContent = createLayoutWithInternalParts(<div>MainContent</div>);

    return <BrowserRouter><LayoutWithContent /></BrowserRouter>
  }
}

export default App;
