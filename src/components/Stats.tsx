import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Alumni Connected",
    description: "Across 200+ institutions worldwide"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Engagement Increase",
    description: "Average improvement in alumni participation"
  },
  {
    icon: Calendar,
    value: "1,200+",
    label: "Events Organized",
    description: "Successfully managed through our platform"
  },
  {
    icon: DollarSign,
    value: "$50M+",
    label: "Donations Tracked",
    description: "Fundraising campaigns managed annually"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent transform rotate-12 scale-150" />
      </div>
      
      <div className="container relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join hundreds of educational institutions that have transformed their alumni engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="inline-flex p-4 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <p className="text-sm text-primary-foreground/70">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;