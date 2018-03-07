import {compose, withProps} from "recompose"
import React, {Component} from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";


export default (compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100vh`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)(function () {

    return (
        <div className="map">


            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 50.0811, lng: 14.4478}}
            >
                <Marker
                    position={{lat: 50.0811, lng: 14.4478}}
                />


            </GoogleMap>


            {/*            <GoogleMapReact
                style={{
                    position: 'relative',
                    height: '100vh'
                }}
                bootstrapURLKeys={{key: ['AIzaSyBP5rvQWnuolp3WLrVqZ1jXEl2wc0XchPI']}}
                options={{}}
                center={{lat: 50.0811, lng: 14.4478}}
                zoom={12}
                heatmapLibrary={true}
                heatmap={{
                    positions: [
                        {
                            lat: 60.714305,
                            lng: 47.051773,
                        },
                        {
                            lat: 60.734305,
                            lng: 47.061773,
                        },
                        {
                            lat: 60.754305,
                            lng: 47.081773,
                        },
                    ],
                    options: {
                        radius: 20,
                        opacity: 0.7,
                        gradient: [
                            'rgba(0, 255, 255, 0)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(0, 191, 255, 1)',
                            'rgba(0, 127, 255, 1)',
                            'rgba(0, 63, 255, 1)',
                            'rgba(0, 0, 255, 1)',
                            'rgba(0, 0, 223, 1)',
                            'rgba(0, 0, 191, 1)',
                            'rgba(0, 0, 159, 1)',
                            'rgba(0, 0, 127, 1)',
                            'rgba(63, 0, 91, 1)',
                            'rgba(127, 0, 63, 1)',
                            'rgba(191, 0, 31, 1)',
                            'rgba(255, 0, 0, 1)'
                        ]
                    },
                }}
            >
                {[{
                    position: {lat: 50.0811, lng: 14.4478},
                    title: 'Hello World!'
                }]}

                {markers}
            </GoogleMapReact>*/}

        </div>
    );
}))

