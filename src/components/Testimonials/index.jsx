import React from "react";
import {
  Container,
  Desc,
  Section,
  TestimonialsContent,
} from "./Testimonials.style";

function Testimonials() {
  return (
    <Section>
      <Container>
        <TestimonialsContent>
          <Desc>
            <h4 className="title">TESTIMONIALS</h4>
            <h1 className="desc">What people say about Us.</h1>
          </Desc>
        </TestimonialsContent>
      </Container>
    </Section>
  );
}

export default Testimonials;
