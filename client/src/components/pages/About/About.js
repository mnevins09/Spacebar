import React from 'react';
import "./About.css";

export default () => {
  return (
    <div id="about-page" className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-12">
          <h1 className="display-4 mt-4">About SpaceBar</h1>
          <p className="lead">The Social Media Site for Techies</p>
          <p>SpaceBar is a valuable networking tool for coders to connect, exchange ideas, and stay current on technology trends.  Other coder "networks" allow sharing of coding issues but do not promote networking to identify potential collaborators on projects, meetups, speaking engagement, etc.</p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row mt-2">
        <div className="col"></div>
        <div className="col-4 text-center">

          <h4>Features</h4>
          <ul id="feature-list" className="text-left fa-ul list-group list-group-flush">
            <li className="list-group-item"><i className="fa-li fa fa-check app-color-success"></i>User Authentication</li>
            <li className="list-group-item"><i className="fa-li fa fa-check app-color-success"></i>Customizable Profiles</li>
            <li className="list-group-item"><i className="fa-li fa fa-check app-color-success"></i>Latest News</li>
            <li className="list-group-item"><i className="fa-li fa fa-check app-color-success"></i>Blogging</li>
            <li className="list-group-item"><i className="fa-li fa fa-check app-color-success"></i>Chat</li>
            <li className="list-group-item"><i className="fa-li fa fa-check app-color-success"></i>Responsive Design</li>
          </ul>

        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

