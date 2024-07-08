import React from "react";
import './map.css'
import { useRef, useEffect } from "react";

const Map = props => {
    const mapRef = useRef();

    useEffect(()=>{}, [])
    const map = new window.google.maps.Map(mapRef.current, {
        center: props.center,
        zoom: props.zoom
    });
    new window.google.maps.Marker({positon: props.center, map: map});
return(
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

    </div>
)
}

export default Map;