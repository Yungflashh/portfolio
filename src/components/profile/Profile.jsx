import israel from '/src/assets/img/photo.jpeg'
import git from '/src/assets/icons/icons8-github.gif'
import linkedin from '/src/assets/icons/icons8-linkedin.gif'
import cv from '/src/assets/cv/Israel_CV.pdf'


function Profile(){


    const onButtonClick = () => {
        let fcv = cv
     
        // using Java Script method to get PDF file
        fetch(fcv).then((response) => {
            console.log(fcv)
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = {fcv};
                alink.click();
            });
        });
    };

    const contactClickHandle = ()=> {
        location.href='./#contact'
    }

    const gitClickHandle = ()=>{
        location.href='https://github.com/KamiNation'
    }

    const linkedinClickHandle = ()=>{
        location.href='https://www.linkedin.com/in/israel-adedamola-606373139/'
    }

    return (
        <>
        <section id="profile">
            {/* <!-- mypic --> */}
            <div className="section__pic-container">
                <img src={israel}/>
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
                    <button className="btn btn-color-2"  onClick={onButtonClick} >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={contactClickHandle}  >
                        Contact Info
                    </button>
                </div>
                {/* <!-- mysocials --> */}
                <div id="socials-container">
                    <img src={linkedin} onClick={linkedinClickHandle}
                    alt="Israel's LinkedIn profile" className="icon" 
                    />
                    <img src={git} onClick={gitClickHandle}
                    alt="Israel's Github profile" className="icon"
                    />
                </div>
            </div>
        </section>
        </>
    )
}

export default Profile;
