import { useState } from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  Card,
  Grid,
  CardContent,
} from "@mui/material";
const GalleryItem = ({ GalleryItem }) => {
const [ showDescription, setShowDescription] = useState(false);
const imageDescription = () => {
  setShowDescription(!showDescription);
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
                    onClick={imageDescription}
                    image={GalleryItem.path}
                    alt="Gallery Images"
                  />}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {GalleryItem.title}
                    </Typography>
                    <button>Like</button>
                    <Typography variant="body2" color="text.secondary">
                      0 Likes
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
