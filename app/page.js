import Banner from "@/app/headercomponents/Banner";
import Consultation from "@/app/headercomponents/Consultation";
import Offer from "@/app/headercomponents/Offer";
import Services from "@/app/headercomponents/Services";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Consultation />
        <Offer />
        <Services />
      </main>
    </div>
  );
}
