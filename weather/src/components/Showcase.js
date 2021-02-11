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

      <Weather city={city} state={state} search={search} />

      <div class="text">
        <div className="greeting-h2-div">
          <h2>What's the weather like today?</h2>
        </div>

        <div class="button-div">
          <Form onSubmit={submitHandler} inline>
            <Col>
              <Row>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Denver"
                  className="mr-2 ml-sm-5"></Form.Control>
                <Form.Label className="mr-2">State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  onChange={(e) => setState(e.target.value)}
                  placeholder="CO"
                  className="mr-sm-2 ml-sm-5"></Form.Control>
              </Row>
              <Row className="submit-row">
                <Button
                  type="submit"
                  variant="outline-success"
                  className="learn-more p-2">
                  Search
                </Button>
              </Row>
            </Col>
          </Form>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Showcase;
