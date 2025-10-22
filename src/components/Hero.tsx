import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-crypto.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card -z-10" />
      
      {/* Dotted Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 -z-10" 
           style={{
             backgroundImage: 'radial-gradient(circle, hsl(271 91% 65% / 0.3) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} 
      />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Buy, Sell & Accept{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Cryptocurrency
              </span>{" "}
              With Ease
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              A fast, secure, and user-friendly platform to trade Bitcoin, Ethereum, and other digital assets. 
              Join millions embracing the future of finance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg">
                <Play className="w-5 h-5 mr-2" />
                How It Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse" />
            <img 
              src={heroImage} 
              alt="Cryptocurrency Trading Platform" 
              className="relative z-10 w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;