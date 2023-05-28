import { Suspense } from 'react';
import CommonRoutes from './app/Routes/CommonRoutes';
import DefaultLayout from './features/DefaultLayout/DefaultLayout';

const App = () => {
  return (
    <Suspense>
      <DefaultLayout>
        <CommonRoutes />
      </DefaultLayout>
    </Suspense>
  );
};

export default App;
