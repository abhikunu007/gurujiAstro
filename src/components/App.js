import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './Header';
import Testimonials from './Testimonial';
import Footer from './Footer';
import AstrologerList from './AstrologerList';


function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Testimonials/>
     <AstrologerList/>
        <Routes>
        {/* <Route path="/" element={<Header/>} /> */}
        </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;