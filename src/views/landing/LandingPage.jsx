import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';

// reactstrap components
import {Button, Col, Container, Input, InputGroup, Row} from "reactstrap";

// core components
import LandingPageNavbar from "../../components/Navbars/LandingPageNavbar.jsx";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.jsx";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const [firstFocus, setFirstFocus] = useState(false);
    const [lastFocus, setLastFocus] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false, message: '', type: '',
    });
    const navigate = useNavigate();

    const [isPrivacyChecked, setPrivacyIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setPrivacyIsChecked(event.target.checked);
    };

    // Shows alert message for form submission feedback
    const toggleAlert = (message, type) => {
        setAlertInfo({display: true, message, type});

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({display: false, message: '', type: ''});
        }, 5000);
    };

    const {
        control, handleSubmit, reset, formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        const {from_name, user_email, message} = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = {
                from_name, user_email, message, subject: 'new mail'
            };

            // Use emailjs to email contact form data
            await emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAIL_PUBLIC_KEY);

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
            reset({
                from_name: '', user_email: '', message: ''
            });
        }
    };

    const goToPrivacyPolicy = () => {
        navigate("/privacy");
    }

    useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const handleScroll = () => {
            const parallax = document.querySelector('.section-story-bg');
            const scrolled = window.pageYOffset * 2;
            parallax.style.backgroundPositionY = `-${scrolled/12}px`; // Adjust the multiplier for desired speed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const sectionStoryText = document.querySelector('#section-story-text-1');
        const sectionStoryText2 = document.querySelector('#section-story-text-2');
        const sectionStoryText3 = document.querySelector('#section-story-text-3');
        if (sectionStoryText) {
            observer.observe(sectionStoryText);
        }
        if (sectionStoryText2) {
            observer.observe(sectionStoryText2);
        }
        if (sectionStoryText3) {
            observer.observe(sectionStoryText3);
        }

        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<>
        <LandingPageNavbar/>
        <div className="wrapper">
            <LandingPageHeader/>
            <div className="section section-about-us">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="10">
                            <h2 className="title">Sustainable Design made with passion and creativity</h2>
                            <h5 className="description">
                                At Atelier JR, we craft unique, handmade wooden decorative objects like lamps, vases,
                                and bowls, blending flowing organic shapes with modern geometric design.
                            </h5>
                            <h5 className="description">
                                Each piece is meticulously made from locally sourced, sustainably harvested wood,
                                ensuring that no trees are cut solely for production. <br/> <br/>
                                Our collections are created in small batches, making each design as special as the
                                wood it’s carved from. We aim to provide beautifully crafted pieces that bring a
                                touch of nature and artistry into any space.
                            </h5>
                        </Col>
                    </Row>
                </Container>
                <div className="separator separator-primary"></div>
                <div className="section-story-overview">
                    <Row>
                        <Col className="section-story-bg bg-center bg-contain" style={{
                            backgroundImage: "url(/img/hang-lamp1.png)"
                        }}>
                        </Col>
                    </Row>
                    <Container>

                        <Row className="section-story-0 m-1">
                            <Col md={7} id="section-story-text-1">
                                <h3>
                                    A brief history:
                                </h3>
                                <p>
                                    Born in Germany, Johannes Roeder moved to Antwerp to pursue his interest in fine
                                    woodworking and instrument building.
                                    Since then, he has gathered extensive experience as a carpenter, furniture
                                    restorer, and guitar builder, among other roles.
                                    This has led him to build a diverse portfolio and a strong background in
                                    developing and creating his own designs, always striving to push his boundaries.
                                </p>
                            </Col>

                        </Row>
                    </Container>

                    <Row className="section-story-1 bg-center bg-cover">
                        <Col lg={7} className="section-story-1-left bg-center bg-cover" style={{
                            backgroundImage: "url(/img/johannes-side.jpg)"
                        }}>
                            <Col md={{span: 5, offset: 5}} className="text-right" id="section-story-text-2">
                                <p>
                                    Through his extensive experience working with and for creative people, he has
                                    developed a keen eye and unique perspective on shape and design. As a craftsman,
                                    he loves to try new ideas and think of innovative ways to achieve them.
                                </p>
                            </Col>
                            {/*<p className="blockquote blockquote-info">*/}
                            {/*    "I'm on a constant hunt for inspiration and perfection. Always reflecting on*/}
                            {/*    previous attempts I strive to make my next piece better then the*/}
                            {/*    last" <br></br>*/}
                            {/*    <br></br>*/}
                            {/*    <small>- JOHANNES</small>*/}
                            {/*</p>*/}
                        </Col>
                        <Col lg={5} className="section-story-1-right bg-center bg-cover justify-content-end" style={{
                            backgroundImage: "url(/img/box-closeup.jpg)"
                        }}>
                            <Row className="align-items-end h-100">
                                <Col md={8} id="section-story-text-3">
                                    <p>
                                        Johannes loves to work with his hands. With his attention to detail paired with
                                        more then 15 years of experience he makes sure that every piece is made to
                                        perfection.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="section section-team text-center">
                <Container>
                    <h2 className="title">Meet the team</h2>
                    <div className="team">
                        <Row>
                            <Col md="6">
                                <div className="team-player">
                                    <img
                                        alt="Johannes, founder and maker of Atelier JR, looking at the camera"
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("../../assets/img/johannes-2.jpg")}
                                    ></img>
                                    <h4 className="title">Johannes Roeder</h4>
                                    <p className="category text-info">Founder</p>
                                    <p className="description">
                                        Johannes is the founder of JR Woodworks and the creative mind behind all our
                                        projects.
                                        With years of experience in all facets of woodworking, his craftsmanship
                                        ensures unique and high-quality products.
                                    </p>
                                    {/*<Button*/}
                                    {/*    className="btn-icon btn-round"*/}
                                    {/*    color="info"*/}
                                    {/*    href="#pablo"*/}
                                    {/*    onClick={(e) => e.preventDefault()}*/}
                                    {/*>*/}
                                    {/*    <i className="fab fa-twitter"></i>*/}
                                    {/*</Button>*/}
                                    {/*<Button*/}
                                    {/*    className="btn-icon btn-round"*/}
                                    {/*    color="info"*/}
                                    {/*    href="#pablo"*/}
                                    {/*    onClick={(e) => e.preventDefault()}*/}
                                    {/*>*/}
                                    {/*    <i className="fab fa-instagram"></i>*/}
                                    {/*</Button>*/}
                                    {/*<Button*/}
                                    {/*    className="btn-icon btn-round"*/}
                                    {/*    color="info"*/}
                                    {/*    href="#pablo"*/}
                                    {/*    onClick={(e) => e.preventDefault()}*/}
                                    {/*>*/}
                                    {/*    <i className="fab fa-facebook-square"></i>*/}
                                    {/*</Button>*/}
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="team-player">
                                    <img
                                        alt="Wim, strategic and commercial expert at JR Design, looking at the camera"
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("../../assets/img/wim-sq-bnw.png")}
                                    ></img>
                                    <h4 className="title">Wim Vermoezen</h4>
                                    <p className="category text-info">Co-Founder</p>
                                    <p className="description">
                                        Wim focuses on development and distribution.
                                        His strategic vision and commercial flair drive growth and market expansion,
                                        ensuring our products perfectly meet customer needs.
                                    </p>
                                    {/*<Button*/}
                                    {/*    className="btn-icon btn-round"*/}
                                    {/*    color="info"*/}
                                    {/*    href="#pablo"*/}
                                    {/*    onClick={(e) => e.preventDefault()}*/}
                                    {/*>*/}
                                    {/*    <i className="fab fa-twitter"></i>*/}
                                    {/*</Button>*/}
                                    {/*<Button*/}
                                    {/*    className="btn-icon btn-round"*/}
                                    {/*    color="info"*/}
                                    {/*    href="#pablo"*/}
                                    {/*    onClick={(e) => e.preventDefault()}*/}
                                    {/*>*/}
                                    {/*    <i className="fab fa-linkedin"></i>*/}
                                    {/*</Button>*/}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="section section-contact-us text-center">
                <Container>
                    <h2 className="title">Want to work with us?</h2>
                    {/*<p className="description">Your project is very important to us.</p>*/}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                                {alertInfo.display && (<span>{alertInfo.message}</span>)}
                                <InputGroup className={"input-lg" + (firstFocus ? " input-group-focus" : "")}>
                                    <Controller
                                        name="from_name"
                                        control={control}
                                        rules={{
                                            required: 'Please enter your name', maxLength: {
                                                value: 30, message: 'Please use 30 characters or less',
                                            },
                                        }}
                                        render={({field}) => (<Input
                                            placeholder={errors.from_name ? errors.from_name.message : "First name..."}
                                            type="text"
                                            invalid={errors.from_name}
                                            disabled={disabled}
                                            {...field}
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                        />)}
                                    />
                                </InputGroup>

                                <InputGroup className={"input-lg" + (lastFocus ? " input-group-focus" : "")}>
                                    <Controller
                                        name="user_email"
                                        control={control}
                                        rules={{
                                            required: 'Please enter a valid email address', pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: 'Please enter a valid email address',
                                            },
                                        }}
                                        render={({field}) => (<Input
                                            placeholder={errors.user_email ? errors.user_email.message : "Email..."}
                                            type="email"
                                            invalid={errors.user_email}
                                            disabled={disabled}
                                            {...field}
                                            onFocus={() => setLastFocus(true)}
                                            onBlur={() => setLastFocus(false)}
                                        />)}
                                    />
                                </InputGroup>

                                <div className="textarea-container">
                                    <Controller
                                        name="message"
                                        control={control}
                                        rules={{
                                            required: 'Please enter a message',
                                        }}
                                        render={({field}) => (<Input
                                            cols="80"
                                            placeholder="Type a message..."
                                            disabled={disabled}
                                            rows="4"
                                            type="textarea"
                                            {...field}
                                        />)}
                                    />
                                    {errors.message && (
                                        <span className='error-message'>{errors.message.message}</span>)}
                                </div>
                                <p className="subtext">We value your privacy. Your name and email address will only be
                                    used to respond to your inquiry.
                                    For more information, please read our <a href="/privacy"
                                                                             onClick={goToPrivacyPolicy}>Privacy
                                        Policy</a>.</p>
                                <label>
                                    <Input
                                        type="checkbox"
                                        checked={isPrivacyChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    “I consent to the processing of my personal data in accordance with the Privacy
                                    Policy.” (required before submission)
                                </label>
                                <div className="send-button">
                                    <Button
                                        block
                                        className="btn-round"
                                        color="info"
                                        type='submit'
                                        size="lg"
                                        disabled={!isPrivacyChecked}
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
            <DefaultFooter/>
        </div>
    </>);
}

export default LandingPage;
