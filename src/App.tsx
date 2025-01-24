// import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';

function App() {


  return (
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
