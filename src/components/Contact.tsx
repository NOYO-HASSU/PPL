import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
          </div>
          
          <form className="bg-gradient-to-br from-background to-muted border border-border rounded-2xl p-8 space-y-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <Input 
                  placeholder="John" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <Input 
                  placeholder="Doe" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <Input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <Textarea 
                placeholder="Tell us how we can help..." 
                rows={5}
                className="bg-background/50 border-border focus:border-primary resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;