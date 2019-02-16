import * as React from 'react';

import { CodeExamples } from '../../../CodeExamples';
import { 
  DefaultCheckboxExample, 
  CheckedByDefaultCheckboxExample, 
  WithLabelCheckboxExample, 
  WithCustomStylesCheckboxExample, 
  DisabledCheckboxExample,
  WithIconCheckboxExample,
} from '../../../examples';

import defaultCheckboxCodeExample from '!raw-loader!../../../examples/Checkbox/DefaultCheckboxExample';
import checkedByDefaultCheckboxExample from '!raw-loader!../../../examples/Checkbox/CheckedByDefaultCheckboxExample';
import withLabelCheckboxExample from '!raw-loader!../../../examples/Checkbox/WithLabelCheckboxExample';
import withCustomStylesCheckboxExample from '!raw-loader!../../../examples/Checkbox/WithCustomStylesCheckboxExample';
import disabledCheckboxExample from '!raw-loader!../../../examples/Checkbox/DisabledCheckboxExample';
import withIconCheckboxExample from '!raw-loader!../../../examples/Checkbox/WithIconCheckboxExample';

const config = [{
  title: 'Default Checkbox example (self controlled)',
  description: 'Checkbox component with **default configuration** example.',
  codeSnippet: defaultCheckboxCodeExample,
  Component: DefaultCheckboxExample, 
}, {
  title: 'Checkbox with defaultChecked',
  description: 'Self controlled Checkbox **with predefined default checked state** example.',
  codeSnippet: checkedByDefaultCheckboxExample,
  Component: CheckedByDefaultCheckboxExample, 
}, {
  title: 'Checkbox with label',
  description: 'Self controlled Checkbox **with label** example.',
  codeSnippet: withLabelCheckboxExample,
  Component: WithLabelCheckboxExample, 
}, {
  title: 'Checkbox with custom styles',
  description: 'Self controlled Checkbox **with custom styles** example.',
  codeSnippet: withCustomStylesCheckboxExample,
  Component: WithCustomStylesCheckboxExample, 
}, {
  title: 'Disabled Checkbox',
  description: 'Disabled Checkbox example.',
  codeSnippet: disabledCheckboxExample,
  Component: DisabledCheckboxExample, 
}, {
  title: 'Checkbox with icon',
  description: 'Checkbox with icon example.',
  codeSnippet: withIconCheckboxExample,
  Component: WithIconCheckboxExample, 
}];

export const CheckboxPage = () => <CodeExamples config={config} />;
