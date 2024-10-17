import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import Details from "./Views/Details/Details";
import AddPet from "./Views/AddPet/AddPet";

// Define el componente principal de la aplicación
function App() {
  return (
    // BrowserRouter envuelve la aplicación y habilita el enrutamiento basado en el historial del navegador
    <BrowserRouter>
      {/* Routes actúa como un contenedor para los componentes Route */}
      <Routes>
        {/* Define una ruta para el componente Home, que se renderiza en la ruta raíz ("/") */}
        <Route path="/" element={<Home />} />
        {/* Define una ruta para el componente Details, que se renderiza en la ruta "/details/:id" */}
        <Route path="/details/:id" element={<Details />} />
        {/* Define una ruta para el componente AddPet, que se renderiza en la ruta "/addGame" */}
        <Route path="/addPet" element={<AddPet />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporta el componente App como el componente principal de la aplicación
export default App;
