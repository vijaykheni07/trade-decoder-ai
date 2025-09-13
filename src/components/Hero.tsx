import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, BarChart3, Camera, Search, Settings } from "lucide-react";
import robotImage from "@/assets/robot-hero.png";

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

          {/* Right Content - AI Robot Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Circular Shadow */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 -z-10"
                style={{ backgroundColor: '#794de8' }}
              />
              <img 
                src={robotImage} 
                alt="AI Robot" 
                className="w-full max-w-md h-auto object-contain relative z-10"
              />
              {/* Bottom gradient overlay to blend with background */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};