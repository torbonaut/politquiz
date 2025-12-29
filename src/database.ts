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
    id: 1,
    slug: "law-follows-politics",
    question: 'Who said "Law has to follow politics"?',
    options: [
      { letter: "A", text: "Sebastian Kurz" },
      { letter: "B", text: "Herbert Kickl" },
      { letter: "C", text: "Leonore Gewessler" },
      { letter: "D", text: "Doris Bures" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Herbert Kickl, former Austrian Interior Minister, made this controversial statement in 2018, sparking debate about the relationship between politics and the rule of law. The statement was widely criticized as undermining the principle of separation of powers.",
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000073964568/kickl-das-recht-hat-der-politik-zu-folgen" },
      { name: "ORF", url: "https://orf.at/stories/3107252/" }
    ],
    tags: ["FPÖ", "Kickl", "Rechtsstaat", "2018"]
  },
  {
    id: 2,
    slug: "austrian-chancellor-2019",
    question: "Who became Austrian Chancellor in 2019?",
    options: [
      { letter: "A", text: "Alexander Van der Bellen" },
      { letter: "B", text: "Sebastian Kurz" },
      { letter: "C", text: "Brigitte Bierlein" },
      { letter: "D", text: "Werner Kogler" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Brigitte Bierlein became Austria's first female Chancellor in June 2019, leading a caretaker government after the Ibiza affair. She served until January 2020 and was previously the President of the Constitutional Court.",
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000104280267/brigitte-bierlein-wird-bundeskanzlerin" },
      { name: "ORF", url: "https://orf.at/stories/3123776/" }
    ],
    tags: ["Ibiza-Affäre", "2019", "Bierlein"]
  },
  {
    id: 3,
    slug: "green-party-minister",
    question: "Which Austrian Green Party politician became Climate Minister in 2020?",
    options: [
      { letter: "A", text: "Werner Kogler" },
      { letter: "B", text: "Leonore Gewessler" },
      { letter: "C", text: "Alma Zadić" },
      { letter: "D", text: "Sigi Maurer" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Leonore Gewessler became Austria's Minister for Climate Action, Environment, Energy, Mobility, Innovation and Technology in January 2020 as part of the ÖVP-Green coalition government."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 4,
    slug: "parliament-president",
    question: "Who has been President of the Austrian National Council since 2017?",
    options: [
      { letter: "A", text: "Doris Bures" },
      { letter: "B", text: "Wolfgang Sobotka" },
      { letter: "C", text: "Norbert Hofer" },
      { letter: "D", text: "Barbara Prammer" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Wolfgang Sobotka (ÖVP) has served as President of the Austrian National Council since January 2017. He previously served as Interior Minister from 2016 to 2017."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 5,
    slug: "ibiza-affair-year",
    question: "In which year did the Ibiza affair scandal break?",
    options: [
      { letter: "A", text: "2017" },
      { letter: "B", text: "2018" },
      { letter: "C", text: "2019" },
      { letter: "D", text: "2020" }
    ],
    correctAnswer: "C",
    backgroundInfo: "The Ibiza affair was a political scandal that erupted in May 2019, involving hidden camera footage from 2017 of then-Vice Chancellor Heinz-Christian Strache. The scandal led to the collapse of the Austrian government.",
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000103271749/ibiza-affaere-chronologie-des-skandals" },
      { name: "ORF", url: "https://orf.at/stories/3122820/" }
    ]
  },
  {
    id: 6,
    slug: "fpoe-strache-ibiza-corruption",
    question: "What did Heinz-Christian Strache offer to a supposed Russian oligarch's niece in the Ibiza video?",
    options: [
      { letter: "A", text: "Government contracts in exchange for campaign support" },
      { letter: "B", text: "Political asylum" },
      { letter: "C", text: "Austrian citizenship" },
      { letter: "D", text: "A ministerial position" }
    ],
    correctAnswer: "A",
    backgroundInfo: "In the 2017 Ibiza video, Strache discussed giving lucrative government contracts to a woman posing as a Russian oligarch's niece in exchange for campaign financing, revealing corrupt intentions."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000103271749/ibiza-affaere-chronologie-des-skandals" },
      { name: "Der Spiegel", url: "https://www.spiegel.de/politik/ausland/oesterreich-das-strache-video-a-1267959.html" }
    ]
  },
  {
    id: 7,
    slug: "fpoe-gudenus-suspension",
    question: "Which FPÖ politician was also implicated in the Ibiza affair alongside Strache?",
    options: [
      { letter: "A", text: "Norbert Hofer" },
      { letter: "B", text: "Johann Gudenus" },
      { letter: "C", text: "Herbert Kickl" },
      { letter: "D", text: "Heinz-Christian Strache" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Johann Gudenus, an FPÖ politician and close ally of Strache, was also present during the Ibiza meeting and had to resign from all his political positions."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 8,
    slug: "fpoe-liederbuch-scandal",
    question: "What Nazi-era content was found in the songbook of an FPÖ-linked student fraternity in 2018?",
    options: [
      { letter: "A", text: "Songs glorifying the Wehrmacht" },
      { letter: "B", text: "Antisemitic lyrics and references to the Holocaust" },
      { letter: "C", text: "Both A and B" },
      { letter: "D", text: "None, it was a false accusation" }
    ],
    correctAnswer: "C",
    backgroundInfo: "The songbook of the Germania fraternity in Wiener Neustadt contained antisemitic songs and references glorifying Nazi Germany, leading to investigations and public outcry."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000073964568/fpoe-liederbuch-skandal" },
      { name: "Die Zeit", url: "https://www.zeit.de/politik/ausland/2018-01/oesterreich-fpoe-liederbuch-antisemitismus" }
    ],
    tags: ["FPÖ", "Rechtsextrem", "Antisemitismus", "2018"]
  },
  {
    id: 9,
    slug: "fpoe-aula-magazine",
    question: "What happened to the FPÖ-affiliated magazine 'Aula' after it called concentration camp survivors 'criminals'?",
    options: [
      { letter: "A", text: "Nothing, it continued publishing" },
      { letter: "B", text: "It received a warning" },
      { letter: "C", text: "It was shut down and the publisher faced legal action" },
      { letter: "D", text: "It was rebranded" }
    ],
    correctAnswer: "C",
    backgroundInfo: "The right-wing magazine 'Aula', with close ties to the FPÖ, ceased publication in 2018 after calling concentration camp survivors 'criminals' and 'fraudsters', leading to lawsuits and public pressure."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 10,
    slug: "fpoe-reichsadler-ring",
    question: "What did FPÖ candidate Udo Landbauer have to explain regarding a fraternity ring?",
    options: [
      { letter: "A", text: "It was stolen property" },
      { letter: "B", text: "It featured a Reichsadler (Nazi eagle) symbol" },
      { letter: "C", text: "It was made of illegal ivory" },
      { letter: "D", text: "It was too expensive" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Udo Landbauer's fraternity ring featured a Reichsadler symbol similar to Nazi iconography, causing controversy and questions about his democratic values."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 11,
    slug: "fpoe-kussel-wiederbetaetigung",
    question: "What was Gottfried Küssel, connected to FPÖ circles, convicted of?",
    options: [
      { letter: "A", text: "Tax evasion" },
      { letter: "B", text: "Nazi activities (Wiederbetätigung)" },
      { letter: "C", text: "Assault" },
      { letter: "D", text: "Fraud" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Gottfried Küssel was convicted multiple times for Nazi activities (Wiederbetätigung), including running neo-Nazi websites, despite maintaining connections to FPÖ-affiliated circles."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 12,
    slug: "fpoe-rat-poem",
    question: "What controversial comparison did FPÖ politician Christian Höbart make in a Facebook post?",
    options: [
      { letter: "A", text: "Compared immigrants to animals" },
      { letter: "B", text: "Shared a poem comparing rats with immigrants" },
      { letter: "C", text: "Compared political opponents to Nazis" },
      { letter: "D", text: "Compared Vienna to a war zone" }
    ],
    correctAnswer: "B",
    backgroundInfo: "In 2016, FPÖ politician Christian Höbart shared a poem on Facebook that compared immigrants to rats, echoing Nazi propaganda tactics and causing widespread condemnation."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 13,
    slug: "fpoe-kickl-concentration-camp",
    question: "What term did Herbert Kickl use that was criticized for its Nazi connotations?",
    options: [
      { letter: "A", text: "'Final solution'" },
      { letter: "B", text: "'Concentration of asylum seekers'" },
      { letter: "C", text: "'Volksgemeinschaft'" },
      { letter: "D", text: "'Lebensraum'" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Herbert Kickl used the term 'concentrate' (konzentrieren) when discussing housing asylum seekers, which critics noted used language uncomfortably similar to 'concentration camp' terminology."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 14,
    slug: "fpoe-breivik-picture",
    question: "Which FPÖ politician had to resign after sharing content related to mass murderer Anders Breivik?",
    options: [
      { letter: "A", text: "Christian Schilcher" },
      { letter: "B", text: "Markus Tschank" },
      { letter: "C", text: "Harald Vilimsky" },
      { letter: "D", text: "Norbert Hofer" }
    ],
    correctAnswer: "A",
    backgroundInfo: "FPÖ politician Christian Schilcher had to resign after it was revealed he shared sympathetic content about Norwegian terrorist Anders Breivik on social media."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 15,
    slug: "fpoe-hitler-birthday",
    question: "What happened to several FPÖ members who were caught celebrating Hitler's birthday?",
    options: [
      { letter: "A", text: "They were promoted" },
      { letter: "B", text: "Nothing happened" },
      { letter: "C", text: "They faced party expulsion and legal proceedings" },
      { letter: "D", text: "They received a warning" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Multiple incidents have occurred where FPÖ members were caught celebrating Hitler's birthday (April 20), leading to party expulsions and investigations under Austria's prohibition law."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 16,
    slug: "fpoe-waldhaeusl-refugee-guards",
    question: "What did FPÖ politician Gottfried Waldhäusl propose for refugee facilities?",
    options: [
      { letter: "A", text: "Better education programs" },
      { letter: "B", text: "Security guards with guard dogs and high fences" },
      { letter: "C", text: "More social workers" },
      { letter: "D", text: "Sports facilities" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Lower Austrian FPÖ politician Gottfried Waldhäusl proposed refugee facilities with guard dogs and high security fences, creating detention-like conditions that drew comparisons to concentration camps."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 17,
    slug: "fpoe-ss-rune-tattoo",
    question: "What controversy surrounded FPÖ politician Matthias Feurstein?",
    options: [
      { letter: "A", text: "Corruption charges" },
      { letter: "B", text: "A tattoo resembling SS runes" },
      { letter: "C", text: "Tax evasion" },
      { letter: "D", text: "Drunk driving" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Vorarlberg FPÖ politician Matthias Feurstein was photographed with what appeared to be an SS rune tattoo, though he claimed it was an old symbol from his youth that he had removed."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 18,
    slug: "fpoe-haimbuchner-mauthausen",
    question: "What did FPÖ politician Manfred Haimbuchner refuse to do at the Mauthausen memorial?",
    options: [
      { letter: "A", text: "Make a donation" },
      { letter: "B", text: "Attend the liberation ceremony" },
      { letter: "C", text: "Sign the guest book" },
      { letter: "D", text: "Give a speech" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ Deputy Governor Manfred Haimbuchner initially refused to attend the annual liberation ceremony at the Mauthausen concentration camp memorial, later reversing his decision after public pressure."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 19,
    slug: "fpoe-weapon-scandal",
    question: "What was discovered about FPÖ-linked groups regarding weapons?",
    options: [
      { letter: "A", text: "They were legally collecting antiques" },
      { letter: "B", text: "Illegal weapons caches and paramilitary training" },
      { letter: "C", text: "They ran legal gun shops" },
      { letter: "D", text: "Nothing unusual" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Investigations revealed that some FPÖ-connected individuals and groups maintained illegal weapons arsenals and conducted paramilitary training, raising concerns about anti-democratic activities."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 20,
    slug: "fpoe-strache-ns-rhetoric",
    question: "For which statement was Strache criticized for using Nazi rhetoric?",
    options: [
      { letter: "A", text: "'Austria first'" },
      { letter: "B", text: "'Daham statt Islam' (Home instead of Islam)" },
      { letter: "C", text: "'Work sets you free'" },
      { letter: "D", text: "All of the above" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Strache's 'Daham statt Islam' slogan was criticized for its xenophobic message and for echoing Nazi-era exclusionary rhetoric, though option C would have been even more directly Nazi."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 21,
    slug: "fpoe-dornauer-hunting",
    question: "What scandal involved FPÖ politician Georg Dornauer?",
    options: [
      { letter: "A", text: "Illegal hunting with a weapons dealer" },
      { letter: "B", text: "Tax fraud" },
      { letter: "C", text: "Embezzlement" },
      { letter: "D", text: "Plagiarism" }
    ],
    correctAnswer: "A",
    backgroundInfo: "Tyrolean SPÖ (not FPÖ) politician Georg Dornauer was involved in a hunting scandal with a weapons dealer, though this is often confused with FPÖ scandals due to similar patterns."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 22,
    slug: "fpoe-identitaere-connections",
    question: "What is the relationship between the FPÖ and the 'Identitäre Bewegung' (Identitarian Movement)?",
    options: [
      { letter: "A", text: "No connection" },
      { letter: "B", text: "Official partnership" },
      { letter: "C", text: "Multiple documented personal and ideological connections" },
      { letter: "D", text: "They are opponents" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Despite official denials, numerous FPÖ members and staffers have been documented as having personal, financial, and ideological connections to the far-right Identitarian Movement."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 23,
    slug: "fpoe-sellner-donations",
    question: "What controversy emerged regarding Christchurch terrorist and the Identitarians?",
    options: [
      { letter: "A", text: "No connection existed" },
      { letter: "B", text: "The terrorist donated to Martin Sellner's Identitarian Movement" },
      { letter: "C", text: "They were business partners" },
      { letter: "D", text: "It was a media fabrication" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The Christchurch mosque shooter donated €1,500 to Martin Sellner's Identitarian Movement, revealing international connections between far-right extremists and Austrian groups linked to FPÖ circles."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 24,
    slug: "fpoe-facebook-hate-speech",
    question: "How many FPÖ-related Facebook pages were removed for hate speech violations in recent years?",
    options: [
      { letter: "A", text: "None" },
      { letter: "B", text: "1-2" },
      { letter: "C", text: "Dozens" },
      { letter: "D", text: "Over 100" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Facebook has removed dozens of FPÖ-affiliated pages and accounts for violating hate speech policies, including pages by local party chapters and individual politicians."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 25,
    slug: "fpoe-bvt-scandal",
    question: "What scandal involved the BVT (Austrian domestic intelligence) under FPÖ leadership?",
    options: [
      { letter: "A", text: "Illegal surveillance of politicians" },
      { letter: "B", text: "Raids that compromised international intelligence cooperation" },
      { letter: "C", text: "Both A and B" },
      { letter: "D", text: "No scandal occurred" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Under Herbert Kickl's Interior Ministry, controversial raids on the BVT led to compromised intelligence operations, damaged international cooperation, and allegations of political interference."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000097784424/bvt-affaere-chronologie" },
      { name: "ORF", url: "https://orf.at/stories/3110633/" }
    ]
  },
  {
    id: 26,
    slug: "fpoe-orban-connections",
    question: "What relationship does the FPÖ maintain with Hungary's Viktor Orbán?",
    options: [
      { letter: "A", text: "They are opponents" },
      { letter: "B", text: "No relationship" },
      { letter: "C", text: "Close political alliance and mutual support" },
      { letter: "D", text: "Purely economic cooperation" }
    ],
    correctAnswer: "C",
    backgroundInfo: "The FPÖ maintains close ties with Viktor Orbán's Fidesz party, regularly praising Hungary's anti-democratic measures and authoritarian governance as a model."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000128745612/fpoe-und-orban-eine-besondere-beziehung" },
      { name: "Die Presse", url: "https://www.diepresse.com/5686420/fpoe-und-orban-ideologische-brueder" }
    ]
  },
  {
    id: 27,
    slug: "fpoe-rosenkranz-burschenschaft",
    question: "To which controversial student fraternity does FPÖ politician Walter Rosenkranz belong?",
    options: [
      { letter: "A", text: "None" },
      { letter: "B", text: "A democratic student organization" },
      { letter: "C", text: "Libertas, a right-wing fraternity" },
      { letter: "D", text: "A sports club" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Walter Rosenkranz is a member of the Libertas fraternity, one of many German nationalist student corporations with ties to the FPÖ known for their right-wing ideology."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 28,
    slug: "fpoe-refugee-children-segregation",
    question: "What did FPÖ-led districts propose for refugee children in schools?",
    options: [
      { letter: "A", text: "Extra language support" },
      { letter: "B", text: "Separate classes/segregation" },
      { letter: "C", text: "Longer school days" },
      { letter: "D", text: "Better integration programs" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ politicians proposed separating refugee children into separate classes, a form of segregation criticized as discriminatory and harmful to integration."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 29,
    slug: "fpoe-Graf-holocaust-relativization",
    question: "What did FPÖ politician Martin Graf say that was criticized as Holocaust relativization?",
    options: [
      { letter: "A", text: "Denied the Holocaust" },
      { letter: "B", text: "Downplayed Nazi crimes by comparing them to other events" },
      { letter: "C", text: "Nothing controversial" },
      { letter: "D", text: "Supported Holocaust education" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Martin Graf, who served as Third President of the National Council, made statements relativizing the Holocaust by making inappropriate historical comparisons."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 30,
    slug: "fpoe-turkish-membership",
    question: "What discriminatory membership policy was revealed in some FPÖ local chapters?",
    options: [
      { letter: "A", text: "No women allowed" },
      { letter: "B", text: "Only Christians allowed" },
      { letter: "C", text: "Exclusion of people with 'non-German' names" },
      { letter: "D", text: "All of the above" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Several FPÖ local chapters were found to have unofficial policies excluding people with Turkish or other non-German sounding names from membership."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 31,
    slug: "fpoe-strache-facebook-fake",
    question: "What was discovered about Strache's Facebook engagement?",
    options: [
      { letter: "A", text: "It was all genuine" },
      { letter: "B", text: "Use of fake accounts and bots to inflate support" },
      { letter: "C", text: "He didn't use social media" },
      { letter: "D", text: "Only foreign supporters" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Investigations revealed that Strache's team used fake accounts, bots, and coordinated networks to artificially inflate his social media presence and create false impressions of support."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 32,
    slug: "fpoe-wehrsportgruppe",
    question: "What type of groups have some FPÖ members been connected to?",
    options: [
      { letter: "A", text: "Charity organizations" },
      { letter: "B", text: "Paramilitary 'Wehrsportgruppen' (defense sport groups)" },
      { letter: "C", text: "Environmental groups" },
      { letter: "D", text: "Cultural associations only" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Several FPÖ members have been linked to paramilitary 'Wehrsportgruppen' - illegal defense sport groups that conduct military-style training, some with neo-Nazi ideologies."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 33,
    slug: "fpoe-vilimsky-soros",
    question: "What antisemitic conspiracy theory has FPÖ's Harald Vilimsky promoted?",
    options: [
      { letter: "A", text: "None" },
      { letter: "B", text: "George Soros controls the EU" },
      { letter: "C", text: "Reptilian overlords" },
      { letter: "D", text: "Moon landing hoax" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ MEP Harald Vilimsky has repeatedly promoted antisemitic conspiracy theories about George Soros supposedly controlling European politics, echoing classic antisemitic tropes."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 34,
    slug: "fpoe-press-freedom",
    question: "What did Herbert Kickl propose regarding critical journalists?",
    options: [
      { letter: "A", text: "Press awards" },
      { letter: "B", text: "Investigating and potentially punishing critical media" },
      { letter: "C", text: "Better press conferences" },
      { letter: "D", text: "Journalism scholarships" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Kickl suggested investigating critical journalists and media outlets, raising concerns about press freedom and authoritarian tendencies."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 35,
    slug: "fpoe-mauthausen-gelöbnis",
    question: "What tradition did the FPÖ break regarding Mauthausen memorial events?",
    options: [
      { letter: "A", text: "Started attending more frequently" },
      { letter: "B", text: "Refused to participate in official ceremonies" },
      { letter: "C", text: "Donated more money" },
      { letter: "D", text: "No change in tradition" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ frequently refuses to participate in Mauthausen liberation ceremonies, breaking with the tradition of all democratic parties honoring Holocaust victims."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 36,
    slug: "fpoe-historical-revisionism",
    question: "What historical position does the FPÖ often take regarding Austria's Nazi past?",
    options: [
      { letter: "A", text: "Full acknowledgment of responsibility" },
      { letter: "B", text: "Emphasis on Austria as 'first victim' of Hitler" },
      { letter: "C", text: "Demands for more education" },
      { letter: "D", text: "Strong anti-Nazi stance" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ often emphasizes the outdated 'victim theory' that Austria was Hitler's first victim, downplaying Austrian complicity and responsibility for Nazi crimes."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 37,
    slug: "fpoe-aryanization-profit",
    question: "What was discovered about some FPÖ members' families regarding Nazi-era property?",
    options: [
      { letter: "A", text: "They were victims of theft" },
      { letter: "B", text: "Some benefited from 'Aryanization' of Jewish property" },
      { letter: "C", text: "They lost everything" },
      { letter: "D", text: "No connection to Nazi era" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Research has shown that families of some prominent FPÖ members benefited from the Nazi-era 'Aryanization' - the theft of Jewish property - without proper restitution."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 38,
    slug: "fpoe-wdr-symbol",
    question: "What controversial symbol has appeared at FPÖ events?",
    options: [
      { letter: "A", text: "Peace symbols" },
      { letter: "B", text: "Cornflower (Kornblume), historically worn by illegal Nazis" },
      { letter: "C", text: "Rainbow flags" },
      { letter: "D", text: "EU flags" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The cornflower (Kornblume) appears at FPÖ events; it was historically a secret recognition symbol for illegal Nazis in Austria before 1938."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 39,
    slug: "fpoe-auslaenderraus",
    question: "What slogan used by FPÖ campaigns was criticized as xenophobic?",
    options: [
      { letter: "A", text: "'Welcome refugees'" },
      { letter: "B", text: "'Pummerin statt Muezzin' and similar anti-Muslim slogans" },
      { letter: "C", text: "'Diversity is strength'" },
      { letter: "D", text: "'Unity in Europe'" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has used slogans like 'Pummerin statt Muezzin' (church bells instead of Muslim call to prayer) and others that critics say fuel xenophobia and Islamophobia."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 40,
    slug: "fpoe-akademikerball",
    question: "What annual event organized by FPÖ-linked groups regularly attracts far-right extremists?",
    options: [
      { letter: "A", text: "Christmas market" },
      { letter: "B", text: "The WKR-Ball/Akademikerball" },
      { letter: "C", text: "Summer festival" },
      { letter: "D", text: "Oktoberfest" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The Akademikerball (formerly WKR-Ball), organized by FPÖ-linked fraternities in Vienna's Hofburg, regularly attracts European far-right extremists and faces annual protests."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 41,
    slug: "fpoe-volkstreuer",
    question: "What was discovered about FPÖ politician Heinrich Sickl?",
    options: [
      { letter: "A", text: "He won a peace prize" },
      { letter: "B", text: "He was member of a neo-Nazi group" },
      { letter: "C", text: "He started a charity" },
      { letter: "D", text: "He wrote children's books" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Heinrich Sickl, an FPÖ local politician, was exposed as a member of the neo-Nazi group 'Volkstreue außerparlamentarische Opposition' (VAPO)."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 42,
    slug: "fpoe-breiteneder-nazi-music",
    question: "What was Stefan Breiteneder, an FPÖ youth organization member, caught doing?",
    options: [
      { letter: "A", text: "Volunteer work" },
      { letter: "B", text: "Playing in a neo-Nazi band" },
      { letter: "C", text: "Teaching music" },
      { letter: "D", text: "Nothing controversial" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Stefan Breiteneder was active in the FPÖ youth organization while playing in a neo-Nazi band, demonstrating the overlap between FPÖ structures and far-right extremism."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 43,
    slug: "fpoe-meme-antisemitic",
    question: "What type of imagery has repeatedly appeared in FPÖ social media posts?",
    options: [
      { letter: "A", text: "Kittens and puppies" },
      { letter: "B", text: "Antisemitic caricatures and Nazi-style propaganda" },
      { letter: "C", text: "Landscape photos" },
      { letter: "D", text: "Sports imagery" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ social media accounts have repeatedly posted imagery featuring antisemitic caricatures, including depictions reminiscent of Nazi-era propaganda like the octopus controlling the world."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 44,
    slug: "fpoe-rfj-scandal",
    question: "What has the FPÖ youth organization (RFJ) been repeatedly criticized for?",
    options: [
      { letter: "A", text: "Too much studying" },
      { letter: "B", text: "Members making Nazi salutes and extremist statements" },
      { letter: "C", text: "Excessive charity work" },
      { letter: "D", text: "Environmental activism" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The Ring Freiheitlicher Jugend (RFJ) has been involved in numerous scandals involving members making Nazi salutes, sharing extremist content, and making antisemitic statements."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 45,
    slug: "fpoe-eu-criticism",
    question: "What is the FPÖ's position on the European Union?",
    options: [
      { letter: "A", text: "Strong EU federalism supporter" },
      { letter: "B", text: "Eurosceptic, promoted 'Öxit'" },
      { letter: "C", text: "EU expansion advocate" },
      { letter: "D", text: "No position" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ is strongly Eurosceptic and has promoted 'Öxit' (Austrian exit from the EU), undermining European cooperation and democratic institutions."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 46,
    slug: "fpoe-replacement-theory",
    question: "Which conspiracy theory do FPÖ politicians frequently promote?",
    options: [
      { letter: "A", text: "Flat Earth" },
      { letter: "B", text: "'Great Replacement' theory" },
      { letter: "C", text: "Moon landing hoax" },
      { letter: "D", text: "Chemtrails" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ politicians regularly promote the 'Great Replacement' conspiracy theory, claiming a deliberate plan to replace Europeans with immigrants - a theory cited by multiple far-right terrorists."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 47,
    slug: "fpoe-gender-ideology",
    question: "What is the FPÖ's stance on LGBTQ+ rights?",
    options: [
      { letter: "A", text: "Strong supporter" },
      { letter: "B", text: "Opposes 'gender ideology' and LGBTQ+ rights" },
      { letter: "C", text: "Neutral" },
      { letter: "D", text: "Leading advocate for pride events" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ opposes LGBTQ+ rights, uses the term 'gender ideology' pejoratively, and has voted against measures protecting LGBTQ+ individuals from discrimination."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 48,
    slug: "fpoe-minaret-ban",
    question: "What did the FPÖ campaign for regarding religious buildings?",
    options: [
      { letter: "A", text: "More churches" },
      { letter: "B", text: "Ban on minarets and mosques" },
      { letter: "C", text: "Synagogue restoration" },
      { letter: "D", text: "Temple construction" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has campaigned against mosque and minaret construction, promoting religious discrimination and violating freedom of religion."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 49,
    slug: "fpoe-kickl-remigration",
    question: "What controversial term has Herbert Kickl used regarding immigrants?",
    options: [
      { letter: "A", text: "Integration" },
      { letter: "B", text: "'Remigration' - forced return of immigrants" },
      { letter: "C", text: "Welcome culture" },
      { letter: "D", text: "Multiculturalism" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Kickl has promoted 'Remigration,' a far-right concept involving the forced return or deportation of immigrants and even naturalized citizens, echoing ethnic cleansing rhetoric."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 50,
    slug: "fpoe-court-independence",
    question: "What position has the FPÖ taken regarding constitutional courts?",
    options: [
      { letter: "A", text: "Strengthening judicial independence" },
      { letter: "B", text: "Attacking courts that rule against them" },
      { letter: "C", text: "Increasing court funding" },
      { letter: "D", text: "Supporting all court decisions" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ regularly attacks the Constitutional Court and other courts when rulings go against their policies, undermining judicial independence and rule of law."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 51,
    slug: "fpoe-bfj-founding",
    question: "Who founded the FPÖ's predecessor party, the VdU, after WWII?",
    options: [
      { letter: "A", text: "Resistance fighters" },
      { letter: "B", text: "Former Nazis and German nationalists" },
      { letter: "C", text: "Social democrats" },
      { letter: "D", text: "Christian conservatives" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ's predecessor, the VdU (Verband der Unabhängigen), was founded largely by former Nazis and German nationalists as a political home after WWII denazification."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 52,
    slug: "fpoe-haider-ss-meeting",
    question: "What did former FPÖ leader Jörg Haider controversially say about SS veterans?",
    options: [
      { letter: "A", text: "Condemned them" },
      { letter: "B", text: "Praised them as 'men of honor' and 'decent people'" },
      { letter: "C", text: "Ignored them" },
      { letter: "D", text: "Called for their prosecution" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Jörg Haider infamously praised Waffen-SS veterans as 'decent people of character' at a 1995 meeting, causing international outrage and EU sanctions against Austria."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/1826881/haider-ss-veteranen-anstaendige-menschen" },
      { name: "Der Spiegel", url: "https://www.spiegel.de/politik/ausland/haider-nennt-waffen-ss-anstaendige-menschen-a-40612.html" }
    ]
  },
  {
    id: 53,
    slug: "fpoe-orderly-employment",
    question: "What did Jörg Haider say about Nazi employment policy?",
    options: [
      { letter: "A", text: "It was criminal" },
      { letter: "B", text: "Praised Nazi Germany's 'orderly employment policy'" },
      { letter: "C", text: "Never mentioned it" },
      { letter: "D", text: "Criticized it strongly" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Haider praised the Third Reich's 'orderly employment policy,' a statement that relativized Nazi crimes and ignored that this policy relied on slave labor and genocide."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 54,
    slug: "fpoe-eu-sanctions-2000",
    question: "What happened when the FPÖ entered government in 2000?",
    options: [
      { letter: "A", text: "EU celebration" },
      { letter: "B", text: "EU imposed diplomatic sanctions on Austria" },
      { letter: "C", text: "Nothing unusual" },
      { letter: "D", text: "Economic boom" }
    ],
    correctAnswer: "B",
    backgroundInfo: "When the ÖVP formed a coalition with Haider's FPÖ in 2000, the EU-14 imposed unprecedented diplomatic sanctions on Austria due to concerns about the FPÖ's extremism."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000014382658/eu-sanktionen-gegen-oesterreich-2000" },
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Sanktionen_der_Europ%C3%A4ischen_Union_gegen_%C3%96sterreich_im_Jahr_2000" }
    ]
  },
  {
    id: 55,
    slug: "fpoe-militia-rhetoric",
    question: "What militant language has Herbert Kickl used?",
    options: [
      { letter: "A", text: "Only peaceful terms" },
      { letter: "B", text: "Called for building a 'civilian militia' against refugees" },
      { letter: "C", text: "Pacifist rhetoric" },
      { letter: "D", text: "No notable statements" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Kickl has used militant rhetoric, including suggestions about forming civilian groups to 'defend' against refugees, raising concerns about vigilantism and political violence."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 56,
    slug: "fpoe-media-attacks",
    question: "What term do FPÖ politicians use for mainstream media?",
    options: [
      { letter: "A", text: "'Fourth estate'" },
      { letter: "B", text: "'Lügenpresse' (lying press) and 'system media'" },
      { letter: "C", text: "'Free press'" },
      { letter: "D", text: "'Watchdogs of democracy'" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ regularly uses terms like 'Lügenpresse' (lying press, a Nazi-era term) and 'system media' to delegitimize critical journalism and undermine press freedom."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 57,
    slug: "fpoe-covid-conspiracy",
    question: "What position did many FPÖ politicians take during COVID-19?",
    options: [
      { letter: "A", text: "Supported public health measures" },
      { letter: "B", text: "Promoted conspiracy theories and opposed vaccines" },
      { letter: "C", text: "Led vaccination campaigns" },
      { letter: "D", text: "Followed scientific consensus" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Many FPÖ politicians promoted COVID-19 conspiracy theories, opposed vaccinations and health measures, and allied with far-right COVID-denying movements."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ],
    tags: ["FPÖ", "COVID", "Verschwörungstheorien"]
  },
  {
    id: 58,
    slug: "fpoe-lockdown-protest",
    question: "Who did the FPÖ ally with during COVID protests?",
    options: [
      { letter: "A", text: "Medical professionals" },
      { letter: "B", text: "Far-right extremists and conspiracy theorists" },
      { letter: "C", text: "Scientists" },
      { letter: "D", text: "Public health officials" }
    ],
    correctAnswer: "B",
    backgroundInfo: "During COVID protests, FPÖ politicians appeared alongside known far-right extremists, QAnon supporters, and conspiracy theorists, normalizing extremist movements."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 59,
    slug: "fpoe-climate-denial",
    question: "What is the FPÖ's position on climate change?",
    options: [
      { letter: "A", text: "Leading climate action" },
      { letter: "B", text: "Climate science denial and opposition to climate action" },
      { letter: "C", text: "Carbon neutrality by 2030" },
      { letter: "D", text: "Green energy promotion" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ denies or downplays climate science, opposes climate protection measures, and promotes conspiracy theories about climate change being a hoax."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 60,
    slug: "fpoe-women-rights",
    question: "What is the FPÖ's record on women's rights?",
    options: [
      { letter: "A", text: "Champions of feminism" },
      { letter: "B", text: "Opposes reproductive rights and promotes traditional gender roles" },
      { letter: "C", text: "Leaders in gender equality" },
      { letter: "D", text: "Supports abortion rights" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ opposes abortion rights, promotes traditional gender roles, and has voted against measures to combat domestic violence and improve gender equality."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 61,
    slug: "fpoe-russia-connections",
    question: "What relationship does the FPÖ have with Russia?",
    options: [
      { letter: "A", text: "Critical opponent" },
      { letter: "B", text: "Formal cooperation agreement and close ties with Putin's party" },
      { letter: "C", text: "No contact" },
      { letter: "D", text: "Only economic ties" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ signed a cooperation agreement with Putin's United Russia party and maintains close ties to the Kremlin, raising concerns about foreign influence on Austrian politics."
,
    sourceLinks: [
      { name: "Der Standard", url: "https://www.derstandard.at/story/2000089425806/fpoe-und-putin-eine-lange-freundschaft" },
      { name: "The Guardian", url: "https://www.theguardian.com/world/2018/dec/17/hc-strache-vienna-moscow-austria-freedom-party" }
    ]
  },
  {
    id: 62,
    slug: "fpoe-strache-putin-wedding",
    question: "What controversial event did Strache attend in Russia?",
    options: [
      { letter: "A", text: "Business conference" },
      { letter: "B", text: "Wedding of Putin's deputy where he danced with the bride" },
      { letter: "C", text: "Diplomatic meeting" },
      { letter: "D", text: "Academic lecture" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Strache attended the wedding of a top Russian official, was photographed dancing with the bride, demonstrating the close personal ties between FPÖ leadership and the Kremlin."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 63,
    slug: "fpoe-crimea-annexation",
    question: "What was the FPÖ's position on Russia's annexation of Crimea?",
    options: [
      { letter: "A", text: "Condemned it" },
      { letter: "B", text: "Supported it and opposed EU sanctions" },
      { letter: "C", text: "No position" },
      { letter: "D", text: "Called for military intervention" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ supported Russia's illegal annexation of Crimea, opposed EU sanctions against Russia, and sent 'election observers' to legitimize sham referendums."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 64,
    slug: "fpoe-asylum-pushback",
    question: "What illegal measure has the FPÖ promoted at borders?",
    options: [
      { letter: "A", text: "Better reception facilities" },
      { letter: "B", text: "Illegal 'pushbacks' of asylum seekers" },
      { letter: "C", text: "Faster processing" },
      { letter: "D", text: "Legal aid for refugees" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has promoted illegal 'pushbacks' - forcibly turning away asylum seekers without processing their claims - violating international refugee law and human rights."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 65,
    slug: "fpoe-social-benefits-ethnicity",
    question: "What discriminatory social policy has the FPÖ proposed?",
    options: [
      { letter: "A", text: "Universal basic income" },
      { letter: "B", text: "Different welfare benefits based on ethnicity/origin" },
      { letter: "C", text: "Increased benefits for all" },
      { letter: "D", text: "Better healthcare for everyone" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed tiered social welfare systems that discriminate based on national origin or ethnicity, violating equality principles and EU law."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 66,
    slug: "fpoe-dual-citizenship",
    question: "What has the FPÖ proposed regarding citizenship for German-speaking South Tyroleans vs others?",
    options: [
      { letter: "A", text: "Equal treatment" },
      { letter: "B", text: "Dual citizenship for South Tyroleans, denied to others" },
      { letter: "C", text: "No dual citizenship for anyone" },
      { letter: "D", text: "Dual citizenship for all" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ supports dual citizenship for German-speaking South Tyroleans while opposing it for others, revealing ethnic-based discrimination in citizenship policy."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 67,
    slug: "fpoe-hofer-wehrmacht",
    question: "What did Norbert Hofer wear that caused controversy?",
    options: [
      { letter: "A", text: "Modern suit" },
      { letter: "B", text: "Cornflower associated with Nazis" },
      { letter: "C", text: "Peace symbol" },
      { letter: "D", text: "EU flag pin" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Norbert Hofer wore a cornflower (Kornblume) during his presidential campaign, a symbol historically associated with illegal Austrian Nazis before the Anschluss."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 68,
    slug: "fpoe-islam-center-vienna",
    question: "What did the FPÖ demand regarding Islamic religious practice?",
    options: [
      { letter: "A", text: "Build more mosques" },
      { letter: "B", text: "Close the Islamic Center and ban 'political Islam'" },
      { letter: "C", text: "Interfaith dialogue" },
      { letter: "D", text: "Religious education funding" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has demanded closing Vienna's Islamic Center and banning 'political Islam' - vague terminology that threatens freedom of religion and targets Muslims collectively."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 69,
    slug: "fpoe-unified-german",
    question: "What has the FPÖ's program historically stated about German identity?",
    options: [
      { letter: "A", text: "Austria is not German" },
      { letter: "B", text: "Promotes pan-German nationalism" },
      { letter: "C", text: "Focus on Austrian identity only" },
      { letter: "D", text: "European identity" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ program has promoted pan-German nationalism, viewing Austrians as part of a German cultural and ethnic community, echoing pre-Anschluss ideology."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 70,
    slug: "fpoe-verbotsgesetz-weaken",
    question: "What has the FPÖ suggested regarding Austria's Nazi prohibition law (Verbotsgesetz)?",
    options: [
      { letter: "A", text: "Strengthening it" },
      { letter: "B", text: "Weakening or abolishing it" },
      { letter: "C", text: "Expanding it" },
      { letter: "D", text: "Better enforcement" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ politicians have suggested weakening the Verbotsgesetz (law prohibiting Nazi activities), claiming it restricts free speech, despite its importance in preventing Nazi revival."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 71,
    slug: "fpoe-antifa-enemy",
    question: "How does the FPÖ characterize anti-fascist activists?",
    options: [
      { letter: "A", text: "Democratic allies" },
      { letter: "B", text: "As terrorists and the 'real fascists'" },
      { letter: "C", text: "Peaceful protesters" },
      { letter: "D", text: "Legitimate critics" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ regularly portrays anti-fascist activists as terrorists and the 'real fascists,' inverting reality and delegitimizing democratic opposition to far-right extremism."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 72,
    slug: "fpoe-sorority-exclusion",
    question: "What is the FPÖ's position on women in student fraternities?",
    options: [
      { letter: "A", text: "Full equality" },
      { letter: "B", text: "Supports male-only fraternities, excluding women" },
      { letter: "C", text: "Promotes women's leadership" },
      { letter: "D", text: "Feminist organization" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ-linked student fraternities maintain male-only membership policies, and the party supports these discriminatory practices rooted in 19th-century gender hierarchies."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 73,
    slug: "fpoe-constitutional-change",
    question: "What constitutional changes has the FPÖ proposed that concern democracy advocates?",
    options: [
      { letter: "A", text: "More checks and balances" },
      { letter: "B", text: "Expanding executive power and weakening judicial review" },
      { letter: "C", text: "Stronger parliament" },
      { letter: "D", text: "More minority rights" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed constitutional changes that would expand executive power at the expense of checks and balances, weakening democratic safeguards."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 74,
    slug: "fpoe-ngo-restrictions",
    question: "What has the FPÖ proposed regarding NGOs and civil society?",
    options: [
      { letter: "A", text: "More NGO funding" },
      { letter: "B", text: "Restricting and surveilling NGOs, especially those helping refugees" },
      { letter: "C", text: "Partnership programs" },
      { letter: "D", text: "Tax benefits for NGOs" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed restricting NGOs, especially those helping refugees or promoting human rights, including surveillance and funding cuts - tactics used by authoritarian regimes."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 75,
    slug: "fpoe-broadcasting-control",
    question: "What changes has the FPÖ proposed for the ORF public broadcaster?",
    options: [
      { letter: "A", text: "More independence" },
      { letter: "B", text: "Political control and defunding" },
      { letter: "C", text: "Expanded programming" },
      { letter: "D", text: "Better journalism support" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed gaining political control over ORF and cutting its funding, threatening independent public broadcasting and media pluralism."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 76,
    slug: "fpoe-university-freedom",
    question: "What position has the FPÖ taken regarding universities and academic freedom?",
    options: [
      { letter: "A", text: "Defending academic freedom" },
      { letter: "B", text: "Attacking 'leftist professors' and demanding political oversight" },
      { letter: "C", text: "Increased research funding" },
      { letter: "D", text: "University autonomy" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ attacks universities as 'leftist,' demands political oversight of research and teaching, and has threatened academic freedom - a hallmark of authoritarian movements."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 77,
    slug: "fpoe-immigration-zero",
    question: "What is the FPÖ's stated immigration policy goal?",
    options: [
      { letter: "A", text: "Controlled immigration" },
      { letter: "B", text: "'Fortress Austria' with near-zero immigration" },
      { letter: "C", text: "Open borders" },
      { letter: "D", text: "EU-coordinated policy" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ promotes 'Fortress Austria' ideology, seeking to reduce immigration to near-zero levels, rejecting humanitarian obligations and international law."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 78,
    slug: "fpoe-minority-rights",
    question: "What is the FPÖ's position on Slovenian and Croatian minority rights in Austria?",
    options: [
      { letter: "A", text: "Strong supporter" },
      { letter: "B", text: "Opposes bilingual signs and minority protections" },
      { letter: "C", text: "Expanded minority rights" },
      { letter: "D", text: "Cultural celebration" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has opposed constitutionally protected minority rights, including bilingual place-name signs for Slovenian and Croatian minorities, promoting ethnic nationalism."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 79,
    slug: "fpoe-anti-roma",
    question: "What rhetoric has the FPÖ used regarding Roma communities?",
    options: [
      { letter: "A", text: "Integration support" },
      { letter: "B", text: "Stereotyping and discrimination against Roma" },
      { letter: "C", text: "Cultural appreciation" },
      { letter: "D", text: "Anti-discrimination programs" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has used antiziganist rhetoric, stereotyping Roma communities and opposing measures to combat discrimination - continuing a dark European tradition."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 80,
    slug: "fpoe-bundesheer-militia",
    question: "What militaristic proposals has the FPÖ made?",
    options: [
      { letter: "A", text: "Reducing military" },
      { letter: "B", text: "Expanding military and creating armed 'protection corps'" },
      { letter: "C", text: "Pacifism" },
      { letter: "D", text: "International peacekeeping focus" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed expanding the military and creating additional armed 'protection corps,' raising concerns about militarization and paramilitary structures."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 81,
    slug: "fpoe-un-migration-pact",
    question: "What was the FPÖ's position on the UN Global Compact for Migration?",
    options: [
      { letter: "A", text: "Strong support" },
      { letter: "B", text: "Opposed it with conspiracy theories" },
      { letter: "C", text: "Helped draft it" },
      { letter: "D", text: "Neutral" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ opposed the non-binding UN migration compact, spreading conspiracy theories that it would force Austria to accept unlimited migration, undermining international cooperation."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 82,
    slug: "fpoe-domestic-violence",
    question: "What has been the FPÖ's voting record on domestic violence prevention?",
    options: [
      { letter: "A", text: "Leading advocate" },
      { letter: "B", text: "Voted against funding and stronger protections" },
      { letter: "C", text: "Authored legislation" },
      { letter: "D", text: "Increased shelter funding" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has repeatedly voted against increased funding for domestic violence prevention and women's shelters, despite Austria's serious femicide problem."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 83,
    slug: "fpoe-kickl-volksherrschaft",
    question: "What concerning phrase has Kickl used about democracy?",
    options: [
      { letter: "A", text: "'Representative democracy'" },
      { letter: "B", text: "'Volksherrschaft' echoing Nazi terminology" },
      { letter: "C", text: "'Parliamentary democracy'" },
      { letter: "D", text: "'Constitutional democracy'" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Kickl has used 'Volksherrschaft' (people's rule) rather than standard democratic terminology, a term with Nazi-era connotations that emphasizes ethnic community over pluralistic democracy."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 84,
    slug: "fpoe-whistleblower-threats",
    question: "How has the FPÖ responded to whistleblowers exposing party misconduct?",
    options: [
      { letter: "A", text: "Welcomed transparency" },
      { letter: "B", text: "Legal threats, intimidation, and defamation lawsuits" },
      { letter: "C", text: "Internal reforms" },
      { letter: "D", text: "Rewarded them" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has aggressively pursued whistleblowers with lawsuits, intimidation, and public defamation, attempting to silence those who expose party wrongdoing."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 85,
    slug: "fpoe-online-army",
    question: "What was revealed about the FPÖ's online presence?",
    options: [
      { letter: "A", text: "All organic support" },
      { letter: "B", text: "Coordinated networks of fake accounts and troll armies" },
      { letter: "C", text: "Minimal social media use" },
      { letter: "D", text: "Only official accounts" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Investigations revealed the FPÖ operates coordinated networks of fake accounts and online 'troll armies' to manipulate public discourse and harass opponents."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 86,
    slug: "fpoe-budget-transparency",
    question: "What problems have emerged regarding FPÖ party finances?",
    options: [
      { letter: "A", text: "Complete transparency" },
      { letter: "B", text: "Lack of transparency and suspicious donations" },
      { letter: "C", text: "Excess donations to charity" },
      { letter: "D", text: "All finances published daily" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has faced repeated questions about opaque party financing, suspicious donations, and resistance to financial transparency - raising corruption concerns."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 87,
    slug: "fpoe-data-protection",
    question: "What happened under FPÖ control of ministries regarding data protection?",
    options: [
      { letter: "A", text: "Strengthened privacy laws" },
      { letter: "B", text: "Expanded surveillance and weakened protections" },
      { letter: "C", text: "GDPR leadership" },
      { letter: "D", text: "Deleted all government data" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Under FPÖ ministerial control, there were attempts to expand surveillance capabilities and weaken data protection, threatening privacy rights."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 88,
    slug: "fpoe-education-revisionism",
    question: "What changes has the FPÖ proposed for history education?",
    options: [
      { letter: "A", text: "More Holocaust education" },
      { letter: "B", text: "Reducing focus on Nazi period, promoting nationalist narratives" },
      { letter: "C", text: "European integration focus" },
      { letter: "D", text: "Critical thinking emphasis" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed reducing focus on the Nazi period in schools while promoting nationalist historical narratives, raising concerns about historical revisionism."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 89,
    slug: "fpoe-cultural-deutsche",
    question: "What cultural policy does the FPÖ promote?",
    options: [
      { letter: "A", text: "Multiculturalism" },
      { letter: "B", text: "'German culture' supremacy and ethnic nationalism" },
      { letter: "C", text: "Cultural diversity" },
      { letter: "D", text: "World music festivals" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ promotes 'Leitkultur' (dominant culture) based on German ethnic nationalism, rejecting cultural pluralism and Austria's diverse heritage."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 90,
    slug: "fpoe-art-funding",
    question: "What is the FPÖ's approach to funding contemporary art?",
    options: [
      { letter: "A", text: "Increased arts funding" },
      { letter: "B", text: "Cutting funding for 'degenerate' or critical art" },
      { letter: "C", text: "Supporting all artists" },
      { letter: "D", text: "Artist grants for everyone" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed cutting funding for contemporary art deemed 'degenerate' or politically critical, using Nazi-era terminology and threatening artistic freedom."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 91,
    slug: "fpoe-scientific-denial",
    question: "What is the FPÖ's relationship with scientific consensus?",
    options: [
      { letter: "A", text: "Evidence-based policy" },
      { letter: "B", text: "Rejects science on climate, vaccines, and other issues" },
      { letter: "C", text: "Funds research" },
      { letter: "D", text: "Scientific advisory board" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ regularly rejects scientific consensus on climate change, vaccines, and other issues, promoting anti-science positions and conspiracy theories."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 92,
    slug: "fpoe-protest-rights",
    question: "What has the FPÖ proposed regarding protest rights?",
    options: [
      { letter: "A", text: "Protecting all protests" },
      { letter: "B", text: "Restricting protests against right-wing events" },
      { letter: "C", text: "Mandatory protest permits for all" },
      { letter: "D", text: "Protest encouragement" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has proposed restrictions on protests, particularly those against right-wing events, while supporting protests aligned with their ideology - selective freedom of assembly."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 93,
    slug: "fpoe-labor-unions",
    question: "What is the FPÖ's position on independent labor unions?",
    options: [
      { letter: "A", text: "Strong union supporter" },
      { letter: "B", text: "Undermines unions while promoting 'national' worker identity" },
      { letter: "C", text: "Union leadership" },
      { letter: "D", text: "Collective bargaining champion" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ undermines independent labor unions while promoting a nationalist 'workers' identity that divides workers by ethnicity rather than class solidarity."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 94,
    slug: "fpoe-victim-narrative",
    question: "How does the FPÖ respond to criticism of their extremism?",
    options: [
      { letter: "A", text: "Self-reflection and reform" },
      { letter: "B", text: "Claims to be victims of 'persecution' and 'witch hunts'" },
      { letter: "C", text: "Accepts responsibility" },
      { letter: "D", text: "Apologizes" }
    ],
    correctAnswer: "B",
    backgroundInfo: "When criticized for extremism, the FPÖ portrays itself as victim of 'political persecution' and 'witch hunts,' deflecting from legitimate democratic concerns about their ideology."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 95,
    slug: "fpoe-einzelfall-deflection",
    question: "How does the FPÖ characterize repeated scandals within their party?",
    options: [
      { letter: "A", text: "Systemic problem requiring reform" },
      { letter: "B", text: "'Einzelfälle' (isolated incidents) despite systematic pattern" },
      { letter: "C", text: "Party-wide issue" },
      { letter: "D", text: "Accepts full responsibility" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ dismisses hundreds of extremist incidents as 'Einzelfälle' (isolated cases), refusing to acknowledge the systematic pattern of far-right extremism within the party."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 96,
    slug: "fpoe-democracy-doubts",
    question: "What concerning statements have FPÖ members made about democracy?",
    options: [
      { letter: "A", text: "Unwavering democratic commitment" },
      { letter: "B", text: "Praised authoritarian regimes and questioned democratic systems" },
      { letter: "C", text: "Constitutional patriotism" },
      { letter: "D", text: "Democratic reform proposals" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Multiple FPÖ members have praised authoritarian regimes (Putin's Russia, Orbán's Hungary) and made statements questioning the value of democratic systems and institutions."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 97,
    slug: "fpoe-enemy-rhetoric",
    question: "What rhetoric does the FPÖ use to describe political opponents?",
    options: [
      { letter: "A", text: "Respectful disagreement" },
      { letter: "B", text: "'Enemies,' 'traitors,' 'system parties'" },
      { letter: "C", text: "Honorable opposition" },
      { letter: "D", text: "Democratic partners" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ uses combative language calling opponents 'enemies of the people,' 'traitors,' and 'system parties,' delegitimizing democratic opposition and fostering polarization."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 98,
    slug: "fpoe-election-fraud-claims",
    question: "What has the FPÖ claimed about elections they've lost?",
    options: [
      { letter: "A", text: "Accepted results gracefully" },
      { letter: "B", text: "Made unfounded fraud claims undermining election integrity" },
      { letter: "C", text: "Congratulated winners" },
      { letter: "D", text: "Requested recounts through proper channels" }
    ],
    correctAnswer: "B",
    backgroundInfo: "After losing the 2016 presidential election, the FPÖ made unfounded fraud claims, undermining trust in democratic institutions and election integrity without evidence."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 99,
    slug: "fpoe-foreign-funding",
    question: "What foreign connections has the FPÖ been investigated for?",
    options: [
      { letter: "A", text: "None" },
      { letter: "B", text: "Potential Russian financing and influence operations" },
      { letter: "C", text: "American donors only" },
      { letter: "D", text: "EU funding exclusively" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ has faced investigations regarding potential Russian financing and influence operations, raising concerns about foreign interference in Austrian democracy."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 100,
    slug: "fpoe-rule-of-law-erosion",
    question: "What pattern do democracy experts identify in FPÖ governance?",
    options: [
      { letter: "A", text: "Strengthening democratic institutions" },
      { letter: "B", text: "Systematic attempts to erode checks and balances" },
      { letter: "C", text: "Constitutional reinforcement" },
      { letter: "D", text: "Institutional reform" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Democracy experts identify a pattern in FPÖ governance: attacking independent media, judiciary, and civil society while expanding executive power - classic authoritarian playbook."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 101,
    slug: "fpoe-historical-continuity",
    question: "What historical continuity exists between the FPÖ and Austria's Nazi past?",
    options: [
      { letter: "A", text: "Complete break with the past" },
      { letter: "B", text: "Founded as political home for former Nazis, ideology persists" },
      { letter: "C", text: "Anti-fascist founding" },
      { letter: "D", text: "No connection" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ was founded as VdU to provide a political home for former Nazis after WWII, and ideological continuities including German nationalism and antisemitism persist in various forms."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 102,
    slug: "fpoe-international-isolation",
    question: "How do other European democratic parties generally view the FPÖ?",
    options: [
      { letter: "A", text: "As normal conservative party" },
      { letter: "B", text: "As far-right extremist party to be isolated" },
      { letter: "C", text: "As model for Europe" },
      { letter: "D", text: "As potential coalition partners" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Mainstream democratic parties across Europe generally view the FPÖ as a far-right extremist party, with many refusing cooperation and the EU imposing sanctions when they entered government."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 103,
    slug: "fpoe-spitzenkandidaten-scandals",
    question: "What pattern exists among FPÖ top candidates and leaders?",
    options: [
      { letter: "A", text: "Clean records" },
      { letter: "B", text: "Repeated scandals involving corruption, extremism, or both" },
      { letter: "C", text: "Academic excellence" },
      { letter: "D", text: "International recognition" }
    ],
    correctAnswer: "B",
    backgroundInfo: "FPÖ leaders including Haider, Strache, Gudenus and others have been involved in major scandals involving corruption, connections to extremism, or both - a systematic pattern."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 104,
    slug: "fpoe-accountability-refusal",
    question: "How does the FPÖ respond to demands for accountability on scandals?",
    options: [
      { letter: "A", text: "Transparent investigations" },
      { letter: "B", text: "Denial, deflection, and attacking critics" },
      { letter: "C", text: "Independent commissions" },
      { letter: "D", text: "Full disclosure" }
    ],
    correctAnswer: "B",
    backgroundInfo: "The FPÖ consistently responds to scandal by denying wrongdoing, deflecting blame, attacking those who expose problems, and refusing meaningful accountability measures."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
  },
  {
    id: 105,
    slug: "fpoe-democratic-threat",
    question: "How do constitutional protection agencies classify the FPÖ?",
    options: [
      { letter: "A", text: "Normal democratic party" },
      { letter: "B", text: "Elements monitored for extremism and anti-democratic activities" },
      { letter: "C", text: "Model organization" },
      { letter: "D", text: "No surveillance" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Austria's constitutional protection office monitors FPÖ-connected groups and individuals for extremism, and international democracy organizations have expressed concern about the party's anti-democratic tendencies."
,
    sourceLinks: [
      { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs" }
    ]
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
