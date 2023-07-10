import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";
function App() {
  // using States
  const [galleryList, setGalleryList] = useState([]);

  // GET the Gallery list axios method
  const getGalleryList = () => {
    // GET METHOD for the gallery
    Axios.get("/gallery")
      .then(response => {
        console.log("Get all of the Gallery:", response.data);
        // Set response data in useState array
        setGalleryList(response.data);
      })
      // Catch any Errors
      .catch(error => {
        console.log("ERROR in getting the Gallerys:", error);
        alert("ERROR in getting the gallery!");
      });
  };
  // UPDATE THE LIKES axios method
  const updateLikesStatus = likeId => {
    Axios.put(`/gallery/like/${likeId}`)
      .then(response => {
        getGalleryList();
      })
      // Catch any Errors
      .catch(error => {
        console.log("ERROR", error);
        alert("ERROR updating the Likes!");
      });
  };
  const deleteByGalleryId = id => {
    Axios.delete(`/gallery/delete/${id}`)
    .then((response) => {
        getGalleryList();
    }).catch((error) => {
      console.log('ERROR in deleting by id',error);
    })
  }
  //Initial load for getting the Gallery
  useEffect(() => {
    getGalleryList();
  }, []);

  return (
    <div className="App">
      <Header title="Gallery Photos" />
      <GalleryList
        GalleringList={galleryList}
        updateLikes={updateLikesStatus}
        deleteByGalleryId={deleteByGalleryId}
      />

    </div>
  );
}

export default App;
