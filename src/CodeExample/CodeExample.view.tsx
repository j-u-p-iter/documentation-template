import * as React from 'react';
import { SwitcherController } from '@j.u.p.iter/react-switcher';

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
        <div>
          <header>
            <h3>{title}</h3>

            <button onClick={() => toggleOn()}>Toggler</button>
          </header>

          {getOn() && codeSnippet}

          {elementToShow}

          {description}
        </div>
      )
    }
  </SwitcherController>
);
