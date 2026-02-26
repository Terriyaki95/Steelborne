/* =========================================================
   SteelBorne – main.js
   Navbar · Scroll Reveal · Lore Modal · i18n (IT / EN)
   ========================================================= */

// ── TRANSLATIONS ──────────────────────────────────────────
const translations = {
  it: {
    // Nav
    'nav.game': 'Il Gioco',
    'nav.rules': 'Regolamento',
    'nav.lore': 'Lore',
    'nav.decks': 'Mazzi',
    'nav.community': 'Comunità',

    // Hero
    'hero.eyebrow': 'Trading Card Game',
    'hero.tagline': 'Il campo di battaglia è il tuo regno. Ogni mossa, una sentenza.',
    'hero.cta1': 'Scopri le Regole',
    'hero.cta2': 'Entra nella Lore',
    'hero.scroll': 'Scorri',

    // Intro (Il Gioco)
    'intro.label': 'Il Gioco',
    'intro.title': 'Tattica, Posizionamento, Dominio',
    'intro.p1': 'SteelBorne è un Trading Card Game tattico ambientato in un mondo oscuro e brutale, dove la guerra è l\'unico linguaggio che conta. Non si tratta solo di lanciare carte — ogni unità che muovi, ogni casella che conquisti, è un passo verso la vittoria o la disfatta.',
    'intro.p2-html': 'Tu sei il <em>Generale</em>. Le tue decisioni plasmano l\' esercito, il posizionamento determina la sopravvivenza. La board è il campo di guerra: 9 caselle di dominio strategico dove tattica e orrore si incontrano.',
    'stat.cards': 'Carte per mazzo',
    'stat.board': 'Board di gioco',
    'stat.types': 'Tipologie di carte',
    'stat.phases': 'Fasi per turno',

    // Regolamento
    'rules.label': 'Regolamento',
    'rules.title': 'Come si Gioca',
    'rule1.title': 'Obiettivo',
    'rule1.text': 'Sconfiggi il Generale avversario riducendone la vita a 0, oppure conquista 6 delle 9 caselle della sua Zona di Controllo. Esaurire il mazzo avversario è una terza via verso la vittoria.',
    'rule2.title': 'La Board',
    'rule2.text': 'Una mappa 3×3 per giocatore, divisa in Prima, Seconda e Terza Linea. Ogni casella conquistata aumenta i tuoi Rifornimenti e ne priva l\'avversario. Il controllo del territorio è potere.',
    'rule3.title': 'Rifornimenti',
    'rule3.text': 'Il sistema di mana. Inizi con 3 al primo turno, 6 al secondo, 9 al terzo. Ogni casella nemica conquistata ti dona +1 rifornimento e ne sottrae 1 al tuo avversario.',
    'rule4.title': 'Le Truppe',
    'rule4.text': 'Fanteria in prima linea, Tiratori in seconda, Cavalleria in terza. Ogni unità ha raggio d\'attacco e movimento specifici. Il Generale amplifica le tue truppe con effetti diversi in base alla linea in cui si trova.',
    'rule5.title': 'Carte Speciali',
    'rule5.text': 'Rituali, Formazioni, Imboscate, Equipaggiamenti. Le Imboscate si piazzano coperte e si attivano a sorpresa. Le Formazioni creano gruppi di truppe che si muovono in sincronia. Ogni carta aggiunge uno strato di profondità tattica.',
    'rule6.title': 'Il Generale',
    'rule6.text': 'La tua carta più importante. Si posiziona al centro della terza linea. Avanza per attivare effetti sempre più potenti — ma ogni passo verso il fronte lo espone al pericolo. Se cade, la partita è perduta.',

    // Fasi
    'phases.label': 'Struttura del Turno',
    'phases.title': 'Le 4 Fasi',
    'phase1.name': 'Pescata',
    'phase1.desc': 'Pesca 1 carta dal tuo mazzo per iniziare il turno. Il primo giocatore non pesca al turno iniziale.',
    'phase2.name': 'Composizione Esercito',
    'phase2.desc': 'Evoca truppe nelle linee disponibili, attiva Rituali, Formazioni, Equipaggiamenti e Imboscate secondo le disponibilità di Rifornimento.',
    'phase3.name': 'Ingaggio',
    'phase3.desc': 'Muovi e attacca con le tue truppe. Dichiara gli attaccanti e l\'ordine prima di procedere. L\'avversario può rispondere con Imboscate. Se l\'attacco riesce, la truppa invade la casella nemica.',
    'phase4.name': 'Ricomposizione',
    'phase4.desc': 'Con i Rifornimenti rimanenti, evoca ulteriori truppe o attiva carte. Prepara la difesa per il turno avversario.',

    // Lore
    'lore.label': 'Lore',
    'lore.title': 'Un Mondo sull\'Orlo dell\'Abisso',
    'lore.p1': 'Rituali antichi risuonano nei campi di battaglia. Le stelle guardano dall\'alto con indifferenza divina.',
    'lore.p2-html': 'Chi sopravvive non è necessariamente il più forte — è il più <em>lucido</em>. Colui che comprende che ogni mossa è, al tempo stesso, tattica e sacrificio.',
    'lore.btn': '⬡ \u00a0 Consulta la Lore delle fazioni',

    // Lore Modal
    'modal.factions-label': 'Fazioni',
    'modal.aurelith-btn': 'L\'Impero di Aurelith',
    'modal.aurelith-title': 'Impero di Aurelith',
    'modal.aurelith-p1-html': 'Per cinquant\'anni l\'Impero di Aurelith ha vacillato, logorato da intrighi, carestie e una guerra civile che ha compromesso la sua unità. Quando l\'Imperatore <em>Serenthus</em> venne assassinato, l\'equilibrio raggiunto a fatica si frantumò in un istante. La corte, già divisa in fazioni rivali, sprofondò nuovamente in un vortice di sospetti e ambizioni.',
    'modal.aurelith-p2-html': 'Nel cuore del delta del <em>Niber</em> sorge la città di <em>Valystria</em>, divenuta capitale di Aurelith dopo la guerra. Famosa per il commercio, rappresenta il fulcro della vita politica e amministrativa dell\'impero.',
    'modal.aurelith-p3-html': 'Ma non fu scelta come capitale per le sue ricchezze dalle rotte commerciali, bensì per la sua importanza religiosa. Valystria è la più importante delle 3 città sante di Aurelith, dato che fu lì che ebbe origine il <em>Culto Solare</em>.',
    'modal.aurelith-p4-html': 'È qui che <em>Varcalon</em>, Sommo Portavoce della Verità Solare, ha deciso di mettere in atto il suo disegno. Forte del fanatismo dei suoi uomini del Sacro Ordine — un braccio armato che opera nell\'ombra e oltre la legge imperiale — ha fatto assassinare Serenthus e imposto sul trono il giovane <em>Keyros</em>, proclamandolo "Figlio degli Astri", unico imperatore legittimo per diritto divino.',
    'modal.aurelith-p5-html': 'Fra chi conosce la verità c\'è <em>Bardas</em>, generale dell\'Impero e amico fidato dell\'imperatore defunto. Sa che Varcalon è il responsabile, sa che l\'Ordine opera per instaurare un dominio assoluto del culto. Ma non può provarlo. E in un Impero dominato dalla paura, anche un sussurro potrebbe condannarlo.',
    'modal.aurelith-p6-html': 'Mentre Valystria affoga nel fanatismo, nuove minacce si addensano lungo i confini. Le tribù mannare riemergono dalle foreste occidentali annunciando una Grande Caccia contro gli uomini, e il regno di <em>Remlova</em>, insieme alle sue provincie vassalle, scruta le debolezze di Aurelith con ambizioni sempre più evidenti.',
    'modal.aurelith-p7': 'Bardas non può contare che sulla lealtà dei suoi soldati e sulla lama che ha giurato di brandire per difendere l\'Impero. La vendetta per Serenthus arde nel suo cuore. Ma per ora deve attendere.',
    'modal.aurelith-tagline': '⬡ \u00a0 Prima viene l\'acciaio.',
    'modal.close-aria': 'Chiudi',

    // Mazzi
    'decks.label': 'Fazioni & Mazzi',
    'decks.title': 'Scegli il tuo Esercito',
    'decks.desc': 'Le fazioni di SteelBorne sono in fase di rivelazione. Ogni mazzo racconta una storia, ogni carta una verità oscura.',
    'decks.coming': 'In Arrivo',
    'deck1.name': 'Fazione I',
    'deck2.name': 'Fazione II',
    'deck3.name': 'Fazione III',

    // Social
    'social.label': 'Comunità',
    'social.title': 'Seguici nel Buio',
    'social.desc': 'Aggiornamenti, nuove carte, lore e tornei. Unisciti alla comunità SteelBorne.',

    // Footer
    'footer.copy': '© 2025 SteelBorne TCG. Tutti i diritti riservati.',
  },

  en: {
    // Nav
    'nav.game': 'The Game',
    'nav.rules': 'Rules',
    'nav.lore': 'Lore',
    'nav.decks': 'Decks',
    'nav.community': 'Community',

    // Hero
    'hero.eyebrow': 'Trading Card Game',
    'hero.tagline': 'The battlefield is your kingdom. Every move, a sentence.',
    'hero.cta1': 'Discover the Rules',
    'hero.cta2': 'Enter the Lore',
    'hero.scroll': 'Scroll',

    // Intro (The Game)
    'intro.label': 'The Game',
    'intro.title': 'Tactics, Positioning, Dominance',
    'intro.p1': 'SteelBorne is a tactical Trading Card Game set in a dark and brutal world, where war is the only language that matters. It\'s not just about playing cards — every unit you move, every square you conquer, is a step toward victory or defeat.',
    'intro.p2-html': 'You are the <em>General</em>. Your decisions shape the army, positioning determines survival. The board is the field of war: 9 squares of strategic dominance where tactics and horror converge.',
    'stat.cards': 'Cards per deck',
    'stat.board': 'Game board',
    'stat.types': 'Card types',
    'stat.phases': 'Phases per turn',

    // Rules
    'rules.label': 'Rules',
    'rules.title': 'How to Play',
    'rule1.title': 'Objective',
    'rule1.text': 'Defeat the enemy General by reducing their life to 0, or conquer 6 of the 9 squares in their Control Zone. Exhausting the opponent\'s deck is a third path to victory.',
    'rule2.title': 'The Board',
    'rule2.text': 'A 3×3 map per player, divided into First, Second and Third Line. Each conquered square increases your Supplies and depletes your opponent\'s. Control of territory is power.',
    'rule3.title': 'Supplies',
    'rule3.text': 'The mana system. You start with 3 on the first turn, 6 on the second, 9 on the third. Each enemy square conquered grants you +1 supply and removes 1 from your opponent.',
    'rule4.title': 'Troops',
    'rule4.text': 'Infantry on the front line, Archers on the second, Cavalry on the third. Each unit has specific attack range and movement. The General amplifies your troops with different effects depending on which line they occupy.',
    'rule5.title': 'Special Cards',
    'rule5.text': 'Rituals, Formations, Ambushes, Equipment. Ambushes are placed face-down and activated by surprise. Formations create groups of troops that move in unison. Each card adds a layer of tactical depth.',
    'rule6.title': 'The General',
    'rule6.text': 'Your most important card. Positioned at the center of the third line. Advance to activate increasingly powerful effects — but every step toward the front exposes them to danger. If they fall, the game is lost.',

    // Phases
    'phases.label': 'Turn Structure',
    'phases.title': 'The 4 Phases',
    'phase1.name': 'Draw',
    'phase1.desc': 'Draw 1 card from your deck to start the turn. The first player does not draw on the opening turn.',
    'phase2.name': 'Army Deployment',
    'phase2.desc': 'Summon troops in available lines, activate Rituals, Formations, Equipment and Ambushes according to available Supplies.',
    'phase3.name': 'Combat',
    'phase3.desc': 'Move and attack with your troops. Declare attackers and order before proceeding. The opponent may respond with Ambushes. If the attack succeeds, the troop invades the enemy square.',
    'phase4.name': 'Reorganization',
    'phase4.desc': 'With remaining Supplies, summon additional troops or activate cards. Prepare your defenses for the opponent\'s turn.',

    // Lore
    'lore.label': 'Lore',
    'lore.title': 'A World on the Edge of the Abyss',
    'lore.p1': 'Ancient rituals resound across the battlefields. The stars watch from above with divine indifference.',
    'lore.p2-html': 'Those who survive are not necessarily the strongest — they are the most <em>clear-minded</em>. Those who understand that every move is, at once, tactics and sacrifice.',
    'lore.btn': '⬡ \u00a0 Explore the Faction Lore',

    // Lore Modal
    'modal.factions-label': 'Factions',
    'modal.aurelith-btn': 'The Empire of Aurelith',
    'modal.aurelith-title': 'Empire of Aurelith',
    'modal.aurelith-p1-html': 'For fifty years the Empire of Aurelith has wavered, worn down by intrigue, famine and a civil war that shattered its unity. When Emperor <em>Serenthus</em> was assassinated, the fragile balance collapsed in an instant. The court, already split into rival factions, plunged once more into a vortex of suspicion and ambition.',
    'modal.aurelith-p2-html': 'At the heart of the <em>Niber</em> delta stands the city of <em>Valystria</em>, which became the capital of Aurelith after the war. Renowned for trade, it is the fulcrum of the empire\'s political and administrative life.',
    'modal.aurelith-p3-html': 'But it was not chosen as capital for the wealth of its trade routes, but for its religious importance. Valystria is the most important of Aurelith\'s 3 holy cities, as it was there that the <em>Solar Cult</em> was born.',
    'modal.aurelith-p4-html': 'It is here that <em>Varcalon</em>, Supreme Speaker of the Solar Truth, has chosen to enact his design. Emboldened by the fanaticism of his men of the Sacred Order — an armed wing that operates in shadow, beyond imperial law — he orchestrated the assassination of Serenthus and placed the young <em>Keyros</em> on the throne, proclaiming him "Son of the Stars", the sole legitimate emperor by divine right.',
    'modal.aurelith-p5-html': 'Among those who know the truth is <em>Bardas</em>, General of the Empire and trusted friend of the late emperor. He knows Varcalon is responsible, he knows the Order seeks to establish absolute dominion of the cult. But he cannot prove it. And in an Empire ruled by fear, even a whisper could condemn him.',
    'modal.aurelith-p6-html': 'While Valystria drowns in fanaticism, new threats gather along the borders. The wolf-kin tribes re-emerge from the western forests proclaiming a Great Hunt against mankind, and the kingdom of <em>Remlova</em>, along with its vassal provinces, eyes Aurelith\'s weaknesses with ever bolder ambitions.',
    'modal.aurelith-p7': 'Bardas can count only on the loyalty of his soldiers and the blade he swore to wield in defense of the Empire. The desire for vengeance for Serenthus burns in his heart. But for now, he must wait.',
    'modal.aurelith-tagline': '⬡ \u00a0 Steel comes first.',
    'modal.close-aria': 'Close',

    // Decks
    'decks.label': 'Factions & Decks',
    'decks.title': 'Choose your Army',
    'decks.desc': 'SteelBorne\'s factions are being revealed. Every deck tells a story, every card a dark truth.',
    'decks.coming': 'Coming Soon',
    'deck1.name': 'Faction I',
    'deck2.name': 'Faction II',
    'deck3.name': 'Faction III',

    // Social
    'social.label': 'Community',
    'social.title': 'Follow Us into the Dark',
    'social.desc': 'Updates, new cards, lore and tournaments. Join the SteelBorne community.',

    // Footer
    'footer.copy': '© 2025 SteelBorne TCG. All rights reserved.',
  }
};

// ── LANGUAGE SYSTEM ──────────────────────────────────────
function setLanguage(lang) {
  if (!translations[lang]) return;

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  // Update HTML nodes (elements with <em> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update data-name on deck placeholders
  document.querySelectorAll('[data-i18n-name]').forEach(el => {
    const key = el.getAttribute('data-i18n-name');
    const val = translations[lang][key];
    if (val !== undefined) el.setAttribute('data-name', val);
  });

  // Update aria-label on close button
  const closeBtn = document.querySelector('.lore-modal-close');
  if (closeBtn) closeBtn.setAttribute('aria-label', translations[lang]['modal.close-aria']);

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update toggle button state
  document.querySelectorAll('.lang-opt').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-lang') === lang);
  });

  // Persist
  localStorage.setItem('steelborne-lang', lang);
}

function toggleLanguage() {
  const current = localStorage.getItem('steelborne-lang') || 'it';
  setLanguage(current === 'it' ? 'en' : 'it');
}

// ── NAVBAR SCROLL ────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── SCROLL REVEAL ────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => observer.observe(el));

// ── LORE MODAL ───────────────────────────────────────────
function openLoreModal() {
  document.getElementById('loreModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLoreModal() {
  document.getElementById('loreModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function showFaction(id, btn) {
  document.querySelectorAll('.lore-faction-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.lore-faction-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('faction-' + id).classList.add('active');
  btn.classList.add('active');
}

document.getElementById('loreModalOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeLoreModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLoreModal();
});

// ── INIT LANGUAGE ────────────────────────────────────────
(function () {
  const saved = localStorage.getItem('steelborne-lang') || 'it';
  setLanguage(saved);
})();
