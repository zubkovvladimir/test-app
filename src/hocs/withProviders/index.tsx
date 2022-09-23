import { FC, ReactElement, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Spin } from 'antd';
import { store } from 'store';

export function withProviders<T = any>(Component: FC<T>) {
  return (props: T): ReactElement => (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Spin spinning />}>
          <Component {...props} />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}
