import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <Coins className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">Crypto</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
          <a href="#exchange" className="text-foreground/80 hover:text-foreground transition-colors">Exchange</a>
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
          <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact Us</a>
          <a href="#docs" className="text-foreground/80 hover:text-foreground transition-colors">Docs</a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-foreground hover:bg-primary/10">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;