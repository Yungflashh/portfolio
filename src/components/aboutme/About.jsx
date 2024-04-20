import aboutme from '/src/assets/img/about-me.jpeg'
import experience from '/src/assets/icons/icons8-experience.gif'
import arrow from '/src/assets/icons/icons8-down-arrow.gif'





function About() {

    const arrowClickHandle = () => {
        location.href='#experience'
    }


    return (
        <>
            <section id="about">
                {/* <!-- text-p1 --> */}
                <p className="section__text__p1">Get To Know More</p>
                {/* <!-- mytitle --> */}
                <h1 className="title">About Me</h1>

                {/* <!-- article-container --> */}
                <div className="section-container">

                    {/* <!-- mypic --> */}
                    <div className="section__pic-container">
                        <img src={aboutme} alt="Profile picture" className="about-pic" />
                    </div>

                    {/* <!-- myabout --> */}
                    <div className="about-details-container">

                        {/* <!-- myabout-containers --> */}
                        <div className="about-containers">

                            {/* <!-- mydetails-container --> */}
                            <div className="details-container">
                                <img src={experience} alt="Experience icon" className="icon" />
                                <h3>Experience</h3>
                                <p>1+ years </p><br />Technical Writing
                            </div>

                            {/* <!-- mydetails-container --> */}
                            <div className="details-container">
                                <img src={experience} alt="Education icon" className="icon" />
                                <h3>Experience</h3>
                                <p>6month </p> <br />Software development
                            </div>
                        </div>

                        {/* <!-- mytext-container --> */}
                        <div className="text-container">
                            <p>
                                Proficient in clear communication,
                                analytical thinking, and technical
                                documentation. Leveraging strong
                                research skills and attention to
                                detail to excel in problem-solving
                                and code development. Passionate about
                                combining creativity with logic to
                                create innovative software solutions.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- myarrow --> */}
                <img src={arrow} alt="Arrow icon" className="icon arrow"
                onClick={arrowClickHandle}
                />
            </section>
        </>
    )
}

export default About;


