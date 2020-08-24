import React, { useState } from "react";
import { Container, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UploadForm from "../../nav/Profile/upload/UploadForm";
import ImageGrid from "../../nav/Profile/upload/ImageGrid";
import Modal from "../../nav/Profile/upload/Modal";

function PhotosPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  // handleDeleteImage = (selectedImg) => {
  //   axios.delete(`/api/image/${selectedImg}`)

    
  // }

  return (
    <Grid>
    <Grid.Column width={3}>
      <Segment>
        <h2>Settings</h2>
        <Link to="/settings/basicinfo">
          <div>Basic Info</div>
        </Link>

        <Link to="/settings/aboutme">
          <div>About Me</div>
        </Link>
        <Link to="/settings/myphotos">
          <div>My Photos</div>
        </Link>
      </Segment>
    </Grid.Column>
    <Grid.Column width={3}>
      <Segment>
        <h1>My Photos</h1>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Segment>
    </Grid.Column>
  </Grid>
  );
}

export default PhotosPage;
