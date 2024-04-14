import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
const GalleryList = ({ GalleringList, updateLikes,deleteByGalleryId }) => {
  return (
    <div className="card">
      {GalleringList.map(GalleryItems => {
        return (
          <GalleryItem GalleryItem={GalleryItems} key={GalleryItems.id} updateLikes={updateLikes} deleteByGalleryId={deleteByGalleryId}/>
        );
      })}
    </div>
  );
};

export default GalleryList;
