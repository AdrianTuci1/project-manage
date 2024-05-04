import { Route, Routes } from 'react-router-dom';
import '@mantine/core/styles.css';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { HomePage } from './routes/homePage/Home.page';
import AdminPage from './routes/adminmenu/AdminPage';
import MinionsPage from './routes/minionsPage/MinionsPage';
import MoneyBrr from './routes/moneybrr/MoneyBrr';
import { UserContextProvider } from './context/userContext';
import RegisterPage from './routes/register/Registerpage';
import NavBar from './components/navbar/NavBar';
import { useState } from 'react';
import LoginPage from './routes/loginPage/loginPage';

axios.defaults.baseURL = 'http://localhost:8800';
axios.defaults.withCredentials = true;

function App() {
  const [ user ] = useState(null);
  const login =  window.localStorage.getItem("isLogedIn");
  return (
    <MantineProvider theme={theme}>
      <UserContextProvider value={{ user }}>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      {!!login && <NavBar />}
      <Routes>
        <Route path='/' element={login ? (<AdminPage />) : (<HomePage />)} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<AdminPage />} />
        <Route path='/minions' element={<MinionsPage />} />
        <Route path='/moneybrr' element={<MoneyBrr />} />
      </Routes>
      </UserContextProvider>
    </MantineProvider>
  );
}

export default App;
