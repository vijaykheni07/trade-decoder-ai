import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const timeframes = [
  { id: "1m", label: "1m" },
  { id: "5m", label: "5m" },
  { id: "15m", label: "15m" },
  { id: "30m", label: "30m" },
  { id: "1h", label: "1h" },
  { id: "4h", label: "4h" },
  { id: "1d", label: "1d" },
  { id: "1w", label: "1w" }
];

export const TimeframeSelector = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1h");

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-medium">
            2
          </span>
          <h3 className="text-lg font-semibold">Select Timeframe</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Adjust the chart timeframe that suits your strategy.
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {timeframes.map((timeframe) => (
          <Button
            key={timeframe.id}
            variant={selectedTimeframe === timeframe.id ? "gradient" : "trading"}
            onClick={() => setSelectedTimeframe(timeframe.id)}
            className="text-sm"
            size="sm"
          >
            {timeframe.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};