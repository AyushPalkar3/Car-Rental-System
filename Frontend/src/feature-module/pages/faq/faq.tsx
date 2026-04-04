
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

const Faq = () => {
  const routes = all_routes;
  const faqItems = [
    {
      id: "faqOne",
      question: "What is EkaloDrive?",
      answer: (
        <p>
          EkaloDrive is a self-drive car rental service offering a premium and
          hassle-free driving experience. We provide well-maintained vehicles
          at affordable prices with flexible rental options (hourly, daily,
          monthly, or yearly) within the city. Enjoy easy booking, a wide range
          of cars, and reliable service you can trust.
        </p>
      ),
    },
    {
      id: "faqTwo",
      question: "How can I book a vehicle from EkaloDrive?",
      answer: (
        <div>
          <p>Booking is simple:</p>
          <ol>
            <li>Visit https://ekalodrive.com</li>
            <li>Select your location</li>
            <li>Choose rental duration</li>
            <li>Pick your vehicle</li>
            <li>Complete the payment</li>
          </ol>
          <p>Your booking confirmation will be shared instantly.</p>
        </div>
      ),
    },
    {
      id: "faqThree",
      question: "In which cities is EkaloDrive available?",
      answer: (
        <p>
          Currently, EkaloDrive operates in Pune and Mumbai. We are expanding
          soon, stay tuned.
        </p>
      ),
    },
    {
      id: "faqFour",
      question: "Where do I pick up the vehicle?",
      answer: (
        <p>
          You can collect your vehicle from one of our designated pickup hubs
          listed on our website. For assistance, you may contact us using the
          details provided on our platform.
        </p>
      ),
    },
    {
      id: "faqFive",
      question: "What is the minimum age requirement to rent a vehicle?",
      answer: (
        <p>
          The renter must be at least 18 years old and hold a valid
          government-issued driving license. However, certain vehicles require
          a minimum age of 21 years.
        </p>
      ),
    },
    {
      id: "faqSix",
      question: "Does EkaloDrive offer home delivery?",
      answer: (
        <p>
          Yes, we provide home delivery and pickup services based on location
          availability and applicable charges.
        </p>
      ),
    },
    {
      id: "faqSeven",
      question: "What is the maximum rental duration?",
      answer: (
        <p>
          You can rent a vehicle for up to 2 months. For rentals exceeding 2
          months, we offer a subscription model. Please contact our support
          team for assistance.
        </p>
      ),
    },
    {
      id: "faqEight",
      question: "Is prior inquiry required for group reservations?",
      answer: (
        <p>
          Yes, for group bookings, customers must place an inquiry at least 5
          days prior to the reservation date.
        </p>
      ),
    },
    {
      id: "faqNine",
      question: "What types of vehicles does EkaloDrive offer?",
      answer: (
        <p>
          EkaloDrive provides a wide range of self-drive cars to suit your
          travel needs, from budget-friendly options to premium vehicles.
        </p>
      ),
    },
    {
      id: "faqTen",
      question: "What documents are required?",
      answer: (
        <div>
          <p>You must provide:</p>
          <ul>
            <li>A valid Driving License</li>
            <li>Local Address Proof</li>
            <li>KYC documents</li>
          </ul>
          <p>Note: PAN Card is not accepted as a valid government ID proof.</p>
        </div>
      ),
    },
    {
      id: "faqEleven",
      question: "Is fuel included in the rental price?",
      answer: <p>No, fuel costs are to be borne by the customer.</p>,
    },
    {
      id: "faqTwelve",
      question: "Does EkaloDrive offer promo codes?",
      answer: (
        <p>
          Yes, we regularly offer promotional codes and special discounts.
          Check our website and social media channels for current offers.
        </p>
      ),
    },
    {
      id: "faqThirteen",
      question: "Is a security deposit required?",
      answer: (
        <p>
          Yes, a refundable security deposit may be required at the time of
          booking. The amount varies depending on the vehicle and booking
          history. For customers with a strong rental track record, the deposit
          may be waived at EkaloDrive's discretion.
        </p>
      ),
    },
    {
      id: "faqFourteen",
      question: "Can I travel outstation or to another state?",
      answer: (
        <p>
          Yes, you can travel across India, subject to local regulations. All
          EkaloDrive vehicles come with an All-India Permit.
        </p>
      ),
    },
    {
      id: "faqFifteen",
      question: "How long does it take to receive a refund?",
      answer: (
        <p>
          Any applicable refund will be credited within 5-7 working days to
          your original payment method.
        </p>
      ),
    },
    {
      id: "faqSixteen",
      question: "Is there a penalty for late return?",
      answer: (
        <p>
          Yes. If a vehicle is used beyond the booked time without extension,
          an overtime penalty of Rs. 500 plus double the hourly rental fare
          will be charged.
        </p>
      ),
    },
    {
      id: "faqSeventeen",
      question: "Does EkaloDrive charge for vehicle damages?",
      answer: (
        <p>
          Yes, customers are responsible for any damage caused during the
          rental period and will be charged accordingly.
        </p>
      ),
    },
    {
      id: "faqEighteen",
      question: "Can I earn with EkaloDrive?",
      answer: (
        <p>
          Yes. You can earn by listing your vehicle on our platform. Visit
          https://www.ekalodrive.com to learn more.
        </p>
      ),
    },
    {
      id: "faqNineteen",
      question: "Is the remaining FASTag balance refundable?",
      answer: (
        <p>
          Yes, if the remaining FASTag balance exceeds Rs. 500, it is
          refundable. Balances of Rs. 500 or below are not eligible for refund.
        </p>
      ),
    },
    {
      id: "faqTwenty",
      question: "Who is responsible for traffic challans and penalties?",
      answer: (
        <p>
          The customer is fully responsible for paying all traffic challans and
          penalties incurred during the rental period. EkaloDrive may assist in
          coordination but holds no liability.
        </p>
      ),
    },
  ];

  return (
    <>
      {/* Breadscrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">FAQ</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Pages</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQ
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadscrumb */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-info">
            {faqItems.map((item) => (
              <div key={item.id} className="faq-card bg-white" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to={`#${item.id}`}
                    aria-expanded="false"
                  >
                    {item.question}
                  </Link>
                </h4>
                <div id={item.id} className="card-collapse collapse">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
