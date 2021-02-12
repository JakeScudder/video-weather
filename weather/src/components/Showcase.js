import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";

import Header from "./Header";
import Social from "./Social";
import Weather from "./Weather";
import ocean from "../ocean.mp4";

const Showcase = ({ history }) => {
  const [city, setCity] = useState("Charlottesville");
  const [state, setState] = useState("VA");
  const [search, setSearch] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(true);
    history.push(`/search/${city}-${state}`);
    setTimeout(() => {
      setSearch(false);
    }, 3000);
  };

  return (
    <div className="showcase">
      <Header />
      <video class="video" muted loop autoPlay>
        <source src={ocean} type="video/mp4" />
      </video>
      <div class="overlay"></div>

      <Col className="search-forecast-div">
        <Row className="search-container">
          <div class="text">
            <div className="greeting-h2-div">
              <h2>What's the weather like today?</h2>
            </div>

            <div class="form-div">
              <Form onSubmit={submitHandler} inline>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Denver"
                        className="city-input"></Form.Control>
                    </Col>
                    <Col>
                      <Form.Label className="mr-2">State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        onChange={(e) => setState(e.target.value)}
                        placeholder="CO"
                        className="mr-sm-2 ml-sm-5"></Form.Control>
                    </Col>
                  </Row>
                  <Row className="social-submit">
                    <Col style={{ width: "100px" }}>
                      <Social />
                    </Col>
                    <Col>
                      <Button
                        type="submit"
                        variant="outline-success"
                        className="submit-button p-2">
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </div>
          </div>
        </Row>
        <Row className="weather">
          <Weather city={city} state={state} search={search} />
        </Row>
      </Col>
    </div>
  );
};

export default Showcase;
