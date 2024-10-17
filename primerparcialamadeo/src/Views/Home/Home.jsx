import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";

// Define una función asíncrona para obtener todos los pets desde la API
const getPets = async () => {
  const petsFetch = await fetch("http://localhost:3005/api/pets");
  const pets = await petsFetch.json();
  return pets;
};

// Define el componente Home
const Home = () => {
  // Define un estado local para almacenar los datos de las mascotas
  const [pets, setPets] = useState([]);

  // Obtiene la función de navegación
  const navigate = useNavigate();

  // Define una función para actualizar los datos de las mascotas
  const refreshPets = async () => {
    // Obtiene los mascotas actualizados desde la API
    const updatedPets = await getPets();
    // Actualiza el estado con los datos de las mascotas
    setPets(updatedPets);
  };

  // Usa useEffect para obtener los datos de las mascotas cuando el componente se monta
  useEffect(() => {
    refreshPets();
  }, []);

  // Maneja el clic en el botón para agregar un nueva mascota
  const handleAddPetClick = () => {
    // Navega a la ruta para agregar un nueva mascota
    navigate("/addPet");
  };

  return (
    <div>
      <div className="home-name-wrapp">
        <h1>Rescate Animal</h1>
        <button onClick={handleAddPetClick} className="add-pet-button">
          Agregar mascota
        </button>
      </div>
      {/* Renderiza una cuadrícula de tarjetas si hay mascotas disponibles */}
      {pets.length ? (
        <div className="home-grid-cards">
          {pets.map((pet) => (
            <Card
              key={pet.id}
              name={pet.name}
              id={pet.id}
              age={pet.age}
              photo={pet.photo}
              refreshPets={refreshPets}
            />
          ))}
        </div>
      ) : (
        // Muestra un mensaje si no hay mascotas para mostrar
        <div className="home-no-pets">No hay mascotas para mostrar</div>
      )}
    </div>
  );
};

// Exporta el componente Home como el componente predeterminado
export default Home;
