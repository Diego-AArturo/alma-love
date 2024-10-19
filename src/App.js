import React from "react";
import "./App.css";

const PRIMARY_COLOR = "#E0E0E0";
const TEXT_COLOR = "#543427";

// Componente para un contenedor
const Container = ({ children, style, className }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

// Componente para la tarjeta de postres
const DessertCard = ({ title, description, price }) => (
  <Container
    className="dessert-card"
    style={{
      backgroundColor: PRIMARY_COLOR,
      borderRadius: "10px",
      padding: "20px",
      minHeight: "153px",
      flex: 1,
      margin: "5px",
    }}
  >
    <h3>{title}</h3>
    {description && <p>{description}</p>} {/* Renderiza la descripción directamente */}
    <strong>$B {price}</strong>
  </Container>
);





// Componente para la cabecera
const Header = () => (
  <div className="header" style={{ backgroundColor: TEXT_COLOR }}>
    <button className="header-btn">Contáctanos</button>
    <div className="header-divider" />
    <button className="header-btn">Recomendados</button>
  </div>
);

// Componente para la imagen de fondo
const BackgroundImage = ({ src }) => (
  <div className="background-image" style={{ backgroundImage: `url(${src})` }} />
);

// Componente principal
const App = () => {
  const imagePath =
    "https://dvzwo3mu4ucsq.cloudfront.net/images/restaurants/unjardinenelcielo/4bd7e138-e08f-400e-b33b-5c139eae40fb.webp";
  const historialImagePath =
    "https://dvzwo3mu4ucsq.cloudfront.net/images/restaurants/unjardinenelcielo/d97e8e2a-2376-4974-bc8d-b62d94f3ad84.webp";

  return (
    <div className="app">
      <BackgroundImage src={imagePath} />
      <div className="main-container">
        <Header />
        <div className="historial-form" style={{ backgroundImage: `url(${historialImagePath})` }} />
        <div className="button-row">
        <DessertCard 
          title="Cielo estrellado" 
          description={`¿QUIERES experimentar una explosión de sabor?\n\nNutella, besos dulces`} 
          price="29.900" 
        />
          <DessertCard title="Pizza Nutella" description={"SER dulce y deli es lo que la caracteriza. \n\n Fresas, masmelos, abrazos"} price="34.900" />
        </div>
        <div className="button-row">
          <DessertCard title="Rock empalagoso" description={"Siente el paladar en MI mayor. \n\n Fresa inteligente, chocolate atrevido, nutella sensata"} price="29.900" />
          <DessertCard title="Principessa de chocolate" description={"Dulce de la realeza. \n\n NOVIA de mora, ojos de chocolate sincero"} price="34.900" />
        </div>
        <div className="button-row">
          <DessertCard title="Habichuela mágica (Poema que enamora)" description={"Para este punto creo ya te diste cuenta de lo que quiero decir, así como te diste cuenta que este no es el verdadero menú. \n\n Alma, estos 4 meses han sido de otra galaxia, ya te quería como amiga y quería que me quisieras como tal, pero ahora te pregunto: ¿Me quieres como novio?"} price="39.900" />
        </div>
      </div>
    </div>
  );
};

export default App;




