import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Momos",
    ingredients: "Served with Spicy Red Chutney",
    price: 35,
    photoName: "Momos.png",
    soldOut: false,
  },
  {
    name: "Aloo Tikki",
    ingredients: "Topped with Chutneys",
    price: 30,
    photoName: "Tikki.png",
    soldOut: false,
  },
  {
    name: "Spring Roll",
    ingredients: "Crispy Golden Shell",
    price: 35,
    photoName: "Roll.png",
    soldOut: false,
  },
  {
    name: "Chowmein",
    ingredients: "Spicy, Saucy & Addictive",
    price: 60,
    photoName: "Chowmein.png",
    soldOut: true,
  },
  {
    name: "Samosa",
    ingredients: "Crunchy outside & Masala inside",
    price: 10,
    photoName: "Samosa.png",
    soldOut: true,
  },
  {
    name: "Pav Bhaji",
    ingredients: "Cooked in buttur",
    price: 30,
    photoName: "Pav.png",
    soldOut: false,
  },
  {
    name: "Masal Chai",
    ingredients: " Strong, Milky & Masala ",
    price: 15,
    photoName: "Chai.png",
    soldOut: false,
  },
  {
    name: "Lassi",
    ingredients: "Flavored with Cardamom & Rose Essence",
    price: 30,
    photoName: "Lassi.png",
    soldOut: false,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Menu />
      <Footer />
    </div>
  );
}

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>Nashta</h1>
      <button
        className="toggle-btn"
        onClick={() => setDarkMode((mode) => !mode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

function Menu() {
  const hasPizza = pizzaData.length > 0;
  return (
    <main className="menu">
      <div className="line"></div>
      <h2>OUR MENU</h2>
      {hasPizza ? (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
      ) : (
        <p>Loading menu... please wait.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span className="price"> 
          {pizzaObject.soldOut ? "Sold Out" : <><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff922b"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg> {pizzaObject.price}</>}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHour} closeHours={closeHour} />
      ) : (
        <p>
          Closed now. Visit us between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        We’re open from {openHours}:00 to {closeHours}:00. Come visit or order
        online!
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;
