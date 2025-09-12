import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const cryptoSymbols = [
  "BTC-USDT", "ETH-USDT", "XRP-USDT", "SOL-USDT", 
  "ADA-USDT", "DOGE-USDT", "TRX-USDT", "LINK-USDT",
  "SUI-USDT", "LTC-USDT", "AVAX-USDT", "DOT-USDT"
];

export const SymbolSelector = () => {
  const [selectedSymbol, setSelectedSymbol] = useState("BTC-USDT");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSymbols = cryptoSymbols.filter(symbol =>
    symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-medium">
            1
          </span>
          <h3 className="text-lg font-semibold">Choose a Crypto Chart</h3>
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search Any Crypto Chart"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {filteredSymbols.map((symbol) => (
          <Button
            key={symbol}
            variant={selectedSymbol === symbol ? "gradient" : "trading"}
            onClick={() => setSelectedSymbol(symbol)}
            className="text-sm"
            size="sm"
          >
            {symbol}
          </Button>
        ))}
      </div>
      
      {filteredSymbols.length === 0 && (
        <div className="text-center text-muted-foreground py-8">
          <p>No symbols found matching "{searchQuery}"</p>
        </div>
      )}
    </Card>
  );
};