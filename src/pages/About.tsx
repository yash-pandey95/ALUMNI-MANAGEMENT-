import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, Heart, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former university administrator with 15+ years in alumni relations.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech veteran who built platforms serving millions of users.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "UX expert passionate about connecting communities.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "David Thompson",
      role: "VP of Engineering",
      bio: "Full-stack engineer with expertise in scalable systems.",
      image: "/placeholder-avatar.jpg"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Connection First",
      description: "We believe meaningful relationships are the foundation of strong alumni networks."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Every feature is designed to strengthen the bonds between alumni and their institutions."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We're committed to evolving with the needs of modern educational institutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in everything we build and deliver."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-accent via-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-4">About AlumniConnect</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Empowering Institutions to Build
                <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Lasting Alumni Relationships
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to transform how educational institutions connect with their alumni, 
                creating meaningful relationships that last a lifetime and benefit entire communities.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AlumniConnect was born from a simple observation: most educational institutions 
                    struggle to maintain meaningful connections with their graduates after they leave campus.
                  </p>
                  <p>
                    Having worked in university administration for over a decade, our founder Sarah Johnson 
                    witnessed firsthand how scattered data, outdated systems, and manual processes 
                    prevented institutions from realizing the full potential of their alumni networks.
                  </p>
                  <p>
                    In 2022, we set out to build a platform that would change this narrative—one that 
                    puts relationships first and makes it easy for institutions to engage, support, 
                    and celebrate their alumni communities.
                  </p>
                </div>
              </div>
              
              <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/10">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold">Since 2022</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Institutions Served</span>
                      <span className="font-bold text-primary">200+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Alumni Connected</span>
                      <span className="font-bold text-primary">50,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Events Organized</span>
                      <span className="font-bold text-primary">1,200+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="font-bold text-success">95%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10 text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex p-3 rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to strengthening alumni communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10 text-center">
                  <CardContent className="p-6 space-y-4">
                    <Avatar className="w-20 h-20 mx-auto">
                      <AvatarImage src={member.image} />
                      <AvatarFallback className="text-lg bg-primary/10 text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join hundreds of institutions that trust AlumniConnect to power their alumni relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;