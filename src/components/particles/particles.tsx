import React, { FC, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import options from './particlesOptions.json';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import './particles.scss';

interface IParticlesComponent {
    option?: "intro" | "mouse";
}

const ParticlesComponent: FC<IParticlesComponent> = ({ option = "intro" }) => {
    
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return <Particles 
                id="tsparticles"
                init={particlesInit}
                className="particles__container"
                options={ (options as any)[option] as ISourceOptions }
            />
}

export default ParticlesComponent;