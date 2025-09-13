import { AlertTriangle, Clock, TrendingDown, Users, FileText, Zap } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "20 Years of Expertise, Stuck in Admin",
      description: "You have transformative knowledge but spend more time managing course platforms than creating content that could change careers."
    },
    {
      icon: Users,
      title: "Students Waiting, You're Answering Tickets", 
      description: "Advanced learners need your expertise while you're buried in basic administrative questions and technical support."
    },
    {
      icon: FileText,
      title: "Research Gathering Dust",
      description: "Insights that could advance entire fields sit unpublished because course management consumes your writing and research time."
    },
    {
      icon: TrendingDown,
      title: "Missed Opportunities",
      description: "Speaking engagements and collaborations go unanswered because you're overwhelmed with grading and platform maintenance."
    },
    {
      icon: Zap,
      title: "Ideas Trapped in Notes",
      description: "Your most impactful educational concepts remain undeveloped because creating courses requires infrastructure you don't have."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 academic-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-destructive/10 text-destructive px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">The Institute of One Knowledge Bottleneck</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6">
            Educational Impact vs. Operational Burden
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The tragic gap between what you know and what you can effectively teach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="group hover:scale-105 transition-academic">
              <div className="bg-card border rounded-xl p-6 h-full shadow-elegant hover:shadow-academic">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-destructive/20 transition-academic">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-crimson mb-3 text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-destructive/5 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-destructive mb-2">78%</div>
              <p className="text-foreground font-semibold">Solo educators spend more time on administration than content creation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-destructive mb-2">65%</div>
              <p className="text-foreground font-semibold">Say operational burden is their biggest barrier to educational impact</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-destructive mb-2">91%</div>
              <p className="text-foreground font-semibold">Report feeling overwhelmed by non-teaching responsibilities</p>
            </div>
          </div>
        </div>

        {/* Emotional validation */}
        <div className="text-center bg-card border rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold font-crimson text-foreground mb-4">
            You Became an Educator to Transform Lives
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            "You didn't sign up to become a full-time administrator of learning management systems. 
            Your knowledge sharing struggle is systemic, not personal."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;