const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold gradient-text">RazaDevX</div>
          <div className="text-sm text-muted-foreground">
            Copyright © 2025 Raza_DeveloperX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
