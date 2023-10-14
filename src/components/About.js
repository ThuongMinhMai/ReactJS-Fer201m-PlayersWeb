import React from "react";
import {
  Button,
  Container,
  Icon,
  Select,
  TextInput,
  Textarea,
} from "react-materialize";

function About() {
  return (
    <Container className="about-container">
      <div className="about">
        {<Icon>group</Icon>} <p className="about-text">THE TEAM</p>
      </div>
      <hr />
      <p className="about-text">
        Here you can see the player card, which consists 50 soccer football
        players frm all over the world.
      </p>
      <hr />

      <div className="about">
        {" "}
        {<Icon>location_on</Icon>} <p className="about-text">Nation</p>
      </div>
      <hr />
      <div className="about">
        {" "}
        {<Icon>whatshot</Icon>} <p className="about-text">Daily news</p>
      </div>
    </Container>
  );
}

export default About;
