import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import { TextContextProvider } from './context/textContext';
import { ImgContextProvider } from './context/imgContext';
import { HolidaysContextProvider } from './context/holidaysContext';

const App = () => {
  return (
      <div>
        <HolidaysContextProvider>
            <ImgContextProvider>
                <TextContextProvider>
                    <Header />
                    <Card />
                    <Footer />
                  </TextContextProvider>
            </ImgContextProvider>
        </HolidaysContextProvider>
      </div>
  );
}

export default App;
