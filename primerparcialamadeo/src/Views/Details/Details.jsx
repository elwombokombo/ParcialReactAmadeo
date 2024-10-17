import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";

const getPetByID = async (id) => {
  // Realiza una solicitud fetch a la API para obtener los datos del juego
  const petFetch = await fetch(`http://localhost:3005/api/pets/${id}`);
  // Convierte la respuesta a formato JSON
  const pet = await petFetch.json();
  // Retorna los datos del juego
  return pet;
};

// Define el componente Details
const Details = () => {
  // Define un estado local para almacenar los datos del juego
  const [pet, setPet] = useState();

  // Obtiene el parámetro 'id' de la URL
  const { id } = useParams();

  // Obtiene la función de navegación
  const navigate = useNavigate();

  // Usa useEffect para obtener los datos del juego cuando el componente se monta o cuando cambia el 'id'
  useEffect(() => {
    // Llama a la función getPetByID y actualiza el estado con los datos del juego
    getPetByID(id).then((pet) => setPet(pet));
  }, [id]);

  return (
    <div className="container">
      <h1>Detalle</h1>
      {/* Renderiza los detalles del juego si los datos están disponibles */}
      {pet && (
        <div>
          <div className="detail">
            <span className="detail-name"></span>
            <span className="detail-content">
              <img width={250} src={pet.photo}></img></span>
          </div>
          <div className="detail">
            <span className="detail-name">Nombre: </span>
            <span className="detail-content">{pet.name}</span>
          </div>
          <div className="detail">z
            <span className="detail-name">Descripción: </span>
            <span className="detail-content">{pet.description}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Edad: </span>
            <span className="detail-content">{pet.age}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Características: </span>
            <span className="detail-content">{pet.characteristics}</span>
          </div>
        </div>
      )}
      {/* Botón para volver a la página anterior */}
      <button onClick={() => navigate(-1)} className="back-button">
        Volver
      </button>
    </div>
  );
};

// Exporta el componente Details como el componente predeterminado
export default Details;
