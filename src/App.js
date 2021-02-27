import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './Components/MainComponent/MainComponent';
import myStore from './REDUX/store';
import { Provider } from 'react-redux';

function App() {
  // console.log("app.js: ", myStore.getState());
  return (
    <div >
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
