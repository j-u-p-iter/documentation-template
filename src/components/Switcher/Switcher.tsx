import * as React from 'react';
import classNames from 'classnames';
import { SwitcherController } from '@j.u.p.iter/react-switcher';

import styles from './Switcher.module.scss';

const noop = () => {};

export const Switcher = () => (
  <SwitcherController name='switcher-name' onChange={noop}>
    {({ api: { getOn, toggleOn } }) => {
      const className = classNames(styles.container, { [styles.on]: getOn() }) ;

      return (
        <div onClick={toggleOn} className={className}>
          <div>On</div>
          <div className={styles.button} />
          <div>Off</div>
        </div>
      );
    }}
  </SwitcherController>
)
