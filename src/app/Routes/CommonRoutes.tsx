import { Routes, Route } from 'react-router-dom';
import HomePage from '../../features/HomePage/HomePage';
import WellcomePage from '../../features/WellcomePage/WellcomePage';

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/*">
        <Route path="*" index element={<HomePage />} />
        <Route path="wellcome-page" index element={<WellcomePage />} />
      </Route>
    </Routes>
  );
};

export default CommonRoutes;
