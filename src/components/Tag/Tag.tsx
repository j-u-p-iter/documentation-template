import * as React from 'react';
import classNames from 'classnames';


import { Tag as TagComponent, TagProps } from '@j.u.p.iter/react-tag';

import { Icon } from '../Icon';
import styles from './Tag.module.scss';


export const Tag = (props: any) => {
  const { className } = props

  return (
    <TagComponent 
      icon={<Icon name='cross' className={styles.icon} />} 
      className={classNames(styles.tag, className)} 
      {...props} 
    />
  );
};
