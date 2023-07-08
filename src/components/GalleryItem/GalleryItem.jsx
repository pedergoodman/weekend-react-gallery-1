import { useState } from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  Card,
  Grid,
  CardContent,
} from "@mui/material";
const GalleryItem = ({ GalleryItem,updateLikes }) => {
// STATES
const [ showDescription, setShowDescription] = useState(false);

// Swap the Image and Description
const swapImageDescription = () => {
  setShowDescription(!showDescription);
}
// Update the likes
const handleLikesStatus = () => {
  updateLikes(GalleryItem.id);
}
  return (
    <div className="cardAction">
       <Grid container spacing={2} >
            <Grid item xs={10} lg={10} md={10}>
              <Card>
                <CardActionArea>
                  {showDescription && <p>{GalleryItem.description}</p>}
                 {!showDescription && <CardMedia
                    component="img"
                    height="140"
                    onClick={swapImageDescription}
                    image={GalleryItem.path}
                    alt="Gallery Images"
                  />}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {GalleryItem.title}
                    </Typography>
                    <button onClick={handleLikesStatus}>Like</button>
                    <Typography variant="body2" color="text.secondary">
                      {GalleryItem.likes} Likes
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
    </div>
  );
};

export default GalleryItem;
