import React, {useEffect} from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components
import LandingPageNavbar from "../../components/Navbars/LandingPageNavbar.jsx";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.jsx";

function LandingPage() {
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
    return (<>
        <LandingPageNavbar/>
        <div className="wrapper">
            <LandingPageHeader/>
            <div className="section">
                <Container>

                    <h1>Privacy Policy</h1>

                    <small>Last updated: 9 December 2024</small>

                    <p>At JR Design, we value your privacy and are committed to protecting your personal data. This
                        Privacy Policy explains how we collect, use, and protect the information you provide through our
                        website’s contact form.</p>

                    <h2>Who We Are</h2>
                    <ul>
                        <li>JR Design</li>
                        <li>Lodewijk Van Berckenlaan 366, 2140 Borgerhout</li>
                        <li>atelier@johannesroeder.com</li>
                        <li>https://www.johannesroeder.com</li>
                    </ul>

                    <h2>What Data We Collect</h2>

                    <p>When you use our contact form, we collect the following information:</p>
                    <ul>
                        <li>First Name: To personalize our response to your inquiry.</li>
                        <li>Email Address: To contact you regarding your inquiry.</li>
                        <li>Message: The details of your inquiry to help us provide an appropriate response.</li>
                    </ul>

                    <p>We do not collect any additional data or track users outside the scope of this form.</p>

                    <h2>Why We Collect Your Data</h2>
                    <p>
                        We use the information you provide solely to respond to your inquiry. We will not use your data
                        for any other purpose, such as marketing, without your explicit consent.
                    </p>

                    <h2>How We Protect Your Data</h2>

                    <p>

                        We take appropriate technical and organizational measures to ensure your personal data is
                        secure.
                        This includes:
                    </p>
                    <ul>
                        <li>Encrypting data transmission using HTTPS.</li>
                        <li>Storing data securely on our servers.</li>
                        <li>Limiting access to your data only to those who need it to handle your inquiry.</li>
                    </ul>


                    <h2>How Long We Keep Your Data</h2>

                    <p>
                        We retain the information you provide for up to [specify timeframe, e.g., 6 months] after
                        responding to your inquiry. After this period, your data will be securely deleted.
                    </p>
                    <h2>Your Rights</h2>
                    <p>
                        Under GDPR, you have the following rights regarding your personal data:
                    </p>
                    <ol>
                        <li>
                            Access: You can request a copy of the data we hold about you.
                        </li>
                        <li>
                            Correction: You can ask us to correct inaccurate or incomplete data.
                        </li>
                        <li>
                            Deletion: You can request that we delete your data.
                        </li>
                        <li>
                            Objection: You can object to how your data is being used.
                        </li>
                        <li>
                            Withdrawal of Consent: If you have given consent for us to process your data, you can
                            withdraw it at any time.
                        </li>
                    </ol>
                    <p>
                        To exercise these rights, contact us at [Your Email Address for Privacy Inquiries].
                    </p>

                    <h2>Sharing Your Data</h2>
                    <p>
                        We do not share, sell, or transfer your personal data to third parties unless required to do so
                        by
                        law.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Our website does not currently use cookies to track or store user data. If this changes in the
                        future, we will update this Privacy Policy and request your consent before implementing cookies.
                    </p>
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page
                        with an
                        updated “Last Updated” date. We encourage you to review this page periodically to stay informed.
                    </p>
                    <p>
                        By submitting the contact form on this website, you confirm that you have read and understood
                        this
                        Privacy Policy.
                    </p>
                    <p>
                        For any questions or concerns about your data, please contact us at [Your Email Address].
                    </p>
                </Container>
            </div>
            <DefaultFooter/>
        </div>
    </>);
}

export default LandingPage;
