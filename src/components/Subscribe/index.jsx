import React from "react";
import { Container, Form, Section, SubscribeContent } from "./Subscribe.style";

function Subscribe() {
  return (
    <Section>
      <Container>
        <SubscribeContent>
          <h2 className="title">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h2>
          <Form>
            <input
              type="text"
              className="form-input"
              placeholder="Your Email"
            />
            <button className="form-btn">Subscribe</button>
          </Form>
        </SubscribeContent>
      </Container>
    </Section>
  );
}

export default Subscribe;
