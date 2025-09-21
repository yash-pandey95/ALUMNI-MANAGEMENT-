import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Demo = () => {
  const demoFeatures = [
    "Live platform walkthrough",
    "Custom setup consultation",
    "Q&A with product experts",
    "Implementation timeline",
    "Pricing discussion",
    "Next steps planning"
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:30 AM - 11:30 AM", 
    "2:00 PM - 3:00 PM",
    "3:30 PM - 4:30 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent via-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
              
              <Badge variant="secondary" className="mb-4">Product Demo</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                See AlumniConnect
                <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  In Action
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Schedule a personalized demo and discover how AlumniConnect can transform your institution's alumni engagement strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Booking Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Demo Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">What You'll See</h2>
                  <p className="text-muted-foreground">
                    Our product experts will give you a comprehensive tour of AlumniConnect, 
                    tailored to your institution's specific needs and challenges.
                  </p>
                </div>

                <div className="space-y-4">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Demo Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">45 min</div>
                      <div className="text-sm text-muted-foreground">Demo Duration</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10">
                    <CardContent className="p-6 text-center">
                      <Video className="h-8 w-8 text-success mx-auto mb-2" />
                      <div className="text-2xl font-bold">Online</div>
                      <div className="text-sm text-muted-foreground">Via Zoom/Teams</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Perfect for Teams</h3>
                        <p className="text-sm text-muted-foreground">
                          Invite your colleagues, IT team, and stakeholders. We'll address everyone's questions 
                          and show how AlumniConnect integrates with your existing systems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Form */}
              <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
                  <p className="text-muted-foreground">Choose a time that works for your team</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="john@university.edu" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution Name</Label>
                      <Input id="institution" placeholder="University of Excellence" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="director">Alumni Relations Director</SelectItem>
                          <SelectItem value="it">IT Manager</SelectItem>
                          <SelectItem value="president">President/VP</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alumniCount">Approximate Alumni Count</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under 1,000</SelectItem>
                          <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                          <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                          <SelectItem value="10000-25000">10,000 - 25,000</SelectItem>
                          <SelectItem value="over-25000">Over 25,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot, index) => (
                            <SelectItem key={index} value={slot.toLowerCase().replace(/\s/g, '-')}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Specific Questions or Challenges</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your current alumni management challenges or what you'd like to see in the demo..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Demo
                    </Button>
                  </form>

                  <div className="text-center text-sm text-muted-foreground">
                    You'll receive a calendar invite within 1 hour of booking
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl font-bold">Trusted by Leading Institutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of universities and colleges that have transformed their alumni engagement with AlumniConnect.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">University {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;