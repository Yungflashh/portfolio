import aboutme from '/src/assets/img/about-me.jpeg'
import experience from '/src/assets/icons/icons8-experience.gif'
import arrow from '/src/assets/icons/icons8-down-arrow.gif'


function About() {
    return (
        <>
            <section id="about">
                {/* <!-- text-p1 --> */}
                <p class="section__text__p1">Get To Know More</p>
                {/* <!-- mytitle --> */}
                <h1 class="title">About Me</h1>

                {/* <!-- article-container --> */}
                <div class="section-container">

                    {/* <!-- mypic --> */}
                    <div class="section__pic-container">
                        <img src={aboutme} alt="Profile picture" class="about-pic" />
                    </div>

                    {/* <!-- myabout --> */}
                    <div class="about-details-container">

                        {/* <!-- myabout-containers --> */}
                        <div class="about-containers">

                            {/* <!-- mydetails-container --> */}
                            <div class="details-container">
                                <img src={experience} alt="Experience icon" class="icon" />
                                <h3>Experience</h3>
                                <p>1+ years </p><br />Technical Writing
                            </div>

                            {/* <!-- mydetails-container --> */}
                            <div class="details-container">
                                <img src={experience} alt="Education icon" class="icon" />
                                <h3>Experience</h3>
                                <p>6month </p> <br />Software development
                            </div>
                        </div>

                        {/* <!-- mytext-container --> */}
                        <div class="text-container">
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
                <img src={arrow} alt="Arrow icon" class="icon arrow"
                />
            </section>
        </>
    )
}

export default About;

{/*onclick="location.href='#experience'" */ }







