export const projects = [
	{
		projectName: 'eMOTE',
		projectDescription: `eMOTE is a self-help progressive web application for binge eating and emotional regulation developed as part of a PhD project at the Faculty of Psychology and Education Sciences of the University of Porto (FPCEUP). Built using React and ASP.NET Core for the backend.`,
		projectLinks: [{ text: 'See the code', link: 'https://github.com/Poodlers/eMote' }],
		projectImage: 'emote_logo.png',
		projectTags: ['React', 'ASP.NET Core', 'Material UI', 'Chart.js', 'Full Stack']
	},
	{
		projectName: 'StoryWeaver',
		projectDescription: `A browser-based augmented reality storytelling platform developed as my MSc dissertation at FEUP. It includes a React-based visual editor for creating branching museum narratives, a player app for consuming location-aware AR experiences and a Node.js/MongoDB backend for persistence and media management.`,
		projectLinks: [
			{ text: 'See the code', link: 'https://github.com/Poodlers/StoryWeaver---MasterThesis' },
			{ text: 'Open the Editor', link: 'https://storyweaver.netlify.app/' },
			{ text: 'Read the thesis', link: 'https://repositorio-aberto.up.pt/handle/10216/161007' }
		],
		projectImage: 'icon_tese.png',
		projectTags: ['React', 'Node.js', 'MongoDB', 'AR.js', 'Three.js', 'ReactFlow']
	},
	{
		projectName: 'PraxeMaster',
		projectDescription: `A small Unity game developed for the Game Development course at FEUP. A mysterious virus has infected the students of FEUP, turning them into zombies. Battle your way through the hordes and use your giant spoon and coffee mug to defeat them!`,
		projectLinks: [
			{ text: 'Play the game', link: 'https://poodlers.itch.io/praxemaster' },
			{ text: 'See the code', link: 'https://github.com/Poodlers/DDJD-praxemaster' }
		],
		projectImage: 'praxemaster_logo.png',
		projectTags: ['Unity', 'C#', 'Game Development']
	},
	{
		projectName: 'Miasma',
		projectDescription: `An electrifying cyberpunk 3D FPS game developed using Unity for the Game Development course at FEUP.`,
		projectLinks: [
			{ text: 'Play the game', link: 'https://jfbaltazar.itch.io/miasma' },
			{ text: 'See the code', link: 'https://github.com/JFernandes2612/Miasma' }
		],
		projectImage: 'miasma_logo.png',
		projectTags: ['Unity', 'C#', '3D FPS', 'Game Development']
	},
	{
		projectName: 'Gelatinous Classification',
		projectDescription: `Development of a convolutional neural network using PyTorch for gelatinous zooplankton classification, automating the labelling of species on the GelAvista mobile app. Developed as a BSc capstone project.`,
		projectLinks: [],
		projectImage: 'gelavista_logo.png',
		projectTags: ['Python', 'PyTorch', 'CNN', 'Computer Vision', 'Machine Learning']
	},
	{
		projectName: 'Personal Website',
		projectDescription:
			'A lightweight personal website and portfolio used to showcase my projects, links and personal information. Built using SvelteKit.',
		projectLinks: [{ text: 'See the code', link: 'https://github.com/Poodlers/personal-website' }],
		projectImage: 'portfolio_logo.jpg',
		projectTags: ['SvelteKit', 'JavaScript', 'Portfolio']
	},
	{
		projectName: 'VOTA',
		projectDescription: `A civic-tech mobile application concept inspired by swipe-based interfaces, allowing users to vote on law proposals admitted to the Portuguese Parliament. The app compares user voting patterns with political parties and includes a data pipeline for ingesting proposal data from public parliamentary APIs. Built with Flutter and ASP.NET Core.`,
		projectLinks: [
			{
				text: 'Design Document',
				link: 'https://www.figma.com/design/AGvXhXKosvqcEoubXJL4mU/ParlamentoMockUps?m=auto&t=1B8EiKjTqDe284lY-1'
			},
			{
				text: 'See the code',
				link: 'https://github.com/parlamento-org/parlamento-app'
			}
		],
		projectImage: 'vota_logo.png',
		projectTags: ['Flutter', 'ASP.NET Core', 'Civic Tech', 'APIs', 'Data Pipeline']
	},
	{
		projectName: 'Gabi & Miguel Album',
		projectDescription: `A private social-media-style web application built with SvelteKit, MongoDB Atlas and Cloudinary. It allows authenticated users to create posts with images and captions in a shared private feed. The project also includes an animated anniversary “Wrapped”-style experience built with React, React Stories and GSAP.`,
		projectLinks: [
			{ text: 'See the code', link: 'https://github.com/Poodlers/gabi-miguel-album' },
			{ text: 'Open the Album', link: 'https://gabi-miguel-album.vercel.app/' }
		],
		projectImage: 'https://img1.picmix.com/output/stamp/normal/4/6/5/4/2444564_f86a6.gif',
		projectTags: ['SvelteKit', 'MongoDB', 'Cloudinary', 'React', 'GSAP']
	},
	{
		projectName: 'A* Pathfinding Visualizer',
		projectDescription: `A small Python/PyGame visualization of the A* search algorithm developed during my first year at university. It allows users to create a grid, define start/end points, place obstacles and visualize the computed shortest path.`,
		projectLinks: [{ text: 'See the code', link: 'https://github.com/Poodlers/a-estrela' }],
		projectImage: 'https://media.geeksforgeeks.org/wp-content/uploads/a_-search-algorithm-1.png',
		projectTags: ['Python', 'PyGame', 'Algorithms', 'Pathfinding']
	},
	{
		projectName: 'SigarraPay',
		projectDescription: `A Flutter mobile application designed to simplify access to academic and campus information, including timetables, courses, exams and nearby bus arrivals. The project emphasized software engineering practices, agile documentation and BDD-style testing with Flutter Gherkin.`,
		projectLinks: [{ text: 'See the code', link: 'https://github.com/Poodlers/ESOF-2021-2022' }],
		projectImage:
			'https://play-lh.googleusercontent.com/tDdItPwdEDXa04vCPdTA5Sc7mGlg3toYn3jdAFY4DgSeqhVUyE5IDEf5ojQ8-QwlbW8=w240-h480-rw',
		projectTags: ['Flutter', 'Dart', 'BDD Testing', 'Flutter Gherkin', 'Agile']
	}
];
