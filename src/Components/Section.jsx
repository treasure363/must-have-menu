import React from 'react';
import { Container } from 'react-bootstrap';

function Section({ title, content }) {
  return (
    <Container className="my-5">
      <h2>{title}</h2>
      <p>{content}</p>
    </Container>
  );
}

export default Section;
