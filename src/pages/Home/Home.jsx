import React, { useEffect, useState } from "react";
import "./home.scss";
import carIcon from "../../assets/car.png";
import coffeeIcon from "../../assets/coffee-cup.png";
import convIcon from "../../assets/convenient.png";
import { Link, useLocation } from "react-router-dom";
import { buses } from "./buses";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import mainImg from "../../assets/bus-img.jpg";
import placeholderImg from "../../assets/placeholder-bus-img.jpg";
import styled from "styled-components";

const LazyPicture = styled(LazyLoadImage)`
  object-fit: cover;
  width: 100vw;
  height: 85vh;
  @media screen and (max-width: 500px) {
    object-position: 60% 0;
  }
`;
const Home = () => {
  const { hash, pathname } = useLocation();
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const idName = hash.substring(1);
    scroll(idName);
  }, [hash]);

  return (
    <main id="main-content">
      <header id="home">
        <div className="img">
          <LazyPicture
            src={mainImg}
            effect="blur"
            width={"100%"}
            placeholderSrc={placeholderImg}
            height={"100%"}
            alt="bus"
          />
        </div>

        <div className="header-content">
          <h1>Wypożyczalnia busów - Lubaczów</h1>
          <p>Sprawdż naszą ofertę i zarezerwuj teraz!</p>
          <Link
            to="/#fleet"
            onClick={() => {
              scroll("fleet");
              window.scrollTo(0, 0);
            }}
          >
            <button>Zobacz nasze busy</button>
          </Link>
        </div>
      </header>

      <section id="about" className="key-points">
        <div>
          <a
            href="https://www.flaticon.com/free-icons/comfortable"
            target="blank"
          >
            <img src={convIcon} alt="Guy on chair" />
          </a>
          <p className="title">Komfort</p>
          <p>
            Luksusowe podróże zawsze zaczynają się od wygodnego transportu.
            Oferujemy doskonale utrzymane busy, zapewniające nie tylko komfort,
            ale także bezpieczeństwo. Wynajmij u nas i uczynij swoją podróż
            niezapomnianą.
          </p>
        </div>
        <div>
          <a href="https://www.flaticon.com/free-icons/vehicle" target="blank">
            <img src={carIcon} alt="Car" />
          </a>
          <p className="title">Nieograniczone możliwości</p>
          <p>
            Zaplanuj swoją podróż z nami i ciesz się pełną swobodą. Nasza flota
            nowoczesnych busów jest dostępna, aby spełnić Twoje potrzeby.
            Niezależnie od tego, czy to wycieczka z przyjaciółmi czy rodzinna
            podróż, mamy odpowiedni pojazd dla Ciebie.
          </p>
        </div>
        <div>
          <a href="https://www.flaticon.com/free-icons/food" target="blank">
            <img src={coffeeIcon} alt="Coffee cup" />
          </a>
          <p className="title">Konkurencyjne warunki</p>
          <p>
            Podróżuj z lekkością i wygodą dzięki naszym busom. Oferujemy
            konkurencyjne ceny, elastyczne opcje wynajmu i obsługę najwyższej
            jakości. Z nami Twoja podróż zaczyna się od chwili, gdy wsiadasz do
            naszego komfortowego busa.
          </p>
        </div>
      </section>
      <div className="wrapper">
        <section className="section-about">
          <div className="img-div">
            {/* <img src={aboutImg} alt="People inside bus" /> */}
          </div>
          <div className="about-text">
            <h2 className="title">O nas</h2>
            <p>
              Jesteśmy firmą specjalizującą się w wynajmie busów, znajdującą się
              w Lubaczowie woj. Podkarpackim. Oferujemy kompleksowy wynajem w
              niewygórowanej cenie, dostosowane do różnorodnych potrzeb. Nasza
              oferta skierowana jest do biur podróży, jednostek samorządu
              terytorialnego, instytucji oświatowych i kulturalnych, a także
              klientów indywidualnych, poszukujących solidnego partnera w
              kwestiach transportu. <br />
              <br /> Zapraszamy do skorzystania z naszego doświadczenia,
              gwarantującego rzetelną pomoc na każdym etapie organizacji
              wyjazdu. Posiadamy nowoczesną flotę busów, utrzymaną w doskonałym
              stanie, dostarczającą komfortowe warunki podróży zarówno na
              terenie kraju, jak i całej Europy. <br />
              <br /> Stawiamy na profesjonalizm, elastyczne podejście do
              indywidualnych potrzeb klienta, precyzyjne kalkulacje kosztów oraz
              fachowe doradztwo w zakresie optymalizacji trasy i unikania
              niepotrzebnych opłat. <br />
              <br /> Z nami Wasze podróże będą nie tylko bezpieczne, ale również
              komfortowe i doskonale zorganizowane.
            </p>
          </div>
        </section>
        <section id="fleet" className="fleet-section">
          <h2 className="title">Nasza Flota</h2>
          <div className="buses">
            {buses.map((bus) => (
              <Link
                to={bus.link}
                key={bus.info.id}
                state={bus.link}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div
                  className="bus"
                  style={{ backgroundImage: `url(${bus.info.imgMain})` }}
                >
                  <hr className="hrLine" />
                  <p>{bus.info.name}</p>
                  <p className="rez">Sprawdź i zarezerwuj -&gt; </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
