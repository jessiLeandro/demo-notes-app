import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./App.css";
import Routes from "./Routes";
// import { LinkContainer } from "react-router-bootstrap";
// function App() {
//   return (
//     <div className="App container py-3">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <LinkContainer to="/">
//           <Navbar.Brand className="font-weight-bold text-muted">
//             Scratch
//           </Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav activeKey={window.location.pathname}>
//             <LinkContainer to="/signup">
//               <Nav.Link>Signup</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Nav.Link>Login</Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
          <Navbar.Brand href="/" className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;