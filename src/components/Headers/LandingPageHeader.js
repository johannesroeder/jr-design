import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/banner-me.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>

        <div className="content-center">

          <Container>
            <div className="text-center">
              <div
                className="page-header-logo"
                style={{
                  backgroundImage: "url(" + require("assets/img/logo-plain-big-white.png") + ")"
                }}
              ></div>
            </div>
            <h3 className="title">Design & Craftsmanship</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
