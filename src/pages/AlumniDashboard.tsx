import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Users, 
  Heart,
  MessageSquare,
  Award,
  Settings,
  Bell,
  Edit
} from "lucide-react";
import { Link } from "react-router-dom";

const AlumniDashboard = () => {
  const upcomingEvents = [
    { title: "Alumni Networking Night", date: "March 15, 2024", location: "San Francisco", attending: 142 },
    { title: "Career Development Workshop", date: "March 22, 2024", location: "Online", attending: 89 },
    { title: "Class of 2019 Reunion", date: "April 5, 2024", location: "University Campus", attending: 234 }
  ];

  const mentorshipRequests = [
    { name: "Sarah Chen", field: "Software Engineering", year: "Class of 2023" },
    { name: "Michael Rodriguez", field: "Data Science", year: "Class of 2024" },
    { name: "Emily Johnson", field: "Product Management", year: "Class of 2023" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 via-background to-muted/20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
                AlumniConnect
              </Link>
              <Badge variant="outline">Alumni Portal</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Link to="/signin">
                <Button variant="outline" size="sm">Sign Out</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8 space-y-8">
        {/* Profile Header */}
        <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl bg-primary/10 text-primary">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Class of 2018 • Computer Science</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="h-4 w-4" />
                    <span>Senior Software Engineer at Google</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start space-x-3">
                  <Badge variant="secondary">Mentor Available</Badge>
                  <Badge variant="outline">Donor</Badge>
                  <Badge variant="outline">Event Organizer</Badge>
                </div>
              </div>
              
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Events */}
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-gradient-to-r from-card to-accent/5">
                      <div className="space-y-1">
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{event.attending} attending</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">RSVP</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mentorship Requests */}
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle>Mentorship Requests</CardTitle>
                <p className="text-sm text-muted-foreground">Students looking for guidance in your field</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentorshipRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-gradient-to-r from-card to-accent/5">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {request.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{request.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{request.field}</span>
                            <span>•</span>
                            <span>{request.year}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Message
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-primary-light">
                          Accept
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Students Mentored</span>
                  <span className="font-bold text-primary">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Events Attended</span>
                  <span className="font-bold text-success">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Years as Alumni</span>
                  <span className="font-bold text-secondary">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Network Connections</span>
                  <span className="font-bold">247</span>
                </div>
              </CardContent>
            </Card>

            {/* Recognition */}
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle>Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-transparent">
                  <Award className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-sm">Outstanding Mentor</p>
                    <p className="text-xs text-muted-foreground">2024 Award</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-transparent">
                  <Heart className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Top Donor</p>
                    <p className="text-xs text-muted-foreground">2023 Recognition</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Find Alumni
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Browse Events
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Make Donation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discussion
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;