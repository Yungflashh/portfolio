


function Profile(){
    return (
        <>
        <section id="profile">
            {/* <!-- mypic --> */}
            <div className="section__pic-container">
                <img src="https://drive.google.com/file/d/15D7_DePoyol2bXqT9pA19NZITQwXErLB/view?usp=drive_link" alt="israel_adedamola_picture"/>
            </div>
            {/* <!-- text --> */}
            <div className="section__text">
                {/* <!-- text-p1 --> */}
                <p className="section__text__p1">Hello, I'm</p>
                {/* <!-- mytitle --> */}
                <h1 className="title">Israel Adedamola</h1>
                {/* <!-- text-p2 --> */}
                <p className="section__text__p2">Software Developer | Technical writer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2"   >
                        Download CV
                    </button>
                    <button className="btn btn-color-1"  >
                        Contact Info
                    </button>
                </div>
                {/* <!-- mysocials --> */}
                <div id="socials-container">
                    <img src="../src/assets/icons/icons8-linkedin.gif"
                    alt="Israel's LinkedIn profile" className="icon" 
                    />
                    <img src="../src/assets/icons/icons8-github.gif" 
                    alt="Israel's Github profile" className="icon"
                    />
                </div>
            </div>
        </section>
        </>
    )
}

export default Profile;

{/*onClick={window.open('/assets/cv/Israel_CV.pdf')}*/}
{/*onClick={location.href='./#contact'}*/}
{/*onClick={location.href='https://github.com/KamiNation'}*/}
{/*onClick={location.href='https://www.linkedin.com/in/israel-adedamola-606373139/'}*/}
