import { Book, Users, TrendingUp, BarChart3, Lightbulb, Award } from "lucide-react";

const Footer = () => {
  const resources = [
    { icon: Book, title: "Course Development Guides", description: "Comprehensive frameworks for knowledge transfer" },
    { icon: TrendingUp, title: "Research Acceleration Tools", description: "AI-powered academic productivity solutions" },
    { icon: Lightbulb, title: "Academic Writing Support", description: "Advanced publication and thought leadership tools" },
    { icon: BarChart3, title: "Knowledge Sharing Strategies", description: "Proven methodologies for educational impact" }
  ];

  const insights = [
    "Weekly educational optimization strategies",
    "Academic trends and knowledge sharing best practices", 
    "AI-enhanced education case studies",
    "Thought leadership development techniques"
  ];

  const development = [
    "Masterclasses in AI-enhanced education",
    "Knowledge leadership development programs",
    "Academic partnership strategies",
    "Educational technology integration"
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 academic-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold font-crimson">Utlyze</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Empowering educational leaders to amplify their knowledge impact through 
              AI-powered academic operations and intelligent learning systems.
            </p>
            <div className="flex items-center gap-3 text-accent">
              <Users className="w-5 h-5" />
              <span className="font-semibold">400+ Educational Leaders</span>
            </div>
          </div>

          {/* Educational Resources */}
          <div>
            <h3 className="text-xl font-bold font-crimson mb-6 text-accent">Educational Resources</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <resource.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold group-hover:text-accent transition-academic">
                        {resource.title}
                      </h4>
                      <p className="text-primary-foreground/60 text-sm">{resource.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Insights */}
          <div>
            <h3 className="text-xl font-bold font-crimson mb-6 text-accent">Knowledge Insights</h3>
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-primary-foreground/80 group-hover:text-accent transition-academic text-sm">
                    {insight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Development */}
          <div>
            <h3 className="text-xl font-bold font-crimson mb-6 text-accent">Academic Development</h3>
            <div className="space-y-3">
              {development.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-primary-foreground/80 group-hover:text-accent transition-academic text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-primary-foreground/20 pt-12 mb-12">
          <h3 className="text-2xl font-bold font-crimson text-center mb-8 text-accent">
            Impact Measurement & Analytics
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">400+</div>
              <p className="text-primary-foreground/80">Educational Leaders</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">89%</div>
              <p className="text-primary-foreground/80">Learning Outcome Improvement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10x</div>
              <p className="text-primary-foreground/80">Content Creation Speed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">90%</div>
              <p className="text-primary-foreground/80">Admin Time Reduction</p>
            </div>
          </div>
        </div>

        {/* Academic Community */}
        <div className="bg-primary-foreground/5 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold font-crimson mb-4 text-accent">
            Join the Academic Innovation Community
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Connect with fellow educational leaders, share knowledge amplification strategies, 
            and advance the future of AI-enhanced education together.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl shadow-glow hover:shadow-xl transition-academic hover:scale-105">
            Join Community
          </button>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-primary-foreground/60">Powered by</span>
              <span className="font-bold text-accent font-crimson text-xl">Utlyze</span>
              <span className="text-primary-foreground/60">• Educational Excellence Through AI</span>
            </div>
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Institute of One. Transforming knowledge into global impact.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;