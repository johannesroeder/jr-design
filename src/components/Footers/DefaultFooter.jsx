/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, JR Design{" "}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
