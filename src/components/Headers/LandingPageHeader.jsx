import React from "react";

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
            backgroundImage: "url(" + require("assets/img/me-turning-banner.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>

        <div className="content-center">

          <div>
            <div className="text-center">
              <h4 className="title">Atelier</h4>
              <div className="header-logo-container">
                {/*<p>Johannes</p>*/}
                <div
                  className="page-header-logo"
                  style={{
                    backgroundImage: "url(" + require("assets/img/logo-plain-big-white.png") + ")"
                  }}
                ></div>
                {/*<p>Roeder</p>*/}
              </div>
            </div>
            <h2 className="title"><span className="primary">D</span>esign & <span className="primary">C</span>raftsmanship</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
