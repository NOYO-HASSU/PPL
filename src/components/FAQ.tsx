import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is cryptocurrency?",
    answer: "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. It operates on decentralized networks based on blockchain technology, making it resistant to government interference and manipulation.",
  },
  {
    question: "Can cryptocurrency be converted to cash?",
    answer: "Yes, cryptocurrency can be converted to cash through various methods including cryptocurrency exchanges, peer-to-peer platforms, Bitcoin ATMs, and direct sales. Most platforms allow you to sell your crypto and withdraw funds to your bank account.",
  },
  {
    question: "How long should you hold cryptocurrency?",
    answer: "The holding period depends on your investment strategy and goals. Long-term holders (HODLers) typically keep their crypto for years, believing in its future value. Short-term traders may hold for days or weeks. Consider your risk tolerance, financial goals, and market conditions when deciding.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions about trading, security, or how our platform works? 
              Find clear answers to the most common inquiries to get started with confidence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-background/30"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;