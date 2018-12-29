import * as React from 'react';

import { createLayoutWithInternalParts } from './layout';

class App extends React.Component {
  render() {
    const LayoutWithContent = createLayoutWithInternalParts(<div>MainContent</div>);

    return <LayoutWithContent />
  }
}

export default App;
