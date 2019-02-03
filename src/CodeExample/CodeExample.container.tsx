import * as React from 'react';
import marked from 'marked';
import { SwitcherController } from '@j.u.p.iter/react-switcher';
import highlight from 'highlight.js';

import 'highlight.js/styles/xcode.css';

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
  constructor(props: Props) {
    super(props);

    marked.setOptions({
      highlight(code) {
        return highlight.highlightAuto(code).value;
      }
    });
  }

  renderDescription = () => {
    const { description } = this.props;

    return <div dangerouslySetInnerHTML={{ __html: description }} />
  }

  renderCodeSnippet = () => {
    const { codeSnippet } = this.props;

    const markDown = (
`\`\`\`javascript
${codeSnippet}
\`\`\``
    );

    return <div dangerouslySetInnerHTML={{ __html: marked(markDown) }} />
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
