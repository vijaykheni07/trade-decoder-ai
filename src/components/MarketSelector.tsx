import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const markets = [
  { id: "crypto", label: "Crypto", active: true },
  { id: "forex", label: "Forex", active: false },
  { id: "stock", label: "Stock", active: false }
];

export const MarketSelector = () => {
  const [activeMarket, setActiveMarket] = useState("crypto");

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {markets.map((market) => (
          <Button
            key={market.id}
            variant={activeMarket === market.id ? "gradient" : "trading"}
            onClick={() => setActiveMarket(market.id)}
            className="flex-1"
          >
            {market.label}
          </Button>
        ))}
      </div>
      
      <div className="text-center text-muted-foreground mb-4">
        <p className="text-sm">
          Choose a trading symbol from the available options.
        </p>
      </div>
    </Card>
  );
};