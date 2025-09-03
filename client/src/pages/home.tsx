import profileImage from "@assets/ben_kelley_synthwave_1756932286182.png";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-retrowave-bg overflow-hidden">
      {/* Animated Stars Background */}
      <div className="stars fixed inset-0 opacity-30 pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="grid-pattern fixed inset-0 pointer-events-none"></div>
      
      {/* Main Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center space-y-8 float-up">
            {/* Hello World Header */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold neon-glow text-gradient pulse-slow" data-testid="heading-hello-world">
                HELLO WORLD
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-orange mx-auto rounded-full"></div>
            </div>

            {/* Tagline */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-retrowave-muted font-light tracking-wide max-w-3xl mx-auto leading-relaxed" data-testid="text-tagline">
                Welcome to the AI frontier!
              </p>
              <p className="text-sm md:text-base text-gray-300 font-light tracking-wide max-w-2xl mx-auto opacity-80" data-testid="text-subtitle">
                (this is a placeholder website, to test AI products & developer tools)
              </p>
            </div>

            {/* Profile Section */}
            <div className="mt-12 space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="neon-border rounded-full p-1 profile-glow">
                  <img 
                    src={profileImage}
                    alt="Ben Kelley - Synthwave Style Profile" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                    data-testid="img-profile"
                  />
                </div>
              </div>

              {/* Bio Section */}
              <div className="neon-border rounded-lg p-8 backdrop-blur-sm bg-retrowave-card max-w-2xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-gradient" data-testid="heading-name">
                  Ben Kelley
                </h2>
                
                <p className="text-lg text-retrowave-card-foreground leading-relaxed" data-testid="text-bio">
                  Product Manager exploring the intersection of AI innovation and business value. 
                  Passionate about building tools that amplify human potential and drive meaningful outcomes.
                </p>

                {/* LinkedIn Link */}
                <div className="flex justify-center">
                  <a 
                    href="https://linkedin.com/in/bpkelley" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover-glow inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-cyan text-retrowave-bg font-semibold rounded-lg transition-all duration-300"
                    data-testid="link-linkedin"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-xs text-retrowave-muted/60 text-center" data-testid="text-footer">
          Built for deployment testing • Retrowave aesthetic
        </p>
      </div>
    </div>
  );
}
