import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, BarChart3, Camera, Search, Settings } from "lucide-react";
import { Hero3D } from "./Hero3D";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Unlock the Power of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Driven
              </span>
              <br />
              Stock Insights with TradingAI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Upgrade your strategies with TradingAI. AI-powered stock insights for smarter, faster decisions.
            </p>
            
            <Button size="lg" className="text-lg px-8 py-3 bg-white text-background hover:bg-white/90 rounded-lg">
              GET STARTED
            </Button>
          </div>

          {/* Right Content - 3D Robot */}
          <div className="relative">
            <div className="relative h-[600px] w-full">
              <Hero3D />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};