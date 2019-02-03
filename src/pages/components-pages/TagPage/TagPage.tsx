import * as React from 'react';

import { CodeExamples } from '../../../CodeExamples';
import { DefaultTagExample } from '../../../examples';
import defaultTagCodeExample from '!raw-loader!../../../examples/Tag/DefaultTagExample';
import newTagCodeExample from '!raw-loader!../../../components/Tag/Tag.new';

const config = [{
  title: 'some title',
  description: 'some description',
  codeSnippet: defaultTagCodeExample,
  Component: DefaultTagExample, 
}, {
  title: 'one more title',
  description: 'one more description',
  codeSnippet: defaultTagCodeExample,
  Component: DefaultTagExample,
}];

export const TagPage = () => <CodeExamples config={config} />;
