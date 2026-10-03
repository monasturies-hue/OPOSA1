// ═══════════════════════════════════════════════════════════════════
// BANC DE PREGUNTES — Oposicions A1 Generalitat de Catalunya
// ═══════════════════════════════════════════════════════════════════
//
// COM AFEGIR PREGUNTES:
// 1. Copia el bloc d'exemple de sota
// 2. Omple tots els camps
// 3. Afegeix-lo a l'array QUESTIONS
//
// CAMPS OBLIGATORIS:
//   id        → número únic (correlatius)
//   bloc      → "Funció Pública" | "Contractació" | "Procediment" |
//               "Administració Digital" | "Subvencions" | "Transparència" |
//               "Hisenda" | "EAC" | "UE" | "Altres"
//   tema      → títol breu del subtema
//   examen    → "871/2026" | "825/2024" | "242/2023" | "Estabilització" | "Simulacre"
//   pregunta  → text de la pregunta
//   opcions   → array de 4 opcions [a, b, c, d]
//   correcta  → índex de la resposta correcta (0=a, 1=b, 2=c, 3=d)
//   llei      → norma principal que regula la matèria
//   article   → article(s) concret(s) si escau
//   document  → on trobar-ho al temari (nom del PDF)
//   explicacio → per què és correcta i per què les altres no
//   anulada   → true si la pregunta va ser anul·lada (opcional)
//
// ═══════════════════════════════════════════════════════════════════

const QUESTIONS = [

  // ─────────────────────────────────────────────────────────────────
  // BLOC: FUNCIÓ PÚBLICA
  // Font: Examen 871/2026 (27 juny 2026)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 1,
    bloc: "Funció Pública",
    tema: "Incompatibilitats alts càrrecs",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 16 de la Llei 13/2005, de 27 de desembre, del règim d'incompatibilitats dels alts càrrecs al servei de la Generalitat, quin és l'òrgan administratiu competent per instruir i resoldre els expedients relatius a les declaracions d'activitats, patrimonials i d'interessos dels alts càrrecs?",
    opcions: [
      "La Secretaria d'Administració i Funció Pública.",
      "El Gabinet Jurídic.",
      "La Comissió Jurídica Assessora.",
      "El conseller o consellera corresponent."
    ],
    correcta: 0,
    llei: "Llei 13/2005, de 27 de desembre, del règim d'incompatibilitats dels alts càrrecs al servei de la Generalitat",
    article: "Art. 16",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "La SAFP (Secretaria d'Administració i Funció Pública) és l'òrgan transversal competent per instruir i resoldre expedients sobre declaracions d'alts càrrecs, independentment del departament. El Gabinet Jurídic assessora però no instrueix. La CJA emet dictàmens però no resol expedients de personal. El conseller no té aquesta competència específica."
  },

  {
    id: 2,
    bloc: "Funció Pública",
    tema: "Racionalització de personal",
    examen: "871/2026",
    anulada: true,
    pregunta: "D'acord amb el Text únic de la Llei de la funció pública de l'Administració de la Generalitat de Catalunya, quina de les opcions següents és una mesura de racionalització de personal?",
    opcions: [
      "La modificació puntual de l'horari de treball per necessitats del servei.",
      "La planificació de necessitats de personal basada exclusivament en criteris pressupostaris.",
      "Els plans de formació i capacitació per a la recol·locació del personal.",
      "L'establiment de mesures específiques de promoció interna."
    ],
    correcta: 2,
    llei: "Decret Legislatiu 1/1997 (Text únic Llei funció pública Generalitat)",
    article: "Arts. sobre racionalització de personal",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "PREGUNTA ANUL·LADA. La resposta prevista era c). Les mesures de racionalització de personal inclouen els plans de formació per a recol·locació, la redistribució d'efectius i els plans d'ocupació. La modificació d'horari (a) és una mesura d'organització, no de racionalització. La planificació basada exclusivament en criteris pressupostaris (b) no és correcta per 'exclusivament'. La promoció interna (d) és una mesura de carrera professional, no de racionalització."
  },

  {
    id: 3,
    bloc: "Funció Pública",
    tema: "Jornada de dedicació especial",
    examen: "871/2026",
    pregunta: "Es pot concedir una reducció de jornada per interès particular al personal que presta serveis en règim de jornada de dedicació especial?",
    opcions: [
      "No, excepte quan disposi d'un informe favorable de la Direcció General de Funció Pública.",
      "Sí, però només amb l'aprovació mitjançant una resolució de la Secretaria General corresponent.",
      "No, en cap cas.",
      "Sí, però només amb l'aprovació del superior jeràrquic i si es garanteix la cobertura del servei."
    ],
    correcta: 2,
    llei: "Decret Legislatiu 1/1997 / Llei 8/2006 de mesures de conciliació",
    article: "Regulació jornada especial",
    document: "T18 – Condicions de treball (febrer 2023)",
    explicacio: "La jornada de dedicació especial és incompatible amb la reducció de jornada per interès particular. La resposta és taxativa i sense excepcions: no, en cap cas. Les opcions a) i b) introdueixen condicions que no existeixen en la normativa. L'opció d) tampoc és correcta perquè el règim de dedicació especial exclou completament aquesta reducció."
  },

  {
    id: 4,
    bloc: "Funció Pública",
    tema: "Tribunal qualificador",
    examen: "871/2026",
    pregunta: "D'acord amb el Reglament de selecció de personal de l'Administració de la Generalitat de Catalunya, el tribunal qualificador s'ha de constituir amb:",
    opcions: [
      "Un nombre senar de membres no inferior a 5 i han de comptar amb el mateix nombre de suplents.",
      "Un nombre parell de membres no inferior a 6 i han de comptar amb el mateix nombre de suplents.",
      "Un nombre senar de membres superior a 5 i han de comptar amb el mateix nombre de suplents.",
      "Un nombre parell de membres no inferior a 4 i han de comptar amb el mateix nombre de suplents."
    ],
    correcta: 0,
    llei: "Decret 28/1986, de 30 de gener, Reglament de selecció de personal de la Generalitat",
    article: "Arts. sobre constitució del tribunal",
    document: "T17E – Selecció del personal funcionari i laboral (agost 2022)",
    explicacio: "SENAR i NO INFERIOR a 5 (pot ser 5, 7, 9...). El nombre senar és per evitar empats en la votació. L'opció c) diu 'superior a 5' que exclouria el 5 (mínim permès). Les opcions b) i d) diuen 'parell' que és incorrecte. Sempre el mateix nombre de suplents que de titulars."
  },

  {
    id: 5,
    bloc: "Funció Pública",
    tema: "Concurs-oposició — fase concurs",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 7.2 del Reglament de selecció de personal de l'Administració de la Generalitat de Catalunya, quin percentatge màxim pot representar la fase de concurs sobre la puntuació total d'un procés selectiu pel sistema de concurs-oposició?",
    opcions: [
      "El 25%",
      "El 33%",
      "El 50%",
      "El 40%"
    ],
    correcta: 3,
    llei: "Decret 28/1986, Reglament de selecció de personal",
    article: "Art. 7.2",
    document: "T17E – Selecció del personal funcionari i laboral (agost 2022)",
    explicacio: "Màxim 40% per a la fase de concurs. Garanteix que la fase d'oposició (que avalua el mèrit propi de l'aspirant) pesi almenys el 60%. El 25% seria massa restrictiu i no és el que diu la norma. El 33% i 50% tampoc corresponen a la regulació catalana."
  },

  {
    id: 6,
    bloc: "Funció Pública",
    tema: "Prescripció sancions disciplinàries",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 97 del Text refós de la Llei de l'Estatut bàsic de l'empleat públic, quin és el termini de prescripció de les sancions imposades per faltes disciplinàries lleus, comptat des de la fermesa de la resolució sancionadora?",
    opcions: [
      "2 anys",
      "1 any",
      "6 mesos",
      "3 mesos"
    ],
    correcta: 1,
    llei: "TREBEP — Text Refós Estatut Bàsic Empleat Públic (RDL 5/2015)",
    article: "Art. 97",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "Prescripció de SANCIONS (des de la fermesa de la resolució): lleus → 1 any, greus → 2 anys, molt greus → 3 anys. Compte: és diferent de la prescripció de les FALTES (des de la comissió): lleus → 1 mes, greus → 2 anys, molt greus → 3 anys."
  },

  {
    id: 7,
    bloc: "Funció Pública",
    tema: "Suspensió de funcions — durada màxima",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 90 del Text refós de la Llei de l'Estatut bàsic de l'empleat públic, la sanció disciplinària de suspensió de funcions no pot tenir una durada superior a:",
    opcions: [
      "2 anys",
      "3 anys",
      "5 anys",
      "6 anys"
    ],
    correcta: 3,
    llei: "TREBEP — Text Refós Estatut Bàsic Empleat Públic (RDL 5/2015)",
    article: "Art. 90",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "La suspensió de funcions com a sanció disciplinària té una durada màxima de 6 anys. Dada que sovint es confon amb altres terminis. La suspensió provisional durant la tramitació de l'expedient és diferent (màxim 6 mesos prorrogable)."
  },

  {
    id: 8,
    bloc: "Funció Pública",
    tema: "Comissions de servei — durada",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 5 del Decret 138/2008, de 8 de juliol, d'indemnitzacions per raó del servei, les comissions de servei amb dret a indemnització, llevat de casos excepcionals, no poden tenir una durada superior a:",
    opcions: [
      "1 mes, o 3 mesos si s'han de dur a terme en territori estranger. L'òrgan competent pot autoritzar una pròrroga pel temps estrictament indispensable.",
      "3 mesos, o 6 mesos si s'han de dur a terme en territori estranger. L'òrgan competent pot autoritzar una pròrroga.",
      "6 mesos. L'òrgan competent pot autoritzar una pròrroga pel temps estrictament indispensable.",
      "1 mes, o 2 mesos si s'han de dur a terme en territori estranger. Aquests límits no són prorrogables."
    ],
    correcta: 0,
    llei: "Decret 138/2008, de 8 de juliol, d'indemnitzacions per raó del servei",
    article: "Art. 5",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "Comissions de servei: màxim 1 mes (3 mesos a l'estranger), prorrogable per l'òrgan competent quan el termini sigui insuficient. L'opció b) confon els mesos. L'opció c) diu 6 mesos que és incorrecte. L'opció d) diu 2 mesos a l'estranger (incorrecte, és 3) i a més diu que no és prorrogable (incorrecte)."
  },

  {
    id: 9,
    bloc: "Funció Pública",
    tema: "Personal eventual — règim jurídic",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 4 del Decret 2/2005, d'11 de gener, sobre el règim jurídic del personal eventual de l'Administració de la Generalitat de Catalunya:",
    opcions: [
      "La provisió de llocs de personal eventual es duu a terme mitjançant convocatòria pública i pel sistema de lliure designació.",
      "Per la naturalesa especial de les seves funcions, la provisió es fa sense necessitat de convocatòria pública i tampoc s'han de publicar les resolucions de nomenament; només s'han de notificar a les persones interessades.",
      "La presa de possessió als llocs de treball de personal eventual ha de ser objecte d'inscripció al Registre General de Personal.",
      "El personal eventual pot ser nomenat per la persona titular de la Secretaria General del departament corresponent."
    ],
    correcta: 2,
    llei: "Decret 2/2005, d'11 de gener, sobre el règim jurídic del personal eventual de la Generalitat",
    article: "Art. 4",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "La presa de possessió del personal eventual SÍ ha de ser objecte d'inscripció al Registre General de Personal (c). La provisió NO requereix convocatòria pública (a és falsa) però SÍ es publiquen les resolucions de nomenament al DOGC (b és falsa en dir que no es publiquen). El nomenament és per l'alt càrrec corresponent, no per la Secretaria General (d és falsa)."
  },

  {
    id: 10,
    bloc: "Funció Pública",
    tema: "Personal laboral — tasques categoria inferior",
    examen: "871/2026",
    pregunta: "D'acord amb el VI Conveni col·lectiu únic del personal laboral de la Generalitat de Catalunya, es pot destinar el personal laboral fix a realitzar tasques corresponents a una categoria professional inferior a la que té?",
    opcions: [
      "Sí, per necessitats peremptòries i imprevisibles, màxim 2 mesos cada any.",
      "Sí, per necessitats peremptòries i imprevisibles, màxim 3 mesos cada any, prorrogable 3 mesos més.",
      "No, només es pot encomanar tasques de categoria superior de la mateixa àrea funcional o grup immediatament superior.",
      "No, només en cas de personal laboral temporal, màxim 3 mesos cada any."
    ],
    correcta: 0,
    llei: "VI Conveni col·lectiu únic del personal laboral de la Generalitat de Catalunya",
    article: "Arts. sobre mobilitat funcional",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "Sí és possible (mobilitat funcional descendent), per necessitats PEREMPTÒRIES i IMPREVISIBLES de l'activitat productiva, i pel temps imprescindible, amb un màxim de 2 mesos per any. L'opció b) diu 3 mesos (incorrecte). Les opcions c) i d) diuen que no és possible (incorrecte)."
  },

  {
    id: 11,
    bloc: "Funció Pública",
    tema: "Accés als cossos i escales",
    examen: "871/2026",
    pregunta: "D'acord amb el Text únic de la Llei de la funció pública de l'Administració de la Generalitat de Catalunya, quins son els mitjans per accedir als cossos i les escales de funcionaris o a les categories laborals? (Pregunta de reserva)",
    opcions: [
      "Procediments d'oposició, concurs o promoció interna, amb caràcter general els cursos de formació o la fase de prova.",
      "Procediments d'oposició, concurs o lliure designació, i si escau els cursos de formació o la fase de prova.",
      "Procediments de concurs oposició o concurs, borsa de treball i, si escau, cursos de formació o la fase de prova.",
      "Procediments d'oposició, concurs oposició o concurs i, si escau, els cursos de formació o la fase de prova."
    ],
    correcta: 3,
    llei: "Decret Legislatiu 1/1997 (Text únic Llei funció pública Generalitat)",
    article: "Arts. sobre sistemes d'accés",
    document: "T17E – Selecció del personal funcionari i laboral (agost 2022)",
    explicacio: "Els mitjans d'accés al DL 1/1997 per a la Generalitat són: oposició, concurs-oposició o concurs i, si escau, els cursos de formació o la fase de prova que determini la convocatòria. L'opció a) incorpora 'promoció interna' com a sistema independent (no ho és). L'opció b) incorpora 'lliure designació' (que és un sistema de provisió, no d'accés). L'opció c) incorpora 'borsa de treball' (incorrecte)."
  },

  {
    id: 12,
    bloc: "Funció Pública",
    tema: "Retribucions complementàries",
    examen: "871/2026",
    pregunta: "D'acord amb l'article 103 del Text únic de la Llei de la funció pública de l'Administració de la Generalitat de Catalunya, quina de les opcions és una retribució complementària? (Pregunta de reserva)",
    opcions: [
      "Les pagues extraordinàries.",
      "Les gratificacions per serveis extraordinaris.",
      "Els triennis.",
      "La participació en les sancions pecuniàries imposades (cossos tributaris)."
    ],
    correcta: 1,
    llei: "Decret Legislatiu 1/1997 (Text únic Llei funció pública Generalitat)",
    article: "Art. 103",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "Retribucions BÀSIQUES: sou, triennis i pagues extraordinàries. Retribucions COMPLEMENTÀRIES: complement de destinació, complement específic, complement de productivitat i GRATIFICACIONS PER SERVEIS EXTRAORDINARIS. Les opcions a) (pagues extraordinàries) i c) (triennis) són retribucions bàsiques. L'opció d) (participació en sancions pecuniàries) també és complementària però la resposta marcada com a correcta és b)."
  },

  {
    id: 13,
    bloc: "Funció Pública",
    tema: "Expedient disciplinari — personal interí",
    examen: "871/2026",
    pregunta: "El 11 de maig de 2026 s'inicia un expedient disciplinari a un funcionari interí per una presumpta falta molt greu comesa l'1 de gener de 2026. El 30 de maig finalitza el seu nomenament (acumulació de tasques). D'acord amb el Reglament de règim disciplinari de la Generalitat, què cal fer?",
    opcions: [
      "Continuar l'expedient perquè la falta molt greu sempre s'ha de determinar per llei.",
      "Continuar l'expedient perquè la falta no ha prescrit; es podrà suspendre l'execució de la sanció.",
      "Dictar resolució declarant extingit el procediment i arxivar les actuacions, llevat que l'interessat insti la continuació.",
      "L'instructor ha d'emetre una diligència per arxivar l'expedient (extinció ex lege) sense resolució expressa."
    ],
    correcta: 2,
    llei: "Decret 243/1995, de 27 de juny, Reglament de règim disciplinari de la funció pública de la Generalitat",
    article: "Arts. sobre extinció de la responsabilitat disciplinària",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "Quan finalitza la relació de servei del personal interí, el Reglament de règim disciplinari de la Generalitat preveu dictar una RESOLUCIÓ que declari extingit el procediment i ordenar l'arxiu, LLEVAT que la part interessada insti expressament la continuació de l'expedient. L'opció d) és incorrecta perquè sí cal resolució expressa (no és extinció automàtica ex lege en el reglament de la Generalitat)."
  },

  {
    id: 14,
    bloc: "Funció Pública",
    tema: "Excedència voluntària interès particular",
    examen: "871/2026",
    pregunta: "La Clara Homs és funcionària de la Generalitat des del 19/3/2024 (1a destinació). Anteriorment havia estat interina en un ajuntament de l'1/12/2021 al 18/3/2024. El 27/4/2026 sol·licita excedència voluntària per interès particular des de l'1/6/2026. Quina resposta ha de donar RRHH?",
    opcions: [
      "No se li pot concedir: no ha complert el mínim de serveis. Quan ho compleixi, podrà ser concedida supeditada a les necessitats del servei. Mínim 2 anys, sense reserva de lloc.",
      "Sí: haurà complert el mínim. La concessió NO està supeditada a les necessitats del servei. Mínim 2 anys, sense reserva de lloc.",
      "Sí: haurà complert el mínim. La concessió ESTÀ supeditada a les necessitats del servei. Mínim 2 anys, sense reserva de lloc.",
      "No se li pot concedir. Quan ho compleixi, se li HAURÀ de concedir si la sol·licita. Mínim 1 any, sense reserva de lloc."
    ],
    correcta: 2,
    llei: "Decret Legislatiu 1/1997 / TREBEP art. 89",
    article: "Arts. sobre excedència voluntària per interès particular",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "La Clara haurà complert 5 anys de serveis efectius (des de desembre 2021 fins a juny 2026), incloent-hi els serveis com a interina a l'ajuntament. La concessió SÍ és possible, però SÍ està SUPEDITADA a les necessitats del servei (no és un dret absolut). Durada mínima 2 anys. Sense reserva de lloc de treball. Resposta c)."
  },

  {
    id: 15,
    bloc: "Funció Pública",
    tema: "Situacions administratives — serveis en altres AAPP",
    examen: "871/2026",
    pregunta: "El Xavier Bosch (funcionari A1 arquitectura, destinació definitiva a la Generalitat) és nomenat subdirector general al Ministeri de Foment (AGE) per lliure designació el 16/6/2026. En quina situació administrativa queda a la Generalitat? Té reserva de plaça?",
    opcions: [
      "Serveis especials, amb dret a reserva de plaça i destinació.",
      "Serveis en altres AAPP, SENSE reserva de plaça i destinació.",
      "Excedència voluntària per incompatibilitats, SENSE reserva de plaça.",
      "Serveis en altres AAPP, AMB reserva de plaça i destinació."
    ],
    correcta: 3,
    llei: "Decret Legislatiu 1/1997 / TREBEP arts. 85-89",
    article: "Arts. sobre situació de serveis en altres AAPP",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "Funcionari de carrera de la Generalitat que ocupa un lloc en una altra AAPP sense ser funcionari de carrera d'aquella altra AAPP → situació de SERVEIS EN ALTRES ADMINISTRACIONS PÚBLIQUES, AMB reserva de plaça i destinació. Si fos nomenat funcionari de carrera de l'AGE seria diferent. La situació de serveis especials s'aplica a casos taxats (càrrecs electes, alts càrrecs, etc.)."
  },

  {
    id: 16,
    bloc: "Funció Pública",
    tema: "Retribucions personal laboral — complement de grup",
    examen: "871/2026",
    pregunta: "El Pere Bartolí és contractat laboral indefinit (D1, oficial 1a manteniment). Un complement de la seva nòmina retribueix la PREPARACIÓ I CAPACITACIÓ PROFESSIONAL com a retribució bàsica. Com s'anomena aquest complement?",
    opcions: [
      "Complement de comandament",
      "Complement de conveni",
      "Complement transversal de lloc de treball",
      "Complement de grup"
    ],
    correcta: 3,
    llei: "VI Conveni col·lectiu únic del personal laboral de la Generalitat de Catalunya",
    article: "Arts. sobre retribucions del personal laboral",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "El complement que retribueix la preparació i capacitació professional com a retribució bàsica és el COMPLEMENT DE GRUP. Forma part de les retribucions bàsiques del personal laboral del VI Conveni. El complement de conveni (b) retribueix les condicions específiques del conveni. El complement de lloc de treball (c) retribueix les condicions del lloc concret. El complement de comandament (a) és per a funcions directives."
  },

  {
    id: 17,
    bloc: "Funció Pública",
    tema: "Liquidació despeses comissions de servei",
    examen: "871/2026",
    pregunta: "La Marta Muñoz (funcionària interina) realitza una comesa especial a Tarragona del 11 al 14 de maig de 2026. De quin termini disposa per presentar la liquidació de despeses, d'acord amb el Decret 138/2008, per no perdre les indemnitzacions?",
    opcions: [
      "1 mes",
      "2 mesos",
      "3 mesos",
      "6 mesos"
    ],
    correcta: 1,
    llei: "Decret 138/2008, de 8 de juliol, d'indemnitzacions per raó del servei",
    article: "Arts. sobre liquidació de despeses",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "El termini per presentar la liquidació de despeses és de 2 MESOS des de la finalització de la comesa. Si no es presenta en termini, s'entén que es renuncia a la percepció de les indemnitzacions. En el cas de la Marta Muñoz (comesa finalitzada el 14/5/2026), el termini acaba el 14/7/2026."
  },

  {
    id: 18,
    bloc: "Funció Pública",
    tema: "Personal interí — acumulació de tasques",
    examen: "871/2026",
    pregunta: "El Departament d'Interior vol nomenar 3 tècnics/ques superiors per acumulació de tasques (gestió de sancions de seguretat ciutadana). Quina és la durada màxima dels nomenaments d'acord amb el TREBEP?",
    opcions: [
      "6 mesos, dins d'un període de 12 mesos.",
      "3 mesos, dins d'un període de 6 mesos.",
      "9 mesos, dins d'un període de 18 mesos.",
      "12 mesos, dins d'un període de 2 anys."
    ],
    correcta: 2,
    llei: "TREBEP — Text Refós Estatut Bàsic Empleat Públic (RDL 5/2015)",
    article: "Art. 10.1.d",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "TREBEP art. 10.1.d: els nomenaments d'interins per acumulació de tasques no poden superar els 9 MESOS dins d'un període de 18 MESOS. Dada fonamental: no és 6/12 ni 12/24. Confirmat per l'examen 871 (P.85) com una de les preguntes de major dificultat."
  },

  {
    id: 19,
    bloc: "Funció Pública",
    tema: "Personal directiu sector públic",
    examen: "871/2026",
    pregunta: "Una SA participada íntegrament per la Generalitat ha de contractar un nou conseller delegat. D'acord amb la DA 21a de la Llei 2/2014, quin tipus de vinculació podrà tenir?",
    opcions: [
      "Contracte laboral especial d'alta direcció, en qualsevol cas.",
      "Contracte laboral especial d'alta direcció o, si els estatuts ho preveuen, contracte laboral ordinari.",
      "Contracte laboral especial d'alta direcció o, si els estatuts ho preveuen, vinculació com a personal eventual.",
      "Contracte laboral especial d'alta direcció o, si els estatuts ho preveuen, contracte mercantil."
    ],
    correcta: 3,
    llei: "Llei 2/2014, de 27 de gener, de mesures fiscals, administratives, financeres i del sector públic",
    article: "Disposició addicional vint-i-unena",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "Per al personal directiu de societats mercantils públiques: contracte laboral especial d'alta direcció (regla general) O contracte mercantil si els estatuts de la societat ho preveuen (d). No pot ser contracte laboral ordinari (b) ni vinculació com a personal eventual (c), figures incompatibles amb la posició de conseller delegat d'una SA."
  },

  {
    id: 20,
    bloc: "Funció Pública",
    tema: "Mobilitat voluntària personal laboral — VI Conveni",
    examen: "871/2026",
    pregunta: "En un concurs de canvi de destinació per a personal laboral fix, quin percentatge han de tenir les capacitats professionals en la valoració de mèrits i capacitats, d'acord amb el VI Conveni col·lectiu únic?",
    opcions: [
      "El 40% com a mínim",
      "El 40%",
      "El 60%",
      "El 70%"
    ],
    correcta: 1,
    llei: "VI Conveni col·lectiu únic del personal laboral de la Generalitat de Catalunya",
    article: "Arts. sobre mobilitat voluntària i concursos",
    document: "T20 – Retribucions. Indemnitzacions (febrer 2023)",
    explicacio: "El VI Conveni estableix que les capacitats professionals han de representar exactament el 40% de la puntuació total dels mèrits i capacitats. NO és 'com a mínim' (a), és EXACTAMENT el 40%. La resta (60%) correspon als mèrits. Les opcions c) i d) (60% i 70%) són incorrectes."
  },

  {
    id: 21,
    bloc: "Funció Pública",
    tema: "Crèdit hores sindicals — TREBEP",
    examen: "871/2026",
    pregunta: "La Montserrat Cucurella és delegada de personal de la Junta de Personal dels SSTT de Girona (unitat electoral de 1.200 persones). D'acord amb el TREBEP art. 41, de quin crèdit d'hores mensuals disposa?",
    opcions: [
      "40 hores",
      "21 hores",
      "30 hores",
      "20 hores"
    ],
    correcta: 0,
    llei: "TREBEP — Text Refós Estatut Bàsic Empleat Públic (RDL 5/2015)",
    article: "Art. 41",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "TREBEP art.41 — escala de crèdit d'hores per cens electoral: fins 100 → 15h; 101-250 → 20h; 251-500 → 30h; 501-750 → 35h; 751-1.200 → 40h; >1.200 → 40h. Cens de 1.200 persones → 40 HORES mensuals. Dada que surt molt a examen: memoritzar l'escala completa."
  },

  {
    id: 22,
    bloc: "Funció Pública",
    tema: "Relació de llocs de treball — accés públic",
    examen: "871/2026",
    pregunta: "Treballeu al Servei d'Organització del Dep. de Cultura. La vostra cap us demana la relació de llocs de treball del Dep. de la Presidència. Podeu tenir-hi accés?",
    opcions: [
      "Sí, sempre que la demaneu directament al Dep. de la Presidència.",
      "Sí, perquè la RLT és pública.",
      "No, perquè només podeu disposar de la RLT del vostre departament.",
      "Sí, però us l'ha de facilitar la Direcció General de Funció Pública."
    ],
    correcta: 1,
    llei: "Decret Legislatiu 1/1997 / Llei 19/2014 de transparència",
    article: "Arts. sobre la RLT i transparència",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "La relació de llocs de treball (RLT) és un document PÚBLIC d'acord amb la normativa de transparència. Per tant, qualsevol persona, interna o externa, pot accedir-hi. No cal demanar-la a cap departament específic ni a la DGFP: és accessible públicament (normalment a la intranet o web de la Generalitat)."
  },

  {
    id: 23,
    bloc: "Funció Pública",
    tema: "Lloc de treball d'investigació",
    examen: "871/2026",
    anulada: true,
    pregunta: "El vostre cap us demana que tramiteu la creació d'un lloc de treball d'investigació. Quin tipus de lloc cal crear?",
    opcions: [
      "Un lloc que pugui ser ocupat per personal funcionari.",
      "Un lloc que pugui ser ocupat per personal laboral.",
      "Un lloc que pugui ser ocupat indistintament per personal funcionari i personal laboral.",
      "Un lloc que pugui ser ocupat indistintament per personal funcionari i personal interí."
    ],
    correcta: 1,
    llei: "Decret Legislatiu 1/1997 / TREBEP art. 9",
    article: "Arts. sobre llocs de treball laborals",
    document: "T17E – Selecció del personal funcionari i laboral (agost 2022)",
    explicacio: "PREGUNTA ANUL·LADA. La resposta prevista era b) personal laboral. El TREBEP reserva als funcionaris l'exercici de funcions que impliquin participació directa en l'exercici de potestats públiques. La investigació és una funció que no implica potestats públiques i per tant pot ser realitzada per personal laboral. La pregunta va ser impugnada i anul·lada per ambigüitat."
  },

  {
    id: 24,
    bloc: "Funció Pública",
    tema: "Reserva discapacitat OPO",
    examen: "871/2026",
    pregunta: "Heu de preparar l'OPO 2027 i assegurar-vos que es reserva el percentatge adequat per a persones amb discapacitat d'acord amb el TREBEP. Quin percentatge cal reservar?",
    opcions: [
      "El 2%",
      "No inferior al 7%",
      "El 3%",
      "No inferior al 5%"
    ],
    correcta: 1,
    llei: "TREBEP — Text Refós Estatut Bàsic Empleat Públic (RDL 5/2015)",
    article: "Art. 59",
    document: "T17E – Selecció del personal funcionari i laboral (agost 2022)",
    explicacio: "TREBEP art.59: reserva mínima del 7% per a persones amb discapacitat. Compte: el DL 1/1997 original de la Generalitat preveia el 5%, però el TREBEP el va elevar al 7% (norma bàsica estatal que preval). L'examen 871 va confirmar el 7% com a resposta correcta (P.92). L'opció d) (5%) és la xifra antiga, ja derogada."
  },

  {
    id: 25,
    bloc: "Funció Pública",
    tema: "Acreditació de llengües en processos selectius",
    examen: "871/2026",
    pregunta: "En un procés selectiu de la Generalitat, on podeu consultar els mitjans d'acreditació del coneixement de les llengües oficials exigits a les persones aspirants?",
    opcions: [
      "A la convocatòria del procés selectiu corresponent.",
      "A l'oferta d'ocupació pública de la qual derivi el procés selectiu.",
      "Al Decret 28/1986, de Reglament de selecció de personal.",
      "Al Decret Legislatiu 1/1997."
    ],
    correcta: 0,
    llei: "Decret 28/1986 / Normativa sobre processos selectius de la Generalitat",
    article: "Arts. sobre acreditació lingüística",
    document: "T17E – Selecció del personal funcionari i laboral (agost 2022)",
    explicacio: "Els mitjans d'acreditació del coneixement de les llengües oficials es determinen a la CONVOCATÒRIA de cada procés selectiu concret (no al Reglament de selecció ni a l'OPO). Cada convocatòria especifica quins certificats i titulacions acrediten el nivell de català i castellà requerit per a aquell cos o escala concret."
  },

  {
    id: 26,
    bloc: "Funció Pública",
    tema: "Vacances — incapacitat temporal",
    examen: "871/2026",
    pregunta: "Un treballador en situació d'IT no ha pogut gaudir de les vacances durant l'any natural. Fins quan les pot gaudir?",
    opcions: [
      "Les vacances es consideren perdudes i no es poden gaudir posteriorment.",
      "En qualsevol moment dins dels 12 mesos següents a l'any en què s'originaren.",
      "En el moment de la reincorporació, sempre que no hagin transcorregut més de 12 mesos des del final de l'any.",
      "En el moment de la reincorporació, sempre que no hagin transcorregut més de 18 mesos des del final de l'any."
    ],
    correcta: 3,
    llei: "TREBEP art. 50 / Jurisprudència TJUE (C-520/06 i C-350/06)",
    article: "Art. 50 TREBEP / Sentències TJUE",
    document: "T18 – Condicions de treball (febrer 2023)",
    explicacio: "TREBEP i jurisprudència del TJUE: les vacances no gaudides per IT es poden gaudir fins a 18 MESOS des del final de l'any natural en què s'han originat. No és 12 mesos — el TJUE (sentències Schultz-Hoff i Stringer) va fixar el termini mínim en 18 mesos. La reincorporació de la baixa no és el moment determinant: el que compta és el termini de 18 mesos."
  },

  {
    id: 27,
    bloc: "Funció Pública",
    tema: "Excedència cura fills — acumulació de períodes",
    examen: "871/2026",
    pregunta: "Una treballadora gaudeix d'excedència per cura d'un fill (fins febrer 2027). Al maig de 2026 té un segon fill. Pot sol·licitar una nova excedència quan finalitzi la primera al febrer de 2027?",
    opcions: [
      "Sí, es poden acumular períodes i pot sol·licitar-la a partir del febrer de 2027.",
      "No es poden acumular i no podrà sol·licitar la segona excedència.",
      "No es poden acumular. El nou causant posa fi al primer; podrà sol·licitar-la al maig de 2026.",
      "No es poden acumular. Ha d'haver-hi almenys 1 any entre excedències; podrà sol·licitar-la al febrer de 2028."
    ],
    correcta: 3,
    llei: "TREBEP art. 89.4 / Decret Legislatiu 1/1997",
    article: "Art. 89.4 TREBEP",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "No es poden acumular dos períodes d'excedència per cura de fill. Un nou causant dona dret a un altre període, però hi ha d'haver almenys 1 any entre excedències. El segon fill neix al maig de 2026. La primera excedència acaba al febrer de 2027 (>1 any des del naixement del segon). Per tant, podrà sol·licitar la nova excedència a partir del FEBRER DE 2028 (1 any des del febrer de 2027, final de la primera)."
  },

  {
    id: 28,
    bloc: "Funció Pública",
    tema: "Excedència cura de familiars",
    examen: "871/2026",
    pregunta: "Una treballadora necessita una excedència per cuidar la seva sogra (operada, no pot valdre's sola ni exercir activitat retribuïda). Quina excedència se li pot concedir?",
    opcions: [
      "Excedència voluntària per agrupació familiar (>3 anys mentre la sogra no pugui valdre's).",
      "Excedència voluntària per tenir cura de familiars: mínim 3 mesos, màxim 3 anys.",
      "Excedència voluntària per tenir cura de familiars: mínim 10 dies, màxim 3 mesos prorrogable fins 3 mesos més.",
      "Excedència voluntària per tenir cura de familiars: mínim 6 mesos amb reserva de lloc, màxim 3 anys."
    ],
    correcta: 1,
    llei: "TREBEP art. 89.4 / Decret Legislatiu 1/1997",
    article: "Art. 89.4 TREBEP",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "Excedència voluntària per tenir cura de familiars: per fills, cònjuge/parella o familiars fins a 2n grau de consanguinitat o afinitat (la sogra = 1r grau d'afinitat). Durada mínima 3 mesos, màxima 3 anys. L'opció a) (agrupació familiar) és per quan el cònjuge treballa en una altra localitat. Les opcions c) i d) tenen terminis incorrectes."
  },

  {
    id: 29,
    bloc: "Funció Pública",
    tema: "Carrera professional — consolidació de grau",
    examen: "871/2026",
    pregunta: "Avui heu consolidat el grau 24. Quina modalitat de promoció professional s'ha aplicat? (Pregunta de reserva)",
    opcions: [
      "Carrera horitzontal",
      "Carrera vertical",
      "Promoció interna vertical",
      "Promoció interna horitzontal"
    ],
    correcta: 0,
    llei: "TREBEP arts. 16-19 / Decret Legislatiu 1/1997",
    article: "Arts. sobre carrera professional",
    document: "T19 – Situacions administratives. Disciplinari (febrer 2023)",
    explicacio: "La consolidació de grau personal és una manifestació de la CARRERA HORITZONTAL: progressió dins del mateix cos/escala i grup/subgrup sense canviar de categoria. La carrera vertical implica canvi de nivell o ascens a un cos superior. La promoció interna (vertical o horitzontal) implica canvi de cos o escala per via de concurs o oposició restringida."
  },

  // ─────────────────────────────────────────────────────────────────
  // BLOC: CONTRACTACIÓ PÚBLICA
  // Afegir aquí les preguntes de contractació
  // ─────────────────────────────────────────────────────────────────

  // {
  //   id: 30,
  //   bloc: "Contractació",
  //   tema: "Valor estimat del contracte",
  //   examen: "871/2026",
  //   pregunta: "...",
  //   opcions: ["a)", "b)", "c)", "d)"],
  //   correcta: 0,
  //   llei: "Llei 9/2017 LCSP",
  //   article: "Art. 101",
  //   document: "T23E – Objecte i àmbit LCSP (actualitzat 2026)",
  //   explicacio: "..."
  // },

];

// ─────────────────────────────────────────────────────────────────
// CONFIGURACIÓ DELS BLOCS (colors i icones)
// ─────────────────────────────────────────────────────────────────
const BLOCS = {
  "Funció Pública":        { color: "#2563eb", bg: "#dbeafe", icon: "👤" },
  "Contractació":          { color: "#7c3aed", bg: "#ede9fe", icon: "📄" },
  "Procediment":           { color: "#0891b2", bg: "#cffafe", icon: "⚖️" },
  "Administració Digital": { color: "#0d9488", bg: "#ccfbf1", icon: "💻" },
  "Subvencions":           { color: "#d97706", bg: "#fef3c7", icon: "💰" },
  "Transparència":         { color: "#059669", bg: "#d1fae5", icon: "🔍" },
  "Hisenda":               { color: "#b45309", bg: "#fef3c7", icon: "🏦" },
  "EAC":                   { color: "#7c3aed", bg: "#f5f3ff", icon: "🏛️" },
  "UE":                    { color: "#1d4ed8", bg: "#eff6ff", icon: "🇪🇺" },
  "Altres":                { color: "#4b5563", bg: "#f3f4f6", icon: "📚" },
};
