import './App.css';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

function App() {
    return (
        <>
                <Theme>
                    <div className='app'>
                        <RouterProvider router={router} />
                    </div>
                </Theme>
        </>
    );
}

export default App;
