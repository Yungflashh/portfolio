import certified from '/home/kami/Desktop/portfolio/src/assets/icons/icons8-certified.gif'
import arrow from '/src/assets/icons/icons8-down-arrow.gif'



function Experience() {
    return (
        <>
        <section id="experience">
                {/* <!-- text-p1 --> */}
                <p className="section__text__p1">Explore My</p>
                {/* <!-- mytitle --> */}
                <h1 className="title">Experience</h1>
                {/* <!-- myex-details-container --> */}
                <div className="experience-details-container">
                    {/* <!-- myabout-containers --> */}
                    <div className="about-containers">
                        {/* <!-- mydetails-container --> */}
                        <div className="details-container">
                            {/* <!-- experience-h2-title --> */}
                            <h2 className="experience-sub-title">Software Development</h2>
                            {/* <!-- mysection-container --> */}
                            <div className="article-container">
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>CSS</h3>

                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon" />
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>Typescript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>React</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>Mongo DB</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        {/* <!-- mydetails-container --> */}
                        <div className="details-container">
                            {/* <!-- experience-h2-title --> */}
                            <h2 className="experience-sub-title">Frontend Development</h2>
                            {/* <!-- mysection-container --> */}
                            <div className="article-container">
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>Swagger</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>Postman</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>Github</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={certified} 
                                    alt="Experience icon" 
                                    className="icon"/>
                                    <div>
                                        <h3>Git</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={arrow} alt="Arrow icon" class="icon arrow"
                />
            </section>
        </>
    )
}

{/*onClick={location.href='#project'}*/}

export default Experience;