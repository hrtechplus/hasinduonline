import Dictionary from "../../assets/imgesBg/portfolio/Dictionary.jpg";
import QRCode from "../../assets/imgesBg/portfolio/QR Code Generator.jpg";
import NIC from "../../assets/imgesBg/portfolio/nic.webp";
import RPG from "../../assets/imgesBg/portfolio/rpg.webp";
import FreelandCo from "../../assets/imgesBg/portfolio/freelandco.jpg";
import Schhol from "../../assets/imgesBg/portfolio/school.jpg";

const Menu = [
  {
    id: 1,
    image: Dictionary,
    title: "Sinhala-English Dictionary",
    category: ["Frontend", "React"],
    url: "https://dictionary.hasindu.online/",
  },
  {
    id: 2,
    image: QRCode,
    title: "Custom QR Code Generator",
    category: ["Frontend", "React"],
    url: "https://qrcode.hasindu.online/",
  },

  {
    id: 3,
    image: FreelandCo,
    title: "freelando.com",
    category: ["Frontend", "HTML/CSS/JS"],
    url: "https://www.freelandco.com/",
  },
  {
    id: 4,
    image: Schhol,
    title: "minupresidents.lk",
    category: ["Frontend", "HTML/CSS/JS"],
    url: "https://minupresidents.lk/",
  },
  {
    id: 5,
    image: RPG,
    title: "Random Password Generator",
    category: ["Frontend", "HTML/CSS/JS"],
    url: "https://www.npmjs.com/package/wallhaven-cli",
  },

  {
    id: 6,
    image: NIC,
    title: "NIC Details Finder",
    category: ["Frontend", "HTML/CSS/JS"],
    url: "https://www.hasindu.online/apps/nic.html",
  },
];

export default Menu;
