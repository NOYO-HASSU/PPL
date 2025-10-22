import { Apple, Monitor, Smartphone } from "lucide-react";

const platforms = [
  { icon: Apple, name: "macOS" },
  { icon: Apple, name: "App Store" },
  { icon: Monitor, name: "Windows" },
  { icon: Smartphone, name: "Android" },
];

const MobilePlatform = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trade{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Anytime, Anywhere
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access your crypto portfolio on the go with our secure, mobile-friendly platform. 
            Whether you're at home or on the move, you can buy, sell, and manage assets 24/7 — 
            no limits, no downtime.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-background to-muted border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
                >
                  <Icon className="w-12 h-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-semibold">{platform.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlatform;