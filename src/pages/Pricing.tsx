import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      credits: "10 credits",
      features: [
        "10 AI chart analyses",
        "Basic technical indicators",
        "Standard timeframes",
        "Email support"
      ],
      icon: Sparkles,
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      description: "For serious traders",
      credits: "500 credits",
      features: [
        "500 AI chart analyses",
        "Advanced technical indicators",
        "All timeframes",
        "Priority support",
        "Strategy backtesting",
        "Risk management tools"
      ],
      icon: Zap,
      variant: "gradient" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For professional teams",
      credits: "Unlimited",
      features: [
        "Unlimited AI analyses",
        "Custom indicators",
        "API access",
        "Dedicated support",
        "Team collaboration",
        "White-label options"
      ],
      icon: Crown,
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trading Edge
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core AI analysis features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name} 
                  className={`relative ${plan.popular ? 'ring-2 ring-primary border-primary/50' : ''} bg-gradient-card`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-primary font-medium">{plan.credits}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.variant} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              All plans include our 30-day money-back guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                View FAQ
              </Button>
              <Button variant="ghost" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;