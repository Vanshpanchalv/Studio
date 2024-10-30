import React from 'react';
import video from '../assets/video/12355077_1920_1080_25fps.mp4'; // Correctly import the video file

// Import images from the assets folder
import image1 from '../assets/images/G&M_Anand+Karaj-35.jpg';
import image2 from '../assets/images/DSCF3728.jpg';
import image3 from '../assets/images/2.jpg';
import image4 from '../assets/images/DSC00991-Enhanced-NR.jpg';
import serviceImage1 from '../assets/images/IMG_2417.jpg';
import serviceImage2 from '../assets/images/DSC09970.jpg';
import serviceImage3 from '../assets/images/DSC08878.jpg';

export default function Home() {
  // Array of images for the gallery
  const images = [
    { src: image1, alt: 'Studio Work 1' },
    { src: image2, alt: 'Studio Work 2' },
    { src: image3, alt: 'Studio Work 3' },
    { src: image4, alt: 'Studio Work 4' },
  ];

  // Array of services with images, titles, and descriptions
  const services = [
    { 
      title: 'Pre-Wedding Photography', 
      description: 'Capture the magic of your love story with our pre-wedding photography and videography services. We specialize in creating heartfelt memories through natural, candid shots and artistic poses that truly reflect your journey together. Our team assists with location selection, styling, and posing to ensure a comfortable and enjoyable experience. Each session is crafted to your unique style, from cinematic videography to professionally edited photos that bring out every cherished moment. With flexible packages designed to fit your vision, let us help you create unforgettable memories as you step into the next chapter of your lives. Contact us to learn more!', 
      img: serviceImage1 
    },
    { 
      title: 'Wedding Photography', 
      description: 'Celebrate your big day with our wedding photography and videography services, designed to capture every cherished moment. Our team combines candid and classic styles, ensuring each shot reflects the joy, love, and emotions of your special day. From pre-ceremony preparations to the final dance, we document each detail with professionalism and creativity. We work closely with you to understand your vision, using high-quality equipment and expert editing to deliver timeless images and films. With customizable packages to suit your needs, let us help you relive the magic of your wedding day for years to come. Contact us today!', 
      img: serviceImage2 
    },
    { 
      title: 'Event Photography', 
      description: 'Our event photography and videography services capture the essence of every special occasion, from corporate gatherings and birthdays to anniversaries and festivals. With an eye for detail and a knack for candid shots, we ensure each moment is preserved with creativity and professionalism. Our team works to blend seamlessly into the event, capturing everything from key highlights to the subtle interactions that make each event unique. Equipped with high-quality gear and expert editing, we deliver photos and videos that bring your event to life, helping you relive those memories again and again. Reach out to customize your event package!', 
      img: serviceImage3 
    }
  ];

  return (
    <div>
      {/* Video Section */}
      <div className="container-fluid home-video">
        <video 
          src={video}
          autoPlay
          loop
          muted
          className="video-background"
        />
      </div>

      {/* Gallery Section */}
      <section className="container-fluid my-4">
        <div className="row">
          {images.map((image, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4 gallery-item" key={index}>
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          ))}
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4 gallery-item" key={index}>
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          ))}
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4 gallery-item" key={index}>
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          ))}
        </div>
      </section>

      {/* Service Section */}
      <section className="container-fluid service-section my-5">
        <h1 className="text-center mb-4">Our Services</h1> {/* Section Title */}
        {services.map((service, index) => (
          <div className="row align-items-center my-4" key={index}>
            {/* Alternate layout: image left if even index, image right if odd */}
            <div className={`col-12 col-md-6 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
              <img src={service.img} alt={service.title} className="img-fluid service-img" />
            </div>
            <div className={`col-12 col-md-6`}>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
