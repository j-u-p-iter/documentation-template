import * as React from 'react';
import { Navigation } from '@j.u.p.iter/react-navigation';

import styles from './Sidebar.module.scss';

const navigationConfig = [
  {
    id: '/',
    title: 'Home Page',
  },
  {
    id: '/components',
    title: 'Components',
    children: [{
      id: '/components/switcher',
      title: 'Switcher',
    },
    {
      id: '/components/select',
      title: 'Select',
    },
    {
      id: '/components/icon',
      title: 'Icon',
    },
    {
      id: '/components/tag',
      title: 'Tag',
    },
    {
      id: '/components/checkbox',
      title: 'Checkbox',
    }, 
    {
      id: '/components/input',
      title: 'Input',
    }]
  }
];

export const Sidebar = () => (
  <Navigation 
    currentPath='/'
    config={navigationConfig} 
    activeClassName={styles.active}
    className={styles.navigation}
  />
);
