import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/shopping/Store";
import { Navbar } from "./components/shopping/Navbar";
import { CartProvider } from "./context/shopping/CartContext";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
    </CartProvider>
  );
};

export default App;
