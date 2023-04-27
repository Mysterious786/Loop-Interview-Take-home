// import { Route,Routes } from 'react-router-dom'
import './App.scss'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from './component/redux-store/store';
import { useSelector } from 'react-redux';
import Login from './component/login-page/login-page.component'
import Home from './component/home/home.component'

function App() {
  const loggedIn = useSelector((state: any) => state.loggedIn);

 
//  <Routes>
  
//   <Route  path='/' element={<Login/>}/>
//   <Route path="/landing-page" element={<Home/>}/>
//  </Routes>
    


// export default App

return (
  <div>
    {loggedIn ? (
      <>
       <Home/>
      </>
    ) : (
      <>
        <Login/>
      </>
    )}
  </div>
);
}

function WrappedApp() {
return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
}

export default WrappedApp;
