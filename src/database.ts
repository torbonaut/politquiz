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
    "slug": "fpoe-ibiza-affaere-2019",
    "question": "Was zeigte das Ibiza-Video von Heinz-Christian Strache?",
    "options": [
      {
        "letter": "A",
        "text": "Unterstützung für EU-Politik"
      },
      {
        "letter": "B",
        "text": "Angebot illegaler Staatsaufträge an Russen"
      },
      {
        "letter": "C",
        "text": "Kritik an Korruption"
      },
      {
        "letter": "D",
        "text": "Förderung von Transparenz"
      }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Im Ibiza-Video bot Strache 2017 russischen Oligarchenfreunden staatliche Aufträge für Wahlkampfhilfe an, was zum Regierungsbruch führte.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2019",
      "Korruption",
      "Ibiza"
    ]
  },
  {
    "id": 2,
    "slug": "oevp-inseratenaffaere-2021",
    "question": "Was war der Kern der ÖVP-Korruptionsaffäre um Sebastian Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Umfragenfinanzierung aus Steuergeldern"
      },
      {
        "letter": "B",
        "text": "Umweltförderung"
      },
      {
        "letter": "C",
        "text": "Sozialreformen"
      },
      {
        "letter": "D",
        "text": "Bildungsinvestitionen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Mitglieder finanzierten gefälschte Umfragen mit Budgetmitteln des Finanzministeriums, manipulierten Medienberichterstattung durch Inseratekäufe und Kurz trat zurück.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Kurz"
    ]
  },
  {
    "id": 3,
    "slug": "fpoe-bvt-razzia-2018",
    "question": "Wer stand hinter der umstrittenen BVT-Razzia 2018?",
    "options": [
      {
        "letter": "A",
        "text": "SPÖ-Innenminister"
      },
      {
        "letter": "B",
        "text": "FPÖ-Innenminister Herbert Kickl"
      },
      {
        "letter": "C",
        "text": "Grüne Justizministerin"
      },
      {
        "letter": "D",
        "text": "NEOS-Klubobmann"
      }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Kickl (FPÖ) initiierte Razzien im Bundesamt für Verfassungsschutz, um Daten zu russischen Kontakten zu vertuschen und die Terrorismusbekämpfung zu schädigen.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "Machtmissbrauch",
      "BVT"
    ]
  },
  {
    "id": 4,
    "slug": "spoe-bawag-skandal-1990er",
    "question": "Welcher SPÖ-Skandal betraf die BAWAG in den 1990ern?",
    "options": [
      {
        "letter": "A",
        "text": "Spekulationsgeschäfte und fragwürdige \"Karibik Geschäfte\""
      },
      {
        "letter": "B",
        "text": "Umweltscandale"
      },
      {
        "letter": "C",
        "text": "Waffenexporte"
      },
      {
        "letter": "D",
        "text": "Datenskandale"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "SPÖ-nahe BAWAG-Bank war in dubiose Spekulationen und fragwürdige Auslandsgeschäfte verwickelt.",
    "sourceLinks": [
      {
        "name": "Parlament.gv.at",
        "url": "https://www.parlament.gv.at/dokument/XXII/J/4078/fnameorig_059895.html"
      }
    ],
    "tags": [
      "SPÖ",
      "1995",
      "Korruption",
      "BAWAG"
    ]
  },
  {
    "id": 5,
    "slug": "fpoe-covid-verswoerung-2020",
    "question": "Welche Haltung nahm die FPÖ zur COVID-Impfung ein?",
    "options": [
      {
        "letter": "A",
        "text": "Führte Impfkampagnen"
      },
      {
        "letter": "B",
        "text": "Verbreitete Verschwörungstheorien und lehnte Maßnahmen ab"
      },
      {
        "letter": "C",
        "text": "Folgt WHO-Richtlinien"
      },
      {
        "letter": "D",
        "text": "Baute Impfzentren"
      }
    ],
    "correctAnswer": "B",
    "backgroundInfo": "Viele FPÖ-Politiker lehnten öffentliche Gesundheitsmaßnahmen ab und verbreiteten Verschwörungstheorien zu Impfungen.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs"
      }
    ],
    "tags": [
      "FPÖ",
      "2020",
      "Verschwörungstheorien",
      "COVID"
    ]
  },
  {
    "id": 6,
    "slug": "oevp-silberstein-2017",
    "question": "Was war der Silberstein-Skandal der ÖVP?",
    "options": [
      {
        "letter": "A",
        "text": "Wahlkampfmanipulation mit Fake-News und Desinformation"
      },
      {
        "letter": "B",
        "text": "Umfragenfinanzierung"
      },
      {
        "letter": "C",
        "text": "Immobilienverkauf"
      },
      {
        "letter": "D",
        "text": "Parteispenden"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PR-Chef Gerry Silberstein plante gezielte Desinformation und Fake-News gegen Gegner für ÖVP-Wahlkampf, was Demokratie gefährdet.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/oevp-skandale-sebastian-kurz/"
      }
    ],
    "tags": [
      "ÖVP",
      "2017",
      "Manipulation",
      "Silberstein"
    ]
  },
  {
    "id": 7,
    "slug": "neos-missbrauchsvorwurf-2025",
    "question": "Welcher NEOS-Politiker trat 2025 wegen Missbrauchsvorwürfen zurück?",
    "options": [
      {
        "letter": "A",
        "text": "Ein steirischer Gemeinderat"
      },
      {
        "letter": "B",
        "text": "Klubobmann"
      },
      {
        "letter": "C",
        "text": "Landeshauptmann"
      },
      {
        "letter": "D",
        "text": "Bundesrat"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ein NEOS-Gemeinderat in der Steiermark legte Ämter nieder wegen schwerwiegender Missbrauchsvorwürfe gegen ein Minderjähriges.",
    "sourceLinks": [
      {
        "name": "Krone.tv",
        "url": "https://www.youtube.com/watch?v=UAOmcR-SkCM"
      }
    ],
    "tags": [
      "NEOS",
      "2025",
      "Missbrauch",
      "Steiermark"
    ]
  },
  {
    "id": 8,
    "slug": "fpoe-kinderporno-2009",
    "question": "Welchen FPÖ-Funktionär verurteilte man 2009 wegen Kinderpornos?",
    "options": [
      {
        "letter": "A",
        "text": "Ortsparteichef einer Landeshauptstadt"
      },
      {
        "letter": "B",
        "text": "Bundesrat"
      },
      {
        "letter": "C",
        "text": "Landtagsabgeordneter"
      },
      {
        "letter": "D",
        "text": "Minister"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Ortsparteichef wurde rechtskräftig wegen Besitz und Weitergabe von kinderpornografischem Material verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Kriminalität",
      "Kinderporno"
    ]
  },
  {
    "id": 9,
    "slug": "fpoe-grasser-buwog-2004",
    "question": "Wofür wurde FPÖ-naher Finanzminister Karl-Heinz Grasser verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Untreue und Bestechlichkeit beim BUWOG-Immobilienverkauf"
      },
      {
        "letter": "B",
        "text": "Steuerhinterziehung"
      },
      {
        "letter": "C",
        "text": "Falschaussage im Wahlkampf"
      },
      {
        "letter": "D",
        "text": "Beamtenbestechung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Grasser ermöglichte 2004 den Verkauf von Bundeswohnungen unter Wert an Lobbyisten Meischberger und Hochegger, diese erhielten Millionen-Provisionen. 2025 rechtskräftig zu 4 Jahren Haft verurteilt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2004",
      "Korruption",
      "BUWOG"
    ]
  },
  {
    "id": 10,
    "slug": "fpoe-hypo-alpe-adria-2009",
    "question": "Welcher FPÖ-Politiker war hauptverantwortlich für die Hypo Alpe-Adria Krise?",
    "options": [
      {
        "letter": "A",
        "text": "Jörg Haider"
      },
      {
        "letter": "B",
        "text": "Herbert Kickl"
      },
      {
        "letter": "C",
        "text": "Heinz-Christian Strache"
      },
      {
        "letter": "D",
        "text": "Walter Meischberger"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Haider als Landeshauptmann Kärntens ermöglichte riskante Geschäfte der Hypo-Bank, deren Abwicklung Steuerzahler Milliarden kostete.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Finanzkrise",
      "Hypo"
    ]
  },
  {
    "id": 11,
    "slug": "oevp-bluemel-novomatic-2021",
    "question": "Was war das Novomatic-Bestechungs-Skandal um ÖVP-Finanzminister Gernot Blümel?",
    "options": [
      {
        "letter": "A",
        "text": "Spenden der Glücksspiellobby für Postenbesetzungen"
      },
      {
        "letter": "B",
        "text": "Umweltförderung"
      },
      {
        "letter": "C",
        "text": "Waffenexporte"
      },
      {
        "letter": "D",
        "text": "Darsteller im Theater"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Spenden der Novomatic AG an die ÖVP für die Postenbesetzung von FPÖ-Politiker Peter Sidlo bei der Casinos Austria - mutmaßliche Korruption auf Topniveau.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Novomatic"
    ]
  },
  {
    "id": 12,
    "slug": "oevp-kickl-medienwerbung-2018",
    "question": "Wofür wird FPÖ-Chef Herbert Kickl als Innenminister ermittelt?",
    "options": [
      {
        "letter": "A",
        "text": "Werbeanzeigen aus Steuermitteln für positive Berichterstattung"
      },
      {
        "letter": "B",
        "text": "Naturschutz"
      },
      {
        "letter": "C",
        "text": "Schulreformen"
      },
      {
        "letter": "D",
        "text": "Verkehrssicherheit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Als Innenminister 2017-2019 soll Kickl Werbeanzeigen aus staatlichen Mitteln geschaltet haben gegen mediale Unterstützung, und wird mit Falschaussagen verdächtigt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "Machtmissbrauch",
      "Kickl"
    ]
  },
  {
    "id": 13,
    "slug": "oevp-schmid-staemperl-2021",
    "question": "Wer war Thomas Schmid im ÖVP-Korruptionsnetzwerk um Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Generalsekretär und ÖBAG-Chef, orchestrierte Umfragen-Affäre"
      },
      {
        "letter": "B",
        "text": "Umweltbeauftragter"
      },
      {
        "letter": "C",
        "text": "Sportfunktionär"
      },
      {
        "letter": "D",
        "text": "Kirchenvertreter"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Thomas Schmid war zentrale Figur: Generalsekretär des Finanzministeriums, später ÖBAG-Chef, orchestrierte gefälschte Umfragen, manipulierte Postenbesetzungen. Kronzeuge seit 2024.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Schmid"
    ]
  },
  {
    "id": 14,
    "slug": "oevp-karmasin-bestechung-2021",
    "question": "Wofür wurde ÖVP-Familienministerin Sophie Karmasin verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wettbewerbsbeschränkung und Vermittlungsprovision von gefälschten Umfragen"
      },
      {
        "letter": "B",
        "text": "Adoption von Kindern"
      },
      {
        "letter": "C",
        "text": "Pensionsreformen"
      },
      {
        "letter": "D",
        "text": "Landwirtschaftspolitik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Karmasin war Familienministerin, vermittelte zwischen Finanzministerium und Zeitung Österreich für gefälschte Umfragen, kassierte 20% Provision. 2023 verurteilt zu 15 Monaten bedingt (2024 auf 10 Monate reduziert).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2023",
      "Korruption",
      "Karmasin"
    ]
  },
  {
    "id": 15,
    "slug": "fpoe-vilimsky-champagner-2018",
    "question": "Was war der Champagner-Skandal des FPÖ-EU-Abgeordneten Harald Vilimsky?",
    "options": [
      {
        "letter": "A",
        "text": "Luxusausgaben aus Steuermitteln im EU-Parlament"
      },
      {
        "letter": "B",
        "text": "Private Weinsammlung"
      },
      {
        "letter": "C",
        "text": "Hochzeitsfest"
      },
      {
        "letter": "D",
        "text": "Kunstkauf"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2018 wurden über 427.000 Euro beanstandet für Champagner, teure Geschenke und Essen - 544.400 Euro mussten zurückgezahlt werden. FPÖ-Fraktionen lehnte strengere Regeln ab.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "Finanzmissbrauch",
      "Vilimsky"
    ]
  },
  {
    "id": 16,
    "slug": "fpoe-kleindienst-polizei-2000",
    "question": "Was war die Kleindienst-Affäre 2000 in der FPÖ?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-Polizist gab FPÖ-Politikern unrechtmäßig Polizeidaten"
      },
      {
        "letter": "B",
        "text": "Falsche Verkehrssignale"
      },
      {
        "letter": "C",
        "text": "Waffenschmuggle"
      },
      {
        "letter": "D",
        "text": "Beamtenbestechung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Josef Kleindienst zeigte sich selbst an: Er gab FPÖ-Politikern wie Haider Daten aus Polizeicomputern, die in Boulevardmedien landeten - Missbrauch von Behörden gegen Gegner.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2000",
      "Machtmissbrauch",
      "Kleindienst"
    ]
  },
  {
    "id": 17,
    "slug": "fpoe-graz-spendenaffaere-2021",
    "question": "Welcher Skandal betraf die FPÖ Graz 2021-2023?",
    "options": [
      {
        "letter": "A",
        "text": "1,8 Mio Euro Klubförderung für Wein, Bars, Restaurants ohne Belege"
      },
      {
        "letter": "B",
        "text": "Museumsfinanzierung"
      },
      {
        "letter": "C",
        "text": "Schulbauten"
      },
      {
        "letter": "D",
        "text": "Parkplätze"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ Graz zweckentfremdete 1,8 Millionen Euro öffentlicher Gelder für edle Weine, Lokale und Bargeldabhebungen ohne Belege. Finanzreferent zeigte sich selbst an.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Korruption",
      "Graz"
    ]
  },
  {
    "id": 18,
    "slug": "fpoe-strache-luxusleben-2021",
    "question": "Wie finanzierte FPÖ-Chef Strache sein Luxusleben?",
    "options": [
      {
        "letter": "A",
        "text": "Mit über 1 Mio Euro Parteigeldern für Urlaube und private Ausgaben"
      },
      {
        "letter": "B",
        "text": "Erbe von Verwandten"
      },
      {
        "letter": "C",
        "text": "Buchverkäufe"
      },
      {
        "letter": "D",
        "text": "Immobilienverkauf"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ermittlungsdokumente zeigen: Strache finanzierte Luxusurlaube, Restaurants, private Feiern, Geschenke, Mieten und Hausumbau mit Parteigeldern. Seine Ex-Frau wurde auch beschattet auf Parteikosten.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Veruntreue",
      "Strache"
    ]
  },
  {
    "id": 19,
    "slug": "oevp-wuensche-woeginger-2017",
    "question": "Wofür wird ÖVP-Klubchef August Wöginger verdächtigt?",
    "options": [
      {
        "letter": "A",
        "text": "Intervention für parteipolitische Postenbesetzung bei Finanzamt"
      },
      {
        "letter": "B",
        "text": "Schulreformen"
      },
      {
        "letter": "C",
        "text": "Naturschutz"
      },
      {
        "letter": "D",
        "text": "Verkehr"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2017 intervenierte Wöginger für ÖVP-Bürgermeister als Finanzamtsleiter in OÖ statt besserer Bewerberin. Oktober 2025: Diversion für 44.000 Euro Geldbuße akzeptiert.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2017",
      "Amtsmissbrauch",
      "Wöginger"
    ]
  },
  {
    "id": 20,
    "slug": "oevp-sigi-wolf-steuern-2016",
    "question": "Was war die Steuercausa Wolf mit Thomas Schmid?",
    "options": [
      {
        "letter": "A",
        "text": "Steuernachlass von 3,4 Mio Euro für MAN-Investor Wolf"
      },
      {
        "letter": "B",
        "text": "Impfstoffkauf"
      },
      {
        "letter": "C",
        "text": "Schulfinanzen"
      },
      {
        "letter": "D",
        "text": "Straßenbau"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2016: Wolf sollte 11 Mio Euro nachzahlen, wurde aber auf 7,6 Mio reduziert. Thomas Schmid und Finanzbeamtin beteiliigt. Finanzbeamtin bekam Topposten am Finanzamt Baden.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2016",
      "Steuerbetrug",
      "Wolf"
    ]
  },
  {
    "id": 21,
    "slug": "fpoe-holocaust-leugner-2008",
    "question": "Welcher FPÖ-Funktionär wurde mehrfach wegen Holocaust-Leugnung verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-FPÖ-Bezirksrat mit 4 Jahren (2008) und 3 Jahren (2015) Haft"
      },
      {
        "letter": "B",
        "text": "Kulturbeauftragter"
      },
      {
        "letter": "C",
        "text": "Schuldirektor"
      },
      {
        "letter": "D",
        "text": "Priester"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Wiederholungstäter: 2003-2008 saß der FPÖ-Bezirksrat 23 Monate im Gefängnis wegen Holocaust-Leugnung, 2015 erneut 3 Jahre - insgesamt Wiederholungstäter.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2008",
      "NS-Verbot",
      "Holocaust"
    ]
  },
  {
    "id": 22,
    "slug": "fpoe-wiederbetaetigung-funde-2024",
    "question": "Was fand man bei der steirischen FPÖ-Affäre 2024?",
    "options": [
      {
        "letter": "A",
        "text": "NS-Gegenstände und Waffen unter FPÖ-Funktionären"
      },
      {
        "letter": "B",
        "text": "Kunstsammlung"
      },
      {
        "letter": "C",
        "text": "Naturschutzmarke"
      },
      {
        "letter": "D",
        "text": "Archivdokumente"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Steirische FPÖ-Affäre: NS-Funde, \"unterwanderte\" Corona-Demos, Waffen, undurchsichtige Geldströme unter FPÖ-Chef Mario Kunasek und anderen Funktionären.",
    "sourceLinks": [
      {
        "name": "Profil.at",
        "url": "https://www.profil.at/investigativ/kickls-stolperfalle-die-akte-fpoe/402747583"
      }
    ],
    "tags": [
      "FPÖ",
      "2024",
      "NS-Verbot",
      "Steiermark"
    ]
  },
  {
    "id": 23,
    "slug": "oevp-benko-bestechung-2016",
    "question": "Wodurch soll der Signa-Mogul René Benko Thomas Schmid bestechend haben?",
    "options": [
      {
        "letter": "A",
        "text": "Job-Versprechen mit 600.000 Euro Jahresgehalt für Steuererleichterungen"
      },
      {
        "letter": "B",
        "text": "Kunstwerk"
      },
      {
        "letter": "C",
        "text": "Yacht"
      },
      {
        "letter": "D",
        "text": "Villa"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2016-2018: Benko soll Schmid mit Job-Aussicht gelockt haben, damit dieser bei Steuerfragen von Immobilien-Deals und Privatjet hilft - insgesamt mehrere Millionen Euro.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2016",
      "Bestechung",
      "Benko"
    ]
  },
  {
    "id": 24,
    "slug": "oevp-proll-casinos-2020",
    "question": "Wer war Josef Pröll und wofür wurde er ermittelt?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-ÖVP-Finanzminister, Aufsichtsrat Casinos, Casinos-Affäre um FPÖ-Sidlo"
      },
      {
        "letter": "B",
        "text": "Sportfunktionär"
      },
      {
        "letter": "C",
        "text": "Kunstsammler"
      },
      {
        "letter": "D",
        "text": "Weinbauer"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Josef Pröll als Ex-ÖVP-Minister und Casinos-Aufsichtsrat war in der Casinos-Affäre verwickelt - FPÖ-Politiker Sidlo zum Finanzvorstand besetzt gegen Spenden.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2020",
      "Korruption",
      "Pröll"
    ]
  },
  {
    "id": 25,
    "slug": "oevp-mahrer-wienwert-2022",
    "question": "Was waren die Vorwürfe gegen Wiener ÖVP-Chef Karl Mahrer?",
    "options": [
      {
        "letter": "A",
        "text": "Zahlungen von 10.000 Euro monatlich durch Immobilienfirma für Seine Frau"
      },
      {
        "letter": "B",
        "text": "Graffiti-Vandalismus"
      },
      {
        "letter": "C",
        "text": "Musikpiraterie"
      },
      {
        "letter": "D",
        "text": "Falsche Identität"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2022: Mahers Frau erhielt Juli 2017-Jänner 2018 monatlich 10.000 Euro von \"Wienwert\" ohne Gegenleistung - eigentlich Honorar für Mahrer. 2025 Anklage erhoben.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2022",
      "Korruption",
      "Mahrer"
    ]
  },
  {
    "id": 26,
    "slug": "fpoe-telekom-parteienfinanzierung-2009",
    "question": "Was war die Telekom-Skandal der FPÖ/BZÖ?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ erhielt 960.000 Euro unrechtmäßig von Telekom als Parteifinanzierung"
      },
      {
        "letter": "B",
        "text": "Handy-Verkauf"
      },
      {
        "letter": "C",
        "text": "Internetvertrag"
      },
      {
        "letter": "D",
        "text": "Fernsehsender"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ/BZÖ-Parteienfinanzierung mit 600.000-960.000 Euro Telekom-Geld über getarnte \"Studien\". FPÖ-Funktionäre teils zu Jahren bedingt verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Korruption",
      "Telekom"
    ]
  },
  {
    "id": 27,
    "slug": "fpoe-koerperverletzung-sturm-2015",
    "question": "Wie viele FPÖ-Funktionäre wurden wegen Körperverletzung verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Mindestens 4 dokumentierte Fälle 2000-2015"
      },
      {
        "letter": "B",
        "text": "Keine"
      },
      {
        "letter": "C",
        "text": "Ein Fall"
      },
      {
        "letter": "D",
        "text": "Nur Ordnungsgeldstrafen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Funktionäre: 2000 Abgeordneter, 2004 Nationalrat, 2015 Gemeinderat Tirol, 2015 Bezirksobmann Burgenland - alle wegen schwerer Körperverletzung rechtskräftig verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Gewalt",
      "Körperverletzung"
    ]
  },
  {
    "id": 28,
    "slug": "fpoe-verhetzung-islamophobie-2017",
    "question": "Was war der islamophobe Skandal eines FPÖ-Funktionärs 2017?",
    "options": [
      {
        "letter": "A",
        "text": "\"Geisteskranke Islam-Ideologien\" zum Ramadan auf Facebook"
      },
      {
        "letter": "B",
        "text": "Buchrezension"
      },
      {
        "letter": "C",
        "text": "Kunstkritik"
      },
      {
        "letter": "D",
        "text": "Weinverkostung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Funktionär Tirol sprach auf offizieller Facebook-Seite von \"geisteskranken Islam-Ideologien\" - zu 1.920 Euro Geldstrafe verurteilt (2017).",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2017",
      "Verhetzung",
      "Islamophobie"
    ]
  },
  {
    "id": 29,
    "slug": "fpoe-ss-rede-falschaussage-2011",
    "question": "Was war der RFJ-Skandal mit SS-Rede 2011?",
    "options": [
      {
        "letter": "A",
        "text": "7 RFJ-Funktionäre verurteilt wegen Falschaussagen nach SS-Rede"
      },
      {
        "letter": "B",
        "text": "Geschichtsunterricht"
      },
      {
        "letter": "C",
        "text": "Dokumentarfilm"
      },
      {
        "letter": "D",
        "text": "Theateraufführung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Innsbruck 2011: 7 Funktionäre der FPÖ-Jugendbewegung RFJ wegen Falschaussage vor Gericht nach SS-Rede verurteilt - NS-Verherrlichung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2011",
      "NS-Verbot",
      "RFJ"
    ]
  },
  {
    "id": 30,
    "slug": "fpoe-murder-rfj-2014",
    "question": "Welches Verbrechen beging ein RFS-Kandidat der FPÖ 2014?",
    "options": [
      {
        "letter": "A",
        "text": "Mord"
      },
      {
        "letter": "B",
        "text": "Betrug"
      },
      {
        "letter": "C",
        "text": "Diebstahl"
      },
      {
        "letter": "D",
        "text": "Diffamierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2014: Kandidat der Ring freiheitlicher Studenten (RFS), einer FPÖ-nahen Organisation, wurde wegen Mordes verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2014",
      "Gewalt",
      "Mord"
    ]
  },
  {
    "id": 31,
    "slug": "fpoe-besitzverhaeltnisse-waffen-2013",
    "question": "Wofür wurde ein FPÖ-Gemeinderat in Linz 2013 angeklagt?",
    "options": [
      {
        "letter": "A",
        "text": "Illegaler Waffenhandel und versuchte Nötigung"
      },
      {
        "letter": "B",
        "text": "Musikpiraterie"
      },
      {
        "letter": "C",
        "text": "Betrug im Supermarkt"
      },
      {
        "letter": "D",
        "text": "Falsche Steuererklärung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Gemeinderat Linz: (nicht rechtskräftig) verurteilt wegen illegalen Waffenhandels und versuchter Nötigung (2013).",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2013",
      "Waffenhandel",
      "Nötigung"
    ]
  },
  {
    "id": 32,
    "slug": "fpoe-spielautomaten-betrug-2002",
    "question": "Womit war ein ehemaliger FPÖ-Abgeordneter 2002 verwickelt?",
    "options": [
      {
        "letter": "A",
        "text": "Spielautomaten-Betrug"
      },
      {
        "letter": "B",
        "text": "Glücksspiellizenzen"
      },
      {
        "letter": "C",
        "text": "Casino-Eröffnung"
      },
      {
        "letter": "D",
        "text": "Lotterieverkauf"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Abgeordneter: 2002 wegen Spielautomaten-Betrugs verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2002",
      "Betrug",
      "Spielautomaten"
    ]
  },
  {
    "id": 33,
    "slug": "fpoe-beruf-schaffung-2006",
    "question": "Wofür wurde ein FPÖ-Landtagsabgeordnete 2006 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Beschäftigung einer Schwarzarbeiterin"
      },
      {
        "letter": "B",
        "text": "Gartenarbeit"
      },
      {
        "letter": "C",
        "text": "Kunstberatung"
      },
      {
        "letter": "D",
        "text": "Privatunterricht"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Landtagsabgeordnete: 2006 wegen Beschäftigung einer Schwarzarbeiterin verurteilt - Lohnvergabe ohne Sozialversicherung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2006",
      "Arbeitsbetrug",
      "Schwarzarbeit"
    ]
  },
  {
    "id": 34,
    "slug": "fpoe-betrug-vaterschaftstest-2004",
    "question": "Wie betrog ein FPÖ-Abgeordneter 2004 ein Vaterschaftstest?",
    "options": [
      {
        "letter": "A",
        "text": "Schickte andere Person zum Vaterschaftstest statt sich selbst"
      },
      {
        "letter": "B",
        "text": "Falschte Blutprobe"
      },
      {
        "letter": "C",
        "text": "Bestach Labor"
      },
      {
        "letter": "D",
        "text": "Fälschte Urkunde"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Landtagsabgeordneter: 2004 rechtskräftig verurteilt wegen Betrug und falscher Beweisaussage - schickte andere Person zum Vaterschaftstest.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2004",
      "Betrug",
      "Täuschung"
    ]
  },
  {
    "id": 35,
    "slug": "fpoe-nachtsuchtung-2006",
    "question": "Welcher FPÖ-Politiker trat 2006 ein Verbotsgesetz Vergehen auf?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-FPÖ-Abgeordneter rechtskräftig wegen Wiederbetätigung verurteilt"
      },
      {
        "letter": "B",
        "text": "Gemeinderat"
      },
      {
        "letter": "C",
        "text": "Parteiführer"
      },
      {
        "letter": "D",
        "text": "Kulturbeauftragter"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Abgeordneter: 2006 rechtskräftig wegen NS-Wiederbetätigung verurteilt - Verherrlichung von Nazis.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2006",
      "NS-Verbot",
      "Wiederbetätigung"
    ]
  },
  {
    "id": 36,
    "slug": "fpoe-baltimorefirm-schuldenreis-2021",
    "question": "Was waren die strafrechtlichen Aktion gegen 2 FPÖ-Abgeordnete 2021?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen schweren Betrugs und betrügerischer Krida zu 2 Jahren 9 Monaten Haft"
      },
      {
        "letter": "B",
        "text": "Steuererleichterung"
      },
      {
        "letter": "C",
        "text": "Immobilienverkauf"
      },
      {
        "letter": "D",
        "text": "Geschenke"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemalige FPÖ-Nationalratsabgeordnete: 2021 rechtskräftig wegen schweren Betrugs und betrügerischer Krida zu 2 Jahren 9 Monaten unbedingter Haft verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Betrug",
      "Krida"
    ]
  },
  {
    "id": 37,
    "slug": "fpoe-verhetzung-geldstrafe-2021",
    "question": "Welcher Wiener FPÖ-Politiker wurde 2021 wegen Verhetzung verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Kommunalpolitiker zu 4.500 Euro Strafe"
      },
      {
        "letter": "B",
        "text": "Bezirksrat"
      },
      {
        "letter": "C",
        "text": "Klubobmann"
      },
      {
        "letter": "D",
        "text": "Parteiführer"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Wiener FPÖ-Kommunalpolitiker: 2021 wegen Verhetzung zu 4.500 Euro Strafe verurteilt - Aufstachelung gegen Gruppen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Verhetzung",
      "Wien"
    ]
  },
  {
    "id": 38,
    "slug": "fpoe-bundesratsmitglied-kaernten-2009",
    "question": "Was war die BZÖ-Wahlbroschüren-Affäre um einen Ex-Landeshauptmann?",
    "options": [
      {
        "letter": "A",
        "text": "Untreue wegen Wahlbroschüre auf Landeskosten produziert"
      },
      {
        "letter": "B",
        "text": "Druckfehler"
      },
      {
        "letter": "C",
        "text": "Wahlkampfkosten"
      },
      {
        "letter": "D",
        "text": "Medieneintrag"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ/BZÖ-Landeshauptmann: Wegen Untreue in der BZÖ-Wahlkampfbroschüren-Affäre (2009) zu 300 Tagsätzen à 50 Euro verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Untreue",
      "BZÖ"
    ]
  },
  {
    "id": 39,
    "slug": "fpoe-noe-landesobmann-untreue-2000",
    "question": "Wofür wurde der ehemalige FPÖ-Landesobmann Niederösterreich verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Untreue (2000)"
      },
      {
        "letter": "B",
        "text": "Beamtenbestechung"
      },
      {
        "letter": "C",
        "text": "Falschaussage"
      },
      {
        "letter": "D",
        "text": "Urkundenfälschung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-NÖ-Landesobmann: 2000 rechtskräftig wegen Untreue verurteilt - Missbrauch von Vertrauensposition.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2000",
      "Untreue",
      "Niederösterreich"
    ]
  },
  {
    "id": 40,
    "slug": "fpoe-sexuelle-noetigung-2003",
    "question": "Wofür wurde ein ex-FPÖ-Stadtrat 2003 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Sexuelle Nötigung im Amt 2003 rechtskräftig"
      },
      {
        "letter": "B",
        "text": "Betrug"
      },
      {
        "letter": "C",
        "text": "Untreue"
      },
      {
        "letter": "D",
        "text": "Diffamierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Stadtrat einer Landeshauptstadt: 2003 rechtskräftig wegen sexueller Nötigung im Amt verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2003",
      "Sexuelle Nötigung",
      "Amtsmissbrauch"
    ]
  },
  {
    "id": 41,
    "slug": "fpoe-generalsekretaer-steuerhinterziehung-1998",
    "question": "Was war die Affäre des FPÖ-Generalsekretärs 1998?",
    "options": [
      {
        "letter": "A",
        "text": "Beihilfe zur Steuerhinterziehung und 2,5 Mio Schilling Bestechung von Haider"
      },
      {
        "letter": "B",
        "text": "Immobilienverkauf"
      },
      {
        "letter": "C",
        "text": "Kunstsammlugn"
      },
      {
        "letter": "D",
        "text": "Privatjet"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Generalsekretär: 1998 rechtskräftig wegen Beihilfe zur Steuerhinterziehung verurteilt - ließ sich Rücktritt mit 2,5 Mio Schilling unversteuert von Haider abkaufen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "1998",
      "Steuerbetrug",
      "Bestechung"
    ]
  },
  {
    "id": 42,
    "slug": "oevp-pilnacek-justizsektionschef-2021",
    "question": "Wofür wurde Justiz-Sektionschef Christian Pilnacek verdächtigt?",
    "options": [
      {
        "letter": "A",
        "text": "Beteiligung am Verrat von Hausdurchsuchungen und Weitergabe von Ermittlungsdaten"
      },
      {
        "letter": "B",
        "text": "Schulreformen"
      },
      {
        "letter": "C",
        "text": "Naturschutz"
      },
      {
        "letter": "D",
        "text": "Kulturpolitik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Pilnacek verdächtig: 2021 verrat von Hausdurchsuchungen gegen Michael Tojner und dem Blümel-Umfeld weitergegeben. Suspendiert, später pensioniert.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Machtmissbrauch",
      "Pilnacek"
    ]
  },
  {
    "id": 43,
    "slug": "oevp-glatz-kremsner-casinos-2020",
    "question": "Was war die Casinos-Affäre von ÖVP-Vizeparteichefin Bettina Glatz-Kremsner?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ-Politiker Sidlo zum Finanzvorstand - sie zum Generaldirektorin mit 1,6 Mio Abfertigung"
      },
      {
        "letter": "B",
        "text": "Glücksspiellizenzen"
      },
      {
        "letter": "C",
        "text": "Spiel-Schulden"
      },
      {
        "letter": "D",
        "text": "Kunstsammlung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Glatz-Kremsner als ÖVP-Vizechefin: FPÖ-Sidlo zum Casag-Finanzvorstand (statt Glatz-Kremsner), diese aufrücken, verdient 1,6 Mio Euro. Falschaussage im U-Ausschuss, Diversion mit 104.000 Euro (2024).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2020",
      "Korruption",
      "Casinos"
    ]
  },
  {
    "id": 44,
    "slug": "oevp-schelling-steuernachlass-2016",
    "question": "Was war die Rolle von ÖVP-Finanzminister Schelling in der Wolf-Affäre?",
    "options": [
      {
        "letter": "A",
        "text": "Informiert von Thomas Schmid, ermöglichte Steuernachlass von Millionen für MAN-Investor"
      },
      {
        "letter": "B",
        "text": "Schulreformen"
      },
      {
        "letter": "C",
        "text": "Forschungsfinanzierung"
      },
      {
        "letter": "D",
        "text": "Verkehrspolitik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Finanzminister Schelling (2014-2017): Ermittelt wegen Steuercausa Wolf (Steuernachlass Millionen) und Amtsmissbrauch bei Postenbesetzung Finanzamt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2016",
      "Korruption",
      "Schelling"
    ]
  },
  {
    "id": 45,
    "slug": "oevp-loeger-uniqa-bestechung-2017",
    "question": "Was war die UNIQA-Skandal um ÖVP-Finanzminister Hartwig Löger?",
    "options": [
      {
        "letter": "A",
        "text": "Spenden vor und nach Gesetzesvergünstigung für UNIQA-Tochter Premiqamed (5 Mio Euro)"
      },
      {
        "letter": "B",
        "text": "Versicherungsvertrag"
      },
      {
        "letter": "C",
        "text": "Rentenkauf"
      },
      {
        "letter": "D",
        "text": "Pensionsberatung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Löger (UNIQA-Manager 2017 ÖVP-Finanzminister): UNIQA spendete 25.000 Euro vor Wechsel, danach Gesetz zugunsten Premiqamed-Tochter (5 Mio Vorteil), wieder 25.000 Euro Spende.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2017",
      "Korruption",
      "Löger"
    ]
  },
  {
    "id": 46,
    "slug": "oevp-steiner-kurz-berater-2021",
    "question": "Welche Rolle spielte Stefan Steiner im ÖVP-Netzwerk um Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Persönlicher Berater Kurz, \"Schlüsselfigur\" bei gefälschten Umfragen"
      },
      {
        "letter": "B",
        "text": "Gymnasiallehrer"
      },
      {
        "letter": "C",
        "text": "Kunstsammler"
      },
      {
        "letter": "D",
        "text": "Sportfunktionär"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Stefan Steiner seit 2011 bei Kurz, kurz ÖVP-Generalsekretär (2017/18), danach persönlicher Berater. \"Schlüsselfigur\" bei Umfragen-Affäre, gibt inhaltliche Leitlinien vor.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Steiner"
    ]
  },
  {
    "id": 47,
    "slug": "oevp-fleischmann-medienkoordinator-2021",
    "question": "Wer war Gerald Fleischmann und seine Rolle bei gefälschten Umfragen?",
    "options": [
      {
        "letter": "A",
        "text": "Medienkoordinator Regierung Kurz, Ideengeber für bestellte Studien"
      },
      {
        "letter": "B",
        "text": "Zeitungsredakteur"
      },
      {
        "letter": "C",
        "text": "Fernsehproduzent"
      },
      {
        "letter": "D",
        "text": "Radiosprecher"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Gerald Fleischmann als Medienkoordinator: Ideengeber für manipulierte Umfragen, schrieb Chats wie \"Griss bringt praktisch 0\" (NEOS-Kandidatin sollte schlecht aussehen).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Fleischmann"
    ]
  },
  {
    "id": 48,
    "slug": "oevp-frischmann-kurz-sprecher-2021",
    "question": "Was war die Rolle von Johannes Frischmann in der ÖVP-Affäre?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-Kurz-Sprecher, beteiligt an Umfragen-Manipulation und Scheinrechnungen"
      },
      {
        "letter": "B",
        "text": "Bibliothekar"
      },
      {
        "letter": "C",
        "text": "Archivleiter"
      },
      {
        "letter": "D",
        "text": "Dokumentalist"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Johannes Frischmann, Tiroler ÖVP-Funktionär, Ex-Sprecher Kurz: Entwicklung \"B.-Österreich-Tool\", Manipulation von Umfragen (\"Wir schneiden schlechter ab - da habe ich umgedreht\").",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Frischmann"
    ]
  },
  {
    "id": 49,
    "slug": "oevp-pasquali-bundeskanzler-2021",
    "question": "Wofür wird Johannes Pasquali ermittelt?",
    "options": [
      {
        "letter": "A",
        "text": "Leiter Kommunikation Bundeskanzleramt, Inserateverträge und Scheinrechnungen für Umfragen"
      },
      {
        "letter": "B",
        "text": "Graphikdesigner"
      },
      {
        "letter": "C",
        "text": "Fotografer"
      },
      {
        "letter": "D",
        "text": "Schriftsteller"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Johannes Pasquali als Kommunikationschef Finanzministerium: Verantwortung für Inseratverträge Österreich (1,1 Mio) und Scheinrechnungen für Studien (500.000 Euro). ÖVP-Bezirksparteiobmann Wien 4.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Pasquali"
    ]
  },
  {
    "id": 50,
    "slug": "oevp-bonelli-kurz-kabinett-2022",
    "question": "Wofür wird Bernhard Bonelli, Kabinettschef Kurz, ermittelt?",
    "options": [
      {
        "letter": "A",
        "text": "Falschaussage im U-Ausschuss zu Thomas Schmid ÖBAG-Bestellung"
      },
      {
        "letter": "B",
        "text": "Finanzmanagement"
      },
      {
        "letter": "C",
        "text": "Personalwesen"
      },
      {
        "letter": "D",
        "text": "Archivverwaltung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Bernhard Bonelli, Kabinettschef Kurz: Verdacht Falschaussage im U-Ausschuss zur ÖBAG-Bestellung Thomas Schmid. Februar 2024: 6 Monate bedingt verurteilt, Höchstgericht bestätigte Urteil.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2022",
      "Falschaussage",
      "Bonelli"
    ]
  },
  {
    "id": 51,
    "slug": "fpoe-nachtigung-drohing-2010",
    "question": "Wofür wurde ein ehemaliger FPÖ-Ortsparteiobmann 2010 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Nötigung und gefährliche Drohung"
      },
      {
        "letter": "B",
        "text": "Heckenplanzung"
      },
      {
        "letter": "C",
        "text": "Wasserschäden"
      },
      {
        "letter": "D",
        "text": "Nachbarschaftstreit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Stadtparteiobmann Niederösterreich: 2010 wegen Nötigung und gefährlicher Drohung verurteilt - Einschüchterungstaktiken.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2010",
      "Gewalt",
      "Drohung"
    ]
  },
  {
    "id": 52,
    "slug": "fpoe-veruntreuung-gewaerschaften-1964",
    "question": "Wofür wurde SPÖ-Politiker Anton Olah wegen Veruntreuung verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Veruntreuung von Gewerkschaftsgeldern, Missbrauch von Geheimakten"
      },
      {
        "letter": "B",
        "text": "Immobilienverkauf"
      },
      {
        "letter": "C",
        "text": "Kunstsammlung"
      },
      {
        "letter": "D",
        "text": "Fahrzeugversicherung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "SPÖ-Innenminister Anton Olah (1963): Verdacht Missbrauch von Staatspolizei-Geheimakten, 1964 ausgeschlossen, später wegen Veruntreuung von Gewerkschaftsgeldern verurteilt.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Sozialdemokratische_Partei_%C3%96sterreichs"
      }
    ],
    "tags": [
      "SPÖ",
      "1964",
      "Veruntreuung",
      "Olah"
    ]
  },
  {
    "id": 53,
    "slug": "fpoe-besetzung-urkundenfaelschung-2015",
    "question": "Was war der Skandal mit Unterschriftenfälschung bei FPÖ-Kandidatur?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ-Nationalrat setzte Frau auf Kandidatenliste, fälschte Unterschrift"
      },
      {
        "letter": "B",
        "text": "Schulabgangszeugnis"
      },
      {
        "letter": "C",
        "text": "Erbvertrag"
      },
      {
        "letter": "D",
        "text": "Mietvertrag"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Nationalrat Guntramsdorf: Verdacht Urkundenfälschung - Frau gegen Willen auf FPÖ-Liste, deren Unterschrift auf Einwilligungserklärung gefälscht (2015).",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Wahl-Betrug",
      "Unterschriftenfälschung"
    ]
  },
  {
    "id": 54,
    "slug": "fpoe-verhotung-vorarlberg-2010",
    "question": "Wofür wurde ein Ex-FPÖ-Politiker aus Vorarlberg 2010 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Verhetzung"
      },
      {
        "letter": "B",
        "text": "Graffiti"
      },
      {
        "letter": "C",
        "text": "Falschparken"
      },
      {
        "letter": "D",
        "text": "Lärmbelästigung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Politiker Vorarlberg: 2010 rechtskräftig wegen Verhetzung verurteilt - Aufstachelung gegen Gruppen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2010",
      "Verhetzung",
      "Vorarlberg"
    ]
  },
  {
    "id": 55,
    "slug": "fpoe-klubobmann-falschaussage-2008",
    "question": "Wofür wurde ein ehemaliger FPÖ-Klubobmann 2008 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Falschaussage vor Gericht"
      },
      {
        "letter": "B",
        "text": "Bücherei-Raub"
      },
      {
        "letter": "C",
        "text": "Auto-Diebstahl"
      },
      {
        "letter": "D",
        "text": "Geldautomaten-Überfall"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Klubobmann: 2008 rechtskräftig wegen Falschaussage vor Gericht verurteilt - Lügen im Gerichtsverfahren.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2008",
      "Falschaussage",
      "Klubobmann"
    ]
  },
  {
    "id": 56,
    "slug": "fpoe-nationalrat-noetigung-falschaussage-2015",
    "question": "Was war das Vergehen eines ehemaliger FPÖ-Nationalrats 2015?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Nötigung und falscher Zeugenaussage verurteilt"
      },
      {
        "letter": "B",
        "text": "Parkplatz-Überfall"
      },
      {
        "letter": "C",
        "text": "Fahrradiebstahl"
      },
      {
        "letter": "D",
        "text": "Hundebiss"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Nationalrat: 2015 rechtskräftig wegen Nötigung und falscher Zeugenaussage verurteilt - Einschüchterung und Lügen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Nötigung",
      "Nationalrat"
    ]
  },
  {
    "id": 57,
    "slug": "fpoe-abgeordneter-ueble-nachrede-2012",
    "question": "Wie oft wurde ein FPÖ-Abgeordneter wegen übler Nachrede verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Mehrfach rechtskräftig verurteilt"
      },
      {
        "letter": "B",
        "text": "Einmal"
      },
      {
        "letter": "C",
        "text": "Nie"
      },
      {
        "letter": "D",
        "text": "Dreimal"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Abgeordneter: Mehrfach wegen übler Nachrede rechtskräftig verurteilt - Beleidigung und Verleumdung von Personen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2012",
      "Beleidigung",
      "Nachrede"
    ]
  },
  {
    "id": 58,
    "slug": "fpoe-generalsekretaer-ueble-nachrede-2009",
    "question": "Wofür wurde ein FPÖ-Generalsekretär und EU-Mandatar 2009 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen übler Nachrede verurteilt"
      },
      {
        "letter": "B",
        "text": "Steuerbetrug"
      },
      {
        "letter": "C",
        "text": "Amtsmissbrauch"
      },
      {
        "letter": "D",
        "text": "Unterschlagung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Generalsekretär und EU-Mandatar: 2009 wegen übler Nachrede verurteilt - Beleidigung von Personen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Nachrede",
      "Generalsekretär"
    ]
  },
  {
    "id": 59,
    "slug": "fpoe-rfs-verhotung-drohing-2012",
    "question": "Wofür wurde ein ehemaliger RFJ-Aktivist 2012 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Verhetzung und gefährlicher Drohung"
      },
      {
        "letter": "B",
        "text": "Fahrerflucht"
      },
      {
        "letter": "C",
        "text": "Laden-Raub"
      },
      {
        "letter": "D",
        "text": "Graffiti"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger RFJ-Aktivist (FPÖ-Jugend): 2012 rechtskräftig wegen Verhetzung und gefährlicher Drohung verurteilt - Aufstachelung zu Gewalt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2012",
      "Verhetzung",
      "RFJ"
    ]
  },
  {
    "id": 60,
    "slug": "fpoe-tirol-gemeinderat-ns-betaetigung-2012",
    "question": "Welcher FPÖ-Gemeinderat wurde 2012 wegen NS-Betätigung verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Ehemaliger Gemeinderat Tirol wegen NS-Wiederbetätigung"
      },
      {
        "letter": "B",
        "text": "Stadtrat Wien"
      },
      {
        "letter": "C",
        "text": "Bezirksrat Kärnten"
      },
      {
        "letter": "D",
        "text": "Landtagsabgeordneter Vorarlberg"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Gemeinderat Tirol: 2012 wegen NS-Wiederbetätigung verurteilt - Verherrlichung von Nationalsozialismus.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2012",
      "NS-Verbot",
      "Tirol"
    ]
  },
  {
    "id": 61,
    "slug": "fpoe-beleidigung-bundespraesident-2001",
    "question": "Was war das Vergehen eines FPÖ-Spitzenpolitikers 2001?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Beleidigung des Bundespräsidenten verurteilt"
      },
      {
        "letter": "B",
        "text": "Falsche Steuererklärung"
      },
      {
        "letter": "C",
        "text": "Schwarzarbeit"
      },
      {
        "letter": "D",
        "text": "Parkplatz-Streit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-Spitzenpolitiker (FPÖ): 2001 wegen Beleidigung des Bundespräsidenten verurteilt - Diffamierung des Staatsoberhauptes.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2001",
      "Beleidigung",
      "Spitzenpolitiker"
    ]
  },
  {
    "id": 62,
    "slug": "fpoe-landtagsabgeordnete-amtsmissbrauch-2014",
    "question": "Wofür wurde eine FPÖ-Landtagsabgeordnete 2014 angeklagt?",
    "options": [
      {
        "letter": "A",
        "text": "Nicht rechtskräftig wegen Amtsmissbrauch verurteilt"
      },
      {
        "letter": "B",
        "text": "Steuerhinterziehung"
      },
      {
        "letter": "C",
        "text": "Betrug"
      },
      {
        "letter": "D",
        "text": "Unterschlagung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Landtagsabgeordnete: 2014 (nicht rechtskräftig) wegen Amtsmissbrauch verurteilt - Missbrauch der Amtsposition.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2014",
      "Amtsmissbrauch",
      "Landtag"
    ]
  },
  {
    "id": 63,
    "slug": "fpoe-abgeordneter-verhotung-2010",
    "question": "Welcher ehemaliger FPÖ-Abgeordneter wurde 2010 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Verhetzung"
      },
      {
        "letter": "B",
        "text": "Falschparkung"
      },
      {
        "letter": "C",
        "text": "Bibliotheks-Schulden"
      },
      {
        "letter": "D",
        "text": "Gartenzaun-Streit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Abgeordneter: 2010 rechtskräftig wegen Verhetzung verurteilt - Aufstachelung gegen Bevölkerungsgruppen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2010",
      "Verhetzung",
      "Abgeordneter"
    ]
  },
  {
    "id": 64,
    "slug": "fpoe-buergermeister-ooe-amtsmissbrauch-2012",
    "question": "Wofür wurde ein FPÖ-Bürgermeister aus OÖ 2012 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Amtsmissbrauchs verurteilt"
      },
      {
        "letter": "B",
        "text": "Falsche Wahlversprechen"
      },
      {
        "letter": "C",
        "text": "Gemeinde-Finanzen"
      },
      {
        "letter": "D",
        "text": "Straßenbaubeiträge"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Bürgermeister Oberösterreich: 2012 rechtskräftig wegen Amtsmissbrauch verurteilt - Missbrauch der Bürgermeisterposition.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2012",
      "Amtsmissbrauch",
      "Bürgermeister"
    ]
  },
  {
    "id": 65,
    "slug": "fpoe-funktionaer-steiermark-amtsmissbrauch-2010",
    "question": "Wofür wurde ein FPÖ-Funktionär in der Steiermark 2010 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Amtsmissbrauchs verurteilt"
      },
      {
        "letter": "B",
        "text": "Privatbeleidigung"
      },
      {
        "letter": "C",
        "text": "Verkehrsdelikt"
      },
      {
        "letter": "D",
        "text": "Versicherungsbetrug"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Funktionär Steiermark: 2010 wegen Amtsmissbrauch verurteilt - Missbrauch von Behördenmacht.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2010",
      "Amtsmissbrauch",
      "Steiermark"
    ]
  },
  {
    "id": 66,
    "slug": "fpoe-bezirksobmann-ns-verbot-2004",
    "question": "Wofür wurde ein stellv. FPÖ-Bezirksobmann 2004 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen NS-Wiederbetätigung und gefährlicher Drohung"
      },
      {
        "letter": "B",
        "text": "Vandalismus"
      },
      {
        "letter": "C",
        "text": "Lärmbelästigung"
      },
      {
        "letter": "D",
        "text": "Fundunterschlagung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehem. stv. FPÖ-Bezirksobmann Oberösterreich: 2004 rechtskräftig wegen NS-Wiederbetätigung und gefährlicher Drohung verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2004",
      "NS-Verbot",
      "Bezirksobmann"
    ]
  },
  {
    "id": 67,
    "slug": "fpoe-betrug-schwer-gewerbsmaessig-2000",
    "question": "Welcher ehemaliger FPÖ-Abgeordneter wurde 2000 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen schweren gewerbsmäßigen Betrugs"
      },
      {
        "letter": "B",
        "text": "Immobilien-Makler"
      },
      {
        "letter": "C",
        "text": "Versicherungen"
      },
      {
        "letter": "D",
        "text": "Geldanlage"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Abgeordneter: 2000 rechtskräftig wegen schweren gewerbsmäßigen Betrugs verurteilt - systematischer Betrug.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2000",
      "Betrug",
      "Abgeordneter"
    ]
  },
  {
    "id": 68,
    "slug": "fpoe-koerperverletzung-tirol-2015",
    "question": "Wofür wurde ein FPÖ-Gemeinderat in Tirol 2015 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Körperverletzung seiner Schwester"
      },
      {
        "letter": "B",
        "text": "Nachbarschaftsstreit"
      },
      {
        "letter": "C",
        "text": "Tierquälerei"
      },
      {
        "letter": "D",
        "text": "Vandalismus"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Gemeinderat Tirol: 2015 rechtskräftig wegen Körperverletzung seiner Schwester verurteilt - Familiengewalt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Gewalt",
      "Körperverletzung"
    ]
  },
  {
    "id": 69,
    "slug": "fpoe-vizebuergermeister-kaernten-bestechlichkeit-2013",
    "question": "Wofür wurde ein FPÖ-Vizebürgermeister Kärnten verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "2013 wegen Bestechlichkeit und Amtsmissbrauch"
      },
      {
        "letter": "B",
        "text": "Parkplatz-Diebstahl"
      },
      {
        "letter": "C",
        "text": "Gartenzaun-Fehler"
      },
      {
        "letter": "D",
        "text": "Nachbarschaftskonflikt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Vizebürgermeister Kärnten: 2013 wegen Bestechlichkeit und Amtsmissbrauch verurteilt - Korruption in lokaler Politik.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2013",
      "Bestechlichkeit",
      "Vizebürgermeister"
    ]
  },
  {
    "id": 70,
    "slug": "fpoe-bezirksrat-steiermark-verhotung-2008",
    "question": "Wofür wurde ein FPÖ-Bezirksrat Steiermark 2008 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Verhetzung"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Auto-Unfall"
      },
      {
        "letter": "D",
        "text": "Pferd-Streit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Bezirksrat Steiermark: 2008 rechtskräftig wegen Verhetzung verurteilt - Aufstachelung gegen Gruppen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2008",
      "Verhetzung",
      "Bezirksrat"
    ]
  },
  {
    "id": 71,
    "slug": "fpoe-ortsparteiobmann-noe-verhotung-2013",
    "question": "Wofür wurde ein FPÖ-Ortsparteiobmann NÖ 2013 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Verhetzung"
      },
      {
        "letter": "B",
        "text": "Grundstück-Grenzstreit"
      },
      {
        "letter": "C",
        "text": "Wasser-Leitung"
      },
      {
        "letter": "D",
        "text": "Baum-Schnitt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Ortsparteiobmann Niederösterreich: 2013 rechtskräftig wegen Verhetzung verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2013",
      "Verhetzung",
      "Niederösterreich"
    ]
  },
  {
    "id": 72,
    "slug": "fpoe-finanzlandesrat-untreue-2009",
    "question": "Wofür wurde ein Ex-FPÖ-Finanzlandesrat 2009 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Untreue in der BZÖ-Wahlbroschüren-Affäre auf Landeskosten"
      },
      {
        "letter": "B",
        "text": "Schulvorlage"
      },
      {
        "letter": "C",
        "text": "Sicherheit-Fragen"
      },
      {
        "letter": "D",
        "text": "Verkehrs-Planung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Finanzlandesrat: 2009 wegen Untreue (BZÖ-Wahlbroschüre auf Landeskosten) zu 4 Monaten bedingter Haft verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Untreue",
      "Finanzlandesrat"
    ]
  },
  {
    "id": 73,
    "slug": "fpoe-gemeinderat-noe-urkundenfaelschung-2015",
    "question": "Wofür wurde ein FPÖ-Gemeinderat NÖ 2015 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Urkundenfälschung und Wahl-Fälschung"
      },
      {
        "letter": "B",
        "text": "Vertrag-Streit"
      },
      {
        "letter": "C",
        "text": "Unterschriften-Sammlung"
      },
      {
        "letter": "D",
        "text": "Anmeldung-Fehler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Gemeinderat Niederösterreich: 2015 rechtskräftig zu 4.320 Euro oder 60 Tagen Arrest wegen Urkundenfälschung und Wahl-Fälschung verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Wahl-Betrug",
      "Urkundenfälschung"
    ]
  },
  {
    "id": 74,
    "slug": "fpoe-steiermark-ueble-nachrede-2023",
    "question": "Wofür wurde die FPÖ Steiermark 2023 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen übler Nachrede zu 13.000 Euro Entschädigung"
      },
      {
        "letter": "B",
        "text": "Graffiti-Entfernung"
      },
      {
        "letter": "C",
        "text": "Wahlplakat-Streit"
      },
      {
        "letter": "D",
        "text": "Flyer-Verteiler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ Steiermark: 2023 rechtskräftig wegen übler Nachrede zur Zahlung von 13.000 Euro Entschädigung verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2023",
      "Nachrede",
      "Steiermark"
    ]
  },
  {
    "id": 75,
    "slug": "fpoe-vice-mayor-missbrauch-2015",
    "question": "Wofür wurde ein FPÖ-Vizebürgermeister OÖ 2015 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen sexuellen Missbrauchs von Unmündigen und Amtsposition-Missbrauch"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Kindergarten-Entgelt"
      },
      {
        "letter": "D",
        "text": "Schulgebäude"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Vizebürgermeister Oberösterreich: 2015 wegen sexuellen Missbrauchs von Unmündigen und Missbrauch von Autoritätsverhältnis zu 12 Monaten (4 unbedingt) verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Sexueller Missbrauch",
      "Amtsmissbrauch"
    ]
  },
  {
    "id": 76,
    "slug": "fpoe-mehrheit-covid-verordnung-2023",
    "question": "Was war das Verhalten der FPÖ gegenüber COVID-Verordnungen?",
    "options": [
      {
        "letter": "A",
        "text": "11 FPÖ-Fraktionsmitglieder Kärnten wegen gefährlicher Ansteckung verurteilt (2023)"
      },
      {
        "letter": "B",
        "text": "Befolgung aller Maßnahmen"
      },
      {
        "letter": "C",
        "text": "Unterstützung der Regierung"
      },
      {
        "letter": "D",
        "text": "Impfkampagne"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "11 FPÖ-Fraktionsmitglieder Kärnten: 2023 zu je 1.000 Euro Verwaltungsstrafe wegen vorsätzlicher Gefährdung durch übertragbare Krankheit verurteilt - COVID-Missachtung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2023",
      "COVID",
      "Gefährdung"
    ]
  },
  {
    "id": 77,
    "slug": "fpoe-abgeordneter-amtsgeheimnis-2023",
    "question": "Wofür wurde ein Ex-FPÖ-Abgeordneter 2023 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Verletzung des Amtsgeheimnisses zu 12 Monaten bedingt"
      },
      {
        "letter": "B",
        "text": "Steuerhinterziehung"
      },
      {
        "letter": "C",
        "text": "Diebstahl"
      },
      {
        "letter": "D",
        "text": "Beamtenbestechung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Abgeordneter: 2023 wegen Verletzung des Amtsgeheimnisses zu 12 Monaten bedingt verurteilt - Weitergabe von Staatsgeheimnissen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2023",
      "Amtsgeheimnis",
      "Verrat"
    ]
  },
  {
    "id": 78,
    "slug": "fpoe-landeshauptmann-haftstrafe-2020",
    "question": "Was war das Vergehen eines Ex-Landeshauptmann Kärnten?",
    "options": [
      {
        "letter": "A",
        "text": "Verdacht Bestechlichkeit und Vorteilsnahme (nicht rechtskräftig) (2020)"
      },
      {
        "letter": "B",
        "text": "Naturschutz"
      },
      {
        "letter": "C",
        "text": "Schulpolitik"
      },
      {
        "letter": "D",
        "text": "Verkehrswesen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-Landeshauptmann-Stellvertreter Kärnten: 2020 (nicht rechtskräftig) wegen Bestechlichkeit und Vorteilsnahme verurteilt - Korruption.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2020",
      "Bestechlichkeit",
      "Kärnten"
    ]
  },
  {
    "id": 79,
    "slug": "fpoe-klubobmann-noe-ns-betaetigung-2020",
    "question": "Wofür wurde ein ehemaliger FPÖ-Klubobmann NÖ verdächtigt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Verstoß gegen Verbotsgesetz zu 12 Monaten bedingt (nicht rechtskräftig) (2020)"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Gebühren-Schulden"
      },
      {
        "letter": "D",
        "text": "Lizenz-Streit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger Klubobmann FPÖ-NÖ: 2020 (nicht rechtskräftig) wegen Verstoß gegen Verbotsgesetz zu 12 Monaten bedingter Freiheitsstrafe verurteilt - NS-Verherrlichung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2020",
      "NS-Verbot",
      "Klubobmann"
    ]
  },
  {
    "id": 80,
    "slug": "fpoe-salzburg-ns-verbotsgesetz-2021",
    "question": "Wofür wurde ein ehemaliger FPÖ-Politiker Salzburg verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "2021 wegen NS-Wiederbetätigung nach Verbotsgesetz"
      },
      {
        "letter": "B",
        "text": "Parkplatz-Diebstahl"
      },
      {
        "letter": "C",
        "text": "Nachbarschaftsstreit"
      },
      {
        "letter": "D",
        "text": "Gartenzaun-Fehler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Politiker Salzburg: 2021 wegen NS-Wiederbetätigung nach Verbotsgesetz verurteilt - Verherrlichung von Nationalsozialismus.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "NS-Verbot",
      "Salzburg"
    ]
  },
  {
    "id": 81,
    "slug": "oevp-bezirksobmann-diffamierung-2022",
    "question": "Wofür wurde ein FPÖ-Vizebürgermeister OÖ 2022 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen diffamierender Behauptung"
      },
      {
        "letter": "B",
        "text": "Auto-Schaden"
      },
      {
        "letter": "C",
        "text": "Hausreparatur"
      },
      {
        "letter": "D",
        "text": "Versicherungsfehler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Vizebürgermeister Oberösterreich: 2022 rechtskräftig wegen diffamierender Behauptung verurteilt - Ehrenbeleidigung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2022",
      "Diffamierung",
      "Ehre"
    ]
  },
  {
    "id": 82,
    "slug": "fpoe-burgenland-koerperverletzung-2015",
    "question": "Wofür wurde ein Ex-Bezirksobmann Burgenland 2015 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen schwerer Körperverletzung zu 21 Monaten Haft (7 unbedingt)"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Schlüssel-Verlust"
      },
      {
        "letter": "D",
        "text": "Nachbar-Streit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-Bezirksobmann (stv.) Burgenland: 2015 wegen schwerer Körperverletzung zu 21 Monaten Haft (davon 7 unbedingt) verurteilt - Gewalttätigkeit.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Körperverletzung",
      "Burgenland"
    ]
  },
  {
    "id": 83,
    "slug": "fpoe-telekom-untreue-2013",
    "question": "Was war das Vergehen eines FPÖ-Abgeordneten Telekom-Skandal?",
    "options": [
      {
        "letter": "A",
        "text": "2013 zu 2 Jahren Haft (3 Monate unbedingt) wegen Telekom-Parteienfinanzierung und Falschaussage"
      },
      {
        "letter": "B",
        "text": "Handyvertrag"
      },
      {
        "letter": "C",
        "text": "Internet-Einbau"
      },
      {
        "letter": "D",
        "text": "Fernsehen-Installation"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ehemaliger FPÖ-Abgeordneter: 2013 zu 2 Jahren Haft (davon 3 Monate unbedingt) wegen Beihilfe zur Untreue (Telekom 960.000 Euro) und Falschaussage verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2013",
      "Untreue",
      "Telekom"
    ]
  },
  {
    "id": 84,
    "slug": "fpoe-vizebuergermeister-diffamierung-2022",
    "question": "Was war das Vergehen eines FPÖ-Vizebürgermeisters OÖ 2022?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen diffamierender Behauptung verurteilt"
      },
      {
        "letter": "B",
        "text": "Graffiti-Schmierer"
      },
      {
        "letter": "C",
        "text": "Parkplatz-Streit"
      },
      {
        "letter": "D",
        "text": "Zaun-Übergriff"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Vizebürgermeister Oberösterreich: 2022 rechtskräftig wegen diffamierender Behauptung verurteilt - Beleidigung und Ehrenbeleidigung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2022",
      "Diffamierung",
      "Vizebürgermeister"
    ]
  },
  {
    "id": 85,
    "slug": "fpoe-landeshauptmann-wiederbetaetigung-2019",
    "question": "Wofür wurden 2 FPÖ-Gemeinderäte OÖ 2019 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen Wiederbetätigung zu bedingten Freiheitsstrafen 12-20 Monaten"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Gebühren-Schulden"
      },
      {
        "letter": "D",
        "text": "Lizen-Verletzung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Zwei ehemalige FPÖ-Gemeinderäte OÖ: 2019 rechtskräftig wegen Wiederbetätigung zu bedingten Freiheitsstrafen zwischen 12 und 20 Monaten verurteilt.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2019",
      "NS-Verbot",
      "Gemeinderat"
    ]
  },
  {
    "id": 86,
    "slug": "fpoe-diversion-verhotung-2015",
    "question": "Was war die Diversion eines FPÖ-Gemeinderats 2015?",
    "options": [
      {
        "letter": "A",
        "text": "NÖ-Gemeinderat einigte sich auf 1.500 Euro Geldbuße wegen Verhetzung"
      },
      {
        "letter": "B",
        "text": "Verkehrsschulung"
      },
      {
        "letter": "C",
        "text": "Sozialstunden"
      },
      {
        "letter": "D",
        "text": "Gemeinde-Arbeit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Gemeinderat Niederösterreich: 2015 Diversion (Geldbuße 1.500 Euro) wegen Verhetzung - Absprache statt Verurteilung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2015",
      "Verhetzung",
      "Diversion"
    ]
  },
  {
    "id": 87,
    "slug": "fpoe-rfj-koerperverletzung-2012",
    "question": "Wofür wurde ein Ex-RFJ-Vorstandsmitglied 2012 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig wegen schwerer Körperverletzung und NS-Wiederbetätigung"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Schule-Versäumnis"
      },
      {
        "letter": "D",
        "text": "Prüfungs-Fehler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-RFJ-Vorstandsmitglied: 2012 rechtskräftig wegen schwerer Körperverletzung und NS-Wiederbetätigung verurteilt - Gewalt und NS-Verherrlichung kombiniert.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2012",
      "NS-Verbot",
      "RFJ"
    ]
  },
  {
    "id": 88,
    "slug": "fpoe-brueckengeheimakt-2021",
    "question": "Warum ermittelt die Graz-FPÖ gegen Mario Kunasek?",
    "options": [
      {
        "letter": "A",
        "text": "NS-Gegenstände, Waffen, dubiose Geldströme, Vertuschungsversuche"
      },
      {
        "letter": "B",
        "text": "Schulfinanzen"
      },
      {
        "letter": "C",
        "text": "Umweltpolitik"
      },
      {
        "letter": "D",
        "text": "Verkehrswesen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Grazer FPÖ-Affäre 2024: Mario Kunasek (Landesparteichef) und andere Funktionäre als Beschuldigte - NS-Funde, Waffen, dubiose Geldströme unter Lagern der Partei.",
    "sourceLinks": [
      {
        "name": "Profil.at",
        "url": "https://www.profil.at/investigativ/kickls-stolperfalle-die-akte-fpoe/402747583"
      }
    ],
    "tags": [
      "FPÖ",
      "2024",
      "NS-Verbot",
      "Steiermark"
    ]
  },
  {
    "id": 89,
    "slug": "oevp-loeger-uniqa-ermittlung-2021",
    "question": "Welche Ermittlung betraf ÖVP-Finanzminister Hartwig Löger?",
    "options": [
      {
        "letter": "A",
        "text": "Verdacht Beihilfe zur Untreue wegen UNIQA-Spende und Gesetzesvorteil"
      },
      {
        "letter": "B",
        "text": "Pensionierungspläne"
      },
      {
        "letter": "C",
        "text": "Schulbauten"
      },
      {
        "letter": "D",
        "text": "Kulturförderung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Hartwig Löger (ÖVP-Finanzminister 2017): Verdacht Beihilfe zur Untreue - UNIQA-Spenden vor und nach Gesetzesvergünstigung Premiqamed-Tochter (5 Mio Euro Vorteil).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruption",
      "Löger"
    ]
  },
  {
    "id": 90,
    "slug": "gruene-asylpolitik-umkehr-2018",
    "question": "Welchen Vorwurf erhielten die Grünen 2018 von ihrer Basis?",
    "options": [
      {
        "letter": "A",
        "text": "Widerspruch zwischen Wahlprogramm (Willkommenskultur) und Koalitionsrealpolitik (Asylbeschränkungen)"
      },
      {
        "letter": "B",
        "text": "Zu wenig CO2-Reduktion"
      },
      {
        "letter": "C",
        "text": "Falsche Atomkraft-Politik"
      },
      {
        "letter": "D",
        "text": "Zu viel Flugverkehr"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Grüne Koalitionspolitik 2018-2019: Wähler kritisierten Diskrepanz - Koalitionsvertrag mit ÖVP enthielt Asylrestriktionen gegen grüne Wahlversprechen von Willkommenskultur.",
    "sourceLinks": [
      {
        "name": "Süddeutsche.de",
        "url": "https://www.sueddeutsche.de/politik/gruene-in-der-existenzkrise-wer-links-ist-hat-es-in-oesterreich-schwer-1.3950542"
      }
    ],
    "tags": [
      "Grüne",
      "2018",
      "Wahlverrat",
      "Asylpolitik"
    ]
  },
  {
    "id": 91,
    "slug": "spoe-olah-geheimakten-1963",
    "question": "Was war die Affäre des SPÖ-Innenministers Anton Olah?",
    "options": [
      {
        "letter": "A",
        "text": "Verdacht Missbrauch von Geheimakten der Staatspolizei, 1964 ausgeschlossen"
      },
      {
        "letter": "B",
        "text": "Schulreform"
      },
      {
        "letter": "C",
        "text": "Verkehrsordnung"
      },
      {
        "letter": "D",
        "text": "Pensionsplan"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Anton Olah (SPÖ-Innenminister 1963): Verfügte über Geheimakten Staatspolizei, 1964 ausgeschlossen - Machtmissbrauch durch politischen Druck.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Sozialdemokratische_Partei_%C3%96sterreichs"
      }
    ],
    "tags": [
      "SPÖ",
      "1964",
      "Geheimakten",
      "Missbrauch"
    ]
  },
  {
    "id": 92,
    "slug": "neos-pinker-protest-2025",
    "question": "Was waren die \"Pinker Protest\"-Konflikte der NEOS 2025?",
    "options": [
      {
        "letter": "A",
        "text": "Interne Rumoren und Koalitions-Unstimmigkeiten bei NEOS"
      },
      {
        "letter": "B",
        "text": "Falsche Wahlwerbung"
      },
      {
        "letter": "C",
        "text": "Spendenskandal"
      },
      {
        "letter": "D",
        "text": "Parteiaustritt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2025: Report zeigt Rumoren und interne Konflikte bei NEOS - Spannungen in Koalitionsrollen, fehlende Einigkeit zwischen Parteiführung und Basis.",
    "sourceLinks": [
      {
        "name": "Report TV",
        "url": "https://www.youtube.com/watch?v=_exwsUmZeao"
      }
    ],
    "tags": [
      "NEOS",
      "2025",
      "Koalitionskrise",
      "Parteikonflikt"
    ]
  },
  {
    "id": 93,
    "slug": "fpoe-part-of-game-staatsbuergerschaft-2012",
    "question": "Was war die \"Part of the Game\"-Affäre des BZÖ 2012?",
    "options": [
      {
        "letter": "A",
        "text": "Parteispenden als Gegenleistung für Staatsbürgerschaften"
      },
      {
        "letter": "B",
        "text": "Privatflugstunden"
      },
      {
        "letter": "C",
        "text": "Immobilien-Tausch"
      },
      {
        "letter": "D",
        "text": "Auto-Geschenke"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-BZÖ/FPÖ-Spitzenfunktionär: 2012 verurteilt - Annahme von Parteispenden als Gegenleistung für Vergabe von Staatsbürgerschaften. Kriminelle Korruption.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2012",
      "Korruption",
      "Staatsbürgerschaft"
    ]
  },
  {
    "id": 94,
    "slug": "fpoe-wiener-kommunalpolitiker-verhotung-2021",
    "question": "Wofür wurde ein Wiener FPÖ-Kommunalpolitiker 2021 verurteilt?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Verhetzung zu 4.500 Euro Strafe"
      },
      {
        "letter": "B",
        "text": "Falsche Anmeldung"
      },
      {
        "letter": "C",
        "text": "Gebühren-Schulden"
      },
      {
        "letter": "D",
        "text": "Lizenz-Fehler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Wiener FPÖ-Kommunalpolitiker: 2021 wegen Verhetzung zu 4.500 Euro Strafe verurteilt - Aufstachelung gegen Gruppen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Verhetzung",
      "Wien"
    ]
  },
  {
    "id": 95,
    "slug": "fpoe-falschaussage-interview-2021",
    "question": "Was war der Missbrauch von Falschaussagen durch Strache?",
    "options": [
      {
        "letter": "A",
        "text": "Strache belastete sich selbst und andere ÖVP-Politiker in Ermittlungsgeständnissen"
      },
      {
        "letter": "B",
        "text": "Privatkonzert"
      },
      {
        "letter": "C",
        "text": "Kunstsammlung"
      },
      {
        "letter": "D",
        "text": "Privatjet-Miete"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "HC Strache (FPÖ-Chef): Ermittlungsdokumente zeigen umfassende Korruptionsnetzwerk - Parteigelder für Luxusleben, Spesenabrechnungen, private Ausgaben, Beschattung Ex-Frau.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Veruntreue",
      "Strache"
    ]
  },
  {
    "id": 96,
    "slug": "oevp-schallenberg-regierungsuebernahme-2021",
    "question": "Warum wurde Alexander Schallenberg ÖVP-Bundeskanzler 2021?",
    "options": [
      {
        "letter": "A",
        "text": "Kurz trat wegen Korruptionsskandal und Ermittlungen zurück"
      },
      {
        "letter": "B",
        "text": "Ruhestand geplant"
      },
      {
        "letter": "C",
        "text": "Außenministerium verlassen"
      },
      {
        "letter": "D",
        "text": "Europäische Karriere"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach ÖVP-Korruptionsaffäre und Ermittlungen gegen Kurz übernahm Schallenberg als Außenminister die Regierung. Kurz wechselte zu Klubobmann, später ganz aus Politik.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Regierungswechsel",
      "Kurz-Rückzug"
    ]
  },
  {
    "id": 97,
    "slug": "oevp-nehammer-bundeskanzler-2021",
    "question": "Wer wurde Bundeskanzler nach Schallenberg 2021?",
    "options": [
      {
        "letter": "A",
        "text": "Karl Nehammer, ÖVP-Innenminister"
      },
      {
        "letter": "B",
        "text": "Alexander Schallenberg"
      },
      {
        "letter": "C",
        "text": "Gernot Blümel"
      },
      {
        "letter": "D",
        "text": "Sebastian Kurz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Karl Nehammer übernahm als ÖVP-Innenminister die Kanzlerschaft November 2021 nach Schallenberg, um Regierungsstabilität zu bewahren.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Regierungskrise",
      "Nehammer"
    ]
  },
  {
    "id": 98,
    "slug": "oevp-u-ausschuss-2021",
    "question": "Wann wurde der ÖVP-Korruptions-U-Ausschuss eingesetzt?",
    "options": [
      {
        "letter": "A",
        "text": "9. Dezember 2021 nach Korruptionsaffäre"
      },
      {
        "letter": "B",
        "text": "6. Oktober 2021"
      },
      {
        "letter": "C",
        "text": "November 2021"
      },
      {
        "letter": "D",
        "text": "Januar 2022"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Der ÖVP-Korruptions-Untersuchungsausschuss wurde am 9. Dezember 2021 vom Nationalrat eingesetzt (27. U-Ausschuss). Befragungen liefen bis Oktober 2024.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptions-Untersuchungsausschuss"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Untersuchungsausschuss",
      "Korruption"
    ]
  },
  {
    "id": 99,
    "slug": "oevp-kurz-rücktritt-2021",
    "question": "Wann kündigte Kurz seinen Rücktritt als Bundeskanzler an?",
    "options": [
      {
        "letter": "A",
        "text": "9. Oktober 2021 nach Grünen-Forderung"
      },
      {
        "letter": "B",
        "text": "6. Oktober 2021"
      },
      {
        "letter": "C",
        "text": "8. Oktober 2021"
      },
      {
        "letter": "D",
        "text": "10. Oktober 2021"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz kündigte 9. Oktober 2021 Rücktritt als Kanzler an, nachdem die Grünen eine \"untadelige Person\" forderten. Wechsel zu Klubobmann.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Rücktritt",
      "Kurz"
    ]
  },
  {
    "id": 100,
    "slug": "oevp-kurz-politikrueckzug-2021",
    "question": "Wann zog sich Kurz vollständig aus der Politik zurück?",
    "options": [
      {
        "letter": "A",
        "text": "2. Dezember 2021 nach Geburt seines Sohnes"
      },
      {
        "letter": "B",
        "text": "9. Oktober 2021"
      },
      {
        "letter": "C",
        "text": "11. Oktober 2021"
      },
      {
        "letter": "D",
        "text": "Dezember 2020"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz kündigte 2. Dezember 2021 seinen vollständigen Rückzug aus der Politik an und begründete dies mit der Geburt seines Sohnes.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Politikrücktritt",
      "Kurz"
    ]
  },
  {
    "id": 101,
    "slug": "oevp-hausabsuche-6-oktober-2021",
    "question": "Wo fanden die Hausdurchsuchungen der WKStA am 6. Oktober 2021 statt?",
    "options": [
      {
        "letter": "A",
        "text": "Bundeskanzleramt, Finanzministerium, ÖVP-Parteizentrale"
      },
      {
        "letter": "B",
        "text": "Nur bei Kurz"
      },
      {
        "letter": "C",
        "text": "Nur ÖVP-Zentrale"
      },
      {
        "letter": "D",
        "text": "Alle Ministerien"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "6. Oktober 2021: WKStA führte Hausdurchsuchungen im Bundeskanzleramt, Finanzministerium und ÖVP-Parteizentrale durch - Beginn der Affäre.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Hausdurchsuchung",
      "WKStA"
    ]
  },
  {
    "id": 102,
    "slug": "oevp-koalitionsbedingung-kurz-gruene",
    "question": "Welche Bedingung stellten die Grünen nach Ibiza-Affäre an Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Rücktritt vom Kanzleramt und Wechsel zu Klubobmann"
      },
      {
        "letter": "B",
        "text": "Mehr Klimaschutz"
      },
      {
        "letter": "C",
        "text": "Asylpolitik-Änderung"
      },
      {
        "letter": "D",
        "text": "Mehr Mindestrente"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach Ibiza-Affäre 2019 forderten die Grünen von Kurz Rücktritt als Kanzler oder Koalitionsausstieg - später 2021 bei Korruptionsaffäre erneuert.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2019",
      "Ibiza",
      "Koalitionskrise"
    ]
  },
  {
    "id": 103,
    "slug": "fpoe-strache-vizekanzler-rolle",
    "question": "Welche Position hatte Heinz-Christian Strache in der Regierung?",
    "options": [
      {
        "letter": "A",
        "text": "Vizekanzler 2017-2019, FPÖ-Chef"
      },
      {
        "letter": "B",
        "text": "Finanzminister"
      },
      {
        "letter": "C",
        "text": "Innenminister"
      },
      {
        "letter": "D",
        "text": "Außenminister"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Heinz-Christian Strache war Vizekanzler (2017-2019) und FPÖ-Chef - fiel durch Ibiza-Video 2019 und späteren Luxus-Skandal.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2019",
      "Ibiza",
      "Strache"
    ]
  },
  {
    "id": 104,
    "slug": "fpoe-ibiza-video-aufnahme-jahr",
    "question": "In welchem Jahr wurde das Ibiza-Video heimlich aufgenommen?",
    "options": [
      {
        "letter": "A",
        "text": "2017"
      },
      {
        "letter": "B",
        "text": "2018"
      },
      {
        "letter": "C",
        "text": "2019"
      },
      {
        "letter": "D",
        "text": "2016"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Das Ibiza-Video wurde 2017 in einer Villa auf Ibiza heimlich aufgenommen - 2019 veröffentlicht, was zum Regierungsbruch führte.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2017",
      "Ibiza",
      "Video"
    ]
  },
  {
    "id": 105,
    "slug": "fpoe-ibiza-video-veroeffentlichung-2019",
    "question": "Wann wurde das Ibiza-Video öffentlich gemacht?",
    "options": [
      {
        "letter": "A",
        "text": "Mai 2019"
      },
      {
        "letter": "B",
        "text": "April 2019"
      },
      {
        "letter": "C",
        "text": "Juni 2019"
      },
      {
        "letter": "D",
        "text": "März 2019"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Das Ibiza-Video wurde Mai 2019 von Medien veröffentlicht - größter Polit-Skandal der 2. Republik, Bruch der Schwarz-Blauen Regierung, Neuwahlen.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2019",
      "Ibiza",
      "Skandal"
    ]
  },
  {
    "id": 106,
    "slug": "fpoe-neuwahlen-september-2019",
    "question": "Wann fanden die Neuwahlen nach dem Ibiza-Skandal statt?",
    "options": [
      {
        "letter": "A",
        "text": "29. September 2019"
      },
      {
        "letter": "B",
        "text": "15. Oktober 2019"
      },
      {
        "letter": "C",
        "text": "June 2019"
      },
      {
        "letter": "D",
        "text": "August 2019"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach Ibiza-Skandal und Regierungsbruch fanden Neuwahlen am 29. September 2019 statt - Kurz und ÖVP gewannen, führten zu Grün-ÖVP-Koalition.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Ibiza-Aff%C3%A4re"
      }
    ],
    "tags": [
      "FPÖ",
      "2019",
      "Neuwahlen",
      "Ibiza"
    ]
  },
  {
    "id": 107,
    "slug": "oevp-gruene-koalition-2020",
    "question": "Welche Koalition entstand nach den Wahlen 2019?",
    "options": [
      {
        "letter": "A",
        "text": "Grün-ÖVP-Koalition unter Kurz und Kogler"
      },
      {
        "letter": "B",
        "text": "ÖVP-SPÖ"
      },
      {
        "letter": "C",
        "text": "ÖVP-FPÖ"
      },
      {
        "letter": "D",
        "text": "ÖVP-NEOS"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2020: Grüne und ÖVP bildeten Koalition - ÖVP-Chef Kurz Kanzler, Grüne-Chef Kogler Vizekanzler. Koalition bis 2021 durch Korruptionsaffäre belastet.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2020",
      "Koalition",
      "Grüne"
    ]
  },
  {
    "id": 108,
    "slug": "oevp-wahlergebnis-september-2019",
    "question": "Wie schnitt die ÖVP bei der Wahl September 2019 ab?",
    "options": [
      {
        "letter": "A",
        "text": "Erste Platz mit 37,5%"
      },
      {
        "letter": "B",
        "text": "Zweite Platz"
      },
      {
        "letter": "C",
        "text": "Dritte Platz"
      },
      {
        "letter": "D",
        "text": "Vierte Platz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP (Kurz) gewann September 2019 Wahl mit 37,5% - erste Koalitionsgespräche mit Grünen, bildete 2020 Regierung.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Nationalratswahl_2019"
      }
    ],
    "tags": [
      "ÖVP",
      "2019",
      "Wahl",
      "Kurz"
    ]
  },
  {
    "id": 109,
    "slug": "oevp-sonntagsfrage-korruptionsaffaere-abstieg",
    "question": "Wie fiel die ÖVP-Zustimmung nach Korruptionsaffäre 2021?",
    "options": [
      {
        "letter": "A",
        "text": "Von Platz 1 (über 30%) auf unter 20% (Platz 3 hinter SPÖ und FPÖ)"
      },
      {
        "letter": "B",
        "text": "Stieg auf 40%"
      },
      {
        "letter": "C",
        "text": "Blieb stabil bei 35%"
      },
      {
        "letter": "D",
        "text": "Fiel auf 5%"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach Korruptionsaffäre 2021 fiel ÖVP-Zustimmung dramatisch - von Platz 1 (über 30%) auf unter 20% in Sonntagsfrage, Platz 3 hinter SPÖ und FPÖ.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Umfrage",
      "Skandal"
    ]
  },
  {
    "id": 110,
    "slug": "fpoe-rfs-gruppe-struktur",
    "question": "Was ist die RFS in der FPÖ-Struktur?",
    "options": [
      {
        "letter": "A",
        "text": "Ring freiheitlicher Studenten - FPÖ-nahe Studentenorganisation"
      },
      {
        "letter": "B",
        "text": "Rentner-Forscher-Sektion"
      },
      {
        "letter": "C",
        "text": "Recht-Freiheits-Sektion"
      },
      {
        "letter": "D",
        "text": "Radikale-Freiheits-Struktur"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "RFS (Ring freiheitlicher Studenten) ist FPÖ-nahe Studentenorganisation - mehrere Mitglieder strafrechtlich verwickelt (Mord, NS-Verbot, Falschaussage).",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "RFS",
      "Studentenorganisation",
      "Kriminalität"
    ]
  },
  {
    "id": 111,
    "slug": "fpoe-rfj-gruppe-struktur",
    "question": "Was ist die RFJ in der FPÖ-Struktur?",
    "options": [
      {
        "letter": "A",
        "text": "Ring freiheitlicher Jugend - FPÖ-Jugendorganisation"
      },
      {
        "letter": "B",
        "text": "Rentner-Freizeit-Jugend"
      },
      {
        "letter": "C",
        "text": "Radikale-Freiheits-Jugend"
      },
      {
        "letter": "D",
        "text": "Recht-Freiheits-Jugend"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "RFJ (Ring freiheitlicher Jugend) ist FPÖ-Jugendorganisation - mehrere Mitglieder verurteilt (Verhetzung, Körperverletzung, NS-Verbot, Falschaussage).",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "RFJ",
      "Jugendorganisation",
      "Kriminalität"
    ]
  },
  {
    "id": 112,
    "slug": "fpoe-bzoе-landespartei-struktur",
    "question": "Was war das BZÖ in der österreichischen Politik?",
    "options": [
      {
        "letter": "A",
        "text": "Bündnis Zukunft Österreich - abgespaltene FPÖ-Partei (2005-2020s)"
      },
      {
        "letter": "B",
        "text": "Bürgerzusammenschluss Österreich"
      },
      {
        "letter": "C",
        "text": "Beamter-Zunft Österreich"
      },
      {
        "letter": "D",
        "text": "Bayerisches-Zoll-Österreich"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "BZÖ (Bündnis Zukunft Österreich) 2005 gegründet von Jörg Haider als Abspaltung der FPÖ - mehrere Skandale und Korruptionsfälle, später mit FPÖ vereint.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/B%C3%BCndnis_Zukunft_%C3%96sterreich"
      }
    ],
    "tags": [
      "BZÖ",
      "FPÖ",
      "Partei",
      "Haider"
    ]
  },
  {
    "id": 113,
    "slug": "fpoe-haider-tod-2008",
    "question": "Wann und wie starb FPÖ-Politiker Jörg Haider?",
    "options": [
      {
        "letter": "A",
        "text": "11. Oktober 2008 bei Auto-Unfall unter umstrittenen Umständen"
      },
      {
        "letter": "B",
        "text": "Natürlicher Tod"
      },
      {
        "letter": "C",
        "text": "Herzinfarkt"
      },
      {
        "letter": "D",
        "text": "Flugzeugabsturz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Jörg Haider, FPÖ-Chef und Landeshauptmann Kärnten, starb 11. Oktober 2008 bei Auto-Unfall - Umstände bis heute Gegenstand von Spekulationen und Verschwörungstheorien.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/J%C3%B6rg_Haider"
      }
    ],
    "tags": [
      "FPÖ",
      "2008",
      "Haider",
      "Tod"
    ]
  },
  {
    "id": 114,
    "slug": "oevp-tripartite-kurz-geraeusche",
    "question": "Was waren die \"tripartite\" Geräusche um Kurz 2020?",
    "options": [
      {
        "letter": "A",
        "text": "Chats zwischen Kurz, Schmid und Blümel zeigen Absprachen und Korruption"
      },
      {
        "letter": "B",
        "text": "Musikclips"
      },
      {
        "letter": "C",
        "text": "Podcast-Serie"
      },
      {
        "letter": "D",
        "text": "Filmproduktion"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Chats zwischen Kurz, Thomas Schmid und anderen zeigen detaillierte Absprachen zu Umfragen-Manipulation, Postenbesetzung und Korruption - zentral für WKStA-Vorwürfe.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Chats",
      "Korruption"
    ]
  },
  {
    "id": 115,
    "slug": "fpoe-ibiza-oligarchen-russland",
    "question": "Welche Rolle spielte Russland im Ibiza-Video?",
    "options": [
      {
        "letter": "A",
        "text": "Strache bot russischen Oligarchen-Freunden staatliche Aufträge für Wahlkampfhilfe"
      },
      {
        "letter": "B",
        "text": "Kulturelle Zusammenarbeit"
      },
      {
        "letter": "C",
        "text": "Wissenschaftlicher Austausch"
      },
      {
        "letter": "D",
        "text": "Sportveranstaltungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ibiza-Video zeigt Strache, der einem vermeintlichen russischen Oligarchen-Neffen staatliche Aufträge gegen Wahlkampfunterstützung anbot - Verkauf von Einfluss.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2019",
      "Ibiza",
      "Russland"
    ]
  },
  {
    "id": 116,
    "slug": "fpoe-charismatische-fuehrung-haider-strache",
    "question": "Welche Gemeinsamkeiten hatten Haider und Strache?",
    "options": [
      {
        "letter": "A",
        "text": "Beide charismatische FPÖ-Chefs mit Skandalen und Luxus-Lebensstil"
      },
      {
        "letter": "B",
        "text": "Beide ÖVP-Mitglieder"
      },
      {
        "letter": "C",
        "text": "Beide SPÖ-Sympathisanten"
      },
      {
        "letter": "D",
        "text": "Beide Grüne-Wähler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Haider (†2008) und Strache: Beide charismatische FPÖ-Vorsitzende mit Skandalen (Haider: Hypo-Krise; Strache: Ibiza, Luxus), großes Gefolgschaft-Verhalten.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Haider",
      "Strache",
      "Charisma"
    ]
  },
  {
    "id": 117,
    "slug": "oevp-inseratenaffaere-mediengruppe-oesterreich",
    "question": "Welche Rolle spielte die Mediengruppe Österreich in der ÖVP-Affäre?",
    "options": [
      {
        "letter": "A",
        "text": "Veröffentlichte gefälschte Umfragen gegen Inseratenbezahlung vom Finanzministerium"
      },
      {
        "letter": "B",
        "text": "Unabhängige Berichterstattung"
      },
      {
        "letter": "C",
        "text": "Kritische Investigationen"
      },
      {
        "letter": "D",
        "text": "Regierungskritik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Mediengruppe Österreich (Fellner): Veröffentlichte gefälschte ÖVP-freundliche Umfragen, erhielt Millionen Euro Inseratebezahlung vom Finanzministerium (1,1 Mio Euro) als Gegenleistung.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Medienkorruption",
      "Inseraten"
    ]
  },
  {
    "id": 118,
    "slug": "oevp-scheinrechnungen-umfragen",
    "question": "Wie funktionierten die Scheinrechnungen bei den Umfragen?",
    "options": [
      {
        "letter": "A",
        "text": "Finanzministerium zahlte über Scheinrechnungen für Umfragen an ÖVP-Sympathisanten"
      },
      {
        "letter": "B",
        "text": "Echte Beratungsverträge"
      },
      {
        "letter": "C",
        "text": "Legitime Marktforschung"
      },
      {
        "letter": "D",
        "text": "Regierungsauftrag"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Netzwerk: Finanzministerium zahlte über getarnte Scheinrechnungen (500.000 Euro) an Meinungsforscherin Sabine Beinschab für manipulierte Studien, die in Österreich veröffentlicht wurden.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Betrug",
      "Scheinrechnungen"
    ]
  },
  {
    "id": 119,
    "slug": "oevp-beinschab-meinungsforscherin",
    "question": "Welche Rolle spielte Meinungsforscherin Sabine Beinschab?",
    "options": [
      {
        "letter": "A",
        "text": "Führte gefälschte Umfragen für ÖVP durch, später Kronzeugin"
      },
      {
        "letter": "B",
        "text": "Unabhängige Forscherin"
      },
      {
        "letter": "C",
        "text": "SPÖ-Beraterin"
      },
      {
        "letter": "D",
        "text": "Grüne-Forscherin"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Sabine Beinschab: Meinungsforscherin, führte manipulierte Umfragen für ÖVP-Netzwerk durch, erhielt Millionen Euro. November 2024: Kronzeugin - belastet Kurz und andere schwer.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Meinungsforschung",
      "Kronzeugin"
    ]
  },
  {
    "id": 120,
    "slug": "fpoe-covid-demonstrationen-unterwanderung",
    "question": "Wie verhielt sich die FPÖ zu COVID-Demonstrationen?",
    "options": [
      {
        "letter": "A",
        "text": "Unterwanderte und politisierten COVID-Leugner-Demos"
      },
      {
        "letter": "B",
        "text": "Unterstützte öffentliche Gesundheitsmaßnahmen"
      },
      {
        "letter": "C",
        "text": "Förderte Impfkampagnen"
      },
      {
        "letter": "D",
        "text": "Arbeitete mit WHO zusammen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ: Nutzte und unterwanderte COVID-Leugner-Demonstrationen für politische Ziele, verbreitete Verschwörungstheorien statt wissenschaftliche Information.",
    "sourceLinks": [
      {
        "name": "Profil.at",
        "url": "https://www.profil.at/investigativ/kickls-stolperfalle-die-akte-fpoe/402747583"
      }
    ],
    "tags": [
      "FPÖ",
      "2020",
      "COVID",
      "Verschwörung"
    ]
  },
  {
    "id": 121,
    "slug": "oevp-fall-tojner-investor",
    "question": "Wer war Michael Tojner und seine Rolle in ÖVP-Skandalen?",
    "options": [
      {
        "letter": "A",
        "text": "Milliardär-Investor, dessen Hausdurchsuchung möglicherweise verraten wurde"
      },
      {
        "letter": "B",
        "text": "ÖVP-Minister"
      },
      {
        "letter": "C",
        "text": "Bankendirektor"
      },
      {
        "letter": "D",
        "text": "Justizbeamter"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Michael Tojner: Immobilienmilliardär, gegen dem WKStA wegen Betrug ermittelte. Verdacht: Justiz-Sektionschef Pilnacek verriet Hausdurchsuchung durch Tojner-Anwalt Brandstetter.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Justiz-Skandal",
      "Tojner"
    ]
  },
  {
    "id": 122,
    "slug": "oevp-brandstetter-justizminister",
    "question": "Welche Rolle spielte Ex-Justizminister Wolfgang Brandstetter?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-Minister, möglicherweise Hausdurchsuchung gegen Klient Tojner verraten"
      },
      {
        "letter": "B",
        "text": "ÖVP-Klubobmann"
      },
      {
        "letter": "C",
        "text": "Innenminister"
      },
      {
        "letter": "D",
        "text": "Außenminister"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Wolfgang Brandstetter (Ex-ÖVP-Justizminister): Verdacht Hausratsverrrat gegen seinen Klienten Millionär Tojner im Juni 2019, ermittelt 2021.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Justiz-Skandal",
      "Brandstetter"
    ]
  },
  {
    "id": 123,
    "slug": "fpoe-spesen-skandale-abrechnung",
    "question": "Wie missbräuchlich waren FPÖ-Spesenabrechnungen?",
    "options": [
      {
        "letter": "A",
        "text": "Luxuriöse Rechnungen für Wein, Bars, Restaurants ohne Belege (Graz 1,8 Mio)"
      },
      {
        "letter": "B",
        "text": "Normale Geschäftsausgaben"
      },
      {
        "letter": "C",
        "text": "Legitime Parteienfinanzierung"
      },
      {
        "letter": "D",
        "text": "Transparente Abrechnung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ Graz: 1,8 Millionen Euro Klubförderung 2021-2023 für edle Weine, Lokale, private Feiern, Bargeldabhebungen ohne Belege - System des Missbrauchs.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2021",
      "Spesen",
      "Veruntreue"
    ]
  },
  {
    "id": 124,
    "slug": "fpoe-hypo-kulterer-bankchef",
    "question": "Wer war der Hypo-Alpe-Adria Bankchef und seine Verantwortung?",
    "options": [
      {
        "letter": "A",
        "text": "Wolfgang Kulterer - hauptverantwortlich mit Haider für Milliarden-Debakel"
      },
      {
        "letter": "B",
        "text": "Außenminister"
      },
      {
        "letter": "C",
        "text": "Sozialministerium"
      },
      {
        "letter": "D",
        "text": "Umweltbeauftragter"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Wolfgang Kulterer (Ex-Hypo-Chef): Hauptverantwortlich mit Jörg Haider für riskante Geschäfte - Abwicklung kostete Steuerzahler Milliarden Euro.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2009",
      "Hypo",
      "Kulterer"
    ]
  },
  {
    "id": 125,
    "slug": "fpoe-meischberger-hochegger-buwog",
    "question": "Wer waren Meischberger und Hochegger in der BUWOG-Affäre?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ-nahe Lobbyisten, erhielten Millionen Provisionen bei Immobilienverkauf"
      },
      {
        "letter": "B",
        "text": "Bankenvertreter"
      },
      {
        "letter": "C",
        "text": "Anwälte"
      },
      {
        "letter": "D",
        "text": "Wirtschaftsprüfer"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Walter Meischberger und Peter Hochegger: FPÖ-nahe Lobbyisten, erhielten Millionen Euro Provisionen (2004 BUWOG-Immobilienverkauf). 2025: Meischberger 3,5 Jahre, Hochegger 3 Jahre Haft.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2004",
      "BUWOG",
      "Lobbyisten"
    ]
  },
  {
    "id": 126,
    "slug": "oevp-grasser-finanzminister-urteil-2025",
    "question": "Was war das Urteil gegen Karl-Heinz Grasser 2025?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtskräftig 4 Jahre Haft wegen Untreue und Bestechlichkeit"
      },
      {
        "letter": "B",
        "text": "Freispruch"
      },
      {
        "letter": "C",
        "text": "Bedingte Strafe"
      },
      {
        "letter": "D",
        "text": "Geldbuße"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Karl-Heinz Grasser (FPÖ-naher ÖVP-Finanzminister): 2020 zu 8 Jahren, 2025 rechtskräftig zu 4 Jahren Haft wegen BUWOG-Untreue und Bestechlichkeit verurteilt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2025",
      "BUWOG",
      "Urteil"
    ]
  },
  {
    "id": 127,
    "slug": "fpoe-haider-landeshauptmann-kaernten",
    "question": "In welchem Bundesland war Jörg Haider Landeshauptmann?",
    "options": [
      {
        "letter": "A",
        "text": "Kärnten"
      },
      {
        "letter": "B",
        "text": "Steiermark"
      },
      {
        "letter": "C",
        "text": "Oberösterreich"
      },
      {
        "letter": "D",
        "text": "Niederösterreich"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Jörg Haider: Landeshauptmann von Kärnten (FPÖ/BZÖ) - kontrollierte Land und Hypo-Bank, verursachte Milliarden-Schaden durch riskante Politik.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Kärnten",
      "Haider",
      "Hypo"
    ]
  },
  {
    "id": 128,
    "slug": "oevp-kickl-ministerium-ermittlung",
    "question": "Worüber wird Herbert Kickl als ehemaliger Innenminister ermittelt?",
    "options": [
      {
        "letter": "A",
        "text": "Untreue wegen illegaler Medienwerbung und Falschaussage im U-Ausschuss"
      },
      {
        "letter": "B",
        "text": "Verkehrsverstöße"
      },
      {
        "letter": "C",
        "text": "Privatausgaben"
      },
      {
        "letter": "D",
        "text": "Wahlkampf-Regeln"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Herbert Kickl (FPÖ-Chef, Ex-Innenminister 2017-2019): WKStA ermittelt wegen Verdacht Untreue (Medienwerbung aus Staatsmitteln) und Falschaussage. Dezember 2024: Immunität aufgehoben.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "Medienwerbung",
      "Kickl"
    ]
  },
  {
    "id": 129,
    "slug": "fpoe-kickl-immunitet-dezember-2024",
    "question": "Was beschloss das Parlament zu Herbert Kickl im Dezember 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Aufhebung der parlamentarischen Immunität wegen Falschaussage-Verdacht"
      },
      {
        "letter": "B",
        "text": "Wiederwahl zum Klubobmann"
      },
      {
        "letter": "C",
        "text": "Ernennung zum Minister"
      },
      {
        "letter": "D",
        "text": "Ehrenmitgliedschaft"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Dezember 2024: Österreichisches Parlament hob parlamentarische Immunität Herbert Kickls auf - ermöglicht Ermittlungen wegen Falschaussage in U-Ausschuss zu Innenministerium-Vorgängen.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2024",
      "Immunität",
      "Kickl"
    ]
  },
  {
    "id": 130,
    "slug": "fpoe-nepp-strache-nachfolger",
    "question": "Wer ist Dominik Nepp und seine Rolle in FPÖ-Skandalen?",
    "options": [
      {
        "letter": "A",
        "text": "Wiener FPÖ-Funktionär, Spitzenkandidat 2025, auch in Strache-Spesenskandal verwickelt"
      },
      {
        "letter": "B",
        "text": "ÖVP-Politiker"
      },
      {
        "letter": "C",
        "text": "SPÖ-Funktionär"
      },
      {
        "letter": "D",
        "text": "Grüne-Aktivist"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Dominik Nepp: Wiener FPÖ-Chef, Spitzenkandidat Landtagswahl 2025 - auch als Beschuldiger in Strache-Luxus-Skandal (Parteigelder-Missbrauch) genannt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2025",
      "Skandal",
      "Nepp"
    ]
  },
  {
    "id": 131,
    "slug": "fpoe-parteifinanzierung-bundesebene",
    "question": "Wie wird die FPÖ-Parteienfinanzierung auf Bundesebene evaluiert?",
    "options": [
      {
        "letter": "A",
        "text": "Wiederholte Skandale mit Telekom, BZÖ, Champagner-Affäre zeigen Muster"
      },
      {
        "letter": "B",
        "text": "Besonders transparent"
      },
      {
        "letter": "C",
        "text": "Vollständige Compliance"
      },
      {
        "letter": "D",
        "text": "International anerkannt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Parteienfinanzierung: Wiederholte Skandale (Telekom 600.000-960.000 Euro, Champagner 544.400 Euro, Spesen) zeigen Muster von Regelbruch und Korruption.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Parteienfinanzierung",
      "Skandale",
      "Korruption"
    ]
  },
  {
    "id": 132,
    "slug": "oevp-schmid-kronzeuge-november-2024",
    "question": "Wann wurde Thomas Schmid Kronzeuge?",
    "options": [
      {
        "letter": "A",
        "text": "November 2024 nach ausführlichem Geständnis"
      },
      {
        "letter": "B",
        "text": "Oktober 2021"
      },
      {
        "letter": "C",
        "text": "Mai 2022"
      },
      {
        "letter": "D",
        "text": "Dezember 2023"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Thomas Schmid: November 2024 Kronzeuge (neben Beinschab) - Geständnis 2022 mit Belastungen gegen Kurz und andere. Kronzeuge-Status ermöglicht Aussagen mit geringerer Strafe.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2024",
      "Kronzeuge",
      "Schmid"
    ]
  },
  {
    "id": 133,
    "slug": "fpoe-waffenhandel-linz-gemeinderat",
    "question": "Was war das Waffenhandels-Vergehen eines FPÖ-Gemeinderats?",
    "options": [
      {
        "letter": "A",
        "text": "Ex-FPÖ-Gemeinderat Linz (nicht rechtskräftig) wegen illegalen Waffenhandels verurteilt"
      },
      {
        "letter": "B",
        "text": "Lizenz-Verletzung"
      },
      {
        "letter": "C",
        "text": "Zoll-Betrug"
      },
      {
        "letter": "D",
        "text": "Import-Fehler"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ex-FPÖ-Gemeinderat Linz: Nicht rechtskräftig verurteilt 2013 wegen illegalen Waffenhandels und versuchter Nötigung - schwere kriminelle Aktivität.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "2013",
      "Waffenhandel",
      "Kriminalität"
    ]
  },
  {
    "id": 134,
    "slug": "oevp-inserate-fellner-mediengruppe",
    "question": "Wer ist Walter Fellner und seine Rolle in der Inseraten-Affäre?",
    "options": [
      {
        "letter": "A",
        "text": "Verleger Mediengruppe Österreich, veröffentlichte manipulierte Umfragen gegen Inserate-Zahlung"
      },
      {
        "letter": "B",
        "text": "ÖVP-Politiker"
      },
      {
        "letter": "C",
        "text": "SPÖ-Redakteur"
      },
      {
        "letter": "D",
        "text": "Grüne-Aktivist"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Walter Fellner: Verleger Mediengruppe Österreich - Zeitung veröffentlichte manipulierte ÖVP-freundliche Umfragen, erhielt Millionen Euro Inseratenzahlungen vom Finanzministerium.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Medienkorruption",
      "Fellner"
    ]
  },
  {
    "id": 135,
    "slug": "oevp-postenbesetzung-regierung",
    "question": "Wie funktionierte die politische Postenbesetzung unter Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Partei-Loyalität statt Qualifikation - Wolf (Finanzamt), Sidlo (Casinos), Schmid (ÖBAG)"
      },
      {
        "letter": "B",
        "text": "Meritokratische Auswahl"
      },
      {
        "letter": "C",
        "text": "Unabhängige Kommissionen"
      },
      {
        "letter": "D",
        "text": "Transparente Ausschreibung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP unter Kurz: Postenbesetzung basierte auf Partei-Loyalität und Gefälligkeiten - Wolf (Finanzamts-Topposten für Steuernachlass), Sidlo (Casinos gegen Spenden), Schmid (ÖBAG-Chef).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Postenbesetzung",
      "Korruption"
    ]
  },
  {
    "id": 136,
    "slug": "fpoe-antidemokratische-tendenzen-index",
    "question": "Wie wird die antidemokratische Haltung der FPÖ dokumentiert?",
    "options": [
      {
        "letter": "A",
        "text": "Über 100 Fälle von Rechtsextremismus und Antidemokratischem dokumentiert"
      },
      {
        "letter": "B",
        "text": "Keine dokumentierten Fälle"
      },
      {
        "letter": "C",
        "text": "Nur 5-10 Einzelfälle"
      },
      {
        "letter": "D",
        "text": "Längst rehabilitiert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "SPÖ und Medien dokumentieren über 100 Fälle von FPÖ-Rechtsextremismus: NS-Wiederbetätigung, Verhetzung, Gewalt, Machtmissbrauch zeigen System, nicht \"Einzelfälle\".",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Rechtsextremismus",
      "Antidemokratie",
      "Systemisch"
    ]
  },
  {
    "id": 137,
    "slug": "fpoe-ns-verbot-oesterreich-wiederbetaetigung",
    "question": "Was ist das österreichische Verbotsgesetz gegen NS-Betätigung?",
    "options": [
      {
        "letter": "A",
        "text": "Strafgesetz gegen NS-Verherrlichung, Wiederbetätigung, Holocaust-Leugnung"
      },
      {
        "letter": "B",
        "text": "Wahlkampf-Regeln"
      },
      {
        "letter": "C",
        "text": "Parteifinanzierung"
      },
      {
        "letter": "D",
        "text": "Datenschutz-Gesetz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Österreichisches Verbotsgesetz: Strafgesetz gegen NS-Verherrlichung, Wiederbetätigung, Holocaust-Leugnung (strafbar). FPÖ-Funktionäre wiederholt verurteilt (z.B. 4-15 Jahre Haft).",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Verbotsgesetz"
      }
    ],
    "tags": [
      "Verbotsgesetz",
      "NS-Verbot",
      "Strafrecht",
      "Österreich"
    ]
  },
  {
    "id": 138,
    "slug": "oevp-unterordnung-kurz-netzwerk",
    "question": "Wie war das ÖVP-Korruptionsnetzwerk strukturiert?",
    "options": [
      {
        "letter": "A",
        "text": "Zentrale Kontrolle durch Kurz - alle unterordnet seinen Interessen und Karriereziel"
      },
      {
        "letter": "B",
        "text": "Dezentralisiert und unabhängig"
      },
      {
        "letter": "C",
        "text": "Von außen gesteuert"
      },
      {
        "letter": "D",
        "text": "Zufällige Einzelfälle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "WKStA: \"Sebastian Kurz ist zentrale Person... Alle an Planung/Umsetzung beteiligten müssen sich unterordnen... übergeordnetes Ziel - ihn zum Kanzler führen.\" - strukturierte kriminelle Organisierung.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Korruptionsnetzwerk",
      "Kurz"
    ]
  },
  {
    "id": 139,
    "slug": "fpoe-rechtstaat-missbrauch-bvt-kleindienst",
    "question": "Wie missbrauchte die FPÖ Behörden gegen Gegner?",
    "options": [
      {
        "letter": "A",
        "text": "BVT-Razzia gegen Verfassungsschutz (Kickl), Polizei-Datenmissbrauch (Kleindienst)"
      },
      {
        "letter": "B",
        "text": "Normale Überwachung"
      },
      {
        "letter": "C",
        "text": "Legitime Sicherheitsmaßnahmen"
      },
      {
        "letter": "D",
        "text": "Transparente Kontrolle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ: 2018 BVT-Razzia (Kickl) gegen Verfassungsschutz zum Schaden; 2000 Polizei-Datenmissbrauch (Kleindienst) gegen Gegner - Missbrauch rechtsstaatlicher Institutionen.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Machtmissbrauch",
      "Behörden",
      "Antidemokratie"
    ]
  },
  {
    "id": 140,
    "slug": "oevp-wksta-angriff-justiz-2021",
    "question": "Wie reagierte Kurz auf WKStA-Ermittlungen gegen ihn?",
    "options": [
      {
        "letter": "A",
        "text": "Attackierte WKStA-Behörde, unterstellte \"Verfehlungen\" und politische Motive"
      },
      {
        "letter": "B",
        "text": "Akzeptierte transparent"
      },
      {
        "letter": "C",
        "text": "Kooperierte vollständig"
      },
      {
        "letter": "D",
        "text": "Schweigen bewahrt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz Februar 2021: Bei Ermittlungen gegen Finanzminister Blümel attackierte er WKStA öffentlich, unterstellte \"Verfehlungen\" und \"Änderungsbedarf\". Justiz kritisierte Angriff auf Unabhängigkeit.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/oevp-skandale-sebastian-kurz/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "WKStA",
      "Kurz-Angriff"
    ]
  },
  {
    "id": 141,
    "slug": "fpoe-parteiexklusivitaet-einzelfaelle-behauptung",
    "question": "Wie reagierte die FPÖ auf Skandal-Vorwürfe?",
    "options": [
      {
        "letter": "A",
        "text": "Behauptete \"Einzelfälle\" statt systematisches Problem zu erkennen"
      },
      {
        "letter": "B",
        "text": "Volle Aufklärung"
      },
      {
        "letter": "C",
        "text": "Interne Kontrollen"
      },
      {
        "letter": "D",
        "text": "Transparente Reform"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Standardverteidigung: \"Einzelfälle, keine systemischen Probleme\" - aber über 100 dokumentierte kriminelle Fälle zeigen Muster von Korruption, Gewalt, NS-Verbot und Machtmissbrauch.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Skandale",
      "Verharmlosung",
      "Systemisch"
    ]
  },
  {
    "id": 142,
    "slug": "oevp-casinos-affaere-sidlo-skandal",
    "question": "Was war die Casinos-Affäre um FPÖ-Politiker Peter Sidlo?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ-Sidlo zum Casag-Finanzvorstand gegen Spenden, Glatz-Kremsner aufrücken"
      },
      {
        "letter": "B",
        "text": "Glücksspiel-Reform"
      },
      {
        "letter": "C",
        "text": "Casino-Neubau"
      },
      {
        "letter": "D",
        "text": "Lizenz-Erneuerung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Casinos-Affäre: FPÖ-Bezirksrat Peter Sidlo (später Casag-Finanzvorstand), ÖVP-Vizechefin Glatz-Kremsner (später Generaldirektorin mit 1,6 Mio Abfertigung) - Spenden-Korruption.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "FPÖ",
      "2020",
      "Casinos-Skandal"
    ]
  },
  {
    "id": 143,
    "slug": "fpoe-champagner-enf-fraktion-bruessle",
    "question": "Was war die Champagner-Affäre der FPÖ-Fraktion in Brüssel?",
    "options": [
      {
        "letter": "A",
        "text": "ENF-Fraktion (FPÖ) gab 427.000+ Euro für Champagner, Essen aus Steuermitteln aus"
      },
      {
        "letter": "B",
        "text": "Offizielle Veranstaltung"
      },
      {
        "letter": "C",
        "text": "Private Ausgaben"
      },
      {
        "letter": "D",
        "text": "Diplomatische Tradition"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2018: FPÖ-EU-Abgeordneter Vilimsky, ENF-Fraktion (Europa der Nationen und Freiheit): 427.000+ Euro Champagner, Geschenke, teure Essen aus EU-Steuermitteln. Musste 544.400 zurückzahlen.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "EU-Skandal",
      "Champagner"
    ]
  },
  {
    "id": 144,
    "slug": "fpoe-regelwerk-verschaerft-alle-stimmen-fpoe-nein",
    "question": "Wie reagierte die FPÖ auf Verschärfung von Parteienfinanzierungs-Regeln?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ lehnte ab, alle anderen Parteien stimmten für Regelverschärfung"
      },
      {
        "letter": "B",
        "text": "FPÖ führte Reform durch"
      },
      {
        "letter": "C",
        "text": "Gemeinsame Reforminitiative"
      },
      {
        "letter": "D",
        "text": "Freiwillige Einhaltung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach Champagner-Skandal 2018: Alle österreichischen Abgeordneten (ÖVP, SPÖ, Grüne, NEOS) stimmten für Regelverschärfung zur Parteienfinanzierung - AUSSER FPÖ-Abgeordnete.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "Regelwerk",
      "Widerstand"
    ]
  },
  {
    "id": 145,
    "slug": "oevp-geldwaesche-verdacht-signa-benko",
    "question": "Wofür wird René Benko (Signa) wegen Geldwäsche verdächtigt?",
    "options": [
      {
        "letter": "A",
        "text": "Vermögens-Verschiebung, Steuererleichterungen durch Thomas Schmid und Schmid-Bestechung"
      },
      {
        "letter": "B",
        "text": "Normale Immobiliengeschäfte"
      },
      {
        "letter": "C",
        "text": "Legitime Steueroptimierung"
      },
      {
        "letter": "D",
        "text": "Beratungsservices"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "René Benko (Signa, insolvent 2025): Verdacht Geldwäsche, Bestechung Schmid (600.000 Euro Job-Angebot für Steuerhilfe). WKStA und Auslandsbehörden ermittelten. Oktober 2025 (nicht rechtskräftig) 2 Jahren Haft.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2025",
      "Geldwäsche",
      "Benko"
    ]
  },
  {
    "id": 146,
    "slug": "fpoe-entfernung-rechtsextrem-schuetzen",
    "question": "Wie sieht die Entfernung von Rechtsextremen aus der FPÖ aus?",
    "options": [
      {
        "letter": "A",
        "text": "Begrenzt - nur nach strafrechtlicher Verurteilung oder öffentlichem Skandal, nicht präventiv"
      },
      {
        "letter": "B",
        "text": "Strikte Kontrolle"
      },
      {
        "letter": "C",
        "text": "Automatische Ausschlüsse"
      },
      {
        "letter": "D",
        "text": "Zero-Tolerance-Politik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ: Entfernung von Rechtsextremisten wird erst nach strafrechtlicher Verurteilung oder massiver Skandal erwogen. Präventive Kontrollen fehlen, zeitnah mit 100+ dokumentierten Fällen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Rechtsextremismus",
      "Kontrolle",
      "Laxheit"
    ]
  },
  {
    "id": 147,
    "slug": "oevp-strafe-kurz-ermittlung-status",
    "question": "Was ist der aktuelle Status der Ermittlungen gegen Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Immer noch laufend, mehrere Vorwürfe (Untreue, Bestechlichkeit, Falschaussage)"
      },
      {
        "letter": "B",
        "text": "Abgeschlossen ohne Vorwürfe"
      },
      {
        "letter": "C",
        "text": "Vollständige Enthebung"
      },
      {
        "letter": "D",
        "text": "Gerichtsverfahren abgelehnt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Sebastian Kurz (ÖVP): Immer noch Beschuldigter - Verdacht Untreue, Bestechlichkeit, Falschaussage. Kronzeugen (Schmid, Beinschab) November 2024 belasten ihn schwer. Untersuchungsausschuss bis Oktober 2024.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2024",
      "Kurz",
      "Ermittlung"
    ]
  },
  {
    "id": 148,
    "slug": "fpoe-bvt-razzia-illegal-urteil",
    "question": "Was war das Urteil zur BVT-Razzia 2018?",
    "options": [
      {
        "letter": "A",
        "text": "Gericht erklärte Razzia für rechtswidrig"
      },
      {
        "letter": "B",
        "text": "Razzia wurde bestätigt"
      },
      {
        "letter": "C",
        "text": "Amtshaftung anerkannt"
      },
      {
        "letter": "D",
        "text": "Schadensersatz geleistet"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "BVT-Razzia 2018 (Kickl): Gericht erklärte die Durchsuchung später für rechtswidrig - Missbrauch der Amtsposition zur politischen Einflussnahme.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "BVT",
      "Illegal"
    ]
  },
  {
    "id": 149,
    "slug": "oevp-demokratische-kontrolle-maengel",
    "question": "Welche Mängel in demokratischer Kontrolle zeigten ÖVP-Skandale?",
    "options": [
      {
        "letter": "A",
        "text": "Unzureichende interne Kontrollen, Justiz-Infiltration (Pilnacek), Oppositionsschwäche"
      },
      {
        "letter": "B",
        "text": "Vollständige Transparenz"
      },
      {
        "letter": "C",
        "text": "Starke Kontrollmechanismen"
      },
      {
        "letter": "D",
        "text": "Perfekte Überwachung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Skandale zeigen: Unzureichende Parteien-Kontrollen, Justiz-Infiltrierung (Sektionschef Pilnacek verrat Hausdurchsuchungen), schwache Oppositionskontrolle vor 2021.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "Kontrolle",
      "Demokratie",
      "Transparenz"
    ]
  },
  {
    "id": 150,
    "slug": "fpoe-rechtsstaatlichkeit-gefaehrdung",
    "question": "Wie gefährdet die FPÖ die Rechtsstaatlichkeit?",
    "options": [
      {
        "letter": "A",
        "text": "Missbrauch von Behörden (BVT, Polizei), Angriffe auf Justiz, Verachtung für Rechtsstaat"
      },
      {
        "letter": "B",
        "text": "Starke Rechtsstaats-Unterstützung"
      },
      {
        "letter": "C",
        "text": "Verfassungstreue"
      },
      {
        "letter": "D",
        "text": "Justiz-Reform"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ gefährdet Rechtsstaatlichkeit: BVT-Razzia gegen Verfassungsschutz (Kickl), Polizei-Datenmissbrauch (Kleindienst), Angriffe auf unabhängige Institutionen - Machtmissbrauch.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Rechtsstaatlichkeit",
      "Machtmissbrauch",
      "Antidemokratie"
    ]
  },
  {
    "id": 151,
    "slug": "fpoe-justizattacke-grundrechte-2021",
    "question": "Wie attackierte die FPÖ 2021 die Justiz?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Angriffe auf Unabhängigkeit und \"Einzelfall\"-Behauptungen"
      },
      {
        "letter": "B",
        "text": "Konstruktive Kritik"
      },
      {
        "letter": "C",
        "text": "Unterstützung von Reformen"
      },
      {
        "letter": "D",
        "text": "Kooperation mit Behörden"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ: Attakierte WKStA und Justiz als \"politisch motiviert\", unterstellte \"Verfehlungen\" - ähnlich wie ÖVP-Kurz Taktik zur Einschüchterung.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Justiz",
      "Angriff",
      "Antidemokratie"
    ]
  },
  {
    "id": 152,
    "slug": "oevp-transparenz-defizit-regierung",
    "question": "Wie offenbarte sich Mangel an Transparenz in ÖVP-Regierung?",
    "options": [
      {
        "letter": "A",
        "text": "Chats wurden gelöscht, Informationen verschleiert, späte Aufdeckung"
      },
      {
        "letter": "B",
        "text": "Offene Dokumentation"
      },
      {
        "letter": "C",
        "text": "Frühzeitige Aufklärung"
      },
      {
        "letter": "D",
        "text": "Medienkooperation"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Kurz: Chat-Nachrichten später aufgedeckt (Oktober 2021), Scheinrechnungen versteckt, Informationen bewusst zurückgehalten - Kultur des Vertuschung.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Transparenz",
      "Vertuschung"
    ]
  },
  {
    "id": 153,
    "slug": "fpoe-manipulation-waehler-covid",
    "question": "Wie manipulierte die FPÖ Wähler zur COVID-Krise?",
    "options": [
      {
        "letter": "A",
        "text": "Verbreitete Verschwörungstheorien statt wissenschaftliche Information"
      },
      {
        "letter": "B",
        "text": "Unterstützte Maßnahmen"
      },
      {
        "letter": "C",
        "text": "Folgte Experten"
      },
      {
        "letter": "D",
        "text": "Förderte Impfungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ COVID-Strategie: Verbreitete Verschwörungstheorien, Impfgegnerschaft, Corona-Leugnung - Manipulation gegen Wähler-Interessen (Gesundheit, Wirtschaft).",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs"
      }
    ],
    "tags": [
      "FPÖ",
      "2020",
      "COVID",
      "Manipulation"
    ]
  },
  {
    "id": 154,
    "slug": "oevp-abhaengigkeit-millionaere-steuernachlass",
    "question": "Wie wurden Millionäre von ÖVP-Regierung bevorzugt?",
    "options": [
      {
        "letter": "A",
        "text": "Wolf (11 Mio Steuernachlass), Benko (Privatjet-Steuern), Tojner (Betrug verschleiert)"
      },
      {
        "letter": "B",
        "text": "Gleiche Behandlung für alle"
      },
      {
        "letter": "C",
        "text": "Progressive Besteuerung"
      },
      {
        "letter": "D",
        "text": "Transparente Prozesse"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Kurz-Regierung: Bevorzugte Millionäre mit Steuernachlässen (Wolf 3,4 Mio Euro), Spitzenpositionen (Benko Job-Angebot), Vertuschung (Tojner-Hausdurchsuchung) - Klassenherrschaft.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Klassenherrschaft",
      "Steuern"
    ]
  },
  {
    "id": 155,
    "slug": "fpoe-kulturelle-identitaet-rechtsextremismus",
    "question": "Wie verbindet die FPÖ \"kulturelle Identität\" mit Rechtsextremismus?",
    "options": [
      {
        "letter": "A",
        "text": "Vermischung von kulturellem Nationalismus mit NS-Symbolik und Verhetzung"
      },
      {
        "letter": "B",
        "text": "Liberale Kulturpolitik"
      },
      {
        "letter": "C",
        "text": "Tolerante Kulturförderung"
      },
      {
        "letter": "D",
        "text": "Diversity-Agenda"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ: Verbindet Kulturnatioanlismus mit Rechtsextremismus - NS-Wiederbetätigung, Verhetzung gegen Religionsgruppen, \"geisteskranke Islam-Ideologien\" = Manipulation von Kulturidentität.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Kulturalismus",
      "Rechtsextremismus",
      "Manipulation"
    ]
  },
  {
    "id": 156,
    "slug": "oevp-koalition-gruen-spannungen-2018-2021",
    "question": "Welche Spannungen entstanden in Grün-ÖVP-Koalition?",
    "options": [
      {
        "letter": "A",
        "text": "Grüne widersprachen Korruption-Toleranz, forderten Reformen und Kontrolle"
      },
      {
        "letter": "B",
        "text": "Harmonische Zusammenarbeit"
      },
      {
        "letter": "C",
        "text": "Volle Einigkeit"
      },
      {
        "letter": "D",
        "text": "Kooperative Regierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Grün-ÖVP (2020-2021): Grüne forderten von Kurz \"untadelige Person\" (Oktober 2021), drohten mit Koalitionsausstieg - Spannungen über Korruptions-Toleranz.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "Grüne",
      "2021",
      "Koalition"
    ]
  },
  {
    "id": 157,
    "slug": "fpoe-extremismusindex-dokumentation",
    "question": "Wie dokumentieren Behörden FPÖ-Extremismus?",
    "options": [
      {
        "letter": "A",
        "text": "Über 100 Fälle von Extremismus und Kriminalität in öffentlichen Listen"
      },
      {
        "letter": "B",
        "text": "Keine Dokumentation"
      },
      {
        "letter": "C",
        "text": "Private Aufzeichnungen"
      },
      {
        "letter": "D",
        "text": "Geheim haltend"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Öffentlich dokumentiert: 100+ Fälle FPÖ-Extremismus auf SPÖ-Website und Medienberichten - NS-Verbot, Verhetzung, Gewalt, Korruption, Kriminalität als systematisches Phänomen.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Dokumentation",
      "Extremismus",
      "Öffentlich"
    ]
  },
  {
    "id": 158,
    "slug": "oevp-bestechungsketten-analyse",
    "question": "Wie funktionierte die ÖVP-Bestechungskette?",
    "options": [
      {
        "letter": "A",
        "text": "Spenden → Steuervorteil/Posten → positive Medienberichterstattung → Kurz-Aufstieg"
      },
      {
        "letter": "B",
        "text": "Normale Geschäftstransaktionen"
      },
      {
        "letter": "C",
        "text": "Legitime Finanzierung"
      },
      {
        "letter": "D",
        "text": "Transparente Prozesse"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Bestechungskette: Novomatic-Spende → Sidlo-Casag-Posten / Steuernachlässe → Inseratenzahlungen → positive \"Umfragen\" in Österreich → Kurz-Karriere - systematische Korruption.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Bestechung",
      "Systemisch"
    ]
  },
  {
    "id": 159,
    "slug": "fpoe-waehlerversprechungen-bruch-covid",
    "question": "Wie brach die FPÖ ihre Wählerversprechungen bei COVID?",
    "options": [
      {
        "letter": "A",
        "text": "Versprach Gesundheit, verbreitete stattdessen Verschwörungstheorien"
      },
      {
        "letter": "B",
        "text": "Hielt Versprechen ein"
      },
      {
        "letter": "C",
        "text": "Folgte wissenschaftlicher Beratung"
      },
      {
        "letter": "D",
        "text": "Unterstützte Maßnahmen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ COVID: Wählerversprechung Gesundheitsschutz → Realität: Verschwörungstheorien, Impfgegnerschaft, Corona-Leugnung → Wählerbetrug gegen Wählerinteressen.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs"
      }
    ],
    "tags": [
      "FPÖ",
      "2020",
      "Wahlbetrug",
      "COVID"
    ]
  },
  {
    "id": 160,
    "slug": "oevp-juengste-skandale-dezember-2024",
    "question": "Welche aktuellen Skandale betreffen die ÖVP Dezember 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Kickl-Immunität aufgehoben, Benko-Verurteilung, andauernde Ermittlungen"
      },
      {
        "letter": "B",
        "text": "Keine neuen Skandale"
      },
      {
        "letter": "C",
        "text": "Vollständige Aufklärung"
      },
      {
        "letter": "D",
        "text": "Neubeginn ohne Vorwürfe"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Dezember 2024: Kickl-Immunität aufgehoben (Falschaussage), Benko zu 2 Jahren Haft verurteilt (Oktober 2025, nicht rechtskräftig), ÖVP-Ermittlungen andauern.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "ÖVP",
      "2024",
      "Skandale"
    ]
  },
  {
    "id": 161,
    "slug": "fpoe-gewalt-infrastruktur-schulung",
    "question": "Wie strukturierte die FPÖ Gewalt-Infrastruktur?",
    "options": [
      {
        "letter": "A",
        "text": "Über RFJ/RFS Jugendorganisationen mit Schulung in Ideologie und Aktionismus"
      },
      {
        "letter": "B",
        "text": "Keine Struktur"
      },
      {
        "letter": "C",
        "text": "Friedliche Organisationen"
      },
      {
        "letter": "D",
        "text": "Transparente Prozesse"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "RFJ (Ring freiheitlicher Jugend) und RFS (Ring freiheitlicher Studenten): FPÖ-nahe Organisationen mit vielen verurteilten Gewalttätern (Körperverletzung, Mord) - Gewalt-Pipeline.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "RFJ",
      "Gewalt",
      "Jugend"
    ]
  },
  {
    "id": 162,
    "slug": "oevp-waehler-betrug-manipulation-umfrage",
    "question": "Wie betrog die ÖVP ihre Wähler durch manipulierte Umfragen?",
    "options": [
      {
        "letter": "A",
        "text": "Gefälschte positive Umfragen sollten Wählerstimmung manipulieren für Kurz"
      },
      {
        "letter": "B",
        "text": "Echte Marktforschung"
      },
      {
        "letter": "C",
        "text": "Legitime Befragungen"
      },
      {
        "letter": "D",
        "text": "Transparente Datenerhebung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Wählerbetrug: Gefälschte Umfragen (Beinschab) manipulierten Wählerwahrnehmung - falsche Sicherheit für Kurz-Aufstieg, Millionen Steuergelder für Desinformation.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Wählerbetrug",
      "Manipulation"
    ]
  },
  {
    "id": 163,
    "slug": "fpoe-migrationsangst-schuer-waehler",
    "question": "Wie schürt die FPÖ Migrationsangst unter Wählern?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Verhetzung, Vereinfachung und rassistische Narrative gegen Asylanten"
      },
      {
        "letter": "B",
        "text": "Sachliche Analyse"
      },
      {
        "letter": "C",
        "text": "Humanitäre Argumente"
      },
      {
        "letter": "D",
        "text": "Integrations-Förderung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Strategie: Schürt Migrationsangst durch rassistische Narrative (\"Islam-Ideologien\", \"Invasion\") statt sachlicher Debatte - nutzt Ängste für politischen Gewinn.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Migration",
      "Verhetzung",
      "Rassismus"
    ]
  },
  {
    "id": 164,
    "slug": "oevp-elite-abschottung-struktur",
    "question": "Wie schottete sich die ÖVP-Elite ab?",
    "options": [
      {
        "letter": "A",
        "text": "Geschlossenes Netzwerk (Kurz-Vertraute), Kontrolle über Medien/Justiz, Widerstand gegen Außenseiter"
      },
      {
        "letter": "B",
        "text": "Offene Struktur"
      },
      {
        "letter": "C",
        "text": "Demokratische Partizipation"
      },
      {
        "letter": "D",
        "text": "Transparente Entscheidungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Kurz: Geschlossenes Netzwerk um Kurz, Kontrolle über Mediennarrative (Inseraten), Justiz-Infiltration (Pilnacek) - Abschottung gegenüber Kontrolle und Kritik.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Elite",
      "Abschottung"
    ]
  },
  {
    "id": 165,
    "slug": "fpoe-gewaltbereitschaft-gesellschaft-schulung",
    "question": "Wie bereitet die FPÖ Gesellschaft auf Gewalt vor?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Rhetorik von \"Überfremderung\" und \"Invasion\" + Nachwuchs-Schulung in RFJ/RFS"
      },
      {
        "letter": "B",
        "text": "Friedliche Überzeugung"
      },
      {
        "letter": "C",
        "text": "Transparente Debatte"
      },
      {
        "letter": "D",
        "text": "Gewalt-Prävention"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Eskalations-Strategie: Aggressive Rhetorik (\"Invasion\", \"Überfremderung\") + Nachwuchs-Radikalisierung in RFJ/RFS → Gewalttaten dokumentiert (Mord, Körperverletzung) - Ergebnis dieser Strategie.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Gewalt",
      "Rhetorik",
      "Radikalisierung"
    ]
  },
  {
    "id": 166,
    "slug": "oevp-kurz-legende-skandal-realitaet",
    "question": "Wie unterschied sich Kurz-\"Legende\" von Skandal-Realität?",
    "options": [
      {
        "letter": "A",
        "text": "Legende: Reformer/Dynamiker; Realität: Korrupteur/Netzwerk-Chef mit Korruption"
      },
      {
        "letter": "B",
        "text": "Legende war wahr"
      },
      {
        "letter": "C",
        "text": "Keine Unterschiede"
      },
      {
        "letter": "D",
        "text": "Unschuld bewahrt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz-Mythos (\"Volks-Kanzler\") vs. Realität: Zentrale Figur eines Korruptionsnetzwerks, manipulierte Medien, bestechliche Funktionäre - Konstruktion von Image statt Substanz.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Kurz",
      "Mythos-Zerfall"
    ]
  },
  {
    "id": 167,
    "slug": "fpoe-koestinger-alm-affaere-budget",
    "question": "Was war die umstrittene Almwirtschaft-Affäre eines FPÖ-Ministers?",
    "options": [
      {
        "letter": "A",
        "text": "FPÖ-Minister mit umstrittenen Budget-Verwendungen für persönliche Projekte"
      },
      {
        "letter": "B",
        "text": "Legitime Subvention"
      },
      {
        "letter": "C",
        "text": "Transparente Budgetierung"
      },
      {
        "letter": "D",
        "text": "Sachgemäße Verteilung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Minister (z.B. Köstinger-Kritik): Budgetmittel für Agrar-/Almwirtschaft teilweise für fragwürdige Zwecke verwendet - Korruptionsmuster auch bei Ressourcenverteilung.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Budget",
      "Landwirtschaft",
      "Missbrauch"
    ]
  },
  {
    "id": 168,
    "slug": "oevp-demokratischer-kollaps-kurz-administration",
    "question": "Wie kollabierte demokratische Kontrolle unter Kurz?",
    "options": [
      {
        "letter": "A",
        "text": "Schwache Opposition, Justiz-Infiltration, Medien-Abhängigkeit, Koalitions-Schwäche"
      },
      {
        "letter": "B",
        "text": "Starke Kontrollen"
      },
      {
        "letter": "C",
        "text": "Volle Transparenz"
      },
      {
        "letter": "D",
        "text": "Oppositions-Kraft"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Kurz 2017-2019: Schwache Opposition (SPÖ 26%), Medien-Manipulation (Inseraten), Justiz-Risiko (Pilnacek), Koalitionspartner FPÖ schwach → demokratische Kontrolle kollabiert.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2017",
      "Demokratie-Kollaps",
      "Kontrolle"
    ]
  },
  {
    "id": 169,
    "slug": "fpoe-geheimbund-struktur-loyalitaet",
    "question": "Wie funktioniert die FPÖ wie ein Geheimbund?",
    "options": [
      {
        "letter": "A",
        "text": "Strikte Hierarchie, Schweigegebot, Loyalität zu Haider/Strache, innere Machtkämpfe"
      },
      {
        "letter": "B",
        "text": "Demokratische Struktur"
      },
      {
        "letter": "C",
        "text": "Transparente Prozesse"
      },
      {
        "letter": "D",
        "text": "Offene Mitgliedschaft"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Struktur: Charismatische Führung (Haider, Strache → Kickl), strikte Hierarchie, interne Geheimhaltung, Loyalitätszwang, innere Machtkämpfe - nicht-demokratische Struktur.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Struktur",
      "Hierarchie",
      "Geheimbund"
    ]
  },
  {
    "id": 170,
    "slug": "oevp-kurz-risikovierter-geheimnis",
    "question": "Wie verhielt sich Kurz nach Skandal-Aufdeckung?",
    "options": [
      {
        "letter": "A",
        "text": "Leugnung, dann Rücktritt, dann vollständiger Abgang aus Politik"
      },
      {
        "letter": "B",
        "text": "Volle Aufklärung"
      },
      {
        "letter": "C",
        "text": "Transparente Kooperation"
      },
      {
        "letter": "D",
        "text": "Weitermachen als normal"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz nach Oktober 2021: Bestritt zunächst (\"konstruiert\"), dann Rücktritt als Kanzler, 2. Dezember 2021 Ausstieg aus Politik - Flucht statt Aufklärung.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Kurz-Flucht",
      "Politik"
    ]
  },
  {
    "id": 171,
    "slug": "fpoe-klientel-system-aufbau-kontrolle",
    "question": "Wie baute die FPÖ ein Klientel-System auf?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Postenverteiling, Spesenfonds, illegale Finanzierung an Vertraute"
      },
      {
        "letter": "B",
        "text": "Meritokratische Auswahl"
      },
      {
        "letter": "C",
        "text": "Transparente Prozesse"
      },
      {
        "letter": "D",
        "text": "Sachgemäße Bestellung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Klientelsystem: Postenverteiling an Loyalisten (Haider/Strache), Spesenfonds für Elite (Strache 1+ Mio, Graz 1,8 Mio), illegale Parteienfinanzierung - Belohnung von Loyalität statt Leistung.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Klientelismus",
      "Korruption",
      "Loyalität"
    ]
  },
  {
    "id": 172,
    "slug": "oevp-finanzministerium-schuessel-manipulation",
    "question": "Wie wurde das Finanzministerium unter ÖVP-Finanzministern missbraucht?",
    "options": [
      {
        "letter": "A",
        "text": "Für Parteiinteressen (Umfragen, Inseraten, Steuernachlässe, Postenbesetzung)"
      },
      {
        "letter": "B",
        "text": "Sachgemäße Verwaltung"
      },
      {
        "letter": "C",
        "text": "Transparente Finanzen"
      },
      {
        "letter": "D",
        "text": "Öffentliche Kontrolle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Finanzministerium unter ÖVP: Missbrauch für Umfragen (500.000 Euro Scheinrechnungen), Inseraten (1,1 Mio für Zeitungen), Steuernachlässe (Wolf 3,4 Mio), Postenbesetzung (Wöginger-Finanzamt).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Finanzministerium",
      "Missbrauch"
    ]
  },
  {
    "id": 173,
    "slug": "fpoe-verfassungsschutz-instrumentalisierung",
    "question": "Wie missbrauchte die FPÖ den Verfassungsschutz (BVT)?",
    "options": [
      {
        "letter": "A",
        "text": "Razzia 2018 gegen BVT selbst (Kickl) zur Kontrolle von Rechtsextremismus-Abteilung"
      },
      {
        "letter": "B",
        "text": "Legitime Kontrolle"
      },
      {
        "letter": "C",
        "text": "Transparente Überwachung"
      },
      {
        "letter": "D",
        "text": "Sachgemäße Ermittlung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Herbert Kickl als Innenminister 2018: Ordnete Razzia im BVT an, um Abteilung \"Rechtsextremismus\" zu schwächen - Missbrauch von Behörde gegen Geheimdienst-Unabhängigkeit.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "2018",
      "BVT",
      "Missbrauch"
    ]
  },
  {
    "id": 174,
    "slug": "oevp-medien-kontrolle-strategie",
    "question": "Wie kontrollierte die ÖVP Medien?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Inseratenkäufe bei bestimmten Medien gegen positive Berichterstattung"
      },
      {
        "letter": "B",
        "text": "Gleichmäßige Verteilung"
      },
      {
        "letter": "C",
        "text": "Unabhängige Medien"
      },
      {
        "letter": "D",
        "text": "Transparente Kommunikation"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Medien-Kontrolle: Insertenkäufe bei Österreich (1,1 Mio Euro) gegen gefälschte positive Umfragen und Berichterstattung - Kauf von Medien-Loyalität.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Medien-Kontrolle",
      "Bestechung"
    ]
  },
  {
    "id": 175,
    "slug": "fpoe-fluktuation-funktionaere-skandale",
    "question": "Wie zeigt sich die hohe Fluktuation von FPÖ-Funktionären?",
    "options": [
      {
        "letter": "A",
        "text": "Viele Austritte nach Skandal-Verurteilung, aber keine präventiven Kontrollen"
      },
      {
        "letter": "B",
        "text": "Stabile Mitgliedschaft"
      },
      {
        "letter": "C",
        "text": "Transparente Prozesse"
      },
      {
        "letter": "D",
        "text": "Getestete Kandidaten"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ: Hohe Fluktuation - Funktionäre treten aus oder werden ausgeschlossen NACH Verurteilung (nicht präventiv). Beispiele: Grasser-Ausschluss nach Urteil, nicht vorher.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Skandale",
      "Fluktuation",
      "Kontrolle"
    ]
  },
  {
    "id": 176,
    "slug": "oevp-koalition-krisen-chronik",
    "question": "Welche Koalitions-Krisen betraf ÖVP-Regierungen?",
    "options": [
      {
        "letter": "A",
        "text": "ÖVP-FPÖ 2019 (Ibiza), ÖVP-Grüne 2021 (Korruptionsaffäre), ÖVP-SPÖ 1986-2000 (viele Skandale)"
      },
      {
        "letter": "B",
        "text": "Stabile Koalitionen"
      },
      {
        "letter": "C",
        "text": "Harmonische Regierungen"
      },
      {
        "letter": "D",
        "text": "Keine Krisen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Koalitionskrisen: Ibiza 2019 (FPÖ-Skandal), Kurz-Affäre 2021 (Grüne forderten Rücktritt), SP-Skandale 1986-2000 - ÖVP-Beteiligung in fast allen führenden Krisen.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/%C3%96VP-Korruptionsaff%C3%A4re"
      }
    ],
    "tags": [
      "ÖVP",
      "Koalitionskrisen",
      "Geschichte",
      "Skandale"
    ]
  },
  {
    "id": 177,
    "slug": "fpoe-spendenbefunde-chronik",
    "question": "Wie zeigt sich das Spendenverhalten der FPÖ?",
    "options": [
      {
        "letter": "A",
        "text": "Wiederholte illegale Spenden (Novomatic, Telekom, Staatsbürgerschaften)"
      },
      {
        "letter": "B",
        "text": "Transparente Finanzierung"
      },
      {
        "letter": "C",
        "text": "Sachgerechte Spenden"
      },
      {
        "letter": "D",
        "text": "Kaum Spenden"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Spendenskandale: Novomatic-Korruption, Telekom 600-960k Euro für Wahlkampf, Staatsbürger-Spenden (\"Part of Game\") - wiederholter Muster von illegaler Finanzierung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Spenden",
      "Korruption",
      "Finanzierung"
    ]
  },
  {
    "id": 178,
    "slug": "oevp-personenpolitik-kurz-vertraute",
    "question": "Wie personalisierte Kurz die ÖVP um sich selbst?",
    "options": [
      {
        "letter": "A",
        "text": "Treu-Hierarchie: Schmid, Steiner, Fleischmann, Pasquali als absolute Vertraute in kritischen Positionen"
      },
      {
        "letter": "B",
        "text": "Meritokratische Auswahl"
      },
      {
        "letter": "C",
        "text": "Transparente Personalentwicklung"
      },
      {
        "letter": "D",
        "text": "Sachgemäße Besetzung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz-Personalpolitik: Schmid (Alleinvorstand ÖBAG), Steiner (Berater), Fleischmann (Kommunikation), Pasquali (Finanzministerium) - enge Vertraute in Schlüsselpositionen.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Personalisierung",
      "Kurz"
    ]
  },
  {
    "id": 179,
    "slug": "fpoe-feindbild-aufbau-gesellschaft-spalten",
    "question": "Wie nutzt die FPÖ Feindbilder zur Gesellschaftsspaltung?",
    "options": [
      {
        "letter": "A",
        "text": "\"Überfremdung\", \"Islamisierung\", \"Elite-Verschwörung\" gegen Bevölkerung"
      },
      {
        "letter": "B",
        "text": "Einigung statt Spaltung"
      },
      {
        "letter": "C",
        "text": "Solidarität-Aufrufe"
      },
      {
        "letter": "D",
        "text": "Zusammenhalt-Botschaften"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Spaltungs-Strategie: Feindbilder (Migranten, Muslime, \"Eliten\") gegen \"echte Österreicher\" - manipulative Rhetorik zur Basis-Mobilisierung und Gesellschaftsspaltung.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Spaltung",
      "Manipulation",
      "Feindbilder"
    ]
  },
  {
    "id": 180,
    "slug": "oevp-medien-skandal-waehrend-pandemie",
    "question": "Welchen Medien-Skandal beginn die ÖVP während COVID?",
    "options": [
      {
        "letter": "A",
        "text": "Fortlaufende Inseraten-Zahlungen an Österreich-Zeitung während Pandemie-Krise"
      },
      {
        "letter": "B",
        "text": "Korrekte Berichterstattung"
      },
      {
        "letter": "C",
        "text": "Transparente Kommunikation"
      },
      {
        "letter": "D",
        "text": "Öffentliche Information"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-COVID-Skandal: Während Pandemie-Krise 2020-2021 zahlte Finanzministerium Millionen Euro Inseraten an Österreich für manipulierte Umfragen - Priorität für Medien-Kontrolle statt Gesundheit.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2020",
      "COVID",
      "Medien-Skandal"
    ]
  },
  {
    "id": 181,
    "slug": "fpoe-politische-isolation-allianze-fehler",
    "question": "Wie wurde die FPÖ politisch isoliert?",
    "options": [
      {
        "letter": "A",
        "text": "Nach Skandalen lehnen alle Parteien Koalition ab außer bei Wahlerfolg"
      },
      {
        "letter": "B",
        "text": "Normale Koalitions-Kandidat"
      },
      {
        "letter": "C",
        "text": "Akzeptiert überall"
      },
      {
        "letter": "D",
        "text": "Vorrangige Partnerin"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Isolation: Nach wiederholten Skandalen (Haider, Ibiza, COVID-Verschwörungen) zögern Parteien mit Koalition - nur unter Wahlerfolgs-Druck (ÖVP 2017, 2020 versuchte Koalition).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Isolation",
      "Koalition",
      "Skandale"
    ]
  },
  {
    "id": 182,
    "slug": "oevp-wksta-angriff-zerstoerung-unabhaengigkeit",
    "question": "Wie versuchte die ÖVP die WKStA zu schwächen?",
    "options": [
      {
        "letter": "A",
        "text": "Öffentliche Attacken, Unterstellung von \"politischen Motiven\", Druck auf Justiz"
      },
      {
        "letter": "B",
        "text": "Unterstützung der Behörde"
      },
      {
        "letter": "C",
        "text": "Kooperation"
      },
      {
        "letter": "D",
        "text": "Transparente Zusammenarbeit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP (Kurz) attackierte WKStA öffentlich 2021, unterstellte \"Verfehlungen\" und \"politische Motive\" - Versuch der Delegitimation unabhängiger Ermittlungsbehörde.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/oevp-skandale-sebastian-kurz/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "WKStA-Angriff",
      "Unabhängigkeit"
    ]
  },
  {
    "id": 183,
    "slug": "fpoe-gleichschaltung-vertrauen-frage",
    "question": "Wie funktioniert FPÖ-Befehlsstruktur?",
    "options": [
      {
        "letter": "A",
        "text": "Strikte Befehlshierarchie - von Haider bis Strache bis Kickl untersagta Widersprechen"
      },
      {
        "letter": "B",
        "text": "Demokratische Abstimmung"
      },
      {
        "letter": "C",
        "text": "Basis-Partizipation"
      },
      {
        "letter": "D",
        "text": "Transparente Entscheidungsfindung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Struktur: Charismatische Führung mit strikter Hierarchie - Haider, Strache, Kickl als absolute Führungspersonen ohne echte Mitsprache unten. Kein interner Widerspruch toleriert.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Struktur",
      "Hierarchie",
      "Autokratie"
    ]
  },
  {
    "id": 184,
    "slug": "oevp-sozialpolitik-neoliberal-umkehr",
    "question": "Wie widersprach ÖVP-Politikgestaltung ihren Versprechungen?",
    "options": [
      {
        "letter": "A",
        "text": "Versprach Wohlfahrt, senkte Steuern für Reiche, baute Sozialstaat ab"
      },
      {
        "letter": "B",
        "text": "Erhöhte Sozialausgaben"
      },
      {
        "letter": "C",
        "text": "Progressive Besteuerung"
      },
      {
        "letter": "D",
        "text": "Armutsbekämpfung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP unter Kurz: Versprach \"Politik für Alle\", aber senkte Steuern für Reiche (Wolf 3,4 Mio Nachlass), zahlte Millionen Subventionen, baute Sozialstaat ab - Wählerbetrug.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Sozialpolitik",
      "Wählerbetrug"
    ]
  },
  {
    "id": 185,
    "slug": "fpoe-korruption-muster-justiz-beweiss",
    "question": "Wie zeigen sich Korruptionsmuster in FPÖ-Verurteilungen?",
    "options": [
      {
        "letter": "A",
        "text": "Wiederholte Parteienfinanzierungs-Betrug, Amtsmissbrauch, Spesenmissbrauch über Jahrzehnte"
      },
      {
        "letter": "B",
        "text": "Einzelne Fälle"
      },
      {
        "letter": "C",
        "text": "Zufällige Skandale"
      },
      {
        "letter": "D",
        "text": "Keine Muster"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Korruptionsmuster über Zeit: Telekom (2009), Hypo (2009), Graz-Spesen (2021-2023), Strache-Luxus (2021), über 100+ Fälle - systemischer, nicht individueller Betrug.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Korruption",
      "Muster",
      "Systemisch"
    ]
  },
  {
    "id": 186,
    "slug": "oevp-zukunft-restituion-moeglichkeit",
    "question": "Wie könnte ÖVP Vertrauen wiederherstellen?",
    "options": [
      {
        "letter": "A",
        "text": "Vollständige Aufklärung, Funktionärs-Austausch, Strukturelle Reformen, Reparationen"
      },
      {
        "letter": "B",
        "text": "Weitermachen wie vorher"
      },
      {
        "letter": "C",
        "text": "Skandale vergessen"
      },
      {
        "letter": "D",
        "text": "Keine Änderungen nötig"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP-Vertrauenswiederherstellung würde erfordern: Volle Aufklärung der Skandale, Funktionärs-Neubewertung, strukturelle Kontrollen, Reparationen für Opfer von Korruption.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2024",
      "Restitution",
      "Zukunft"
    ]
  },
  {
    "id": 187,
    "slug": "fpoe-zukuenftige-vermeidung-radikalisierung",
    "question": "Wie könnte FPÖ-Radikalisierung verhindert werden?",
    "options": [
      {
        "letter": "A",
        "text": "Präventive Kontrollen, Ausstiegs-Programme, Medien-Kontrolle, Geheimdienstüberwachung"
      },
      {
        "letter": "B",
        "text": "Keine Maßnahmen nötig"
      },
      {
        "letter": "C",
        "text": "Verbot statt Kontrolle"
      },
      {
        "letter": "D",
        "text": "Keine Lösungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Prävention erfordert: Präventive Kontrollen vor Verurteilung, Ausstiegs-Programme für Radikalisierte, Medien-Monitoring, Geheimdienst-Überwachung extremistischer Strukturen wie RFJ/RFS.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Prävention",
      "Radikalisierung",
      "Kontrolle"
    ]
  },
  {
    "id": 188,
    "slug": "gesamt-oesterreich-demokratie-bedrohung-2025",
    "question": "Wie bedrohen Skandale die österreichische Demokratie 2025?",
    "options": [
      {
        "letter": "A",
        "text": "Vertrauenskrise, Justiz-Infragestellung, Rechtsextremismus-Expansion, Koalitions-Instabilität"
      },
      {
        "letter": "B",
        "text": "Keine Bedrohung"
      },
      {
        "letter": "C",
        "text": "Normale Politik"
      },
      {
        "letter": "D",
        "text": "Alles in Ordnung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Östereich 2025: Vertrauenskrise in Institutionen (ÖVP, FPÖ), Justiz-Angriffe, Rechtsextremismus-Wachstum (FPÖ 30%+ Umfrage), Koalitions-Instabilität, Demo kratische Kontrolle gefährdet.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Österreich",
      "2025",
      "Demokratie-Bedrohung",
      "Krise"
    ]
  },
  {
    "id": 189,
    "slug": "waehler-konsequenzen-2024-2025-wahl",
    "question": "Wie haben Wähler auf Skandale 2024-2025 reagiert?",
    "options": [
      {
        "letter": "A",
        "text": "ÖVP fiel auf unter 20%, FPÖ stieg auf 30%+, Instabilität bei Koalitionsbildung"
      },
      {
        "letter": "B",
        "text": "Keine Veränderungen"
      },
      {
        "letter": "C",
        "text": "ÖVP-Aufschwung"
      },
      {
        "letter": "D",
        "text": "FPÖ-Niedergang"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Wähler-Reaktion 2024-2025: ÖVP fiel dramatisch (Korruptionsaffäre), FPÖ stieg trotz Skandale auf 30%+ (populistische Anziehung), Koalitionsbildung schwierig, Instabilität.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "2025",
      "Wahlreaktion",
      "ÖVP-Skandal",
      "FPÖ-Aufstieg"
    ]
  },
  {
    "id": 190,
    "slug": "schlussfolgerung-kriminelle-strukturen-oesterreich-parteien",
    "question": "Wie lässt sich die Skandal-Chronik österreichischer Parteien zusammenfassen?",
    "options": [
      {
        "letter": "A",
        "text": "Systematische Korruptionsnetzwerke in FPÖ/ÖVP, Rechtsextremismus, Machtmissbrauch, Vertuschung"
      },
      {
        "letter": "B",
        "text": "Vereinzelte Fehler"
      },
      {
        "letter": "C",
        "text": "Normale Politik"
      },
      {
        "letter": "D",
        "text": "Alle gleich kriminell"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Österreich-Skandale zeigen: FPÖ (100+ Fälle Rechtsextremismus/Korruption), ÖVP (strukturiertes Korruptionsnetzwerk Kurz-Ära), SPÖ (historische Skandale), Grüne/NEOS (geringer, aber vorhanden) - systemische Probleme.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Österreich",
      "Zusammenfassung",
      "Korruption",
      "Systemisch"
    ]
  },
  {
    "id": 191,
    "slug": "fpoe-bildung-manipulation-schulen-indoktrination",
    "question": "Wie versuchte die FPÖ Schulen zu instrumentalisieren?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Druck auf Schulen, Lehrplan-Manipulation und ideologische Beeinflussung"
      },
      {
        "letter": "B",
        "text": "Unterstützung der Lehrerschaft"
      },
      {
        "letter": "C",
        "text": "Förderung von Bildung"
      },
      {
        "letter": "D",
        "text": "Transparente Schulpolitik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Schulpolitik: Versuchte Lehrplan-Manipulation, Druck auf Schulverwaltung, Indoktrination durch RFJ/RFS-Schulungen - Missbrauch von Bildungssystem für Ideologie.",
    "sourceLinks": [
      {
        "name": "SPÖ.at",
        "url": "https://www.spoe.at/fpoe-einzelfaelle/"
      }
    ],
    "tags": [
      "FPÖ",
      "Bildung",
      "Indoktrination",
      "Manipulation"
    ]
  },
  {
    "id": 192,
    "slug": "oevp-europa-rolle-lobbyismus-skandale",
    "question": "Wie zeigten sich ÖVP-Skandale auf europäischer Ebene?",
    "options": [
      {
        "letter": "A",
        "text": "EU-weite Lobbyismus-Skandale, Korruptionsvorwürfe, diplomatische Isolation"
      },
      {
        "letter": "B",
        "text": "Europäische Anerkennung"
      },
      {
        "letter": "C",
        "text": "Internationale Reputation"
      },
      {
        "letter": "D",
        "text": "EU-Vertrauen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "ÖVP international: Kurz-Skandale beschädigten Österreich-Image in EU, Lobbyismus-Vorwürfe, diplomatische Isolierung, Vertrauen-Krise mit Partnern.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2021",
      "Europa",
      "Skandale"
    ]
  },
  {
    "id": 193,
    "slug": "fpoe-geldfluss-transparenz-kaemmerer",
    "question": "Wie offen sind die FPÖ-Geldflüsse?",
    "options": [
      {
        "letter": "A",
        "text": "Nicht transparent - Spenden-Wege verschleiert, Kassierer unter Druck"
      },
      {
        "letter": "B",
        "text": "Vollständig offen"
      },
      {
        "letter": "C",
        "text": "Sachgerecht dokumentiert"
      },
      {
        "letter": "D",
        "text": "Staatlich kontrolliert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FPÖ-Geldflüsse: Notorisch nicht transparent - Telekom (600k Euro), Novomatic-Spenden, Champagner (427k+), Bargeld-Abhebungen ohne Belege (Graz 1,8 Mio) - Intransparenz als System.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "FPÖ",
      "Finanzen",
      "Intransparenz",
      "Korruption"
    ]
  },
  {
    "id": 194,
    "slug": "oevp-kurz-erbe-partei-identitaet",
    "question": "Wie hat Kurz-Ära die ÖVP langfristig geprägt?",
    "options": [
      {
        "letter": "A",
        "text": "Vertrauenskrise, Partei-Entfremdung, Neuausrichtungs-Druck, Identitätskrise"
      },
      {
        "letter": "B",
        "text": "Gestärkt und modernisiert"
      },
      {
        "letter": "C",
        "text": "Unverändert geblieben"
      },
      {
        "letter": "D",
        "text": "Anerkannt und international gelobt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Kurz-Erbe in ÖVP: Tiefe Vertrauenskrise, Funktionärs-Skepsis, Identitätskrise, Neuausrichtungs-Druck unter Nehammer - Skandale haben Partei nachhaltig beschädigt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "ÖVP",
      "2024",
      "Erbe",
      "Identitätskrise"
    ]
  },
  {
    "id": 195,
    "slug": "gesamtgesellschaft-skandale-demokratiequalitaet-rueckgang",
    "question": "Wie zeigt sich Auswirkung der Skandale auf Demokratie-Qualität?",
    "options": [
      {
        "letter": "A",
        "text": "Demokratie-Index sinkt, Vertrauen-Verlust, Rechtsextremismus-Wachstum, Populismus-Aufstieg"
      },
      {
        "letter": "B",
        "text": "Stabilität"
      },
      {
        "letter": "C",
        "text": "Positive Entwicklung"
      },
      {
        "letter": "D",
        "text": "Keine Veränderungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Östereichs Demokratie-Qualität unter Druck: FPÖ 30%+ (Rechtsextremismus-Mainstream), ÖVP-Vertrauenskrise, Justiz-Angriffsversuche, Medien-Kontrolle - Demokratie-Index sinkt.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Österreich",
      "2025",
      "Demokratie",
      "Qualität"
    ]
  },
  {
    "id": 196,
    "slug": "reform-notwendigkeit-parteienfinanzierung-kontrolle",
    "question": "Welche Reformen sind zur Skandal-Prävention notwendig?",
    "options": [
      {
        "letter": "A",
        "text": "Strikte Parteienfinanzierungs-Kontrolle, Justiz-Unabhängigkeit-Schutz, Medien-Vielfalt-Gesetz"
      },
      {
        "letter": "B",
        "text": "Keine Änderungen nötig"
      },
      {
        "letter": "C",
        "text": "Minimale Anpassungen"
      },
      {
        "letter": "D",
        "text": "Bestehend ausreichend"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Reform-Notwendigkeiten: Strikte Parteienfinanzierungs-Kontrollen, Justiz-Unabhängigkeits-Gesetze, Medien-Vielfalt-Gesetze, Transparenzverpflichtung, Interessenskonflikt-Regeln.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Reformen",
      "2025",
      "Prävention",
      "Kontrolle"
    ]
  },
  {
    "id": 197,
    "slug": "buergerschaftliche-reaktion-skandale-engagement",
    "question": "Wie reagierte Bürgerschafft auf die Skandale?",
    "options": [
      {
        "letter": "A",
        "text": "Protest-Kundgebungen, NGO-Gründungen, Medien-Kritik, Wahlabstinenz teilweise"
      },
      {
        "letter": "B",
        "text": "Vollständige Unterstützung"
      },
      {
        "letter": "C",
        "text": "Indifferenz"
      },
      {
        "letter": "D",
        "text": "Enthusiasmus für Skandal-Politiker"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Bürgerschaften-Reaktion: Proteste gegen Korruption, NGO-Gründungen (Transparenz), Medien-Kritik, teilweise Wahlabstinenz - Frustration über Elite-Korruption.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/ermittlungen-gegen-oevp-politiker/"
      }
    ],
    "tags": [
      "Bürgerschaften",
      "2024",
      "Protest",
      "Engagement"
    ]
  },
  {
    "id": 198,
    "slug": "internationalvergleich-oesterreich-korruption-nachbarn",
    "question": "Wie vergleicht sich Österreichs Korruptionsproblem mit Nachbarländern?",
    "options": [
      {
        "letter": "A",
        "text": "Ähnlich Ungarn/Tschechien mit wachsendem Rechtsextremismus, besser als Balkans-Länder"
      },
      {
        "letter": "B",
        "text": "Besser als alle Nachbarn"
      },
      {
        "letter": "C",
        "text": "Keine Probleme"
      },
      {
        "letter": "D",
        "text": "Nicht vergleichbar"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Österreich-Vergleich: Ähnliche Probleme wie Ungarn/Tschechien (Rechtsextremismus, Korruption), besser als Balkans-Länder, schlimmer als Skandinavien - mittelmäßige Demokratie-Qualität.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Österreich",
      "2025",
      "Vergleich",
      "International"
    ]
  },
  {
    "id": 199,
    "slug": "nachhaltigkeit-reaktion-institutionen-veraenderung",
    "question": "Wie nachhaltig sind institutionelle Veränderungen nach Skandalen?",
    "options": [
      {
        "letter": "A",
        "text": "Gering - Reformen oberflächlich, Strukturen bleiben, neue Generationen wiederholen Fehler"
      },
      {
        "letter": "B",
        "text": "Vollständig reformiert"
      },
      {
        "letter": "C",
        "text": "Dauerhafte Verbesserungen"
      },
      {
        "letter": "D",
        "text": "Perfektioniert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Institutionelle Nachhaltigkeit: Reformen nach Skandalen oft oberflächlich - Strukturen bleiben (ÖVP-Klientelismus, FPÖ-Hierarchie), neue Generationen wiederholen ähnliche Fehler.",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Reformen",
      "Nachhaltigkeit",
      "2025",
      "Strukturen"
    ]
  },
  {
    "id": 200,
    "slug": "abschliessend-ausblick-oesterreich-2026-risiken-chancen",
    "question": "Welche Chancen und Risiken für österreichische Demokratie 2026?",
    "options": [
      {
        "letter": "A",
        "text": "Risiken: FPÖ-Regierung, Jusitz-Angriffe; Chancen: Reforms-Druck, Bürgerbewusstsein"
      },
      {
        "letter": "B",
        "text": "Nur Chancen"
      },
      {
        "letter": "C",
        "text": "Nur Risiken"
      },
      {
        "letter": "D",
        "text": "Keine Veränderung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Österreich 2026: Risiken (FPÖ-Wahlerfolg könnte Demokratie-Aushebelung bedeuten, Justiz-Angriffsversuche); Chancen (verstärkter Reforms-Druck, Bürgerbewusstsein gegen Korruption).",
    "sourceLinks": [
      {
        "name": "Kontrast.at",
        "url": "https://kontrast.at/fpoe-skandale-korruption-liste/"
      }
    ],
    "tags": [
      "Österreich",
      "2026",
      "Ausblick",
      "Zukunft"
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
