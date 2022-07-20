import { Box, Spacer } from '@chakra-ui/react';
import  './App.css';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Navbar/Banner';
import Categories from './Components/Navbar/Categories';
import Search_Section from './Components/Navbar/Search_Section';

function App() {
  return (
    <div className="App">
      <nav>
     <Banner />
     <Search_Section />
     <Categories />
      </nav>
      <Box h="1000px"></Box>
        <footer>
     <Footer/>
        </footer>
    </div>
  );
}

export default App;
