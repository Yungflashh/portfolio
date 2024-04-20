import twitter from '/src/assets/icons/icons8-twitter.gif'
import git from '/src/assets/icons/icons8-github.gif'
import linkedin from '/src/assets/icons/icons8-linkedin.gif'
import email from '/src/assets/icons/icons8-email.gif'


function Contact() {
    const linkedinClickHandle = () => {
        location.href = 'https://www.linkedin.com/in/israel-adedamola-606373139/'
    }

    const gitClickHandle = () => {
        location.href = 'https://github.com/KamiNation'
    }

    const xClickHandle = () => {
        location.href = 'https://www.x.com/kamii_ai'
    }

    const mailClickHandle = () => {
        location.href = "mailto:adedamolacopy@gmail.com"
    }

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
                        <img src={email} alt="Email icon"
                            className="icon contact-icon email-icon" />
                        <div onClick={mailClickHandle}>Israel's Email</div>

                    </div>
                    <div className="contact-info-container">
                        <img src={linkedin} alt="LinkedIn icon"
                            className="icon contact-icon" />
                        <div onClick={linkedinClickHandle}>LinkedIn</div>
                    </div>
                    <div className="contact-info-container">
                        <img src={git} alt="Github icon" className="icon contact-icon" />
                        <div onClick={gitClickHandle}>Github</div>

                    </div>
                    <div className="contact-info-container">
                        <img src={twitter} alt="Github icon" className="icon contact-icon" />
                        <div onClick={xClickHandle}>X</div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;