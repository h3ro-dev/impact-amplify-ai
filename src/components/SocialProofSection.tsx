import { Star, TrendingUp, Award, Users } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Dr. Maria Santos",
      title: "Business Education Institute",
      image: "MS",
      quote: "Scaled from 50 students to 5,000 students while improving learning outcomes 89% through AI educational operations",
      metrics: {
        students: "5,000+",
        improvement: "89%",
        scale: "100x"
      }
    },
    {
      name: "Prof. David Kim", 
      title: "Technology Institute",
      image: "DK",
      quote: "Published 15 research papers and launched 8 professional courses while eliminating administrative overhead",
      metrics: {
        papers: "15",
        courses: "8",
        overhead: "0%"
      }
    },
    {
      name: "Dr. Jennifer Rodriguez",
      title: "Leadership Development Institute", 
      image: "JR",
      quote: "Grew educational revenue from $50K to $500K while maintaining focus on high-impact knowledge creation",
      metrics: {
        revenue: "$500K",
        growth: "10x",
        focus: "100%"
      }
    }
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Professional Development Institute",
      description: "Increased course completion rates by 94% while scaling enrollment 400% through AI-enhanced learning support",
      results: ["94% completion rate", "400% enrollment growth", "Zero admin overhead"]
    },
    {
      icon: Award,
      title: "Research Institute",
      description: "Doubled publication output while launching successful online education programs through operational AI support",
      results: ["2x publication output", "Global education reach", "Research-teaching balance"]
    },
    {
      icon: Users,
      title: "Training Institute", 
      description: "Achieved 97% student satisfaction while expanding to serve global market through AI-powered educational operations",
      results: ["97% satisfaction", "Global market reach", "Operational excellence"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 academic-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Social Proof</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6">
            Educators Amplifying Their <span className="text-accent">Knowledge Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Educational success stories with academic leaders and learning impact metrics
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group hover:scale-105 transition-academic">
              <div className="bg-card border rounded-xl p-6 h-full shadow-elegant hover:shadow-academic">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center font-bold text-accent">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold text-accent text-lg">{Object.values(testimonial.metrics)[0]}</div>
                    <div className="text-xs text-muted-foreground">{Object.keys(testimonial.metrics)[0]}</div>
                  </div>
                  <div>
                    <div className="font-bold text-accent text-lg">{Object.values(testimonial.metrics)[1]}</div>
                    <div className="text-xs text-muted-foreground">{Object.keys(testimonial.metrics)[1]}</div>
                  </div>
                  <div>
                    <div className="font-bold text-accent text-lg">{Object.values(testimonial.metrics)[2]}</div>
                    <div className="text-xs text-muted-foreground">{Object.keys(testimonial.metrics)[2]}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold font-crimson text-center text-foreground mb-12">
            Educational Transformation Case Studies
          </h3>
          
          {caseStudies.map((study, index) => (
            <div key={index} className="group hover:scale-[1.02] transition-academic">
              <div className="bg-card border rounded-xl p-8 shadow-elegant hover:shadow-academic">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <study.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-crimson text-foreground">{study.title}</h4>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <p className="text-muted-foreground leading-relaxed">{study.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm font-semibold text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;