import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";

function App() {
  let cartItems = [
    {
      name: "SDE",
      id: 1,
      price: 1000000,
      available: 1,
      vendor: "Examroom",
      category: "Technical",
      image:
        "https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160701040/59262579-avatar-hombre-de-negocios-con-traje-y-corbata-sobre-fondo-aislado-concepto-de-negocio-ilustraci%C3%B3n-ve.jpg?ver=6",
    },
    {
      name: "Manager",
      id: 2,
      price: 5000000,
      available: 1,
      category: "Technical",
      vendor: "Examroom",
      image:
        "https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160701040/59262579-avatar-hombre-de-negocios-con-traje-y-corbata-sobre-fondo-aislado-concepto-de-negocio-ilustraci%C3%B3n-ve.jpg?ver=6",
    },
    {
      name: "Associate",
      id: 3,
      price: 2000000,
      available: 1,
      category: "Technical",
      vendor: "Examroom",
      image:
        "https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160701040/59262579-avatar-hombre-de-negocios-con-traje-y-corbata-sobre-fondo-aislado-concepto-de-negocio-ilustraci%C3%B3n-ve.jpg?ver=6",
    },
    {
      name: "HR",
      id: 4,
      price: 250000,
      available: 1,
      vendor: "Examroom",
      category: "Accounts",
      image:
        "https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160701040/59262579-avatar-hombre-de-negocios-con-traje-y-corbata-sobre-fondo-aislado-concepto-de-negocio-ilustraci%C3%B3n-ve.jpg?ver=6",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home cartItems={cartItems} />} />
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
