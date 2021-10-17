import React,{Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FirstContainer from './firstContainer/FirstContainer';

function App() {
  return (
    <Suspense fallback={
      <>

      </>
    }>
    <div className="App">
      <FirstContainer/>
    </div>
    </Suspense>
    
  );
}

export default App;

