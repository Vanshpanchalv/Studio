import DSC02744 from '../assets/images/DSC02744.jpg';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about-section mt-5">
            <div className='margin'></div>
            <Row className="text-center mb-4">
                <Col>
                    <h1 className="display-4 fw-bold">A Sanctuary for Dreamers</h1>
                    <p className="lead">
                    Behind the lenses, we're a close-knit family, a team that thrives on the infectious energy of weddings. Every click is an invitation to join in the celebration, and every photograph is a brushstroke on the canvas of your special day. We don't just capture moments; we forge friendships, weaving bonds that linger long after the confetti has settled.

We blend our boundless creativity and individual talents to capture every cherished moment, from the grand and glamorous to the heartwarming and silly. Each wedding we photograph reinforces our unwavering faith 
in the enduring power of love.

Our work isn't just a profession; it's our crazy dream, and our love for it shines through every frame we capture. We're here to turn your love story into a timeless masterpiece. Here's to a decade of love, laughter, and countless more tales waiting to be told. Cheers to us, to you, and to love everlasting.
                    </p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={6} className="text-center mb-4 mb-md-0">
                    <Image 
                        src={DSC02744}  // Use curly braces here to access the imported image variable
                        rounded 
                        fluid 
                        alt="Our team" 
                    />
                </Col>
                <Col md={6}>
                    <p>
                    Sachin, a film graduate, doesn't just capture moments; he breathes life into them. His lens weaves emotional narratives, freezing time in cinematic beauty. Beyond skill, his love for travel and music adds an intimate, soulful touch. Knottingbells isn't just a company; it's a journey of emotions, making each frame a heartfelt chapter in the timeless stories he passionately tells.

- Sachin Patidar | Co-founder
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
