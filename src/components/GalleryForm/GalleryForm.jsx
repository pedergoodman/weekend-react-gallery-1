import { useState } from "react";
import { TextField, Button } from "@mui/material";
const GalleryForm = () => {
  const [galleryImg, setGalleryImg] = useState("");
  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryDescription, setGalleryDescription] = useState("");
  return (
    <div>
      <form>
        <h2>Add Gallery Photos</h2>
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="image"
            variant="outlined"
          />
      
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="title"
            variant="outlined"
          />
       
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="description"
            variant="outlined"
          />

        <Button variant="contained" color="success" className="submit-btn" style={{ margin: "1rem", padding:".8rem" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default GalleryForm;
