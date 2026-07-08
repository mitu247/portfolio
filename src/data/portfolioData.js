// Portfolio data

export const personalInfo = {
	name: "Sushmita Paul",
	tagline: "Machine Learning Engineer | Therap BD LTD",
	email: "sushmitap247@gmail.com",
	location: "Dhaka, Bangladesh",
	linkedin: "https://www.linkedin.com/in/sushmita-paul-3b19741a4/",
	github: "https://github.com/mitu247",
	profileImage: "/profile.jpeg"
};

export const bio = {
	content: `I am a Machine Learning Engineer at Therap BD LTD with a strong academic background in Computer Science and Engineering. I completed my Bachelors from Bangladesh University of Engineering and Technology with a CGPA of 3.80. Prior to that, I achieved a perfect GPA of 5.00 out of 5.00 in both my Secondary School Certificate (SSC) and Higher Secondary Certificate (HSC) examinations, ranking at the top among the girls of Chittagong Board in HSC. I am passionate about machine learning and its applications, constantly working to expand my knowledge and skills in this exciting field.`
};

export const professionalProjects = [
	{
		id: 1,
		title: "Graph Reasoning on NLGraph",
		description: "Evaluated LLM reasoning capabilities on graph-theory problems from the NLGraph benchmark. Built a multi-round code-verification harness with sandboxed Python execution and hallucination guards using DeepSeek and Qwen models.",
		technologies: ["Python", "vLLM", "DeepSeek-R1", "Qwen3.5", "NetworkX"],
		highlights: ["Chain-of-Thought Prompting", "Code-Augmented Verification", "Sandboxed Execution"],
		link: "https://github.com/mitu247/Graph_Reasoning_NLGraph",
		demo: null
	},
	{
		id: 2,
		title: "Multi-Label Academic Paper Classification",
		description: "End-to-end ML pipeline for classifying paper abstracts into 6 scientific categories. Includes QLoRA fine-tuning of Llama & Mistral, ModernBERT with W&B Bayesian sweeps, and synthetic data augmentation using Gemma.",
		technologies: ["PyTorch", "Transformers", "QLoRA", "W&B", "ModernBERT", "Gemma"],
		highlights: ["Hyperparameter Sweeping", "Synthetic Data Generation", "Custom StoppingCriteria"],
		link: "https://github.com/mitu247/MultiLabel-Paper-Classification",
		demo: null
	},
	{
		id: 3,
		title: "RAG vs Fine-Tuning",
		description: "Comparative analysis of Retrieval-Augmented Generation vs Supervised Fine-Tuning for succinct Q&A using Gemma-3-27b-it. Fine-tuned model achieved 2x improvement over RAG on all ROUGE metrics.",
		technologies: ["Gemma-3", "FAISS", "QLoRA", "SFTTrainer", "DeepEval"],
		highlights: ["ROUGE-1: 0.607 (SFT) vs 0.301 (RAG)", "Vector Search Pipeline", "Style Alignment Analysis"],
		link: "https://github.com/mitu247/RAG-vs-FineTuning",
		demo: null
	}
];

export const projects = [
	{
		id: 1,
		title: "EduByte: AI-Enhanced E-Learning Platform",
		description: "Full-stack e-learning platform with personalized course recommendations, GPT-based chatbot, and AI-powered examination system.",
		technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
		link: "https://github.com/EduByte-BUET/EduByte-CSE-408-Software-Engineering-Sessional",
		demo: null
	},
	{
		id: 2,
		title: "Football Player Database Management System",
		description: "Java-based system to manage football player records with multi-attribute search and data persistence.",
		technologies: ["Java", "SQL"],
		link: "https://github.com/mitu247/Java-Term-Project-108",
		demo: null
	},
	{
		id: 3,
		title: "Computer Security",
		description: "A comprehensive study and documentation of cryptographic protocols and network security vulnerabilities. Analyzed various attack vectors and proposed mitigation strategies using standard security models.",
		technologies: ["TeX"],
		link: "https://github.com/mitu247/Computer-Security-406",
		demo: null
	},
	{
		id: 4,
		title: "Operating Systems",
		description: "Implemented core operating system components including process scheduling algorithms and memory management units. Simulating concurrency control mechanisms and inter-process communication using C++.",
		technologies: ["C++"],
		link: "https://github.com/mitu247/Operating-Systems-314",
		demo: null
	},
	{
		id: 5,
		title: "Computer Networks",
		description: "Developed valid network protocols and simulation environments to analyze data packet transmission. Implemented socket programming interfaces to demonstrate TCP/UDP communication models.",
		technologies: ["C++"],
		link: "https://github.com/mitu247/Computer-Network-322",
		demo: null
	},
	{
		id: 6,
		title: "Computer Graphics",
		description: "Built 2D/3D rendering engines demonstrating geometric transformations, shading, and lighting effects. Implemented algorithms for ray tracing and rasterization to visualize complex scenes.",
		technologies: ["C++"],
		link: "https://github.com/mitu247/Computer-Graphics-410",
		demo: null
	},
	{
		id: 7,
		title: "Compiler Design",
		description: "Designed a lexical analyzer and parser for a custom programming language subset using Yacc and Lex. Implemented symbol table management and intermediate code generation phases.",
		technologies: ["Yacc"],
		link: "https://github.com/mitu247/Compiler-310",
		demo: null
	},
	{
		id: 8,
		title: "Artificial Intelligence",
		description: "Implemented classic AI search algorithms including A* and minimax for game-playing agents. Developed constraint satisfaction problem solvers and heuristic-based optimization logic.",
		technologies: ["Java"],
		link: "https://github.com/mitu247/Artificial-Intelligence-318",
		demo: null
	}
];

export const research = [
	{
		id: 1,
		title: "Automatic Dengue Breeding Site Identification Using Drone Imagery",
		authors: "Undergraduate Thesis Research",
		venue: "Bangladesh University of Engineering and Technology",
		abstract: "Developed automated computer vision system for identifying dengue breeding sites from UAV-captured aerial orthophotos. Evaluated state-of-the-art detection and segmentation models (YOLOv8, YOLOv11, SAM, SegGPT) on custom-annotated dataset. Designed geospatial data analysis pipeline for precise breeding site localization using GPS coordinates, achieving 83.6% balanced accuracy.",
		link: "https://github.com/excellencior/Dengue-Breeding-Site-Identification",
		year: "2023 – 2025"
	},
	{
		id: 2,
		title: "Lung Nodule Segmentation for Cancer Detection",
		authors: "Course Project",
		venue: "Machine Learning Course, BUET",
		abstract: "Fine-tuned SAM2 and SwinUNETR for lung nodule segmentation and a pre-trained Faster R-CNN for nodule detection on the LIDC-IDRI dataset. Utilized point-prompt and sliding-window pipelines with hybrid loss functions. Achieved Dice score of 0.93, Precision of 0.96, and Recall of 0.89.",
		link: "https://github.com/mitu247/ML-Project-472",
		year: "2025"
	},
	{
		id: 3,
		title: "Streaming Machine Learning for Real-time Applications",
		authors: "Ongoing Research Project",
		venue: "Collaboration with Professor, BUET",
		abstract: "Investigating streaming machine learning techniques for real-time model training and inference on continuously flowing data streams. Exploring trade-offs between model performance, latency, and computational efficiency in stream processing environments.",
		link: "#",
		year: "2025 – Present"
	}
];

export const interests = [
	{
		id: 1,
		title: "Reliable Computer Vision Systems",
		description: "Building robust and trustworthy vision systems for real-world applications.",
		icon: "Eye"
	},
	{
		id: 2,
		title: "Machine Learning",
		description: "Deep learning, NLP, and predictive modeling.",
		icon: "Brain"
	},
	{
		id: 3,
		title: "Reinforcement Learning",
		description: "Decision making and control in complex environments.",
		icon: "Bot"
	},
	{
		id: 4,
		title: "Computer Graphics",
		description: "Rendering, simulation, and visual computing.",
		icon: "Image"
	},
	{
		id: 5,
		title: "Data Science",
		description: "Extracting insights from data through statistical analysis and visualization.",
		icon: "BarChart"
	}
];

export const updates = [
	{
		id: 1,
		date: "July 16, 2025",
		text: "Paper on dengue breeding site identification selected for digital poster presentation at BEAR Summit, BD (2025)"
	},
	{
		id: 2,
		date: "April 6, 2025 - Present",
		text: "Joined Therap BD LTD as a Machine Learning Engineer"
	},
	{
		id: 3,
		date: "March 25, 2025",
		text: "Graduated from BUET (CSE)"
	},
	{
		id: 4,
		date: "March 18, 2025",
		text: "Thesis defended"
	},
	{
		id: 5,
		date: "October 2020",
		text: "Back to BUET campus (followed by another lockdown till February 2021)"
	},
	{
		id: 6,
		date: "March 2020",
		text: "Corona started"
	},
	{
		id: 7,
		date: "February 2020",
		text: "Got Admitted into BUET"
	},
	{
		id: 8,
		date: "April 2019",
		text: "Higher Secondary Certificate"
	},
	{
		id: 9,
		date: "June 2017",
		text: "Secondary School Certificate"
	},
	{
		id: 10,
		date: "December 2011",
		text: "Primary School Certificate"
	}
];

export const cv = {
	education: [
		{
			degree: "B.Sc. in Computer Science and Engineering",
			institution: "Bangladesh University of Engineering and Technology",
			year: "2020 - 2025",
			description: "Graduated in March, 2025 with CGPA 3.80"
		},
		{
			degree: "Higher Secondary Certificate (HSC)",
			institution: "Chittagong College",
			year: "2017 - 2019",
			description: "GPA 5.00 out of 5.00 - Ranked top among the girls of Chittagong Board"
		},
		{
			degree: "Secondary School Certificate (SSC)",
			institution: "Cox's Bazar Govt. Girls High School",
			year: "2012 - 2017",
			description: "GPA 5.00 out of 5.00"
		}
	],
	experience: [
		{
			title: "Machine Learning Engineer",
			company: "Therap BD LTD",
			year: "Apr 2025 - Present",
			description: "Working on LLM evaluation, fine-tuning, and deployment pipelines. Engineered and deployed real-time person masking models for video streams on NVIDIA Jetson, optimizing edge inference using TensorRT (FP16/INT8 quantization). Benchmarked state-of-the-art vision-language models for document and chart intelligence."
		}
	],
	skills: [
		"Python", "PyTorch", "Transformers", "vLLM", "QLoRA", "FAISS", "TensorFlow", "NVIDIA Jetson", "Weights & Biases", "Git", "Docker"
	],
	downloadLink: "/CV.pdf",
	about: "I am currently working as a machine learning engineer and open to collaborations on interesting topics that include machine learning / applications or systems in general."
};
