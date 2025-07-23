import './App.css';
import { Header } from './components/Header/Header';
import PhotobooksList from './components/PhotobooksList/PhotobooksList';
import { HEADER_TEXT } from './constants';
import image1 from './assets/photobooks_images/IMG_0989.jpg'
import image2 from './assets/photobooks_images/IMG_1537.jpg'
import image3 from './assets/photobooks_images/IMG_2257.jpg'
import image4 from './assets/photobooks_images/IMG_2367.jpg'
import image5 from './assets/photobooks_images/IMG_2368.jpg'
import image6 from './assets/photobooks_images/IMG_6712.jpg'


function App() {
  const images: string[] = [
    image1, image2, image3, image4, image5, image6
  ]

  return (
    <div>
      <div className="background"></div>
      <Header text={HEADER_TEXT}></Header>
      <PhotobooksList images={images}></PhotobooksList>
    </div>
  );
}

export default App;