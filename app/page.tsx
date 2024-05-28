import { HeroCazac } from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import Navbar from "@/components/home/Navbar";
import WhatIsIt from "@/components/home/WhatIsIt";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useRef } from "react";

export default function Home() {

    return (
        <main className="overflow-y-hidden">
            <Navbar/>
            <AuroraBackground>
                <HeroCazac />
                <WhatIsIt />
                <HowWeWork />
                <div className="h-screen">
                </div>
            </AuroraBackground>
        </main>
    );
}
