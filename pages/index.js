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

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <About />
            <Testimonials />
            <Projects />
            <Banner />
            <Contact />
        </>
    );
}
