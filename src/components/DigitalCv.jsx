import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function DigitalCV() {
  return (
    <section id="cv" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl space-y-12 ">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Abhinaba Dey</h1>
          <p className="text-lg text-muted-foreground">Aspiring Quant Trader | Machine Learning Enthusiast</p>
        </div>
        <div className="flex justify-center gap-6 items-center flex-col">
          <a href="mailto:abhinab1751@gmail.com" className="flex items-center gap-2 hover:text-primary">
            <Mail size={18}/> abhinab1751@example.com
          </a>
          <a href="tel:+917225051856" className="flex items-center gap-2 hover:text-primary">
            <Phone size={18}/> +91 72250 51856
          </a>
          <a href="https://www.linkedin.com/in/abhinaba-d-b8bb89225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
            <Linkedin size={18}/> LinkedIn
          </a>
          <a href="https://github.com/abhinab1751" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
            <Github size={18}/> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
