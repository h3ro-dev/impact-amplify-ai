import { Target, TrendingUp, Users2, Lightbulb, DollarSign, BarChart3 } from "lucide-react";

const FrustrationSection = () => {
  const frustrations = [
    {
      icon: Target,
      title: "Untapped Student Potential",
      description: "Students who could benefit from your advanced expertise can't access it because you're limited by operational capacity rather than knowledge depth."
    },
    {
      icon: Users2,
      title: "Industry Professionals Left Waiting",
      description: "Professionals seeking your insights can't get them because your time is consumed by basic course administration instead of high-level content creation."
    },
    {
      icon: Lightbulb,
      title: "Research Collaborations Unexplored",
      description: "Academic partnerships that could advance knowledge remain dormant because relationship building requires time you're spending on operations."
    },
    {
      icon: TrendingUp,
      title: "Thought Leadership Opportunities Missed",
      description: "Professional development platforms go unused because content preparation competes with administrative demands."
    },
    {
      icon: DollarSign,
      title: "Economic Value Unrealized",
      description: "Your specialized knowledge could create significant value for learners, but delivery limitations prevent market reach."
    }
  ];

  return (
    <section className="py-20 gradient-subtle text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 academic-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-crimson mb-6">
            The Tragedy of <span className="text-accent">Unshared Expertise</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The unique burden of knowledge leadership constrained by operational limitations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {frustrations.map((frustration, index) => (
            <div key={index} className="group hover:scale-105 transition-academic">
              <div className="academic-card bg-white/5 border-white/10 p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0 group-hover:bg-accent/30 transition-academic">
                    <frustration.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-crimson mb-3 text-white">
                      {frustration.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {frustration.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Impact Gap */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <BarChart3 className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold font-crimson text-white">
              The Knowledge Impact Gap
            </h3>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed italic">
            "Look at the difference between what you know and what you're able to teach effectively. 
            That gap represents the educational impact you're not having because of operational 
            limitations rather than expertise constraints."
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-white font-semibold">Your Knowledge Potential</p>
              <div className="w-full bg-accent/20 rounded-full h-4 mt-4">
                <div className="bg-accent h-4 rounded-full w-full"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-destructive mb-2">22%</div>
              <p className="text-white font-semibold">Current Knowledge Sharing</p>
              <div className="w-full bg-white/20 rounded-full h-4 mt-4">
                <div className="bg-destructive h-4 rounded-full w-1/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrustrationSection;