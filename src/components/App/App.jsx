import { useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
function App() {
  // using States
  const [galleryList, setGalleryList] = useState([]);
  // GET 
  const getGalleryList = () => {
    // GET METHOD for the gallery
    Axios.get('/gallery')
    .then((response) => {
      console.log('Get all of the Gallery:', response.data);
      // Set response data in useState array
      setGalleryList(response.data);
      // Catch any Errors
    }).catch((error) => {
      console.log('ERROR is getting the Gallerys:',error);
      alert('ERROR in getting the gallery!');
    })
  }
  //Initial load for getting the Gallery 
  useEffect(() => {
    getGalleryList();
  },[]);
  
    return (
      <div className="App">
        <Header title="Gallery Photos"/>
        <GalleryList GalleringList={galleryList} />
      </div>
    );
}

export default App;
