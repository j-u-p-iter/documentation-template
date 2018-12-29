import * as React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { createLayout } from '@j.u.p.iter/react-layout';


export const createLayoutWithInternalParts = createLayout({
  headerContentEl: <Header />,
  sidebarContentEl: <Sidebar />,
  footerContentEl: <Footer />,
});
