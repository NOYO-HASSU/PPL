import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoData = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$16,458.23",
    change: 3.96,
    marketCap: "$16,828.25",
    color: "hsl(30, 100%, 50%)",
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$16,458.23",
    change: 3.96,
    marketCap: "$16,828.8",
    color: "hsl(220, 80%, 60%)",
  },
  {
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$16,458.23",
    change: -3.96,
    marketCap: "$16,828.3",
    color: "hsl(170, 80%, 50%)",
  },
  {
    rank: 4,
    name: "Binance Coin",
    symbol: "BNB",
    price: "$16,458.23",
    change: -3.96,
    marketCap: "$16,828.42",
    color: "hsl(45, 100%, 50%)",
  },
];

const MarketTrend = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Market Trend{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Live Stream
            </span>
          </h2>
        </div>
        
        <div className="bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-semibold">#</th>
                  <th className="text-left p-4 font-semibold">NAME</th>
                  <th className="text-left p-4 font-semibold">PRICE</th>
                  <th className="text-left p-4 font-semibold">CHANGE 24H</th>
                  <th className="text-left p-4 font-semibold">MARKET CAP</th>
                  <th className="text-left p-4 font-semibold">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((crypto) => (
                  <tr 
                    key={crypto.rank} 
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <td className="p-4 text-muted-foreground">{crypto.rank}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ background: crypto.color }}
                        >
                          {crypto.symbol.substring(0, 1)}
                        </div>
                        <div>
                          <div className="font-semibold">{crypto.name}</div>
                          <div className="text-sm text-muted-foreground">({crypto.symbol})</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-semibold">{crypto.price}</td>
                    <td className="p-4">
                      <div className={`flex items-center gap-1 ${crypto.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {crypto.change > 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-semibold">{Math.abs(crypto.change)}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{crypto.marketCap}</td>
                    <td className="p-4">
                      <Button 
                        size="sm"
                        variant={crypto.change > 0 ? "default" : "outline"}
                        className={crypto.change > 0 ? "bg-gradient-to-r from-primary to-secondary" : "border-red-500 text-red-500 hover:bg-red-500/10"}
                      >
                        {crypto.change > 0 ? 'Buy' : 'Sell'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTrend;