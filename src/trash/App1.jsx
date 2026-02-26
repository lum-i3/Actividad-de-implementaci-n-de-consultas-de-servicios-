import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [IsLoggedIn2, setIsLoggedIn2] = useState(false);

  return (
    <>
      {IsLoggedIn && (
        <Button
          text="Cerrar sesión"
          action={() => {
            alert("Cerrando sesión...");
            setIsLoggedIn(false);
          }}
        />
      )}

      {!IsLoggedIn && (
        <Button
          text="Iniciar sesión"
          action={() => {
            alert("Iniciando sesión...");
            setIsLoggedIn(true);
          }}
        />
      )}

      {/* Ejemplo de ternario */}
      {IsLoggedIn2 ? (
        <Button
          text="Cerrar sesión"
          action={() => {
            alert("Cerrando sesión...");
            setIsLoggedIn2(false);
          }}
        />
      ) : (
        <Button
          text="Iniciar sesión"
          action={() => {
            alert("Iniciando sesión...");
            setIsLoggedIn2(true);
          }}
        />
      )}


      {/* Ejemplo de ternario */}
      {IsLoggedIn2 ? (
        <>
          <p>esta en verdadero</p>
          <p> sss</p>
        </>
      ) : (
        <p>esta en falso</p>
      )}
    </>
  );
}

export default App;
