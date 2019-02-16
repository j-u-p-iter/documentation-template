import * as React from 'react';

import { Checkbox } from '../../components';
import styles from './Checkbox.module.scss';


export const WithCustomStylesCheckboxExample = () => (
  <Checkbox className={styles.checkbox} label='Label' />
);
