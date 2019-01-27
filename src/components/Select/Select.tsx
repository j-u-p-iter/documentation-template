import * as React from 'react';
import { Select as ReactSelect } from '@j.u.p.iter/react-select';
import classNames from 'classnames';

import styles from './Select.module.scss';

const selectOptions = [
  { label: "some-label", value: "1" },
  { label: "one-more-label", value: "2" },
  { label: "one-more-label", value: "3" },
  { label: "and-one-more-label", value: "4" },
  { label: "and-and-one-more-label", value: "5" },
  { label: "and-and-one-more-label", value: "6" },
  { label: "and-and-one-more-label", value: "7" },
  { label: "and-and-one-more-label", value: "8" },
  { label: "and-and-one-more-label", value: "9" },
  { label: "and-and-one-more-label", value: "10" },
  { label: "and-and-one-more-label", value: "11" },
  { label: "and-and-one-more-label", value: "12" },
  { label: "and-and-one-more-label", value: "13" },
  { label: "and-and-one-more-label", value: "14" },
  { label: "and-and-one-more-label", value: "15" },
  { label: "and-and-one-more-label", value: "16" },
];

export class Select extends React.Component {
  state = {
    isValid: true,
    isMulti: false,
    isOpened: false,
    value: null,
  }

  createStateToggler = (propName: string) => () => {
    this.setState((state: any) => ({ value: null, [propName]: !state[propName] })); 
  }

  handleToggleMenu = (isOpened: boolean): void => {
    this.setState({ isOpened });
  }
 
  render() {
    const { isValid, isMulti, isOpened, value } = this.state;

    const resultControlClassName = classNames(styles.control, { [styles.invalid]: !isValid, [styles.opened]: isOpened });

    return (
      <>
        <ReactSelect 
          containerClassName={styles.container}
          menuClassName={styles.menu} 
          controlClassName={resultControlClassName}
          arrowClassName={styles.arrow}
          labelClassName={styles.label}
          tagClassName={styles.tag}
          placeholderClassName={styles.placeholder}
          isMulti={isMulti}
          onToggle={this.handleToggleMenu}
          value={value}
          options={selectOptions}
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
