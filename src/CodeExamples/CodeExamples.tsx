import * as React from 'react';

import { CodeExample } from '../CodeExample';

type ConfigItem = {
  title: string
  description: string;
  codeSnippet: string;
  Component: any;
}

interface Props {
  config: ConfigItem[];
}

export const CodeExamples: React.SFC<Props> = ({ config }) => (
  <ul>
    {
      config.map(({ title, description, codeSnippet, Component }) => (
        <li>
          <CodeExample 
            key={title}
            title={title} 
            description={description} 
            codeSnippet={codeSnippet}
          >
            <Component />
          </CodeExample>
        </li>
      ))
    }
  </ul>
);
