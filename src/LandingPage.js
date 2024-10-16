import React, { useState, useEffect } from "react";
import './LandingPage.css';

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('November 2, 2024 08:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="content-box">
        <img src={require('./assets/OTULogo.png')} alt="Logo" className="main-image" style={{width: '30%'}}/>
        <img src={require('./assets/IEC.png')} alt="Event Banner" className="main-image" style={{width: '30%'}}/>
        <img src={require('./assets/ENGsoc.png')} alt="ENGsco" className="main-image" style={{width: '30%'}}/>
          
          <h1>I.E.C IS BACK!</h1>
            <p>Join us for the biggest event of the year!</p>
            <p> The Internal Engineering Competition is an annual competition for students to apply their engineering education to real world experiences. Winners from competitions will qualify to attend the Ontario level competition, OEC.</p>
          <div className="countdown">
            <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
          </div>
          <p classname="countdown">Happening November 2nd & 3rd</p>
        </div>
      </section>

      <section className="registration-section">
        <div className="content-box">
          <h1>Registration</h1>
          <p>Register now to secure your spot!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-9ZyaEmizDwuYUt5etrpvtsS6_8b83liOIXdiny9VTudHyA/viewform">
          
            <img src={require('./assets/QRcode.jpg')} alt="QR Code" className="qr-code" />
           
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
