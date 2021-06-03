import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Image, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Navabar from "./components/navabar.component";
import Footer from "./components/footer.component";
import myimg from "./images/carrer.png";
import ij1 from "./images/job_1.png";
import ij2 from "./images/job_2.png";
import ij3 from "./images/job_3.png";
import ij4 from "./images/job_4.png";
import ij5 from "./images/job_5.png";
import ij6 from "./images/job_6.png";
import ip1 from "./images/p1.png";
import ip2 from "./images/p2.png";
import ip3 from "./images/p3.png";
import ip4 from "./images/p4.png";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <Router>
      <div class="font-op">
        <div>
          <Navabar sticky="top" />
        </div>
        <section class="career-section">
          <div class="container">
            <div data-aos="fade-up" class="row">
              <div class="col-sm-6 col-12" id ="mob-apply">
                <h2>
                  Join Our Team At <span>CODE</span>
                </h2>
                <p>Work at the most dynamic and successful club of BIET.</p>
                <div class="join-box" id ="mob-apply">
                  <button type="button" class="btn">
                    Apply Now
                  </button>
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <Image src={myimg} />
              </div>
            </div>
          </div>
        </section>
        <section class="your-life">
          <div data-aos="fade-up" class="container">
            <div class="row middel-flex">
              <div class="col-md-6 col-sm-12">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-12">
                    <div data-aos="fade-up" class="your-box">
                      <Image src={ij1} />
                      <h3>Large Beautiful Office</h3>
                      <p>
                        Enjoy a comfortable office enviroment with the most modern and stylish furnishing.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-12">
                    <div data-aos="fade-up" class="your-box marg-top">
                      <Image src={ij2} />
                      <h3>Great Co-Workers</h3>
                      <p>
                        Work with some of the best talents in the industry and connect with them.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-12">
                    <div data-aos="fade-up" class="your-box">
                      <Image src={ij3} />
                      <h3>Easy Location</h3>
                      <p>
                        Commute easily to work at your convinience and enjoy compensession for transport costs.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-12">
                    <div data-aos="fade-up" class="your-box marg-top">
                      <Image src={ij4} />
                      <h3>Education Opportunity</h3>
                      <p>
                        Get resources for developing your skills and knowledge to kickstart your carrer.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-12">
                    <div data-aos="fade-up" class="your-box">
                      <Image src={ij5} />
                      <h3>Performance Award</h3>
                      <p>
                        Get awarded for better performance in every 6 months and recognized for your work.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-12">
                    <div data-aos="fade-up" class="your-box marg-top">
                      <Image src={ij6} />
                      <h3>Free Lunch and Snacks</h3>
                      <p>
                        Enjoy free delicious meals prepared by our trusted vendors for lunch and snaks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12" id="your-life-class">
                <h2 >
                  Your Life At <br />
                  CODE
                </h2>
                <p>
                  At CODE we believe in working together and working hard. we
                  are looking for dynamic and ceative induviduels who are
                  willing to dedicate themselves to providing innovative
                  products and servies for our clients.
                </p>
                <p>
                  Besides getting the opportunity ot unlock your true potential,
                  at CODE you can also network with some of the talented people
                  in the industry and enjoy many other benefits by working with
                  us.
                </p>
                <br />
                <br />
                <div class="join-box">
                  <button type="button" class="btn">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up" class="jobs-available">
          <div class="container">
            <div class="your-box">
              <h2>Job Openings</h2>
              <div>
                <InputGroup size="lg">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg"></InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <br />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" id="sel1">
                        <option>Country</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" id="sel1">
                        <option>Department</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" id="sel1">
                        <option>Work Type</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="custom-control custom-switch" id="switch1">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customSwitches"
                      />
                      <label class="custom-control-label" for="customSwitches">
                        Remote Only
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="container" data-aos="fade-up">
                <div class="row">
                  <div
                    data-aos="fade-up-right"
                    class="col-lg-4 col-md-12 col-sm-12 "
                  >
                    <div class="your-box">
                      <h3>Data Scientist</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" class="col-lg-4 col-md-12 col-sm-12">
                    <div class="your-box">
                      <h3>Wordpress Developer</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-left"
                    class="col-lg-4 col-md-12 col-sm-12"
                  >
                    <div class="your-box">
                      <h3>Product Designer</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="containerp">
                <div class="row">
                  <div
                    data-aos="fade-up-right"
                    class="col-lg-4 col-md-12 col-sm-12"
                  >
                    <div class="your-box">
                      <h3>Technical Support</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" class="col-lg-4 col-md-12 col-sm-12">
                    <div class="your-box">
                      <h3>Junior Graphic Designer</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-left"
                    class="col-lg-4 col-md-12 col-sm-12"
                  >
                    <div class="your-box">
                      <h3>Digital Marketer</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="r3">
                <div class="row">
                  <div
                    data-aos="fade-up-right"
                    class="col-lg-4 col-md-12 col-sm-12"
                  >
                    <div class="your-box">
                      <h3>Content Writer</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" class="col-lg-4 col-md-12 col-sm-12">
                    <div class="your-box">
                      <h3>Backend Engineer</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-left"
                    class="col-lg-4 col-md-12 col-sm-12"
                  >
                    <div class="your-box">
                      <h3>Corporate Ambassador</h3>
                      <p>Elehirely | Full time or Contact</p>
                      <div class="join-box">
                        <button type="button" class="btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up-left" class="container">
              <br />
              <div class="join-box" id="openi">
                <button type="button" class="btn">
                  View All Openings
                </button>
              </div>
            </div>
          </div>
        </section>
        <br />

        <section data-aos="fade-up" class="achievement">
          <div class="container" id="stats">
            <div class="row" id="po1">
              <div class="col-lg-3 col-md-6 col-sm-6 col-3 ">
                <div class="">
                  <h1 id="cw">45+</h1>
                  <h6 id="cw">TEAM MEMEBERS</h6>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-3">
                <div class="">
                  <h1 id="cw">25+</h1>
                  <h6 id="cw">TOTAL PRODUCTS</h6>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-3">
                <div class="">
                  <h1 id="cw">800,000+</h1>
                  <h6 id="cw">HAPPY USERS</h6>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-3">
                <div class="">
                  <h1 id="cw">24K</h1>
                  <h6 id="cw">HAPPY MOMENTS</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="learn-process">
          <div class="container">
            <h1 data-aos="zoom-in" id="recruitment-text">
              Learn Our Recruitment <span id="changec">Process</span>
            </h1>
            <br />
            <div class="row">
              <div data-aos="fade-up" class="col-lg-3 col-md-6 col-sm-6">
                <div class="learn-box">
                  <Image src={ip1} />
                  <h2>CV Submission</h2>
                  <p>
                    Submit your CV or resume through our online portal if you
                    meet our requirements.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" class="col-lg-3 col-md-6 col-sm-6">
                <div class="learn-box">
                  <Image src={ip2} />
                  <h2>Phone Screening</h2>
                  <p>
                    After looking at your CV you will be invited for telephone
                    interview at time of your choosing.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" class="col-lg-3 col-md-6 col-sm-6">
                <div class="learn-box">
                  <Image src={ip3} />
                  <h2>Skill Assessment</h2>
                  <p>
                    You will be invited at our head office to take a skills and
                    knowledge assessment.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" class="col-lg-3 col-md-6 col-sm-6">
                <div class="learn-box">
                  <Image src={ip4} />
                  <h2>Final Interview</h2>
                  <p>
                    If you can pass all stages we will invite you for a final
                    interview with our Founder Team.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
