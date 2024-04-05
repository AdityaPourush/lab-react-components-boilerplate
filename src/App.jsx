import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import GallaryMain from './components/GallaryMain';
import imageData from './components/ImageComponent';

function App() {
  return (
    <div>
      <GallaryHeader />
      <GallaryMain imageData={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
