import * as React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';
import { createLayout } from '@j.u.p.iter/react-layout';

export const Layout = createLayout({
  headerContentEl: <Header />,
  sidebarContentEl: <Sidebar />,
  footerContentEl: <Footer />,
}, <MainContent />);
