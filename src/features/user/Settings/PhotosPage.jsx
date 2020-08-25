import React, { useState } from "react";
import { Container, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UploadForm from "../../nav/Profile/upload/UploadForm";
import ImageGrid from "../../nav/Profile/upload/ImageGrid";
import Modal from "../../nav/Profile/upload/Modal";
import "semantic-ui-css/semantic.min.css";

function PhotosPage() {
  const [selectedImg, setSelectedImg] = useState(null),
        [isLoading, setIsLoading] = useState(false);

  return (
    
    <div className='photoseg'>
      <Segment>
        <UploadForm />
        {isLoading === true
        ?(<div class="ui segment">
        <div class="ui active dimmer">
          <div class="ui massive text loader">Loading</div>
        </div>
      </div>)
      :(<div>
        <h1 className='basicinfo'>My Photos</h1>
        <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        </div>
        
      )}
        
        
        
      </Segment>
      </div>
    
  
  );
}

export default PhotosPage;
