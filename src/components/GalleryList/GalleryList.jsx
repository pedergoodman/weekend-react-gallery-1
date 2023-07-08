import React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  Card,
  Grid,
  CardContent,
} from "@mui/material";
const GalleryList = ({ GalleringList }) => {
  return (
    <div className="card">
      {GalleringList.map(GalleryItem => {
        return (
          <Grid container spacing={2} key={GalleryItem.id}>
            <Grid item xs={10} lg={10} md={10}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={GalleryItem.path}
                    alt="Gallery Images"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {GalleryItem.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <button>Like</button>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      0 Likes
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default GalleryList;
