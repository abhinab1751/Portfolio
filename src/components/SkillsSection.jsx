import { useState } from "react";
import { cn } from "../lib/utils";
import { Briefcase, Code, User } from "lucide-react";

const skills = [
    {name: "DSA" , level: 60, category: "Programming" },
    {name: "Web Development" , level: 70, category: "Programming"},
    {name: "Machine Learning" , level: 50, category: "AI" },
    {name: "Data Analysis" , level: 40, category: "AI"},
    {name: "Communication" , level: 80, category: "Soft Skills"},
    {name: "SQL", level: 60, category: "Database" },
]


const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter( 
        (skills) => activeCategory === "All" || skills.category === activeCategory 
    );
    return <section 
    id="skills"
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-centre">
                My <span className="text-primary">Skills</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills, key) => (
                    <div 
                    key={key} 
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                      <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg"> {skills.name}</h3>
                      </div>
                      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                         <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                         style={{width: skills.level + "%"}}
                        />
                        </div>
                        <div className="text-sm mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skills.level}%
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>;
    
}