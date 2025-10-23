import Banner from "@/app/headercomponents/Banner";
import Consultation from "@/app/headercomponents/Consultation";
import Offer from "@/app/headercomponents/Offer";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Consultation />
        <Offer />
      </main>
    </div>
  );
}
