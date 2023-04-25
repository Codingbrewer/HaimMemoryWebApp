import './App.css';

//React Router
import {Routes,BrowserRouter, Route} from 'react-router-dom';

//Pages
import {Create} from './Pages/posts/Create';
import {FullPost} from './Pages/posts/FullPost';
import Gallery from './Pages/gallery/gallery';
import Childhood from './Pages/gallery/childhood';
import Choir from './Pages/gallery/choir';
import Family from'./Pages/gallery/family';
import Menorah from'./Pages/gallery/menorah';
import Landscape from'./Pages/gallery/landscape';
import Story from './Pages/story';
import { MemoryBook } from './Pages/memoryBook';

//Components
import Navbar from './components/NavbarTry';
import Footer from './components/Footer';


function App() {

  return (
    <div className="">
      <BrowserRouter>

      <Navbar />
      <Routes>
            <Route exact path="/" element={<Story />} />
            <Route exact path="/create" element={<Create />}/>
            <Route exact path="/edit/:id" element={<Create />}/>
            <Route exact path="/fullpost/:id" element={<FullPost />}/>
            <Route exact path="/gallery/*" element={<Gallery />} />
            <Route exact path="/childhood/*" element={<Childhood />} />
            <Route exact path="/choir/*" element={<Choir />} />
            <Route exact path="/family/*" element={<Family />} />
            <Route exact path="/menorah/*" element={<Menorah />} />
            <Route exact path="/landscape/*" element={<Landscape />} />
            <Route exact path="/memorybook/*" element={<MemoryBook />} />
       


        
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;