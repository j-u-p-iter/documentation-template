import * as React from 'react';

import { CodeExamples } from '../../../CodeExamples';
import { 
  DefaultInputExample, 
  WithDefaultValueInputExample, 
} from '../../../examples';

import defaultInputCodeExample from '!raw-loader!../../../examples/Input/DefaultInputExample';
import withDefaultValueInputCodeExample from '!raw-loader!../../../examples/Input/WithDefaultValueInputExample';

const config = [{
  title: 'Default Input example (self controlled)',
  description: 'Input component with **default configuration** example.',
  codeSnippet: defaultInputCodeExample,
  Component: DefaultInputExample, 
}, {
  title: 'Input with default value example',
  description: 'Input component with **default value** example.',
  codeSnippet: withDefaultValueInputCodeExample,
  Component: WithDefaultValueInputExample,
}];

export const InputPage = () => <CodeExamples config={config} />;
