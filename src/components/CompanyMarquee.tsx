const companies = [
  { name: "Birdseye", color: "hsl(200, 80%, 60%)" },
  { name: "BreakIt", color: "hsl(120, 60%, 50%)" },
  { name: "KeddarN", color: "hsl(210, 80%, 60%)" },
  { name: "ShieldT", color: "hsl(30, 80%, 60%)" },
  { name: "Tandov", color: "hsl(220, 80%, 60%)" },
  { name: "TreeCo", color: "hsl(140, 60%, 50%)" },
];

const CompanyMarquee = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex animate-scroll">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 mx-8 whitespace-nowrap"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ background: company.color }}
              >
                {company.name.substring(0, 2)}
              </div>
              <span className="text-lg font-semibold text-foreground/80">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default CompanyMarquee;