import * as React from 'react'; 
import classNames from 'classnames';
import { Icon as IconComponent, IconProps } from '@j.u.p.iter/react-icon';

import styles from './Icon.module.scss';
import svgSpritePath from '../../sprite.svg';

export const Icon: React.SFC<Partial<IconProps>> = ({ name, className, onClick = () => {} }) => (
  <IconComponent 
    onClick={onClick} 
    name={`icon-${name}`} 
    className={classNames(styles.icon, className)} 
    svgSpritePath={svgSpritePath} 
  />
); 
