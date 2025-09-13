import { BookOpen, Users, Search, BarChart3, Globe, Zap, Settings, TrendingUp } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      category: "Course Development",
      icon: BookOpen,
      features: ["Content creation", "Curriculum design", "Learning objective alignment", "Assessment development"]
    },
    {
      category: "Student Management", 
      icon: Users,
      features: ["Enrollment processing", "Progress tracking", "Performance analytics", "Personalized learning paths"]
    },
    {
      category: "Research Acceleration",
      icon: Search, 
      features: ["Literature review", "Data analysis", "Writing support", "Publication preparation"]
    },
    {
      category: "Knowledge Distribution",
      icon: Globe,
      features: ["Multi-platform content adaptation", "Marketing automation", "Thought leadership development", "Global reach optimization"]
    },
    {
      category: "Educational Analytics",
      icon: BarChart3,
      features: ["Learning outcome measurement", "Student success optimization", "Course improvement recommendations", "Impact tracking"]
    },
    {
      category: "Academic Intelligence",
      icon: Zap,
      features: ["Industry trend analysis", "Curriculum relevance optimization", "Partnership opportunities", "Innovation development"]
    }
  ];

  const integrations = [
    { category: "Learning Management", tools: ["Canvas", "Blackboard", "Moodle", "Thinkific", "Teachable"] },
    { category: "Research Tools", tools: ["Zotero", "Mendeley", "EndNote", "ResearchGate", "Academia.edu"] },
    { category: "Content Creation", tools: ["Articulate", "Adobe Captivate", "Loom", "Camtasia"] },
    { category: "Analytics", tools: ["Google Analytics", "Mixpanel", "Tableau", "Power BI"] },
    { category: "Communication", tools: ["Zoom", "Microsoft Teams", "Slack", "Discord"] },
    { category: "Publishing", tools: ["LaTeX", "Overleaf", "Grammarly", "Turnitin"] }
  ];

  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 knowledge-visualization opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
            <Settings className="w-5 h-5" />
            <span className="font-semibold">Educational Capabilities Showcase</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6">
            Your AI <span className="text-accent">Educational Operations</span> Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive knowledge sharing and educational support designed for academic excellence
          </p>
        </div>

        {/* Main Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div key={index} className="group hover:scale-105 transition-academic">
              <div className="bg-card border rounded-xl p-6 h-full shadow-elegant hover:shadow-academic">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-academic">
                    <capability.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl font-crimson text-foreground">
                    {capability.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Leadership Development */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-crimson text-foreground mb-4">
              Lead Educational Innovation Like the Knowledge Expert You Are
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational leadership framework designed for academic excellence and knowledge impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Thought Leadership</h4>
              <p className="text-muted-foreground text-sm">Academic influence building and knowledge commercialization strategies</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Partnership Development</h4>
              <p className="text-muted-foreground text-sm">Academic collaboration and research management optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Innovation Integration</h4>
              <p className="text-muted-foreground text-sm">Educational technology and digital learning optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Advanced Pedagogy</h4>
              <p className="text-muted-foreground text-sm">Learning science application and professional development programs</p>
            </div>
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold font-crimson text-foreground mb-6">
            Educational Integration Ecosystem
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Seamless integration with your existing academic and educational platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 shadow-elegant hover:shadow-academic transition-academic">
              <h4 className="font-bold text-lg font-crimson text-foreground mb-4">{integration.category}</h4>
              <div className="flex flex-wrap gap-2">
                {integration.tools.map((tool, idx) => (
                  <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;