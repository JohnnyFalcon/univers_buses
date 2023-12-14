import setraImg from "../../assets/setra-front.jpg";
import mercImg from "../../assets/merc-front.jpg";
import setra2 from "../../assets/setra2.jpg";
import setra3 from "../../assets/setra3.jpg";
import setra4 from "../../assets/setra4.jpg";
import merc2 from "../../assets/merc2.jpg";
import merc3 from "../../assets/merc3.jpg";
import merc4 from "../../assets/merc4.jpg";
import reno from "../../assets/reno-front.png";
import renoBez from "../../assets/reno-front-bez.png";

import soon from "../../assets/soon.png";
import reno2 from "../../assets/reno2.jpg";

export const buses = [
  {
    link: "setra-s415-gt-hd",
    info: {
      id: "0",
      name: "Autobus Setra S 415 GT-HD",
      description:
        "Zapraszamy do wynajęcia luksusowego autobusu Setra S 415 GT-HD - kwintesencji komfortu i elegancji w podróżach dalekobieżnych. Znajdź luksus w każdym detalu tego doskonale zaprojektowanego pojazdu, gdzie podróż staje się wyjątkowym przeżyciem. \n\nSetra S 415 GT-HD oferuje nie tylko przestronne wnętrze, ale także zaawansowane udogodnienia, takie jak klimatyzacja, systemy multimedialne i ergonomiczne siedzenia, które gwarantują pełen relaks podczas podróży. \n\nNiech Twoja podróż stanie się niezapomnianym doświadczeniem dzięki Setra S 415 GT-HD. Skorzystaj z naszych usług, aby zorganizować wyjątkową trasę, gdzie luksus i wygoda są priorytetem. Zaufaj Setra - Twojemu komfortowi niech towarzyszy elegancja w każdym kilometrze.\n\nOferta z kierowcą.",
      spec: [
        "Liczba miejsca 49+ 2+1",
        " Klimatyzacja",
        " WC",
        " DVD",
        "Lodówka",
        "Mikrofon",
        " CaffeeBar",
        "euro 5"
      ],
      imgMain: setraImg,
      images: [setraImg, setra2, setra3, setra4]
    }
  },
  {
    link: "mercedes-sprinter-519",
    info: {
      id: "1",
      name: "Bus MERCEDES SPRINTER 519",
      description:
        "Odkryj wygodę podróżowania naszym praktycznym autobusem Mercedes Sprinter 519. Z solidnością i funkcjonalnością, ten pojazd oferuje przyjemne doświadczenia podróżowania. Wygodne fotele,przestronne wnętrze i bezpieczne systemy sprawiają, że podróżowanie staje się komfortowe. Dzięki różnorodnym opcjom konfiguracji, możesz dostosować autobus do swoich potrzeb. Zarezerwuj już dziś i doświadcz podróży na solidnym poziomie. Solidność, bezpieczeństwo i praktyczność - wszystko w jednym pojeździe.\n\nOferta z kierowcą.",
      spec: [
        "Liczba miejsca 20+1",
        " Klimatyzacja",
        " DVD",
        "Mikrofon",
        "euro 5"
      ],
      imgMain: mercImg,
      images: [mercImg, merc2, merc3, merc4]
    }
  }
];

export const miniBuses = [
  {
    link: "renault-traffic-21",
    info: {
      id: "0",
      name: "Renault Trafic 2021",
      description:
        "Odkryj doskonałą równowagę między stylowym designem a praktyczną funkcjonalnością w Renault Trafic. Ten nowoczesny van nie tylko zapewnia komfortową podróż, ale także reprezentuje wszechstronność dla różnych celów użytkowania. Trafic to idealny wybór dla tych, którzy cenią sobie efektywność, oszczędność i uniwersalność. Wynajmij go już dziś i spraw, by Twoje podróże były równie udane, niezależnie od potrzeb.",
      spec: [
        "Liczba miejsc: 9",
        "Klimatyzacja",
        "Elektryczne szyby i lusterka",
        "Sensor cofania",
        "Tempomat",
        "System audio z MP3",
        "Euro 6",
        "Przestronna przestrzeń bagażowa"
      ],
      imgMain: reno,
      images: [reno, reno2]
    }
  },
  {
    link: "renault-traffic-20",
    info: {
      id: "1",
      name: "Renault Trafic 2020",
      description:
        "Odkryj doskonałą równowagę między stylowym designem a praktyczną funkcjonalnością w Renault Trafic. Ten nowoczesny van nie tylko zapewnia komfortową podróż, ale także reprezentuje wszechstronność dla różnych celów użytkowania. Renault Trafic to idealny wybór dla tych, którzy cenią sobie efektywność, oszczędność i uniwersalność. Wynajmij go już dziś i spraw, by Twoje podróże były równie udane, niezależnie od potrzeb.",
      spec: [
        "Liczba miejsc: 9",
        "Klimatyzacja",
        "Elektryczne szyby i lusterka",
        "Sensor cofania",
        "Tempomat",
        "System audio z MP3",
        "Euro 6",
        "Przestronna przestrzeń bagażowa"
      ],
      imgMain: renoBez,
      images: [renoBez]
    }
  }
];

export const cars = [
  {
    link: "soon",
    info: {
      id: "0",
      name: "",
      description: "Wkrótce również dostępne samochody osobowe",
      spec: [],
      imgMain: soon,
      images: [soon]
    }
  }
];
