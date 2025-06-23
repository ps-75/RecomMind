import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { technologiesByDomain } from "./technologyData";
import { Briefcase, BookOpen, ChevronRight } from "lucide-react";
import LearningResources from "./LearningResources";
import { config } from "./config";

// Define the types right here for clarity and simplicity
export interface QuizResults {
  domains: string[];
  technologies: string[];
  experience: string;
}

interface Recommendation {
  title: string;
  description: string;
}

// A simple, hardcoded map with 2 domains as you requested.
const simpleRecommendationsMap: { [domain: string]: { [exp: string]: { careers: Recommendation[]; learning: Recommendation[] } } } = {
  "Web Development": {
    beginner: {
      careers: [
        { title: "Frontend Developer", description: "Build user interfaces for websites." },
        { title: "Junior Web Designer", description: "Create engaging and responsive web pages." },
        { title: "Website Tester", description: "Test websites for bugs and performance." }
      ],
      learning: [
        { title: "Learn HTML, CSS & JavaScript", description: "Master the core of web development." },
        { title: "Responsive Design", description: "Make websites mobile-friendly using Flexbox and Grid." },
        { title: "Git & GitHub Basics", description: "Understand version control and collaboration tools." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Full Stack Developer", description: "Work on both frontend and backend of applications." },
        { title: "Web Accessibility Specialist", description: "Ensure web content is accessible to all users." },
        { title: "CMS Developer", description: "Build and customize content management systems." }
      ],
      learning: [
        { title: "Master React or Vue", description: "Build dynamic frontend applications." },
        { title: "Node.js & Express.js", description: "Create server-side logic and APIs." },
        { title: "Database Integration", description: "Learn MongoDB or PostgreSQL." }
      ]
    },
    advanced: {
      careers: [
        { title: "Senior Web Architect", description: "Design large-scale, scalable web systems." },
        { title: "DevOps Engineer", description: "Automate deployments and monitor performance." },
        { title: "Tech Lead - Web", description: "Lead a team of developers and oversee system design." }
      ],
      learning: [
        { title: "Microservices & CI/CD", description: "Structure large applications and automate pipelines." },
        { title: "Performance Optimization", description: "Speed up frontend and backend response times." },
        { title: "Security in Web Apps", description: "Prevent XSS, CSRF, and implement OAuth." }
      ]
    }
  },

  "AI/ML": {
    beginner: {
      careers: [
        { title: "ML Intern", description: "Assist in training models and data preparation." },
        { title: "Data Labeling Associate", description: "Prepare datasets for supervised learning." },
        { title: "Python Developer", description: "Write scripts and preprocessing code for ML tasks." }
      ],
      learning: [
        { title: "Intro to Machine Learning", description: "Understand supervised vs unsupervised learning." },
        { title: "Python for ML", description: "Use libraries like NumPy, Pandas and Matplotlib." },
        { title: "Google Teachable Machine", description: "Build your first model with no code." }
      ]
    },
    intermediate: {
      careers: [
        { title: "ML Engineer", description: "Design and deploy machine learning models." },
        { title: "Data Scientist", description: "Analyze data and extract meaningful insights." },
        { title: "NLP Engineer", description: "Work with text data to build chatbots or classifiers." }
      ],
      learning: [
        { title: "Scikit-learn Projects", description: "Apply models to classification and regression problems." },
        { title: "Neural Networks with TensorFlow", description: "Build and train deep learning models." },
        { title: "ML Pipelines", description: "Automate model training and evaluation." }
      ]
    },
    advanced: {
      careers: [
        { title: "AI Researcher", description: "Conduct experiments in computer vision or NLP." },
        { title: "ML Ops Engineer", description: "Deploy and monitor models at scale." },
        { title: "AI Architect", description: "Design end-to-end AI systems." }
      ],
      learning: [
        { title: "Transformers & LLMs", description: "Learn architectures behind GPT, BERT, etc." },
        { title: "Deploying ML Models", description: "Use Docker, FastAPI, and cloud tools." },
        { title: "Reinforcement Learning", description: "Train agents using rewards and actions." }
      ]
    }
  },
  "Mobile Development": {
    beginner: {
      careers: [
        { title: "Android App Tester", description: "Test mobile apps on Android devices and report bugs." },
        { title: "Mobile UI Intern", description: "Help design and build app interfaces using simple layouts." },
        { title: "Flutter Developer Intern", description: "Assist in developing cross-platform apps with Flutter." }
      ],
      learning: [
        { title: "Learn Dart & Flutter Basics", description: "Build simple UI screens and understand widgets." },
        { title: "Intro to Android with Kotlin", description: "Create your first native Android app." },
        { title: "Mobile App Design Basics", description: "Understand mobile UX principles and prototyping tools." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Mobile App Developer", description: "Build and publish cross-platform apps." },
        { title: "React Native Developer", description: "Create apps for iOS and Android using a single codebase." },
        { title: "iOS Developer", description: "Build apps for Apple devices using Swift." }
      ],
      learning: [
        { title: "State Management in Flutter", description: "Handle user interaction and app state cleanly." },
        { title: "Advanced Android Concepts", description: "Learn Jetpack, navigation components, and services." },
        { title: "Firebase Integration", description: "Add authentication and real-time database to apps." }
      ]
    },
    advanced: {
      careers: [
        { title: "Mobile App Architect", description: "Design scalable and maintainable app structures." },
        { title: "Cross-Platform Tech Lead", description: "Lead hybrid development using Flutter or React Native." },
        { title: "Performance Engineer", description: "Optimize mobile apps for speed and battery efficiency." }
      ],
      learning: [
        { title: "App Store Optimization (ASO)", description: "Increase app visibility and downloads." },
        { title: "Integrate Native Modules", description: "Use camera, location, and sensors with native code." },
        { title: "CI/CD for Mobile", description: "Automate builds and deployments with GitHub Actions or Bitrise." }
      ]
    }
  },

  "Cybersecurity": {
    beginner: {
      careers: [
        { title: "Security Analyst Intern", description: "Monitor systems and assist with basic audits." },
        { title: "Bug Bounty Hunter", description: "Find vulnerabilities in real-world applications." },
        { title: "SOC Trainee", description: "Learn to use monitoring tools in Security Operation Centers." }
      ],
      learning: [
        { title: "Cybersecurity Fundamentals", description: "Understand threats, attacks, and security goals." },
        { title: "Linux & Networking Basics", description: "Learn essential tools and terminal commands." },
        { title: "TryHackMe / HackTheBox", description: "Practice hands-on hacking skills safely." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Penetration Tester", description: "Simulate attacks to find security holes." },
        { title: "Security Consultant", description: "Advise companies on improving their security posture." },
        { title: "Ethical Hacker", description: "Use hacking skills for good to secure systems." }
      ],
      learning: [
        { title: "Metasploit & Wireshark", description: "Scan networks and analyze packet data." },
        { title: "Web App Security", description: "Identify and exploit XSS, SQLi, CSRF, etc." },
        { title: "CTF Competitions", description: "Participate in real-world hacking challenges." }
      ]
    },
    advanced: {
      careers: [
        { title: "Security Architect", description: "Design secure systems and implement robust policies." },
        { title: "Red Team Specialist", description: "Perform full-scope offensive security tests." },
        { title: "Digital Forensics Expert", description: "Analyze cyberattacks and recover breached data." }
      ],
      learning: [
        { title: "Reverse Engineering", description: "Decompile malware and analyze behavior." },
        { title: "Advanced Exploit Development", description: "Find and create custom exploits for vulnerabilities." },
        { title: "Security Automation", description: "Use scripts and tools to automate monitoring & patching." }
      ]
    }
  },
  "Data Science": {
    beginner: {
      careers: [
        { title: "Data Analyst Intern", description: "Assist in analyzing datasets and creating visual reports." },
        { title: "Business Intelligence Trainee", description: "Work with BI tools to interpret data for business use." },
        { title: "Junior Data Cleaner", description: "Preprocess and clean messy real-world datasets." }
      ],
      learning: [
        { title: "Intro to Data Science with Python", description: "Learn how to handle data using Python and Jupyter." },
        { title: "Excel & Google Sheets Analytics", description: "Perform simple analyses with formulas and pivot tables." },
        { title: "Data Visualization with Matplotlib", description: "Plot and visualize datasets effectively." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Data Scientist", description: "Build predictive models and uncover insights from data." },
        { title: "Machine Learning Engineer", description: "Train and deploy ML models in production." },
        { title: "Data Engineer", description: "Build data pipelines and manage big data systems." }
      ],
      learning: [
        { title: "Pandas, NumPy, and SciKit Learn", description: "Master core libraries used in data workflows." },
        { title: "Supervised vs Unsupervised ML", description: "Understand ML categories and real-world use cases." },
        { title: "SQL for Data Science", description: "Query and manipulate data in relational databases." }
      ]
    },
    advanced: {
      careers: [
        { title: "Senior Data Scientist", description: "Lead data-driven initiatives and model evaluation strategies." },
        { title: "AI Researcher", description: "Develop cutting-edge ML and AI algorithms." },
        { title: "Data Science Product Manager", description: "Bridge data science with business outcomes." }
      ],
      learning: [
        { title: "Deep Learning with TensorFlow or PyTorch", description: "Train neural networks and experiment with CNNs/RNNs." },
        { title: "Big Data Tools (Hadoop, Spark)", description: "Work with massive datasets across clusters." },
        { title: "MLOps & Model Deployment", description: "Use tools like MLflow or FastAPI to ship models." }
      ]
    }
  },

  "Game Development": {
    beginner: {
      careers: [
        { title: "Game Tester", description: "Playtest games and report bugs to developers." },
        { title: "2D Game Developer", description: "Build basic platformers using engines like Scratch or Godot." },
        { title: "Unity Intern", description: "Assist in small Unity game projects or prototypes." }
      ],
      learning: [
        { title: "Intro to Game Design", description: "Understand basic concepts like mechanics, dynamics, and aesthetics." },
        { title: "Learn Unity Basics", description: "Get familiar with the Unity interface and scripting." },
        { title: "Game Asset Integration", description: "Add sound, images, and effects to games." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Game Developer", description: "Build interactive games with Unity or Unreal Engine." },
        { title: "Gameplay Programmer", description: "Code core mechanics and game logic." },
        { title: "Technical Artist", description: "Bridge the gap between art and code for game visuals." }
      ],
      learning: [
        { title: "C# for Unity", description: "Use C# to create scripts for objects, animations, and physics." },
        { title: "Unreal Engine with Blueprints", description: "Build games using Unreal's visual scripting system." },
        { title: "2D vs 3D Game Development", description: "Understand asset management and performance." }
      ]
    },
    advanced: {
      careers: [
        { title: "Game Engine Developer", description: "Build and maintain game engine features and performance." },
        { title: "Lead Game Designer", description: "Design gameplay systems, levels, and narratives." },
        { title: "VR/AR Game Specialist", description: "Create immersive experiences for virtual and augmented reality." }
      ],
      learning: [
        { title: "AI in Games (Pathfinding, FSMs)", description: "Implement intelligent game agents and decision-making." },
        { title: "Multiplayer Game Networking", description: "Sync game states across players using network protocols." },
        { title: "Advanced Physics & Optimization", description: "Handle collision, performance bottlenecks, and memory." }
      ]
    }
  },
  "Cloud Computing": {
    beginner: {
      careers: [
        { title: "Cloud Intern", description: "Assist in basic cloud configurations and deployments." },
        { title: "DevOps Trainee", description: "Learn CI/CD pipelines and automate deployments." },
        { title: "Junior SysOps Engineer", description: "Support system operations and cloud monitoring." }
      ],
      learning: [
        { title: "Intro to Cloud Concepts", description: "Understand the basics of cloud (IaaS, PaaS, SaaS)." },
        { title: "Getting Started with AWS Free Tier", description: "Launch your first EC2 and S3 services." },
        { title: "Basics of Linux & Shell", description: "Navigate Linux systems used in cloud infrastructure." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Cloud Engineer", description: "Manage scalable cloud applications using AWS, Azure, or GCP." },
        { title: "DevOps Engineer", description: "Automate testing, deployment, and monitoring of applications." },
        { title: "Site Reliability Engineer", description: "Ensure systems are reliable and scalable under load." }
      ],
      learning: [
        { title: "Deploying Web Apps on AWS", description: "Use EC2, S3, and RDS to host full-stack applications." },
        { title: "Intro to Kubernetes & Docker", description: "Orchestrate containerized apps in cloud environments." },
        { title: "Terraform or AWS CDK", description: "Provision cloud resources using Infrastructure as Code (IaC)." }
      ]
    },
    advanced: {
      careers: [
        { title: "Cloud Solutions Architect", description: "Design enterprise-grade, scalable cloud architectures." },
        { title: "Cloud Security Engineer", description: "Secure cloud environments and ensure compliance." },
        { title: "Platform Engineer", description: "Build and manage internal cloud platforms for engineering teams." }
      ],
      learning: [
        { title: "Serverless Architectures", description: "Design apps using Lambda, API Gateway, and DynamoDB." },
        { title: "Advanced Kubernetes Operations", description: "Manage large clusters with Helm, Prometheus, and Ingress." },
        { title: "Cloud Monitoring & Cost Optimization", description: "Use tools like CloudWatch, Datadog, and Billing Alerts." }
      ]
    }
  },
  "Blockchain": {
    beginner: {
      careers: [
        { title: "Blockchain Intern", description: "Assist in writing smart contracts and testing dApps." },
        { title: "Junior Solidity Developer", description: "Develop basic smart contracts using Solidity." },
        { title: "Crypto Analyst", description: "Analyze trends and technology in cryptocurrencies." }
      ],
      learning: [
        { title: "Basics of Blockchain", description: "Understand how distributed ledgers and consensus work." },
        { title: "Learn Solidity", description: "Start developing smart contracts for Ethereum-based platforms." },
        { title: "MetaMask & Wallets", description: "Explore how blockchain wallets and transactions work." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Blockchain Developer", description: "Build and deploy decentralized applications (dApps)." },
        { title: "Smart Contract Auditor", description: "Ensure smart contracts are secure and bug-free." },
        { title: "Web3 Frontend Developer", description: "Integrate dApps with Web3.js and blockchain networks." }
      ],
      learning: [
        { title: "Ethereum & EVM", description: "Dive into Ethereum architecture and gas optimization." },
        { title: "Using Web3.js", description: "Connect smart contracts to your frontend applications." },
        { title: "DeFi Fundamentals", description: "Understand Decentralized Finance applications and tools." }
      ]
    },
    advanced: {
      careers: [
        { title: "Blockchain Architect", description: "Design blockchain protocols and architecture for scalability." },
        { title: "DeFi Engineer", description: "Develop advanced financial applications using blockchain." },
        { title: "Cryptography Expert", description: "Work on advanced cryptographic algorithms for blockchain security." }
      ],
      learning: [
        { title: "Layer 2 Scaling Solutions", description: "Learn about rollups, sidechains, and zk-SNARKs." },
        { title: "Cross-Chain Interoperability", description: "Understand how different blockchains can interact." },
        { title: "Contribute to Open-Source Projects", description: "Get involved with blockchain communities and codebases." }
      ]
    }
  },
  "UI/UX Design": {
    beginner: {
      careers: [
        { title: "Design Intern", description: "Work with senior designers to create user interfaces." },
        { title: "Junior UI Designer", description: "Design screens and layouts for web/mobile apps." },
        { title: "Graphic Designer", description: "Create visual assets for digital platforms." }
      ],
      learning: [
        { title: "Basics of Figma or Adobe XD", description: "Learn the tools used for UI wireframing and mockups." },
        { title: "Principles of Good UI", description: "Understand layout, contrast, spacing, and typography." },
        { title: "Designing with Users in Mind", description: "Explore beginner-level UX fundamentals." }
      ]
    },
    intermediate: {
      careers: [
        { title: "UI/UX Designer", description: "Own user flows, interactions, and wireframes for products." },
        { title: "Product Designer", description: "Design products considering both UX and business goals." },
        { title: "Interaction Designer", description: "Focus on user interaction models and usability." }
      ],
      learning: [
        { title: "User Journey Mapping", description: "Plan how users navigate and interact with the product." },
        { title: "Accessibility in Design", description: "Create inclusive designs for all types of users." },
        { title: "Prototyping & User Testing", description: "Test ideas with interactive prototypes and feedback." }
      ]
    },
    advanced: {
      careers: [
        { title: "UX Researcher", description: "Conduct research and usability testing to improve products." },
        { title: "Design System Manager", description: "Create and maintain a scalable design system." },
        { title: "Lead Product Designer", description: "Oversee entire design lifecycles and mentor teams." }
      ],
      learning: [
        { title: "Human-Centered Design", description: "Apply HCD frameworks to solve real-world problems." },
        { title: "Advanced Prototyping Tools", description: "Master Figma plugins, Framer, and Principle." },
        { title: "Behavioral Psychology in UX", description: "Use cognitive science to influence better design decisions." }
      ]
    }
  }, "Software Engineering": {
    beginner: {
      careers: [
        { title: "Junior Software Engineer", description: "Assist in building and maintaining software applications." },
        { title: "Programming Trainee", description: "Learn to write clean and efficient code under guidance." },
        { title: "QA Tester", description: "Manually test features and identify bugs in software." }
      ],
      learning: [
        { title: "Master a Programming Language", description: "Start with C++, Java, or Python and build basic apps." },
        { title: "Data Structures & Algorithms (DSA)", description: "Learn arrays, stacks, queues, and sorting/searching algorithms." },
        { title: "Version Control with Git & GitHub", description: "Track and collaborate on code efficiently." }
      ]
    },
    intermediate: {
      careers: [
        { title: "Software Engineer", description: "Design, develop, test, and maintain software systems." },
        { title: "Backend Developer", description: "Create server-side logic, APIs, and database systems." },
        { title: "SDE-1 (Software Dev Engineer)", description: "Write scalable code and contribute to system design." }
      ],
      learning: [
        { title: "Object-Oriented Programming (OOP)", description: "Design modular and reusable code using OOP concepts." },
        { title: "Build Projects Using MVC Architecture", description: "Structure apps efficiently using model-view-controller." },
        { title: "System Design Basics", description: "Learn how scalable systems like YouTube or Uber work." }
      ]
    },
    advanced: {
      careers: [
        { title: "Senior Software Engineer", description: "Lead projects, mentor juniors, and architect applications." },
        { title: "Technical Architect", description: "Design enterprise-level architecture and technology stack." },
        { title: "Engineering Manager", description: "Manage engineering teams, timelines, and deliverables." }
      ],
      learning: [
        { title: "Advanced System Design", description: "Handle scalability, high availability, and microservices." },
        { title: "Design Patterns & Clean Code", description: "Apply reusable solutions and write maintainable code." },
        { title: "Contribute to Open Source", description: "Work on real-world collaborative coding environments." }
      ]
    }
  }


};

const NewRecommendations: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. If there's no state, we can't show results. Redirect to the start.
  if (!location.state) {
    return <Navigate to="/" />;
  }

  const { quizResults } = location.state as { quizResults: QuizResults };

  // 2. This is the core logic to find the correct recommendations.
  const getRecommendations = () => {
    const allRecs: { domainName: string; careers: Recommendation[]; learning: Recommendation[] }[] = [];

    quizResults.domains.forEach(domainId => {
      // Step A: Convert 'web-dev' to 'Web Development'
      const domainName = (technologiesByDomain as any)[domainId]?.name;

      if (domainName) {
        // Step B: Find recommendations for that domain and experience level
        const domainRecs = simpleRecommendationsMap[domainName];
        const experienceRecs = domainRecs ? domainRecs[quizResults.experience] : undefined;

        if (experienceRecs) {
          allRecs.push({
            domainName: domainName,
            careers: experienceRecs.careers,
            learning: experienceRecs.learning
          });
        }
      }
    });

    return allRecs;
  };

  const finalRecommendations = getRecommendations();

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Your Personalized Career Roadmap
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Based on your selections, here are potential career paths and learning suggestions.
          </p>
        </div>

        {/* Missing API Key Warning */}
        {(!config.YOUTUBE_API_KEY || config.YOUTUBE_API_KEY === 'YOUR_YOUTUBE_API_KEY') && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded-lg" role="alert">
            <p className="font-bold">API Key Missing</p>
            <p>The YouTube API key is not configured, so video recommendations cannot be displayed. Please follow the setup instructions and restart the server.</p>
          </div>
        )}

        {/* User's Selections Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Selections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                <p className="text-sm font-semibold text-purple-800 uppercase tracking-wider">Domains</p>
                <p className="text-lg font-bold text-purple-900">{quizResults.domains.map(d => (technologiesByDomain as any)[d]?.name).join(', ')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 uppercase tracking-wider">Technologies</p>
                <p className="text-lg font-bold text-blue-900">{quizResults.technologies.join(', ')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="text-sm font-semibold text-green-800 uppercase tracking-wider">Experience Level</p>
                <p className="text-lg font-bold text-green-900 capitalize">{quizResults.experience}</p>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="space-y-16">
          {finalRecommendations.length > 0 ? (
            finalRecommendations.map(({ domainName, careers, learning }) => (
              <div key={domainName}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                  <h2 className="text-4xl font-bold text-purple-800 mb-2">
                    {domainName}
                  </h2>
                  <p className="text-xl font-medium text-gray-500 mb-8 capitalize">
                      {quizResults.experience} Level Recommendations
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Career Paths */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200 flex items-center">
                        <Briefcase className="mr-3 text-blue-500" /> Career Paths
                      </h3>
                      <div className="space-y-5">
                        {careers.map(rec => (
                          <div key={rec.title} className="flex items-start p-4 rounded-lg transition-all hover:bg-blue-50">
                            <ChevronRight className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                            <div className="ml-3">
                              <h4 className="font-bold text-lg text-gray-800">{rec.title}</h4>
                              <p className="text-gray-600">{rec.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Learning Suggestions */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200 flex items-center">
                        <BookOpen className="mr-3 text-green-500" /> Learning Suggestions
                      </h3>
                      <div className="space-y-5">
                        {learning.map(rec => (
                          <div key={rec.title} className="flex items-start p-4 rounded-lg transition-all hover:bg-green-50">
                            <ChevronRight className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                            <div className="ml-3">
                              <h4 className="font-bold text-lg text-gray-800">{rec.title}</h4>
                              <p className="text-gray-600">{rec.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* If only one domain is selected, show resources immediately after */}
                {finalRecommendations.length === 1 && (
                  <div className="mt-8">
                    <LearningResources
                      domains={[domainName]}
                      experience={quizResults.experience}
                      technologies={quizResults.technologies}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-16">
              <h2 className="text-2xl font-semibold mb-2">No recommendations found for your selections.</h2>
              <p>Please try the quiz again. This may be due to a data mismatch.</p>
            </div>
          )}
        </div>

        {/* If multiple domains are selected, show a combined resource block at the end */}
        {finalRecommendations.length > 1 && (
          <div className="mt-16">
            <LearningResources
              domains={finalRecommendations.map(r => r.domainName)}
              experience={quizResults.experience}
              technologies={quizResults.technologies}
            />
          </div>
        )}

        {/* Footer Button */}
        <div className="text-center mt-16">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg transition-transform hover:scale-105"
            onClick={() => navigate('/')}
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRecommendations; 