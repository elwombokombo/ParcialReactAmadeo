import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

// Define el componente AddGame
const AddGame = () => {
  // Define estados locales para los campos del formulario
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [photo, setPhoto] = useState("");

  // Obtiene la función de navegación
  const navigate = useNavigate();

  // Determina si el botón debe estar deshabilitado
  const buttonIsDisabled = !name || !description || !age || !characteristics;

  // Maneja la lógica para agregar un juego
  const handleAddGame = async () => {
    // Realiza una solicitud POST a la API para agregar un nuevo juego
    const response = await fetch("http://localhost:3005/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, age, characteristics }),
    });

    // Si la respuesta es exitosa, navega a la página principal
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Agregar Juego</h1>
      <div>
        <div>
          {/* Campo de entrada para el título del juego */}
          <input
            type="text"
            placeholder="Foto"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div>
          {/* Campo de entrada para el título del juego */}
          <input
            type="text"
            placeholder="Título"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {/* Campo de entrada para la descripción del juego */}
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          {/* Campo de entrada para la cantidad de jugadores */}
          <input
            type="text"
            placeholder="Edad"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          {/* Campo de entrada para la cantidad de jugadores */}
          <input
            type="text"
            placeholder="Tipo"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          {/* Campo de entrada para la categoría del juego */}
          <input
            type="text"
            placeholder="Características"
            value={characteristics}
            onChange={(e) => setCharacteristics(e.target.value)}
          />
        </div>
      </div>

      {/* Botón para agregar el juego, deshabilitado si faltan campos */}
      <button
        className="add-button"
        onClick={handleAddGame}
        disabled={buttonIsDisabled}
      >
        Agregar Juego
      </button>
    </div>
  );
};

// Exporta el componente AddGame como el componente predeterminado
export default AddGame;
