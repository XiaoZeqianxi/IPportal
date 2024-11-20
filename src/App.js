import './App.css';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <>
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    </>
  );
}

export default App;
