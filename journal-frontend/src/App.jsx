import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Front from './pages/front';
import Login from './pages/login';
import JournalRegister from './pages/journalRegister';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Front />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<JournalRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}