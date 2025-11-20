const libraryData = {
	'about': {
		title: "Naissance d'un Dev",
		chapter: "CHAPITRE 01",
		icon: "fa-user-astronaut",
		color: "text-orange-600",
		pageNum: "01",
		content: `
			<h1 class="text-4xl font-black mb-6 uppercase font-manga">L'Origine de l'Histoire</h1>
			<p class="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
				Je m'appelle Ethan, et comme tout protagoniste de Shonen, j'ai commencé mon aventure avec un rêve simple : construire des mondes numériques.
			</p>
			<p class="mb-6">
				Passionné par le <strong>développement Web Créatif</strong>, je ne cherche pas seulement à coder des sites, mais à créer des <em>expériences</em>. Mon style allie rigueur technique et sensibilité artistique.
			</p>
			
			<div class="bg-orange-50 p-6 border-l-4 border-orange-500 my-8 italic">
				"Un développeur n'écrit pas juste du code, il écrit la logique qui régit le monde de demain."
			</div>

			<h3 class="text-2xl font-bold mt-8 mb-4 font-manga">Ma Quête Actuelle</h3>
			<ul class="list-disc list-inside space-y-2 marker:text-orange-500">
				<li>Maîtriser l'art du <strong>React.js & Three.js</strong>.</li>
				<li>Créer des interfaces utilisateur (UI) qui racontent une histoire.</li>
				<li>Trouver une équipe (Guilde) pour des projets ambitieux.</li>
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
				<div class="flex items-center justify-between mb-2">
					<h3 class="text-2xl font-bold">Tech Lead @ CreativeAgency</h3>
					<span class="bg-black text-white px-2 py-1 text-xs font-bold">2022 - PRÉSENT</span>
				</div>
				<p class="text-gray-600 mb-2 italic">Le Tournoi du Pouvoir (Gestion d'équipe & Dev)</p>
				<p>Pilotage de projets web complexes, mentorship de développeurs juniors, et architecture de solutions SaaS. Stack : React, Node.js, AWS.</p>
			</div>

			<div class="w-full h-px bg-gray-300 my-6"></div>

			<div class="mb-8">
				<div class="flex items-center justify-between mb-2">
					<h3 class="text-2xl font-bold">Développeur Front-End @ StartupXYZ</h3>
					<span class="bg-gray-200 text-black px-2 py-1 text-xs font-bold">2020 - 2022</span>
				</div>
				<p class="text-gray-600 mb-2 italic">L'Entraînement intensif</p>
				<p>Développement d'interfaces réactives. Optimisation des performances (Core Web Vitals) et intégration de designs Figma pixel-perfect.</p>
			</div>
		`
	},
	'projects': {
		title: "Archives du Code",
		chapter: "CHAPITRE 03",
		icon: "fa-laptop-code",
		color: "text-cyan-600",
		pageNum: "12",
		content: `
			<h1 class="text-4xl font-black mb-6 uppercase font-manga">La Salle des Trophées</h1>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
					<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
						<i class="fa-solid fa-gamepad text-4xl"></i>
					</div>
					<h3 class="font-bold text-xl uppercase font-manga">Projet : RPG Web</h3>
					<p class="text-sm text-gray-600 mt-2">Un jeu par navigateur utilisant Canvas API et WebSockets.</p>
				</div>

				<div class="border-2 border-gray-900 p-4 hover:bg-gray-50 transition cursor-pointer group">
					<div class="h-32 bg-gray-800 w-full mb-4 flex items-center justify-center text-white group-hover:bg-cyan-600 transition">
						<i class="fa-solid fa-cart-shopping text-4xl"></i>
					</div>
					<h3 class="font-bold text-xl uppercase font-manga">E-Commerce 3D</h3>
					<p class="text-sm text-gray-600 mt-2">Shopify Headless avec visionneuse de produits 3D (Three.js).</p>
				</div>
			</div>
			
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
			<div class="flex flex-wrap gap-2 mb-6">
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">React.js (S-Rank)</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Vue.js</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Tailwind CSS</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">GSAP Animations</span>
			</div>

			<h3 class="font-bold uppercase mb-2 mt-6 text-blue-600">Techniques Défensives (Back-End)</h3>
			<div class="flex flex-wrap gap-2 mb-6">
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Node.js</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">PostgreSQL</span>
				<span class="px-3 py-1 bg-gray-200 text-sm font-bold border border-gray-400">Docker</span>
			</div>

			<div class="mt-8 p-4 border-2 border-dashed border-gray-400 rounded bg-gray-50">
				<h4 class="font-bold mb-2"><i class="fa-solid fa-star text-yellow-500 mr-2"></i>Capacité Spéciale</h4>
				<p class="text-sm">Transformation de maquettes Figma complexes en code vivant et performant.</p>
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
