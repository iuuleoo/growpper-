import Header from "@/components/header";
import LeadForm from "@/components/Form";
import Features from "@/components/Features";
import Usage from "@/components/Usage";
import Faq from "@/components/Faq";
import Footer from "@/components/footer";
import { main } from "framer-motion/client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mt-4">
        <LeadForm />
      </section>

      <section className="mt-14">
        <Features />
      </section>

       <section>
        <Usage />
      </section>

      <section>
        <Faq />
      </section>

      <section className="mt-60">
        <Footer />
      </section>

    </main>
  );
}
