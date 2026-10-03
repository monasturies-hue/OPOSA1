// ═══════════════════════════════════════════════════════════════════
// MATERIAL D'ESTUDI — Oposicions A1 Generalitat de Catalunya
// Temari oficial 2022 (part comuna 35 temes + part específica 30 temes)
// ═══════════════════════════════════════════════════════════════════
//
// COM AFEGIR O EDITAR CONTINGUT:
// Cada tema té:
//   id         → identificador únic (ex: "pc-01", "pe-fp-01")
//   part       → "comuna" | "especifica"
//   bloc       → bloc temàtic (ha de coincidir amb BLOCS de questions.js)
//   numero     → número del tema al temari oficial
//   titol      → títol oficial del temari
//   resum      → 2-3 frases de context general
//   apartats   → array d'apartats amb contingut
//   claus      → array de dades clau (terminis, %, xifres importants)
//   nota       → consell d'estudi o avís per a l'examen
//   questions  → array d'IDs de preguntes de questions.js relacionades
//
// ═══════════════════════════════════════════════════════════════════

const STUDY = [

  // ═══════════════════════════════════════════════════════
  // PART COMUNA
  // ═══════════════════════════════════════════════════════

  {
    id: "pc-01",
    part: "comuna",
    bloc: "Part Específica General",
    numero: 1,
    titol: "Bon govern. Principis ètics i de conducta dels empleats públics. Dret a una bona administració. Cartes de serveis. Govern obert. Dades obertes.",
    resum: "El bon govern i l'ètica pública constitueixen el marc de referència per a l'actuació dels empleats de la Generalitat. Les cartes de serveis i el govern obert són instruments clau per garantir la qualitat dels serveis públics i la participació ciutadana.",
    apartats: [
      {
        titol: "Principis ètics i de conducta",
        contingut: "El Codi de conducta dels empleats públics de la Generalitat estableix els valors que han de guiar l'actuació: integritat, objectivitat, transparència, eficàcia, economia i eficiència. Inclou deures com tractar la ciutadania amb respecte, exercir les funcions amb diligència i abstenir-se en casos de conflicte d'interessos."
      },
      {
        titol: "Dret a una bona administració",
        contingut: "Reconegut a l'article 30 de l'Estatut d'Autonomia de Catalunya, inclou: el dret a ser tractat de forma imparcial i equitativa, a una resolució en termini raonable, a obtenir informació sobre l'estat de tramitació dels expedients, i a la motivació de les decisions. La Carta dels Drets Fonamentals de la UE (art. 41) també el recull."
      },
      {
        titol: "Cartes de serveis",
        contingut: "Les cartes de serveis són documents que informen la ciutadania sobre els serveis prestats, els drets que els assisteixen i els compromisos de qualitat assumits per l'Administració. Regulades per la Llei 19/2014 de transparència. S'aproven per resolució del titular del departament. Els estàndards mínims de qualitat poden ser suspesos temporalment per raons excepcionals sobrevingudes."
      },
      {
        titol: "Govern obert",
        contingut: "El govern obert es basa en tres pilars: transparència (donar compte de l'activitat), participació (implicar la ciutadania en les decisions) i col·laboració (treballar conjuntament amb la societat). A Catalunya es materialitza a través del Portal de la Transparència, els processos participatius i les dades obertes (open data)."
      }
    ],
    claus: [
      { concepte: "Aprovació carta de serveis", valor: "Resolució del titular del departament" },
      { concepte: "Suspensió estàndards carta de serveis", valor: "Per resolució motivada del titular del departament en casos excepcionals" },
      { concepte: "Dret bona administració a Catalunya", valor: "Art. 30 EAC" },
    ],
    nota: "Les cartes de serveis han sortit a l'examen 871 (P.12, P.46, P.98, P.99). Distingeix bé qui aprova la carta (titular del departament) i en quins casos es pot suspendre un estàndard.",
    questions: []
  },

  {
    id: "pc-02",
    part: "comuna",
    bloc: "Administració Digital",
    numero: 2,
    titol: "Governança de les dades a l'administració digital. Característiques de les dades. L'administració digital. Model d'administració digital a Catalunya.",
    resum: "La governança de les dades és el conjunt de polítiques, processos i estàndards per gestionar les dades com un actiu estratègic. A Catalunya s'aplica la metodologia DAMA i el model d'administració digital propi.",
    apartats: [
      {
        titol: "Model de govern de les dades a Catalunya",
        contingut: "El model de govern de les dades de l'Administració de la Generalitat es basa en una adaptació de la metodologia internacional DAMA (Data Administration Management Association). Estableix un marc de gestió de les dades com a actiu estratègic, amb rols, processos i estàndards definits. (Examen 871, P.23 — resposta correcta: DAMA)."
      },
      {
        titol: "Administració digital a Catalunya",
        contingut: "El marc jurídic de l'administració digital a Catalunya es regeix per la Llei 9/2025, de 13 de novembre, de mesures de simplificació i administració digital (nova), el Decret 76/2020, de 4 d'agost, d'administració digital, i la Llei 26/2010 de règim jurídic de les AAPP catalanes. La Llei 9/2025 ha afegit l'article 40 bis a la Llei 26/2010, que regula els serveis proactius i personalitzats."
      },
      {
        titol: "Serveis proactius i personalitzats (Llei 9/2025 — NOU)",
        contingut: "L'article 40 bis de la Llei 26/2010, afegit per la Llei 9/2025 de 13 de novembre, estableix que per prestar serveis proactius i personalitzats cal el consentiment EXPRÉS I ESPECÍFIC, informat i inequívoc de la persona interessada. (Examen 871, P.40)."
      }
    ],
    claus: [
      { concepte: "Metodologia govern dades Generalitat", valor: "DAMA (Data Administration Management Association)" },
      { concepte: "Consentiment serveis proactius", valor: "Exprés i específic, informat i inequívoc (art. 40bis Llei 26/2010, afegit per Llei 9/2025)" },
      { concepte: "Decret administració digital Catalunya", valor: "Decret 76/2020, de 4 d'agost" },
    ],
    nota: "La Llei 9/2025 és normativa molt recent (novembre 2025) i va sortir directament a l'examen 871. El tribunal tenia un vocal expert en administració digital que va preguntar sobre aquesta llei publicada 6 mesos abans de l'examen.",
    questions: []
  },

  {
    id: "pc-03",
    part: "comuna",
    bloc: "Transparència",
    numero: 3,
    titol: "Transparència i accés a la informació pública: principis generals. Regulació. El portal de la transparència. Accés a la informació pública.",
    resum: "La transparència és un pilar fonamental de la democràcia moderna. A Catalunya es regula per la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern.",
    apartats: [
      {
        titol: "Llei 19/2014 de transparència",
        contingut: "La Llei 19/2014 és la norma bàsica de transparència a Catalunya. Estableix obligacions de publicitat activa (les AAPP han de publicar informació sense que ningú la demani) i regula el dret d'accés a la informació pública. S'aplica a totes les AAPP catalanes, al sector públic i als partits polítics, sindicats i organitzacions empresarials que rebin finançament públic."
      },
      {
        titol: "Portal de la transparència",
        contingut: "El Portal de la transparència ha d'incloure: l'organització institucional, el Registre de grups d'interès, les decisions i actuacions amb rellevància jurídica general, els contractes i convenis, les subvencions, els pressupostos i informes de fiscalització, i la informació estadística. (Examen 871, P.24 — resposta correcta: el Registre de grups d'interès)."
      },
      {
        titol: "Dret d'accés a la informació pública",
        contingut: "Tota persona, a títol individual o en nom d'una organització, té dret a accedir a la informació pública sense necessitat de justificar-ne la sol·licitud. L'òrgan competent ha de resoldre en el termini d'un mes (prorrogable per un mes més). La Comissió de Garantia del Dret d'Accés a la Informació Pública (GAIP) és l'òrgan independent de reclamació."
      }
    ],
    claus: [
      { concepte: "Termini resolució accés a la informació", valor: "1 mes (prorrogable 1 mes més)" },
      { concepte: "Òrgan de reclamació transparència", valor: "GAIP (Comissió de Garantia del Dret d'Accés)" },
      { concepte: "Norma de referència", valor: "Llei 19/2014, de 29 de desembre" },
    ],
    nota: "La transparència apareix en molts contextos: cartes de serveis, portal de transparència, dades obertes, accés a la informació. Distingeix bé la publicitat ACTIVA (l'AAPP publica sense que ningú ho demani) del dret d'ACCÉS (la persona ho sol·licita).",
    questions: []
  },

  {
    id: "pc-07",
    part: "comuna",
    bloc: "EAC",
    numero: 7,
    titol: "Marc constitucional. Principis. Drets i deures fonamentals. Garanties. Organització institucional. El poder judicial.",
    resum: "La Constitució espanyola de 1978 és la norma suprema de l'ordenament jurídic. Regula els drets fonamentals (Títol I), l'organització de l'Estat i el poder judicial.",
    apartats: [
      {
        titol: "LO 1/2025 — reforma del poder judicial",
        contingut: "La Llei Orgànica 1/2025, de 2 de gener, de mesures en matèria d'eficiència del servei públic de justícia, ha reconvertit els JUTJATS CONTENCIOSOS ADMINISTRATIUS en SECCIONS CONTENCIOSES ADMINISTRATIVES DELS TRIBUNALS D'INSTÀNCIA. Examen 871, P.3 — resposta correcta: c) Seccions contencioses administratives dels tribunals d'instància."
      },
      {
        titol: "LO 5/2024 — dret de defensa",
        contingut: "La Llei Orgànica 5/2024, d'11 de novembre, regula el DRET DE DEFENSA. Examen 871, P.18 — resposta correcta: c) El dret de defensa."
      },
      {
        titol: "Consell de Garanties Estatutàries",
        contingut: "Regulat per l'Estatut d'Autonomia de Catalunya, el CGE el formen juristes de reconeguda competència, 2/3 dels quals són designats a proposta del Parlament (majoria de 3/5 dels diputats) i 1/3 a proposta del Govern. (Examen 871, P.2)."
      }
    ],
    claus: [
      { concepte: "Jutjats contenciosos → convertits en", valor: "Seccions contencioses adm. dels tribunals d'instància (LO 1/2025)" },
      { concepte: "LO 5/2024 regula", valor: "El dret de defensa" },
      { concepte: "CGE: composició", valor: "2/3 proposta Parlament (majoria 3/5) + 1/3 proposta Govern" },
    ],
    nota: "La LO 1/2025 i la LO 5/2024 son lleis molt recents que van sortir directament a l'examen 871. Caldria estudiar-les específicament.",
    questions: []
  },

  {
    id: "pc-08",
    part: "comuna",
    bloc: "EAC",
    numero: 8,
    titol: "Marc estatutari. L'Estatut d'autonomia de Catalunya: naturalesa jurídica, estructura, principis rectors, drets i deures, i competències.",
    resum: "L'Estatut d'Autonomia de Catalunya és una llei orgànica de l'Estat que constitueix la norma institucional bàsica de Catalunya.",
    apartats: [
      {
        titol: "Naturalesa jurídica de l'EAC",
        contingut: "L'Estatut d'Autonomia de Catalunya té naturalesa de LLEI ORGÀNICA. (Examen 871 reserva P.31 — resposta correcta: d) Llei orgànica). Aprovat per LO 6/2006, de 19 de juliol, de reforma de l'Estatut d'autonomia de Catalunya."
      },
      {
        titol: "Competències de la Generalitat",
        contingut: "L'EAC distingeix entre: competències EXCLUSIVES (la Generalitat té la potestat legislativa, reglamentària i executiva), competències COMPARTIDES (la Generalitat exerceix la potestat legislativa en el marc dels principis bàsics de l'Estat) i competències EXECUTIVES (la Generalitat executa la legislació estatal). L'ordenació i prestació de serveis bàsics a la comunitat és una competència dels GOVERNS LOCALS. (Examen 871, P.1)."
      }
    ],
    claus: [
      { concepte: "Naturalesa jurídica EAC", valor: "Llei orgànica (LO 6/2006)" },
      { concepte: "Serveis bàsics a la comunitat", valor: "Competència dels governs locals" },
    ],
    nota: "L'Estatut és la norma fonamental de Catalunya. Memoritza la seva naturalesa (llei orgànica) i els tipus de competències.",
    questions: []
  },

  {
    id: "pc-09",
    part: "comuna",
    bloc: "EAC",
    numero: 9,
    titol: "Organització institucional de Catalunya: el Parlament, el Govern i el president. El Consell de Garanties Estatutàries.",
    resum: "Les institucions d'autogovern de Catalunya estan regulades a l'Estatut d'Autonomia i les seves lleis de desenvolupament.",
    apartats: [
      {
        titol: "Parlament de Catalunya",
        contingut: "Òrgan representatiu del poble de Catalunya. Exerceix la potestat legislativa, aprova els pressupostos, controla l'acció del Govern i elegeix el president de la Generalitat. Té entre 135 i 150 diputats (ara 135) elegits per 4 anys."
      },
      {
        titol: "Govern de la Generalitat",
        contingut: "Exerceix la funció executiva i la potestat reglamentària. Presidit pel president de la Generalitat, elegit pel Parlament. El Govern es reuneix en Consell Executiu."
      },
      {
        titol: "Consell de Garanties Estatutàries",
        contingut: "Òrgan consultiu del Parlament i del Govern en matèria de constitucionalitat i d'estatutarietat. Composició: 2/3 designats a proposta del Parlament (majoria de 3/5) + 1/3 a proposta del Govern. Mandat de 6 anys, no renovable. (Examen 871 P.2)."
      }
    ],
    claus: [
      { concepte: "CGE — composició", valor: "2/3 proposta Parlament (3/5 diputats) + 1/3 proposta Govern" },
      { concepte: "CGE — mandat", valor: "6 anys, no renovable" },
      { concepte: "Parlament — nombre de diputats", valor: "135-150 (actualment 135)" },
    ],
    nota: "El CGE ha sortit a l'examen 871 (P.2). La composició exacta (2/3 Parlament per majoria de 3/5; 1/3 Govern) és el detall que cal memoritzar.",
    questions: []
  },

  {
    id: "pc-11",
    part: "comuna",
    bloc: "EAC",
    numero: 11,
    titol: "Sector públic instrumental de la Generalitat de Catalunya. Organismes autònoms, entitats de dret públic, consorcis, societats mercantils i fundacions.",
    resum: "El sector públic instrumental és el conjunt d'ens que la Generalitat crea per a la gestió dels serveis públics i l'exercici de les seves competències, amb formes jurídiques diverses.",
    apartats: [
      {
        titol: "Consorcis",
        contingut: "Els consorcis regulats a la Llei 40/2015 (i a la legislació local i duanera) formen part del sector públic. Tenen caràcter ASSOCIATIU i naturalesa VOLUNTÀRIA. Són entitats de dret públic amb personalitat jurídica pròpia. Tenen capacitat per crear i gestionar serveis i dur a terme activitats i obres. NO es constitueixen sempre per llei: la seva creació es fa per acord entre les entitats participants. (Examen 871, P.8 — opció NO CERTA: 'Sempre es constitueixen per llei...')."
      },
      {
        titol: "Societats mercantils públiques",
        contingut: "Participades en més d'un 50% del capital per entitats del sector públic. Es regeixen pel dret privat, excepte en matèria pressupostària, comptable, de control financer i contractació. No poden tenir facultats que impliquin exercici d'autoritat pública."
      }
    ],
    claus: [
      { concepte: "Consorcis — constitució", valor: "PER ACORD (no sempre per llei). Caràcter voluntari" },
      { concepte: "Societats mercantils públiques — capital", valor: ">50% públic" },
    ],
    nota: "La P.8 de l'examen 871 preguntava quina opció sobre els consorcis NO és certa. La resposta era que 'sempre es constitueixen per llei' — FALS. Es constitueixen per acord, no per llei.",
    questions: []
  },

  {
    id: "pc-13",
    part: "comuna",
    bloc: "Procediment Administratiu",
    numero: 13,
    titol: "El concepte d'Administració pública. El principi de legalitat. Les potestats administratives. Drets i deures de les persones. Els òrgans col·legiats.",
    resum: "Els òrgans col·legiats de les AAPP catalanes estan regulats per la Llei 26/2010 de règim jurídic de les AAPP de Catalunya.",
    apartats: [
      {
        titol: "Òrgans col·legiats — constitució",
        contingut: "D'acord amb l'article 17 de la Llei 26/2010, els òrgans col·legiats queden vàlidament constituïts: en PRIMERA CONVOCATÒRIA quan hi assisteixi la majoria absoluta dels membres. En SEGONA CONVOCATÒRIA (si les normes pròpies de l'òrgan no diuen res) quan hi assisteixi 1/3 dels membres, amb un mínim de 3. (Examen 871, P.27)."
      },
      {
        titol: "Competència administrativa",
        contingut: "D'acord amb l'article 8 de la Llei 40/2015, la competència és IRRENUNCIABLE i l'han d'exercir els òrgans que la tinguin atribuïda com a pròpia, excepte en els casos de delegació o avocació. (Examen 871, P.10 — resposta correcta: c) irrenunciable)."
      }
    ],
    claus: [
      { concepte: "Òrgan col·legiat 1a convocatòria", valor: "Majoria absoluta dels membres" },
      { concepte: "Òrgan col·legiat 2a convocatòria", valor: "1/3 dels membres, mínim 3 (Llei 26/2010 art.17)" },
      { concepte: "La competència és", valor: "IRRENUNCIABLE (Llei 40/2015 art.8)" },
    ],
    nota: "L'examen 871 va preguntar la 2a convocatòria (P.27) i el caràcter de la competència (P.10). Tots dos detalls importants de normes que semblen secundàries.",
    questions: []
  },

  {
    id: "pc-16",
    part: "comuna",
    bloc: "Procediment Administratiu",
    numero: 16,
    titol: "L'acte administratiu: concepte i classes. Elements. Motivació i forma. Silenci administratiu. Eficàcia. Executivitat. Notificació i publicació. Invalidesa. Convalidació.",
    resum: "L'acte administratiu és la declaració unilateral de voluntat de l'Administració que produeix efectes jurídics sobre tercers. La seva invalidesa pot ser nul·litat de ple dret o anul·labilitat.",
    apartats: [
      {
        titol: "Nul·litat de ple dret (art. 47 Llei 39/2015)",
        contingut: "Són nuls de ple dret els actes administratius que: lesionin els drets i llibertats susceptibles d'empara constitucional; els dictats per òrgan manifestament incompetent per raó de la matèria o del territori; els de contingut impossible; els constitutius d'infracció penal o dictats com a conseqüència d'aquesta; els dictats prescindint totalment i absolutament del procediment legalment establert; els actes expressos o presumptes contraris a l'ordenament jurídic pels quals s'adquireixen facultats o drets mancats dels requisits essencials; els que la llei taxativament declari nuls. (Examen 871, P.22 — resposta correcta d: acte exprés pel qual s'atorga un dret subjectiu sense complir els requisits essencials)."
      },
      {
        titol: "Termini de notificació dels actes administratius",
        contingut: "D'acord amb la Llei 39/2015, les notificacions s'han de practicar en el termini màxim de 10 DIES HÀBILS des de la data en què s'ha dictat l'acte. L'incompliment d'aquest termini no determina per si sol la nul·litat de l'acte. (Examen 871, P.13 — PREGUNTA ANUL·LADA, però la resposta correcta prevista era a)."
      }
    ],
    claus: [
      { concepte: "Termini notificació actes", valor: "10 dies hàbils des de la data de l'acte (Llei 39/2015)" },
      { concepte: "Nul·litat — acte exprés amb dret sense requisits", valor: "Nul de ple dret (art. 47.1.f)" },
      { concepte: "Incompliment termini notificació", valor: "NO determina per si sol la nul·litat" },
    ],
    nota: "La distinció entre NULS (de ple dret) i ANUL·LABLES és fonamental. Els supòsits del 47.1 de la Llei 39/2015 s'han de memoritzar. La P.22 de l'examen 871 hi anava directament.",
    questions: []
  },

  {
    id: "pc-17",
    part: "comuna",
    bloc: "Procediment Administratiu",
    numero: 17,
    titol: "Les persones interessades en el procediment. El procediment administratiu comú. El procediment administratiu derivat de l'organització pròpia de la Generalitat.",
    resum: "El procediment administratiu comú es regula per la Llei 39/2015, i el procediment específic de la Generalitat per la Llei 26/2010.",
    apartats: [
      {
        titol: "Principi d'economia procedimental",
        contingut: "El principi d'economia procedimental permet que les qüestions incidentals plantejades durant la tramitació del procediment NO suspenguin, amb caràcter general, el procediment principal. (Examen 871, P.14 — resposta correcta: c) principi d'economia procedimental)."
      },
      {
        titol: "Procediment sancionador i ordre penal",
        contingut: "Si durant la tramitació d'un procediment sancionador es té constància que hi ha un procés penal en curs pels mateixos fets, cal la SUSPENSIÓ del procediment sancionador, atesa la prioritat de l'ordre penal (principi non bis in idem). (Examen 871, P.4 — resposta correcta: a) suspensió del procediment sancionador)."
      },
      {
        titol: "Apoderaments i representació",
        contingut: "La validesa dels apoderaments inscrits al Registre Electrònic d'Apoderaments és de 4 ANYS a comptar de la data d'inscripció. (Examen 871, P.97). D'acord amb l'art. 5.5 de la Llei 39/2015, l'òrgan competent per tramitar és qui ha d'incorporar a l'expedient l'acreditació de la condició de representant. (Examen 871 reserva P.108)."
      }
    ],
    claus: [
      { concepte: "Principi que permet no suspendre per incidents", valor: "Principi d'economia procedimental" },
      { concepte: "Procés penal + sancionador paral·lels", valor: "Cal suspendre el sancionador (prioritat penal)" },
      { concepte: "Validesa apoderaments inscrits", valor: "4 anys des de la inscripció" },
      { concepte: "Qui incorpora acreditació representant", valor: "L'òrgan competent per tramitar (art. 5.5 Llei 39/2015)" },
    ],
    nota: "La Llei 39/2015 i la Llei 26/2010 son les normes bàsiques del procediment. Les preguntes de l'examen 871 sobre procediment han estat més concretes del que s'esperava.",
    questions: []
  },

  {
    id: "pc-20",
    part: "comuna",
    bloc: "Procediment Administratiu",
    numero: 20,
    titol: "La revisió dels actes en via administrativa: la revisió d'ofici. La revocació. Els recursos administratius: objecte i classes.",
    resum: "La revisió d'ofici permet a l'Administració revisar els seus propis actes sense que hi hagi recurs. Els recursos administratius permeten la impugnació dels actes en via administrativa.",
    apartats: [
      {
        titol: "Revisió d'ofici d'actes nuls",
        contingut: "La revisió d'ofici d'actes nuls a la Generalitat de Catalunya: pot iniciar-se D'OFICI O A SOL·LICITUD d'una persona interessada. Requereix, amb caràcter PREVI a la declaració de nul·litat, el dictamen FAVORABLE de l'òrgan consultiu corresponent (Comissió Jurídica Assessora). (Examen 871, P.15 — resposta correcta: a)."
      }
    ],
    claus: [
      { concepte: "Revisió d'ofici — qui pot iniciar", valor: "D'ofici o a sol·licitud d'interessat" },
      { concepte: "Requisit previ revisió d'ofici (nuls)", valor: "Dictamen FAVORABLE de la CJA (òrgan consultiu)" },
    ],
    nota: "Distingeix bé: la revisió d'ofici d'actes NUL·LS (requereix dictamen favorable de la CJA) dels actes ANUL·LABLES (on s'usa la declaració de lesivitat + recurs contenciós). P.15 examen 871.",
    questions: []
  },

  {
    id: "pc-22",
    part: "comuna",
    bloc: "Part Específica General",
    numero: 22,
    titol: "Avaluació de les polítiques públiques. Control de les polítiques públiques.",
    resum: "L'avaluació de les polítiques públiques és el procés sistemàtic d'anàlisi de l'eficàcia, eficiència i impacte de les intervencions públiques.",
    apartats: [
      {
        titol: "La teoria del canvi",
        contingut: "La teoria del canvi de les intervencions públiques descriu una cadena d'hipòtesis segons la qual els recursos assignats a una intervenció permeten desenvolupar activitats que produeixen determinats productes, els quals generen beneficis a curt, mitjà i llarg termini sobre la societat o la població objectiu. (Examen 871, P.9 — resposta correcta: d)."
      },
      {
        titol: "El cicle de les polítiques públiques",
        contingut: "El cicle clàssic inclou: 1) Identificació del problema, 2) Formulació de la política, 3) Adopció de la decisió, 4) Implementació, 5) Avaluació. L'avaluació pot ser ex ante (prèvia), in itinere (durant) o ex post (posterior)."
      }
    ],
    claus: [
      { concepte: "Teoria que descriu cadena recursos→activitats→productes→beneficis", valor: "Teoria del canvi de les intervencions públiques" },
    ],
    nota: "La P.9 de l'examen 871 preguntava exactament la 'teoria del canvi'. Memoritza la definició: recursos → activitats → productes → beneficis a c/m/l termini.",
    questions: []
  },

  {
    id: "pc-24",
    part: "comuna",
    bloc: "Contractació",
    numero: 24,
    titol: "La contractació pública. La classificació dels contractes. Les formes d'adjudicació. Drets i obligacions. La contractació electrònica.",
    resum: "La Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP) regula la contractació pública a Espanya. Els llindars SARA han canviat des de l'1 de gener de 2026.",
    apartats: [
      {
        titol: "Llindars SARA vigents (des de l'1/1/2026)",
        contingut: "L'Ordre HAC/1517/2025, de 18 de desembre (BOE 26/12/2025), ha modificat els llindars: Obres/concessions: 5.404.000 € (abans 5.538.000 €). Subministrament i serveis per a la Generalitat i resta d'ens: 216.000 € (abans 221.000 €). Subministrament i serveis per a l'AGE: 140.000 € (abans 143.000 €). Serveis especials Annex IV: 750.000 € (sense canvis). ATENCIÓ: l'examen 871 (juny 2026) va preguntar el llindar d'obres (P.20) i la resposta correcta era 5.538.000 € (els llindars pre-2026). La propera convocatòria previsiblement usarà els nous llindars."
      },
      {
        titol: "Publicitat dels contractes per internet",
        contingut: "Els òrgans de contractació han de donar publicitat per internet de TOTA LA DOCUMENTACIÓ necessària per licitar, no només dels anuncis. (Examen 871, P.58 — resposta correcta: d)."
      },
      {
        titol: "Contractes subvencionats",
        contingut: "Els contractes d'obres i de serveis subvencionats per poders adjudicadors estan subjectes a regulació harmonitzada quan són subvencionats de forma DIRECTA i en MÉS D'UN 50% del seu import. (Examen 871, P.57 — resposta correcta: b)."
      }
    ],
    claus: [
      { concepte: "Llindar SARA obres/concessions (des 1/1/2026)", valor: "5.404.000 €" },
      { concepte: "Llindar SARA serveis Generalitat (des 1/1/2026)", valor: "216.000 €" },
      { concepte: "Llindar SARA serveis AGE (des 1/1/2026)", valor: "140.000 €" },
      { concepte: "Llindar SARA serveis especials Annex IV", valor: "750.000 € (sense canvis)" },
      { concepte: "Contractes menors obres", valor: "≤ 40.000 €" },
      { concepte: "Contractes menors serveis/subm.", valor: "≤ 15.000 €" },
    ],
    nota: "Els llindars SARA han canviat el 01/01/2026. L'examen 871 va usar els llindars antics (5.538.000 €). Per a la propera convocatòria cal memoritzar els nous: 5.404.000 € per a obres.",
    questions: []
  },

  {
    id: "pc-29",
    part: "comuna",
    bloc: "Hisenda",
    numero: 29,
    titol: "Els pressupostos de la Generalitat de Catalunya. La Llei de finances públiques. Les lleis de pressupostos anuals. Les estructures pressupostàries. El cicle pressupostari.",
    resum: "Els pressupostos de la Generalitat es regulen per la Llei de finances públiques de Catalunya (DL 3/2002) i les lleis de pressupostos anuals.",
    apartats: [
      {
        titol: "Estructura dels ingressos — capítols",
        contingut: "L'estructura dels ingressos del pressupost de la Generalitat s'organitza per capítols: I Impostos directes, II Impostos indirectes, III Taxes i altres ingressos, IV Transferències corrents, V Ingressos patrimonials, VI Alienació d'inversions reals, VII Transferències de capital, VIII Variació d'actius financers, IX Variació de passius financers (deute públic i préstecs). (Examen 871, P.16 — resposta correcta: d) Capítol IX)."
      },
      {
        titol: "Sistema Europeu de Comptes (SEC)",
        contingut: "El SEC inclou una METODOLOGIA (Annex A) i un PROGRAMA de transmissió de dades (Annex B). No inclou només els pressupostos d'estats membres ni les despeses de tots els estats. (Examen 871, P.6 — resposta correcta: b)."
      }
    ],
    claus: [
      { concepte: "Capítol IX pressupost ingressos", valor: "Variació de PASSIUS financers (deute públic, préstecs)" },
      { concepte: "Capítol VIII pressupost ingressos", valor: "Variació d'ACTIUS financers" },
      { concepte: "SEC inclou", valor: "Una metodologia (Annex A) i un programa (Annex B)" },
    ],
    nota: "Memoritza els capítols de despeses (I-IX corrents + capital + financers) i d'ingressos. El capítol IX d'ingressos (passius financers) és el que recull el deute públic — surt sovint.",
    questions: []
  },

  {
    id: "pc-32",
    part: "comuna",
    bloc: "Funció Pública",
    numero: 32,
    titol: "Classes de personal. Ordenació dels cossos. Oferta d'ocupació pública. Accés. Reserva per a persones amb discapacitat. Gestió de RRHH. Situacions administratives. Grau personal.",
    resum: "El règim del personal de la Generalitat de Catalunya es regula principalment pel DL 1/1997 (Text únic de la Llei de funció pública) i pel TREBEP (RDL 5/2015).",
    apartats: [
      {
        titol: "Reserva per a persones amb discapacitat",
        contingut: "D'acord amb l'article 59 del TREBEP, les ofertes d'ocupació pública han de reservar un percentatge NO INFERIOR AL 7% de les vacants per a ser cobertes entre persones amb discapacitat. L'antiga reserva del 5% prevista al DL 1/1997 ha estat derogada per l'article 59 del TREBEP, que és norma bàsica estatal. (Examen 871, P.92)."
      },
      {
        titol: "Carrera professional — grau personal",
        contingut: "La consolidació del grau personal és una manifestació de la CARRERA HORITZONTAL. El grau personal es consolida per el temps de serveis en llocs de determinat nivell. (Examen 871 reserva P.110)."
      }
    ],
    claus: [
      { concepte: "Reserva discapacitat en OPO (TREBEP art.59)", valor: "No inferior al 7%" },
      { concepte: "Consolidació de grau personal", valor: "Carrera horitzontal" },
    ],
    nota: "La reserva per discapacitat és el 7% (TREBEP, norma bàsica estatal), no el 5% que deia el DL 1/1997 de la Generalitat. L'examen 871 va confirmar el 7% com a resposta correcta.",
    questions: [24]
  },

  {
    id: "pc-33",
    part: "comuna",
    bloc: "Funció Pública",
    numero: 33,
    titol: "Drets i deures del personal. Incompatibilitats. Avaluació de l'acompliment. Règim disciplinari. Les relacions laborals i els sistemes de representació a l'Administració pública.",
    resum: "El règim disciplinari del personal de la Generalitat es regula pel Decret 243/1995 i el TREBEP. Les relacions laborals col·lectives estan regulades pel TREBEP i el VI Conveni col·lectiu.",
    apartats: [
      {
        titol: "Règim disciplinari — prescripció de les faltes",
        contingut: "Prescripció de les FALTES (des de la comissió): faltes molt greus → 3 anys, faltes greus → 2 anys, faltes lleus → 6 mesos (o 1 mes a la normativa catalana). Prescripció de les SANCIONS (des de la fermesa de la resolució sancionadora, TREBEP art. 97): faltes lleus → 1 any, faltes greus → 2 anys, faltes molt greus → 3 anys."
      },
      {
        titol: "Suspensió de funcions",
        contingut: "La suspensió de funcions com a SANCIÓ no pot superar els 6 ANYS (TREBEP art. 90). (Examen 871, P.52). La suspensió PROVISIONAL durant la tramitació de l'expedient és diferent (màxim 6 mesos, prorrogable)."
      },
      {
        titol: "Incompatibilitats dels alts càrrecs",
        contingut: "L'òrgan competent per instruir i resoldre els expedients sobre declaracions d'alts càrrecs és la Secretaria d'Administració i Funció Pública (SAFP). (Examen 871, P.30). Els alts càrrecs han de formular la declaració patrimonial i d'interessos en el termini de 3 MESOS des de la presa de possessió i el cessament, i en el termini d'1 MES si hi ha variacions. (Examen 871 reserva P.32)."
      },
      {
        titol: "Crèdit hores sindicals (TREBEP art. 41)",
        contingut: "Escala de crèdit d'hores mensuals per cens de la unitat electoral: fins 100 → 15h; 101-250 → 20h; 251-500 → 30h; 501-750 → 35h; 751-1.200 → 40h. (Examen 871, P.88 — cens 1.200 persones → 40 hores)."
      }
    ],
    claus: [
      { concepte: "Prescripció sancions — lleus (des fermesa)", valor: "1 any (TREBEP art.97)" },
      { concepte: "Prescripció sancions — greus (des fermesa)", valor: "2 anys (TREBEP art.97)" },
      { concepte: "Prescripció sancions — molt greus (des fermesa)", valor: "3 anys (TREBEP art.97)" },
      { concepte: "Suspensió funcions com a sanció — durada màxima", valor: "6 anys (TREBEP art.90)" },
      { concepte: "SAFP — competència expedients alts càrrecs", valor: "Llei 13/2005 art.16" },
      { concepte: "Declaració patrimonial alts càrrecs — termini", valor: "3 mesos (presa possessió/cessament) · 1 mes (variacions)" },
      { concepte: "Crèdit hores sindicals cens 1.200", valor: "40 hores mensuals (TREBEP art.41)" },
    ],
    nota: "Molt important distingir prescripció de la FALTA (des de la comissió) i de la SANCIÓ (des de la fermesa). L'examen 871 va preguntar la prescripció de la sanció per faltes LLEUS (1 any).",
    questions: [1, 6, 7, 21]
  },

  {
    id: "pc-35",
    part: "comuna",
    bloc: "Procediment Administratiu",
    numero: 35,
    titol: "Delictes contra l'Administració pública: prevaricació, abandó de destinació, desobediència, infidelitat en custòdia de documents, suborn, tràfic d'influències, malversació, fraus, negociacions prohibides, falsedat.",
    resum: "Els delictes contra l'Administració pública estan regulats al Codi Penal (Títol XIX). Afecten funcionaris públics i autoritats.",
    apartats: [
      {
        titol: "Delicte de prevaricació",
        contingut: "El delicte de prevaricació dels funcionaris públics (art. 404 CP) consisteix en dictar una resolució injusta sabent-ho. Pot comportar pena d'inhabilitació especial per a ocupació o càrrec públic i per a l'exercici del dret de SUFRAGI PASSIU per un termini de 9 a 15 anys. (Examen 871, P.26 — resposta correcta: b)."
      }
    ],
    claus: [
      { concepte: "Prevaricació — pena", valor: "Inhabilitació especial per ocupació/càrrec públic + sufragi passiu → 9 a 15 anys" },
    ],
    nota: "La clau de la P.26 de l'examen 871 era que la pena de prevaricació inclou també la inhabilitació per al dret de SUFRAGI PASSIU, no només per a l'ocupació/càrrec.",
    questions: []
  },

  // ═══════════════════════════════════════════════════════
  // PART ESPECÍFICA — OPCIÓ GENERAL
  // ═══════════════════════════════════════════════════════

  {
    id: "pe-og-01",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 1,
    titol: "Democràcia participativa: instruments. Planificació, execució i avaluació dels processos de participació.",
    resum: "La participació ciutadana és un dret reconegut a l'EAC i es concreta en diverses formes de democràcia directa i semidirecta regulades per la Llei 10/2014.",
    apartats: [
      {
        titol: "Processos de participació ciutadana",
        contingut: "La Llei 10/2014, del 26 de setembre, de consultes populars no referendàries i d'altres formes de participació ciutadana regula els instruments de participació. D'acord amb l'article 44.1, la convocatòria d'un procés de participació ciutadana per INICIATIVA CIUTADANA és preceptiva si té el suport d'un MÍNIM DE 20.000 PERSONES MAJORS DE 16 ANYS que puguin participar en el procés. (Examen 871, P.34 — resposta correcta: c)."
      },
      {
        titol: "Resultat de les consultes populars locals",
        contingut: "El resultat d'una consulta popular no referendària convocada per un ajuntament és NO VINCULANT. (Examen 871, P.100 — resposta correcta: c)."
      },
      {
        titol: "Processos participatius i iniciatives normatives",
        contingut: "El dret a participar en processos participatius en relació amb iniciatives normatives es pot exercir per la IMPORTÀNCIA O LA MATÈRIA QUE REGULEN les iniciatives normatives pertinents. (Examen 871, P.101 — resposta correcta: b)."
      },
      {
        titol: "Consulta pública prèvia — on consultar-la",
        contingut: "La consulta pública prèvia a l'elaboració d'un projecte de decret es pot consultar al PORTAL PROCESSOSPARTICIPATIUS.CAT. (Examen 871, P.102 — resposta correcta: d)."
      }
    ],
    claus: [
      { concepte: "Iniciativa ciutadana participació — suport mínim", valor: "20.000 persones majors de 16 anys (Llei 10/2014 art.44.1)" },
      { concepte: "Resultat consultes locals no referendàries", valor: "No vinculant" },
      { concepte: "On trobar consulta pública prèvia", valor: "processosparticipatius.cat" },
    ],
    nota: "La Llei 10/2014 va tenir 4 preguntes a l'examen 871 (P.34, P.100, P.101, P.102). Cal conèixer bé els mecanismes de participació i les diferències entre vinculant/no vinculant i preceptiu/no preceptiu.",
    questions: []
  },

  {
    id: "pe-og-03",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 3,
    titol: "El Pla de Govern com a eina de planificació. Plans departamentals i plans sectorials.",
    resum: "El Pla de Govern és el principal instrument de planificació estratègica del Govern de la Generalitat, que recull les prioritats i compromisos per a la legislatura.",
    apartats: [
      {
        titol: "Pla de Govern XV legislatura — prioritats",
        contingut: "El Pla de Govern de la XV legislatura té prioritats amb indicadors de seguiment. La prioritat 1 és 'Prosperitat compartida basada en el coneixement, per millorar la qualitat de vida i l'accés a l'habitatge'. Els seus indicadors inclouen: preus dels graus i màsters universitaris, habitatges de lloguer protegit disponibles, places públiques d'escola bressol (0-3 anys). El percentatge del pes de la indústria en el valor afegit brut de Catalunya correspon a una altra prioritat. (Examen 871, P.35 — PREGUNTA ANUL·LADA)."
      }
    ],
    claus: [
      { concepte: "Pla de Govern — prioritat 1 (XV legislatura)", valor: "'Prosperitat compartida basada en el coneixement, per millorar la qualitat de vida i l'accés a l'habitatge'" },
    ],
    nota: "La pregunta sobre el Pla de Govern (P.35) va ser ANUL·LADA a l'examen 871. De totes maneres, cal conèixer les prioritats del Pla de Govern actual per possibles convocatòries futures.",
    questions: []
  },

  {
    id: "pe-og-04",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 4,
    titol: "Pressupostos orientats a resultats. Programes pressupostaris. Indicadors. Contractes programa.",
    resum: "El pressupost per programes estructura la despesa pública en programes amb missió, objectius i indicadors de seguiment.",
    apartats: [
      {
        titol: "Tipus d'indicadors",
        contingut: "Els indicadors de seguiment en el marc del pressupost per programes s'organitzen en: INDICADORS D'INPUT (recursos utilitzats), INDICADORS D'OUTPUT (productes o serveis generats, nombre de clients servits), INDICADORS DE RESULTATS (canvis en la situació dels destinataris) i INDICADORS D'EFICIÈNCIA (relació entre inputs i outputs). (Examen 871, P.36 — la pregunta sobre quins indicadors mesuren la quantitat de productes produïts → resposta correcta: b) indicadors d'output)."
      },
      {
        titol: "Contracte programa",
        contingut: "El contracte programa és una fórmula de finançament vinculada a resultats. S'usa per finançar entitats del sector públic o universitats públiques que han d'assolir objectius específics. (Examen 871, P.78 — el Dep. de Recerca vol fer una aportació vinculada a resultats a una universitat → instrument: contracte programa)."
      }
    ],
    claus: [
      { concepte: "Indicadors que mesuren quantitat de productes/serveis", valor: "Indicadors d'OUTPUT" },
      { concepte: "Indicadors que mesuren recursos utilitzats", valor: "Indicadors d'INPUT" },
      { concepte: "Finançament vinculat a resultats per a universitats", valor: "Contracte programa" },
    ],
    nota: "Els indicadors output/input/resultats/eficiència surten molt a examen. Memoritza: OUTPUT = productes generats (és el resultat directe de l'activitat). RESULTAT = canvi en la realitat social.",
    questions: []
  },

  {
    id: "pe-og-05",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 5,
    titol: "L'Agenda 2030: transformar Catalunya, millorar el món. Els ODS en el context català.",
    resum: "L'Agenda 2030 de les Nacions Unides estableix 17 Objectius de Desenvolupament Sostenible (ODS). A Catalunya es vehicula a través del Pla d'Acció per a l'Agenda 2030.",
    apartats: [
      {
        titol: "Instrument de la Generalitat per als ODS",
        contingut: "L'instrument que té com a objectiu principal assegurar l'assoliment dels 17 ODS mitjançant les polítiques de la Generalitat és el PLA D'ACCIÓ AUTO+ PER A L'AGENDA 2030. (Examen 871 reserva P.64 — resposta correcta: c). No és el 'Pla nacional per a l'Agenda 2030' (que no existeix) ni l'Estratègia Catalana d'Adaptació al Canvi Climàtic."
      },
      {
        titol: "ODS rellevants per a l'examen",
        contingut: "ODS 10 — Reduir la desigualtat en i entre els països: inclou polítiques fiscals, salarials i de protecció social per aconseguir progressivament una major igualtat. (Examen 871, P.89). ODS 8 — Treball decent i creixement econòmic. ODS 1 — Fi de la pobresa. ODS 5 — Igualtat de gènere."
      }
    ],
    claus: [
      { concepte: "Instrument Generalitat per als ODS", valor: "Pla d'Acció Auto+ per a l'Agenda 2030" },
      { concepte: "ODS sobre reducció desigualtats i polítiques fiscals", valor: "ODS 10" },
      { concepte: "ODS sobre treball decent", valor: "ODS 8" },
    ],
    nota: "L'examen 871 va preguntar l'ODS 10 (P.89) i el Pla d'Acció Auto+ (P.64). No confondre ODS 10 (desigualtats) amb ODS 1 (pobresa) ni ODS 8 (treball digne).",
    questions: []
  },

  {
    id: "pe-og-06",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 6,
    titol: "Regulació de l'avaluació econòmica de les polítiques públiques a Catalunya. La taxa de descompte social. La monetització. L'informe d'impacte econòmic i social.",
    resum: "L'avaluació econòmica de les polítiques públiques a Catalunya es regula per normativa específica que estableix la taxa de descompte social i la metodologia de l'informe d'impacte econòmic i social.",
    apartats: [
      {
        titol: "Taxa de descompte social (TDS)",
        contingut: "La Guia d'avaluació econòmica de polítiques públiques de la Generalitat de Catalunya, elaborada pel Departament d'Economia i Hisenda, recomana aplicar una TDS del 3%. (Examen 871, P.79 — resposta correcta: a) 3%)."
      },
      {
        titol: "Informe d'impacte econòmic i social",
        contingut: "L'informe d'impacte econòmic i social que ha d'acompanyar els projectes de disposicions reglamentàries avalua els COSTOS I BENEFICIS per als destinataris I per a la realitat social i econòmica (no exclusivament per als destinataris). (Examen 871, P.37 — resposta correcta: c)."
      }
    ],
    claus: [
      { concepte: "Taxa de descompte social (TDS) recomanada a Catalunya", valor: "3% (Guia avaluació econòmica Dep. Economia i Hisenda)" },
      { concepte: "Informe impacte econòmic i social avalua", valor: "Costos i beneficis per als destinataris I per a la realitat social i econòmica" },
    ],
    nota: "La TDS del 3% va sortir directament a l'examen 871 (P.79). És una xifra molt concreta que cal memoritzar.",
    questions: []
  },

  {
    id: "pe-og-08",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 8,
    titol: "Qualitat dels serveis públics. Sistemes de gestió de la qualitat. Les normes ISO. El model EFQM. El model CAF.",
    resum: "Els models de qualitat a les administracions públiques permeten avaluar i millorar el funcionament organitzatiu i els serveis prestats.",
    apartats: [
      {
        titol: "El model CAF (Common Assessment Framework)",
        contingut: "El CAF és una eina de gestió de la qualitat dissenyada ESPECÍFICAMENT per a les ADMINISTRACIONS PÚBLIQUES DE LA UNIÓ EUROPEA. No és un model que mesura exclusivament resultats econòmics. No és obligatori per la normativa catalana. No és equivalent a una norma ISO. (Examen 871, P.45 — resposta correcta: b)."
      },
      {
        titol: "La infraestructura ètica",
        contingut: "La infraestructura ètica és el conjunt d'eines que poden utilitzar les administracions per definir i garantir determinats estàndards ètics en el comportament dels seus agents i les seves organitzacions. Inclou elements de foment i elements d'avaluació i control. (Examen 871, P.44 — resposta correcta: c)."
      }
    ],
    claus: [
      { concepte: "Model CAF — per a qui", valor: "Administracions públiques de la UE (no és obligatori, no és ISO)" },
      { concepte: "Infraestructura ètica", valor: "Conjunt d'eines per garantir estàndards ètics de l'organització" },
    ],
    nota: "El CAF va sortir a l'examen 871 (P.45). La clau: el CAF és per a les AAPP de la UE, no és obligatori i no és equivalent a la ISO.",
    questions: []
  },

  {
    id: "pe-og-10",
    part: "especifica",
    bloc: "Part Específica General",
    numero: 10,
    titol: "La direcció en l'organització. Tipus de direcció. La direcció per objectius. Els quadres de comandament.",
    resum: "Els quadres de comandament (Balanced Scorecard) son eines de gestió estratègica que permeten alinear les activitats quotidianes amb els objectius estratègics de l'organització.",
    apartats: [
      {
        titol: "El quadre de comandament",
        contingut: "En el disseny d'un quadre de comandament, les ACTUACIONS fan referència a la descripció del que s'ha de fer per assolir els OBJECTIUS OPERATIUS. Les LÍNIES ESTRATÈGIQUES son el nivell superior. (Examen 871, P.38 — resposta correcta: a) per assolir els objectius operatius)."
      }
    ],
    claus: [
      { concepte: "Actuacions al quadre de comandament", valor: "Descripció del que s'ha de fer per assolir els OBJECTIUS OPERATIUS" },
    ],
    nota: "Distingeix bé la jerarquia: línies estratègiques → objectius estratègics → objectius operatius → actuacions → indicadors.",
    questions: []
  },

  {
    id: "pe-fp-16",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 16,
    titol: "Òrgans competents en matèria de personal. Atribució de competències. Relació de llocs de treball. Mesures de racionalització.",
      resum: "La regulació del tema és multinivell. El TREBEP estableix les bases estatals i la normativa catalana concreta els òrgans, les competències i els instruments propis de la Generalitat.",
    apartats: [
      {
        titol: "La RLT (Relació de Llocs de Treball)",
        contingut: "La relació de llocs de treball és un document PÚBLIC. Qualsevol persona hi pot tenir accés. (Examen 871, P.90 — resposta correcta: b) sí, perquè és pública)."
      },
      {
        titol: "Mesures de racionalització de personal",
        contingut: "El DL 1/1997 preveu mesures de racionalització com: els plans de formació i capacitació per a la recol·locació del personal, la redistribució d'efectius i els plans d'ocupació. (Examen 871, P.47 — PREGUNTA ANUL·LADA)."
      }
    ],
    claus: [
      { concepte: "Accés a la RLT", valor: "Pública — qualsevol persona hi pot accedir" },
    ],
    nota: "La RLT és pública. No cal demanar permís al departament ni a la DGFP per accedir a la RLT d'un altre departament.",
    questions: [22]
  },

  {
    id: "pe-fp-17",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 17,
    titol: "Selecció del personal funcionari i laboral. Accés de persones amb discapacitat. Accés de ciutadans UE. Promoció interna. Integració.",
    resum: "La selecció de personal de la Generalitat es regula per la Llei de funció pública i el Reglament de selecció (Decret 28/1986).",
    apartats: [
      {
        titol: "El tribunal qualificador",
        contingut: "El tribunal qualificador s'ha de constituir amb un NOMBRE SENAR de membres, NO INFERIOR a 5 (pot ser 5, 7, 9...), i han de comptar amb el MATEIX NOMBRE de suplents. (Examen 871, P.49 — Decret 28/1986)."
      },
      {
        titol: "Fase de concurs en el concurs-oposició",
        contingut: "La fase de concurs no pot superar el 40% de la puntuació total del procés selectiu (Reglament de selecció art. 7.2). (Examen 871, P.50)."
      },
      {
        titol: "Reserva per a persones amb discapacitat",
        contingut: "La reserva en l'OPO ha de ser d'un mínim del 7% (TREBEP art. 59). L'acreditació del coneixement de les llengües s'especifica a la CONVOCATÒRIA de cada procés. (Examen 871, P.93)."
      },
      {
        titol: "Mitjans d'accés als cossos i escales",
        contingut: "Els mitjans d'accés al DL 1/1997 per a la Generalitat són: oposició, concurs-oposició o concurs i, si escau, els cursos de formació o la fase de prova que determini la convocatòria. (Examen 871 reserva P.65)."
      }
    ],
    claus: [
      { concepte: "Tribunal qualificador — nombre membres", valor: "Nombre SENAR, no inferior a 5 (+ mateixos suplents)" },
      { concepte: "Fase concurs en concurs-oposició — màxim", valor: "40% de la puntuació total (art. 7.2 Reglament selecció)" },
      { concepte: "Reserva discapacitat OPO", valor: "≥ 7% (TREBEP art.59)" },
      { concepte: "Acreditació de les llengües — on consta", valor: "A la CONVOCATÒRIA del procés selectiu" },
      { concepte: "Sistemes d'accés a cossos i escales", valor: "Oposició, concurs-oposició o concurs (+ cursos formació si escau)" },
    ],
    nota: "Les preguntes sobre selecció van ser molt concretes a l'examen 871: el nombre senar del tribunal (P.49), el 40% de la fase concurs (P.50), la reserva del 7% (P.92) i l'acreditació de llengües (P.93).",
    questions: [4, 5, 24, 25]
  },

  {
    id: "pe-fp-18",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 18,
    titol: "Condicions de treball: jornada i horaris. Mesures de conciliació. Permisos i llicències. La incapacitat temporal.",
    resum: "Les condicions de treball del personal de la Generalitat es regulen per la Llei 8/2006 de mesures de conciliació, el Decret 56/2012 de jornada, el TREBEP i els acords de Govern.",
    apartats: [
      {
        titol: "Jornada de dedicació especial",
        contingut: "El personal en règim de jornada de dedicació especial NO pot gaudir de reducció de jornada per interès particular. La prohibició és ABSOLUTA, sense excepcions. (Examen 871, P.48 — resposta correcta: c) No, en cap cas)."
      },
      {
        titol: "Vacances i incapacitat temporal",
        contingut: "Les vacances no gaudides durant l'any natural per causa d'incapacitat temporal poden gaudir-se fins a 18 MESOS des del final de l'any natural en què s'han originat (TREBEP + jurisprudència TJUE). (Examen 871, P.94 — resposta correcta: d)."
      },
      {
        titol: "Llei 1/2026 — modificació del DL 1/1997 (NOVA)",
        contingut: "La Llei 1/2026, de 4 de febrer (DOGC 6/02/2026), ha modificat el DL 1/1997 introduint: àrees d'especialitat, nou complement variable per nocturnitat/festius, complement de carrera professional. Aquesta normativa NO estava al material d'estudi de 2022."
      }
    ],
    claus: [
      { concepte: "Reducció jornada en dedicació especial", valor: "NO es pot concedir en cap cas" },
      { concepte: "Vacances i IT — termini per gaudir-les", valor: "Fins a 18 mesos des del final de l'any natural (TREBEP + TJUE)" },
      { concepte: "Llei 1/2026 — modifica", valor: "DL 1/1997: àrees d'especialitat + complement variable nocturnitat/festius + carrera professional" },
    ],
    nota: "Les vacances i la IT van sortir a l'examen 871 (P.94). La clau: el termini és 18 mesos, no 12. La Llei 1/2026 és nova i pot sortir a la propera convocatòria.",
    questions: [3, 26]
  },

  {
    id: "pe-fp-19",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 19,
    titol: "Situacions administratives del personal funcionari i laboral. Reingrés al servei actiu. Remoció i fi de la relació de servei. Responsabilitat disciplinària.",
    resum: "Les situacions administratives regulen la relació jurídica entre el funcionari i l'Administració quan no és de servei actiu. El règim disciplinari estableix les faltes, sancions i el procediment.",
    apartats: [
      {
        titol: "Excedència voluntària per interès particular",
        contingut: "Requisits: mínim de 5 anys de serveis efectius i continuats (o prestats amb qualsevol vinculació a qualsevol AAPP). La concessió ESTÀ SUPEDITADA A LES NECESSITATS DEL SERVEI (no és un dret absolut). Durada mínima: 2 anys. Sense reserva de lloc de treball. (Examen 871, P.81)."
      },
      {
        titol: "Excedència per cura de fills",
        contingut: "No es poden acumular dos períodes d'excedència per cura de fills. Si durant una excedència neix un nou fill (nou causant), dona dret a un nou període, però cal que hi hagi almenys 1 ANY entre el final d'una excedència i l'inici de l'altra. (Examen 871, P.95)."
      },
      {
        titol: "Excedència per cura de familiars",
        contingut: "Per a familiars fins a 2n grau de consanguinitat o afinitat (sogra = 1r grau afinitat). Durada: mínim 3 mesos, màxim 3 anys. (Examen 871, P.96)."
      },
      {
        titol: "Serveis en altres AAPP",
        contingut: "El funcionari de carrera d'una AAPP que passa a ocupar un lloc en una altra AAPP (sense ser funcionari de carrera d'aquella) queda en situació de SERVEIS EN ALTRES AAPP, AMB reserva de plaça i destinació a l'AAPP d'origen. (Examen 871, P.82)."
      },
      {
        titol: "Expedient disciplinari al personal interí",
        contingut: "Si finalitza el nomenament del personal interí mentre s'està tramitant un expedient disciplinari, cal dictar una RESOLUCIÓ que declari extingit el procediment i ordenar l'arxiu, LLEVAT QUE LA PART INTERESSADA insti la continuació. (Examen 871, P.80)."
      },
      {
        titol: "Personal interí per acumulació de tasques",
        contingut: "Durada màxima: 9 MESOS dins d'un PERÍODE DE 18 MESOS (TREBEP art. 10.1.d). (Examen 871, P.85)."
      }
    ],
    claus: [
      { concepte: "Excedència interès particular — requisit mínim", valor: "5 anys de serveis efectius" },
      { concepte: "Excedència interès particular — concessió", valor: "Supeditada a les necessitats del servei" },
      { concepte: "Excedència interès particular — durada mínima", valor: "2 anys, sense reserva de lloc" },
      { concepte: "Excedència cura fills — acumulació", valor: "NO possible. Mínim 1 any entre excedències" },
      { concepte: "Excedència cura familiars — durada", valor: "Mínim 3 mesos, màxim 3 anys (fins 2n grau consanguinitat/afinitat)" },
      { concepte: "Serveis en altres AAPP (funcionari carrera)", valor: "AMB reserva de plaça i destinació" },
      { concepte: "Interí acumulació tasques — durada màxima", valor: "9 mesos dins de 18 mesos (TREBEP art.10.1.d)" },
    ],
    nota: "El tema 19 ha estat el que ha generat més preguntes pràctiques a l'examen 871: P.80, P.81, P.82, P.85, P.95, P.96. Cal saber molt bé les excedències i les situacions administratives amb tots els detalls.",
    questions: [13, 14, 15, 18, 27, 28]
  },

  {
    id: "pe-fp-20",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 20,
    titol: "Retribucions del personal funcionari i laboral. Indemnitzacions per raó del servei.",
    resum: "Les retribucions del personal de la Generalitat inclouen retribucions bàsiques (sou, triennis, pagues extraordinàries) i complementàries (complement de destinació, específic, productivitat, gratificacions). Les indemnitzacions per raó del servei es regulen pel Decret 138/2008.",
    apartats: [
      {
        titol: "Retribucions complementàries",
        contingut: "Les RETRIBUCIONS BÀSIQUES del personal funcionari son: el sou, els triennis i les pagues extraordinàries. Les RETRIBUCIONS COMPLEMENTÀRIES son: el complement de destinació, el complement específic, el complement de productivitat i les GRATIFICACIONS PER SERVEIS EXTRAORDINARIS. (Examen 871 reserva P.66). Les retribucions del personal LABORAL (VI Conveni) inclouen el COMPLEMENT DE GRUP com a retribució bàsica (retribueix la preparació i capacitació professional). (Examen 871, P.83)."
      },
      {
        titol: "Comissions de servei — durada i liquidació",
        contingut: "Durada màxima: 1 mes (3 mesos a l'estranger), prorrogable per l'òrgan competent (Decret 138/2008 art.5). (Examen 871, P.53). Termini per presentar la liquidació de despeses: 2 MESOS des de la finalització de la comesa. (Examen 871, P.84)."
      },
      {
        titol: "Personal eventual — presa de possessió",
        contingut: "La presa de possessió als llocs de personal eventual ha de ser objecte d'inscripció al Registre General de Personal. La provisió NO requereix convocatòria pública, però SÍ es publiquen les resolucions de nomenament. (Examen 871, P.54)."
      }
    ],
    claus: [
      { concepte: "Retribucions BÀSIQUES funcionari", valor: "Sou + triennis + pagues extraordinàries" },
      { concepte: "Retribucions COMPLEMENTÀRIES funcionari", valor: "Complement destinació + específic + productivitat + gratificacions serveis extraordinaris" },
      { concepte: "Complement de grup (laboral)", valor: "Retribució bàsica que retribueix la preparació i capacitació professional" },
      { concepte: "Comissions servei — durada màxima", valor: "1 mes (3 mesos estranger), prorrogable" },
      { concepte: "Comissions servei — termini liquidació", valor: "2 mesos des de finalització" },
    ],
    nota: "Les retribucions i les comissions de servei van generar múltiples preguntes a l'examen 871. Distingeix bé les retribucions BÀSIQUES de les COMPLEMENTÀRIES dels funcionaris.",
    questions: [8, 16, 17]
  },

  {
    id: "pe-fp-21",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 21,
    titol: "Personal eventual. Personal directiu. Personal interí i temporal.",
    resum: "El personal eventual, directiu i interí de la Generalitat estan regulats per normatives específiques que els distingeixen del personal funcionari de carrera.",
    apartats: [
      {
        titol: "Personal eventual",
        contingut: "La provisió de llocs de personal eventual NO requereix convocatòria pública. SÍ es publiquen les resolucions de nomenament al DOGC. La presa de possessió SÍ ha de ser objecte d'inscripció al Registre General de Personal. (Examen 871, P.54 — Decret 2/2005 art.4)."
      },
      {
        titol: "Personal directiu de societats mercantils públiques",
        contingut: "El personal directiu de les SA participades íntegrament per la Generalitat pot tenir: contracte laboral especial d'alta direcció (regla general) O contracte mercantil si els estatuts de la societat ho preveuen. (Examen 871, P.86 — Llei 2/2014 DA 21a)."
      },
      {
        titol: "Personal interí per acumulació de tasques",
        contingut: "Durada màxima: 9 mesos dins d'un període de 18 mesos (TREBEP art. 10.1.d). (Examen 871, P.85)."
      }
    ],
    claus: [
      { concepte: "Personal eventual — convocatòria pública", valor: "NO (però SÍ es publica el nomenament al DOGC)" },
      { concepte: "Personal eventual — presa de possessió", valor: "SÍ s'inscriu al Registre General de Personal" },
      { concepte: "Directiu SA pública — vinculació", valor: "Contracte alt direcció O mercantil (si estatuts ho preveuen)" },
      { concepte: "Interí acumulació — durada màxima", valor: "9 mesos / 18 mesos (TREBEP art.10.1.d)" },
    ],
    nota: "Les diferències entre el personal eventual (nomenament polític sense OPO) i l'interí (cobertura provisional de places vacants) son molt importants per a l'examen.",
    questions: [9, 18, 19]
  },

  {
    id: "pe-fp-22",
    part: "especifica",
    bloc: "Funció Pública",
    numero: 22,
    titol: "Drets de representació col·lectiva. Meses de negociació i òrgans de representació. Acords, pactes i convenis. Dret de vaga. Conveni col·lectiu únic de Catalunya del personal laboral.",
    resum: "La representació col·lectiva del personal de la Generalitat es canalitza a través de juntes de personal (funcionaris) i comitès d'empresa (personal laboral), i es regula pel TREBEP i el VI Conveni col·lectiu únic.",
    apartats: [
      {
        titol: "Crèdit d'hores sindicals (TREBEP art.41)",
        contingut: "Escala de crèdit d'hores mensuals per cens de la unitat electoral: fins 100 persones → 15h; 101-250 → 20h; 251-500 → 30h; 501-750 → 35h; 751-1.200 → 40h. (Examen 871, P.88 — cens 1.200 → 40 hores)."
      },
      {
        titol: "VI Conveni col·lectiu — tasques de categoria inferior",
        contingut: "El personal laboral fix pot ser destinat a tasques de categoria inferior per necessitats PEREMPTÒRIES I IMPREVISIBLES, pel temps imprescindible, màxim 2 MESOS per any. (Examen 871, P.55)."
      },
      {
        titol: "VI Conveni col·lectiu — concurs canvi de destinació",
        contingut: "En un concurs de canvi de destinació per a personal laboral, les CAPACITATS PROFESSIONALS han de representar exactament el 40% de la valoració. (Examen 871, P.87)."
      }
    ],
    claus: [
      { concepte: "Crèdit hores sindicals cens fins 100", valor: "15 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 101-250", valor: "20 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 251-500", valor: "30 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 501-750", valor: "35 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 751-1.200", valor: "40 hores/mes" },
      { concepte: "VI Conveni — tasques categoria inferior — màxim", valor: "2 mesos per any, per necessitats peremptòries i imprevisibles" },
      { concepte: "VI Conveni — capacitats professionals en concurs canvi destinació", valor: "Exactament 40%" },
    ],
    nota: "L'escala de crèdit d'hores sindicals és una taula que cal memoritzar. L'examen 871 va preguntar el cas de cens 1.200 persones → 40 hores (P.88).",
    questions: [10, 20, 21]
  },

  {
    id: "pe-cont-23",
    part: "especifica",
    bloc: "Contractació",
    numero: 23,
    titol: "Objecte i àmbit d'aplicació de la LCSP. Àmbit subjectiu. Negocis i contractes exclosos.",
    resum: "La Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP) estableix el marc jurídic de la contractació pública a Espanya. L'àmbit subjectiu determina qui està sotmès a la llei.",
    apartats: [
      {
        titol: "Triple àmbit subjectiu",
        contingut: "La LCSP distingeix tres categories: PAAP (Poders Adjudicadors = Administracions Públiques): subjecció ÍNTEGRA. PAnoAP (Poders Adjudicadors NO Administracions Públiques): aplicació PARCIAL (alta per a contractes harmonitzats, baixa per als altres). Altres ens del sector públic: aplicació RESIDUAL (principis generals + publicació de normes per internet)."
      },
      {
        titol: "Identificació dels contractes — CPV",
        contingut: "Els contractes s'identifiquen per l'aplicació del VOCABULARI COMÚ DE CONTRACTES PÚBLICS (CPV), aprovat pel Reglament (CE) 213/2008. (Examen 871, P.56 — resposta correcta: d)."
      },
      {
        titol: "Convenis entre PA — exclusió de la LCSP",
        contingut: "Els convenis entre PA queden exclosos de la LCSP si: les entitats no tenen vocació de mercat (es presumeix quan realitzen >20% de les activitats al mercat obert), el conveni estableix cooperació per garantir serveis públics, i la cooperació es guia per l'interès públic. El 20% és el llindar clau."
      }
    ],
    claus: [
      { concepte: "PAAP — subjecció a la LCSP", valor: "ÍNTEGRA" },
      { concepte: "PAnoAP — subjecció a la LCSP", valor: "PARCIAL (alta en harmonitzats, baixa en la resta)" },
      { concepte: "Altres ens sector públic — subjecció", valor: "RESIDUAL (principis + publicació normes)" },
      { concepte: "Sistema identificació contractes", valor: "CPV (Vocabulari Comú Contractes Públics — Regl. CE 213/2008)" },
      { concepte: "Llindar vocació de mercat (convenis entre PA)", valor: "20% activitats al mercat obert" },
    ],
    nota: "El tema 23 és fonamental per entendre la LCSP. La distinció PAAP/PAnoAP/Altres ens és clau i surt a moltes preguntes pràctiques (CTTI, SEM, Infraestructures, Servei Meteorològic...).",
    questions: []
  },

  {
    id: "pe-cont-28",
    part: "especifica",
    bloc: "Contractació",
    numero: 28,
    titol: "Els procediments d'adjudicació dels contractes. La invalidesa dels contractes. El recurs especial. La selecció del contractista i l'adjudicació.",
    resum: "La LCSP regula els procediments per adjudicar els contractes públics, garantint la competència i la transparència. El recurs especial en matèria de contractació és el mecanisme de control específic.",
    apartats: [
      {
        titol: "Modificació del contracte — dictamen CJA",
        contingut: "No es pot modificar un contracte SENSE el dictamen PREVI de la Comissió Jurídica Assessora (CJA) quan: el plec de clàusules administratives NO prevegi la modificació, la quantia de la modificació (aïllada o conjuntament) sigui superior al 20% del preu inicial del contracte (IVA exclòs), i el preu del contracte sigui IGUAL O SUPERIOR A 6.000.000 €. (Examen 871, P.62 — resposta correcta: d)."
      },
      {
        titol: "Modificació — règim del PAnoAP",
        contingut: "La modificació d'un contracte celebrat per un PAnoAP (poder adjudicador que no és administració pública) es regeix per les normes de DRET PRIVAT, però s'hi aplica la Llei 9/2017 pel que fa als SUPÒSITS DE MODIFICACIÓ del contracte. (Examen 871, P.61 — resposta correcta: c)."
      },
      {
        titol: "Invalidesa dels contractes",
        contingut: "Els contractes subscrits pels poders adjudicadors son invàlids quan en els actes preparatoris o del procediment d'adjudicació es presentin algunes de les causes d'invalidesa de DRET ADMINISTRATIU. (Examen 871, P.60 — resposta correcta: c)."
      },
      {
        titol: "Tramitació d'emergència",
        contingut: "Per a situacions que comprometin greument serveis essencials (ex: atenció a menors en situació de perill), el procediment adequat és la TRAMITACIÓ D'EMERGÈNCIA. (Examen 871, P.71 — resposta correcta: b)."
      }
    ],
    claus: [
      { concepte: "Dictamen CJA en modificació — condicions", valor: ">20% del preu inicial + preu contracte ≥6.000.000 € + modificació NO prevista al PCAP" },
      { concepte: "Modificació PAnoAP — règim", valor: "Dret privat + LCSP pels supòsits de modificació" },
      { concepte: "Contractes invàlids — causa", valor: "Causes invalidesa DRET ADMINISTRATIU en actes preparatoris/adjudicació" },
      { concepte: "Urgència extrema serveis essencials", valor: "Tramitació d'EMERGÈNCIA" },
    ],
    nota: "Les modificacions contractuals son un dels temes que més preguntes genera: els llindars per al dictamen de la CJA (>20% + ≥6M€) son les xifres clau a memoritzar.",
    questions: []
  },

  {
    id: "pe-cont-29",
    part: "especifica",
    bloc: "Contractació",
    numero: 29,
    titol: "Les modificacions contractuals. Les garanties exigibles. Efectes, compliment i extinció dels contractes administratius. Revisió dels actes en matèria de contractació.",
    resum: "Les modificacions contractuals estan molt restringides per la LCSP per garantir la integritat del procediment de licitació inicial. Les garanties protegeixen l'Administració davant d'incompliments.",
    apartats: [
      {
        titol: "Modificació del PPT post-adjudicació",
        contingut: "La modificació del plec de prescripcions tècniques particulars DESPRÉS de l'adjudicació del contracte POT COMPORTAR la retroacció d'actuacions. (Examen 871, P.59 — resposta correcta: a)."
      },
      {
        titol: "Valor estimat del contracte (VEC)",
        contingut: "El VEC inclou: el PBL sense IVA + les possibles pròrrogues + les possibles modificacions previstes (fins al màxim permès). EXEMPLE (Examen 871, P.68): PBL 121.000€ (IVA 21% inclòs) = 100.000€ sense IVA. Durada 1 any + pròrroga 2 anys = 3 anys. Modificació 20%/any. VEC = 100.000 × 3 × 1,20 = 360.000€."
      },
      {
        titol: "Audiència al contractista en modificació no prevista (PAnoAP)",
        contingut: "Per a un PAnoAP amb una modificació no prevista als plecs, SÍ cal donar audiència al contractista, que ha de donar per ESCRIT la seva conformitat a la modificació. (Examen 871, P.75 — resposta correcta: a)."
      }
    ],
    claus: [
      { concepte: "Càlcul VEC", valor: "PBL sense IVA × durada total (inclou pròrrogues) × (1 + % modificació)" },
      { concepte: "Dictamen CJA modificació — llindar preu", valor: "≥ 6.000.000 € (IVA exclòs)" },
      { concepte: "Dictamen CJA modificació — llindar %", valor: "> 20% del preu inicial (IVA exclòs)" },
    ],
    nota: "El càlcul del VEC (P.68) va ser una de les preguntes pràctiques més importants de l'examen 871. Practica el càlcul: PBL sense IVA → multiplica per anys totals → multiplica per (1 + % modificació màxim).",
    questions: []
  },

  {
    id: "pe-cont-30",
    part: "especifica",
    bloc: "Contractació",
    numero: 30,
    titol: "L'activitat subvencional de les administracions públiques. Procediments de concessió. Reintegrament i control. Infraccions i sancions. Subvencions UE. Ajuts.",
    resum: "Les subvencions es regulen per la Llei 38/2003, de 17 de novembre, General de Subvencions, i pel seu Reglament (RD 887/2006).",
    apartats: [
      {
        titol: "Termini màxim procediment de reintegrament",
        contingut: "El termini màxim per resoldre i notificar la resolució del procediment de reintegrament és de 12 MESOS des de la data de l'acord d'iniciació. (Examen 871, P.21 — Llei 38/2003 art. 42.4 — resposta correcta: c)."
      },
      {
        titol: "Responsabilitat en subvencions — comunitat de béns",
        contingut: "Els membres d'una comunitat de béns responen d'una sanció pecuniària de manera SOLIDÀRIA. (Examen 871, P.63 — resposta correcta: a)."
      },
      {
        titol: "Justificació parcial de la subvenció",
        contingut: "Si el beneficiari ha justificat parcialment la subvenció dins del termini previst, l'Administració ha de requerir al beneficiari que presenti la documentació justificativa en el termini IMPRORROGABLE de 15 DIES. (Examen 871, P.77 — resposta correcta: d)."
      }
    ],
    claus: [
      { concepte: "Termini màxim procediment de reintegrament", valor: "12 mesos des de l'acord d'iniciació (Llei 38/2003 art.42.4)" },
      { concepte: "Responsabilitat comunitat de béns — sancions", valor: "SOLIDÀRIA" },
      { concepte: "Justificació parcial — requeriment termini", valor: "15 dies IMPRORROGABLES" },
    ],
    nota: "Les subvencions van generar 4 preguntes a l'examen 871 (P.21, P.63, P.77, P.78). El termini de reintegrament (12 mesos) i la responsabilitat solidària de la comunitat de béns son les dades clau.",
    questions: []
  },

  // ═══════════════════════════════════════════════════════
  // ADMINISTRACIÓ DIGITAL — TEMES ESPECÍFICS
  // ═══════════════════════════════════════════════════════

  {
    id: "pe-og-15",
    part: "especifica",
    bloc: "Administració Digital",
    numero: 15,
    titol: "Identificació i signatura electròniques. El certificat digital. Tipus de certificats a les AAPP catalanes. La representació electrònica.",
    resum: "La identificació i signatura electrònica permeten que les persones i les AAPP operin en entorns digitals de manera segura i amb validesa jurídica.",
    apartats: [
      {
        titol: "T-CAT P (certificat personal de la Generalitat)",
        contingut: "El T-CAT P amb signatura avançada té una caducitat de 4 ANYS des de la data d'emissió. Es pot renovar des de 60 DIES ABANS de la caducitat. (Examen 871, P.67 — resposta correcta: b) 10.11.2026, 4 anys des de 10.11.2022, renovació des de 60 dies abans)."
      },
      {
        titol: "eIDAS2 — Cartera europea d'identitat digital",
        contingut: "El Reglament (UE) 2024/1183, de l'11 d'abril de 2024 (eIDAS2), defineix la CARTERA EUROPEA D'IDENTITAT DIGITAL com un mitjà d'identificació electrònica que permet a l'usuari EMMAGATZEMAR, GESTIONAR I VALIDAR de manera segura dades d'identificació de la persona i declaracions electròniques d'atributs. (Examen 871, P.41 — resposta correcta: b)."
      },
      {
        titol: "Acord GOV/153/2024 — espais privats digitals",
        contingut: "L'Acord GOV/153/2024, de 18 de juny, estableix els requisits dels espais privats digitals. D'acord amb el punt 3 de l'annex, han de: ser un SERVEI FINALISTA MAJORITARI (més del 50% dels serveis). (Examen 871, P.42 — resposta correcta: a)."
      },
      {
        titol: "Interoperabilitat semàntica (ENI)",
        contingut: "Segons el Reial Decret 4/2010 (Esquema Nacional d'Interoperabilitat), la interoperabilitat semàntica es refereix al fet que la informació intercanviada pugui ser INTERPRETABLE DE FORMA AUTOMÀTICA i REUTILITZABLE per aplicacions que no van intervenir en la seva creació. (Examen 871, P.73 — resposta correcta: b)."
      },
      {
        titol: "Interoperabilitat — definició general",
        contingut: "La interoperabilitat (Decret 232/2013, art.3) és la CAPACITAT DE LES ORGANITZACIONS per compartir la informació dels seus sistemes d'informació i dels procediments als quals donen suport, per assolir objectius comuns i possibilitar l'intercanvi d'informació. (Examen 871, P.28 — resposta correcta: d)."
      }
    ],
    claus: [
      { concepte: "T-CAT P — caducitat", valor: "4 anys des de l'emissió" },
      { concepte: "T-CAT P — renovació", valor: "Des de 60 dies abans de caducar" },
      { concepte: "eIDAS2 — Reglament UE", valor: "Reglament (UE) 2024/1183, d'11 d'abril de 2024" },
      { concepte: "Cartera europea identitat digital", valor: "Emmagatzemar, gestionar i validar dades d'identificació + declaracions d'atributs" },
      { concepte: "Espais privats digitals (GOV/153/2024)", valor: "Servei finalista majoritari (>50% dels serveis)" },
      { concepte: "Interoperabilitat semàntica", valor: "Informació interpretable automàticament i reutilitzable per a tercers" },
      { concepte: "Interoperabilitat — definició", valor: "Capacitat de les organitzacions de compartir informació per assolir objectius comuns" },
    ],
    nota: "L'administració digital va generar 14 preguntes a l'examen 871, moltes sobre normativa molt recent (Reglament UE 2024/1183, Acord GOV/153/2024, Llei 9/2025). Cal actualitzar el material d'estudi amb aquestes normes.",
    questions: []
  },

];

// ─────────────────────────────────────────────────────────────────
// CONFIGURACIÓ DE LA PART (colors i títols)
// ─────────────────────────────────────────────────────────────────
const PARTS = {
  "comuna": {
    label: "Part Comuna",
    desc: "35 temes comuns a totes les opcions",
    color: "#1e3a5f",
    bg: "#dbeafe",
    icon: "📘"
  },
  "especifica": {
    label: "Part Específica",
    desc: "30 temes de l'opció general",
    color: "#7c3aed",
    bg: "#ede9fe",
    icon: "📗"
  }
};
