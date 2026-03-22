import  { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OurTeam = () => {
  const data = useSelector((state: any) => state.rootReducer.ourTeamData);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Meet our Team" subtitle="Pages" />
      <section className="our-team-section">
        <div className="container">
          <div className="row">
            {data.map((member:any, index:number) => (
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={100}
                key={index}
              >
                <div className="our-team" key={index}>
                  <div className="profile-pic">
                    <ImageWithBasePath src={member.image} alt="Our Team" />
                  </div>
                  <div className="team-prof">
                    <h3 className="team-post-title">{member.name}</h3>
                    <span className="team-designation">
                      {member.designation}
                    </span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook fi-icon" />
                            
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter fi-icon" />
                            
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-linkedin fi-icon" />
                              
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
