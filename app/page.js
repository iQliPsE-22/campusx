import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust the path as necessary
import Header from "../components/Header"; // Adjust the path as necessary
import Hero from "./../components/Hero/Hero";
export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white poppins">
      <Hero />
    </div>
  );
}
