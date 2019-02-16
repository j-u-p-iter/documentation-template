import * as React from 'react';
import classNames from 'classnames';

import { Checkbox as CheckboxComponent } from '@j.u.p.iter/react-checkbox';
import styles from './Checkbox.module.scss';


export const Checkbox = (props: any) => {
  const isWithIcon = Boolean(props.iconEl);

  const { className: classNameFromProps, ...restProps } = props;
  const className = classNames(
    classNameFromProps, 
    styles.checkbox,
    { [styles.withIcon]: isWithIcon },
  );
  const iconClassName = classNames({ [styles.icon]: isWithIcon })

  return <CheckboxComponent {...restProps} containerClassName={className} iconClassName={iconClassName} />
};
