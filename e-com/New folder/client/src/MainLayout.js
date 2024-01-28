// MainLayout.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Admin/Navbar/Sidebar";

const MainLayout = ({ routes }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light">
          <Sidebar routes={routes} />
        </Col>
        <Col md={10} className="p-4">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.route}
                element={<route.component />} // Note the change here
              />
            ))}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
