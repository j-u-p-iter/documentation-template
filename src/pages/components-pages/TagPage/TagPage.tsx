import * as React from 'react';

import { CodeExample } from '../../../CodeExample';
import { Tag, Icon } from '../../../components';

export const TagPage = () => {
  return (
    <CodeExample title='some title' description='some description'>
      <Tag isClearable>some text</Tag>
    </CodeExample>
  );
};
