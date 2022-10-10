import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About } from "./pages/shopping/About";
import { Home } from "./pages/shopping/Home";
import { Store } from "./pages/shopping/Store";
import { Navbar } from "./components/shopping/Navbar";
import { CartProvider } from "./context/shopping/CartContext";

interface ITodoAppProps {}

const TodoApp: React.FunctionComponent<ITodoAppProps> = (props) => {
  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </CartProvider>
  );
};

export default TodoApp;
