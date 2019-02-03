import * as React from 'react';

import { Tag, Icon } from '../../components';


export const ClearableWithCustomCloseIconTagExample = () => (
  <Tag isClearable icon={<Icon name='cross' />}>Clearable with custom close icon</Tag>
);
