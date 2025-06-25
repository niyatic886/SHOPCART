
import React, {useContext, useRef} from "react"
import { ProductContext } from "../contexts/productContext"
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import banner1 from '../Images/banner-image-1.jpg';
import banner2 from '../Images/banner-image-2.jpg';
import banner3 from '../Images/banner-image-3.jpg';
import banner4 from '../Images/banner-image-4.jpg';
import banner5 from '../Images/banner-image-5.jpg';
import banner6 from '../Images/banner-image-6.jpg';
import cart1 from '../Images/cat-item1.jpg';
import cart2 from '../Images/cat-item2.jpg';
import cart3 from '../Images/cat-item3.jpg';
import blog from '../Images/blog1.jpg';
import insta1 from '../Images/insta-item1.jpg';
import insta2 from '../Images/insta-item2.jpg';
import insta3 from '../Images/insta-item3.jpg';
import insta4 from '../Images/insta-item4.jpg';
import insta5 from '../Images/insta-item5.jpg';
import insta6 from '../Images/insta-item6.jpg';
import facebook from '../Images/facebook--v1.png';
import insta from '../Images/instagram-new--v1.png';
import twitter from '../Images/twitter--v1.png';
import youtube from '../Images/youtube-play--v1.png';
import pinterest from '../Images/pinterest--v1.png';
import visa from '../Images/visa.png';
import paypal from '../Images/paypal.png';
import mastercard from '../Images/mastercard.png';
import transit from '../Images/in-transit.png';



function Home(){
// get products from product context
    const {products} = useContext(ProductContext)
    console.log(products)
// get only men and women clothing category
const filteredProducts = products.filter(item =>{
    return item.category === "men's clothing" || item.category === "women's clothing" || item.category=== "jewelery"


})

// Scroll ref
  const scrollRef = useRef();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const banners = [
    {
      image: banner1,
      title: 'Soft Leather Jacket',
      description: 'Discover timeless leather styles for any occasion.',
      category: "women's clothing",
    },
    {
      image: banner2,
       title: 'Classic Trench Coat',
      description: 'Stay warm and stylish with this winter essential.',
      category: "women's clothing",
    
    },
    {
      image: banner3,
       title: 'Urban Layered Look',
      description: 'Layer your look with fashion-forward outerwear.',
      category: "women's clothing"
    
    },
    {
      image: banner4,
       title: 'Denim Vibes',
       description: 'Bring street style alive with high-grade denim.',
       category: "men's clothing",
    },
    {
      image: banner5,
      title: 'Minimal Streetwear',
      description: 'Modern and clean. Less is more.',
      category: "women's clothing",
    },
    {
      image: banner6,
      title: 'Cool White Hat',
      description: 'Top off your style with the cleanest fit.',
      category: "jewelery",
    },
  ];

 

    return(
        
           <div className="home">
      <div className="home_screen">
        <h1>New Collections</h1>
        <p>
          Explore our curated collection of the latest fashion trends. From men's classics to women's essentials — style starts here.
        </p>
      </div>
      {/* Carousel starts here */}
    <div className="carousel_wrapper">
      <button className="scroll_btn_left" onClick={scrollLeft}>←</button>
      

      <div className="carousel_container" ref={scrollRef}>
        <div className="carousel_track">
          {banners.map((item, index) => (
            <div className="carousel_slide" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={`/products`}>
                <button className="discover_btn">DISCOVER NOW</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button className="scroll_btn_right" onClick={scrollRight}>→</button>
    </div>
    <div className="features_section">
  {[
    {
      icon: "https://img.icons8.com/ios/50/calendar--v1.png",
      title: "Book An Appointment",
      text: "Schedule personalized styling sessions at your convenience with our in-store experts.",
    },
    {
      icon: "https://img.icons8.com/ios/50/shopping-bag--v1.png",
      title: "Pick Up In Store",
      text: "Order online and collect your purchase at your preferred store location hassle-free.",
    },
    {
      icon: "https://img.icons8.com/ios/50/gift--v1.png",
      title: "Special Packaging",
      text: "Enjoy elegant, eco-conscious packaging designed for gifting and presentation.",
    },
    {
      icon: "https://img.icons8.com/ios/50/return.png",
      title: "Free Global Returns",
      text: "Return any item within 30 days from anywhere in the world—no questions asked.",
    },
  ].map((feature, index) => (
    <div
      className="feature fade-in"
      key={index}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <img src={feature.icon} alt={feature.title} />
      <h4>{feature.title}</h4>
      <p>{feature.text}</p>
    </div>
  ))}
</div>

<div className="category-section">
  {[
    {
      image: cart1,
      label: "SHOP FOR MEN",
      category: "men's clothing",
    },
    {
      image: cart2,
      label: "SHOP FOR WOMEN",
      category: "women's clothing",
    },
    {
      image: cart3,
      label: "SHOP ACCESSORIES",
      category: "jewelery",
    },
  ].map((item, index) => (
    <Link
      to={`/products?category=${encodeURIComponent(item.category)}`}
      className="category-card"
      key={index}
    >
      <img src={item.image} alt={item.label} />
      <p>{item.label}</p>
    </Link>
  ))}
</div>

<div className="winter-collection-section">
  <div className="winter-image">
    <img src={blog} alt="Classic Winter Collection" />
  </div>
  <div className="winter-content">
    <h2>CLASSIC WINTER COLLECTION</h2>
    <p>
      Discover timeless elegance in our Classic Winter Collection where refined silhouettes meet luxurious warmth. 
      From tailored coats to statement knitwear, each piece is designed for comfort, sophistication, and enduring style. 
      Redefine your winter wardrobe with garments that are as versatile as they are elegant.
    </p>
    <Link to="/products">
      <button className="shop-btn">SHOP COLLECTION</button>
    </Link>
  </div>
</div>


<footer>
  {/* Instagram Grid */}
  <div className="instagram-grid">
    <img src={insta1} alt="Instagram 1" />
    <img src={insta2} alt="Instagram 2" />
    <img src={insta3} alt="Instagram 3" />
    <img src={insta4} alt="Instagram 4" />
    <img src={insta5} alt="Instagram 5" />
    <img src={insta6} alt="Instagram 6" />
    <div className="insta-overlay">Follow us on Instagram</div>
  </div>

  {/* Footer Content */}
  <div className="footer-main">
    {/* CHIRA Section */}
    <div className="footer-col brand-info">
      <h2>SHOPCART</h2>
      <p>
        We bring you curated fashion from top designers with attention to detail,
        timeless style, and comfort. Crafted with care for modern living.
      </p>
     <div className="social-icons">
  <a href="https://github.com/niyatic886" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>
  <a href="https://github.com/niyatic886">
    <img src={insta} alt="Instagram" />
  </a>
  <a href="https://github.com/niyatic886">
    <img src={twitter} alt="Twitter" />
  </a>
  <a href="https://github.com/niyatic886">
    <img src={pinterest} alt="Pinterest" />
  </a>
  <a href="https://github.com/niyatic886">
    <img src={youtube} alt="YouTube" />
  </a>
</div>

    </div>

    {/* Quick Links */}
    <div className="footer-col quick-links">
      <h3>QUICK LINKS</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div className="footer-col contact">
      <h3>CONTACT US</h3>
      <p>Do you have any questions or suggestions?<br />
        <strong>contact@SHOPCART.com</strong>
      </p>
      <p>Do you need support? Give us a call.<br />
        <strong>+91 720 11 52 78</strong>
      </p>
    </div>
  </div>
</footer>

<div className="footer-bottom">
  <div className="shipping-payment">
    <span>We ship with:</span>
    <img src={transit} alt="Post" />

    <span style={{ marginLeft: '20px' }}>Payment Option:</span>
    <img src={visa} alt="Visa" />
    <img src={paypal} alt="PayPal" />
    <img src={mastercard} alt="MasterCard" />
  </div>

  <div className="copyright">
    <p>
      © Copyright 2025 ShopCart. All rights reserved. Designed by
      <span> Niyati Chaurasia </span>
    </p>
  </div>
</div>


    </div>

     


    )
}

export default Home