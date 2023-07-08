import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
const GalleryList = ({ GalleringList, updateLikes }) => {
  return (
    <div className="card">
      {GalleringList.map(GalleryItems => {
        return (
          <GalleryItem GalleryItem={GalleryItems} key={GalleryItems.id} updateLikes={updateLikes}/>
        );
      })}
    </div>
  );
};

export default GalleryList;
