import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Devloper & Tech Creator</h3>

                        <p className="text-muted-foreground">
                            I&apos;m Abhinaba Dey, an aspiring Quantitative Analyst with a strong foundation in Machine Learning, Deep Learning, and Algorithmic Trading. My technical skills span Python, C++, SQL, and modern AI frameworks, which I apply to projects ranging from NLP to trading strategy backtesting.

                            I am passionate about combining mathematics, finance, and technology to build data-driven trading systems. With growing intrest in full-stack development and ML projects, I aim to integrate advanced technical insight with financial markets to contribute to the field of quant finance.
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="/AbhinabaDey-CV.pdf"
                                download="AbhinabaDey-CV.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg text-primary">Web Development</h4>
                                    <p className="text-primary text-sm">
                                        Building responsive and dynamic websites using modern technologies like React, Tailwind CSS, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg text-primary">Machine Learning</h4>
                                    <p className="text-muted-foreground text-sm text-primary">
                                        Exploring machine learning concepts and building projects to understand data patterns and predictive modeling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg text-primary">DSA</h4>
                                    <p className="text-muted-foreground text-sm text-primary">
                                        Strong foundation in Data Structures and Algorithms, enabling efficient problem-solving and coding skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};