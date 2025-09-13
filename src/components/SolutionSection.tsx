import { Bot, BookOpen, Users, Search, Globe, Zap } from "lucide-react";

const SolutionSection = () => {
  const capabilities = [
    {
      icon: BookOpen,
      title: "Content Creation AI",
      description: "Transform your expertise into engaging educational content, courses, and learning materials without spending months on production."
    },
    {
      icon: Users,
      title: "Student Success AI", 
      description: "Manage learner progress, provide personalized feedback, and optimize learning outcomes without individual administrative overhead."
    },
    {
      icon: Search,
      title: "Research Support AI",
      description: "Accelerate your research process, literature review, and academic writing to increase your scholarly output and impact."
    },
    {
      icon: Bot,
      title: "Educational Operations AI",
      description: "Handle course administration, student management, and platform operations so you can focus on teaching and content creation."
    },
    {
      icon: Globe,
      title: "Knowledge Distribution AI",
      description: "Amplify your expertise reach through multiple channels, formats, and platforms with automated content adaptation and distribution."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 knowledge-visualization opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Solution as Knowledge Amplification</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6">
            Lead Knowledge, Not Just <span className="text-accent">Administration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Educational AI capabilities designed specifically for learning impact focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="group hover:scale-105 transition-academic">
              <div className="bg-card border rounded-xl p-6 h-full shadow-elegant hover:shadow-academic">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-academic">
                    <capability.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-crimson mb-3 text-foreground">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Promise */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center border border-accent/20">
          <h3 className="text-3xl font-bold font-crimson text-foreground mb-4">
            Educational Transformation Promise
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop being an educational administrator. Start being the knowledge leader and 
            transformative educator you always intended to be.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10x</div>
              <p className="text-foreground font-semibold">Content Creation Speed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">90%</div>
              <p className="text-foreground font-semibold">Admin Time Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5x</div>
              <p className="text-foreground font-semibold">Student Reach Expansion</p>
            </div>
          </div>

          <button className="academic-button mt-8">
            Transform Your Educational Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;