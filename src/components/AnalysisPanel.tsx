import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Activity, BarChart3 } from "lucide-react";

const strategies = [
  "Liquidity Sweep", "Pullback Retracement", "Triple Confluence", 
  "Scalping EMA", "Scalping RSI", "Smart Scalp", "Volatility Breakout",
  "Squeeze Momentum", "Breakout Retest", "Mean Reversion", "Momentum Swing",
  "Trend Following", "Trend Reversal", "Smart Swing", "Divergence Play",
  "Continuation Pattern", "Range Bound"
];

const indicators = [
  "SMA", "EMA", "ICHIMOKU", "BBANDS", "ATR", "RSI", 
  "MACD", "STOCH", "ADX", "PERCENT_B", "MFI", "DPO"
];

export const AnalysisPanel = () => {
  const [expertMode, setExpertMode] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);
  const [analyzeNews, setAnalyzeNews] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const toggleIndicator = (indicator: string) => {
    setSelectedIndicators(prev => 
      prev.includes(indicator) 
        ? prev.filter(i => i !== indicator)
        : prev.length < 3 ? [...prev, indicator] : prev
    );
  };

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-medium">
            3
          </span>
          <h3 className="text-lg font-semibold">A.I. Trade Analysis</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Gain real-time AI-powered trading insights, including market bias, optimal entry points, stop loss, and take profit levels.
        </p>
      </div>

      <div className="space-y-6">
        {/* Expert Mode Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Expert Mode</label>
          <Switch 
            checked={expertMode} 
            onCheckedChange={setExpertMode}
          />
        </div>

        {expertMode && (
          <div className="space-y-4 animate-in slide-in-from-top duration-300">
            {/* Strategy Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Strategy Set</label>
              <Select value={selectedStrategy} onValueChange={setSelectedStrategy}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Choose Strategy" />
                </SelectTrigger>
                <SelectContent>
                  {strategies.map((strategy) => (
                    <SelectItem key={strategy} value={strategy}>
                      {strategy}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Indicators Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Indicators (Max 3) 
                <span className="text-muted-foreground text-xs ml-1">
                  Leave empty to let AI find the best indicators
                </span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                {indicators.map((indicator) => (
                  <Button
                    key={indicator}
                    variant={selectedIndicators.includes(indicator) ? "gradient" : "trading"}
                    onClick={() => toggleIndicator(indicator)}
                    disabled={selectedIndicators.length >= 3 && !selectedIndicators.includes(indicator)}
                    size="sm"
                    className="text-xs"
                  >
                    {indicator}
                  </Button>
                ))}
              </div>
              {selectedIndicators.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedIndicators.map((indicator) => (
                    <Badge key={indicator} variant="secondary" className="text-xs">
                      {indicator}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* News Analysis Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">Analyze Related News</label>
                <p className="text-xs text-muted-foreground">
                  AI will include related news headlines for deeper context
                </p>
              </div>
              <Switch 
                checked={analyzeNews} 
                onCheckedChange={setAnalyzeNews}
              />
            </div>
          </div>
        )}

        {/* Analysis Button */}
        <Button 
          variant="analysis" 
          size="lg" 
          className="w-full h-14 text-lg"
          onClick={handleAnalysis}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
              <span>Analyzing...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Get A.I. Analysis</span>
            </div>
          )}
        </Button>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-success" />
            <span>Market Bias</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="w-4 h-4 text-warning" />
            <span>Entry Points</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span>Risk Analysis</span>
          </div>
        </div>
      </div>
    </Card>
  );
};