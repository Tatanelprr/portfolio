const libraryData = {
	'about': {
		title: "L'Ascension d'un Architecte",
		chapter: "CHAPITRE 01",
		icon: "fa-chess-rook",
		color: "text-orange-600",
		pageNum: "01",
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
	'experience': {
		title: "Chapitres Pro",
		chapter: "CHAPITRE 02",
		icon: "fa-briefcase",
		color: "text-yellow-700",
		pageNum: "05",
		content: `
			<h1 class="text-4xl font-black mb-6 uppercase font-manga">L'Arc de l'Expérience</h1>
			
			<div class="mb-8">
				<div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
					<h3 class="text-2xl font-bold">Développeur Fullstack @ Capgemini Engineering</h3>
					<span class="bg-black text-white px-2 py-1 text-xs font-bold mt-1 md:mt-0 w-fit">OCT 2025 - PRÉSENT</span>
				</div>
				<p class="text-gray-600 mb-2 italic">L'Initiation à la Rigueur Industrielle (Secteur Ferroviaire)</p>
				<p class="mb-2">
					Intégré à une équipe agile pour un géant des transports, je participe à la modernisation d'applications critiques.
				</p>
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
				<p class="mb-2">
					Mission critique de sécurisation des accès réseaux en milieu hospitalier. Une expérience clé pour comprendre "ce qu'il y a sous le code".
				</p>
				<ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
					<li><strong>Sécurité Réseau :</strong> Automatisation de l'authentification via PacketFence et gestion VLAN.</li>
					<li><strong>Infra & Tests :</strong> Montage d'environnements de tests complets (Switchs/Serveurs).</li>
					<li><strong>Documentation :</strong> Rédaction de procédures techniques pour la pérennité du système.</li>
				</ul>
			</div>
		`
	},
	'projects': {
		title: "Archives du Code",
		chapter: "CHAPITRE 03",
		icon: "fa-cubes",
		color: "text-cyan-600",
		pageNum: "12",
		content: `
			<h1 class="text-4xl font-black mb-6 uppercase font-manga">La Salle des Trophées</h1>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				
				<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
					<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
						<i class="fa-solid fa-graduation-cap text-4xl"></i>
					</div>
					<h3 class="font-bold text-xl uppercase font-manga">Système de QCM (Projet Académique)</h3>
					<p class="text-sm text-gray-600 mt-2">
						Conception d'une application de gestion de questionnaires pour professeurs.
					</p>
					<p class="text-sm font-bold mt-2 text-cyan-700">
						Stack : Java (Back-end & Logique métier).
					</p>
					<ul class="list-disc list-inside text-xs mt-2 space-y-1">
						<li><span class="font-semibold">Objectif Architectural :</span> Modélisation de la base de données (questions, réponses, QCM, utilisateurs).</li>
						<li><span class="font-semibold">Défis :</span> Gestion de l'état (sélection des questions) et persistance des données.</li>
					</ul>
				</div>

				<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
					<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
						<i class="fa-solid fa-users text-4xl"></i>
					</div>
					<h3 class="font-bold text-xl uppercase font-manga">Refonte du Site BDE (Projet Académique)</h3>
					<p class="text-sm text-gray-600 mt-2">
						Développement d'un site web complet à partir d'un cahier des charges et d'une maquette graphique.
					</p>
					<p class="text-sm font-bold mt-2 text-cyan-700">
						Stack : HTML, CSS, JavaScript & PHP (Fullstack).
					</p>
					<ul class="list-disc list-inside text-xs mt-2 space-y-1">
						<li><span class="font-semibold">Gestion de Projet :</span> Réalisation du remaquettage complet et élaboration du cahier des charges.</li>
						<li><span class="font-semibold">Compétences Fullstack :</span> Intégration frontend (JS/CSS) et développement back-end (PHP).</li>
					</ul>
				</div>

			</div>

			<h3 class="text-2xl font-bold mt-10 mb-4 font-manga">Les Entraînements Spéciaux</h3>
			<ul class="list-disc list-inside space-y-2 text-gray-700">
				<li><strong>Exploration Mobile :</strong> Création d'une application mobile "Pokédex" pour maîtriser le <strong>React Native</strong>.</li>
				<li><strong>Vitrine Web :</strong> Conception de divers sites vitrines pour des proches (maîtrise des standards du web et de l'intégration).</li>
			</ul>
			
			<p class="mt-8 text-center italic font-serif">Voir mon GitHub pour les chapitres cachés...</p>
		`
	},
	'skills': {
		title: "Pouvoirs & Tech",
		chapter: "CHAPITRE 04",
		icon: "fa-bolt",
		color: "text-red-600",
		pageNum: "24",
		content: `
			<h1 class="text-4xl font-black mb-6 uppercase font-manga">Arbre de Compétences</h1>
			
			<h3 class="font-bold uppercase mb-2 mt-6 text-red-600">Techniques Offensives (Front-End)</h3>
			<div class="flex flex-wrap gap-2 mb-4">
				<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold border border-gray-600">Angular (Main)</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">React Native</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">JS / HTML / CSS</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Figma (UI Design)</span>
			</div>

			<h3 class="font-bold uppercase mb-2 mt-6 text-blue-600">Techniques Défensives (Back-End & Infra)</h3>
			<div class="flex flex-wrap gap-2 mb-4">
				<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold border border-gray-600">Java (Main)</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">SQL</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">PHP</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">VirtualBox</span>
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
	}
};

const modal = document.getElementById('reading-modal');
const modalContent = document.getElementById('modal-content');
const dynamicContent = document.getElementById('dynamic-content');
const modalTitleLeft = document.getElementById('modal-title-left');
const modalChapter = document.getElementById('modal-chapter');
const modalIcon = document.getElementById('modal-icon');
const pageNum = document.getElementById('page-num');

function openBook(key) {
	const data = libraryData[key];
	if(!data) return;

	dynamicContent.innerHTML = data.content;
	modalTitleLeft.innerText = data.title;
	modalChapter.innerText = data.chapter;
	pageNum.innerText = data.pageNum;
	
	modalIcon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
	modalIcon.className = `text-8xl mb-6 animate-float ${data.color}`;

	modal.classList.remove('hidden');
	setTimeout(() => {
		modal.classList.remove('opacity-0');
		modalContent.classList.remove('scale-95');
		modalContent.classList.add('scale-100');
	}, 50);
}

function closeBook() {
	modal.classList.add('opacity-0');
	modalContent.classList.remove('scale-100');
	modalContent.classList.add('scale-95');
	
	setTimeout(() => {
		modal.classList.add('hidden');
	}, 500);
}

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeBook();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === "Escape") closeBook();
});
