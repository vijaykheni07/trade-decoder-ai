import { Card } from "@/components/ui/card";
import { TrendingUp, Settings, Sparkles, Shield, BarChart3 } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Step 1",
    subtitle: "Choose a trading symbol from the available options.",
  },
  {
    id: 2,
    icon: Settings,
    title: "Step 2", 
    subtitle: "Adjust the chart timeframe that suits your strategy.",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Step 3",
    subtitle: "Click the 'Get A.I. Analysis' button to start.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Step 4",
    subtitle: "Ensure the trade setup offers a favorable risk-reward ratio before entering.",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Step 5",
    subtitle: "Log your trade outcome to help improve A.I. accuracy.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How to Use</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow these simple steps to get AI-powered trading insights and make better trading decisions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <Card key={step.id} className="p-6 bg-gradient-card border-border text-center hover:border-primary/50 transition-smooth group">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.subtitle}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};