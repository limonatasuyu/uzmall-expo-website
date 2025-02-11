"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomePageSpeakers } from "@/components/home-page-speakers";

export default function CREAwardsPage() {
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#095d66] to-[#15bacc]">
          <section className="flex justify-center w-screen mt-24">
            <div className="w-[90%] max-w-7xl">
              <HomePageSpeakers />
            </div>
          </section>
      </main>
      <Footer />
    </>
  );
} 
