import React from 'react'
import { Segment, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Marker = () => <Icon name='marker' size='big' color='red'/>

const EventDetailedMap = ({lat, lng}) => {
    useEffect(() => {
        console.log("LOADED")

    }, [])
    const center = [40.439291, -111.893231];
    const zoom = 17;
    return (
        <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBqQcKdUUMmSR-V54PGTfkwbtA8qDESiks' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        // <Segment attached='bottom' style={{padding: 0}}>
        //     <div style={{ height: '300px', width: '100%' }}>
        //         <GoogleMapReact
        //         bootstrapURLKeys={{ key: 'AIzaSyBqQcKdUUMmSR-V54PGTfkwbtA8qDESiks' }}
        //         defaultCenter={center}
        //         defaultZoom={zoom}
        //         >
        //         <Marker
        //             lat={lat}
        //             lng={lng}
        //         />
        //         </GoogleMapReact>
        //     </div>
        // </Segment>
    )
}

export default EventDetailedMap