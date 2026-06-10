/* ============================================================
   Brain in Hand — Neuro-Inclusion Audit Tool
   Audit logic, scoring & results
   ============================================================ */

const SECTIONS = [
  {
    id: 'culture',
    name: 'Culture & awareness',
    color: '#8E3CCE',
    questions: [
      {
        text: 'How well does your organisation understand the range of neurodivergent conditions (e.g. ADHD, autism, dyslexia, dyspraxia, dyscalculia)?',
        options: [
          'We have no formal understanding — it\'s not on our radar',
          'Some individuals are aware but it isn\'t an organisational priority',
          'There is general awareness but no structured approach',
          'We have training programmes and a clear organisational understanding'
        ]
      },
      {
        text: 'How visible is neurodiversity as a topic in your workplace culture?',
        options: [
          'It is never discussed',
          'It occasionally comes up informally',
          'It is discussed during awareness events (e.g. Neurodiversity Celebration Week)',
          'It is embedded in our culture year-round with active networks or champions'
        ]
      },
      {
        text: 'How does your leadership talk about neurodiversity?',
        options: [
          'It is not mentioned by leaders',
          'Leaders acknowledge it only when required to',
          'Leaders are broadly supportive but not outspoken',
          'Leaders actively champion it and share personal commitments'
        ]
      }
    ]
  },
  {
    id: 'recruitment',
    name: 'Recruitment & onboarding',
    color: '#7EDEC8',
    questions: [
      {
        text: 'How accessible is your recruitment process for neurodivergent candidates?',
        options: [
          'We have not considered this',
          'We offer adjustments only if a candidate asks',
          'We proactively offer adjustments at each stage',
          'Our entire process is designed with neuro-inclusion from the start'
        ]
      },
      {
        text: 'How are your job descriptions written?',
        options: [
          'They use complex language and long lists of requirements',
          'We try to keep them clear but have no formal standard',
          'We use plain language and review for accessibility',
          'They are co-created with neurodiverse input and regularly reviewed'
        ]
      },
      {
        text: 'How does your onboarding process support neurodivergent new starters?',
        options: [
          'It is the same for everyone with no flexibility',
          'Adjustments are made if a new starter discloses a need',
          'We have a structured check-in process to identify support needs early',
          'Onboarding is personalised and proactively designed to be inclusive'
        ]
      }
    ]
  },
  {
    id: 'management',
    name: 'Management practices',
    color: '#FFC962',
    questions: [
      {
        text: 'How equipped are your line managers to support neurodivergent employees?',
        options: [
          'They have no specific training on this',
          'Some managers have sought training independently',
          'We provide general neurodiversity awareness training to managers',
          'Managers receive structured, ongoing training and access to specialist support'
        ]
      },
      {
        text: 'How are performance standards and expectations communicated to employees?',
        options: [
          'Verbally and inconsistently',
          'In writing but not always clearly',
          'In clear written formats with check-ins to confirm understanding',
          'Tailored to the individual, with multiple formats and regular review'
        ]
      },
      {
        text: 'How do managers respond when an employee discloses a neurodivergent condition?',
        options: [
          'There is no standard approach — it varies by manager',
          'Managers try to help but often don\'t know what to do',
          'There is a process in place and managers follow it',
          'Managers are confident, trained, and have a clear support pathway to follow'
        ]
      }
    ]
  },
  {
    id: 'environment',
    name: 'Environment & flexibility',
    color: '#EAC1FF',
    questions: [
      {
        text: 'How well does your physical workplace accommodate sensory differences?',
        options: [
          'We have not considered sensory needs',
          'We have some flexibility (e.g. remote working) but nothing specific in the office',
          'We have quiet spaces and some sensory considerations in place',
          'Sensory needs are a core part of our workspace design strategy'
        ]
      },
      {
        text: 'How flexible is your organisation around where and when people work?',
        options: [
          'We expect everyone in the office, fixed hours',
          'Some flexibility exists but it is not consistently available',
          'Flexible working is available for those who request it',
          'Flexible working is the norm and actively encouraged for all'
        ]
      },
      {
        text: 'What tools or technology do you provide to support neurodivergent employees?',
        options: [
          'Standard tools only — no additional provision',
          'Additional tools are available but only if requested',
          'We have a list of assistive tools available and communicate this',
          'We proactively assess needs and fund tools as standard practice'
        ]
      }
    ]
  },
  {
    id: 'policies',
    name: 'Policies & adjustments',
    color: '#8E3CCE',
    questions: [
      {
        text: 'How does your organisation approach reasonable adjustments for neurodivergent employees?',
        options: [
          'We are unaware of our legal obligations',
          'We make adjustments reactively when issues arise',
          'We have a process but it can be slow or inconsistent',
          'We have a fast, well-communicated and proactive adjustments process'
        ]
      },
      {
        text: 'Are neuro-inclusion considerations embedded in your HR policies?',
        options: [
          'No — policies are not reviewed with this lens',
          'Some policies mention disability but not neurodiversity specifically',
          'Neurodiversity is referenced in key policies',
          'All people policies are reviewed through a neuro-inclusion framework'
        ]
      },
      {
        text: 'How do you measure the impact of adjustments you put in place?',
        options: [
          'We do not measure this',
          'We check in informally after an adjustment is made',
          'We have a review process to assess whether adjustments are working',
          'We gather data and use it to improve our approach organisation-wide'
        ]
      }
    ]
  },
  {
    id: 'voice',
    name: 'Employee voice',
    color: '#7EDEC8',
    questions: [
      {
        text: 'How safe do neurodivergent employees feel disclosing their condition at work?',
        options: [
          'We have no sense of this — it has never been assessed',
          'We believe it is safe but have no evidence',
          'We have gathered some data through engagement surveys',
          'We have strong evidence of psychological safety and disclosure rates are tracked'
        ]
      },
      {
        text: 'How are neurodivergent employees involved in shaping workplace practices?',
        options: [
          'They are not specifically included in this way',
          'We welcome feedback but do not actively seek it',
          'We have some mechanisms (e.g. surveys) to gather their input',
          'Neurodivergent employees co-design and review our policies and practices'
        ]
      },
      {
        text: 'What does your organisation do with feedback from neurodivergent employees?',
        options: [
          'We do not collect it formally',
          'We collect it but action is limited',
          'Feedback informs specific improvements',
          'Feedback directly shapes strategy and there is visible accountability for change'
        ]
      }
    ]
  }
];

const RECOMMENDATIONS = {
  culture: {
    title: 'Build a baseline of neurodiversity awareness',
    body: 'Start with structured awareness training for all staff, not just managers. Create visible touchpoints — a resource hub, a lunch and learn series, or a neurodiversity network — to signal that this is a genuine priority.'
  },
  recruitment: {
    title: 'Audit and redesign your recruitment process',
    body: 'Review every stage of your hiring process for accessibility. Proactively offer adjustments, simplify job descriptions, and ensure interviewers are trained to accommodate different communication styles.'
  },
  management: {
    title: 'Invest in manager capability on neuro-inclusion',
    body: 'Line managers are the single biggest factor in an employee\'s experience. Provide structured training, clear guidance on adjustments, and access to specialist support so managers feel confident rather than uncertain.'
  },
  environment: {
    title: 'Design your environment around cognitive diversity',
    body: 'Audit your physical and digital environment. Introduce quiet spaces, flexible working as a default, and a clear toolkit of assistive technologies that all employees can access — not just those who ask.'
  },
  policies: {
    title: 'Embed neuro-inclusion into your people policies',
    body: 'Review your policies through a neuro-inclusion lens. Establish a fast, transparent adjustments process and measure outcomes — not just whether adjustments were made, but whether they\'re working.'
  },
  voice: {
    title: 'Create genuine channels for neurodivergent voices',
    body: 'Psychological safety doesn\'t happen by accident. Measure disclosure rates, gather feedback directly from neurodivergent employees, and show visible action in response. Co-design, don\'t just consult.'
  }
};

// --- State ---
let allQuestions = [];
let answers = [];
let currentIndex = 0;

function buildQuestions() {
  allQuestions = [];
  SECTIONS.forEach(section => {
    section.questions.forEach(q => {
      allQuestions.push({ ...q, sectionId: section.id, sectionName: section.name });
    });
  });
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startAudit() {
  buildQuestions();
  answers = new Array(allQuestions.length).fill(null);
  currentIndex = 0;
  renderQuestion(0);
  showScreen('screen-questions');
}

function renderQuestion(idx) {
  const q = allQuestions[idx];
  const total = allQuestions.length;
  const pct = Math.round((idx / total) * 100);

  document.getElementById('section-tag').textContent = q.sectionName;
  document.getElementById('q-count').textContent = `${idx + 1} of ${total}`;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-text').textContent = q.text;

  const container = document.getElementById('options');
  container.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[idx] === i ? ' selected' : '');
    btn.textContent = opt;
    btn.addEventListener('click', () => selectOption(i));
    container.appendChild(btn);
  });

  const nextBtn = document.getElementById('next-btn');
  nextBtn.textContent = idx === total - 1 ? 'See my results' : 'Next';
  nextBtn.classList.toggle('ready', answers[idx] !== null);
}

function selectOption(i) {
  answers[currentIndex] = i;
  document.querySelectorAll('.option-btn').forEach((btn, j) => {
    btn.classList.toggle('selected', j === i);
  });
  document.getElementById('next-btn').classList.add('ready');
}

function goNext() {
  if (answers[currentIndex] === null) return;
  if (currentIndex === allQuestions.length - 1) {
    buildResults();
  } else {
    currentIndex++;
    renderQuestion(currentIndex);
  }
}

function goBack() {
  if (currentIndex === 0) {
    showScreen('screen-intro');
  } else {
    currentIndex--;
    renderQuestion(currentIndex);
  }
}

// --- Scoring ---
function buildResults() {
  const sectionScores = {};
  SECTIONS.forEach(s => { sectionScores[s.id] = { total: 0, count: 0 }; });

  allQuestions.forEach((q, i) => {
    if (answers[i] !== null) {
      sectionScores[q.sectionId].total += answers[i];
      sectionScores[q.sectionId].count++;
    }
  });

  const sectionPcts = {};
  let overallTotal = 0, overallMax = 0;

  SECTIONS.forEach(s => {
    const sc = sectionScores[s.id];
    const pct = sc.count > 0 ? Math.round((sc.total / (sc.count * 3)) * 100) : 0;
    sectionPcts[s.id] = pct;
    overallTotal += sc.total;
    overallMax += sc.count * 3;
  });

  const overall = Math.round((overallTotal / overallMax) * 100);
  renderResults(overall, sectionPcts);
  showScreen('screen-results');
}

function getMaturity(score) {
  if (score < 25) return { label: 'Starting out', bg: '#A63232', text: '#fff', summary: 'Neuro-inclusion is largely absent from your current practices. There are significant opportunities to build awareness, processes and support structures that will benefit your whole workforce.' };
  if (score < 50) return { label: 'Developing',   bg: '#8A5F00', text: '#fff', summary: 'You have some foundations in place but neuro-inclusion is patchy across the organisation. Formalising your approach and upskilling your people will make a meaningful difference.' };
  if (score < 75) return { label: 'Progressing',  bg: '#1D7F6E', text: '#fff', summary: 'Good progress — you have visible commitments and some strong practices. The focus now is on consistency, proactivity, and embedding inclusion into everyday processes.' };
  return           { label: 'Leading',       bg: '#5B2199', text: '#fff', summary: 'Your workplace shows strong neuro-inclusive practice. The opportunity is to deepen impact, share learning across the organisation, and set the standard for others.' };
}

function renderResults(overall, sectionPcts) {
  const maturity = getMaturity(overall);

  // Sort sections to find lowest scorers for recommendations
  const sortedSections = [...SECTIONS].sort((a, b) => sectionPcts[a.id] - sectionPcts[b.id]);

  let html = `
    <div class="score-hero">
      <div class="score-number">${overall}%</div>
      <span class="maturity-badge" style="background:${maturity.bg};color:${maturity.text}">${maturity.label}</span>
      <p class="score-summary">${maturity.summary}</p>
    </div>

    <div class="pillars-grid">
  `;

  SECTIONS.forEach(s => {
    const pct = sectionPcts[s.id];
    html += `
      <div class="pillar-card">
        <div class="pc-name">${s.name}</div>
        <div class="pc-bar-track">
          <div class="pc-bar-fill" style="width:${pct}%;background:${s.color}"></div>
        </div>
        <div class="pc-pct">${pct}%</div>
      </div>
    `;
  });

  html += `</div><h2 class="recs-heading">Your priority recommendations</h2>`;

  sortedSections.slice(0, 3).forEach((s, i) => {
    const rec = RECOMMENDATIONS[s.id];
    const isHigh = i === 0;
    html += `
      <div class="rec-card">
        <span class="rec-priority ${isHigh ? 'priority-high' : 'priority-medium'}">${isHigh ? 'High priority' : 'Worth addressing'}</span>
        <div class="rec-title">${rec.title}</div>
        <div class="rec-body">${rec.body}</div>
      </div>
    `;
  });

  html += `
    <div class="cta-card">
      <h3>Want to know how to close these gaps?</h3>
      <p>Brain in Hand gives HR teams the tools, training and frameworks to build genuinely neuro-inclusive workplaces — from day one of recruitment through to ongoing employee support.</p>
      <div class="cta-actions">
        <a href="https://braininhand.co.uk/contact" target="_blank" rel="noopener">
          <button class="btn-cta">Book a demo &rarr;</button>
        </a>
        <button class="btn-restart" onclick="restartAudit()">Retake the audit</button>
      </div>
    </div>
  `;

  document.getElementById('results-content').innerHTML = html;
}

function restartAudit() {
  answers = new Array(allQuestions.length).fill(null);
  currentIndex = 0;
  showScreen('screen-intro');
}
