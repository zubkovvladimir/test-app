import { FC } from 'react';

import { compose } from 'hocs/compose';
import { withAuthCheck } from 'hocs/withAuthCheck';
import { withProviders } from 'hocs/withProviders';
import { withUserInfoPreload } from 'hocs/withUserInfoPreload';

import { RenderRoute } from './routes';

const App: FC = () => <RenderRoute />;

export default compose(App, withAuthCheck, withUserInfoPreload, withProviders);
