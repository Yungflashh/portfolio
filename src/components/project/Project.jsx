

function Project(){
    return (
        <>
        <section id="projects">
            {/* <!-- text-p1 --> */}
            <p className="section__text__p1">Browse My Recent</p>
            {/* <!-- mytitle --> */}
            <h1 className="title">Projects</h1>

            <div className="experience-details-container">

                <div className="about-containers">

                    {/* <!-- mydetails-container mycolor-container --> */}
                    <div className="details-container color-container">
                        {/* <!-- mysection-container --> */}
                        <div className="article-container">
                            {/* <!-- myproject-img --> */}
                            <img src="" alt="Project 1" className="project-img"/>
                        </div>
                        {/* <!-- experience-h2-title myproject-title --> */}
                        <h2 className="experience-sub-title project-title">Project One</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" >
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" >
                                Live Demo
                            </button>
                        </div>
                    </div>


                    {/* <!-- mydetails-container mycolor-container --> */}
                    <div className="details-container color-container">
                        {/* <!-- mysection-container --> */}
                        <div className="article-container">
                            {/* <!-- myproject-img --> */}
                            <img src="/assets/project-2.png" alt="Project 2" className="project-img"/>
                        </div>
                        {/* <!-- experience-h2-title myproject-title --> */}
                        <h2 className="experience-sub-title project-title">Project Two</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" >
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" >
                                Live Demo
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            {/* <!-- my-arrow --> */}
            <img src="src/assets/icons/icons8-down-arrow.gif" 
                alt="Arrow icon"  className="icon arrow"
                />
        </section>
        </>
    )
}

export default Project;
{/*onClick={location.href='#contact'} */}
{/* onClick={location.href='https://github.com/'}
onClick={location.href='https://github.com/'}
onClick={location.href='https://github.com/'}
onClick={location.href='https://github.com/'} */}