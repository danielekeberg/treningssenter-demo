import Hero from "@/app/components/Hero";
import Tokens from "@/app/components/Tokens";
import Membership from "@/app/components/Membership";
import Utility from "@/app/components/Utility";
import Hours from "@/app/components/Hours";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Tokens />
      <Membership />
      <Utility />
      <Hours />
      <Footer />
    </div>
  );
}
