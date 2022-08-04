import React from "react";
import "./styles/fonts.css";
import "./styles/main.css";
import "./styles/header.css";
import "./styles/story.css";
import "./styles/services.css";
import "./styles/ordering.css";
import "./styles/gallery.css";
import "./styles/responsive.css";

const App = () => {
  return (
    <>
      <header class="grid-item header">
        <p>wellcome to</p>
        <h2>
          <span>DELICIOUS </span>FOOD
        </h2>
        <button className="header-btn">ORDER FOOD</button>
      </header>
      <main className="container">
        <section class="grid-item story">
          <h3 className="section-title">Our Story</h3>
          <div>
            <img className="img img-1" src="/pic/story.jpg" alt="story" />
            <img className="img img-2" src="/pic/story1.jpg" alt="story" />
            <img className="img img-3" src="/pic/story2.jpg" alt="story" />
            <img className="img img-4" src="/pic/story3.jpg" alt="story" />
          </div>
        </section>
        <section class="grid-item services">
          <h3 className="section-title">our services</h3>
          <div className="services-box">
            <div className="services-item service1">
              <img className="img-ser" src="/pic/services.jpg" alt="services" />
              <h3>free</h3>
              <p>Free delivery</p>
            </div>
            <div className="services-item service2">
              <img
                className="img-ser"
                src="/pic/services1.jpg"
                alt="services"
              />
              <h3>hot</h3>
              <p>Free delivery</p>
            </div>
            <div className="services-item service3">
              <img
                className="img-ser"
                src="/pic/services2.jpg"
                alt="services"
              />
              <h3>delicious</h3>
              <p>Free delivery</p>
            </div>
            <div className="services-item service4">
              <img
                className="img-ser"
                src="/pic/services3.jpg"
                alt="services"
              />
              <h3>free</h3>
              <p>Free delivery</p>
            </div>
            <div className="services-item service5">
              <img
                className="img-ser"
                src="/pic/services4.jpg"
                alt="services"
              />
              <h3>hot</h3>
              <p>Free delivery</p>
            </div>
            <div className="services-item service6">
              <img
                className="img-ser"
                src="/pic/services6.jpg"
                alt="services"
              />
              <h3>delicious</h3>
              <p>Free delivery</p>
            </div>
          </div>
        </section>
        <section class="grid-item ordering">
          <h3 className="section-title">ordering</h3>
          <section className="oreding-box">
            <div className="left">
              <h4>order esily!</h4>
              <h4 className="right-titel">branch</h4>
              <h6>
                France<span class="parantes">(</span>Paris
                <span class="parantes">)</span>
              </h6>
              <h6>
                German<span class="parantes">(</span>Berlin
                <span class="parantes">)</span>
              </h6>
              <h6>
                Canada<span class="parantes">(</span>Torento
                <span class="parantes">)</span>
              </h6>
              <h6 class="right-titel banner">
                You just can find any delicious here Your food will reach you
                quickly
              </h6>
            </div>
            <div className="right">
              <h3 className="right-titel">tell:</h3>
              <h4>659-743-152</h4>
              <h3 className="right-titel">Email:</h3>
              <h4>info@gmail.com</h4>
              <section className="right-box">
                <img src="/pic/11.jpg" alt="ordering" />
                <img src="/pic/01.jpg" alt="ordering" />
                <img src="/pic/19.jpg" alt="ordering" />
              </section>
            </div>
          </section>
        </section>
        <section class="grid-item gallery">
          <h3 className="section-title">gallery</h3>
          <section className="gallery-box">
            <div className="gallery gallery1"></div>
            <div className="gallery gallery2"></div>
            <div className="gallery gallery3"></div>
            <div className="gallery gallery4"></div>
            <div className="gallery gallery5"></div>
          </section>
        </section>
        <footer class="grid-item footer">
          <h3 className="section-title">footer</h3>
        </footer>
      </main>
    </>
  );
};

export default App;
