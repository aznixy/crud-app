import AllPhones from './Component/AllPhones';
import AddPhone from './Component/AddPhone';
import EditPhone from './Component/EditPhone';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
// import CodeForInterview from './Component/CodeForInterview';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPhones />} />
        <Route path="/all" element={<AllPhones />} />
        <Route path="/add" element={<AddPhone />} />
        <Route path="/edit/:id" element={<EditPhone />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
