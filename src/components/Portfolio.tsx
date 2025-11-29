import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "MSP Tows",
      description: "Car Towing Services Platform",
      category: "Service Industry",
      image: "portfolio-1"
    },
    {
      title: "Cerberus Security",
      description: "Security Guard Services",
      category: "Security",
      image: "portfolio-2"
    },
    {
      title: "Swift Guard Security",
      description: "Professional Security Services",
      category: "Security",
      image: "portfolio-3"
    },
    {
      title: "World Boss Group",
      description: "Phone Accessories & Repair",
      category: "E-Commerce",
      image: "portfolio-4"
    },
    {
      title: "Weaversha Accountants",
      description: "Professional Accounting Services",
      category: "Finance",
      image: "portfolio-5"
    },
    {
      title: "Euro Mattress",
      description: "Premium Mattress Store",
      category: "E-Commerce",
      image: "portfolio-6"
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              My Work — <span className="gradient-text">Crafted With Purpose</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the websites I've designed and developed — clean interfaces, functional design, and real user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">{project.title.charAt(0)}</div>
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-2">
                  <div className="text-xs text-primary font-semibold">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
