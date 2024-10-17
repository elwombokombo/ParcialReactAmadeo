import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Encuentra el elemento con el ID 'root' en el HTML y lo usa como el punto de entrada para la aplicación React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza el contenido dentro del elemento 'root'
root.render(
  // React.StrictMode es un componente que ayuda a identificar problemas potenciales en la aplicación
  // Solo se activa en modo desarrollo y no afecta la producción
  <React.StrictMode>
    {/* Renderiza el componente App, que es el componente principal de la aplicación */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
