import { GraduationCap, BookOpen, Users, Brain } from "lucide-react";
import heroImage from "@/assets/hero-academic-burden.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero academic-pattern overflow-hidden">
      {/* Background knowledge visualization */}
      <div className="absolute inset-0 knowledge-visualization opacity-30"></div>
      
      {/* Academic icons floating */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <GraduationCap className="w-8 h-8 text-accent/40" />
      </div>
      <div className="absolute top-32 right-20 animate-bounce delay-2000">
        <BookOpen className="w-6 h-6 text-accent/30" />
      </div>
      <div className="absolute bottom-40 left-16 animate-bounce delay-3000">
        <Brain className="w-10 h-10 text-accent/20" />
      </div>
      <div className="absolute bottom-60 right-12 animate-bounce delay-500">
        <Users className="w-7 h-7 text-accent/35" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold font-crimson leading-tight">
                You Have Knowledge That Could{" "}
                <span className="text-accent animate-pulse">Transform Careers</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Your expertise could change thousands of lives, but you're drowning in course administration, content management, and educational operations instead of teaching and research.
              </p>
            </div>

            <div className="academic-card p-6 space-y-4">
              <h3 className="text-2xl font-crimson text-accent">Educational Reality Check</h3>
              <p className="text-lg text-white/80 italic">
                "When did being an educator become being a content manager, administrator, 
                and operations coordinator instead of a teacher and knowledge creator?"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="academic-button">
                Amplify Educational Impact
              </button>
              <button className="academic-button-secondary">
                Learn How It Works
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-academic">
              <img
                src={heroImage}
                alt="Educational leader surrounded by knowledge but weighed down by administrative tasks"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating academic elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-glow animate-pulse">
              78% Admin Time
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
              22% Knowledge Creation
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;