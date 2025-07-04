import Image from "next/image";
import Register from "./components/Register";
import VerticalScrollIndicator from "./components/verticalbar";
import HeroSection from "./components/paidout";
import Card from "./components/Card";
import VerticalProgress from "./components/verticalbar";
import QRScrollSection from "./components/Qrsection";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden ">
      <Register />
      <Card />
      <HeroSection />
      <QRScrollSection />
    </div>
  );
}
