import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const title = "Arwaax Online Market About";
const desc = " Online stores like Amazon, Flipkart, Shopify, Myntra, Ebay, Quikr, Olx are examples of E-commerce websites..";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  { iconName: 'icofont-google-map', text: 'Muqdisho, Somalia.' },
  { iconName: 'icofont-phone', text: '+252617758787' },
  { iconName: 'icofont-envelope', text: 'Arwaaxonlinemarkey@.com' },
];

const socialList = [
  { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
  { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
  { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
  { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
  { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' },
];

const ItemList = [
  { text: 'All Products', link: '/shop' },
  { text: 'Shop', link: '/shop' },
  { text: 'Blog', link: '/blog' },
  { text: 'About', link: '/about' },
  { text: 'Policy', link: '#' },
  { text: 'FAQs', link: '/about' },
];

const quickList = [
  { text: 'Summer Sessions', link: '#' },
  { text: 'Events', link: '#' },
  { text: 'Gallery', link: '#' },
  { text: 'Forums', link: '#' },
  { text: 'Privacy Policy', link: '#' },
  { text: 'Terms of Use', link: '#' },
];

const tweetList = [
  {
    iconName: 'icofont-twitter',
    desc: 'Arwaax Online @Market Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!',
  },
  {
    iconName: 'icofont-twitter',
    desc: 'Arwaax Tech @Tech Hey! #HTML_Template Grab your item, 50% Big Sale Offer !!',
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h2>{title}</h2>
            <p>{desc}</p>
            <ul className="list-unstyled">
              {addressList.map((address, index) => (
                <li key={index}>
                  <i className={`${address.iconName} text-light`}></i> {address.text}
                </li>
              ))}
            </ul>
            <ul className="list-unstyled d-flex">
              {socialList.map((social, index) => (
                <li key={index} className="me-3">
                  <a href={social.siteLink} className={`text-light ${social.className}`}>
                    <i className={`icofont ${social.iconName}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h3>{ItemTitle}</h3>
            <ul className="list-unstyled">
              {ItemList.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-light">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h3>{quickTitle}</h3>
            <ul className="list-unstyled">
              {quickList.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-light">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h3>{tweetTitle}</h3>
            <ul className="list-unstyled">
              {tweetList.map((tweet, index) => (
                <li key={index}>
                  <i className={`${tweet.iconName} text-light`}></i> {tweet.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;