import React from "react";
import './PlaceItem.css'
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import { useState } from "react";
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);

    const [showConfirmModal, setShowConfirmModel] = useState(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModel(true);
    }
    const cancelDeleteWarningHandler = () => {
        setShowConfirmModel(false);
    }
    const confirmDeleteWarningHandler = () => {
        setShowConfirmModel(false);
        console.log("deleting...")
    }

const openMapHandler = () => {
    setShowMap(true);
}


const closeMapHandler = () => {
    setShowMap(false);
}
    return (
        <React.Fragment>
        <Modal 
            show={showMap} 
            onCancel={closeMapHandler}
            header={props.address}
            contentClass="place-item__model-content"
            footerClass="place-item__model-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
        <div className="map-container">
            <Map center={props.coordinates} zoom={16}/>
        </div>    
        </Modal>
        <Modal
            show={showConfirmModal}
            onCancel={cancelDeleteWarningHandler} 
            header="Are you sure?" 
            footerClass='place-item__modal-actions' 
            footer={
            <>
                <Button inverse onClick={cancelDeleteWarningHandler}>CANCEL</Button>
                <Button danger onClick={confirmDeleteWarningHandler}>DELETE</Button>
            </>
        }>
            <p>Do you want to proceed and delete this page?<br></br> Please note that it cant be undone.</p>
        </Modal>
        <li className="place-item">
        <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
            </div>
        </Card>
        </li>
        </React.Fragment>
    );
};

export default PlaceItem;