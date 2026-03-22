import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { listingDetailsPath } from "../../router/all_routes";
import { img_path } from "../../environment";
import { getCarDayRate } from "../../utils/carPricing";

const CAR_IMAGE_BASE =
  import.meta.env.VITE_API_BASE_URL_IMAGE || "http://localhost:4000";

function formatEnum(val: string | undefined | null) {
  if (!val) return "—";
  return String(val).replace(/_/g, " ");
}

type Props = {
  cars: any[];
  sliderSettings: any;
};

export function RelatedCarsSlider({ cars, sliderSettings }: Props) {
  const [hearts, setHearts] = useState<Record<string, boolean>>({});

  if (!cars.length) return null;

  return (
    <div className="rental-deal-slider details-car owl-carousel">
      <Slider {...sliderSettings}>
        {cars.map((c) => {
          const imgs = Array.isArray(c.images) ? c.images : [];
          const imgPath = imgs[0];
          const rate = getCarDayRate(c.pricing);
          return (
            <div className="rental-car-item" key={c.id}>
              <div className="listing-item pb-0">
                <div className="listing-img">
                  <Link to={listingDetailsPath(c.id)}>
                    {imgPath ? (
                      <img
                        src={`${CAR_IMAGE_BASE}${imgPath}`}
                        className="img-fluid"
                        alt=""
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.onerror = null;
                          el.src = `${img_path}assets/img/cars/mp-vehicle-01.svg`;
                        }}
                      />
                    ) : (
                      <ImageWithBasePath
                        src="assets/img/cars/car-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    )}
                  </Link>
                  <div
                    className="fav-item justify-content-end"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Link
                      to="#"
                      className={`fav-icon ${hearts[c.id] ? "selected" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setHearts((h) => ({ ...h, [c.id]: !h[c.id] }));
                      }}
                    >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <span className="featured-text">{c.brand || "Car"}</span>
                </div>
                <div className="listing-content">
                  <div className="listing-features d-flex align-items-end justify-content-between">
                    <div className="list-rating">
                      <h3 className="listing-title">
                        <Link to={listingDetailsPath(c.id)}>{c.name}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="listing-details-group">
                    <ul>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-parts-05.svg"
                            alt=""
                          />
                        </span>
                        <p>{formatEnum(c.transmission)}</p>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-parts-02.svg"
                            alt=""
                          />
                        </span>
                        <p>{c.mileageKm != null ? `${c.mileageKm} km` : "—"}</p>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-parts-03.svg"
                            alt=""
                          />
                        </span>
                        <p>{formatEnum(c.fuelType)}</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-parts-04.svg"
                            alt=""
                          />
                        </span>
                        <p>{formatEnum(c.powerType)}</p>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-parts-05.svg"
                            alt=""
                          />
                        </span>
                        <p>{c.modelYear ?? "—"}</p>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-parts-06.svg"
                            alt=""
                          />
                        </span>
                        <p>
                          {c.seating != null ? `${c.seating} Seats` : "—"}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="listing-location-details">
                    <div className="listing-price">
                      <span>
                        <i className="feather icon-map-pin" />
                      </span>
                      {c.location?.trim() ? c.location : "—"}
                    </div>
                    <div className="listing-price">
                      <h6>
                        {rate != null ? (
                          <>
                            ₹{rate.toLocaleString("en-IN")}{" "}
                            <span>/ Day</span>
                          </>
                        ) : (
                          <span className="text-muted">Rate on request</span>
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="listing-button">
                    <Link
                      to={listingDetailsPath(c.id)}
                      className="btn btn-order"
                    >
                      <span>
                        <i className="feather icon-calendar me-2" />
                      </span>
                      Rent Now
                    </Link>
                  </div>
                </div>
                {c.featured ? (
                  <div className="feature-text">
                    <span className="bg-danger">Featured</span>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
