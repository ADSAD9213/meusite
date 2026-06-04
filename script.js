/* =====================================================
   RAÍZES DO FUTURO – AGRINHO 2026
   script.js – Funcionalidades JavaScript
   ===================================================== */

/* ─────────────────────────────────────────
   1. DADOS DO QUIZ – 10 perguntas
   ───────────────────────────────────────── */
const quizData = [
  {
    question: "O que é agricultura de precisão?",
    options: [
      "Cultivar apenas produtos orgânicos sem uso de máquinas",
      "Usar tecnologias como GPS e sensores para otimizar o manejo de cada área da lavoura",
      "Plantar em linhas muito retas usando régua e compasso",
      "Tipo de agricultura praticada somente em pequenas propriedades"
    ],
    correct: 1,
    explanation: "A agricultura de precisão usa GPS, drones, sensores e dados para aplicar insumos somente onde e quando necessário, reduzindo desperdícios e aumentando a produtividade."
  },
  {
    question: "Qual é a principal vantagem do uso de drones na lavoura?",
    options: [
      "Substituir totalmente o trabalho dos agricultores",
      "Monitorar grandes áreas rapidamente e detectar pragas e doenças precocemente",
      "Transportar grãos colhidos até os silos",
      "Fazer a irrigação das plantações por aspersão"
    ],
    correct: 1,
    explanation: "Drones equipados com câmeras multiespectrais identificam doenças, pragas e deficiências nutricionais muito antes que o olho humano perceba, permitindo ação rápida e precisa."
  },
  {
    question: "Quanto pode reduzir o consumo de água a irrigação por gotejamento inteligente em comparação ao método tradicional?",
    options: [
      "Cerca de 5%",
      "Cerca de 20%",
      "Até 60%",
      "Apenas 10%"
    ],
    correct: 2,
    explanation: "O gotejamento inteligente, combinado com sensores de umidade no solo, pode reduzir o consumo de água em até 60%, pois a água vai diretamente às raízes, sem evaporação nem escoamento."
  },
  {
    question: "O que é energia bioelétrica (biogás) no contexto rural?",
    options: [
      "Energia gerada pela fermentação de resíduos orgânicos como dejetos animais e palha",
      "Energia captada pelo vento nas torres eólicas do campo",
      "Eletricidade gerada pela combustão de gasolina em geradores rurais",
      "Energia solar armazenada em baterias de lítio"
    ],
    correct: 0,
    explanation: "O biogás é produzido pela digestão anaeróbica de resíduos orgânicos (esterco, bagaço, palha). O gás gerado alimenta motores ou gera eletricidade, aproveitando o que seria descartado."
  },
  {
    question: "O que é o Código Florestal Brasileiro?",
    options: [
      "Lei que proíbe completamente qualquer desmatamento no Brasil",
      "Lei que regula o uso da terra, exigindo Áreas de Preservação Permanente e Reservas Legais nas propriedades rurais",
      "Regras sobre como plantar árvores frutíferas em quintais urbanos",
      "Decreto que libera a exportação de madeira nativa para outros países"
    ],
    correct: 1,
    explanation: "O Código Florestal (Lei 12.651/2012) estabelece APPs (Áreas de Preservação Permanente) e Reservas Legais nas propriedades rurais, equilibrando produção agrícola com proteção ambiental."
  },
  {
    question: "Qual é a relação entre campo e cidade no abastecimento alimentar?",
    options: [
      "A cidade produz alimentos em fazendas verticais e não depende do campo",
      "Cerca de 70% dos alimentos que chegam à mesa urbana vêm de pequenos e médios produtores rurais",
      "O campo só produz commodities para exportação, sem impacto no consumo interno",
      "O campo e a cidade não têm relação direta na questão alimentar"
    ],
    correct: 1,
    explanation: "Pequenos e médios produtores rurais respondem por grande parte dos alimentos consumidos nas cidades brasileiras, especialmente hortifrúti, leite, ovos e carnes."
  },
  {
    question: "O que significa o conceito de 'segurança alimentar'?",
    options: [
      "Utilizar agrotóxicos para garantir que a comida não tenha pragas",
      "Garantia de acesso de todas as pessoas a alimentos suficientes, saudáveis e de qualidade",
      "Código de segurança nas embalagens dos alimentos industrializados",
      "Sistema de câmeras de vigilância nos supermercados"
    ],
    correct: 1,
    explanation: "Segundo a FAO, segurança alimentar existe quando todas as pessoas têm acesso físico, social e econômico a alimentos suficientes, seguros e nutritivos, em quantidade e qualidade."
  },
  {
    question: "Como a Inteligência Artificial (IA) pode ajudar na agricultura?",
    options: [
      "Substituir completamente o produtor rural em todas as decisões",
      "Prever doenças, calcular o melhor momento de plantio e identificar deficiências nutricionais por imagens de satélite",
      "Criar novos organismos geneticamente modificados sem supervisão humana",
      "Automatizar apenas o processo de embalagem dos produtos no galpão"
    ],
    correct: 1,
    explanation: "A IA analisa dados climáticos, históricos e imagens de satélite para recomendar quando plantar, irrigar e colher, além de identificar pragas e calcular doses precisas de fertilizantes."
  },
  {
    question: "O que é agrofloresta (sistemas agroflorestais)?",
    options: [
      "Técnica de plantar somente florestas de eucalipto para celulose",
      "Sistema que integra árvores, culturas agrícolas e/ou animais na mesma área, beneficiando todos os componentes",
      "Método de desmatar e plantar soja em seguida para máxima produção",
      "Tipo de estufa para cultivar plantas em ambiente controlado"
    ],
    correct: 1,
    explanation: "A agrofloresta combina árvores com culturas e/ou animais, imitando a natureza. Ela melhora o solo, conserva a água, aumenta a biodiversidade e produz alimentos — tudo ao mesmo tempo."
  },
  {
    question: "Qual é um dos maiores desafios para alimentar 10 bilhões de pessoas em 2050?",
    options: [
      "Reduzir a produção agrícola para poupar o meio ambiente",
      "Produzir 70% mais alimentos sem expandir significativamente as áreas cultivadas e reduzir o desperdício",
      "Proibir a exportação de alimentos para garantir abastecimento interno",
      "Importar toda a produção alimentar de outros continentes"
    ],
    correct: 1,
    explanation: "A FAO estima que precisaremos de 70% mais alimentos até 2050. A solução passa por aumentar produtividade com tecnologia, reduzir o desperdício (hoje 1/3 do alimento se perde) e distribuir melhor."
  }
];

/* ─────────────────────────────────────────
   2. ESTADO DO QUIZ
   ───────────────────────────────────────── */
let currentQuestion = 0; // índice da pergunta atual
let score = 0;           // pontuação acumulada
let answered = false;    // se a pergunta atual já foi respondida

/* ─────────────────────────────────────────
   3. ELEMENTOS DO DOM – QUIZ
   ───────────────────────────────────────── */
const quizStart    = document.getElementById('quizStart');
const quizGame     = document.getElementById('quizGame');
const quizResult   = document.getElementById('quizResult');
const startBtn     = document.getElementById('startQuiz');
const nextBtn      = document.getElementById('nextQuestion');
const restartBtn   = document.getElementById('restartQuiz');
const progressBar  = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const scoreDisplay    = document.getElementById('scoreDisplay');
const questionNumber  = document.getElementById('questionNumber');
const questionText    = document.getElementById('questionText');
const optionsGrid     = document.getElementById('optionsGrid');
const feedbackArea    = document.getElementById('feedbackArea');
const feedbackIcon    = document.getElementById('feedbackIcon');
const feedbackText    = document.getElementById('feedbackText');
const feedbackExpl    = document.getElementById('feedbackExplanation');
const finalScore      = document.getElementById('finalScore');
const resultIcon      = document.getElementById('resultIcon');
const resultTitle     = document.getElementById('resultTitle');
const resultMessage   = document.getElementById('resultMessage');
const resultBar       = document.getElementById('resultBar');

/* ─────────────────────────────────────────
   4. FUNÇÕES DO QUIZ
   ───────────────────────────────────────── */

/**
 * Exibe a tela indicada e oculta as demais.
 * @param {HTMLElement} screen – tela a exibir
 */
function showScreen(screen) {
  [quizStart, quizGame, quizResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

/**
 * Carrega a pergunta atual na tela do jogo.
 */
function loadQuestion() {
  answered = false;
  const data = quizData[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  // Atualiza número, texto e barra de progresso
  questionNumber.textContent   = String(currentQuestion + 1).padStart(2, '0');
  questionText.textContent     = data.question;
  questionCounter.textContent  = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
  scoreDisplay.textContent     = `Pontuação: ${score}`;
  progressBar.style.width      = `${(currentQuestion / quizData.length) * 100}%`;

  // Esconde feedback e gera opções
  feedbackArea.style.display = 'none';
  optionsGrid.innerHTML = '';

  data.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[idx]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(idx, btn));
    optionsGrid.appendChild(btn);
  });
}

/**
 * Processa a escolha do usuário.
 * @param {number}      idx – índice da opção clicada
 * @param {HTMLElement} btn – botão clicado
 */
function selectAnswer(idx, btn) {
  if (answered) return; // ignora cliques duplos
  answered = true;

  const correct = quizData[currentQuestion].correct;
  const isRight  = (idx === correct);

  // Destaca certo/errado em todas as opções
  const allBtns = optionsGrid.querySelectorAll('.option-btn');
  allBtns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    if (i === idx && !isRight) b.classList.add('wrong');
  });

  // Atualiza pontuação
  if (isRight) score++;
  scoreDisplay.textContent = `Pontuação: ${score}`;

  // Mostra feedback
  feedbackIcon.textContent       = isRight ? '✅' : '❌';
  feedbackText.textContent       = isRight ? 'Resposta correta! 🎉' : 'Resposta incorreta!';
  feedbackExpl.textContent       = quizData[currentQuestion].explanation;
  feedbackArea.style.display     = 'block';

  // Texto do botão de próxima pergunta
  nextBtn.textContent = (currentQuestion < quizData.length - 1) ? 'Próxima →' : 'Ver resultado 🏆';
}

/**
 * Avança para a próxima pergunta ou exibe resultado final.
 */
function goNext() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/**
 * Exibe a tela de resultado final com mensagem personalizada.
 */
function showResult() {
  showScreen(quizResult);
  finalScore.textContent = score;

  // Barra de resultado (animação com delay)
  setTimeout(() => {
    resultBar.style.width = `${(score / quizData.length) * 100}%`;
  }, 200);

  // Mensagem e ícone conforme pontuação
  if (score <= 3) {
    resultIcon.textContent   = '🌱';
    resultTitle.textContent  = 'Continue aprendendo!';
    resultMessage.textContent = 'Não desanime! O campo do futuro tem muito para te ensinar. Revise o conteúdo e tente novamente — você vai longe!';
  } else if (score <= 7) {
    resultIcon.textContent   = '🌻';
    resultTitle.textContent  = 'Você está no caminho certo!';
    resultMessage.textContent = 'Ótimo desempenho! Você já conhece bastante sobre sustentabilidade e tecnologia rural. Continue estudando para chegar ao topo!';
  } else {
    resultIcon.textContent   = '🏆';
    resultTitle.textContent  = 'Parabéns! Você é um especialista do Agrinho!';
    resultMessage.textContent = 'Incrível! Você domina os temas de agricultura sustentável e tecnologia no campo. O futuro do Brasil precisa de pessoas como você!';
  }

  // Atualiza barra de progresso para 100%
  progressBar.style.width = '100%';
  questionCounter.textContent = `Pergunta ${quizData.length} de ${quizData.length}`;
}

/**
 * Reinicia o quiz do zero.
 */
function restartQuiz() {
  currentQuestion = 0;
  score            = 0;
  answered         = false;
  progressBar.style.width  = '0%';
  resultBar.style.width    = '0%';
  showScreen(quizStart);
}

/* ─────────────────────────────────────────
   5. EVENTOS DO QUIZ
   ───────────────────────────────────────── */
startBtn.addEventListener('click', () => {
  showScreen(quizGame);
  loadQuestion();
});

nextBtn.addEventListener('click', goNext);
restartBtn.addEventListener('click', restartQuiz);

/* ─────────────────────────────────────────
   6. NAVEGAÇÃO SUAVE (Smooth Scroll)
   ───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    // Fecha o menu mobile se estiver aberto
    navLinks.classList.remove('open');

    const navHeight = navbar.offsetHeight;
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

/* ─────────────────────────────────────────
   7. NAVBAR – sticky & hamburger
   ───────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Muda estilo da navbar ao rolar
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Toggle menu mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha menu ao clicar fora
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

/* ─────────────────────────────────────────
   8. BOTÃO VOLTAR AO TOPO
   ───────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────────────────────────────
   9. ANIMAÇÕES AO ROLAR (Intersection Observer)
   ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Observa todos os elementos com classe .reveal
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ─────────────────────────────────────────
   10. CONTADORES ANIMADOS (data-banner)
   ───────────────────────────────────────── */

/**
 * Anima um número de 0 até o valor alvo.
 * @param {HTMLElement} el     – elemento span do número
 * @param {number}      target – valor final
 * @param {number}      duration – duração em ms
 */
function animateCounter(el, target, duration = 1800) {
  const start    = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(startVal + (target - startVal) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Dispara contadores quando o banner entrar na tela
const dataBanner = document.querySelector('.data-banner');
if (dataBanner) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.data-number').forEach(el => {
            animateCounter(el, parseInt(el.dataset.target, 10));
          });
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counterObserver.observe(dataBanner);
}

/* ─────────────────────────────────────────
   11. DESTAQUE DO LINK ATIVO NA NAVBAR
       (baseado na seção visível)
   ───────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.background = '';
          a.style.color = '';
          if (a.getAttribute('href') === `#${id}`) {
            a.style.background = 'var(--verde-palido)';
            a.style.color      = 'var(--verde-escuro)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

/* ─────────────────────────────────────────
   12. PARTÍCULAS DECORATIVAS NO HEADER
       (pequenas bolinhas flutuantes)
   ───────────────────────────────────────── */
function createParticles() {
  const header = document.querySelector('header');
  if (!header) return;

  const colors  = ['#81C784', '#42A5F5', '#FFD600', '#A5D6A7', '#BBDEFB'];
  const count   = window.innerWidth < 768 ? 8 : 18;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size   = Math.random() * 12 + 4; // 4–16px
    const left   = Math.random() * 100;
    const top    = Math.random() * 100;
    const dur    = Math.random() * 8 + 5;  // 5–13s
    const delay  = Math.random() * 6;
    const color  = colors[Math.floor(Math.random() * colors.length)];

    Object.assign(p.style, {
      position:        'absolute',
      width:           `${size}px`,
      height:          `${size}px`,
      background:      color,
      borderRadius:    '50%',
      left:            `${left}%`,
      top:             `${top}%`,
      opacity:         '0.18',
      pointerEvents:   'none',
      zIndex:          '0',
      animation:       `floatLeaf ${dur}s ease-in-out ${delay}s infinite`,
    });

    header.appendChild(p);
  }
}

createParticles();

/* ─────────────────────────────────────────
   13. EFEITO PARALLAX SUAVE NO HEADER
   ───────────────────────────────────────── */
const heroContent = document.querySelector('.hero-content');

if (heroContent && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.18}px)`;
      heroContent.style.opacity   = `${1 - scrollY / (window.innerHeight * 0.8)}`;
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   14. ANIMAÇÃO INICIAL – Destaque do título
   ───────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});/* =====================================================
   RAÍZES DO FUTURO – AGRINHO 2026
   script.js – Funcionalidades JavaScript
   ===================================================== */

/* ─────────────────────────────────────────
   1. DADOS DO QUIZ – 10 perguntas
   ───────────────────────────────────────── */
const quizData = [
  {
    question: "O que é agricultura de precisão?",
    options: [
      "Cultivar apenas produtos orgânicos sem uso de máquinas",
      "Usar tecnologias como GPS e sensores para otimizar o manejo de cada área da lavoura",
      "Plantar em linhas muito retas usando régua e compasso",
      "Tipo de agricultura praticada somente em pequenas propriedades"
    ],
    correct: 1,
    explanation: "A agricultura de precisão usa GPS, drones, sensores e dados para aplicar insumos somente onde e quando necessário, reduzindo desperdícios e aumentando a produtividade."
  },
  {
    question: "Qual é a principal vantagem do uso de drones na lavoura?",
    options: [
      "Substituir totalmente o trabalho dos agricultores",
      "Monitorar grandes áreas rapidamente e detectar pragas e doenças precocemente",
      "Transportar grãos colhidos até os silos",
      "Fazer a irrigação das plantações por aspersão"
    ],
    correct: 1,
    explanation: "Drones equipados com câmeras multiespectrais identificam doenças, pragas e deficiências nutricionais muito antes que o olho humano perceba, permitindo ação rápida e precisa."
  },
  {
    question: "Quanto pode reduzir o consumo de água a irrigação por gotejamento inteligente em comparação ao método tradicional?",
    options: [
      "Cerca de 5%",
      "Cerca de 20%",
      "Até 60%",
      "Apenas 10%"
    ],
    correct: 2,
    explanation: "O gotejamento inteligente, combinado com sensores de umidade no solo, pode reduzir o consumo de água em até 60%, pois a água vai diretamente às raízes, sem evaporação nem escoamento."
  },
  {
    question: "O que é energia bioelétrica (biogás) no contexto rural?",
    options: [
      "Energia gerada pela fermentação de resíduos orgânicos como dejetos animais e palha",
      "Energia captada pelo vento nas torres eólicas do campo",
      "Eletricidade gerada pela combustão de gasolina em geradores rurais",
      "Energia solar armazenada em baterias de lítio"
    ],
    correct: 0,
    explanation: "O biogás é produzido pela digestão anaeróbica de resíduos orgânicos (esterco, bagaço, palha). O gás gerado alimenta motores ou gera eletricidade, aproveitando o que seria descartado."
  },
  {
    question: "O que é o Código Florestal Brasileiro?",
    options: [
      "Lei que proíbe completamente qualquer desmatamento no Brasil",
      "Lei que regula o uso da terra, exigindo Áreas de Preservação Permanente e Reservas Legais nas propriedades rurais",
      "Regras sobre como plantar árvores frutíferas em quintais urbanos",
      "Decreto que libera a exportação de madeira nativa para outros países"
    ],
    correct: 1,
    explanation: "O Código Florestal (Lei 12.651/2012) estabelece APPs (Áreas de Preservação Permanente) e Reservas Legais nas propriedades rurais, equilibrando produção agrícola com proteção ambiental."
  },
  {
    question: "Qual é a relação entre campo e cidade no abastecimento alimentar?",
    options: [
      "A cidade produz alimentos em fazendas verticais e não depende do campo",
      "Cerca de 70% dos alimentos que chegam à mesa urbana vêm de pequenos e médios produtores rurais",
      "O campo só produz commodities para exportação, sem impacto no consumo interno",
      "O campo e a cidade não têm relação direta na questão alimentar"
    ],
    correct: 1,
    explanation: "Pequenos e médios produtores rurais respondem por grande parte dos alimentos consumidos nas cidades brasileiras, especialmente hortifrúti, leite, ovos e carnes."
  },
  {
    question: "O que significa o conceito de 'segurança alimentar'?",
    options: [
      "Utilizar agrotóxicos para garantir que a comida não tenha pragas",
      "Garantia de acesso de todas as pessoas a alimentos suficientes, saudáveis e de qualidade",
      "Código de segurança nas embalagens dos alimentos industrializados",
      "Sistema de câmeras de vigilância nos supermercados"
    ],
    correct: 1,
    explanation: "Segundo a FAO, segurança alimentar existe quando todas as pessoas têm acesso físico, social e econômico a alimentos suficientes, seguros e nutritivos, em quantidade e qualidade."
  },
  {
    question: "Como a Inteligência Artificial (IA) pode ajudar na agricultura?",
    options: [
      "Substituir completamente o produtor rural em todas as decisões",
      "Prever doenças, calcular o melhor momento de plantio e identificar deficiências nutricionais por imagens de satélite",
      "Criar novos organismos geneticamente modificados sem supervisão humana",
      "Automatizar apenas o processo de embalagem dos produtos no galpão"
    ],
    correct: 1,
    explanation: "A IA analisa dados climáticos, históricos e imagens de satélite para recomendar quando plantar, irrigar e colher, além de identificar pragas e calcular doses precisas de fertilizantes."
  },
  {
    question: "O que é agrofloresta (sistemas agroflorestais)?",
    options: [
      "Técnica de plantar somente florestas de eucalipto para celulose",
      "Sistema que integra árvores, culturas agrícolas e/ou animais na mesma área, beneficiando todos os componentes",
      "Método de desmatar e plantar soja em seguida para máxima produção",
      "Tipo de estufa para cultivar plantas em ambiente controlado"
    ],
    correct: 1,
    explanation: "A agrofloresta combina árvores com culturas e/ou animais, imitando a natureza. Ela melhora o solo, conserva a água, aumenta a biodiversidade e produz alimentos — tudo ao mesmo tempo."
  },
  {
    question: "Qual é um dos maiores desafios para alimentar 10 bilhões de pessoas em 2050?",
    options: [
      "Reduzir a produção agrícola para poupar o meio ambiente",
      "Produzir 70% mais alimentos sem expandir significativamente as áreas cultivadas e reduzir o desperdício",
      "Proibir a exportação de alimentos para garantir abastecimento interno",
      "Importar toda a produção alimentar de outros continentes"
    ],
    correct: 1,
    explanation: "A FAO estima que precisaremos de 70% mais alimentos até 2050. A solução passa por aumentar produtividade com tecnologia, reduzir o desperdício (hoje 1/3 do alimento se perde) e distribuir melhor."
  }
];

/* ─────────────────────────────────────────
   2. ESTADO DO QUIZ
   ───────────────────────────────────────── */
let currentQuestion = 0; // índice da pergunta atual
let score = 0;           // pontuação acumulada
let answered = false;    // se a pergunta atual já foi respondida

/* ─────────────────────────────────────────
   3. ELEMENTOS DO DOM – QUIZ
   ───────────────────────────────────────── */
const quizStart    = document.getElementById('quizStart');
const quizGame     = document.getElementById('quizGame');
const quizResult   = document.getElementById('quizResult');
const startBtn     = document.getElementById('startQuiz');
const nextBtn      = document.getElementById('nextQuestion');
const restartBtn   = document.getElementById('restartQuiz');
const progressBar  = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const scoreDisplay    = document.getElementById('scoreDisplay');
const questionNumber  = document.getElementById('questionNumber');
const questionText    = document.getElementById('questionText');
const optionsGrid     = document.getElementById('optionsGrid');
const feedbackArea    = document.getElementById('feedbackArea');
const feedbackIcon    = document.getElementById('feedbackIcon');
const feedbackText    = document.getElementById('feedbackText');
const feedbackExpl    = document.getElementById('feedbackExplanation');
const finalScore      = document.getElementById('finalScore');
const resultIcon      = document.getElementById('resultIcon');
const resultTitle     = document.getElementById('resultTitle');
const resultMessage   = document.getElementById('resultMessage');
const resultBar       = document.getElementById('resultBar');

/* ─────────────────────────────────────────
   4. FUNÇÕES DO QUIZ
   ───────────────────────────────────────── */

/**
 * Exibe a tela indicada e oculta as demais.
 * @param {HTMLElement} screen – tela a exibir
 */
function showScreen(screen) {
  [quizStart, quizGame, quizResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

/**
 * Carrega a pergunta atual na tela do jogo.
 */
function loadQuestion() {
  answered = false;
  const data = quizData[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  // Atualiza número, texto e barra de progresso
  questionNumber.textContent   = String(currentQuestion + 1).padStart(2, '0');
  questionText.textContent     = data.question;
  questionCounter.textContent  = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
  scoreDisplay.textContent     = `Pontuação: ${score}`;
  progressBar.style.width      = `${(currentQuestion / quizData.length) * 100}%`;

  // Esconde feedback e gera opções
  feedbackArea.style.display = 'none';
  optionsGrid.innerHTML = '';

  data.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[idx]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(idx, btn));
    optionsGrid.appendChild(btn);
  });
}

/**
 * Processa a escolha do usuário.
 * @param {number}      idx – índice da opção clicada
 * @param {HTMLElement} btn – botão clicado
 */
function selectAnswer(idx, btn) {
  if (answered) return; // ignora cliques duplos
  answered = true;

  const correct = quizData[currentQuestion].correct;
  const isRight  = (idx === correct);

  // Destaca certo/errado em todas as opções
  const allBtns = optionsGrid.querySelectorAll('.option-btn');
  allBtns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    if (i === idx && !isRight) b.classList.add('wrong');
  });

  // Atualiza pontuação
  if (isRight) score++;
  scoreDisplay.textContent = `Pontuação: ${score}`;

  // Mostra feedback
  feedbackIcon.textContent       = isRight ? '✅' : '❌';
  feedbackText.textContent       = isRight ? 'Resposta correta! 🎉' : 'Resposta incorreta!';
  feedbackExpl.textContent       = quizData[currentQuestion].explanation;
  feedbackArea.style.display     = 'block';

  // Texto do botão de próxima pergunta
  nextBtn.textContent = (currentQuestion < quizData.length - 1) ? 'Próxima →' : 'Ver resultado 🏆';
}

/**
 * Avança para a próxima pergunta ou exibe resultado final.
 */
function goNext() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/**
 * Exibe a tela de resultado final com mensagem personalizada.
 */
function showResult() {
  showScreen(quizResult);
  finalScore.textContent = score;

  // Barra de resultado (animação com delay)
  setTimeout(() => {
    resultBar.style.width = `${(score / quizData.length) * 100}%`;
  }, 200);

  // Mensagem e ícone conforme pontuação
  if (score <= 3) {
    resultIcon.textContent   = '🌱';
    resultTitle.textContent  = 'Continue aprendendo!';
    resultMessage.textContent = 'Não desanime! O campo do futuro tem muito para te ensinar. Revise o conteúdo e tente novamente — você vai longe!';
  } else if (score <= 7) {
    resultIcon.textContent   = '🌻';
    resultTitle.textContent  = 'Você está no caminho certo!';
    resultMessage.textContent = 'Ótimo desempenho! Você já conhece bastante sobre sustentabilidade e tecnologia rural. Continue estudando para chegar ao topo!';
  } else {
    resultIcon.textContent   = '🏆';
    resultTitle.textContent  = 'Parabéns! Você é um especialista do Agrinho!';
    resultMessage.textContent = 'Incrível! Você domina os temas de agricultura sustentável e tecnologia no campo. O futuro do Brasil precisa de pessoas como você!';
  }

  // Atualiza barra de progresso para 100%
  progressBar.style.width = '100%';
  questionCounter.textContent = `Pergunta ${quizData.length} de ${quizData.length}`;
}

/**
 * Reinicia o quiz do zero.
 */
function restartQuiz() {
  currentQuestion = 0;
  score            = 0;
  answered         = false;
  progressBar.style.width  = '0%';
  resultBar.style.width    = '0%';
  showScreen(quizStart);
}

/* ─────────────────────────────────────────
   5. EVENTOS DO QUIZ
   ───────────────────────────────────────── */
startBtn.addEventListener('click', () => {
  showScreen(quizGame);
  loadQuestion();
});

nextBtn.addEventListener('click', goNext);
restartBtn.addEventListener('click', restartQuiz);

/* ─────────────────────────────────────────
   6. NAVEGAÇÃO SUAVE (Smooth Scroll)
   ───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    // Fecha o menu mobile se estiver aberto
    navLinks.classList.remove('open');

    const navHeight = navbar.offsetHeight;
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

/* ─────────────────────────────────────────
   7. NAVBAR – sticky & hamburger
   ───────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Muda estilo da navbar ao rolar
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Toggle menu mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha menu ao clicar fora
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

/* ─────────────────────────────────────────
   8. BOTÃO VOLTAR AO TOPO
   ───────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────────────────────────────
   9. ANIMAÇÕES AO ROLAR (Intersection Observer)
   ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Observa todos os elementos com classe .reveal
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ─────────────────────────────────────────
   10. CONTADORES ANIMADOS (data-banner)
   ───────────────────────────────────────── */

/**
 * Anima um número de 0 até o valor alvo.
 * @param {HTMLElement} el     – elemento span do número
 * @param {number}      target – valor final
 * @param {number}      duration – duração em ms
 */
function animateCounter(el, target, duration = 1800) {
  const start    = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(startVal + (target - startVal) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Dispara contadores quando o banner entrar na tela
const dataBanner = document.querySelector('.data-banner');
if (dataBanner) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.data-number').forEach(el => {
            animateCounter(el, parseInt(el.dataset.target, 10));
          });
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counterObserver.observe(dataBanner);
}

/* ─────────────────────────────────────────
   11. DESTAQUE DO LINK ATIVO NA NAVBAR
       (baseado na seção visível)
   ───────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.background = '';
          a.style.color = '';
          if (a.getAttribute('href') === `#${id}`) {
            a.style.background = 'var(--verde-palido)';
            a.style.color      = 'var(--verde-escuro)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

/* ─────────────────────────────────────────
   12. PARTÍCULAS DECORATIVAS NO HEADER
       (pequenas bolinhas flutuantes)
   ───────────────────────────────────────── */
function createParticles() {
  const header = document.querySelector('header');
  if (!header) return;

  const colors  = ['#81C784', '#42A5F5', '#FFD600', '#A5D6A7', '#BBDEFB'];
  const count   = window.innerWidth < 768 ? 8 : 18;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size   = Math.random() * 12 + 4; // 4–16px
    const left   = Math.random() * 100;
    const top    = Math.random() * 100;
    const dur    = Math.random() * 8 + 5;  // 5–13s
    const delay  = Math.random() * 6;
    const color  = colors[Math.floor(Math.random() * colors.length)];

    Object.assign(p.style, {
      position:        'absolute',
      width:           `${size}px`,
      height:          `${size}px`,
      background:      color,
      borderRadius:    '50%',
      left:            `${left}%`,
      top:             `${top}%`,
      opacity:         '0.18',
      pointerEvents:   'none',
      zIndex:          '0',
      animation:       `floatLeaf ${dur}s ease-in-out ${delay}s infinite`,
    });

    header.appendChild(p);
  }
}

createParticles();

/* ─────────────────────────────────────────
   13. EFEITO PARALLAX SUAVE NO HEADER
   ───────────────────────────────────────── */
const heroContent = document.querySelector('.hero-content');

if (heroContent && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.18}px)`;
      heroContent.style.opacity   = `${1 - scrollY / (window.innerHeight * 0.8)}`;
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   14. ANIMAÇÃO INICIAL – Destaque do título
   ───────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});/* =====================================================
   RAÍZES DO FUTURO – AGRINHO 2026
   script.js – Funcionalidades JavaScript
   ===================================================== */

/* ─────────────────────────────────────────
   1. DADOS DO QUIZ – 10 perguntas
   ───────────────────────────────────────── */
const quizData = [
  {
    question: "O que é agricultura de precisão?",
    options: [
      "Cultivar apenas produtos orgânicos sem uso de máquinas",
      "Usar tecnologias como GPS e sensores para otimizar o manejo de cada área da lavoura",
      "Plantar em linhas muito retas usando régua e compasso",
      "Tipo de agricultura praticada somente em pequenas propriedades"
    ],
    correct: 1,
    explanation: "A agricultura de precisão usa GPS, drones, sensores e dados para aplicar insumos somente onde e quando necessário, reduzindo desperdícios e aumentando a produtividade."
  },
  {
    question: "Qual é a principal vantagem do uso de drones na lavoura?",
    options: [
      "Substituir totalmente o trabalho dos agricultores",
      "Monitorar grandes áreas rapidamente e detectar pragas e doenças precocemente",
      "Transportar grãos colhidos até os silos",
      "Fazer a irrigação das plantações por aspersão"
    ],
    correct: 1,
    explanation: "Drones equipados com câmeras multiespectrais identificam doenças, pragas e deficiências nutricionais muito antes que o olho humano perceba, permitindo ação rápida e precisa."
  },
  {
    question: "Quanto pode reduzir o consumo de água a irrigação por gotejamento inteligente em comparação ao método tradicional?",
    options: [
      "Cerca de 5%",
      "Cerca de 20%",
      "Até 60%",
      "Apenas 10%"
    ],
    correct: 2,
    explanation: "O gotejamento inteligente, combinado com sensores de umidade no solo, pode reduzir o consumo de água em até 60%, pois a água vai diretamente às raízes, sem evaporação nem escoamento."
  },
  {
    question: "O que é energia bioelétrica (biogás) no contexto rural?",
    options: [
      "Energia gerada pela fermentação de resíduos orgânicos como dejetos animais e palha",
      "Energia captada pelo vento nas torres eólicas do campo",
      "Eletricidade gerada pela combustão de gasolina em geradores rurais",
      "Energia solar armazenada em baterias de lítio"
    ],
    correct: 0,
    explanation: "O biogás é produzido pela digestão anaeróbica de resíduos orgânicos (esterco, bagaço, palha). O gás gerado alimenta motores ou gera eletricidade, aproveitando o que seria descartado."
  },
  {
    question: "O que é o Código Florestal Brasileiro?",
    options: [
      "Lei que proíbe completamente qualquer desmatamento no Brasil",
      "Lei que regula o uso da terra, exigindo Áreas de Preservação Permanente e Reservas Legais nas propriedades rurais",
      "Regras sobre como plantar árvores frutíferas em quintais urbanos",
      "Decreto que libera a exportação de madeira nativa para outros países"
    ],
    correct: 1,
    explanation: "O Código Florestal (Lei 12.651/2012) estabelece APPs (Áreas de Preservação Permanente) e Reservas Legais nas propriedades rurais, equilibrando produção agrícola com proteção ambiental."
  },
  {
    question: "Qual é a relação entre campo e cidade no abastecimento alimentar?",
    options: [
      "A cidade produz alimentos em fazendas verticais e não depende do campo",
      "Cerca de 70% dos alimentos que chegam à mesa urbana vêm de pequenos e médios produtores rurais",
      "O campo só produz commodities para exportação, sem impacto no consumo interno",
      "O campo e a cidade não têm relação direta na questão alimentar"
    ],
    correct: 1,
    explanation: "Pequenos e médios produtores rurais respondem por grande parte dos alimentos consumidos nas cidades brasileiras, especialmente hortifrúti, leite, ovos e carnes."
  },
  {
    question: "O que significa o conceito de 'segurança alimentar'?",
    options: [
      "Utilizar agrotóxicos para garantir que a comida não tenha pragas",
      "Garantia de acesso de todas as pessoas a alimentos suficientes, saudáveis e de qualidade",
      "Código de segurança nas embalagens dos alimentos industrializados",
      "Sistema de câmeras de vigilância nos supermercados"
    ],
    correct: 1,
    explanation: "Segundo a FAO, segurança alimentar existe quando todas as pessoas têm acesso físico, social e econômico a alimentos suficientes, seguros e nutritivos, em quantidade e qualidade."
  },
  {
    question: "Como a Inteligência Artificial (IA) pode ajudar na agricultura?",
    options: [
      "Substituir completamente o produtor rural em todas as decisões",
      "Prever doenças, calcular o melhor momento de plantio e identificar deficiências nutricionais por imagens de satélite",
      "Criar novos organismos geneticamente modificados sem supervisão humana",
      "Automatizar apenas o processo de embalagem dos produtos no galpão"
    ],
    correct: 1,
    explanation: "A IA analisa dados climáticos, históricos e imagens de satélite para recomendar quando plantar, irrigar e colher, além de identificar pragas e calcular doses precisas de fertilizantes."
  },
  {
    question: "O que é agrofloresta (sistemas agroflorestais)?",
    options: [
      "Técnica de plantar somente florestas de eucalipto para celulose",
      "Sistema que integra árvores, culturas agrícolas e/ou animais na mesma área, beneficiando todos os componentes",
      "Método de desmatar e plantar soja em seguida para máxima produção",
      "Tipo de estufa para cultivar plantas em ambiente controlado"
    ],
    correct: 1,
    explanation: "A agrofloresta combina árvores com culturas e/ou animais, imitando a natureza. Ela melhora o solo, conserva a água, aumenta a biodiversidade e produz alimentos — tudo ao mesmo tempo."
  },
  {
    question: "Qual é um dos maiores desafios para alimentar 10 bilhões de pessoas em 2050?",
    options: [
      "Reduzir a produção agrícola para poupar o meio ambiente",
      "Produzir 70% mais alimentos sem expandir significativamente as áreas cultivadas e reduzir o desperdício",
      "Proibir a exportação de alimentos para garantir abastecimento interno",
      "Importar toda a produção alimentar de outros continentes"
    ],
    correct: 1,
    explanation: "A FAO estima que precisaremos de 70% mais alimentos até 2050. A solução passa por aumentar produtividade com tecnologia, reduzir o desperdício (hoje 1/3 do alimento se perde) e distribuir melhor."
  }
];

/* ─────────────────────────────────────────
   2. ESTADO DO QUIZ
   ───────────────────────────────────────── */
let currentQuestion = 0; // índice da pergunta atual
let score = 0;           // pontuação acumulada
let answered = false;    // se a pergunta atual já foi respondida

/* ─────────────────────────────────────────
   3. ELEMENTOS DO DOM – QUIZ
   ───────────────────────────────────────── */
const quizStart    = document.getElementById('quizStart');
const quizGame     = document.getElementById('quizGame');
const quizResult   = document.getElementById('quizResult');
const startBtn     = document.getElementById('startQuiz');
const nextBtn      = document.getElementById('nextQuestion');
const restartBtn   = document.getElementById('restartQuiz');
const progressBar  = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const scoreDisplay    = document.getElementById('scoreDisplay');
const questionNumber  = document.getElementById('questionNumber');
const questionText    = document.getElementById('questionText');
const optionsGrid     = document.getElementById('optionsGrid');
const feedbackArea    = document.getElementById('feedbackArea');
const feedbackIcon    = document.getElementById('feedbackIcon');
const feedbackText    = document.getElementById('feedbackText');
const feedbackExpl    = document.getElementById('feedbackExplanation');
const finalScore      = document.getElementById('finalScore');
const resultIcon      = document.getElementById('resultIcon');
const resultTitle     = document.getElementById('resultTitle');
const resultMessage   = document.getElementById('resultMessage');
const resultBar       = document.getElementById('resultBar');

/* ─────────────────────────────────────────
   4. FUNÇÕES DO QUIZ
   ───────────────────────────────────────── */

/**
 * Exibe a tela indicada e oculta as demais.
 * @param {HTMLElement} screen – tela a exibir
 */
function showScreen(screen) {
  [quizStart, quizGame, quizResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

/**
 * Carrega a pergunta atual na tela do jogo.
 */
function loadQuestion() {
  answered = false;
  const data = quizData[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  // Atualiza número, texto e barra de progresso
  questionNumber.textContent   = String(currentQuestion + 1).padStart(2, '0');
  questionText.textContent     = data.question;
  questionCounter.textContent  = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
  scoreDisplay.textContent     = `Pontuação: ${score}`;
  progressBar.style.width      = `${(currentQuestion / quizData.length) * 100}%`;

  // Esconde feedback e gera opções
  feedbackArea.style.display = 'none';
  optionsGrid.innerHTML = '';

  data.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[idx]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(idx, btn));
    optionsGrid.appendChild(btn);
  });
}

/**
 * Processa a escolha do usuário.
 * @param {number}      idx – índice da opção clicada
 * @param {HTMLElement} btn – botão clicado
 */
function selectAnswer(idx, btn) {
  if (answered) return; // ignora cliques duplos
  answered = true;

  const correct = quizData[currentQuestion].correct;
  const isRight  = (idx === correct);

  // Destaca certo/errado em todas as opções
  const allBtns = optionsGrid.querySelectorAll('.option-btn');
  allBtns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    if (i === idx && !isRight) b.classList.add('wrong');
  });

  // Atualiza pontuação
  if (isRight) score++;
  scoreDisplay.textContent = `Pontuação: ${score}`;

  // Mostra feedback
  feedbackIcon.textContent       = isRight ? '✅' : '❌';
  feedbackText.textContent       = isRight ? 'Resposta correta! 🎉' : 'Resposta incorreta!';
  feedbackExpl.textContent       = quizData[currentQuestion].explanation;
  feedbackArea.style.display     = 'block';

  // Texto do botão de próxima pergunta
  nextBtn.textContent = (currentQuestion < quizData.length - 1) ? 'Próxima →' : 'Ver resultado 🏆';
}

/**
 * Avança para a próxima pergunta ou exibe resultado final.
 */
function goNext() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/**
 * Exibe a tela de resultado final com mensagem personalizada.
 */
function showResult() {
  showScreen(quizResult);
  finalScore.textContent = score;

  // Barra de resultado (animação com delay)
  setTimeout(() => {
    resultBar.style.width = `${(score / quizData.length) * 100}%`;
  }, 200);

  // Mensagem e ícone conforme pontuação
  if (score <= 3) {
    resultIcon.textContent   = '🌱';
    resultTitle.textContent  = 'Continue aprendendo!';
    resultMessage.textContent = 'Não desanime! O campo do futuro tem muito para te ensinar. Revise o conteúdo e tente novamente — você vai longe!';
  } else if (score <= 7) {
    resultIcon.textContent   = '🌻';
    resultTitle.textContent  = 'Você está no caminho certo!';
    resultMessage.textContent = 'Ótimo desempenho! Você já conhece bastante sobre sustentabilidade e tecnologia rural. Continue estudando para chegar ao topo!';
  } else {
    resultIcon.textContent   = '🏆';
    resultTitle.textContent  = 'Parabéns! Você é um especialista do Agrinho!';
    resultMessage.textContent = 'Incrível! Você domina os temas de agricultura sustentável e tecnologia no campo. O futuro do Brasil precisa de pessoas como você!';
  }

  // Atualiza barra de progresso para 100%
  progressBar.style.width = '100%';
  questionCounter.textContent = `Pergunta ${quizData.length} de ${quizData.length}`;
}

/**
 * Reinicia o quiz do zero.
 */
function restartQuiz() {
  currentQuestion = 0;
  score            = 0;
  answered         = false;
  progressBar.style.width  = '0%';
  resultBar.style.width    = '0%';
  showScreen(quizStart);
}

/* ─────────────────────────────────────────
   5. EVENTOS DO QUIZ
   ───────────────────────────────────────── */
startBtn.addEventListener('click', () => {
  showScreen(quizGame);
  loadQuestion();
});

nextBtn.addEventListener('click', goNext);
restartBtn.addEventListener('click', restartQuiz);

/* ─────────────────────────────────────────
   6. NAVEGAÇÃO SUAVE (Smooth Scroll)
   ───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    // Fecha o menu mobile se estiver aberto
    navLinks.classList.remove('open');

    const navHeight = navbar.offsetHeight;
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

/* ─────────────────────────────────────────
   7. NAVBAR – sticky & hamburger
   ───────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Muda estilo da navbar ao rolar
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Toggle menu mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha menu ao clicar fora
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

/* ─────────────────────────────────────────
   8. BOTÃO VOLTAR AO TOPO
   ───────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────────────────────────────
   9. ANIMAÇÕES AO ROLAR (Intersection Observer)
   ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Observa todos os elementos com classe .reveal
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ─────────────────────────────────────────
   10. CONTADORES ANIMADOS (data-banner)
   ───────────────────────────────────────── */

/**
 * Anima um número de 0 até o valor alvo.
 * @param {HTMLElement} el     – elemento span do número
 * @param {number}      target – valor final
 * @param {number}      duration – duração em ms
 */
function animateCounter(el, target, duration = 1800) {
  const start    = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(startVal + (target - startVal) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Dispara contadores quando o banner entrar na tela
const dataBanner = document.querySelector('.data-banner');
if (dataBanner) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.data-number').forEach(el => {
            animateCounter(el, parseInt(el.dataset.target, 10));
          });
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counterObserver.observe(dataBanner);
}

/* ─────────────────────────────────────────
   11. DESTAQUE DO LINK ATIVO NA NAVBAR
       (baseado na seção visível)
   ───────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.background = '';
          a.style.color = '';
          if (a.getAttribute('href') === `#${id}`) {
            a.style.background = 'var(--verde-palido)';
            a.style.color      = 'var(--verde-escuro)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

/* ─────────────────────────────────────────
   12. PARTÍCULAS DECORATIVAS NO HEADER
       (pequenas bolinhas flutuantes)
   ───────────────────────────────────────── */
function createParticles() {
  const header = document.querySelector('header');
  if (!header) return;

  const colors  = ['#81C784', '#42A5F5', '#FFD600', '#A5D6A7', '#BBDEFB'];
  const count   = window.innerWidth < 768 ? 8 : 18;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size   = Math.random() * 12 + 4; // 4–16px
    const left   = Math.random() * 100;
    const top    = Math.random() * 100;
    const dur    = Math.random() * 8 + 5;  // 5–13s
    const delay  = Math.random() * 6;
    const color  = colors[Math.floor(Math.random() * colors.length)];

    Object.assign(p.style, {
      position:        'absolute',
      width:           `${size}px`,
      height:          `${size}px`,
      background:      color,
      borderRadius:    '50%',
      left:            `${left}%`,
      top:             `${top}%`,
      opacity:         '0.18',
      pointerEvents:   'none',
      zIndex:          '0',
      animation:       `floatLeaf ${dur}s ease-in-out ${delay}s infinite`,
    });

    header.appendChild(p);
  }
}

createParticles();

/* ─────────────────────────────────────────
   13. EFEITO PARALLAX SUAVE NO HEADER
   ───────────────────────────────────────── */
const heroContent = document.querySelector('.hero-content');

if (heroContent && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.18}px)`;
      heroContent.style.opacity   = `${1 - scrollY / (window.innerHeight * 0.8)}`;
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   14. ANIMAÇÃO INICIAL – Destaque do título
   ───────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
