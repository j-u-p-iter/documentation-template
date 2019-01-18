import * as React from 'react';
import { Navigation } from '@j.u.p.iter/react-navigation';

import styles from './Sidebar.module.scss';

const navigationConfig = [
  {
    id: '/',
    title: 'Home Page',
  },
  {
    id: '/components/switcher',
    title: 'Switcher',
  },
  {
    id: '/components/select',
    title: 'Select',
  }
];

export const Sidebar = () => (
  <Navigation 
    currentPath='/'
    config={navigationConfig} 
    activeClassName='active'
    className={styles.navigation}
  />
);
