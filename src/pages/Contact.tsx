import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@alumniconnect.com",
      response: "Within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on our website",
      response: "Mon-Fri 9AM-6PM PST"
    }
  ];

  const supportTopics = [
    "General Inquiry",
    "Technical Support",
    "Billing & Pricing",
    "Feature Request",
    "Partnership Opportunity",
    "Media Inquiry",
    "Other"
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
              
              <Badge variant="secondary" className="mb-4">Contact Us</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Get in Touch
                <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  We're Here to Help
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about AlumniConnect? Our team is ready to help you find the perfect solution for your institution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Multiple Ways to Reach Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the contact method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10 text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex p-3 rounded-full bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                      <p className="font-medium text-primary">{method.contact}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.response}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">We'll get back to you as soon as possible</p>
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
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@university.edu" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution (Optional)</Label>
                      <Input id="institution" placeholder="University of Excellence" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportTopics.map((topic, index) => (
                            <SelectItem key={index} value={topic.toLowerCase().replace(/\s/g, '-')}>
                              {topic}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="newsletter" className="mt-1" />
                      <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                        I'd like to receive updates about AlumniConnect features and best practices for alumni engagement
                      </Label>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Let's Connect</h2>
                  <p className="text-muted-foreground">
                    Whether you're exploring AlumniConnect for the first time or need help with your existing setup, 
                    we're here to ensure your success.
                  </p>
                </div>

                <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">Headquarters</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Innovation Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/10">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                          <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Emergency Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For critical technical issues affecting your alumni platform, our emergency support team is available 24/7.
                    </p>
                    <Button variant="outline" size="sm">
                      Access Emergency Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;