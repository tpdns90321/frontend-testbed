import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/Main'));
const ButtonPage = lazy(() => import('./pages/Button'));
const InputTextPage = lazy(() => import('./pages/InputText'));
const LoginPage = lazy(() => import('./pages/Login'));
const CheckboxPage = lazy(() => import('./pages/Checkbox'));

function Body() {
  return (
    <div className="p-2 min-h-full h-fit">
      <Suspense>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/inputtext" element={<InputTextPage />} />
		  <Route path="/login" element={<LoginPage />} />
		  <Route path="/checkbox" element={<CheckboxPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Body;
