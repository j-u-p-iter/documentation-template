import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout  
          wrapperClassName={styles.wrapper}
          sidebarClassName={styles.sidebar}
          contentClassName={styles.mainContent}
          headerClassName={styles.header}
          footerClassName={styles.footer}
        />
      </BrowserRouter>
    );
  }
}

export default App;
