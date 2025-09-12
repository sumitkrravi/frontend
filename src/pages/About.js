import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
    return (
        <div className="container py-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">About Us</h1>
                <p className="lead text-muted">
                    Welcome to <strong>e-Cyber Cafe</strong> — your trusted partner for
                    online digital services like exam applications, certificates,
                    government schemes, and much more.
                </p>
            </div>

            {/* Mission / Vision */}
            <div className="row text-center g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="card-title text-primary">Our Mission</h3>
                            <p className="card-text text-muted">
                                Making digital services accessible to everyone in a fast, simple
                                & secure way, bridging the gap between people and technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="card-title text-success">Our Vision</h3>
                            <p className="card-text text-muted">
                                We envision a world where every individual can easily access
                                government and private services online, without hassle.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="card-title text-warning">Why Choose Us?</h3>
                            <ul className="list-unstyled text-muted">
                                <li>  Fast & Reliable Service</li>
                                <li>  Secure & Trusted Platform</li>
                                <li>  User-friendly Interface</li>
                                <li>  Dedicated Support Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-5">
                <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
                <div className="row g-4">
                    <div className="col-md-4 text-center">
                        <img
                            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757507804/Picsart_25-08-17_15-57-27-783_n5d5uw.png"
                            alt="Founder"
                            className="rounded-circle mb-3"
                            width="150"
                            height="150"
                        />
                        <h5 className="fw-bold">Gajendra Kr Ravidas</h5>
                        <p className="text-muted">Founder & Full Stack Developer</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757510999/Picsart_25-09-10_18-55-53-749_hunawx.png"
                            alt="Co-Founder & Frontend Developer"
                            className="rounded-circle mb-3"
                            width="150"
                            height="150"
                        />
                        <h5 className="fw-bold">Sumit Kr Ravi</h5>
                        <p className="text-muted">Co-Founder & Frontend Developer</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757512141/49_igd85w.png"
                            alt="Support"
                            className="rounded-circle mb-3"
                            width="150"
                            height="150"
                        />
                        <h5 className="fw-bold">Pankaj kr Ravidas</h5>
                        <p className="text-muted">Customer Support</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757512141/49_igd85w.png"
                            alt="Support"
                            className="rounded-circle mb-3"
                            width="150"
                            height="150"
                        />
                        <h5 className="fw-bold">Sumit Kumar</h5>
                        <p className="text-muted">Customer Support</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757512141/49_igd85w.png"
                            alt="Support"
                            className="rounded-circle mb-3"
                            width="150"
                            height="150"
                        />
                        <h5 className="fw-bold">Pawan kr Ravidas</h5>
                        <p className="text-muted">Customer Support</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757512141/49_igd85w.png"
                            alt="Support"
                            className="rounded-circle mb-3"
                            width="150"
                            height="150"
                        />
                        <h5 className="fw-bold">Pankaj kr Ravidas</h5>
                        <p className="text-muted">Customer Support</p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section mt-5">
                <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#answer1"
                            >
                                What services does e-Cyber Cafe provide?
                            </button>
                        </h2>
                        <div
                            id="answer1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                We provide online exam applications, government certificates,
                                ID cards, scheme applications, and much more — all in one place.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#answer2"
                            >
                                Is my data safe on this platform?
                            </button>
                        </h2>
                        <div
                            id="answer2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes. We use secure encryption and privacy measures to keep
                                your data safe at all times.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#answer3"
                            >
                                How can I contact support?
                            </button>
                        </h2>
                        <div
                            id="answer3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                You can contact us via email, phone, or through our website's
                                contact page. Our support team is always ready to help you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
