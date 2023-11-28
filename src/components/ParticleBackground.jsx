import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback (async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return(<div className="moving-background">
        <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fullScreen: { enable: false },
        background: {
            image: "url('./images/background.png')",
            size: "100% 100%"
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 10,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#FFFFFF',
            },
            links: {
                color: '#FFFFFF',
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.50,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.25, max: 2 },
            },
        },
        detectRetina: true,
    }}
/>
</div>)
}

export default ParticleBackground;