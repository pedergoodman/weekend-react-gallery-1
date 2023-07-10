import { useState } from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  Card,
  Grid,
  CardContent,
  Button
} from "@mui/material";
import Swal from 'sweetalert2'
const GalleryItem = ({ GalleryItem, updateLikes, deleteByGalleryId }) => {
  // STATES
  const [showDescription, setShowDescription] = useState(false);

  // Swap the Image and Description
  const swapImageDescription = () => {
    setShowDescription(!showDescription);
  };
  // Update the likes
  const handleLikesStatus = () => {
    updateLikes(GalleryItem.id);
  };
  // Delete by Id
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteByGalleryId(GalleryItem.id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };
  return (
    <div className="cardAction">
      <Grid container spacing={2}>
        <Grid item xs={10} lg={10} md={10}>
          <Card>
            <CardActionArea>
              {/* {showDescription && <p>{GalleryItem.description}</p>} */}
              {!showDescription ? (
                <CardMedia
                  component="img"
                  height="140"
                  onClick={swapImageDescription}
                  image={GalleryItem.image}
                  alt="Gallery Images"
                />
              )  :  (<p>{GalleryItem.description}</p>)}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {GalleryItem.title}
                </Typography>
                <div className="btn-action">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={handleLikesStatus}
                  >
                    Like
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
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
