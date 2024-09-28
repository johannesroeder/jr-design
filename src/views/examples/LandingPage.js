import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import LandingPageNavbar from "components/Navbars/LandingPageNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [alertInfo, setAlertInfo] = React.useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <LandingPageNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-left" md="10">
                <h2 className="title">Sustainable Design made with passion and creativity</h2>
                <h5 className="description">
                  At JR Design, we craft unique, handmade wooden decorative objects like lamps, vases, and bowls, blending flowing organic shapes with modern geometric design.
                </h5>
                <h5 className="description">
                  Each piece is meticulously made from locally sourced, sustainably harvested wood, ensuring that no trees are cut solely for production. <br /> <br />
                  Our collections are created in small batches, making each design as special as the wood it’s carved from. We aim to provide beautifully crafted pieces that bring a touch of nature and artistry into any space.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/vase.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "I'm on a constant hunt for inspiration and perfection. Always reflecting on previous attempts I strive to make my next piece better then the last" <br></br>
                      <br></br>
                      <small>- JOHANNES</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage: "url(" + require("assets/img/johannes-side.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/candles.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    A brief history:
                  </h3>
                  <p>
                    Born in Germany, Johannes Roeder moved to Antwerp to pursue his interest in fine woodworking and instrument building.
                    Since then, he has gathered extensive experience as a carpenter, furniture restorer, and guitar builder, among other roles.
                    This has led him to build a diverse portfolio and a strong background in developing and creating his own designs, always striving to push his boundaries.
                  </p>
                  <p>
                    Through his extensive experience working with and for creative people, he has developed a keen eye and unique perspective on shape and design. As a craftsman, he loves to try new ideas and think of innovative ways to achieve them.
                  </p>
                  <p>
                    Johannes loves to work with his hands. With his attention to detail paired with more then 15 years of experience he makes sure that every piece is made to perfection.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Meet the team</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/johannes-2.jpg")}
                    ></img>
                    <h4 className="title">Johannes Roeder</h4>
                    <p className="category text-info">Founder</p>
                    <p className="description">
                      Johannes is the founder of JR Woodworks and the creative mind behind all our projects.
                      With years of experience in all facets of woodworking, his craftsmanship ensures unique and high-quality products.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/wim-sq.png")}
                    ></img>
                    <h4 className="title">Wim Vermoezen</h4>
                    <p className="category text-info">Co-Founder</p>
                    <p className="description">
                      Wim focuses on development and distribution.
                      His strategic vision and commercial flair drive growth and market expansion,
                      ensuring our products perfectly meet customer needs.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                  <InputGroup
                    className={
                      "input-lg" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                    {errors.email && (
                      <span className='errorMessage'>
                        Please enter a valid email address
                      </span>
                    )}
                  </InputGroup>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name='message'
                      {...register('message', {
                        required: true,
                      })}
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"

                    ></Input>
                    {errors.message && (
                      <span className='errorMessage'>
                        Please enter a message
                      </span>
                    )}
                  </div>
                  <div className="send-button">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
