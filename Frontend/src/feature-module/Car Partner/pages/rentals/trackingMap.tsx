import  { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.470692,
  lng: -2.220328,
};

// Define the type for location data
interface Location {
  id: number;
  lat: number;
  lng: number;
  carName: string;
  speciality: string;
  profile_link: string;
  image: string;
}

const locations: Location[] = [
  {
    id: 1,
    carName: "Ford Endeavour",
    speciality: "Speed : 20/Kms",
    lat: 53.470692,
    lng: -2.220328,
    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-01.jpg",
  },
  {
    id: 2,
    carName: "Ferrari 458 MM",
    speciality: "Speed : 25/Kms",
    lat: 53.469189,
    lng: -2.199262,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-02.jpg",
  },
  {
    id: 3,
    carName: "Ford Mustang ",
    speciality: "Speed : 19/Kms",
    lat: 53.468665,
    lng: -2.189269,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-03.jpg",
  },
  {
    id: 4,
    carName: "Toyota Tacoma 4",
    speciality: "Speed : 20/Kms",
    lat: 53.463894,
    lng: -2.17788,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-04.jpg",
  },
  {
    id: 5,
    carName: "Chevrolet Pick Truck",
    speciality: "Speed : 20/Kms",
    lat: 53.466359,
    lng: -2.213314,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-05.jpg",
  },
  {
    id: 6,
    carName: "Etios Carmen",
    speciality: "Speed : 20/Kms",
    lat: 53.463906,
    lng: -2.213271,
    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-06.jpg",
  },
  {
    id: 7,
    carName: "Kia Soul 2016",
    speciality: "Speed : 20/Kms",
    lat: 53.461974,
    lng: -2.210661,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-07.jpg",
  },
  {
    id: 8,
    carName: "Chevrolet Camaro",
    speciality: "Speed : 20/Kms",
    lat: 53.458785,
    lng: -2.188532,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-08.jpg",
  },
  {
    id: 9,
    carName: "Toyota Camry SE 350",
    speciality: "Speed : 20/Kms",
    lat: 53.4558571,
    lng: -2.1950372,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-09.jpg",
  },
];
const TrackingMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD6adZVdzTvBpE2yBRK8cDfsss8QXChK0I", // Replace with your API key
  });

  const [selectedMarker, setSelectedMarker] = useState<Location | null>(
    locations[0]
  );
  if (!isLoaded) return <div>Loading Map...</div>;
  return (
    <div className="content me-4 pb-0">
      {/* Tracking */}
      <div className="map-wrap tracking position-relative">
        <div id="map" className="tracking-map w-100 z-1">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={{
              scrollwheel: false,
              mapTypeId: "roadmap",
            }}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setSelectedMarker(location)}
                icon="/assets/admin/car-map.png"
              />
            ))}

            {selectedMarker && (
              <InfoWindow
                position={{
                  lat: selectedMarker.lat,
                  lng: selectedMarker.lng,
                }}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div>
                  <div
                    className="card border-0 mb-0"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="card-body pt-0 p-2 d-flex align-items-center justify-content-between gap-3">
                      <div className="d-flex align-items-center">
                        <Link
                          to="${marker.profile_link}"
                          className="avatar flex-shrink-0 me-2avatar-rounded"
                          tabIndex={0}
                          target="_blank"
                        >
                          <ImageWithBasePath
                            className="img-fluid"
                            alt={selectedMarker.carName}
                            src={selectedMarker.image}
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fs-14 fw-semibold mb-1">
                            <Link to={selectedMarker.profile_link} tabIndex={0}>
                              {selectedMarker.carName}
                            </Link>
                          </h6>
                          <p className="fs-13">{selectedMarker.speciality}</p>
                        </div>
                      </div>
                      <div>
                        <Link
                          to={selectedMarker.profile_link}
                          tabIndex={0}
                          className="text-decoration-underline fw-medium link-violet"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
        <div className="position-absolute top-0 start-0 w-100 z-2 p-3">
          <div className="input-icon-start position-relative">
            <span className="input-icon-addon">
              <i className="ti ti-search" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by Car Name"
            />
          </div>
        </div>
      </div>
      {/* /Tracking */}
    </div>
  );
};

export default TrackingMap;
