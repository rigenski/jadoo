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
            <h4 className="title">Easy and Fast</h4>
            <h1 className="desc">Book Your Next Trip in 3 easy Steps</h1>
          </Desc>
        </TestimonialsContent>
      </Container>
    </Section>
  );
}

export default Testimonials;
