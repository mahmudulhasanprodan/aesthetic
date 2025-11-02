import Banner from "@/app/headercomponents/Banner";
import Consultation from "@/app/headercomponents/Consultation";
import Offer from "@/app/headercomponents/Offer";
import Services from "@/app/headercomponents/Services";
import Doctors from "@/app/headercomponents/Doctors";
import FooterTop from "@/app/headercomponents/FooterTop";
import FooterBottom from "@/app/headercomponents/FooterBottom";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Consultation />
        <Offer />
        <Services />
        <Doctors />
        <FooterTop />
        <FooterBottom />
      </main>
    </div>
  );
}
