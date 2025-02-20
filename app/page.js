import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import HowWeHelp from "@/components/home/HowWeHelp";
import StoryHighlights from "@/components/home/StoryHighlights";
import Statistics from "@/components/home/Statistics";

export default function Home() {
    return (
        <div>
            <Hero />
            <Mission />
            <Statistics />
            <HowWeHelp />
            {//<StoryHighlights />
            }
        </div>
    );
}