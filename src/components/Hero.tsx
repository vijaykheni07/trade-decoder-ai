import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { Hero3D } from "./Hero3D";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <Hero3D />
      <div className="container mx-auto text-center relative z-10">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth">
          <Sparkles className="w-4 h-4 mr-2" />
          Sign In To Get 10 Credits For Free
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Analyse Trading Charts With{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            AI
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A self-learning AI built on real market data and structured trade logic—evolving with every analysis to deliver fast, explainable trade insights straight from your charts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
            <Sparkles className="w-5 h-5 mr-2" />
            See How It Works
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <TrendingUp className="w-5 h-5 mr-2" />
            Start Free Analysis
          </Button>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-accent rounded-lg border border-border">
            <TrendingUp className="w-6 h-6 text-success" />
            <span className="font-medium">Real-time Market Analysis</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-accent rounded-lg border border-border">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-medium">AI-Powered Insights</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-accent rounded-lg border border-border">
            <BarChart3 className="w-6 h-6 text-warning" />
            <span className="font-medium">Risk-Reward Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
};