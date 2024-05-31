import { Contact } from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import { HeroCazac } from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import Navbar from "@/components/home/Navbar";
import OurWork from "@/components/home/OurWork";
import WhatIsIt from "@/components/home/WhatIsIt";
import { AuroraBackground } from "@/components/ui/aurora-background";
export default function Home() {

    return (
        <main className="overflow-y-hidden">
            <Navbar/>
            <AuroraBackground>
                <HeroCazac />
                <OurWork />
                <WhatIsIt />
                <HowWeWork />
                <Experience />
                <Contact />
            </AuroraBackground>
        </main>
    );
}
