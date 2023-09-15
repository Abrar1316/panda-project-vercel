// Images.js
import React from 'react';

function Images() {
  return (
    <div className="image-container">
      <img src="/images/01.jpg" alt="Image 1" className="image" />
      <img src="/images/02.jpg" alt="Image 2" className="image" />
      <img src="/images/03.jpg" alt="Image 3" className="image" />
      {/* Add the paths for other images similarly */}
    </div>
  );
}

export default Images;
