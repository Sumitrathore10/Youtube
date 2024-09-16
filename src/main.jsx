import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Context from './context/Context.jsx'; // No need to import ProductContext unless using it here
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Context>
      <App />
    </Context>
    </BrowserRouter>
);
