import { Shield, DollarSign, LineChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Your crypto is protected with advanced encryption and offline cold wallets, ensuring top-tier security and privacy.",
  },
  {
    icon: DollarSign,
    title: "Free to Use",
    description: "Enjoy powerful portfolio tracking, live analytics, and account management tools — all without any hidden fees.",
  },
  {
    icon: LineChart,
    title: "Real-Time Price Data",
    description: "Get live crypto prices, market updates, and real-time data from top global exchanges — all in one place, 24/7.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Most Trusted Platform for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Currency
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover powerful tools designed to help you securely buy, sell, and manage your crypto assets — 
            trusted by traders, investors, and businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;