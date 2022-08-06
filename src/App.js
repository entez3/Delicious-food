import React from "react";
import Header from "./components/header";
import Story from "./components/story";
import Services from "./components/services";
import Ordering from "./components/ordering";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import "./styles/fonts.css";
import "./styles/grid.css";
import "./styles/main.css";
import "./styles/header.css";
import "./styles/story.css";
import "./styles/services.css";
import "./styles/ordering.css";
import "./styles/gallery.css";
import "./styles/footer.css";
import "./styles/responsive.css";

const App = () => {
  return (
    <>
      <header class="grid-item header">
        <Header />
      </header>
      <main className="container">
        <section class="grid-item story">
          <Story />
        </section>
        <section class="grid-item services">
          <Services />
        </section>
        <section class="grid-item ordering">
          <Ordering />
        </section>
        <section class="grid-item gallery">
          <Gallery />
        </section>
        <hr />
        <footer class="grid-item footer">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
