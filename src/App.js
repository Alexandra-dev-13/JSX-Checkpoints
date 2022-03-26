import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageInSrc from './imageInSrc.jpg';



function App() {
  
  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-lg-12 mb-3" style={{ border: '1px solid black', width: '25rem' }}>
          <div className="card" />
          <h5 className="">Alexandra</h5>
          <img src={imageInSrc} className="card-img-top" alt="Image In Src" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="card" />
          <h5 className="">Alexandra</h5>
          <img src={'/imageInPublic.jpg'} className="card-img-top" alt="Image In Public" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="className">
          <iframe src="https://www.youtube.com/embedLsmxoMBGKfU" height={300} frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <div className="row">

      </div>
    </div>



  );
}

export default App;
