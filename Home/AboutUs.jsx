import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: 'icofont-users-alt-4',
    count: 22600,
    text: 'Marchant Enrolled',
  },
  {
    iconName: 'icofont-graduate-alt',
    count: 12675,
    text: 'Certified Courses',
  },
  {
    iconName: 'icofont-notification',
    count: 1000,
    text: 'Rewards and GiftCards',
  },
];

const AboutUs = () => {
    return (
      <div className="instructor-section style-2 padding-tb section-bg-ash">
        <div className="container">
          <div className="section-wrapper">
            <div className="row">
              <div className="col d-flex">
               
                {
                  countList.map((val, i) => (
                    <div key={i} className="count-item">
                      <div className="count-inner">
                        <div className="count-icon">
                          <i className={val.iconName}></i>
                        </div>
                        <div className="count-content">
                          <h2>
                            <span className="count"><CountUp end={val.count} /></span>
                            <span>+</span>
                          </h2>
                          <p>{val.text}</p>
                        </div>
                      </div>
                    </div>
  
                    
                  ))
                }
                 <div className="instructor-content  p-5 w-50">
                  <span className="subtitle ">{subTitle}</span>
                  <h2>{title}</h2>
                  <p >{desc}</p>
                  <Link to="/sign-up" className="lab-btn">{btnText}</Link>
                  <button className="btn">{btnText}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;