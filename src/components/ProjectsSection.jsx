import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";
const projects = [
     {
          id: 1,
          title:"Email/SmS Spam detection",
          description: "A web application that classifies emails or SMS messages as spam or not spam using machine learning algorithms.",
          image: "/projects/project1.png",
          tags: ["Python", "Scikit-learn", "Machine Learning"],
          demoUrl: "https://spam-not-spam-predictor-1.onrender.com/",
          githubUrl: "https://github.com/abhinab1751/spam-not-spam-predictor",
     },
]


export const ProjectsSection = () => {
     return (
     <section id="projects" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 {" "}
                 Featured <span className="text-primary"> Projects </span>
              </h2>

              <p className="text-centre text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for web development and technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map((project, index) => (
                    <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                          <div className="h-48 overflow-hidden">
                              <img src="{project.image}" alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>

                         <div className="p-6">
                             <div className="flex flex-wrap gap-2 mb-4">
                                 {project.tags.map((tag,index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                             {tag}
                                        </span>
                                   ))}
                             </div>
                         
                         <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                         <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                         <div className="flex justify-between items-centre">
                               <div className="flex space-x-3">
                                   <a
                                       href={project.demoUrl}
                                       target="_blank"
                                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                   >
                                        <ExternalLink size={20}/>
                                   </a>
                                   <a
                                     href={project.githubUrl}
                                     target="_blank"
                                         className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                   >
                                        <Github size={20}/>
                                   </a>
                               </div>
                              </div>
                         </div>
                    </div>
                   ))}

              </div>

              <div className="text-center mt-12">
               <a className="cosmic-button w-fit flex items-centre mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/abhinab1751"
                >
                    Check My Github <ArrowRight size={16} />
               </a>
               

              </div>
          </div>

     </section>);
};