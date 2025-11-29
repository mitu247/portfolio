// Dummy data for portfolio - Replace with your actual information

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
	content: `I am a Machine Learning Engineer at Therap BD LTD with a strong academic background in Computer Science and Engineering. I completed my Bachelors from Bangladesh University of Engineering and technology with a CGPA of 3.80. Prior to that, I achieved a perfect GPA of 5.00 out of 5.00 in both my Secondary School Certificate (SSC) and Higher Secondary Certificate (HSC) examinations, ranking at the top among the girls of Chittagong Board in HSC. I am passionate about machine learning and its applications, constantly working to expand my knowledge and skills in this exciting field.`
};

export const projects = [
	{
		id: 1,
		title: "EduByte: AI-Enhanced E-Learning Platform",
		description: "Full-stack e-learning platform with personalized course recommendations, GPT-based chatbot, and AI-powered examination system.",
		technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
		link: "#",
		demo: null
	},
	{
		id: 2,
		title: "Football Player Database Management System",
		description: "Java-based system to manage football player records with multi-attribute search and data persistence.",
		technologies: ["Java", "SQL"],
		link: "#",
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
		link: "#",
		year: "2023 – 2025"
	},
	{
		id: 2,
		title: "Lung Nodule Segmentation for Cancer Detection",
		authors: "Course Project",
		venue: "Machine Learning Course, BUET",
		abstract: "Fine-tuned SAM2 and SwinUNETR for lung nodule segmentation and a pre-trained Faster R-CNN for nodule detection on the LIDC-IDRI dataset. Utilized point-prompt and sliding-window pipelines with hybrid loss functions. Achieved Dice score of 0.93, Precision of 0.96, and Recall of 0.89.",
		link: "#",
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
		icon: "fas fa-eye"
	},
	{
		id: 2,
		title: "Machine Learning",
		description: "Deep learning, NLP, and predictive modeling.",
		icon: "fas fa-brain"
	},
	{
		id: 3,
		title: "Reinforcement Learning",
		description: "Decision making and control in complex environments.",
		icon: "fas fa-robot"
	},
	{
		id: 4,
		title: "Computer Graphics",
		description: "Rendering, simulation, and visual computing.",
		icon: "fas fa-image"
	},
	{
		id: 5,
		title: "Data Science",
		description: "Extracting insights from data through statistical analysis and visualization.",
		icon: "fas fa-chart-bar"
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
			description: ""
		}
	],
	skills: [
		"Python", "PyTorch", "TensorFlow", "NVIDIA Jetson", "Git", "Docker"
	],
	downloadLink: "/CV.pdf",
	about: "I am currently working as a machine learning engineer and open to collaborations on interesting topics that include machine learning / applications or systems in general."
};
