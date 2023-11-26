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
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 75,
                enable: true,
                opacity: 0.9,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.25,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 400,
                },
                value: 80,
            },
            opacity: {
                value: 0.9,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.5, max: 2 },
            },
        },
        detectRetina: true,
    }}
/>
</div>)
}

export default ParticleBackground;