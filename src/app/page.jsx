import Banner from "@/components/home/Banner";
import DailyEssiential from "@/components/home/DailyEssiential";
import Features from "@/components/home/Features";
import Testimonial from "@/components/home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-15">
      <section>
      <Banner></Banner>
      </section>

      <section>
      <Features></Features>
      </section>
      <section>
        <DailyEssiential></DailyEssiential>
      </section>

      <section> 
        <Testimonial></Testimonial>
      </section>

    </div>
  );
}
