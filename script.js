// --- 1. Dictionnaire des textes statiques (HTML) ---
const staticTranslations = {
	fr: {
		header_quote: "\"Le code est ma plume, l'écran est ma page.\"",
		spine_about: "NAISSANCE D'UN DEV",
		spine_exp: "CHAPITRES PRO",
		spine_projects: "ARCHIVES DU CODE",
		spine_skills: "POUVOIRS & TECH",
		spine_social: "RÉSEAU SOCIAL",
		footer_instruction: "* Cliquez sur les tomes de l'étagère du haut pour lire leur contenu.",
		modal_back: "← Retour à l'étagère",
		modal_page: "Page"
	},
	en: {
		header_quote: "\"Code is my ink, the screen is my page.\"",
		spine_about: "BIRTH OF A DEV",
		spine_exp: "PRO CHAPTERS",
		spine_projects: "CODE ARCHIVES",
		spine_skills: "POWERS & TECH",
		spine_social: "SOCIAL NETWORK",
		footer_instruction: "* Click on the top shelf volumes to read their content.",
		modal_back: "← Back to shelf",
		modal_page: "Page"
	}
};

// --- 2. Données de la modale (Dynamique) ---
const libraryData = {
	'about': {
		icon: "fa-chess-rook",
		color: "text-orange-600",
		pageNum: "01",
		fr: {
			title: "L'Ascension d'un Architecte",
			chapter: "CHAPITRE 01",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">L'Origine de l'Histoire</h1>
				<p class="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
					Je m'appelle Ethan Lepareur, et mon aventure ne fait que commencer. Forgé par le code, je vise désormais la structure qui le soutient.
				</p>
				<p class="mb-6">
					Actuellement en fin de Bachelor CDA au <strong>CESI</strong> et aguerri par une alternance chez <strong>Capgemini</strong>, je dispose d'un socle technique solide. Mon style de combat ? Une maîtrise précise de <strong>Java et Angular</strong>, alliant rigueur backend et fluidité frontend.
				</p>
				<div class="bg-orange-50 p-6 border-l-4 border-orange-500 my-8 italic">
					"Un bon code fonctionne. Une bonne architecture dure. Je veux construire des systèmes qui traversent le temps."
				</div>
				<h3 class="text-2xl font-bold mt-8 mb-4 font-manga">Ma Quête Actuelle</h3>
				<ul class="list-disc list-inside space-y-2 marker:text-orange-500">
					<li>Évoluer de la production de code vers la <strong>conception logicielle</strong>.</li>
					<li>Intégrer le Mastère Manager en Architecture.</li>
					<li>Rejoindre une nouvelle guilde (entreprise) pour des défis techniques ambitieux.</li>
				</ul>
			`
		},
		en: {
			title: "Rise of an Architect",
			chapter: "CHAPTER 01",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">Origin Story</h1>
				<p class="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
					I am Ethan Lepareur, and my adventure is just beginning. Forged by code, I now aim for the structure that supports it.
				</p>
				<p class="mb-6">
					Currently finishing my Bachelor's at <strong>CESI</strong> and hardened by an apprenticeship at <strong>Capgemini</strong>, I have a solid technical foundation. My fighting style? Precise mastery of <strong>Java and Angular</strong>, combining backend rigor with frontend fluidity.
				</p>
				<div class="bg-orange-50 p-6 border-l-4 border-orange-500 my-8 italic">
					"Good code works. Good architecture lasts. I want to build systems that withstand time."
				</div>
				<h3 class="text-2xl font-bold mt-8 mb-4 font-manga">Current Quest</h3>
				<ul class="list-disc list-inside space-y-2 marker:text-orange-500">
					<li>Evolving from code production to <strong>software design</strong>.</li>
					<li>Joining the Master's in Software Architecture.</li>
					<li>Joining a new guild (company) for ambitious technical challenges.</li>
				</ul>
			`
		}
	},
	'experience': {
		icon: "fa-briefcase",
		color: "text-yellow-700",
		pageNum: "05",
		fr: {
			title: "Chapitres Pro",
			chapter: "CHAPITRE 02",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">L'Arc de l'Expérience</h1>
				<div class="mb-8">
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
						<h3 class="text-2xl font-bold">Développeur Fullstack @ Capgemini Engineering</h3>
						<span class="bg-black text-white px-2 py-1 text-xs font-bold mt-1 md:mt-0 w-fit">OCT 2025 - PRÉSENT</span>
					</div>
					<p class="text-gray-600 mb-2 italic">L'Initiation à la Rigueur Industrielle (Secteur Ferroviaire)</p>
					<p class="mb-2">Intégré à une équipe agile pour un géant des transports, je participe à la modernisation d'applications critiques.</p>
					<ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
						<li><strong>Développement Fullstack :</strong> Conception de fonctionnalités Java (Back) et Angular (Front).</li>
						<li><strong>Analyse Technique :</strong> Traduction des User Stories en solutions techniques concrètes.</li>
						<li><strong>Qualité & Maintenance :</strong> Résolution d'incidents et tests pour garantir la stabilité du service.</li>
					</ul>
				</div>
				<div class="w-full h-px bg-gray-300 my-6"></div>
				<div class="mb-8">
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
						<h3 class="text-2xl font-bold">Stagiaire Réseaux @ CHPC</h3>
						<span class="bg-gray-200 text-black px-2 py-1 text-xs font-bold mt-1 md:mt-0 w-fit">AVR 2025 - MAI 2025</span>
					</div>
					<p class="text-gray-600 mb-2 italic">Les Fondations de l'Infrastructure (Centre Hospitalier)</p>
					<p class="mb-2">Mission critique de sécurisation des accès réseaux en milieu hospitalier. Une expérience clé pour comprendre "ce qu'il y a sous le code".</p>
					<ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
						<li><strong>Sécurité Réseau :</strong> Automatisation de l'authentification via PacketFence et gestion VLAN.</li>
						<li><strong>Infra & Tests :</strong> Montage d'environnements de tests complets.</li>
					</ul>
				</div>
			`
		},
		en: {
			title: "Pro Chapters",
			chapter: "CHAPTER 02",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">The Experience Arc</h1>
				<div class="mb-8">
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
						<h3 class="text-2xl font-bold">Fullstack Developer @ Capgemini Engineering</h3>
						<span class="bg-black text-white px-2 py-1 text-xs font-bold mt-1 md:mt-0 w-fit">OCT 2025 - PRESENT</span>
					</div>
					<p class="text-gray-600 mb-2 italic">Initiation to Industrial Rigor (Railway Sector)</p>
					<p class="mb-2">Integrated into an agile team for a transport giant, contributing to the modernization of critical applications.</p>
					<ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
						<li><strong>Fullstack Dev:</strong> Designing Java (Back) and Angular (Front) features.</li>
						<li><strong>Technical Analysis:</strong> Translating User Stories into concrete technical solutions.</li>
						<li><strong>Quality & Maintenance:</strong> Incident resolution and testing to ensure service stability.</li>
					</ul>
				</div>
				<div class="w-full h-px bg-gray-300 my-6"></div>
				<div class="mb-8">
					<div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
						<h3 class="text-2xl font-bold">Network Intern @ CHPC</h3>
						<span class="bg-gray-200 text-black px-2 py-1 text-xs font-bold mt-1 md:mt-0 w-fit">APR 2025 - MAY 2025</span>
					</div>
					<p class="text-gray-600 mb-2 italic">Infrastructure Foundations (Hospital Center)</p>
					<p class="mb-2">Critical mission to secure network access in a hospital environment. Key experience to understand "what lies beneath the code".</p>
					<ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
						<li><strong>Network Security:</strong> Automating authentication via PacketFence and VLAN management.</li>
						<li><strong>Infra & Tests:</strong> Setting up complete test environments.</li>
					</ul>
				</div>
			`
		}
	},
	'projects': {
		icon: "fa-cubes",
		color: "text-cyan-600",
		pageNum: "12",
		fr: {
			title: "Archives du Code",
			chapter: "CHAPITRE 03",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">La Salle des Trophées</h1>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
						<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
							<i class="fa-solid fa-graduation-cap text-4xl"></i>
						</div>
						<h3 class="font-bold text-xl uppercase font-manga">Système de QCM</h3>
						<p class="text-sm text-gray-600 mt-2">Conception d'une application de gestion de questionnaires pour professeurs.</p>
						<p class="text-sm font-bold mt-2 text-cyan-700">Stack : Java (Back-end).</p>
					</div>
					<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
						<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
							<i class="fa-solid fa-users text-4xl"></i>
						</div>
						<h3 class="font-bold text-xl uppercase font-manga">Refonte Site BDE</h3>
						<p class="text-sm text-gray-600 mt-2">Développement d'un site web complet sur cahier des charges.</p>
						<p class="text-sm font-bold mt-2 text-cyan-700">Stack : HTML, CSS, JS, PHP.</p>
					</div>
				</div>
				<h3 class="text-2xl font-bold mt-10 mb-4 font-manga">Les Entraînements Spéciaux</h3>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li><strong>Exploration Mobile :</strong> Application "Pokédex" (React Native).</li>
					<li><strong>Vitrine Web :</strong> Sites vitrines et intégration web standard.</li>
				</ul>
				<p class="mt-8 text-center italic font-serif">Voir mon GitHub pour les chapitres cachés...</p>
			`
		},
		en: {
			title: "Code Archives",
			chapter: "CHAPTER 03",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">The Trophy Room</h1>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
						<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
							<i class="fa-solid fa-graduation-cap text-4xl"></i>
						</div>
						<h3 class="font-bold text-xl uppercase font-manga">Quiz System</h3>
						<p class="text-sm text-gray-600 mt-2">Design of a questionnaire management app for teachers.</p>
						<p class="text-sm font-bold mt-2 text-cyan-700">Stack: Java (Back-end).</p>
					</div>
					<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
						<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
							<i class="fa-solid fa-users text-4xl"></i>
						</div>
						<h3 class="font-bold text-xl uppercase font-manga">Student Union Website</h3>
						<p class="text-sm text-gray-600 mt-2">Full website development based on specifications.</p>
						<p class="text-sm font-bold mt-2 text-cyan-700">Stack: HTML, CSS, JS, PHP.</p>
					</div>
				</div>
				<h3 class="text-2xl font-bold mt-10 mb-4 font-manga">Special Training</h3>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li><strong>Mobile Exploration:</strong> "Pokédex" App (React Native).</li>
					<li><strong>Web Showcase:</strong> Portfolio sites and standard web integration.</li>
				</ul>
				<p class="mt-8 text-center italic font-serif">Check my GitHub for hidden chapters...</p>
			`
		}
	},
	'skills': {
		icon: "fa-bolt",
		color: "text-red-600",
		pageNum: "24",
		fr: {
			title: "Pouvoirs & Tech",
			chapter: "CHAPITRE 04",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">Arbre de Compétences</h1>
				<h3 class="font-bold uppercase mb-2 mt-6 text-red-600">Techniques Offensives (Front-End)</h3>
				<div class="flex flex-wrap gap-2 mb-4">
					<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold border border-gray-600">Angular (Main)</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">React Native</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">JS / HTML / CSS</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Figma (UI Design)</span>
				</div>
				<h3 class="font-bold uppercase mb-2 mt-6 text-blue-600">Techniques Défensives (Back-End)</h3>
				<div class="flex flex-wrap gap-2 mb-4">
					<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold border border-gray-600">Java (Main)</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">SQL</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">PHP</span>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
					<div class="bg-gray-50 p-4 border-l-4 border-gray-500">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-toolbox mr-2"></i>Inventaire</h4>
						<ul class="text-sm list-disc list-inside text-gray-700">
							<li><strong>IDE :</strong> VSCode</li>
							<li><strong>Versionning :</strong> GitHub</li>
							<li><strong>Langues :</strong> Anglais (Opérationnel), Allemand (Scolaire)</li>
						</ul>
					</div>
					<div class="bg-orange-50 p-4 border-l-4 border-orange-500">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-fire mr-2"></i>Passifs (Soft Skills)</h4>
						<ul class="text-sm list-disc list-inside text-gray-700">
							<li><strong>Persévérant :</strong> Ne lâche rien face aux bugs.</li>
							<li><strong>Curieux :</strong> Toujours en veille techno.</li>
							<li><strong>Collaboratif :</strong> Force de proposition en équipe.</li>
						</ul>
					</div>
				</div>
				<div class="mt-6 text-center text-xs text-gray-500 italic">
					"Un code propre est un code qui se lit comme un manga : fluide et impactant."
				</div>
			`
		},
		en: {
			title: "Powers & Tech",
			chapter: "CHAPTER 04",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">Skill Tree</h1>
				<h3 class="font-bold uppercase mb-2 mt-6 text-red-600">Offensive Techniques (Front-End)</h3>
				<div class="flex flex-wrap gap-2 mb-4">
					<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold border border-gray-600">Angular (Main)</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">React Native</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">JS / HTML / CSS</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Figma (UI Design)</span>
				</div>
				<h3 class="font-bold uppercase mb-2 mt-6 text-blue-600">Defensive Techniques (Back-End)</h3>
				<div class="flex flex-wrap gap-2 mb-4">
					<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold border border-gray-600">Java (Main)</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">SQL</span>
					<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">PHP</span>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
					<div class="bg-gray-50 p-4 border-l-4 border-gray-500">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-toolbox mr-2"></i>Inventory</h4>
						<ul class="text-sm list-disc list-inside text-gray-700">
							<li><strong>IDE:</strong> VSCode</li>
							<li><strong>Versioning:</strong> GitHub</li>
							<li><strong>Languages:</strong> English (Operational), German (Academic)</li>
						</ul>
					</div>
					<div class="bg-orange-50 p-4 border-l-4 border-orange-500">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-fire mr-2"></i>Passives (Soft Skills)</h4>
						<ul class="text-sm list-disc list-inside text-gray-700">
							<li><strong>Perseverant:</strong> Never giving up on bugs.</li>
							<li><strong>Curious:</strong> Always on tech watch.</li>
							<li><strong>Collaborative:</strong> Team player and proactive.</li>
						</ul>
					</div>
				</div>
				<div class="mt-6 text-center text-xs text-gray-500 italic">
					"Clean code is code that reads like a manga: fluid and impactful."
				</div>
			`
		}
	}
};

// --- Variables d'état ---
let currentLang = 'fr';
let currentBook = null; // Pour savoir quel livre est ouvert

const modal = document.getElementById('reading-modal');
const modalContent = document.getElementById('modal-content');
const dynamicContent = document.getElementById('dynamic-content');
const modalTitleLeft = document.getElementById('modal-title-left');
const modalChapter = document.getElementById('modal-chapter');
const modalIcon = document.getElementById('modal-icon');
const pageNum = document.getElementById('page-num');

// Toggle Langue
const langToggle = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');

langToggle.addEventListener('change', () => {
	currentLang = langToggle.checked ? 'en' : 'fr';
	langLabel.innerText = currentLang === 'fr' ? 'FR' : 'EN';
	
	updateStaticContent();
	
	// Si un livre est ouvert, on rafraîchit son contenu
	if (!modal.classList.contains('hidden') && currentBook) {
		openBook(currentBook, true); 
	}
});

// Mise à jour des textes statiques (Titres des livres, etc.)
function updateStaticContent() {
	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach(el => {
		const key = el.getAttribute('data-i18n');
		if (staticTranslations[currentLang][key]) {
			el.innerText = staticTranslations[currentLang][key];
		}
	});
}

// Fonction d'ouverture du livre
function openBook(key, isRefresh = false) {
	currentBook = key;
	const data = libraryData[key];
	if(!data) return;

	// On récupère le contenu dans la langue actuelle
	const langData = data[currentLang];

	dynamicContent.innerHTML = langData.content;
	modalTitleLeft.innerText = langData.title;
	modalChapter.innerText = langData.chapter;
	pageNum.innerText = data.pageNum;
	
	// Icone et couleur (communs aux deux langues)
	if (!isRefresh) {
		modalIcon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
		modalIcon.className = `text-8xl mb-6 animate-float ${data.color}`;
	}

	if (!isRefresh) {
		modal.classList.remove('hidden');
		setTimeout(() => {
			modal.classList.remove('opacity-0');
			modalContent.classList.remove('scale-95');
			modalContent.classList.add('scale-100');
		}, 50);
	}
}

function closeBook() {
	modal.classList.add('opacity-0');
	modalContent.classList.remove('scale-100');
	modalContent.classList.add('scale-95');
	
	setTimeout(() => {
		modal.classList.add('hidden');
		currentBook = null;
	}, 500);
}

// Event Listeners
modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeBook();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === "Escape") closeBook();
});

// Initialisation au chargement
updateStaticContent();