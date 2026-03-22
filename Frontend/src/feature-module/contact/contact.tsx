import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import type { ContactUs } from "../../core/data/interface/interface";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import NewHeader from "../home/home-new/header";
import axiosClient from "../../api/user/apiClient";
import { toast } from "react-toastify";

const Contact = () => {
  const data = useSelector((state: any) => state.rootReducer.contactdata);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      await axiosClient.post("/contact", formData);
      toast.success("Enquiry sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending enquiry:", error);
      toast.error("Failed to send enquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <NewHeader />

      <section style={{ marginTop: '40px' }} className="contact-section">
        <div className="container">
          <div className="contact-info-area">
            <div className="row">
              {data.map((info: ContactUs, index: number) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-12 d-flex"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay="0.1"
                >
                  <div className="single-contact-info flex-fill">
                    <span>
                      <i className={info.icon} />
                    </span>
                    <h3>{info.title}</h3>
                    {info.type === "phone" ? (
                      <Link to={info.link}>{info.text}</Link>
                    ) : (
                      <p>
                        <Link to={info.link}>{info.text}</Link>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="form-info-area"
            data-aos="fade-down"
            data-aos-duration={1200}
            data-aos-delay="0.5"
          >
            <div className="row">
              <div className="col-lg-6 d-flex">
                <ImageWithBasePath
                  src="assets/img/contact-info.jpg"
                  className="img-fluid"
                  alt="Contact"
                />
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <h1>Get in touch!</h1>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>
                          Phone number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          rows={4}
                          cols={50}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn contact-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
