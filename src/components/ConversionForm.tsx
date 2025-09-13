import { useState } from "react";
import { GraduationCap, Clock, Shield, Zap } from "lucide-react";

const ConversionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    educationalFocus: "",
    role: "",
    studentReach: "",
    timeAllocation: 50,
    challenges: [] as string[],
    vision: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: Form submission will be handled once Supabase is connected
    console.log("Form submitted:", formData);
  };

  const handleCheckboxChange = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge) 
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const educationalFocusOptions = [
    "Business/Management", "Technology/Engineering", "Healthcare/Medical", 
    "Education/Training", "Arts/Creative", "Science/Research", 
    "Professional Development", "Other"
  ];

  const roleOptions = [
    "Professor/Academic", "Industry Expert", "Researcher", 
    "Training Director", "Course Creator", "Consultant", "Other"
  ];

  const studentReachOptions = [
    "<50", "50-500", "500-2000", "2000+", "No current students"
  ];

  const challengeOptions = [
    "Course creation and content development",
    "Student management and support", 
    "Research and publication",
    "Platform and technology management",
    "Marketing and student acquisition",
    "Academic/professional partnerships"
  ];

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 academic-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white">
            <div className="inline-flex items-center gap-3 bg-accent/20 text-accent px-6 py-3 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Elevate Your Educational Impact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-crimson mb-6">
              Transform Your Knowledge Into <span className="text-accent">Global Impact</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Educational optimization consultation with someone who understands the tension 
              between knowledge creation and administrative demands
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="academic-card bg-white/10 border-white/20 p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="academic-input w-full"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Academic/Professional Email *</label>
                    <input
                      type="email"
                      required
                      className="academic-input w-full"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@institution.edu"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Institute/Organization Name *</label>
                  <input
                    type="text"
                    required
                    className="academic-input w-full"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="Your institution or organization"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Educational Focus</label>
                    <select
                      className="academic-input w-full"
                      value={formData.educationalFocus}
                      onChange={(e) => setFormData({...formData, educationalFocus: e.target.value})}
                    >
                      <option value="">Select your focus area</option>
                      {educationalFocusOptions.map(option => (
                        <option key={option} value={option} className="bg-primary text-primary-foreground">{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Educational Role</label>
                    <select
                      className="academic-input w-full"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="">Select your role</option>
                      {roleOptions.map(option => (
                        <option key={option} value={option} className="bg-primary text-primary-foreground">{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Current Student/Learner Reach</label>
                  <select
                    className="academic-input w-full"
                    value={formData.studentReach}
                    onChange={(e) => setFormData({...formData, studentReach: e.target.value})}
                  >
                    <option value="">Select your current reach</option>
                    {studentReachOptions.map(option => (
                      <option key={option} value={option} className="bg-primary text-primary-foreground">{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    Time Allocation Challenge: {formData.timeAllocation}% on administration
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    value={formData.timeAllocation}
                    onChange={(e) => setFormData({...formData, timeAllocation: parseInt(e.target.value)})}
                  />
                  <div className="flex justify-between text-white/60 text-sm mt-2">
                    <span>100% Teaching</span>
                    <span>100% Admin</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">Educational Challenges (select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {challengeOptions.map(challenge => (
                      <label key={challenge} className="flex items-center gap-3 text-white/80 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.challenges.includes(challenge)}
                          onChange={() => handleCheckboxChange(challenge)}
                          className="w-4 h-4 text-accent bg-white/10 border-white/20 rounded focus:ring-accent/20"
                        />
                        <span className="text-sm">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Knowledge Impact Vision</label>
                  <textarea
                    className="academic-input w-full h-24 resize-none"
                    value={formData.vision}
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                    placeholder="What educational impact would you have if you could focus 80% of your time on knowledge creation and teaching?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-8 rounded-xl shadow-glow hover:shadow-xl transition-academic hover:scale-105"
                >
                  Amplify Educational Impact
                </button>

                <p className="text-white/60 text-sm text-center">
                  Your educational content, research, and academic information remain completely 
                  confidential and are protected under professional academic standards
                </p>
              </form>
            </div>

            {/* Urgency & Risk Reversal */}
            <div className="space-y-6">
              <div className="academic-card bg-accent/10 border-accent/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-bold text-white font-crimson">Limited Availability</h3>
                </div>
                <p className="text-white/80 mb-4">
                  📚 Only 5 educational optimization consultations available this week
                </p>
                <p className="text-accent font-semibold text-sm">
                  Students and professionals need your expertise now - operational barriers shouldn't delay their learning
                </p>
              </div>

              <div className="academic-card bg-white/5 border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                  <h3 className="font-bold text-white font-crimson">Risk-Free Guarantee</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Complimentary educational optimization consultation with knowledge impact guarantee
                </p>
                <p className="text-white/60 text-sm">
                  If we can't identify specific ways to double your educational reach while reducing 
                  administrative burden, the consultation is completely free
                </p>
              </div>

              <div className="academic-card bg-white/5 border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                  <h3 className="font-bold text-white font-crimson">Immediate Impact</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Knowledge has exponential impact when shared effectively - timing matters for educational influence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;