import Header from "@/components/header";
import LeadForm from "@/components/Form";
import Features from "@/components/Features"; // ⬅️ adicionando aqui

export default function Home() {
  return (
    <>
      <Header />
      <LeadForm />
      <Features />
    </>
  );
}
