import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "14-day free trial",
  "No setup fees",
  "24/7 support included",
  "Easy data migration"
];

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent via-background to-primary/5">
      <div className="container">
        <Card className="max-w-4xl mx-auto border-0 shadow-elegant bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Transform Your
                <span className="block text-primary">Alumni Network?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join leading institutions worldwide and see the difference a centralized alumni platform can make.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary shadow-elegant px-8"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="px-8">
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • Full access to all features • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;