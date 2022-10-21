import { useState } from "react";
import React from "react";
import AddBook from "../pages/AddBook";
import { useSelector } from "react-redux";



const Modal = (props) => {
    const uygulamaninState = useSelector((state) => state)
    console.log("Modal State", uygulamaninState)
    const { onCancel, setShowModel, onConfirm,  title, aciklama } = props;
    return (
        <button 
            onClick={onCancel}
            style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "default"

          }}>
            <div style={{
                width: "60%",
                padding: "30px",
                backgroundColor: "#fff",
                borderRadius: "150px"



            }}>
                <h2 className="text-center">{title}</h2>
                <p className="text-center">{aciklama}</p>
                <div className="d-flex justify-content-center -1">
                    <button onClick={() => setShowModel(false)}
                        className="btn btn-outline-danger mx-3 rounded-circle"
                    >
                        Kapat
                    </button>
                    <button
                        onClick={onConfirm}
                        className="btn btn-outline-primary rounded-circle"
                    >
                        Onayla
                    </button>
                </div>
            </div>

     </button>
    )
}

export default Modal