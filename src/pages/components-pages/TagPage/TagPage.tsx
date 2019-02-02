import * as React from 'react';

import { CodeExamples } from '../../../CodeExamples';
import { Tag, Icon } from '../../../components';

const config = [{
  title: 'some title',
  description: 'some description',
  codeSnippet: '*code* snippet',
}, {
  title: 'one more title',
  description: 'one more description',
  codeSnippet: 'one more code snippet',
}];

export const TagPage = () => <CodeExamples config={config} />;
