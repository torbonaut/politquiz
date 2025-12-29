export interface Question {
  id: number;
  slug: string;
  question: string;
  options: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
  backgroundInfo: string;
  sourceLinks?: Array<{ name: string; url: string }>;
  tags?: string[];
}

export const questions: Question[] = [
  {
    "id": 1,
    "slug": "ibiza-affair-strache",
    "question": "Which specific offer made by Heinz-Christian Strache in the 2017 'Ibiza Video' led to the collapse of the Austrian government in 2019?",
    "options": [
      { "letter": "A", "text": "Selling the Austrian water supply to Nestle" },
      { "letter": "B", "text": "Awarding government construction contracts in exchange for party donations" },
      { "letter": "C", "text": " privatizing the Austrian railway system immediately" },
      { "letter": "D", "text": "Promising a cabinet position to a Russian diplomat" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "In the video, Strache suggested to a woman posing as a Russian oligarch's niece that she could receive inflated government road construction contracts in exchange for buying the Kronen Zeitung to support the FPÖ.",
    "sourceLinks": [
      { "name": "Wikipedia", "url": "https://en.wikipedia.org/wiki/Ibiza_affair" },
      { "name": "Der Standard", "url": "https://www.derstandard.at/story/2000103310037/das-ist-das-ibiza-video-sie-zahlen-nicht-an-die" }
    ],
    "tags": ["FPÖ", "Ibiza", "Korruption", "2019"]
  },
  {
    "id": 2,
    "slug": "oevp-poll-scandal-2021",
    "question": "The 'Inseratenaffäre' (advertisement scandal) that led to Sebastian Kurz's resignation in 2021 involved allegations of what misuse of public funds?",
    "options": [
      { "letter": "A", "text": "Using tax money to pay for private jet travel" },
      { "letter": "B", "text": "Funding fake opinion polls to boost Kurz's popularity" },
      { "letter": "C", "text": "Embezzling funds for a private villa" },
      { "letter": "D", "text": "Bribing opposition members to switch parties" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Prosecutors alleged that Ministry of Finance funds were used to pay for manipulated opinion polls favorable to Sebastian Kurz, which were then published in the tabloid 'Österreich' in exchange for lucrative government ad buys.",
    "sourceLinks": [
      { "name": "ORF.at", "url": "https://orf.at/stories/3231454/" },
      { "name": "Kontrast.at", "url": "https://kontrast.at/oevp-bilanz-2021/" }
    ],
    "tags": ["ÖVP", "Korruption", "Inserate", "2021"]
  },
  {
    "id": 3,
    "slug": "spoe-lucona-affair",
    "question": "The 'Lucona Affair' (1977), one of Austria's biggest political scandals involving the SPÖ, centered around which crime?",
    "options": [
      { "letter": "A", "text": "Illegal arms exports to a war zone" },
      { "letter": "B", "text": "Insurance fraud involving a sunk ship and murder" },
      { "letter": "C", "text": "Theft of pension funds" },
      { "letter": "D", "text": "Forgery of election results" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Udo Proksch, a well-connected socialite with close ties to SPÖ leadership ('Club 45'), sank the ship Lucona with a time bomb to claim insurance for a fake uranium processing plant, killing six crew members. Several ministers eventually resigned.",
    "sourceLinks": [
      { "name": "Haus der Geschichte Österreich", "url": "https://hdgoe.at/lucona" },
      { "name": "Das Rote Wien", "url": "https://www.dasrotewien.at/seite/lucona-skandal" }
    ],
    "tags": ["SPÖ", "Justiz", "Mord", "1977"]
  },
  {
    "id": 4,
    "slug": "fpoe-nazi-songbook",
    "question": "In 2018, shortly before regional elections, which scandal involving FPÖ candidate Udo Landbauer emerged?",
    "options": [
      { "letter": "A", "text": "He was found to have a secret Swiss bank account" },
      { "letter": "B", "text": "His fraternity 'Germania' used a songbook with antisemitic lyrics" },
      { "letter": "C", "text": "He had plagiarized his doctoral thesis" },
      { "letter": "D", "text": "He was caught driving under the influence" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Landbauer's fraternity 'Germania zu Wiener Neustadt' possessed a songbook containing lyrics that joked about the Holocaust (killing Jews with gas). Landbauer claimed he had not known about the passages.",
    "sourceLinks": [
      { "name": "Der Standard", "url": "https://www.derstandard.at/story/2000072879659/nazi-liederbuch-bei-burschenschaft-von-fpoe-spitzenkandidat-landbauer" }
    ],
    "tags": ["FPÖ", "Rechtsextremismus", "Wiederbetätigung", "2018"]
  },
  {
    "id": 5,
    "slug": "greens-heumarkt-voter-betrayal",
    "question": "In 2017, the Viennese Green Party faced massive backlash from their own base regarding which urban development project?",
    "options": [
      { "letter": "A", "text": "The construction of the Lobau Tunnel" },
      { "letter": "B", "text": "The high-rise project at Heumarkt" },
      { "letter": "C", "text": "The expansion of Vienna International Airport" },
      { "letter": "D", "text": "The privatization of city parks" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Despite their base voting against the project in an internal survey and warnings from UNESCO about Vienna losing its World Heritage status, Green Vice-Mayor Maria Vassilakou allowed the controversial high-rise project to proceed.",
    "sourceLinks": [
      { "name": "Die Presse", "url": "https://www.diepresse.com/5228073/heumarkt-projekt-gruene-stimmen-gegen-basis" }
    ],
    "tags": ["Grüne", "Stadtplanung", "Wählerwille", "2017"]
  },
  {
    "id": 6,
    "slug": "hypo-alpe-adria-disaster",
    "question": "Which political figure is primarily associated with the rapid expansion and subsequent collapse of Hypo Alpe Adria, costing taxpayers billions?",
    "options": [
      { "letter": "A", "text": "Werner Faymann (SPÖ)" },
      { "letter": "B", "text": "Jörg Haider (FPÖ/BZÖ)" },
      { "letter": "C", "text": "Wolfgang Schüssel (ÖVP)" },
      { "letter": "D", "text": "Alexander Van der Bellen (Grüne)" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "As Governor of Carinthia, Jörg Haider pushed for the aggressive expansion of the provincial bank Hypo Alpe Adria, backing it with unsecured state guarantees that eventually led to a massive financial bailout.",
    "sourceLinks": [
      { "name": "Profil", "url": "https://www.profil.at/oesterreich/hypo-alpe-adria-haiders-verbrechen/400923616" }
    ],
    "tags": ["FPÖ", "BZÖ", "Finanzskandal", "2009"]
  },
  {
    "id": 7,
    "slug": "eurofighter-grasser",
    "question": "The Eurofighter acquisition (2002/2003) is one of Austria's longest-running corruption sagas. Which Finance Minister was central to the controversial decision?",
    "options": [
      { "letter": "A", "text": "Hannes Androsch" },
      { "letter": "B", "text": "Karl-Heinz Grasser" },
      { "letter": "C", "text": "Maria Fekter" },
      { "letter": "D", "text": "Gernot Blümel" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Karl-Heinz Grasser (FPÖ, later ÖVP-nominated) was the Finance Minister during the purchase. Suspicions of bribes, lobbying by EADS, and opaque money flows via lobbyists like Alfons Mensdorff-Pouilly have plagued the deal for decades.",
    "sourceLinks": [
      { "name": "Wikipedia Eurofighter", "url": "https://de.wikipedia.org/wiki/Eurofighter-Aff%C3%A4re" }
    ],
    "tags": ["ÖVP", "FPÖ", "Korruption", "2003"]
  },
  {
    "id": 8,
    "slug": "spoe-silberstein-affair",
    "question": "What was the 'Silberstein Affair' that damaged the SPÖ campaign in the 2017 election?",
    "options": [
      { "letter": "A", "text": "A physical fight between candidates on TV" },
      { "letter": "B", "text": "The use of 'dirty campaigning' via secret Facebook hate pages" },
      { "letter": "C", "text": "Stealing campaign funds for personal use" },
      { "letter": "D", "text": "Hacking the opponent's email server" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Consultant Tal Silberstein, hired by the SPÖ, created Facebook pages ('Die Wahrheit über Sebastian Kurz') that posed as FPÖ or ÖVP supporters and spread antisemitic and xenophobic content to discredit Kurz.",
    "sourceLinks": [
      { "name": "Kurier", "url": "https://kurier.at/politik/inland/die-akte-silberstein/289.445.698" }
    ],
    "tags": ["SPÖ", "Wahlkampf", "Dirty Campaigning", "2017"]
  },
  {
    "id": 9,
    "slug": "fpoe-braunau-ratten-gedicht",
    "question": "In 2019, a Vice-Mayor of the FPÖ in Braunau wrote a poem that caused a national scandal. What was the content?",
    "options": [
      { "letter": "A", "text": "It called for the annexation of Bavaria" },
      { "letter": "B", "text": "It compared migrants to rats" },
      { "letter": "C", "text": "It insulted the Federal President" },
      { "letter": "D", "text": "It denied the existence of COVID-19" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Christian Schilcher published a poem titled 'The City Rat' in a party newspaper, using metaphors comparing humans (migrants) to rats. He resigned shortly after the public outcry.",
    "sourceLinks": [
      { "name": "Der Standard", "url": "https://www.derstandard.at/story/2000101836040/rattengedicht-in-braunauer-fpoe-zeitung-orgt-fuer-aufregung" }
    ],
    "tags": ["FPÖ", "Rassismus", "Hetze", "2019"]
  },
  {
    "id": 10,
    "slug": "oevp-schredder-affair",
    "question": "What action was taken by an ÖVP employee shortly before the vote of no confidence against Sebastian Kurz in May 2019?",
    "options": [
      { "letter": "A", "text": "He fled the country" },
      { "letter": "B", "text": "He destroyed hard drives under a false name" },
      { "letter": "C", "text": "He leaked sensitive documents to the press" },
      { "letter": "D", "text": "He confessed to election fraud" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "An employee of the Federal Chancellery (Arno M.) had five hard drives destroyed by a specialized firm (Reisswolf) using a fake name and failing to pay the bill immediately, raising suspicions of destroying evidence related to the Ibiza affair.",
    "sourceLinks": [
      { "name": "Die Presse", "url": "https://www.diepresse.com/5664115/schredder-affaere-kurz-mitarbeiter-zerstoerte-fuenf-festplatten" }
    ],
    "tags": ["ÖVP", "Justizbehinderung", "Ibiza", "2019"]
  },
  {
    "id": 11,
    "slug": "spoe-fpoe-burgenland-coalition",
    "question": "In 2015, the SPÖ leadership in Burgenland made a decision that heavily contradicted the federal party line and many voters' wishes. What was it?",
    "options": [
      { "letter": "A", "text": "Abolishing the minimum wage" },
      { "letter": "B", "text": "Forming a coalition government with the FPÖ" },
      { "letter": "C", "text": "Privatizing all hospitals" },
      { "letter": "D", "text": "Leaving the European Union" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Despite the federal SPÖ's 'Vranitzky Doctrine' excluding coalitions with the FPÖ, Governor Hans Niessl formed a red-blue coalition in Burgenland, causing significant internal conflict and voter disappointment.",
    "sourceLinks": [
      { "name": "ORF Burgenland", "url": "https://burgenland.orf.at/v2/news/stories/2714571/" }
    ],
    "tags": ["SPÖ", "Koalition", "Wählerwille", "2015"]
  },
  {
    "id": 12,
    "slug": "greens-chorherr-donations",
    "question": "Prominent Green politician Christoph Chorherr faced a long trial regarding allegations of corruption. What was the central accusation?",
    "options": [
      { "letter": "A", "text": "Embezzling party funding" },
      { "letter": "B", "text": "Accepting donations for his charity in exchange for favorable zoning decisions" },
      { "letter": "C", "text": "Forging academic credentials" },
      { "letter": "D", "text": "Illegally wiretapping opponents" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Chorherr was accused of soliciting donations for his charity project in Africa from real estate developers who simultaneously needed zoning permits from the city where he held influence. He was acquitted in 2023 due to lack of proof of a 'quid pro quo'.",
    "sourceLinks": [
      { "name": "Der Standard", "url": "https://www.derstandard.at/story/2000142838337/freispruch-fuer-christoph-chorherr-im-korruptionsprozess" }
    ],
    "tags": ["Grüne", "Korruption", "Wien", "2019"]
  },
  {
    "id": 13,
    "slug": "fpoe-graz-financial-scandal",
    "question": "In 2021, a financial scandal shook the FPÖ in Graz. What was discovered?",
    "options": [
      { "letter": "A", "text": "The party had printed counterfeit money" },
      { "letter": "B", "text": "Hundreds of thousands of euros in party funding were embezzled" },
      { "letter": "C", "text": "The mayor was a foreign spy" },
      { "letter": "D", "text": "The party headquarters was built without a permit" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "It was revealed that up to 1.8 million euros of club funding had been misappropriated for personal enrichment within the Graz FPÖ, leading to the resignation of Mario Eustacchio and investigations by the prosecutor.",
    "sourceLinks": [
      { "name": "Kleine Zeitung", "url": "https://www.kleinezeitung.at/steiermark/graz/6055554/Finanzskandal-bei-Grazer-FPOe_Es-fehlen-zumindest-18-Millionen-Euro" }
    ],
    "tags": ["FPÖ", "Veruntreuung", "Graz", "2021"]
  },
  {
    "id": 14,
    "slug": "spoe-bawag-scandal",
    "question": "The BAWAG scandal in 2006, which severely damaged the reputation of the SPÖ and the trade unions, involved:",
    "options": [
      { "letter": "A", "text": "Funding a communist revolution" },
      { "letter": "B", "text": "Losses of billions in high-risk Caribbean speculation businesses" },
      { "letter": "C", "text": "Robbing their own bank vaults" },
      { "letter": "D", "text": "Selling the bank to North Korea" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "The union-owned bank BAWAG speculated in Caribbean currency swaps with Wolfgang Flöttl, losing billions. The ÖGB had to use its strike fund to bail out the bank, leading to the resignation of ÖGB President Verzetnitsch.",
    "sourceLinks": [
      { "name": "Die Presse", "url": "https://www.diepresse.com/647900/bawag-urteil-alle-schuldig" }
    ],
    "tags": ["SPÖ", "Gewerkschaft", "Finanzskandal", "2006"]
  },
  {
    "id": 15,
    "slug": "oevp-seniorenbund-corona",
    "question": "In 2022, the Upper Austrian ÖVP Seniorenbund was criticized for claiming funds from which pot?",
    "options": [
      { "letter": "A", "text": "Educational grants for children" },
      { "letter": "B", "text": "The Non-Profit Organization (NPO) Corona Support Fund" },
      { "letter": "C", "text": "Foreign development aid" },
      { "letter": "D", "text": "Military budget" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "The ÖVP Seniorenbund in Upper Austria claimed nearly 2 million euros from the NPO fund meant for charities and clubs, despite being a political party organization. They later had to pay back a portion of the funds.",
    "sourceLinks": [
      { "name": "ORF OÖ", "url": "https://ooe.orf.at/stories/3178652/" }
    ],
    "tags": ["ÖVP", "Förderungen", "Corona", "2022"]
  },
  {
    "id": 16,
    "slug": "spoe-linz-luger-liva",
    "question": "In 2024, SPÖ Mayor of Linz Klaus Luger resigned after admitting to what?",
    "options": [
      { "letter": "A", "text": "Stealing a car" },
      { "letter": "B", "text": "Lying about passing hearing questions to a preferred candidate" },
      { "letter": "C", "text": "Secretly joining the FPÖ" },
      { "letter": "D", "text": "Falsifying his birth certificate" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Luger admitted to having leaked hearing questions to Dietmar Kerschbaum for the directorship of the Brucknerhaus years prior, and having lied about it for months when the scandal broke.",
    "sourceLinks": [
      { "name": "Der Standard", "url": "https://www.derstandard.at/story/3000000233633/linzer-buergermeister-klaus-luger-tritt-zurueck" }
    ],
    "tags": ["SPÖ", "Korruption", "Lüge", "2024"]
  },
  {
    "id": 17,
    "slug": "fpoe-united-russia-treaty",
    "question": "In 2016, the FPÖ leadership signed a 'Cooperation Agreement' with which foreign political entity?",
    "options": [
      { "letter": "A", "text": "The Republican Party (USA)" },
      { "letter": "B", "text": "United Russia (Vladimir Putin's party)" },
      { "letter": "C", "text": "The Chinese Communist Party" },
      { "letter": "D", "text": "Likud (Israel)" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Strache, Hofer, and Kickl traveled to Moscow to sign a five-year cooperation agreement with United Russia. This raised concerns about Austrian neutrality and security, especially after the invasion of Ukraine.",
    "sourceLinks": [
      { "name": "Profil", "url": "https://www.profil.at/oesterreich/fpoe-russland-vertrag-freundschaft-6338634" }
    ],
    "tags": ["FPÖ", "Russland", "Demokratie", "2016"]
  },
  {
    "id": 18,
    "slug": "oevp-telekom-affair",
    "question": "The Telekom Austria affair involved lobbyist Peter Hochegger and which crime affecting the ÖVP?",
    "options": [
      { "letter": "A", "text": "Illegal wiretapping of the Chancellor" },
      { "letter": "B", "text": "Illegal party financing via fake invoices" },
      { "letter": "C", "text": "Sabotaging the internet infrastructure" },
      { "letter": "D", "text": "Stealing mobile phones" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Telekom Austria paid millions to lobbyists like Hochegger for valueless services. This money was partly funneled into ÖVP-related organizations and the BZÖ to influence legislation and election campaigns.",
    "sourceLinks": [
      { "name": "Wirtschaftsblatt", "url": "https://de.wikipedia.org/wiki/Telekom-Aff%C3%A4re_(%C3%96sterreich)" }
    ],
    "tags": ["ÖVP", "BZÖ", "Korruption", "2011"]
  },
  {
    "id": 19,
    "slug": "fpoe-population-exchange",
    "question": "Why was Heinz-Christian Strache's use of the term 'Bevölkerungsaustausch' (population exchange) in 2019 considered problematic?",
    "options": [
      { "letter": "A", "text": "It is a grammatically incorrect term" },
      { "letter": "B", "text": "It is a code word for a right-wing extremist conspiracy theory" },
      { "letter": "C", "text": "It referred to Erasmus student programs" },
      { "letter": "D", "text": "It was a term copyrighted by another party" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "The term is central to the 'Great Replacement' conspiracy theory used by the Identitarian Movement (right-wing extremists), implying a deliberate plan to replace white Europeans. Strache defended the term as 'reality'.",
    "sourceLinks": [
      { "name": "Der Standard", "url": "https://www.derstandard.at/story/2000102146903/strache-verteidigt-begriff-bevoelkerungsaustausch" }
    ],
    "tags": ["FPÖ", "Rechtsextremismus", "Sprache", "2019"]
  },
  {
    "id": 20,
    "slug": "oevp-postenschacher-schmid",
    "question": "Thomas Schmid's appointment as head of ÖBAG was revealed to be the result of:",
    "options": [
      { "letter": "A", "text": "An international talent search" },
      { "letter": "B", "text": "Rigged hearings and chats where he wrote the job description himself" },
      { "letter": "C", "text": "A lottery system" },
      { "letter": "D", "text": "A recommendation by the EU Commission" }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Leaked chats showed that Thomas Schmid, then Secretary General in the Finance Ministry, tailored the job advertisement for the ÖBAG CEO position to his own resume and coordinated the board to ensure his appointment ('Kriegst eh alles was du willst').",
    "sourceLinks": [
      { "name": "ZackZack", "url": "https://zackzack.at/2021/03/29/kriegst-eh-alles-was-du-willst-die-schmid-protokolle" }
    ],
    "tags": ["ÖVP", "Korruption", "Postenschacher", "2019"]
  }
];

export function getQuestionById(id: number): Question | undefined {
  return questions.find(q => q.id === id);
}

export function getQuestionBySlug(slug: string): Question | undefined {
  return questions.find(q => q.slug === slug);
}

export function getRandomQuestion(excludeIds: number[] = []): Question {
  const available = questions.filter(q => !excludeIds.includes(q.id));
  if (available.length === 0) return questions[Math.floor(Math.random() * questions.length)];
  return available[Math.floor(Math.random() * available.length)];
}

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
}

export function getQuestionsByTag(tag: string): Question[] {
  return questions.filter(q => q.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  questions.forEach(q => {
    q.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
