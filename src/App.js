import '././style/style.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Surahs from './components/surahs/Surahs';
import Players from './components/players/Players';
import Prayers from './components/prayers/Prayers';
import Ayahs from './components/surahs/ayahs/Ayahs';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/surahs' element={<Surahs/>}/>
        <Route path={`/surahs/:id`} element={<Ayahs/>}/>
        <Route path='/players' element={<Players/>}/>
        <Route path='/prayers' element={<Prayers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
