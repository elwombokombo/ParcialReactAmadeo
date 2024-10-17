import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

// Define una función asíncrona para eliminar una mascota por su ID desde la API
const deletePet = async (id) => {
  // Realiza una solicitud DELETE a la API para eliminar el juego
  const petDelete = await fetch("http://localhost:3005/api/pets/" + id, {
    method: "DELETE",
  });

  // Retorna la respuesta de la solicitud
  return petDelete;
};

// Define el componente Card
const Card = ({ name, id, photo, age, refreshPets }) => {
  // Obtiene la función de navegación
  const navigate = useNavigate();

  // Maneja el clic en el botón de detalles
  const handleDetailsClick = () => {
    // Navega a la ruta de detalles del juego
    navigate(`/details/${id}`);
  };

  // Maneja el clic en el botón de borrar
  const handleDeleteClick = async () => {
    // Llama a la función deletePet para eliminar el juego
    const response = await deletePet(id);
    // Si la respuesta es exitosa, actualiza la lista de mascotas
    if (response.ok) {
      refreshPets();
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div>
          <div className="card-photo">
            <img width={250} src={photo}></img>
          </div>
        </div>
        {/* Muestra el título del juego */}
        <h2 className="card-name">{name}</h2>
        <div>
          <p className="card-age">{age}</p>
        </div>
        <div className="card-wrapp-buttons">
          {/* Botón para ver los detalles del juego */}
          <button className="card-button" onClick={handleDetailsClick}>
            Detalle
          </button>
          {/* Botón para borrar el juego */}
          <button className="card-button" onClick={handleDeleteClick}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente Card como el componente predeterminado
export default Card;
