import  { useEffect } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumbs from "../common/breadcrumbs";
import Aos from "aos";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      image: "assets/img/profiles/rahul.jpg",
      rating: 5.0,
      review:
        "I booked a self-drive car for a weekend trip with friends, and the experience was excellent. The vehicle was clean, well-maintained, and pickup was quick. Pricing was transparent with no surprises. Will definitely choose this service again for future road trips."
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      image: "assets/img/profiles/priya.jpg",
      rating: 5.0,
      review:
        "Needed a car for daily commuting for a few days, and this service made everything simple. Booking was smooth, staff was helpful during verification, and the car condition exceeded expectations. Affordable pricing and flexible timings made my travel completely stress-free."
    },
    {
      id: 3,
      name: "Arjun Patel",
      image: "assets/img/profiles/arjun.jpg",
      rating: 5.0,
      review:
        "Rented an SUV for a family getaway and had a wonderful experience overall. The car was spacious, sanitized, and comfortable for long drives. Pickup and drop were convenient, and customer support responded quickly whenever I had questions during the trip."
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Breadscrumb Section */}
      {/* <Breadcrumbs title="Page" subtitle="About Us" /> */}
      {/* /Breadscrumb Section */}
      {/* About */}
      <section style={{marginTop:"40px"}} className="section about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-down">
              <div className="about-img">
                <div className="about-exp">
                  <span>Rent Our Cars in 3 Steps</span>
                </div>
                <div className="abt-img">
                  <ImageWithBasePath
                    src="assets/img/about-us.png"
                    className="img-fluid"
                    alt="About us"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-down">
              <div className="about-content">
                <h6>ABOUT OUR COMPANY</h6>
                <h2>Best Solution For Car rentals</h2>
                <p>
                  EKALODRIVE is your trusted self-drive car rental partner, offering well-maintained vehicles at affordable prices for every type of journey you plan. Whether you need a quick city commute, a relaxing weekend getaway, or an extended road trip, we have the perfect car ready. 
                </p>
                <p>
                  Our diverse fleet includes compact hatchbacks for daily travel, comfortable sedans for smooth drives, and spacious SUVs ideal for family adventures or group outings, ensuring convenience, reliability, flexibility, and confidence whenever you hit the road with us on journeys.

                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>Easy and seamless booking process.</li>
                      <li>Transparent pricing with no hidden costs.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Reliable service you can trust.</li>
                      <li>Affordable self drive cars for everyone.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About */}
      {/* services */}
      <section className="section services bg-light-primary">
        <div className="service-right">
          <ImageWithBasePath
            src="assets/img/bg/service-right.svg"
            className="img-fluid"
            alt="services right"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>How It Works</h2>
            <p>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s,
            </p>
          </div>
          {/* /Heading title */}
          <div className="services-work">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <ImageWithBasePath
                      className="icon-img bg-secondary"
                      src="assets/img/icons/services-icon-01.svg"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>1. Choose Locations</h3>
                    <p>
                      Select your preferred pickup location, date, and time conveniently based on your travel plans and schedule.

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-warning">
                    <ImageWithBasePath
                      className="icon-img bg-warning"
                      src="assets/img/icons/services-icon-01.svg"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>2. Pick-Up Locations</h3>
                    <p>
                      Visit your selected location, complete a quick and simple verification process, and collect your car smoothly without any hassle or delays
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-dark">
                    <ImageWithBasePath
                      className="icon-img bg-dark"
                      src="assets/img/icons/services-icon-01.svg"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>3. Book your Car</h3>
                    <p>
                     Confirm your booking details, securely complete the payment process, and enjoy your self-drive journey with complete  convenience, and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services */}

      <section className="section facts-number">
        <div className="facts-left">
          <ImageWithBasePath
            src="assets/img/bg/facts-left.png"
            className="img-fluid"
            alt="facts left"
          />
        </div>
        <div className="facts-right">
          <ImageWithBasePath
            src="assets/img/bg/facts-right.png"
            className="img-fluid"
            alt="facts right"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">Facts By The Numbers</h2>
            <p className="description text-white">
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s,
            </p>
          </div>
          {/* /Heading title */}
          <div className="counter-group">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div  className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-heart.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={16000}
                          duration={3}
                          separator=","
                        />
                        K<br />
                      </h4>
                      <p> Happy Customer </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-car.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={2547}
                          duration={3}
                          separator=","
                        />
                        +<br />
                      </h4>
                      <p>Count of Cars</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-headphone.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={625}
                          duration={3}
                          separator=","
                        />
                        K+
                        <br />
                      </h4>
                      <p>Car Center Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-history.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={200}
                          duration={3}
                          separator=","
                        />
                        K+
                        <br />
                      </h4>
                      <p>Total Kilometer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="choose-left">
          <ImageWithBasePath
            src="assets/img/bg/choose-left.png"
            className="img-fluid"
            alt="Why Choose Us"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Why Choose Us</h2>
            <p>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s,
            </p>
          </div>
          {/* /Heading title */}
          <div className="why-choose-group">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-black">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-user-check.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-content">
                      <h4>Well Maintained Fleet</h4>
                      <p>
                        Our self-drive fleet is regularly serviced and maintained to the highest standards. Every car is thoroughly inspected, sanitized, and ready for your safe journey through Pune and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-secondary">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-user-check.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-content">
                      <h4>Affordable Prices and Packages</h4>
                      <p>
                        Transparent pricing with no hidden charges. Special weekday packages designed for students and young professionals. Get the best value for your money with our competitive rates.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-primary">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-user-check.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-content">
                      <h4>Legal Platform</h4>
                      <p>
                        Fully licensed and compliant self-drive car rental service. All vehicles are properly registered, insured, and meet all legal requirements. Drive with complete peace of mind.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Why Choose Us */}
      {/* About us Testimonials */}
      <section className="section about-testimonial testimonials-section">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">What People say about us? </h2>
            <p className="description text-white">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s,
            </p>
          </div>
          {/* /Heading title */}
          <div className="owl-carousel about-testimonials testimonial-group mb-0 owl-theme">
            {/* /Carousel Item  */}
            {/* Carousel Item */}
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <div className="quotes-head" />
                      <div className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <ImageWithBasePath
                              src={testimonial.image}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="review-details">
                          <h6>{testimonial.name}</h6>
                          <div className="list-rating">
                            <div className="list-rating-star">
                              {[...Array(Math.floor(testimonial.rating))].map(
                                (_, i) => (
                                  <i key={i} className="fas fa-star filled" />
                                )
                              )}
                            </div>
                            <p>
                              <span>({testimonial.rating})</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* /Carousel Item  */}
            {/* Carousel Item */}

            {/* /Carousel Item  */}
          </div>
        </div>
      </section>
      {/* About us Testimonials */}
      <>
        {/* FAQ  */}
     <section className="section faq-section bg-light-primary">
  <div className="container">
    {/* Heading title*/}
    <div className="section-heading" data-aos="fade-down">
      <h2>Frequently Asked Questions </h2>
      <p>
        Everything you need to know about booking and renting with Ekal O Drive.
      </p>
    </div>
    {/* /Heading title */}
    <div className="faq-info">
      
      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqOne" aria-expanded="false">
            What documents do I need?
          </Link>
        </h4>
        <div id="faqOne" className="card-collapse collapse">
          <p>
            Valid Indian driving license (min 1 year old), Aadhaar/Passport/Voter ID, and age proof (min 21 years). Upload originals during booking; verification takes 5 minutes.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqTwo" aria-expanded="false">
            How do I book a car?
          </Link>
        </h4>
        <div id="faqTwo" className="card-collapse collapse">
          <p>
            Search cars on ekalodrive.com, select dates and location, upload documents, and pay the deposit + rental via UPI or card. Instant confirmation!
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqThree" aria-expanded="false">
            Minimum rental duration?
          </Link>
        </h4>
        <div id="faqThree" className="card-collapse collapse">
          <p>
            2 hours for hourly rentals; 24 hours minimum for daily rentals. Extensions are available subject to availability.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqFour" aria-expanded="false">
            What’s included in rates?
          </Link>
        </h4>
        <div id="faqFour" className="card-collapse collapse">
          <p>
            Base rental, insurance, unlimited city km (250km/24hrs), fuel to full at pickup, and 24/7 roadside assistance. GST (18%) included.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqFive" aria-expanded="false">
            Security deposit?
          </Link>
        </h4>
        <div id="faqFive" className="card-collapse collapse">
          <p>
            ₹5,000 refundable (online/cash). Covers minor damages; full refund on clean return.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqSix" aria-expanded="false">
            Extra km or fuel charges?
          </Link>
        </h4>
        <div id="faqSix" className="card-collapse collapse">
          <p>
            ₹10/km beyond limits. Return fuel to pickup level or pay difference at ₹100/litre.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqSeven" aria-expanded="false">
            Cancellation policy?
          </Link>
        </h4>
        <div id="faqSeven" className="card-collapse collapse">
          <p>
            48+ hrs: 20% fee. 24–48 hrs: 25%. Less than 24 hrs: 1 day rental. No-show: Full amount charged.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqEight" aria-expanded="false">
            Pet or goods policy?
          </Link>
        </h4>
        <div id="faqEight" className="card-collapse collapse">
          <p>
            No pets or commercial loads allowed. Cleaning fee ₹1,000 if vehicle is soiled.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqNine" aria-expanded="false">
            Late return charges?
          </Link>
        </h4>
        <div id="faqNine" className="card-collapse collapse">
          <p>
            ₹700 for the first extra hour; 50% of daily rate after that.
          </p>
        </div>
      </div>

      <div className="faq-card bg-white" data-aos="fade-down">
        <h4 className="faq-title">
          <Link className="collapsed" data-bs-toggle="collapse" to="#faqTen" aria-expanded="false">
            Roadside assistance?
          </Link>
        </h4>
        <div id="faqTen" className="card-collapse collapse">
          <p>
            24/7 assistance via phone. Towing is free within city limits.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
        {/* /FAQ */}
      </>
    </>
  );
};

export default AboutUs;
