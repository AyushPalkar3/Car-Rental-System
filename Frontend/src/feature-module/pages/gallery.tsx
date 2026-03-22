import Breadcrumbs from "../common/breadcrumbs";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";

const Gallerys = () => {
  const images = [
    { original: 'assets/img/gallery/gallery-01.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-01.jpg' },
    { original: 'assets/img/gallery/gallery-02.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-02.jpg' },
    { original: 'assets/img/gallery/gallery-03.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-03.jpg' },
    { original: 'assets/img/gallery/gallery-04.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-04.jpg' },
    { original: 'assets/img/gallery/gallery-05.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-05.jpg' },
    { original: 'assets/img/gallery/gallery-06.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-06.jpg' },
    // { original: 'assets/img/gallery/gallery-07.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-07.jpg' },
    // { original: 'assets/img/gallery/gallery-08.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-08.jpg' },
    // { original: 'assets/img/gallery/gallery-09.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-09.jpg' },
    // { original: 'assets/img/gallery/gallery-10.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-10.jpg' },
    // { original: 'assets/img/gallery/gallery-11.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-11.jpg' },
    // { original: 'assets/img/gallery/gallery-12.jpg', thumbnail: 'assets/img/gallery/gallery-thumb-12.jpg' },
  ];

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="main-wrapper">
        <Breadcrumbs title="Gallery" subtitle="Pages" />
      </div>

      <div className="section gallery-section">
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-12" style={{ marginBottom: 20 }}>
                <div
                  style={{ width: "100%", cursor: "pointer", borderRadius: 8, overflow: "hidden" }}
                  onClick={() => {
                    setPhotoIndex(index);
                    setOpen(true);
                  }}
                >
                  <ImageWithBasePath
                    src={image.thumbnail}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={images.map(img => ({ src: img.original }))}
        // You can add more Lightbox props for customization
      />
    </>
  );
};

export default Gallerys;
