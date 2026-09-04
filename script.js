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
					Je m'appelle Ethan Lepareur — développeur fullstack construit sur un arsenal
					<strong>React · Vite · Symfony · Laravel · Firebase</strong>.
					Forgé par l'alternance et les projets en production, je construis des applications qui tiennent dans le temps.
				</p>
				<p class="mb-6">
					Actuellement en mission chez <strong>Capgemini Engineering</strong> sur un projet ferroviaire
					pour <strong>SNCF Réseau</strong>, je prépare ma prochaine saison : un Mastère en architecture
					logicielle et une alternance dans un grand groupe télécom, les deux démarrant en septembre 2026.
				</p>
				<div class="bg-orange-50 p-5 border-l-4 border-orange-500 my-8 italic text-gray-700">
					"Un bon code fonctionne. Une bonne architecture dure. Je veux construire des systèmes qui traversent le temps."
				</div>
				<h3 class="text-2xl font-bold mt-8 mb-4 font-manga">Quête Actuelle</h3>
				<ul class="space-y-3">
					<li class="flex items-start gap-3">
						<span class="text-orange-500 font-bold mt-0.5">▶</span>
						<div>
							<strong>Mastère MALSI</strong> — Manager en Architecture et Applications Logicielles des SI<br>
							<span class="text-sm text-gray-500">CESI · 21 septembre 2026</span>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-orange-500 font-bold mt-0.5">▶</span>
						<div>
							<strong>Alternance chez Orange Business</strong> · Développeur<br>
							<span class="text-sm text-gray-500">Bordeaux/Talence · 21 septembre 2026</span>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-orange-500 font-bold mt-0.5">▶</span>
						<div>Continuer à construire des projets qui tiennent en production</div>
					</li>
				</ul>
			`
		},
		en: {
			title: "Rise of an Architect",
			chapter: "CHAPTER 01",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">Origin Story</h1>
				<p class="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
					I am Ethan Lepareur — a fullstack developer built on a
					<strong>React · Vite · Symfony · Laravel · Firebase</strong> arsenal.
					Forged through apprenticeship and production-ready projects, I build applications that stand the test of time.
				</p>
				<p class="mb-6">
					Currently on a mission at <strong>Capgemini Engineering</strong> on a railway project for
					<strong>SNCF Réseau</strong>, I'm preparing my next arc: a Master's in software architecture
					and an apprenticeship at a major telecom group, both starting in September 2026.
				</p>
				<div class="bg-orange-50 p-5 border-l-4 border-orange-500 my-8 italic text-gray-700">
					"Good code works. Good architecture lasts. I want to build systems that withstand time."
				</div>
				<h3 class="text-2xl font-bold mt-8 mb-4 font-manga">Current Quest</h3>
				<ul class="space-y-3">
					<li class="flex items-start gap-3">
						<span class="text-orange-500 font-bold mt-0.5">▶</span>
						<div>
							<strong>MALSI Master's</strong> — Software Architecture & IS Applications Manager<br>
							<span class="text-sm text-gray-500">CESI · September 21, 2026</span>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-orange-500 font-bold mt-0.5">▶</span>
						<div>
							<strong>Apprenticeship at Orange Business</strong> · Developer<br>
							<span class="text-sm text-gray-500">Bordeaux/Talence · September 21, 2026</span>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-orange-500 font-bold mt-0.5">▶</span>
						<div>Keep building projects that hold up in production</div>
					</li>
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
				<h1 class="text-4xl font-black mb-8 uppercase font-manga">L'Arc de l'Expérience</h1>

				<div class="tl-entry tl-upcoming mb-8 pl-5">
					<div class="flex flex-wrap items-center gap-2 mb-1">
						<span class="badge-upcoming">À venir</span>
						<span class="text-xs font-mono text-gray-400">21 sept. 2026 →</span>
					</div>
					<h3 class="text-xl font-bold">Développeur · Orange Business</h3>
					<p class="text-sm text-gray-500 italic mb-2">Alternance · Bordeaux/Talence</p>
					<p class="text-sm text-gray-700">
						Intégration en alternance dans un groupe télécom international, en parallèle du Mastère MALSI
						(Manager en Architecture et Applications Logicielles des SI) au CESI.
					</p>
				</div>

				<div class="tl-entry tl-current mb-8 pl-5">
					<div class="flex flex-wrap items-center gap-2 mb-1">
						<span class="badge-current">En cours</span>
						<span class="text-xs font-mono text-gray-400">Oct 2025 – Sept 2026</span>
					</div>
					<h3 class="text-xl font-bold">Développeur Fullstack · Capgemini Engineering</h3>
					<p class="text-sm text-gray-500 italic mb-2">Mission SNG — Projet ferroviaire pour SNCF Réseau</p>
					<ul class="text-sm space-y-1 text-gray-700 list-disc list-inside">
						<li><strong>Fullstack :</strong> conception de fonctionnalités Java (back) et Angular (front)</li>
						<li><strong>Analyse technique :</strong> traduction des User Stories en solutions concrètes</li>
						<li><strong>Qualité :</strong> résolution d'incidents et tests pour la stabilité du service</li>
					</ul>
				</div>

				<div class="tl-entry tl-past pl-5">
					<div class="flex flex-wrap items-center gap-2 mb-1">
						<span class="badge-past">Stage</span>
						<span class="text-xs font-mono text-gray-400">Avr 2025 – Mai 2025</span>
					</div>
					<h3 class="text-xl font-bold">Stagiaire Réseaux · CHPC</h3>
					<p class="text-sm text-gray-500 italic mb-2">Centre Hospitalier — Infrastructure & Sécurité</p>
					<ul class="text-sm space-y-1 text-gray-700 list-disc list-inside">
						<li><strong>Sécurité réseau :</strong> automatisation de l'authentification via PacketFence, gestion VLAN</li>
						<li><strong>Infra & tests :</strong> montage d'environnements de tests complets</li>
					</ul>
				</div>
			`
		},
		en: {
			title: "Pro Chapters",
			chapter: "CHAPTER 02",
			content: `
				<h1 class="text-4xl font-black mb-8 uppercase font-manga">The Experience Arc</h1>

				<div class="tl-entry tl-upcoming mb-8 pl-5">
					<div class="flex flex-wrap items-center gap-2 mb-1">
						<span class="badge-upcoming">Upcoming</span>
						<span class="text-xs font-mono text-gray-400">Sept 21, 2026 →</span>
					</div>
					<h3 class="text-xl font-bold">Developer · Orange Business</h3>
					<p class="text-sm text-gray-500 italic mb-2">Apprenticeship · Bordeaux/Talence</p>
					<p class="text-sm text-gray-700">
						Joining a major international telecom group as a developer apprentice, alongside the MALSI Master's
						(Software Architecture & IS Applications Manager) at CESI.
					</p>
				</div>

				<div class="tl-entry tl-current mb-8 pl-5">
					<div class="flex flex-wrap items-center gap-2 mb-1">
						<span class="badge-current">Current</span>
						<span class="text-xs font-mono text-gray-400">Oct 2025 – Sept 2026</span>
					</div>
					<h3 class="text-xl font-bold">Fullstack Developer · Capgemini Engineering</h3>
					<p class="text-sm text-gray-500 italic mb-2">SNG Mission — Railway project for SNCF Réseau</p>
					<ul class="text-sm space-y-1 text-gray-700 list-disc list-inside">
						<li><strong>Fullstack:</strong> designing Java (back) and Angular (front) features</li>
						<li><strong>Technical analysis:</strong> translating User Stories into concrete solutions</li>
						<li><strong>Quality:</strong> incident resolution and testing for service stability</li>
					</ul>
				</div>

				<div class="tl-entry tl-past pl-5">
					<div class="flex flex-wrap items-center gap-2 mb-1">
						<span class="badge-past">Internship</span>
						<span class="text-xs font-mono text-gray-400">Apr 2025 – May 2025</span>
					</div>
					<h3 class="text-xl font-bold">Network Intern · CHPC</h3>
					<p class="text-sm text-gray-500 italic mb-2">Hospital Center — Infrastructure & Security</p>
					<ul class="text-sm space-y-1 text-gray-700 list-disc list-inside">
						<li><strong>Network security:</strong> automating auth via PacketFence, VLAN management</li>
						<li><strong>Infra & tests:</strong> setting up complete test environments</li>
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
				<div class="grid grid-cols-1 md:grid-cols-2 gap-5">

					<div class="project-card">
						<div class="project-card-stripe bg-[#1E3A5F]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">CESIZen</h3>
								<a href="https://github.com/Tatanelprr/cesizen" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> Voir</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								App de santé mentale — diagnostic de stress, cohérence cardiaque, tracker d'émotions.
								Projet solo CESI avec CI/CD GitHub Actions et déploiement Railway.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">Symfony 7</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">PHP 8.4</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">MySQL</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">Bootstrap</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">GitHub Actions</span>
							</div>
						</div>
					</div>

					<div class="project-card">
						<div class="project-card-stripe bg-[#F97316]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">BAFAALAKART</h3>
								<a href="https://github.com/Tatanelprr/BAFAALAKART" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> Voir</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Outil de gestion de stage BAFA/BAFD en production — planning, inscriptions,
								appel et suivi des temps obligatoires.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">Next.js 16</span>
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">Firebase</span>
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">TypeScript</span>
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">Tailwind</span>
							</div>
						</div>
					</div>

					<div class="project-card">
						<div class="project-card-stripe bg-[#16A34A]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">OY4C Website</h3>
								<a href="https://github.com/Tatanelprr/oy4c-website" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> Voir</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Site vitrine de l'association internationale Our Youth 4 The Climate,
								avec Notion comme CMS headless. Déployé sur Vercel.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#15803d] border-[#16A34A]">React 19</span>
								<span class="skill-pill text-[#15803d] border-[#16A34A]">Vite</span>
								<span class="skill-pill text-[#15803d] border-[#16A34A]">React Router</span>
								<span class="skill-pill text-[#15803d] border-[#16A34A]">Notion API</span>
							</div>
						</div>
					</div>

					<div class="project-card">
						<div class="project-card-stripe bg-[#DC2626]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">PokéNative</h3>
								<a href="https://github.com/Tatanelprr/pokenative" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> Voir</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Pokédex mobile cross-platform iOS/Android — recherche instantanée,
								fiches détaillées, types et faiblesses en temps réel via PokéAPI.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">React Native</span>
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">Expo</span>
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">TypeScript</span>
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">PokéAPI</span>
							</div>
						</div>
					</div>

				</div>
				<p class="mt-8 text-center text-sm italic text-gray-500 font-serif">
					<a href="https://github.com/Tatanelprr" target="_blank" rel="noopener" class="hover:text-black underline transition">
						→ Tous les projets sur GitHub
					</a>
				</p>
			`
		},
		en: {
			title: "Code Archives",
			chapter: "CHAPTER 03",
			content: `
				<h1 class="text-4xl font-black mb-6 uppercase font-manga">The Trophy Room</h1>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-5">

					<div class="project-card">
						<div class="project-card-stripe bg-[#1E3A5F]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">CESIZen</h3>
								<a href="https://github.com/Tatanelprr/cesizen" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> View</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Mental health app — stress diagnostic, cardiac coherence, emotion tracker.
								Solo CESI project with GitHub Actions CI/CD and Railway deployment.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">Symfony 7</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">PHP 8.4</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">MySQL</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">Bootstrap</span>
								<span class="skill-pill text-[#1E3A5F] border-[#1E3A5F]">GitHub Actions</span>
							</div>
						</div>
					</div>

					<div class="project-card">
						<div class="project-card-stripe bg-[#F97316]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">BAFAALAKART</h3>
								<a href="https://github.com/Tatanelprr/BAFAALAKART" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> View</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Live BAFA/BAFD training management tool — scheduling, registrations,
								attendance and mandatory time tracking.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">Next.js 16</span>
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">Firebase</span>
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">TypeScript</span>
								<span class="skill-pill text-[#c05a0f] border-[#F97316]">Tailwind</span>
							</div>
						</div>
					</div>

					<div class="project-card">
						<div class="project-card-stripe bg-[#16A34A]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">OY4C Website</h3>
								<a href="https://github.com/Tatanelprr/oy4c-website" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> View</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Showcase site for the international association Our Youth 4 The Climate,
								using Notion as a headless CMS. Deployed on Vercel.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#15803d] border-[#16A34A]">React 19</span>
								<span class="skill-pill text-[#15803d] border-[#16A34A]">Vite</span>
								<span class="skill-pill text-[#15803d] border-[#16A34A]">React Router</span>
								<span class="skill-pill text-[#15803d] border-[#16A34A]">Notion API</span>
							</div>
						</div>
					</div>

					<div class="project-card">
						<div class="project-card-stripe bg-[#DC2626]"></div>
						<div class="p-4">
							<div class="flex items-start justify-between mb-2">
								<h3 class="font-manga text-xl uppercase">PokéNative</h3>
								<a href="https://github.com/Tatanelprr/pokenative" target="_blank" rel="noopener"
								   class="text-gray-400 hover:text-black transition text-sm"><i class="fa-brands fa-github"></i> View</a>
							</div>
							<p class="text-sm text-gray-600 mb-3">
								Cross-platform iOS/Android Pokédex — instant search, detailed stats,
								types and weaknesses via live PokéAPI data.
							</p>
							<div class="flex flex-wrap gap-1">
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">React Native</span>
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">Expo</span>
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">TypeScript</span>
								<span class="skill-pill text-[#b91c1c] border-[#DC2626]">PokéAPI</span>
							</div>
						</div>
					</div>

				</div>
				<p class="mt-8 text-center text-sm italic text-gray-500 font-serif">
					<a href="https://github.com/Tatanelprr" target="_blank" rel="noopener" class="hover:text-black underline transition">
						→ All projects on GitHub
					</a>
				</p>
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
				<h1 class="text-4xl font-black mb-2 uppercase font-manga">Arbre de Compétences</h1>
				<p class="text-sm text-gray-500 italic mb-6">Toutes les technos que je maîtrise et utilise activement.</p>

				<div class="skill-cat-label text-cyan-700"><i class="fa-solid fa-desktop w-4"></i> Frontend</div>
				<div class="mb-2">
					<span class="skill-pill text-cyan-800 border-cyan-600">React</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Vite</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">React Router</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Next.js</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">TypeScript</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">JavaScript</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">HTML / CSS</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Tailwind CSS</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Bootstrap</span>
				</div>

				<div class="skill-cat-label text-blue-700"><i class="fa-solid fa-server w-4"></i> Backend</div>
				<div class="mb-2">
					<span class="skill-pill text-blue-800 border-blue-600">Symfony</span>
					<span class="skill-pill text-blue-800 border-blue-600">Laravel</span>
					<span class="skill-pill text-blue-800 border-blue-600">PHP 8.4</span>
					<span class="skill-pill text-blue-800 border-blue-600">Node.js</span>
					<span class="skill-pill text-blue-800 border-blue-600">Firebase / Firestore</span>
				</div>

				<div class="skill-cat-label text-purple-700"><i class="fa-solid fa-mobile-screen-button w-4"></i> Mobile</div>
				<div class="mb-2">
					<span class="skill-pill text-purple-800 border-purple-600">React Native</span>
					<span class="skill-pill text-purple-800 border-purple-600">Expo</span>
				</div>

				<div class="skill-cat-label text-emerald-700"><i class="fa-solid fa-gears w-4"></i> Infra & DevOps</div>
				<div class="mb-2">
					<span class="skill-pill text-emerald-800 border-emerald-600">Docker</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">GitHub Actions</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Drone CI</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Semgrep</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Railway</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Vercel</span>
				</div>

				<div class="skill-cat-label text-amber-700"><i class="fa-solid fa-database w-4"></i> Bases de données</div>
				<div class="mb-4">
					<span class="skill-pill text-amber-800 border-amber-600">MySQL</span>
					<span class="skill-pill text-amber-800 border-amber-600">PostgreSQL</span>
					<span class="skill-pill text-amber-800 border-amber-600">SQLite</span>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
					<div class="bg-gray-50 p-4 border-l-4 border-gray-400">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-toolbox mr-2"></i>Inventaire</h4>
						<ul class="text-sm list-disc list-inside text-gray-700 space-y-1">
							<li><strong>IDE :</strong> IntelliJ IDEA / VSCode</li>
							<li><strong>Versionning :</strong> Git / GitHub</li>
							<li><strong>Langues :</strong> Anglais (opérationnel), Allemand (scolaire)</li>
						</ul>
					</div>
					<div class="bg-orange-50 p-4 border-l-4 border-orange-500">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-fire mr-2"></i>Passifs (Soft Skills)</h4>
						<ul class="text-sm list-disc list-inside text-gray-700 space-y-1">
							<li><strong>Persévérant :</strong> ne lâche rien face aux bugs</li>
							<li><strong>Curieux :</strong> toujours en veille techno</li>
							<li><strong>Collaboratif :</strong> force de proposition en équipe</li>
						</ul>
					</div>
				</div>
				<div class="mt-6 text-center text-xs text-gray-400 italic">
					"Un code propre se lit comme un manga : fluide et impactant."
				</div>
			`
		},
		en: {
			title: "Powers & Tech",
			chapter: "CHAPTER 04",
			content: `
				<h1 class="text-4xl font-black mb-2 uppercase font-manga">Skill Tree</h1>
				<p class="text-sm text-gray-500 italic mb-6">All the technologies I know and actively use.</p>

				<div class="skill-cat-label text-cyan-700"><i class="fa-solid fa-desktop w-4"></i> Frontend</div>
				<div class="mb-2">
					<span class="skill-pill text-cyan-800 border-cyan-600">React</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Vite</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">React Router</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Next.js</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">TypeScript</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">JavaScript</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">HTML / CSS</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Tailwind CSS</span>
					<span class="skill-pill text-cyan-800 border-cyan-600">Bootstrap</span>
				</div>

				<div class="skill-cat-label text-blue-700"><i class="fa-solid fa-server w-4"></i> Backend</div>
				<div class="mb-2">
					<span class="skill-pill text-blue-800 border-blue-600">Symfony</span>
					<span class="skill-pill text-blue-800 border-blue-600">Laravel</span>
					<span class="skill-pill text-blue-800 border-blue-600">PHP 8.4</span>
					<span class="skill-pill text-blue-800 border-blue-600">Node.js</span>
					<span class="skill-pill text-blue-800 border-blue-600">Firebase / Firestore</span>
				</div>

				<div class="skill-cat-label text-purple-700"><i class="fa-solid fa-mobile-screen-button w-4"></i> Mobile</div>
				<div class="mb-2">
					<span class="skill-pill text-purple-800 border-purple-600">React Native</span>
					<span class="skill-pill text-purple-800 border-purple-600">Expo</span>
				</div>

				<div class="skill-cat-label text-emerald-700"><i class="fa-solid fa-gears w-4"></i> Infra & DevOps</div>
				<div class="mb-2">
					<span class="skill-pill text-emerald-800 border-emerald-600">Docker</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">GitHub Actions</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Drone CI</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Semgrep</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Railway</span>
					<span class="skill-pill text-emerald-800 border-emerald-600">Vercel</span>
				</div>

				<div class="skill-cat-label text-amber-700"><i class="fa-solid fa-database w-4"></i> Databases</div>
				<div class="mb-4">
					<span class="skill-pill text-amber-800 border-amber-600">MySQL</span>
					<span class="skill-pill text-amber-800 border-amber-600">PostgreSQL</span>
					<span class="skill-pill text-amber-800 border-amber-600">SQLite</span>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
					<div class="bg-gray-50 p-4 border-l-4 border-gray-400">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-toolbox mr-2"></i>Inventory</h4>
						<ul class="text-sm list-disc list-inside text-gray-700 space-y-1">
							<li><strong>IDE:</strong> IntelliJ IDEA / VSCode</li>
							<li><strong>Versioning:</strong> Git / GitHub</li>
							<li><strong>Languages:</strong> English (operational), German (academic)</li>
						</ul>
					</div>
					<div class="bg-orange-50 p-4 border-l-4 border-orange-500">
						<h4 class="font-bold mb-2 text-sm uppercase"><i class="fa-solid fa-fire mr-2"></i>Passives (Soft Skills)</h4>
						<ul class="text-sm list-disc list-inside text-gray-700 space-y-1">
							<li><strong>Perseverant:</strong> never giving up on bugs</li>
							<li><strong>Curious:</strong> always on tech watch</li>
							<li><strong>Collaborative:</strong> team player and proactive</li>
						</ul>
					</div>
				</div>
				<div class="mt-6 text-center text-xs text-gray-400 italic">
					"Clean code reads like a manga: fluid and impactful."
				</div>
			`
		}
	}
};

// --- Variables d'état ---
let currentLang = 'fr';
let currentBook = null;

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
	if (!modal.classList.contains('hidden') && currentBook) {
		openBook(currentBook, true);
	}
});

function updateStaticContent() {
	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach(el => {
		const key = el.getAttribute('data-i18n');
		if (staticTranslations[currentLang][key]) {
			el.innerText = staticTranslations[currentLang][key];
		}
	});
}

function openBook(key, isRefresh = false) {
	currentBook = key;
	const data = libraryData[key];
	if (!data) return;

	const langData = data[currentLang];
	dynamicContent.innerHTML = langData.content;
	modalTitleLeft.innerText = langData.title;
	modalChapter.innerText = langData.chapter;
	pageNum.innerText = data.pageNum;

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

modal.addEventListener('click', (e) => {
	if (e.target === modal) closeBook();
});

document.addEventListener('keydown', (e) => {
	if (e.key === "Escape") closeBook();
});

updateStaticContent();
