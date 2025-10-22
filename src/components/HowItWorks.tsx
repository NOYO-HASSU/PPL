import { UserPlus, Wallet, ArrowRightLeft, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up with your email, set up a secure password, and verify your identity to unlock full access to the platform. Getting started takes just a few minutes.",
  },
  {
    icon: Wallet,
    title: "Add Funds",
    description: "Deposit money using your preferred payment method — bank transfer, debit card, or crypto wallet — and get ready to explore the world of digital assets.",
  },
  {
    icon: ArrowRightLeft,
    title: "Buy, Sell & Exchange",
    description: "Easily buy or sell cryptocurrencies like Bitcoin and Ethereum, or convert between coins — all with real-time rates and low transaction fees.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting started with crypto is simple. Create an account, verify your identity, 
            and start buying, selling, or accepting digital currencies in just a few clicks — 
            all on a secure and intuitive platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;