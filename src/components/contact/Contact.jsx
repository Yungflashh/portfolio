


function Contact(){
    return (
        <>
        <section id="contact">
            {/* <!-- text-p1 --> */}
            <p className="section__text__p1">Get in Touch</p>
            {/* <!-- mytitle --> */}
            <h1 className="title">Contact Me</h1>
            {/* <!-- contact-container --> */}
            <div className="contact-info-upper-container">
                {/* <!-- contact-info --> */}
                <div className="contact-info-container">
                    <img src="src/assets/icons/icons8-email.gif" alt="Email icon"
                        className="icon contact-icon email-icon" />
                    <p><a href="mailto:adedamolacopy@gmail.com">Israel Email</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="src/assets/icons/icons8-linkedin.gif" alt="LinkedIn icon"
                        className="icon contact-icon" />
                    <p><a href="https://www.linkedin.com/in/israel-adedamola-606373139/'">LinkedIn</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="src/assets/icons/icons8-github.gif" alt="Github icon" className="icon contact-icon" />
                    <p><a href="https://www.github.com/KamiNation">Github</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="src/assets/icons/icons8-twitter.gif" alt="Github icon" className="icon contact-icon" />
                    <p><a href="https://www.x.com/kamii_ai">X</a></p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;