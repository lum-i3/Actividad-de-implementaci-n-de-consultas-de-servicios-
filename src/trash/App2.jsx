import { useState } from "react";
import Button from "./components/Button";
import "./components/components-styles.css"

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {IsLoggedIn ? (
        <Button
          text="Cerrar sesión"
          action={() => {
            alert("Cerrando sesión...");
            setIsLoggedIn(false);
          }}
          type="primary"
        />
      ) : (
        <Button
          text="Iniciar sesión"
          action={() => {
            alert("Iniciando sesión...");
            setIsLoggedIn(true);
          }}
          type="primary"
        />
      )}


      {/* Ejemplo de ternario */}
      {IsLoggedIn && (
        <>
          <p>esta en verdadero</p>
        </>
      )}

      <Button/>

    </>
  );
}

export default App;
