import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Users, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Shield,
  Search,
  Heart,
  Briefcase
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Centralized Database",
    description: "Store and manage all alumni information in one secure, organized platform with advanced search capabilities.",
    badge: "Essential"
  },
  {
    icon: Users,
    title: "Alumni Directory",
    description: "Searchable network directory with filters by graduation year, location, industry, and skills.",
    badge: "Popular"
  },
  {
    icon: Calendar,
    title: "Event Management", 
    description: "Organize reunions, networking events, and webinars with RSVP tracking and automated reminders.",
    badge: "New"
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Send targeted announcements, newsletters, and updates to specific alumni groups or the entire network.",
    badge: null
  },
  {
    icon: Briefcase,
    title: "Mentorship Matching",
    description: "Connect current students with alumni mentors based on career interests and industry expertise.",
    badge: "Premium"
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track engagement metrics, donation patterns, and alumni career progression with detailed insights.",
    badge: null
  },
  {
    icon: Heart,
    title: "Donation Tracking",
    description: "Manage fundraising campaigns and track contributions with automated thank you messages.",
    badge: null
  },
  {
    icon: Search,
    title: "Advanced Search",
    description: "Find alumni by multiple criteria including skills, location, company, and availability for mentoring.",
    badge: null
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Enterprise-grade security with role-based access control and alumni privacy preferences.",
    badge: "Essential"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="block text-primary">Engage Alumni</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed specifically for educational institutions to build and maintain strong alumni relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  {feature.badge && (
                    <Badge 
                      variant={feature.badge === "Premium" ? "default" : feature.badge === "New" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;