import './index.css'
import './script.jsx'
import LiquidEther from './script.jsx'

function Hero() {
    return (
        <>  
            <div id='Hero' style={{ width: '100%', height: 800, position: 'relative' }}>
                <LiquidEther
                colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
            />
            <div className="hero-content-overlay">
                <div className="hero-text-content">
                    <h1 className="hero-main-title">
                        Building seamless digital journeys that define your brand.
                    </h1>
                    <p className="hero-description">
                        By combining innovation and precision, we craft digital solutions that not only look beautiful but also perform seamlessly.                    </p>
                    <div className="hero-buttons">
                        <button className="hero-btn hero-btn-primary">Get Started</button>
                        <button className="hero-btn hero-btn-secondary">See Our Work</button>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span className="scroll-text">Scroll Down</span>
                    <span className="scroll-arrow">↓</span>
                </div>
            </div>
            </div>
        </>
    )
}

export default Hero