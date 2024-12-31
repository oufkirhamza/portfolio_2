
import About from './components/about';
import { FirstSection } from './components/firstSection';
import Projects from './components/projects';
import Skills from './components/skills';
export const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <Projects/>
            <Skills/>
            <About/>
        </>
    );
}
