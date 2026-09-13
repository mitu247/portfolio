// Portfolio data

export const personalInfo = {
	name: "Sushmita Paul",
	tagline: "Machine Learning Engineer and Researcher",
	email: "sushmitap247@gmail.com",
	location: "Dhaka, Bangladesh",
	linkedin: "https://www.linkedin.com/in/sushmita-paul-3b19741a4/",
	github: "https://github.com/mitu247",
	profileImage: "/profile.jpeg"
};

export const bio = {
	content: `I am a Machine Learning Engineer at Therap BD Ltd and a Computer Science and Engineering graduate from BUET. I work on natural language processing, computer vision, and efficient machine learning systems. Currently, I am researching how small language models handle long graph reasoning tasks with external state support and different conversation-history settings.

I try to be honest with myself about what I understand, what I do not know yet, and where I need to improve. I enjoy learning, asking questions, and working on research that is careful and useful.`
};

export const professionalProjects = [
	{
		id: 1,
		title: "Graph Reasoning on NLGraph",
		description: "Built an evaluation system for testing how reliably language models solve graph-theory problems from the NLGraph benchmark. The pipeline lets DeepSeek and Qwen models generate and revise solutions across multiple rounds, executes their Python code in a sandbox, and checks outputs to expose reasoning errors and hallucinations.",
		technologies: ["Python", "vLLM", "DeepSeek-R1", "Qwen3.5", "NetworkX"],
		highlights: ["Chain-of-Thought Prompting", "Code-Augmented Verification", "Sandboxed Execution"],
		link: "https://github.com/mitu247/Graph_Reasoning_NLGraph",
		demo: null
	},
	{
		id: 2,
		title: "Multi-Label Academic Paper Classification",
		description: "Developed an end-to-end NLP pipeline that assigns paper abstracts to six scientific categories, including overlapping labels. I fine-tuned Llama and Mistral with QLoRA, optimized ModernBERT through W&B Bayesian sweeps, and used Gemma-generated synthetic examples to study how data augmentation affects classification quality.",
		technologies: ["PyTorch", "Transformers", "QLoRA", "W&B", "ModernBERT", "Gemma"],
		highlights: ["Hyperparameter Sweeping", "Synthetic Data Generation", "Custom StoppingCriteria"],
		link: "https://github.com/mitu247/MultiLabel-Paper-Classification",
		demo: null
	},
	{
		id: 3,
		title: "RAG vs Fine-Tuning",
		description: "Designed a controlled comparison of retrieval-augmented generation and supervised fine-tuning for concise question answering with Gemma-3-27B-IT. I built the FAISS retrieval and QLoRA training pipelines, evaluated answer quality with ROUGE and DeepEval, and found that fine-tuning more than doubled every measured ROUGE score in this setting.",
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
		category: "ai",
		description: "Built a full-stack e-learning platform that helps students discover relevant courses, ask questions through a GPT-based assistant, and complete AI-supported examinations. The project demonstrates product-oriented software design, recommendation workflows, and the integration of language-model features into a usable web application.",
		technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
		highlights: ["Full-Stack Development", "Recommendation System", "LLM Integration"],
		link: "https://github.com/EduByte-BUET/EduByte-CSE-408-Software-Engineering-Sessional",
		demo: null
	},
	{
		id: 2,
		title: "Football Player Database Management System",
		category: "systems",
		description: "Created a Java application for maintaining football-player records, querying them by multiple attributes, and preserving data between sessions. The work applies object-oriented design, structured data modeling, search logic, and file-based persistence.",
		technologies: ["Java", "CSS"],
		highlights: ["Object-Oriented Design", "Multi-Attribute Search", "Data Persistence"],
		link: "https://github.com/mitu247/Java-Term-Project-108",
		demo: null
	},
	{
		id: 3,
		title: "Computer Security",
		category: "systems",
		description: "Implemented practical exercises around cryptographic protocols, authentication, and network vulnerabilities. I analyzed how attacks work, reproduced security scenarios in controlled environments, and documented concrete mitigations—building skills in threat modeling and secure-system reasoning.",
		technologies: ["Python", "JavaScript", "TeX"],
		highlights: ["Threat Analysis", "Cryptographic Protocols", "Security Documentation"],
		link: "https://github.com/mitu247/Computer-Security-406",
		demo: null
	},
	{
		id: 4,
		title: "Operating Systems",
		category: "systems",
		description: "Implemented core operating-system mechanisms for process scheduling, virtual memory, synchronization, and inter-process communication. The assignments required low-level debugging and careful reasoning about concurrency, resource ownership, and system behavior.",
		technologies: ["C++", "Shell"],
		highlights: ["Concurrency", "Memory Management", "Systems Debugging"],
		link: "https://github.com/mitu247/Operating-Systems-314",
		demo: null
	},
	{
		id: 5,
		title: "Computer Networks",
		category: "systems",
		description: "Developed socket-based client–server applications and protocol exercises to study reliable TCP communication, UDP messaging, and packet transmission. The project strengthened my understanding of network layers, protocol behavior, and distributed application debugging.",
		technologies: ["C++", "Java", "Shell"],
		highlights: ["Socket Programming", "Protocol Design", "Network Debugging"],
		link: "https://github.com/mitu247/Computer-Network-322",
		demo: null
	},
	{
		id: 6,
		title: "Computer Graphics",
		category: "ai",
		description: "Built a series of rendering programs covering geometric transformations, rasterization, lighting, shading, and ray tracing. The work translates mathematical models into visual results and demonstrates proficiency with graphics algorithms and performance-conscious C++.",
		technologies: ["C++"],
		highlights: ["Ray Tracing", "Rendering Pipeline", "Computational Geometry"],
		link: "https://github.com/mitu247/Computer-Graphics-410",
		demo: null
	},
	{
		id: 7,
		title: "Compiler Design",
		category: "systems",
		description: "Designed the front and middle stages of a compiler for a programming-language subset, including lexical analysis, parsing, semantic checks, symbol-table management, and intermediate code generation. The project connects formal language theory with a working translation pipeline.",
		technologies: ["C++", "C", "Yacc", "Lex", "Assembly"],
		highlights: ["Lexical & Syntax Analysis", "Symbol Tables", "Code Generation"],
		link: "https://github.com/mitu247/Compiler-310",
		demo: null
	},
	{
		id: 8,
		title: "Artificial Intelligence",
		category: "ai",
		description: "Implemented classical AI methods for heuristic search, constraint-satisfaction problems, and adversarial game playing. Solutions included A* and minimax-based agents, with attention to state representation, heuristic design, pruning, and empirical performance.",
		technologies: ["Java", "C++"],
		highlights: ["A* Search", "Constraint Solving", "Minimax & Pruning"],
		link: "https://github.com/mitu247/Artificial-Intelligence-318",
		demo: null
	}
];

export const research = [
	{
		id: 1,
		title: "Detection of Dengue Breeding Sites in Unplanned Urban Landscapes with Deep Learning from Remote Sensing",
		authors: "Sushmita Paul · Collaborator: Apurbo Banik Turjo",
		venue: "Thesis supervised by Prof. Anindya Iqbal, BUET",
		abstract: "Developed a computer-vision system that detects potential dengue mosquito breeding sites in UAV orthophotos and converts model detections into GPS locations for field use. I created and annotated the dataset, compared YOLOv8, YOLOv11, SAM, and SegGPT detection and segmentation approaches, and built the geospatial analysis pipeline. The final system achieved 83.6% balanced accuracy.",
		link: "https://github.com/excellencior/Dengue-Breeding-Site-Identification",
		thumbnail: "/orthophoto_r83.png",
		year: "2023 – 2025"
	},
	{
		id: 2,
		title: "Lung Nodule Segmentation for Cancer Detection",
		authors: "Course Project",
		venue: "Machine Learning Course, BUET",
		abstract: "Built a medical-imaging pipeline that first detects lung nodules in CT scans and then segments their boundaries to support downstream cancer analysis. I fine-tuned Faster R-CNN, SAM2, and SwinUNETR on LIDC-IDRI, implementing point-prompt, sliding-window, and hybrid-loss training workflows. The segmentation system achieved a 0.93 Dice score, 0.96 precision, and 0.89 recall.",
		link: "https://github.com/mitu247/ML-Project-472",
		thumbnail: "/LungNoduleSegmentation.png",
		year: "2025"
	},
	{
		id: 3,
		title: "Diagnosing Small Language Models under Incremental Observations",
		authors: "Ongoing Research Project · Collaborators: Apurbo Banik Turjo, Dr. Ch. Md. Rakin Haider",
		venue: "Research Collaboration, BUET",
		abstract: "Investigating why small language models lose track of multi-step tasks and whether verified external memory can make their reasoning more reliable. Using interactive breadth-first and depth-first graph traversal as controlled test cases, I compare raw prompting, prose and structured state reminders, explicit state verification, and retained versus cleared history across Qwen and Gemma models. I built the reproducible vLLM and Slurm experiment pipeline, including fixed splits, resumable runs, trajectory logging, and metrics for completion, correctness, invalid actions, and recovery after errors.",
		link: "https://github.com/mitu247/Task-Tracker",
		thumbnail: "/research_setup.png",
		year: "2025 – Present"
	}
];

export const interests = [
	{
		id: 1,
		title: "SLM Reasoning and Evaluation"
	},
	{
		id: 2,
		title: "Reliable AI"
	},
	{
		id: 3,
		title: "Efficient ML Systems"
	},
	{
		id: 4,
		title: "Computer Vision"
	}
];

export const updates = [
	{
		id: 1,
		date: "March 2026",
		text: "Submitted the final revision of “Detection of Dengue Breeding Sites in Unplanned Urban Landscapes with Deep Learning from Remote Sensing” to BMC Public Health (Springer Nature)"
	},
	{
		id: 2,
		date: "August 2025",
		text: "Submitted the initial manuscript, “Detection of Dengue Breeding Sites in Unplanned Urban Landscapes with Deep Learning from Remote Sensing,” to BMC Public Health (Springer Nature)"
	},
	{
		id: 3,
		date: "July 16, 2025",
		text: "Paper on dengue breeding site identification selected for digital poster presentation at BEAR Summit, BD (2025)"
	},
	{
		id: 4,
		date: "April 6, 2025 - Present",
		text: "Joined Therap BD LTD as a Machine Learning Engineer"
	},
	{
		id: 5,
		date: "March 25, 2025",
		text: "Graduated from BUET (CSE)"
	},
	{
		id: 6,
		date: "March 18, 2025",
		text: "Thesis defended"
	}
];

export const cv = {
	downloadLink: "/CV.pdf"
};
