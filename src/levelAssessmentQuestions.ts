export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface AssessmentQuestions {
    [key: string]: Question[];
}

export const assessmentQuestions: AssessmentQuestions = {
    'web-dev': [
        // Easy
        {
            question: "Which of the following is a CSS preprocessor?",
            options: ["TypeScript", "Sass", "Express", "React"],
            correctAnswer: "Sass",
        },
        {
            question: "What is the primary purpose of the `useEffect` hook in React?",
            options: [
                "To manage component state",
                "To perform side effects in function components",
                "To create context for state sharing",
                "To handle routing"
            ],
            correctAnswer: "To perform side effects in function components",
        },
        {
            question: "Which HTTP method is typically used to update existing data?",
            options: ["GET", "POST", "PUT", "DELETE"],
            correctAnswer: "PUT",
        },

        // Medium
        {
            question: "What does the virtual DOM do in React?",
            options: [
                "It directly updates the real DOM",
                "It improves styling performance",
                "It is a lightweight representation of the actual DOM to optimize rendering",
                "It is used for routing purposes"
            ],
            correctAnswer: "It is a lightweight representation of the actual DOM to optimize rendering",
        },
        {
            question: "Which of these is NOT a feature of HTML5?",
            options: ["Canvas element", "Web Storage", "WebAssembly", "Semantic elements like <article> and <section>"],
            correctAnswer: "WebAssembly",
        },
        {
            question: "In the context of Node.js, what is the purpose of the `Event Loop`?",
            options: [
                "It blocks the main thread for async operations",
                "It continuously polls APIs for changes",
                "It handles asynchronous operations without blocking the main thread",
                "It updates the DOM with events"
            ],
            correctAnswer: "It handles asynchronous operations without blocking the main thread",
        },

        // Hard
        {
            question: `You are optimizing a React application that has performance issues due to frequent re-renders. 
Which technique would most likely reduce unnecessary re-renders in a deeply nested component tree?`,
            options: [
                "Using `useState` instead of `useReducer`",
                "Applying `React.memo` and useCallback on child components",
                "Using inline functions inside JSX",
                "Replacing all props with context"
            ],
            correctAnswer: "Applying `React.memo` and useCallback on child components",
        },
        {
            question: `In a production web app, users are experiencing inconsistent CSS due to cached files after deployment. 
Which approach best ensures users always get the latest styles without manual cache clearing?`,
            options: [
                "Use inline styles for everything",
                "Add versioning or content hashes to CSS filenames during build",
                "Disable browser cache via meta tags",
                "Keep styles inside JavaScript files"
            ],
            correctAnswer: "Add versioning or content hashes to CSS filenames during build",
        },
        {
            question: `Your web API is public-facing and you're seeing cross-origin requests fail. 
Which HTTP header must be configured to enable secure cross-domain communication?`,
            options: [
                "X-Frame-Options",
                "Access-Control-Allow-Origin",
                "Content-Security-Policy",
                "Cache-Control"
            ],
            correctAnswer: "Access-Control-Allow-Origin",
        },
        {
            question: `A React app has deeply nested context providers and consumers.
What architectural improvement would reduce context overhead while maintaining global state management?`,
            options: [
                "Use more `useEffect` hooks",
                "Flatten the JSX structure",
                "Adopt a global state library like Zustand or Redux Toolkit",
                "Use inline styles to reduce depth"
            ],
            correctAnswer: "Adopt a global state library like Zustand or Redux Toolkit",
        }
    ],

    'ai-ml': [
        // Easy
        {
            question: "Which library is most commonly used for creating neural networks in Python?",
            options: ["Pandas", "NumPy", "TensorFlow", "Matplotlib"],
            correctAnswer: "TensorFlow",
        },
        {
            question: "What does 'NLP' stand for in the context of AI?",
            options: ["Natural Language Processing", "Neural Logic Programming", "Network Learning Protocol"],
            correctAnswer: "Natural Language Processing",
        },
        {
            question: "Which language is most commonly used for ML model development?",
            options: ["Java", "C++", "Python", "Swift"],
            correctAnswer: "Python",
        },

        // Medium
        {
            question: "What is overfitting in machine learning?",
            options: [
                "Model fits training data well and generalizes well",
                "Model is too simple and underperforms",
                "Model performs well on training but poorly on unseen data",
                "Model has too few parameters"
            ],
            correctAnswer: "Model performs well on training but poorly on unseen data",
        },
        {
            question: "Which of the following is used for dimensionality reduction?",
            options: ["CNN", "PCA", "RNN", "KNN"],
            correctAnswer: "PCA",
        },
        {
            question: "What does a confusion matrix evaluate in classification models?",
            options: [
                "Only model accuracy",
                "Only precision",
                "Model performance across true/false positives and negatives",
                "Regression predictions"
            ],
            correctAnswer: "Model performance across true/false positives and negatives",
        },

        // Hard
        {
            question: `You're working with a highly imbalanced dataset (e.g., 95% class A, 5% class B). 
Which metric is most reliable for evaluating performance of a binary classifier?`,
            options: ["Accuracy", "F1 Score", "Loss", "R-squared"],
            correctAnswer: "F1 Score",
        },
        {
            question: `A deep learning model performs well on training and validation, but fails on production data. 
Which strategy could address this issue?`,
            options: [
                "Reduce number of layers",
                "Apply dropout and batch normalization",
                "Use synthetic or more diverse real-world data for training",
                "Use a smaller batch size"
            ],
            correctAnswer: "Use synthetic or more diverse real-world data for training",
        },
        {
            question: `Which approach is most efficient when fine-tuning a large pre-trained transformer like BERT 
for a specific NLP classification task?`,
            options: [
                "Train the model from scratch",
                "Use only the output layer of the model",
                "Fine-tune the entire model on your dataset",
                "Freeze early layers and train only top layers (transfer learning)"
            ],
            correctAnswer: "Freeze early layers and train only top layers (transfer learning)",
        },
        {
            question: `In a real-time object detection system using YOLO, latency becomes an issue. 
Which of the following changes could help reduce inference time without drastically compromising accuracy?`,
            options: [
                "Switch to a more complex model like Faster R-CNN",
                "Use higher resolution input images",
                "Use a quantized or smaller version like YOLOv5-nano",
                "Remove GPU acceleration"
            ],
            correctAnswer: "Use a quantized or smaller version like YOLOv5-nano",
        }
    ],

    'software-engineering': [
        // Easy
        {
            question: "What does DSA stand for in software engineering?",
            options: ["Development Standards Association", "Data Structure and Algorithms", "Debugging Software Applications", "Dynamic System Analysis"],
            correctAnswer: "Data Structure and Algorithms",
        },
        {
            question: "Which data structure uses LIFO (Last-In, First-Out) principle?",
            options: ["Queue", "Stack", "Tree", "Heap"],
            correctAnswer: "Stack",
        },
        {
            question: "Which sorting algorithm has the best average time complexity among the following?",
            options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
            correctAnswer: "Quick Sort",
        },

        // Medium
        {
            question: "Which design pattern ensures a class has only one instance and provides a global point of access to it?",
            options: ["Factory", "Observer", "Singleton", "Builder"],
            correctAnswer: "Singleton",
        },
        {
            question: "What is the main goal of Test-Driven Development (TDD)?",
            options: [
                "To test only edge cases",
                "To avoid writing tests",
                "To write tests before writing code to improve code quality and design",
                "To remove the need for debugging"
            ],
            correctAnswer: "To write tests before writing code to improve code quality and design",
        },
        {
            question: "What is the Big-O time complexity of searching in a balanced Binary Search Tree?",
            options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
            correctAnswer: "O(log n)",
        },

        // Hard
        {
            question: `A software system is being refactored to separate concerns like UI, business logic, and data access.
Which design principle or pattern does this align with?`,
            options: ["Single Responsibility Principle", "DRY Principle", "Open-Closed Principle", "Model-View-Controller (MVC)"],
            correctAnswer: "Model-View-Controller (MVC)",
        },
        {
            question: `In system design, why are message queues like RabbitMQ or Kafka used between services?`,
            options: [
                "To increase frontend responsiveness",
                "To ensure synchronous communication between services",
                "To decouple services and handle asynchronous communication with fault tolerance",
                "To store data permanently"
            ],
            correctAnswer: "To decouple services and handle asynchronous communication with fault tolerance",
        },
        {
            question: `What are the benefits of using version control systems like Git in collaborative development?`,
            options: [
                "Allows real-time chat",
                "Prevents bugs automatically",
                "Tracks changes, enables collaboration, and supports branching/merging for parallel work",
                "Encrypts codebases"
            ],
            correctAnswer: "Tracks changes, enables collaboration, and supports branching/merging for parallel work",
        },
        {
            question: `You're optimizing a critical backend service with frequent read operations on large datasets.
Which data structure would be most efficient?`,
            options: ["Array", "Linked List", "Hash Map", "Stack"],
            correctAnswer: "Hash Map",
        }
    ],
    'ui-ux-design': [
        // Easy
        {
            question: "What does UX stand for in design?",
            options: ["Universal Experience", "User Experience", "Unique Execution", "User Extension"],
            correctAnswer: "User Experience",
        },
        {
            question: "Which software is commonly used for designing user interfaces?",
            options: ["MongoDB", "Postman", "Figma", "Node.js"],
            correctAnswer: "Figma",
        },
        {
            question: "Which principle focuses on reducing the user’s memory load by making options visible?",
            options: ["Affordance", "Hick’s Law", "Recognition over recall", "Consistency"],
            correctAnswer: "Recognition over recall",
        },

        // Medium
        {
            question: "What does a wireframe represent in UI design?",
            options: [
                "The color palette of a design",
                "The backend architecture of an app",
                "A basic visual structure of a UI layout without styling",
                "A user research summary"
            ],
            correctAnswer: "A basic visual structure of a UI layout without styling",
        },
        {
            question: "Which of the following is NOT a heuristic in Nielsen's usability heuristics?",
            options: [
                "Error prevention",
                "Aesthetic and minimalist design",
                "Fast loading time",
                "Flexibility and efficiency of use"
            ],
            correctAnswer: "Fast loading time",
        },
        {
            question: "In UI design, what is the goal of a 'design system'?",
            options: [
                "To generate user data",
                "To test code",
                "To maintain consistency and reusability across UI components",
                "To run performance benchmarks"
            ],
            correctAnswer: "To maintain consistency and reusability across UI components",
        },

        // Hard
        {
            question: `A new signup flow redesign results in a 30% drop in completion rate. 
What is the best first step for diagnosing the issue?`,
            options: [
                "Revert to the old design",
                "Survey the users immediately",
                "Conduct usability testing and analyze user behavior with tools like Hotjar or GA",
                "Switch to a new tech stack"
            ],
            correctAnswer: "Conduct usability testing and analyze user behavior with tools like Hotjar or GA",
        },
        {
            question: `You're designing for a mobile app. How should you prioritize elements on a small screen?`,
            options: [
                "Add all features and let users scroll",
                "Use carousels to save space",
                "Use progressive disclosure to show relevant information contextually",
                "Shrink text and buttons to fit everything"
            ],
            correctAnswer: "Use progressive disclosure to show relevant information contextually",
        },
        {
            question: `Which UX metric best reflects how easily users complete a specific goal (like checking out or signing up)?`,
            options: [
                "Click-through Rate",
                "Net Promoter Score",
                "Task Success Rate",
                "Page Views per Session"
            ],
            correctAnswer: "Task Success Rate",
        },
        {
            question: `What is 'accessibility' in UI/UX design and why is it important?`,
            options: [
                "Designing exclusively for high-end devices",
                "Making designs faster for premium users",
                "Ensuring interfaces are usable by people with disabilities, which also improves overall usability",
                "Focusing only on screen aesthetics"
            ],
            correctAnswer: "Ensuring interfaces are usable by people with disabilities, which also improves overall usability",
        }
    ],

    'mobile-dev': [
        // Easy
        {
            question: "Which of the following is a cross-platform mobile framework?",
            options: ["Kotlin", "React Native", "Swift", "C++"],
            correctAnswer: "React Native",
        },
        {
            question: "Which language is primarily used for iOS app development?",
            options: ["Java", "Swift", "Kotlin", "Dart"],
            correctAnswer: "Swift",
        },
        {
            question: "Flutter is written in which programming language?",
            options: ["Java", "Kotlin", "Dart", "Python"],
            correctAnswer: "Dart",
        },

        // Medium
        {
            question: "In Android development, what does the `Activity` class represent?",
            options: [
                "A layout file",
                "An individual screen with a user interface",
                "A database connection",
                "A background task"
            ],
            correctAnswer: "An individual screen with a user interface",
        },
        {
            question: "Which method is used to persist lightweight key-value data in Android apps?",
            options: ["SQLite", "Room", "SharedPreferences", "Firebase"],
            correctAnswer: "SharedPreferences",
        },
        {
            question: "In Flutter, what is a 'widget'?",
            options: [
                "A package",
                "A styling class",
                "The building block of UI",
                "A state management tool"
            ],
            correctAnswer: "The building block of UI",
        },

        // Hard
        {
            question: `A user reports your React Native app crashes only on iOS after a recent update. 
Which debugging approach would best isolate the problem?`,
            options: [
                "Use Chrome DevTools only",
                "Use Xcode logs and device simulator for iOS",
                "Debug using Android emulator",
                "Use Flutter inspector"
            ],
            correctAnswer: "Use Xcode logs and device simulator for iOS",
        },
        {
            question: `You’re building a Flutter app that fetches data from a REST API and updates UI. 
Which approach helps avoid unnecessary rebuilds and handles state efficiently?`,
            options: [
                "Calling setState everywhere",
                "Using StatefulWidget for all widgets",
                "Using Riverpod or Provider for state management",
                "Rewriting code in React Native"
            ],
            correctAnswer: "Using Riverpod or Provider for state management",
        },
        {
            question: `In native Android, what are the implications of running heavy computation directly on the main thread?`,
            options: [
                "Faster execution",
                "Reduced memory usage",
                "Improved battery life",
                "UI freezes or ANR (App Not Responding) errors"
            ],
            correctAnswer: "UI freezes or ANR (App Not Responding) errors",
        },
        {
            question: `You're optimizing an Android app's build time. Which tool helps you analyze and optimize the build process?`,
            options: [
                "ProGuard",
                "Lint",
                "Gradle Build Analyzer",
                "Logcat"
            ],
            correctAnswer: "Gradle Build Analyzer",
        }
    ],
    'cloud-computing': [
        // Easy
        {
            question: "Which of the following is a popular cloud service provider?",
            options: ["MongoDB", "Heroku", "AWS", "Linux"],
            correctAnswer: "AWS",
        },
        {
            question: "What does 'SaaS' stand for in cloud models?",
            options: ["Storage as a Service", "Software as a Service", "Service and Storage", "Script as a Service"],
            correctAnswer: "Software as a Service",
        },
        {
            question: "Which AWS service is commonly used for object storage?",
            options: ["EC2", "Lambda", "S3", "RDS"],
            correctAnswer: "S3",
        },

        // Medium
        {
            question: "What does horizontal scaling refer to in cloud computing?",
            options: [
                "Increasing server RAM",
                "Upgrading CPU",
                "Adding more machines to handle load",
                "Switching from on-premise to cloud"
            ],
            correctAnswer: "Adding more machines to handle load",
        },
        {
            question: "Which of the following services is used to run code without managing servers?",
            options: ["AWS EC2", "AWS Lambda", "AWS RDS", "AWS CloudFront"],
            correctAnswer: "AWS Lambda",
        },
        {
            question: "What is the role of a Load Balancer in cloud architecture?",
            options: [
                "Stores application logs",
                "Serves static content",
                "Distributes incoming traffic across servers",
                "Encrypts data at rest"
            ],
            correctAnswer: "Distributes incoming traffic across servers",
        },

        // Hard
        {
            question: `You have a stateless microservice running behind a load balancer on AWS.
What is the most cost-effective way to scale it for short-term traffic spikes?`,
            options: [
                "Upgrade EC2 instances",
                "Use Auto Scaling Groups with spot instances",
                "Use larger RDS instance",
                "Move service to Kubernetes"
            ],
            correctAnswer: "Use Auto Scaling Groups with spot instances",
        },
        {
            question: `An application on AWS is intermittently failing due to request limits. 
Which AWS service should you monitor to diagnose the issue?`,
            options: ["CloudWatch", "Route 53", "EC2 Logs", "CloudTrail"],
            correctAnswer: "CloudWatch",
        },
        {
            question: `You're deploying a web app across multiple regions for high availability. 
Which AWS component ensures users are routed to the nearest healthy instance?`,
            options: ["Elastic Beanstalk", "Route 53 with latency-based routing", "EBS", "IAM"],
            correctAnswer: "Route 53 with latency-based routing",
        },
        {
            question: `Which of the following best describes Infrastructure as Code (IaC) and its benefit?`,
            options: [
                "Manual configuration using CLI tools",
                "Using cloud GUIs for faster deployment",
                "Writing code to provision and manage infrastructure, enabling version control and automation",
                "Only writing deployment scripts in Bash"
            ],
            correctAnswer: "Writing code to provision and manage infrastructure, enabling version control and automation",
        }
    ], 'cybersecurity': [
        // Easy
        {
            question: "What does 'VPN' stand for?",
            options: ["Virtual Private Network", "Verified Public Node", "Variable Protocol Network", "Virtual Proxy Network"],
            correctAnswer: "Virtual Private Network",
        },
        {
            question: "Which one is a common form of online attack?",
            options: ["Phishing", "Sketching", "Merging", "Compiling"],
            correctAnswer: "Phishing",
        },
        {
            question: "Which of the following is used to scan networks for vulnerabilities?",
            options: ["Figma", "Nmap", "Docker", "Bootstrap"],
            correctAnswer: "Nmap",
        },

        // Medium
        {
            question: "Which of the following best describes a firewall?",
            options: [
                "A malware removal tool",
                "A device that controls incoming/outgoing network traffic based on rules",
                "A password generator",
                "A type of virus"
            ],
            correctAnswer: "A device that controls incoming/outgoing network traffic based on rules",
        },
        {
            question: "What is the purpose of hashing in cybersecurity?",
            options: [
                "To compress files",
                "To generate encryption keys",
                "To ensure data integrity by producing a fixed-size output from input",
                "To hide passwords with random text"
            ],
            correctAnswer: "To ensure data integrity by producing a fixed-size output from input",
        },
        {
            question: "Which of the following tools is used for penetration testing?",
            options: ["Metasploit", "Firebase", "Redis", "Selenium"],
            correctAnswer: "Metasploit",
        },

        // Hard
        {
            question: `You're inspecting suspicious outbound traffic from a web server.
Which type of cybersecurity threat is this most likely indicative of?`,
            options: [
                "SQL Injection",
                "Zero-day exploit",
                "Command and Control (C2) communication from malware",
                "Privilege Escalation"
            ],
            correctAnswer: "Command and Control (C2) communication from malware",
        },
        {
            question: `A company uses hashed passwords, but attackers still cracked user credentials.
Which vulnerability most likely existed?`,
            options: [
                "Use of strong salt with SHA-512",
                "Plaintext storage in logs",
                "Weak hashing algorithm like MD5 or SHA-1 without salt",
                "Secure token-based login"
            ],
            correctAnswer: "Weak hashing algorithm like MD5 or SHA-1 without salt",
        },
        {
            question: `What is a key difference between symmetric and asymmetric encryption ? `,
            options: [
                "Symmetric encryption uses two keys, asymmetric uses one",
                "Only symmetric encryption ensures data integrity",
                "Symmetric uses the same key for encryption and decryption, asymmetric uses public-private key pairs",
                "Asymmetric is less secure than symmetric"
            ],
            correctAnswer: "Symmetric uses the same key for encryption and decryption, asymmetric uses public-private key pairs",
        }
    ],
    'data-science': [
        // Easy
        {
            question: "Which of the following is a commonly used Python library for data analysis?",
            options: ["TensorFlow", "Django", "Pandas", "NumPy"],
            correctAnswer: "Pandas",
        },
        {
            question: "Which visualization library is known for simple plots like bar charts and line graphs in Python?",
            options: ["PyTorch", "Matplotlib", "Flask", "BeautifulSoup"],
            correctAnswer: "Matplotlib",
        },
        {
            question: "What does CSV stand for in data science?",
            options: ["Compressed Sequential Values", "Comma Separated Values", "Code Syntax Validator", "Content Style Variable"],
            correctAnswer: "Comma Separated Values",
        },

        // Medium
        {
            question: "Which metric is most commonly used to evaluate classification models?",
            options: ["Mean Squared Error", "R-squared", "Accuracy", "Gradient Descent"],
            correctAnswer: "Accuracy",
        },
        {
            question: "In a normal distribution, what percentage of the data falls within one standard deviation?",
            options: ["50%", "68%", "95%", "99.7%"],
            correctAnswer: "68%",
        },
        {
            question: "What is the main difference between supervised and unsupervised learning?",
            options: [
                "Supervised learning uses labeled data; unsupervised does not",
                "Supervised learning is faster",
                "Unsupervised learning uses images only",
                "Unsupervised learning is only for regression"
            ],
            correctAnswer: "Supervised learning uses labeled data; unsupervised does not",
        },

        // Hard
        {
            question: `You're building a predictive model for house prices using features like area, number of rooms, and location. 
Which algorithm is best suited for this problem?`,
            options: ["Logistic Regression", "K-Means Clustering", "Linear Regression", "Apriori"],
            correctAnswer: "Linear Regression",
        },
        {
            question: `You notice that your model performs very well on training data but poorly on validation data. 
What is the most likely issue and how do you address it?`,
            options: [
                "Underfitting — Add more data",
                "Overfitting — Use regularization or reduce complexity",
                "Data leak — Add more epochs",
                "Feature scaling — Switch to KNN"
            ],
            correctAnswer: "Overfitting — Use regularization or reduce complexity",
        },
        {
            question: `Which technique is used to reduce the number of features in a dataset while retaining most of the variance?`,
            options: ["One-hot encoding", "Data augmentation", "Principal Component Analysis (PCA)", "Cross-validation"],
            correctAnswer: "Principal Component Analysis (PCA)",
        },
        {
            question: `What is a confusion matrix used for in classification problems?`,
            options: [
                "To measure training time",
                "To display correct and incorrect predictions in tabular form",
                "To clean missing values",
                "To display how many epochs were run"
            ],
            correctAnswer: "To display correct and incorrect predictions in tabular form",
        }
    ],
    'blockchain': [
        // Easy
        {
            question: "What is the primary function of a blockchain?",
            options: ["Run mobile apps", "Securely store and verify data transactions", "Render 3D graphics", "Send emails"],
            correctAnswer: "Securely store and verify data transactions",
        },
        {
            question: "Which of the following is the cryptocurrency used in Ethereum?",
            options: ["Bitcoin", "Ether", "Litecoin", "DogeCoin"],
            correctAnswer: "Ether",
        },
        {
            question: "Who is credited with the invention of Bitcoin?",
            options: ["Vitalik Buterin", "Elon Musk", "Satoshi Nakamoto", "Brian Armstrong"],
            correctAnswer: "Satoshi Nakamoto",
        },

        // Medium
        {
            question: "What is a smart contract in blockchain technology?",
            options: [
                "A contract you sign online",
                "A self-executing agreement with predefined rules coded in it",
                "An intelligent legal document",
                "An encrypted email"
            ],
            correctAnswer: "A self-executing agreement with predefined rules coded in it",
        },
        {
            question: "What is the consensus mechanism used by Bitcoin?",
            options: ["Proof of Stake", "Proof of Work", "Proof of Authority", "Delegated Voting"],
            correctAnswer: "Proof of Work",
        },
        {
            question: "Which language is primarily used for writing Ethereum smart contracts?",
            options: ["Python", "Java", "Solidity", "Ruby"],
            correctAnswer: "Solidity",
        },

        // Hard
        {
            question: `You are building a dApp (decentralized application) on Ethereum. 
What does the term 'gas fee' refer to?`,
            options: [
                "Monthly server cost",
                "Fee paid to developers",
                "The cost paid to miners for executing operations",
                "Charge for buying Ether"
            ],
            correctAnswer: "The cost paid to miners for executing operations",
        },
        {
            question: `What is a blockchain fork and why does it occur?`,
            options: [
                "A way to upgrade network nodes",
                "A split in the blockchain network due to conflicting rule changes or disagreements",
                "A digital signature",
                "An extension of block size"
            ],
            correctAnswer: "A split in the blockchain network due to conflicting rule changes or disagreements",
        },
        {
            question: `What major problem does the 'Byzantine Generals Problem' solve in blockchain?`,
            options: [
                "Encrypting messages between users",
                "Ensuring agreement among distributed systems despite malicious actors",
                "Improving smart contract gas efficiency",
                "Reducing block validation time"
            ],
            correctAnswer: "Ensuring agreement among distributed systems despite malicious actors",
        },
        {
            question: `What is the role of Merkle Trees in blockchain?`,
            options: [
                "To increase mining speed",
                "To store addresses efficiently",
                "To verify the integrity of transactions in a block efficiently",
                "To store hashes of usernames"
            ],
            correctAnswer: "To verify the integrity of transactions in a block efficiently",
        }
    ],

    'game-dev': [
        // Easy
        {
            question: "Which of the following is a popular game engine?",
            options: ["Flask", "Figma", "Unity", "TensorFlow"],
            correctAnswer: "Unity",
        },
        {
            question: "Which language is primarily used in Unity game development?",
            options: ["Java", "Python", "C#", "Ruby"],
            correctAnswer: "C#",
        },
        {
            question: "Which platform is known for 2D game development with visual scripting?",
            options: ["Unreal Engine", "Scratch", "Spring Boot", "Django"],
            correctAnswer: "Scratch",
        },

        // Medium
        {
            question: "What is the role of a physics engine in game development?",
            options: [
                "To draw UI components",
                "To create database schemas",
                "To simulate real-world physical interactions like gravity and collisions",
                "To export games to mobile"
            ],
            correctAnswer: "To simulate real-world physical interactions like gravity and collisions",
        },
        {
            question: "In game development, what does FPS stand for?",
            options: ["Fast Processing Service", "Frames Per Second", "File Permission System", "First Programming Stack"],
            correctAnswer: "Frames Per Second",
        },
        {
            question: "What is the main difference between 2D and 3D game engines?",
            options: [
                "3D engines require C++ only",
                "2D engines use HTML and CSS",
                "3D engines support depth (z-axis) and 2D engines don’t",
                "2D engines are slower"
            ],
            correctAnswer: "3D engines support depth (z-axis) and 2D engines don’t",
        },

        // Hard
        {
            question: `A multiplayer game frequently lags when more than 20 players are online simultaneously. 
Which system design strategy could help resolve this?`,
            options: [
                "Increase animation speed",
                "Offload real-time logic to a dedicated game server with WebSockets or UDP",
                "Switch to 2D graphics",
                "Use SQL for real-time events"
            ],
            correctAnswer: "Offload real-time logic to a dedicated game server with WebSockets or UDP",
        },
        {
            question: `You are designing an inventory system for an RPG. Which data structure is best suited to store items with quick access and support for adding/removing items dynamically?`,
            options: ["Array", "Linked List", "Hash Map", "Stack"],
            correctAnswer: "Hash Map",
        },
        {
            question: `What is level of detail (LOD) in game graphics optimization?`,
            options: [
                "Color palette selection",
                "A method for reducing detail of distant objects to improve performance",
                "Number of players in a scene",
                "Reducing audio quality"
            ],
            correctAnswer: "A method for reducing detail of distant objects to improve performance",
        }
    ],
    'general': [
        {
            question: "What does 'API' stand for?",
            options: ["Application Programming Interface", "Automated Program Interaction", "Algorithmic Performance Index"],
            correctAnswer: "Application Programming Interface",
        },
        {
            question: "Which of these is NOT a programming paradigm?",
            options: ["Object-Oriented", "Functional", "Procedural", "Algorithmic"],
            correctAnswer: "Algorithmic",
        },
        {
            question: "What does `git clone` do?",
            options: ["Creates a new branch", "Deletes a repository", "Creates a local copy of a remote repository", "Merges two branches"],
            correctAnswer: "Creates a local copy of a remote repository",
        },
        {
            question: "In the context of databases, what does 'SQL' stand for?",
            options: ["Structured Query Language", "Simple Question Language", "System Query Logic"],
            correctAnswer: "Structured Query Language",
        },

        {
            question: "Which data structure operates on a 'First-In, First-Out' (FIFO) basis?",
            options: ["Stack", "Queue", "Tree", "Array"],
            correctAnswer: "Queue",
        },
        {
            question: "What is the purpose of a 'compiler'?",
            options: ["To run the code line by line", "To convert source code into machine code", "To find logical errors in the code", "To format the source code"],
            correctAnswer: "To convert source code into machine code",
        },
        {
            question: "What is 'Polymorphism' in OOP?",
            options: ["The ability of an object to take on many forms", "The process of hiding implementation details", "The ability to inherit properties from another class"],
            correctAnswer: "The ability of an object to take on many forms",
        },
        {
            question: "Which HTTP status code means 'Not Found'?",
            options: ["200", "500", "404", "301"],
            correctAnswer: "404",
        },
        {
            question: "What does HTML stand for?",
            options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Machine Language", "Home Tool Markup Language"],
            correctAnswer: "HyperText Markup Language",
        },
        {
            question: "Which of these is a version control system?",
            options: ["Docker", "React", "Git", "AWS"],
            correctAnswer: "Git",
        },
        {
            question: "What does 'HTTP' stand for?",
            options: ["Hypertext Transfer Protocol", "High Task Tracking Protocol", "Hybrid Transfer Tech Protocol", "Host Transfer Text Page"],
            correctAnswer: "Hypertext Transfer Protocol",
        },

        // Medium
        {
            question: "What is the function of DNS in internet communication?",
            options: [
                "Encrypts traffic",
                "Provides server uptime stats",
                "Translates domain names to IP addresses",
                "Compresses data for faster transfer"
            ],
            correctAnswer: "Translates domain names to IP addresses",
        },
        {
            question: "Which of these is a NoSQL database?",
            options: ["PostgreSQL", "MongoDB", "SQLite", "OracleDB"],
            correctAnswer: "MongoDB",
        },
        {
            question: "What does the `npm` command do in JavaScript projects?",
            options: [
                "Compiles code",
                "Manages dependencies",
                "Starts a web server",
                "Minifies JavaScript files"
            ],
            correctAnswer: "Manages dependencies",
        },

        // Hard
        {
            question: `What is the primary reason for using a virtual machine (VM) in development or deployment?`,
            options: [
                "To speed up execution",
                "To isolate environments and simulate different OS setups",
                "To reduce typing code",
                "To write secure code only"
            ],
            correctAnswer: "To isolate environments and simulate different OS setups",
        },
        {
            question: `Why is time complexity important when designing algorithms?`,
            options: [
                "To avoid using any loops",
                "To ensure the algorithm completes within acceptable time limits for large inputs",
                "To reduce internet data usage",
                "To avoid bugs"
            ],
            correctAnswer: "To ensure the algorithm completes within acceptable time limits for large inputs",
        },
        {
            question: `Which of the following best describes the role of a load balancer in a web architecture?`,
            options: [
                "Handles UI rendering",
                "Balances power supply",
                "Distributes incoming network traffic across multiple servers",
                "Compresses backend logs"
            ],
            correctAnswer: "Distributes incoming network traffic across multiple servers",
        },
        {
            question: `In software design, what is the main goal of the SOLID principles?`,
            options: [
                "To make software harder to understand",
                "To optimize for GPU rendering",
                "To improve code maintainability, scalability, and flexibility",
                "To enable multithreading"
            ],
            correctAnswer: "To improve code maintainability, scalability, and flexibility",
        },
        {
            question: "What does `DRY` stand for in software development?",
            options: ["Don't Repeat Yourself", "Do Repeat Yourself", "Don't Run Yet"],
            correctAnswer: "Don't Repeat Yourself",
        },
    ]
}; 