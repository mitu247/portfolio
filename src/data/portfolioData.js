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
	content: `I am a Machine Learning Engineer at Therap BD Ltd and a Computer Science and Engineering graduate from Bangladesh University of Engineering and Technology. My work spans natural language processing, computer vision, and efficient machine learning systems. I am currently studying how external state support and history management affect the reliability of small language models during long-horizon graph reasoning.

I try to be honest in how I learn and in how I evaluate my own work. That means being clear about what I understand, recognizing what I still need to learn, and letting evidence guide my conclusions. I am interested in research that is careful, reproducible, and useful beyond a benchmark.`
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
		technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
		link: "https://github.com/EduByte-BUET/EduByte-CSE-408-Software-Engineering-Sessional",
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
		thumbnail: "/orthophoto_r83.png",
		year: "2023 – 2025"
	},
	{
		id: 2,
		title: "Lung Nodule Segmentation for Cancer Detection",
		authors: "Course Project",
		venue: "Machine Learning Course, BUET",
		abstract: "Fine-tuned SAM2 and SwinUNETR for lung nodule segmentation and a pre-trained Faster R-CNN for nodule detection on the LIDC-IDRI dataset. Utilized point-prompt and sliding-window pipelines with hybrid loss functions. Achieved Dice score of 0.93, Precision of 0.96, and Recall of 0.89.",
		link: "https://github.com/mitu247/ML-Project-472",
		thumbnail: "/LungNoduleSegmentation.png",
		year: "2025"
	},
	{
		id: 3,
		title: "External State Support and History Management in Small Language Models for Long-Horizon Graph Traversal",
		authors: "Ongoing Research Project",
		venue: "Research Collaboration, BUET",
		abstract: "Investigating state tracking and reasoning reliability in small language models through multi-turn breadth-first and depth-first graph traversal. The study compares external state-support strategies and conversation-history policies across Qwen and Gemma models. Built a reproducible vLLM and Slurm evaluation pipeline with fixed data splits, resumable runs, trajectory logging, and measures of task completion, traversal correctness, invalid actions, and recovery after errors.",
		link: "#",
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
	}
];

export const cv = {
	downloadLink: "/CV.pdf"
};
