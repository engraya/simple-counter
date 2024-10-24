
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Counter",
  description: "Simple counter",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
