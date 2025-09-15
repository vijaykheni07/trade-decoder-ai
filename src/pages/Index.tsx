import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarketSelector } from "@/components/MarketSelector";
import { SymbolSelector } from "@/components/SymbolSelector";
import { TimeframeSelector } from "@/components/TimeframeSelector";
import { AnalysisPanel } from "@/components/AnalysisPanel";
import { HowItWorks } from "@/components/HowItWorks";
import { News } from "@/components/News";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <MarketSelector />
              <SymbolSelector />
              <TimeframeSelector />
            </div>
            <div>
              <AnalysisPanel />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <HowItWorks />
        </div>
        
        <News />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-gradient-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TradingAI. All rights reserved. 
            <span className="ml-2 text-xs">
              Analyses are for educational purposes only, not financial advice.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
