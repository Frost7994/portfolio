// Sections
import {
    About,
    Banner,
    Contact,
    Hero,
    Projects,
    Skills,
    Testimonials,
} from "sections";

import data from "data";

export default function Home() {
    const { hero } = data;

    return (
        <>
            <Hero data={hero} />
            <Skills />
            <About />
            <Testimonials />
            <Projects />
            <Banner />
            <Contact />
        </>
    );
}
