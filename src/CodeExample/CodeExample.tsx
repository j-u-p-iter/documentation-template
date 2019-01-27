import * as React from 'react';
import { SwitcherController } from '@j.u.p.iter/react-switcher';

import styles from './CodeExample.module.scss';

interface PseudoEvent {
  currentTarget: { 
    name: string; 
    value: boolean; 
  };
}

interface Props {
  title: string;
  description: string;
}

export class CodeExample extends React.Component<Props> {
  renderDescription = () => {
    const { description } = this.props;

    return <div dangerouslySetInnerHTML={{ __html: description }} />
  }

  render() {
    const { title, description, children } = this.props;

    return (
      <SwitcherController name='code-toggler' onChange={() => {}}>
        {
          ({ api: { getOn, toggleOn } }) => (
            <div>
              <header>
                <h3>{title}</h3>

                <button onClick={() => toggleOn()}>Toggler</button>
              </header>

              {
                getOn() && (
                  <div>Code</div>
                )
              }

              {children}

              {this.renderDescription()}
            </div>
          )
        }
      </SwitcherController>
    );
  }
};
