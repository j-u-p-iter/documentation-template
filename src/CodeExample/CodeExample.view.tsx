import * as React from 'react';
import { SwitcherController } from '@j.u.p.iter/react-switcher';

import styles from './CodeExample.module.scss';

interface Props {
  title: string;
  description: React.ReactNode;
  codeSnippet: React.ReactNode;
  elementToShow: React.ReactNode;
}

export const CodeExampleView: React.SFC<Props> = ({
  title,
  description,
  codeSnippet,
  elementToShow,
}) => (
  <SwitcherController name='code-toggler' onChange={() => {}}>
    {
      ({ api: { getOn, toggleOn } }) => (
        <div className={styles.container}>
          <header className={styles.header}>
            <h3 className={styles.title}>{title}</h3>

            <button onClick={() => toggleOn()}>Toggle code example</button>
          </header>

          {getOn() && <div className={styles.row}>{codeSnippet}</div>}

          <div className={styles.row}>{elementToShow}</div>

          <div className={styles.row}>{description}</div>
        </div>
      )
    }
  </SwitcherController>
);
