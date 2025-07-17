import Consultation from "@/components/home/consult";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Operate from "@/components/home/operate";
import OurService from "@/components/home/service";
import Vision from "@/components/home/vision";

export default function Home() {
  return (
    <>
   <Navbar/>
    <Hero/>
    <Vision/>
    <OurService/>
    <Operate />
    <Consultation />
    <Footer />
    </>
  )
}
