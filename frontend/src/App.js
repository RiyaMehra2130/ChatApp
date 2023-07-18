import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/SignUp/login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chat from './Component/ChatRoom/Chat';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </BrowserRouter> 
{/*      
      <Chat/> */}
    </div>
  );
}

export default App;
