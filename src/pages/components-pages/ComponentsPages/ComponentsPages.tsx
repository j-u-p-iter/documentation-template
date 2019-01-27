import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { switcherPageRoute } from '../SwitcherPage';
import { selectPageRoute } from '../SelectPage';
import { iconPageRoute } from '../IconPage';

const componentsPagesRoutes = [switcherPageRoute, selectPageRoute, iconPageRoute];

export const ComponentsPages: React.SFC<RouteProps> = ({ match: { url: baseUrl } }: any) => {
  return (
    <div>
      {componentsPagesRoutes.map(({ path, Content }) => (
        <Route key={path} path={`${baseUrl}/${path}`} component={Content} />
      ))}
    </div>
  );
} 
