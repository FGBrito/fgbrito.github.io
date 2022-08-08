let lang = true;

const configs = {
  language: [
    'EN',
    'BR'
  ],
  webDevelop: [
    'Web develop - ',
    'Desenvolvedor Web - ',
  ],
  webPlatform: [
    'Web Platform',
    'Plataforma Web',
  ],
  backPlatform: [
    'Backend',
    'Backend',
  ],
  operations: [
    'Operations',
    'Operações',
  ],
  about: [
    'About',
    'Sobre'
  ],
  projects: [
    'Projects',
    'Projetos'
  ],
  description: [
    'Web Software Developer, with expertise in Angular working with @nodejs stack, enthusiast Open Source and Free Software.',
    'Desenvolvedor de Software Web, com expertise em Angular trabalhando com @nodejs stack, entusiasta em Open Source e Software Livre.',
  ],
  experience: [
    'Experience',
    'Experiência'
  ],
  startDateJune: [
    'June 2015',
    'Junho de 2015'
  ],
  endDateApril: [
    'April 2022',
    'até Abril de 2022'
  ],
  descriptionBusinessTwo: [
    'Brisanet is the 9th largest internet provider in Brazil.',
    'A Brisanet é a 9ª maior provedora de internet do Brasil.'
  ],
  descriptionBusinessTwoRef1: [
    'Works with a highly trained team to deliver incredible products.',
    'Trabalho com uma equipe altamente treinada para entregar produtos incríveis.'
  ],
  descriptionBusinessTwoRef2: [
    'Serves as a developer for Javascript and all web technologies.',
    'Trabalho como desenvolvedor Javascript (AngularJS, Angular) e com as todas tecnologias da web.'
  ],
  descriptionBusinessTwoRef3: [
    'Expert in version control, code review and CI.',
    'Especialista em controle de versão, revisão de código e CI.'
  ],
  startDateMay: [
    'May 2022',
    'Maio de 2022'
  ],
  endDateMay: [
    'present',
    'até o momento'
  ],
  descriptionBusinessThree: [
    'Framework Digital through a strategic and continuous vision in digital transformation, we operate in diagnosing problems and generating business opportunities with the development and support of digital solutions in medium and long-term national and international partnerships.',
    'A Framework Digital com uma visão estratégica do mercado tech, mobilizamos squads de TI que atuam desde o diagnóstico de problemas até a geração de oportunidades de negócio. Dessa forma, desenvolvemos e sustentamos soluções digitais em parcerias nacionais e internacionais.'
  ],
  descriptionBusinessThreeRef1: [
    'Works with a highly trained team to deliver incredible products.',
    'Trabalho com uma equipe altamente treinada para entregar produtos incríveis.'
  ],
  descriptionBusinessThreeRef2: [
    'Serves as a developer for Javascript and all web technologies.',
    'Trabalho como desenvolvedor Javascript (Angular) e com as todas tecnologias da web.'
  ],
  descriptionBusinessThreeRef3: [
    'Expert in version control, code review and CI.',
    'Especialista em controle de versão, revisão de código e CI.'
  ],
  skills: [
    'Skills',
    'Habilidades'
  ],
  talent1: [
    'Web Platform',
    'Plataforma Web'
  ],
  talent2: [
    'Backend',
    'Backend'
  ],
  talent3: [
    'Operations',
    'Operações'
  ],
  talent4: [
    'Tooling',
    'Ferramentas'
  ],
  talentDescribeOne: [
    'Accessibility (ARIA).',
    'Acessibilidade (ARIA).'
  ],
  talentDescribeTwo: [
    'Servers (Apache, Nginx).',
    'Servidores (Apache, Nginx).'
  ],
  talentDescribeThree: [
    'Databases (Postgres, MongoDB).',
    'Bancos de Dados (Postgres, MongoDB).'
  ],
  talentDescribeFour: [
    'Version Control (Git preferred).',
    'Controle de Versão (Git preferido).'
  ],
  talentDescribeFive: [
    'Tracking (GitHub, Jira, Gitlab).',
    'Rastreamento (GitHub, Jira, Gitlab).'
  ],
  talentDescribeSix: [
    'Editors (VSCode, Sublime, Atom).',
    'Editores (VSCode, Sublime, Atom).'
  ],
  formation: [
    'Education',
    'Educação'
  ],
  roleName: [
    'Bachelor of Information Systems, ',
    'Bacharelado em Sistemas de Informação, '
  ],
  graduatedDate: [
    'Expected completion 2022 · Majoring in Bachelor of Information Systems. ',
    'Conclusão prevista para 2022 · Graduação em Bacharelado em Sistemas de Informação.'
  ],
  skillsDescritption: [
    'Expert in analyze, design, implement and update web systems.',
    'Especialista em análise, design, implementação e atualização de sistemas web.'
  ],
  instituteName: [
    'Federal Institute of Education, Science and Technology of Ceará.',
    'Instituto Federal de Educação, Ciência e Tecnologia do Ceará'
  ],
  descriptionOpenSource: [
    'With experience in open source projects and privates, I already contributes to community and private companies projects.',
    'Com experiência em projetos open source e privados, eu já contribui para projetos da comunide e de empresas privadas.'
  ],
  descriptionOpenSourceTwo: [
    'A simple angular component library built based on the experience gained in web development, made to simplify the construction of administrative software.',
    'Uma simples biblioteca de componentes angular construída com base na experiencia obitida no desenvolvimento web, feita para simplificar a contrução de softwares adiministrativos.'
  ],
  descriptionOpenSourceTwoRef1: [
    'Nice interface.',
    'Interface agradável.',
  ],
  descriptionOpenSourceTwoRef2: [
    'High performance modular components.',
    'Componentes modulares de alta performance.',
  ],
  descriptionOpenSourceTwoRef3: [
    'Highly customizable.',
    'Altamente customizável.',
  ],
  inDevelop: [
    "developing",
    "em desenvolvimento",
  ]
};

const createState = function (state) {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      return render();
    }
  });
};

const state = createState({ configs });

const loopKeys = function (nextFunc) { Object.keys(configs).forEach(nextFunc); };

const render = function () {
  loopKeys(function (key) {
    const els = document.querySelectorAll('[data-binding="' + key + '"]');
    if (els && els.length) {
      els.forEach((el) => {
        if (el) {
          el.innerHTML = state[key]
        }
      });
    }
  });
};

const changeLang = function () {
  lang = !lang;
  loopKeys(function (key) { state[key] = configs[key][Number(lang)]; });
};

changeLang();

document.addEventListener('keyup', (evt) => {
  if (evt.ctrlKey) {
    if (evt.code === 'IntlRo' || evt.keyCode === 193 || evt.key === '/') {
      changeLang();
    }
  }
});

