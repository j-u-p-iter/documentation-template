import * as React from 'react';
import marked from 'marked';
import { SwitcherController } from '@j.u.p.iter/react-switcher';

import { CodeExampleView } from './CodeExample.view';
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
  codeSnippet: string;
}

export class CodeExample extends React.Component<Props> {
  renderDescription = () => {
    const { description } = this.props;

    return <div dangerouslySetInnerHTML={{ __html: description }} />
  }

  renderCodeSnippet = () => {
    const { codeSnippet } = this.props;

    return <div dangerouslySetInnerHTML={{ __html: marked(codeSnippet) }} />
  }

  render() {
    const { title, description, children } = this.props;

    return (
      <CodeExampleView
        title={title}
        description={this.renderDescription()}
        codeSnippet={this.renderCodeSnippet()}
        elementToShow={children}
      />
    );
  }
};
