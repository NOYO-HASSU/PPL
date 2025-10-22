import { Button } from "@/components/ui/button";
import { Coins, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Crypto</span>
          </div>
          
          <div className="text-center text-muted-foreground">
            © 2025 Crypto. All rights reserved. Built with React & Tailwind CSS
          </div>
          
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;