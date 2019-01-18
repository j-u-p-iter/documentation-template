import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Layout } from './Layout';
import styles from './App.module.scss';

interface IPromptProps {
  children: (props: any) => React.ReactNode; 
}

class Prompt extends React.Component<IPromptProps> {
  state = {
    showPrompt: false,
  }

  callback: any = null;

  setUpCallback = (_: any, callback: any) => {
    this.callback = callback;
  }

  history = createBrowserHistory({  
    getUserConfirmation: this.setUpCallback,
  })

  togglePrompt = (show?: boolean) => {
    this.setState(({ showPrompt }: any) => ({
      showPrompt: show === undefined ? !showPrompt : show, 
    }))
  }

  goFurther = () => {
    this.callback(true)
  }

  blockTransition = () => {
    this.history.block('some message');
   
    this.togglePrompt(true);
  }

  render() {
    const api = {
      goFurther: this.goFurther,
      blockTransition: this.blockTransition,
      togglePrompt: this.togglePrompt,
      setUpCallback: this.setUpCallback,
      isTransitionBlocked: this.state.showPrompt,
      history: this.history,
    }

    return this.props.children!({ api })
  }
}

class App extends React.Component {
  render() {
    return (
      <Prompt>
        {({ 
          api: {
            goFurther,
            togglePrompt,
            getPromptEl, 
            getUserConfirmation, 
            history, 
            blockTransition,
            isTransitionBlocked,
          }
        }: any) => {
          return (
            <Router 
              history={history}
            >
              <>
                <Layout  
                  wrapperClassName={styles.wrapper}
                  sidebarClassName={styles.sidebar}
                  contentClassName={styles.mainContent}
                  headerClassName={styles.header}
                  footerClassName={styles.footer}
                />
                {
                  isTransitionBlocked && ( 
                    ReactDOM.createPortal(
                      <div>
                        <h1>Super Modal Window</h1>
                        <button onClick={() => togglePrompt()}>Prevent transitioin</button>
                        <button onClick={() => goFurther()}>Go Further</button>
                      </div>, 
                      document.getElementById('modal') as Element
                    )
                  )
                }
                <Link to='/' onClick={blockTransition}>Block Transitioin</Link>
              </>
            </Router>
          );
        }}
      </Prompt>
    );
  }
}

export default App;
