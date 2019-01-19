import * as React from 'react';
import { Select as ReactSelect } from '@j.u.p.iter/react-select';
import classNames from 'classnames';

import styles from './Select.module.scss';

export class Select extends React.Component {
  state = {
    isValid: true,
    isMulti: false,
    isOpened: false,
  }

  createStateToggler = (propName: string) => () => {
    this.setState((state: any) => ({ [propName]: !state[propName] })); 
  }

  handleToggleMenu = (isOpened: boolean): void => {
    this.setState({ isOpened });
  }
 
  render() {
    const { isValid, isMulti, isOpened } = this.state;

    const resultControlClassName = classNames(styles.control, { [styles.invalid]: !isValid, [styles.opened]: isOpened });

    return (
      <>
        <ReactSelect 
          containerClassName={styles.container}
          menuClassName={styles.menu} 
          controlClassName={resultControlClassName}
          arrowClassName={styles.arrow}
          labelClassName={styles.label}
          placeholderClassName={styles.placeholder}
          isMulti={isMulti}
          onToggle={this.handleToggleMenu}
        />
        <div>
          <label>
            <input type='checkbox' onChange={this.createStateToggler('isMulti')} checked={isMulti} />
            {' '}
            isMulti
          </label>
        </div>
        <div>
          <input type='checkbox' onChange={this.createStateToggler('isValid')} checked={isValid} />
          {' '}
          isValid
        </div>
      </>
    );
  }
} 
