/**
 * AGRINHO 2026 — Raízes do Futuro
 * script.js — Interatividade completa
 *
 * Funcionalidades:
 *  1. Navbar scroll / menu mobile
 *  2. Scroll reveal (Intersection Observer)
 *  3. Contadores animados (estatísticas)
 *  4. Botão "Voltar ao topo"
 *  5. Quiz interativo com 10 perguntas
 */

/* =========================================================
   1. NAVBAR
   ========================================================= */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links    = navLinks.querySelectorAll('a');

  /* Adiciona classe "scrolled" ao rolar */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* Toggle mobile */
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Fecha menu ao clicar num link */
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();


/* =========================================================
   2. SCROLL REVEAL
   ========================================================= */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // apenas uma vez
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(item => observer.observe(item));
})();


/* =========================================================
   3. CONTADORES ANIMADOS
   ========================================================= */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  let started = false;

  const runCounter = (el) => {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1600; // ms
    const start    = performance.now();

    const step = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(ease * target);

      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (started) return;
      if (entries.some(e => e.isIntersecting)) {
        started = true;
        counters.forEach(runCounter);
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  // Observa o pai (stats-row)
  const statsRow = document.querySelector('.stats-row');
  if (statsRow) observer.observe(statsRow);
})();


/* =========================================================
   4. BOTÃO VOLTAR AO TOPO
   ========================================================= */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* =========================================================
   5. QUIZ INTERATIVO
   ========================================================= */
(function initQuiz() {

  /* ── BANCO DE PERGUNTAS (10 perguntas) ── */
  const questions = [
    {
      question: 'O que é agricultura de precisão?',
      options: [
        'Plantar apenas culturas pequenas e delicadas',
        'Usar GPS, sensores e dados para tomar decisões certeiras no campo',
        'Fazer cálculos matemáticos sobre a lavoura',
        'Plantar em fileiras muito retas'
      ],
      correct: 1,
      feedback: 'Correto! A agricultura de precisão usa tecnologia como GPS e sensores para otimizar cada etapa da produção.'
    },
    {
      question: 'Qual é o principal benefício dos drones na agricultura?',
      options: [
        'Substituir completamente o agricultor',
        'Fotografar paisagens bonitas do campo',
        'Monitorar lavouras e aplicar insumos com mais precisão e eficiência',
        'Transportar colheita entre fazendas'
      ],
      correct: 2,
      feedback: 'Exato! Drones podem monitorar a saúde das plantas e aplicar defensivos com muito mais precisão.'
    },
    {
      question: 'Por que a preservação das abelhas é importante para a agricultura?',
      options: [
        'Produzem mel para venda',
        'Afastam pragas das lavouras',
        'São responsáveis pela polinização de um terço dos alimentos que consumimos',
        'Indicam a qualidade do solo'
      ],
      correct: 2,
      feedback: 'Correto! As abelhas polinizam cerca de ⅓ dos alimentos que consumimos. Sem elas, a produção seria muito menor.'
    },
    {
      question: 'O que um sensor de solo mede na agricultura inteligente?',
      options: [
        'A velocidade do vento e temperatura do ar',
        'O peso dos animais na propriedade',
        'A presença de insetos voadores',
        'Temperatura, umidade, pH e nutrientes do solo em tempo real'
      ],
      correct: 3,
      feedback: 'Perfeito! Sensores de solo fornecem dados em tempo real, ajudando o produtor a tomar decisões precisas.'
    },
    {
      question: 'Qual porcentagem da água doce mundial é consumida pela agricultura?',
      options: [
        'Cerca de 20%',
        'Cerca de 40%',
        'Cerca de 70%',
        'Cerca de 90%'
      ],
      correct: 2,
      feedback: 'Isso mesmo! A agricultura consome cerca de 70% da água doce do mundo, por isso a irrigação inteligente é tão importante.'
    },
    {
      question: 'O que é sustentabilidade agrícola?',
      options: [
        'Produzir o máximo possível sem se preocupar com o meio ambiente',
        'Produzir alimentos de forma eficiente preservando os recursos naturais para o futuro',
        'Parar toda a produção agrícola para salvar o planeta',
        'Usar apenas produtos químicos modernos na lavoura'
      ],
      correct: 1,
      feedback: 'Correto! Sustentabilidade significa produzir bem hoje sem comprometer os recursos das gerações futuras.'
    },
    {
      question: 'Como a energia solar beneficia as propriedades rurais?',
      options: [
        'Esquenta o solo para melhorar a plantação',
        'Substitui completamente o trabalho dos animais',
        'Gera energia limpa e barata, podendo abastecer a fazenda e vender o excedente',
        'Elimina a necessidade de irrigação'
      ],
      correct: 2,
      feedback: 'Exato! Propriedades rurais com painéis solares produzem sua própria energia limpa e ainda podem vender o excedente.'
    },
    {
      question: 'Qual é a importância da agricultura para o Brasil?',
      options: [
        'É responsável por aproximadamente 33% do PIB nacional',
        'Representa menos de 5% da economia do país',
        'É importante apenas para o Nordeste',
        'Só serve para consumo interno, sem exportações'
      ],
      correct: 0,
      feedback: 'Correto! O agronegócio representa cerca de 33% do PIB brasileiro, exportando para mais de 180 países.'
    },
    {
      question: 'O que é compostagem?',
      options: [
        'Um tipo de veneno agrícola',
        'Uma técnica de regar plantas com água quente',
        'A transformação de restos orgânicos em adubo natural',
        'Um sistema de irrigação por gotejamento'
      ],
      correct: 2,
      feedback: 'Perfeito! A compostagem transforma restos de alimentos e materiais orgânicos em adubo rico em nutrientes para o solo.'
    },
    {
      question: 'Como a irrigação inteligente ajuda no campo?',
      options: [
        'Irriga com água quente para acelerar o crescimento das plantas',
        'Libera água somente quando e onde as plantas precisam, economizando até 50%',
        'Substitui a chuva completamente durante o ano todo',
        'Adiciona fertilizantes diretamente no ar'
      ],
      correct: 1,
      feedback: 'Isso mesmo! Sistemas de irrigação inteligente podem economizar até 50% de água comparados aos métodos tradicionais.'
    }
  ];

  /* ── Elementos do DOM ── */
  const quizStart    = document.getElementById('quizStart');
  const quizGame     = document.getElementById('quizGame');
  const quizResult   = document.getElementById('quizResult');
  const startBtn     = document.getElementById('startQuizBtn');
  const restartBtn   = document.getElementById('restartBtn');
  const nextBtn      = document.getElementById('nextBtn');
  const questionEl   = document.getElementById('quizQuestion');
  const optionsEl    = document.getElementById('quizOptions');
  const feedbackEl   = document.getElementById('quizFeedback');
  const progressFill = document.getElementById('progressFill');
  const progressLabel= document.getElementById('progressLabel');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const progressBar  = document.querySelector('.quiz-progress-bar');
  const resultEmoji  = document.getElementById('resultEmoji');
  const resultTitle  = document.getElementById('resultTitle');
  const resultDesc   = document.getElementById('resultDesc');
  const finalScore   = document.getElementById('finalScore');

  /* ── Estado do quiz ── */
  let currentIndex = 0;
  let score        = 0;
  let answered     = false;
  let shuffled     = [];

  /* ── Embaralha array (Fisher-Yates) ── */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ── Inicia quiz ── */
  function startQuiz() {
    currentIndex = 0;
    score = 0;
    shuffled = shuffle(questions);

    quizStart.classList.add('hidden');
    quizResult.classList.add('hidden');
    quizGame.classList.remove('hidden');

    scoreDisplay.textContent = '0';
    renderQuestion();
  }

  /* ── Renderiza pergunta atual ── */
  function renderQuestion() {
    answered = false;
    const q = shuffled[currentIndex];

    // Atualiza progresso
    const pct = (currentIndex / questions.length) * 100;
    progressFill.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', currentIndex);
    progressLabel.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;

    // Texto da pergunta
    questionEl.textContent = q.question;

    // Limpa e cria opções
    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.setAttribute('role', 'listitem');
      btn.dataset.index = i;
      btn.addEventListener('click', () => handleAnswer(i));
      optionsEl.appendChild(btn);
    });

    // Esconde feedback e próximo
    feedbackEl.classList.add('hidden');
    feedbackEl.textContent = '';
    feedbackEl.className = 'quiz-feedback hidden';
    nextBtn.classList.add('hidden');
  }

  /* ── Processa resposta ── */
  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q       = shuffled[currentIndex];
    const correct = q.correct;
    const buttons = optionsEl.querySelectorAll('.quiz-option');

    // Desabilita todos
    buttons.forEach(btn => { btn.disabled = true; });

    // Destaca correta e errada
    buttons[correct].classList.add('correct');
    if (selectedIndex !== correct) {
      buttons[selectedIndex].classList.add('wrong');
    } else {
      score++;
      scoreDisplay.textContent = score;
    }

    // Feedback
    feedbackEl.classList.remove('hidden');
    if (selectedIndex === correct) {
      feedbackEl.className = 'quiz-feedback correct-fb';
      feedbackEl.textContent = '✅ ' + q.feedback;
    } else {
      feedbackEl.className = 'quiz-feedback wrong-fb';
      feedbackEl.textContent = '❌ ' + q.feedback;
    }

    // Botão próximo
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = (currentIndex < questions.length - 1)
      ? 'Próxima →'
      : 'Ver Resultado 🏁';
  }

  /* ── Avança pergunta ── */
  function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }

  /* ── Exibe resultado final ── */
  function showResult() {
    quizGame.classList.add('hidden');
    quizResult.classList.remove('hidden');

    // Barra 100%
    progressFill.style.width = '100%';

    finalScore.textContent = score;

    /* Faixas de pontuação */
    let emoji, title, desc;
    if (score <= 3) {
      emoji = '🌱';
      title = 'Você está começando sua jornada!';
      desc  = `Com ${score} acerto(s), você ainda tem muito para descobrir sobre sustentabilidade e tecnologia no campo. Continue aprendendo — cada passo conta!`;
    } else if (score <= 7) {
      emoji = '🌿';
      title = 'Você já conhece bastante sobre sustentabilidade!';
      desc  = `Ótimo resultado! Com ${score} acertos, você demonstra um bom conhecimento sobre o tema. Continue explorando para se tornar um especialista!`;
    } else {
      emoji = '🏆';
      title = 'Parabéns! Você é um Guardião do Futuro Rural!';
      desc  = `Impressionante! ${score} de 10 acertos! Você tem um conhecimento excelente sobre tecnologia e sustentabilidade no campo. O futuro agradece!`;
    }

    resultEmoji.textContent = emoji;
    resultTitle.textContent = title;
    resultDesc.textContent  = desc;
  }

  /* ── Event listeners ── */
  if (startBtn)   startBtn.addEventListener('click', startQuiz);
  if (restartBtn) restartBtn.addEventListener('click', startQuiz);
  if (nextBtn)    nextBtn.addEventListener('click', nextQuestion);

})();


/* =========================================================
   UTILITÁRIO: Feedback de acessibilidade — foco no quiz
   ao pressionar Enter em cartões de tecnologia
   ========================================================= */
document.querySelectorAll('.tec-card').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });
});
