import * as React from 'react';

import { CodeExamples } from '../../../CodeExamples';
import { 
  DefaultTagExample, 
  ClearableWithDefaultCloseIconTagExample,
  ClearableWithCustomCloseIconTagExample,
} from '../../../examples';

import defaultTagCodeExample from '!raw-loader!../../../examples/Tag/DefaultTagExample';
import clearableWithDefaultCloseIconTagCodeExample from '!raw-loader!../../../examples/Tag/ClearableWithDefaultCloseIconTagExample';
import clearableWithCustomCloseIconTagCodeExample from '!raw-loader!../../../examples/Tag/ClearableWithCustomCloseIconTagExample';

const config = [{
  title: 'Default Tag example',
  description: 'Tag component with **default configuration**.',
  codeSnippet: defaultTagCodeExample,
  Component: DefaultTagExample, 
}, {
  title: 'Clearable with default close icon Tag example',
  description: 'Tag component with possibility *to remove it*, clicking on **default close icon**.',
  codeSnippet: clearableWithDefaultCloseIconTagCodeExample,
  Component: ClearableWithDefaultCloseIconTagExample,
}, {
  title: 'Clearable with custom close icon Tag example',
  description: 'Tag component with possibility **to remove it**, clicking on **custom close icon**.',
  codeSnippet: clearableWithCustomCloseIconTagCodeExample,
  Component: ClearableWithCustomCloseIconTagExample,
}];

export const TagPage = () => <CodeExamples config={config} />;
