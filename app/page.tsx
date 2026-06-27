import { Hero } from "@/components/hero";
import { Turn } from "@/components/sections/turn";
import { Gate } from "@/components/sections/gate";
import { Loop } from "@/components/sections/loop";
import { Refusal } from "@/components/sections/refusal";
import { Price } from "@/components/sections/price";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Turn />
      <Gate />
      <Loop />
      <Refusal />
      <Price />
      <Footer />
    </>
  );
}
