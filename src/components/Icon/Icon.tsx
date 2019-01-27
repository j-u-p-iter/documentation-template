import * as React from 'react'; 
import classNames from 'classnames';
import { Icon as IconComponent } from '@j.u.p.iter/react-icon';

import styles from './Icon.module.scss';
import svgSpritePath from '../../sprite.svg';

interface IProps {
  name: string;
  className?: string;
}

export const Icon: React.SFC<IProps> = ({ name, className }) => (
  <IconComponent name={`icon-${name}`} className={classNames(styles.icon, className)} svgSpritePath={svgSpritePath} />
); 
