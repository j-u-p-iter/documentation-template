import * as React from 'react';
import classNames from 'classnames';
import { Tag as TagComponent, TagProps } from '@j.u.p.iter/react-tag';

import { Icon } from '../Icon';
import styles from './Tag.module.scss';


export const Tag = (props: any) => {
  const { className, isClearable } = props

  return (
    <TagComponent 
      className={classNames(styles.tag, className, { [styles.clearable]: isClearable })}
      {...props}
    />
  );
};
