import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/images/DSC09970.jpg';

export default function Blogs() {
  return (
    <div className="blogs-container container my-5">
      <div className='margin'></div>
      <div className="row">
        {/* Blog 1 */}
        <div className="col-md-6 mb-4">
          <img
            src={img1}
            alt="Nikita & Yash | Oman"
            className="img-fluid"
          />
          <h2 className="mt-3">Nikita & Yash | Oman</h2>
          <p>
            Nestled amidst the majestic beauty of Oman unfolds a love story as captivating as the landscape itself.
            Knotting Bells captured Nikita and Yash's vibrant Indian wedding, where every photograph expresses their deep connection. Beyond the dazzling celebration and vibrant colours, their bond shines through, promising a love story that transcends the frame.
          </p>
          {/* <a href="#!" className="text-muted">Read More</a> */}
        </div>

        {/* Blog 2 */}
        <div className="col-md-6 mb-4">
          <img
            src={img1}
            alt="Anushree & Arnav | Ahmedabad"
            className="img-fluid"
          />
          <h2 className="mt-3">Anushree & Arnav | Ahmedabad</h2>
          <p>
            Amidst the bustling streets of Ahmedabad, Knotting Bells captured the love story of Anushree and Arnav. Their journey began with a whispered "yes" in faraway Bahrain, and now, with every photograph, Knotting Bells translates the whispers of their hearts. Each frame shimmers with the promise of shared dreams and moments so precious they'll forever resonate in their souls.
          </p>
          {/* <a href="#!" className="text-muted">Read More</a> */}
        </div>

        {/* Blog 3 */}
        <div className="col-md-6 mb-4">
          <img
            src={img1}
            alt="Blog Image 3"
            className="img-fluid"
          />
          <h2 className="mt-3">Blog 3 Title | Location</h2>
          <p>
            Blog 3 description goes here. Describe the location, moments, and any other significant aspects that make this story stand out.
          </p>
          {/* <a href="#!" className="text-muted">Read More</a> */}
        </div>

        {/* Blog 4 */}
        <div className="col-md-6 mb-4">
          <img
            src={img1}
            alt="Blog Image 4"
            className="img-fluid"
          />
          <h2 className="mt-3">Blog 4 Title | Location</h2>
          <p>
            Blog 4 description goes here. Capture the essence of the place, the atmosphere, and the people involved in this blog post.
          </p>
          {/* <a href="#!" className="text-muted">Read More</a> */}
        </div>

        {/* Blog 5 */}
        <div className="col-md-6 mb-4">
          <img
            src={img1}
            alt="Blog Image 5"
            className="img-fluid"
          />
          <h2 className="mt-3">Blog 5 Title | Location</h2>
          <p>
            Blog 5 description goes here. Highlight the beautiful moments and significant details that make this story unique.
          </p>
          {/* <a href="#!" className="text-muted">Read More</a> */}
        </div>

        {/* Blog 6 */}
        <div className="col-md-6 mb-4">
          <img
            src={img1}
            alt="Blog Image 6"
            className="img-fluid"
          />
          <h2 className="mt-3">Blog 6 Title | Location</h2>
          <p>
            Blog 6 description goes here. Share the highlights of the event and the connections formed during this story.
          </p>
          {/* <a href="#!" className="text-muted">Read More</a> */}
        </div>
      </div>
    </div>
  );
}
