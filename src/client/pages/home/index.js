// import components
import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FullCard from "../../components/fullCard";
import HalfCard from "../../components/halfCard";
import Modal from "../../components/modal";
import Restrict from "../../components/restrict";
import "./index.scss";
// import assets
import img2 from "../../assets/images/limited/2.jpg";
import img3 from "../../assets/images/limited/3.jpg";
import img5 from "../../assets/images/limited/5.jpg";
import img7 from "../../assets/images/limited/7.jpg";
import img9 from "../../assets/images/limited/9.jpg";
// popular edition
import img1 from "../../assets/images/popular/1.jpg";
import img4 from "../../assets/images/popular/4.jpg";
import img6 from "../../assets/images/popular/6.jpg";
import img8 from "../../assets/images/popular/8.jpg";
import img10 from "../../assets/images/popular/10.jpg";
import img11 from "../../assets/images/popular/11.jpg";

// app component
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Restrict />
      <div className="home">
        <div className="home__wrapper">
          <Header />
          <main className="main" role="main">
            {/* intro */}
            <section className="intro">
              <h2 className="intro__title">
                In the beginning was the word, and the word was -
              </h2>
              <div className="intro__summary">
                <p>
                  A starlit ceremony, two million years ago. Lightning strikes
                  the monolith and the universe fractures. Apes spin off in
                  10,000 tribes, distinct but familiar. Every ape is unique.
                  Every ape is beautiful. Every ape is loved and every ape is
                  family, whatever their differences, wherever they are now.
                </p>
                <p>
                  Meanwhile, at the heart of the shattered universe, the PRIMAL
                  APES wait for the whole family to return. They wait and they
                  build out their style, they work the Hapewalk, and they plan
                  for a bigger future.
                </p>
              </div>
              <button className="intro__btn">Explore on OpenSea</button>
            </section>

            {/* about */}
            <section className="about">
              <div className="about__img"></div>
              <div className="about__content">
                <h2 className="about__title">
                  Unique, exclusive 3D and built to unite the Hapeverse -
                </h2>
                <div className="about__summary">
                  <p>
                    HAPEBEAST is a new art and fashion playground from
                    London-based studio Digimental. Built around an initial drop
                    of 8,192 unique NFTs on the Ethereum Blockchain, the project
                    unites style, technology and community and sets up HAPES as
                    next-generation fashion leaders.
                  </p>
                  <p>
                    You can find more about the HAPEBEAST team below and see the
                    lightest hints for our post-release plans. As we move closer
                    to launch, this site will evolve. Like apes at the dawn of a
                    new world, we're making something from nothing, noise from
                    silence. In the beginning was the word, and the word was,
                    and it still is...<b>HAPE!</b>
                  </p>
                </div>
                <button className="about__btn">Purchase on OpenSea</button>
              </div>
            </section>

            {/* limited */}
            <section className="limited">
              <h1 className="limited__title">
                HAPEBEAST 2.0 [ LIMITED EDITIONS ]
              </h1>
              <div className="limited__cards">
                <FullCard
                  image={img3}
                  title="Cyclops Great HVPE"
                  ethPrice="2.50"
                  usdPrice="3,618.36"
                  btnTitle="Coming Soon"
                />
                <FullCard
                  image={img1}
                  title="Street Punk HVPE"
                  ethPrice="1.28"
                  usdPrice="3,618.36"
                  btnTitle="Purchase"
                />
                <FullCard
                  image={img7}
                  title="Blue Beard HVPE"
                  ethPrice="1.85"
                  usdPrice="3,618.36"
                  btnTitle="Free Mint"
                />
                <FullCard
                  image={img8}
                  title="Old Glasses HVPE"
                  ethPrice="2.18"
                  usdPrice="3,618.36"
                  btnTitle="Purchase"
                />
              </div>
            </section>

            {/* popular */}
            <section className="popular">
              <h1 className="popular__title">
                HAPEBEAST 2.0 [ POPULAR EDITIONS ]
              </h1>
              <Modal onClose={() => setShow(false)} show={show} />
              <div className="popular__cards">
                <HalfCard
                  image={img2}
                  title="Black Samurai HVPE"
                  price="1.85"
                />
                <HalfCard
                  image={img5}
                  title="Old White HVPE"
                  price="1.28"
                  clickAction={() => setShow(true)}
                />
                <HalfCard image={img6} title="Black Jacket HVPE" price="2.18" />
                <HalfCard image={img4} title="Orange Afro HVPE" price="2.50" />
                <HalfCard
                  image={img8}
                  title="Yellow Jacket HVPE"
                  price="1.85"
                />
                <HalfCard
                  image={img9}
                  title="Black Unicorn HVPE"
                  price="1.28"
                />
                <HalfCard
                  image={img11}
                  title="Street Phones HVPE"
                  price="2.18"
                />
                <HalfCard image={img10} title="Mafia Boss HVPE" price="2.50" />
              </div>
            </section>

            {/* view more */}
            <section className="viewMore">
              <div className="viewMore__wrapper">
                <h1 className="viewMore__title">BROWSE MORE OF THE HAPES</h1>
                <button className="viewMore__btn">View More HAPEBEASTS</button>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
