import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Search, 
  Plus,
  Filter,
  Download,
  Mail,
  Settings,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Alumni", value: "2,547", change: "+12%", icon: Users, color: "text-primary" },
    { label: "Active Members", value: "1,892", change: "+8%", icon: TrendingUp, color: "text-success" },
    { label: "Upcoming Events", value: "7", change: "0", icon: Calendar, color: "text-secondary" },
    { label: "This Month Donations", value: "$45,200", change: "+23%", icon: DollarSign, color: "text-primary" }
  ];

  const recentActivities = [
    { action: "New alumni registered", user: "Sarah Johnson", time: "2 minutes ago" },
    { action: "Event RSVP", user: "Michael Chen", time: "15 minutes ago" },
    { action: "Profile updated", user: "Emily Rodriguez", time: "1 hour ago" },
    { action: "Mentorship request", user: "David Thompson", time: "2 hours ago" },
    { action: "Donation received", user: "Lisa Anderson", time: "3 hours ago" }
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
              <Badge variant="outline">Admin Panel</Badge>
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
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back, Admin!</h1>
          <p className="text-muted-foreground">Here's what's happening with your alumni network today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-success">
                      {stat.change !== "0" && `${stat.change} from last month`}
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-primary to-primary-light">
            <Plus className="mr-2 h-4 w-4" />
            Add Alumni
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Create Event
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Send Newsletter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Alumni Management */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Alumni Directory</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search alumni..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-gradient-to-r from-card to-accent/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Alumni Member {i}</p>
                          <p className="text-sm text-muted-foreground">Class of 202{i} • Engineering</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Active</Badge>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.user}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
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
                  Manage Alumni
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Event Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;