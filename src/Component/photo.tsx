import React from 'react';
import './photo.css'
import photo from '../assets/image/htmlimg.jpg';
import  Styles  from './photo.module.css';
import background from '../assets/image/background.jpg';
import photo1 from '../assets/image/calculator.png';
import photo2 from '../assets/image/d1.jpg';
import  profile from '../assets/image/theertha.png';


 

const Portfolio = () =>{

  

    return(

        <>

<section className="hero d-flex flex-column align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="h1 text-white fw-medium fst-italic">Theertha S</h1>
          <h2 className="display-3 text-white fw-bold">
            MASTER OF COMPUTER APPLICATIONS<br /> STUDENT
          </h2>
          <a href="#skills" className="btn btn-lg fs-6 fw-medium mt-5 btn-primary p-3">
            TELL ME MORE
          </a>
        </div>
      </section>
    
    {/* <!-- Skills Section --> */}
    <section className="container py-5" id="skills">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>SKILLS</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
              Continuously improving my skills and knowledge in the field.
            </h5>
          </div>
        </div>
        <div className="row d-flex justify-content-between mx-0">
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{ width: '25rem' }}>
            <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-cart-shopping"></i>
            <h3 className="mt-4 h4">Front-end Development</h3>
            <p className="text-center">
              Proficient in HTML, CSS, and JavaScript. Experienced in responsive web design, building user-friendly interfaces, and using modern frameworks like ReactJS.
            </p>
          </div>
        <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{width: '25rem' }}>
          <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-laptop"></i>
          <h3 className="mt-4 h4">Back-end Development</h3>
          <p className="text-center">Skilled in server-side programming using technologies like Node.js and Express. Experience working with databases such as MongoDB and MySQL.</p>
        </div>
        <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{width: '25rem' }}>
          <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-mobile-screen-button"></i>
          <h3 className="mt-4 h4">Testing</h3>
          <p className="text-center">Proficient in Automation Testing Tools like Selenium ,Tosca and Cucumber.</p>
        </div>
      </div>
    </section>
    {/* <!-- Portfolio Section --> */}
    <section className="container py-5" id="portfolio">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2>PORTFOLIO</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">A collection of projects I've worked on.</h5>
        </div>
        <div className="row mt-5 mx-0 justify-content-center align-items-center">
          <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
            <div className="card mt-4">
              <img src={background} className="img-fluid" alt="portfolio-img"/>
              <div className="card-body text-center">
                <h6 className="card-title">E-commerce Website</h6>
                <p className="card-text text-secondary">HTML/CSS/JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
            <div className="card mt-4">
              <img src={photo} className="img-fluid" alt="portfolio-img"/>
              <div className="card-body text-center">
                <h6 className="card-title">Responsive Landing Page</h6>
                <p className="card-text text-secondary">HTML/CSS/Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
            <div className="card mt-4">
              <img src={photo1} className="img-fluid" alt="portfolio-img"/>
              <div className="card-body text-center">
                <h6 className="card-title">Calculator App</h6>
                <p className="card-text text-secondary">HTML/CSS/JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
    {/* <!-- About Section --> */}
    <section className="container py-5" id="about">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center">
          <h2>ABOUT</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">Learn more about me, my background, and what motivates me.</h5>
        </div>
      </div>
      <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
        <div className="col-9 col-md-5 text-md-end">
          <h5>2015-2017</h5>
          <h5>Early Passion for Technology</h5>
          <p>From an early age, I became fascinated with computers and programming. Starting with basic HTML and CSS, I gradually expanded my skills to include JavaScript and various frameworks.</p>
        </div>
        <div className="col-3 col-md-2 img text-center">
          <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src={photo2} alt="img"/>
        </div>
      </div>
      <div className="row justify-content-md-end mt-5 pt-5">
        <div className="col-3 col-md-2 img text-center">
          <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src={photo2} alt="img"/>
        </div>
        <div className="col-9 col-md-5">
          <h5>2017-2020</h5>
          <h5>Higher Education and Career Growth</h5>
          <p>During my university years, I studied computer science and gained hands-on experience through internships and freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.</p>
        </div>
      </div>
      <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
        <div className="col-9 col-md-5 text-md-end">
          <h5>2022-Present</h5>
          <h5>Professional Excellence and Continuous Learning</h5>
          <p>Throughout my career, I have consistently sought opportunities to refine my skills and stay updated with the latest technologies. I strive for excellence in every project I undertake and aim to deliver valuable and impactful results.</p>
        </div>
        <div className="col-3 col-md-2 img text-center">
          <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src={photo2} alt="img"/>
        </div>
      </div>
      <div className="row justify-content-md-end mt-5 pt-5">
        <div className="col-3 col-md-2 img text-center">
          <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src={photo2} alt="img"/>
        </div>
        <div className="col-9 col-md-5">
          <h5>Future</h5>
          <h5>Continuing to Make a Difference</h5>
          <p>I am committed to leveraging my skills and expertise to contribute to meaningful projects that have a positive impact on society. I am eager to take on new challenges and collaborate with talented individuals to create innovative solutions.</p>
        </div>
      </div>
      <div className="row justify-content-md-center mt-5 pt-5">
        <div className="col-3 col-md-2 d-flex justify-content-center hire-text">
          <h2 className="h4 d-flex justify-content-center align-items-center bg-primary text-white rounded-circle border border-5 border-dark-subtle"><span className="d-none d-md-block">Your<br />Next<br />Hire</span></h2>
        </div>
      </div>      
    </section>
    {/* Curriculum Vitae Section */}
<section className="container py-5" id="cv">
  <div className="row mt-4 py-3">
    <div className="col-12 d-flex flex-column text-center">
      <h2>CURRICULUM VITAE</h2>
      <h5 className="text-secondary fw-normal py-2 fst-italic">A small sampling of some of the projects I've worked on as a student of the ICS program.</h5>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 mt-5 order-lg-0 order-1 text-center">
      <img className="img-fluid rounded-circle border border-5 border-dark-subtle" src={profile} alt="profile-img" />
      <h2 className="mt-3">Theertha S</h2>
      <ul className="list-unstyled contact-info">
        <li><i className="fas fa-envelope me-2"></i> theertha.s@vaisesika.com</li>
        <li><i className="fas fa-phone me-2"></i> 7902486206</li>
        <li><i className="fas fa-map-marker-alt me-2"></i> Kozhikode, Kerala</li>
      </ul>
      <ul className="social-icons my-5 d-flex justify-content-center">
        <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"><i className="fa-brands fa-linkedin-in"></i></a>
      </ul>
      <h5>Technical Skills</h5>
      <ul className="list-unstyled">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        {/* Add or remove skills as needed */}
      </ul>
      <h5>Personal Interests</h5>
      <ul className="list-unstyled">
        <li>Listening Music</li>
        <li>Reading Books</li>
        <li>Gardening</li>
        {/* Add or remove interests as needed */}
      </ul>
    </div>
    <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
      <h3>Profile</h3>
      <hr />
      <p>To find a position for myself in a reputed company where all my skills could be out to use for the betterment of both the company and myself.</p>
      <h3>Education</h3>
      <hr />
      <dl>
        <dt>2020- 2022</dt>
        <dd>DePaul Institute Of Science And Technology</dd>
        <dd>Master Of Computer Applications</dd>
      </dl>
      <h3>Additional Courses & Training</h3>
      <hr />
      <dl>
        <dt>2023</dt>
        <dd>React Js </dd>
        <dd>Vaisesika</dd>
      </dl>
      <h3>Work Experience</h3>
      <hr />
      <dl>
        <dt>2022 - Present</dt>
        <dd>Associate Software Engineer</dd>
        <dd>Vaisesika Consulting</dd>
        {/* Add or remove work experience entries as needed */}
      </dl>
    </div>
  </div>
</section>
     
     {/* <!-- Footer --> */}
     <footer>
      <div className="container-xxl flex-wrap pt-3 d-flex align-items-center justify-content-center justify-content-md-between">
        <p>Copyright © 2023 Theertha S</p>
        <ul className="social-icons d-flex">
          <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"><small><i className="fa-brands fa-twitter"></i></small></a>
          <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"><small><i className="fa-brands fa-facebook-f"></i></small></a>
          <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"><small><i className="fa-brands fa-linkedin-in"></i></small></a>
        </ul>
      </div>
     </footer>






        </>

    )

}

export default Portfolio;