import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
        var image = 'images/'+ this.props.data.image;
        var bio = this.props.data.bio;
        var email = this.props.data.email;
        var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={image} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <span>{email}</span>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
