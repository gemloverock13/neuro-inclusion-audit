/* ============================================================
   Brain in Hand - Neurodivergent Employee Experience Audit
   Questions, scoring & results logic
   ============================================================ */

const SECTIONS = [
  {
    id: 'belonging',
    name: 'Visibility & belonging',
    color: '#8E3CCE',
    questions: [
      {
        text: 'How confident are you that neurodivergent employees feel they genuinely belong in your organisation?',
        options: [
          'We have no idea - we have never asked',
          'We suspect many feel like they have to mask or hide who they are',
          'Some feel included but it varies significantly by team or manager',
          'We have strong evidence that ND employees feel valued and visible'
        ]
      },
      {
        text: 'How openly can neurodivergent employees talk about their condition at work without fear of judgement?',
        options: [
          'Disclosure feels risky - there is no psychological safety around this',
          'A few individuals feel safe but it is not the norm',
          'Many feel able to disclose but not everyone',
          'Our culture makes it genuinely safe to be open about neurodivergence'
        ]
      },
      {
        text: 'How well does your organisation celebrate neurodivergent strengths - not just manage difficulties?',
        options: [
          'We only discuss neurodiversity in the context of problems or adjustments',
          'We acknowledge it occasionally but do not actively celebrate it',
          'We try to recognise strengths but it is not consistent',
          'We actively recognise and leverage the strengths ND employees bring'
        ]
      }
    ]
  },
  {
    id: 'daily',
    name: 'Day-to-day working life',
    color: '#7EDEC8',
    questions: [
      {
        text: 'How well can your neurodivergent employees manage their workload and daily demands without becoming overwhelmed?',
        options: [
          'Many struggle significantly and we are aware of this',
          'Some cope but we know others find it very hard',
          'Most manage reasonably well but support is reactive',
          'We proactively help ND employees structure their work in ways that work for them'
        ]
      },
      {
        text: 'How easy is it for neurodivergent employees to adapt their working environment to suit their needs?',
        options: [
          'They are expected to work the same way as everyone else',
          'They can ask for changes but the process is slow or difficult',
          'Reasonable adjustments are available and reasonably accessible',
          'Employees have genuine autonomy to shape how and where they work'
        ]
      },
      {
        text: 'How confident are you that neurodivergent employees are not burning out trying to mask or cope alone?',
        options: [
          'We have real concerns about this but feel unsure how to address it',
          'We suspect some are struggling but we do not have visibility',
          'We check in but our insight is limited to what people tell us directly',
          'We have good visibility and early warning systems to spot when people are struggling'
        ]
      }
    ]
  },
  {
    id: 'needs',
    name: 'Understanding their needs',
    color: '#FFC962',
    questions: [
      {
        text: 'How well supported are your neurodivergent employees in understanding their own support needs at work?',
        options: [
          'They are largely left to figure it out themselves',
          'Some have received guidance but most have not',
          'We signpost resources but do not actively support self-awareness',
          'We actively help ND employees understand what works for them and why'
        ]
      },
      {
        text: 'How easy is it for neurodivergent employees to communicate what they need in a way that gets results?',
        options: [
          'Many struggle to articulate their needs and do not know how to ask',
          'Some can advocate for themselves but others cannot',
          'Most can ask for what they need but the response is inconsistent',
          'Employees have clear, low-barrier ways to communicate needs and know they will be heard'
        ]
      },
      {
        text: 'How prepared are your neurodivergent employees to manage difficult or unpredictable situations at work?',
        options: [
          'They are largely unprepared and we see this causing problems',
          'Some are resilient but others are frequently derailed',
          'Most cope reasonably well but we have limited visibility',
          'We help ND employees build strategies and tools to navigate uncertainty'
        ]
      }
    ]
  },
  {
    id: 'managers',
    name: 'Manager relationships',
    color: '#EAC1FF',
    questions: [
      {
        text: 'How confident are your neurodivergent employees that their line manager actually understands their needs?',
        options: [
          'Most managers have little understanding - we hear this from employees',
          'Understanding varies hugely depending on the manager',
          'Most managers have a basic awareness but lack depth',
          'Our managers are trained, confident and trusted by their ND team members'
        ]
      },
      {
        text: 'How easy is it for neurodivergent employees to have honest conversations with their manager about how they are really doing?',
        options: [
          'These conversations rarely happen - the relationship does not feel safe',
          'Some employees have this with their manager, many do not',
          'Most have reasonably open relationships but not all',
          'Honest check-ins are the norm and managers know how to create that space'
        ]
      },
      {
        text: 'How consistently do managers follow through on support they agree to provide to neurodivergent employees?',
        options: [
          'Follow-through is poor - commitments are often forgotten or deprioritised',
          'It depends entirely on the individual manager',
          'Most managers follow through but it is not tracked or accountable',
          'Support commitments are documented, reviewed and owned'
        ]
      }
    ]
  },
  {
    id: 'support',
    name: 'Getting support',
    color: '#8E3CCE',
    questions: [
      {
        text: 'How quickly can a neurodivergent employee get meaningful support when they are struggling?',
        options: [
          'There is no clear route - they would not know where to turn',
          'There is a route but it is slow, unclear or stigmatised',
          'Support is available but can take time or require persistence',
          'Support is fast, clear and low-barrier - employees know exactly what to do'
        ]
      },
      {
        text: 'How well does your organisation support neurodivergent employees in the moment - not just in formal reviews?',
        options: [
          'We have no in-the-moment support - everything is formal or retrospective',
          'There are some informal channels but nothing structured',
          'Managers try to check in but it is inconsistent',
          'Employees have access to support tools and people they can turn to in real time'
        ]
      },
      {
        text: 'How confident are your neurodivergent employees that asking for help will not be held against them?',
        options: [
          'We have real concerns that asking for help feels risky',
          'Some trust the system but others do not',
          'Most feel reasonably safe asking but it is not universal',
          'Our culture makes asking for help a sign of strength, not weakness'
        ]
      }
    ]
  },
  {
    id: 'thriving',
    name: 'Staying & thriving',
    color: '#7EDEC8',
    questions: [
      {
        text: 'How well are your neurodivergent employees progressing and developing in their careers?',
        options: [
          'We suspect ND employees are held back but have not examined this',
          'We have anecdotal concerns but no data',
          'We try to support career development but it is not ND-specific',
          'We actively track and support the career progression of ND employees'
        ]
      },
      {
        text: 'How confident are you that neurodivergent employees are not leaving because of poor support?',
        options: [
          'We believe this is happening and it is a problem we have not addressed',
          'We suspect it is a factor but lack the data to be sure',
          'We try to gather exit data but it is hard to attribute',
          'We actively monitor retention of ND employees and act on what we find'
        ]
      },
      {
        text: 'Overall, how would you honestly rate the lived experience of neurodivergent employees in your organisation?',
        options: [
          'Poor - we know they are not well supported and we need to do much more',
          'Mixed - some do well but many are not getting what they need',
          'Reasonable - but we know there are gaps we have not yet addressed',
          'Strong - and we have evidence to back that up'
        ]
      }
    ]
  }
];

const RECOMMENDATIONS = {
  belonging: {
    title: 'Make your workplace genuinely safe to be neurodivergent',
    body: 'Psychological safety does not happen by accident. If ND employees are masking or staying silent, it signals a cultural problem that policies alone will not fix. Brain in Hand helps employees feel seen and supported on their own terms - not just on paper.'
  },
  daily: {
    title: 'Give ND employees real tools for their day-to-day working life',
    body: 'Struggling in silence is exhausting and unsustainable. ND employees need practical, personalised tools to manage their workload, environment and energy - not just reactive adjustments when things go wrong. Brain in Hand provides that daily structure.'
  },
  needs: {
    title: 'Support employees to understand and communicate their own needs',
    body: 'Many neurodivergent people have never been supported to articulate what they need at work. Brain in Hand helps individuals build that self-awareness and gives them a clear, confident way to communicate it to their employer.'
  },
  managers: {
    title: 'Build genuine manager capability - not just awareness',
    body: 'A one-day awareness session is not enough. Managers need ongoing, practical support to hold meaningful conversations with ND team members and follow through consistently. Brain in Hand bridges the gap between manager and employee.'
  },
  support: {
    title: 'Create fast, stigma-free routes to support',
    body: 'When support is slow, unclear or feels risky to ask for, ND employees cope alone until they cannot. Brain in Hand provides in-the-moment support tools that sit alongside - not instead of - your existing HR processes.'
  },
  thriving: {
    title: 'Track whether ND employees are actually staying and progressing',
    body: 'Inclusion is not just about onboarding - it is about whether people can build a career. If you are losing ND employees or they are being overlooked for development, Brain in Hand helps you understand why and what to do about it.'
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

  document.getElementById('section-tag').textContent = q.sectionName;
  document.getElementById('q-count').textContent = (idx + 1) + ' of ' + total;
  document.getElementById('progress-fill').style.width = Math.round((idx / total) * 100) + '%';
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
  if (score < 25) return {
    label: 'Significant gaps',
    bg: '#A32D2D',
    summary: 'The honest picture is that your neurodivergent employees are likely struggling in ways that are not visible to you. There is meaningful work to do - and focused action makes a real difference quickly.'
  };
  if (score < 50) return {
    label: 'Some foundations',
    bg: '#854F0B',
    summary: 'You have good intentions and some things are working, but ND employees\' day-to-day experience is likely inconsistent. Closing these gaps will improve retention, performance and wellbeing significantly.'
  };
  if (score < 75) return {
    label: 'Making progress',
    bg: '#0F6E56',
    summary: 'There is genuine commitment here and some strong practice. The focus now is on consistency - making sure every ND employee gets a good experience, not just those who are visible or vocal.'
  };
  return {
    label: 'Strong practice',
    bg: '#533AB7',
    summary: 'Your organisation is doing well by its neurodivergent employees. The opportunity is to deepen that, share what is working, and make your approach a genuine competitive advantage in attracting ND talent.'
  };
}

function renderResults(overall, sectionPcts) {
  const maturity = getMaturity(overall);
  const sortedSections = [...SECTIONS].sort((a, b) => sectionPcts[a.id] - sectionPcts[b.id]);

  let html = `
    <div class="score-hero">
      <div class="score-number">${overall}%</div>
      <span class="maturity-badge" style="background:${maturity.bg};color:#fff">${maturity.label}</span>
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
      <h3>Ready to make a real difference?</h3>
      <p>Brain in Hand supports neurodivergent employees with the day-to-day tools, self-awareness and in-the-moment help they need to thrive at work - and gives employers the visibility to know it is working.</p>
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
