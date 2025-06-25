
import React from "react";
import blog1 from "../Images/blog1.jpeg";
import blog2 from "../Images/blog2.jpeg";
import blog3 from "../Images/blog3.jpeg";
import blog4 from "../Images/blog4.jpeg";
import blog5 from "../Images/blog5.jpeg";
import blogBg from "../Images/blogBackground.jpeg";

const BlogPage = () => {
  return (
    <div
      className="blog-page"
      style={{ backgroundImage: `url(${blogBg})` }}
    >
      <div className="blog-header">
        <p className="issue-info">
          Issue No. 25 &nbsp;&nbsp;|&nbsp;&nbsp; Website Exclusive &nbsp;&nbsp;|&nbsp;&nbsp; June 25, 2025
        </p>
        <h1>ON THE BLOG</h1>
        <hr />
      </div>

      <div className="blog-feature">
        <img src={blog1} alt="Main Fashion" />
      </div>

      <div className="blog-columns">
        <div className="blog-text-block">
          <h2>LIFESTYLE | FASHION | STREETWEAR</h2>
          <p>
            Streetwear is the trendiest topic and talk of the town. Contrary to traditional characteristics of clothes, it focuses on individuality and personality.
            It revolutionizes the concept of modern fashion.
          </p>
          <p>
            Add a personal touch by customizing this layout as much as you want. Include bold visuals and capture attention with short punchy headlines and quotes.
          </p>
        </div>
        <div className="blog-side-img">
          <img src={blog2} alt="Street Style" />
        </div>
      </div>

      <div className="blog-columns">
        <div className="blog-side-img">
          <img src={blog3} alt="Glow Aesthetic" />
        </div>
        <div className="blog-text-block">
          <h2>GLOW & GRACE</h2>
          <p>
            Minimalist gold, natural light, wind-blown locks. The effortless styling of this shoot speaks volumes without trying hard. Bold brows and bare skin are all it takes.
          </p>
          <p>
            Add warm tones and reflective highlights to recreate this aesthetic—it's effortless beauty in motion.
          </p>
        </div>
      </div>

      <div className="blog-columns">
        <div className="blog-text-block">
          <h2>MEET KAMILLE & DEAN</h2>
          <p>
            The trendsetters of our streetwear collection. Kamille and Dean's blend of crisp whites, relaxed tailoring, and modern neutrals are redefining cozy cool.
          </p>
          <p>
            Add personal flair to this layout. You can include a mini interview section, callouts, or design elements to deepen engagement.
          </p>
        </div>
        <div className="blog-side-img">
          <img src={blog4} alt="Kamille & Dean" />
        </div>
      </div>

      <div className="blog-columns">
        <div className="blog-side-img">
          <img src={blog5} alt="Subtle Detail" />
        </div>
        <div className="blog-text-block">
          <h2>SUBTLE STATEMENTS</h2>
          <p>
            Style is in the details—rolled sleeves, layered whites, matte lips. Fashion doesn't always have to shout; sometimes it whispers in tone and texture.
          </p>
          <p>
            Try pairing oversized sunglasses with earthy tones and raw-edge linen for that quiet-luxury feel.
          </p>
        </div>
      </div>

      <footer className="blog-footer">
        <p>www.SHOPCART.com</p>
      </footer>
    </div>
  );
};

export default BlogPage;
