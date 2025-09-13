import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, BarChart3, Camera, Search, Settings } from "lucide-react";
import { Hero3D } from "./Hero3D";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Unlock the Power of{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            AI-Driven
          </span>
          <br />
          Stock Insights with TradingAI
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Upgrade your strategies with TradingAI. AI-powered stock insights for smarter, faster decisions.
        </p>
        
        <Button variant="gradient" size="lg" className="text-lg px-8 py-3 mb-16 bg-white text-background hover:bg-white/90">
          GET STARTED
        </Button>

        {/* AI Showcase Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl border border-border/50 p-8 relative overflow-hidden">
            
            {/* 3D Robot positioned in the card */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Hero3D />
              
              {/* UI Elements Overlay */}
              <div className="absolute top-6 left-6 flex gap-3">
                <div className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-border/50">
                  <Camera className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-border/50">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-border/50">
                  <Settings className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              
              {/* AI Analysis Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 px-4 py-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">AI Stock Analysis</span>
                </div>
              </div>
              
              {/* AI Status */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">AI is generating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <p className="text-sm text-muted-foreground mt-8 uppercase tracking-wider">
          Unlock the future of trading insights with seamless AI tools.
        </p>
      </div>
    </section>
  );
};