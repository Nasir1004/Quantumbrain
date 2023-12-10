import EnsuringSafety from "@/components/home/safety/EnsuringSafety";
import Header from "@/components/home/Header";
import SafetyApproach from "@/components/home/safety/SafetyApproach";

export default function Home() {
  return (
    <>
    <Header canStick={true} />
    <EnsuringSafety />
    <SafetyApproach />
    </>
  );
}