import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const TradePlatform = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A Simple, Secure Way to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Buy and Sell
              </span>{" "}
              Cryptocurrency
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Buy, sell, and manage digital assets with confidence on a platform built for speed, 
              security, and simplicity — whether you're a beginner or a seasoned trader.
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-muted border border-border rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="space-y-6">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">$48,291</div>
                    <div className="text-muted-foreground">Portfolio Value</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">24h Change</div>
                    <div className="text-2xl font-bold text-green-500">+5.24%</div>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Total Assets</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradePlatform;