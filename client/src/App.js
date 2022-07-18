import './App.css';
import { Fragment } from 'react';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}  


