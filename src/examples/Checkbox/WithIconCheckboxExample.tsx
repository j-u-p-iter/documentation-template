import * as React from 'react';

import { Checkbox, Icon } from '../../components';
import styles from './Checkbox.module.scss';

const iconsConfig = [
  { name: 'checkbox-checked', isChecked: true }, 
  { name: 'plus', isChecked: false },
];

export const WithIconCheckboxExample = () => (
  <ul>
    {
      iconsConfig.map(({ name, isChecked }) => (
        <li key={name} style={{ marginTop: '10px' }}>
          <Checkbox 
            defaultIsChecked={isChecked}
            iconEl={<Icon name={name} />} 
            label='Label' 
          />
        </li>
      ))
    }
  </ul>
);
