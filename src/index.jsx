import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Row, Col } from 'react-bootstrap';
import Map from './components/map';
import Flats from './components/flats';
import flats from './components/data/flats';

import '../assets/stylesheets/application.scss';

function App() {
  const [selectedFlat, setSelectedFlat] = useState(null);
  const changeFocus = function () {
    const flat = this;
    console.log(flat);
    setSelectedFlat(flat);
  };

  return (
    <div className="container">
      <Row>
        <Col lg={7}>
          <Flats
            flats={flats}
            selectedFlat={selectedFlat}
            changeFocus={changeFocus}
          />
        </Col>
        <Col lg={5}>
          <Map selectedFlat={selectedFlat} />
        </Col>
      </Row>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
