import { lazy, ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(async () => await import('./pages/Main'));
const ButtonPage = lazy(async () => await import('./pages/Button'));
const InputTextPage = lazy(async () => await import('./pages/InputText'));
const LoginPage = lazy(async () => await import('./pages/Login'));
const CheckboxPage = lazy(async () => await import('./pages/Checkbox'));

function Body(): ReactElement {
  return (
    <div className="flex p-2 min-h-full h-fit">
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
