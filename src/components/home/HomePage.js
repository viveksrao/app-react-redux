import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">Course Administration</h1>
      <p className="col-md-8 fs-4">
        React, Redux and React Router for ultra-responsive web apps.
      </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  </div>
);

export default HomePage;
