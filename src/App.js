import './App.css';
import Footer from './components/public/Footer';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import { Routes,Route } from 'react-router-dom';
import MainEpisode from './components/public/MainEpisode';




function App() {
  return (
    <div>
      <Navbar />
    
        <Routes>
          <Route exact path={"/"} element={<Main></Main>}></Route>
          <Route exact path={"/details/:id"} element={<Detail></Detail>}></Route>
          <Route exact path={"/user-form"} element={<UserForm></UserForm>}></Route>
          <Route exact path={"/episode"} element={<MainEpisode></MainEpisode>}></Route>
        </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
