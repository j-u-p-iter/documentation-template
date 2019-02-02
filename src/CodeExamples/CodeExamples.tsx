import * as React from 'react';

import { CodeExample } from '../CodeExample';

type Config = {
  title: string
  description: string;
  codeSnippet: string;
}

interface Props {
  config: Config[];
}

export const CodeExamples: React.SFC<Props> = ({ config }) => (
  <ul>
    {
      config.map(({ title, description, codeSnippet }) => (
        <li>
          <CodeExample 
            key={title}
            title={title} 
            description={description} 
            codeSnippet={codeSnippet}
          />
        </li>
      ))
    }
  </ul>
);
