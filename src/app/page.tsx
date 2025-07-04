import Image from "next/image";
import Register from "./components/Register";
import VerticalScrollIndicator from "./components/verticalbar";
import TimerEclipsseSection from "./components/TimerEclipsse";
import Card from "./components/Card";
import VerticalProgress from "./components/verticalbar";
import QRScrollSection from "./components/Qrsection";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden ">
      <Register />
      <Card />
      <TimerEclipsseSection />
      <QRScrollSection />
    </div>
  );
}
