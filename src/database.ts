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
  },

  {
    "id": 1,
    "slug": "ungarn-orban-lgbtq-propaganda-gesetz-2021",
    "question": "Was verbietet Ungarns umstrittenes LGBT-Propaganda-Gesetz von 2021?",
    "options": [
      {
        "letter": "A",
        "text": "Darstellung von Homo- und Transsexualität vor Minderjährigen"
      },
      {
        "letter": "B",
        "text": "Heterosexuelle Beziehungen"
      },
      {
        "letter": "C",
        "text": "Werbung für Kinderschutz"
      },
      {
        "letter": "D",
        "text": "Religiöse Symbole in Schulen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Die Fidesz-Regierung von Viktor Orbán verabschiedete 2021 ein Gesetz, das die positive Darstellung von Homosexualität und Transidentität vor Minderjährigen verbietet. Kritiker sehen darin ein homophobes Zensurgesetz nach russischem Vorbild.",
    "sourceLinks": [
      {
        "name": "Die Zeit",
        "url": "https://www.zeit.de/politik/ausland/2021-06/ungarn-lgbtq-gesetz-minderjaehrige-verbot-proteste"
      },
      {
        "name": "Tagesschau",
        "url": "https://www.tagesschau.de/ausland/europa/ungarn-homosexualitaet-103.html"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2021",
      "LGBTQ+"
    ]
  },
  {
    "id": 2,
    "slug": "ungarn-pride-verbot-2025",
    "question": "Was beschloss das ungarische Parlament 2025 in Bezug auf Pride-Demonstrationen?",
    "options": [
      {
        "letter": "A",
        "text": "Ein Verbot von Pride-Demonstrationen mit Geldstrafen für Organisator:innen und Teilnehmer:innen"
      },
      {
        "letter": "B",
        "text": "Staatliche Förderung von Pride-Veranstaltungen"
      },
      {
        "letter": "C",
        "text": "Verpflichtende Sicherheitsschulungen für Pride-Organisator:innen"
      },
      {
        "letter": "D",
        "text": "Eine Ausweitung der Demonstrationsrechte für LGBTQ+-Gruppen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2025 wurde in Ungarn ein Gesetz verabschiedet, das Pride-Demonstrationen faktisch verbietet. Eine Verfassungsänderung schrieb außerdem fest, dass es nur zwei Geschlechter gebe.",
    "sourceLinks": [
      {
        "name": "Amnesty Österreich",
        "url": "https://www.amnesty.at/presse/ungarn-pride-verbot-ist-ein-frontalangriff-auf-lgbtqiaplus-personen-und-darf-nicht-in-kraft-treten"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2025",
      "LGBTQ+"
    ]
  },
  {
    "id": 3,
    "slug": "ungarn-orban-verfassungsgericht-entmachtung-2012",
    "question": "Wie schwächte Viktor Orbán 2012 das ungarische Verfassungsgericht?",
    "options": [
      {
        "letter": "A",
        "text": "Er entzog dem Gericht weitgehend das Recht, Steuer- und Haushaltsgesetze zu überprüfen"
      },
      {
        "letter": "B",
        "text": "Er verkleinerte das Gericht auf drei Richter"
      },
      {
        "letter": "C",
        "text": "Er machte alle Richter direkt vom Präsidenten der EU-Kommission abhängig"
      },
      {
        "letter": "D",
        "text": "Er verbot dem Gericht, Menschenrechtsfragen zu behandeln"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Mit dem neuen Grundgesetz 2012 schränkte die Fidesz-Regierung die Kompetenzen des Verfassungsgerichts massiv ein, besonders bei Steuer- und Finanzgesetzen – ein gezielter Angriff auf die Gewaltenteilung.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      },
      {
        "name": "bpb",
        "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/308619/10-jahre-fidesz-regierung-lage-der-demokratie-in-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2012",
      "Rechtsstaat"
    ]
  },
  {
    "id": 4,
    "slug": "ungarn-verwaltungsgerichte-politische-kontrolle-2018",
    "question": "Wozu diente das separate Verwaltungsgerichtssystem in Ungarn ab 2018?",
    "options": [
      {
        "letter": "A",
        "text": "Es sollte politisch sensible Fälle wie Wahlen unter Einfluss des Justizministers bringen"
      },
      {
        "letter": "B",
        "text": "Es sollte NGOs mehr Klagerechte einräumen"
      },
      {
        "letter": "C",
        "text": "Es sollte Korruptionsverfahren an EU-Gerichte übertragen"
      },
      {
        "letter": "D",
        "text": "Es sollte die Unabhängigkeit der Kommunalgerichte stärken"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Die Fidesz-Regierung beschloss ein eigenes Verwaltungsgerichtssystem für politisch heikle Verfahren. Der Justizminister sollte Richter:innen ernennen und Budgets kontrollieren – ein direkter Hebel zur Kontrolle unliebsamer Urteile.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2018",
      "Justizreform"
    ]
  },
  {
    "id": 5,
    "slug": "ungarn-wahlsystem-umbau-fidesz-vorteil",
    "question": "Wie veränderte Viktor Orbán das Wahlsystem zugunsten seiner Partei?",
    "options": [
      {
        "letter": "A",
        "text": "Er reduzierte die Zahl der Parlamentssitze und stärkte das Mehrheitswahlrecht"
      },
      {
        "letter": "B",
        "text": "Er führte reines Verhältniswahlrecht ein"
      },
      {
        "letter": "C",
        "text": "Er führte eine verpflichtende Wahlbeteiligung ein"
      },
      {
        "letter": "D",
        "text": "Er gab Minderheiten automatische Zusatzsitze"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbán ließ die Zahl der Abgeordneten senken und das System so umbauen, dass Direktmandate die Regierungspartei klar bevorzugen. Das System erschwert strukturell einen Machtwechsel.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      },
      {
        "name": "bpb",
        "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/308619/10-jahre-fidesz-regierung-lage-der-demokratie-in-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2010",
      "Wahlrecht"
    ]
  },
  {
    "id": 6,
    "slug": "ungarn-asyl-transitzonen-eugh-verurteilung",
    "question": "Wie verstieß Ungarn mit Transitzonen gegen europäisches Asylrecht?",
    "options": [
      {
        "letter": "A",
        "text": "Asylsuchende wurden in Grenzlagern monatelang festgehalten"
      },
      {
        "letter": "B",
        "text": "Ungarn gewährte zu großzügig Asyl und überforderte damit die EU"
      },
      {
        "letter": "C",
        "text": "Ungarn übergab alle Asylfälle direkt an private Sicherheitsfirmen"
      },
      {
        "letter": "D",
        "text": "Ungarn verlangte Asylgebühren von mehreren Tausend Euro"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ungarn richtete Transitzonen an der Grenze ein, in denen Asylbewerber:innen festgehalten wurden. Der Europäische Gerichtshof erklärte diese Praxis als Verstoß gegen EU-Asylrecht.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "Asyl",
      "Menschenrechte"
    ]
  },
  {
    "id": 7,
    "slug": "ungarn-souveraenitaetsgesetz-ngo-repression-2023",
    "question": "Was regelt das ungarische Souveränitätsgesetz von 2023 in Bezug auf NGOs?",
    "options": [
      {
        "letter": "A",
        "text": "Es kriminalisiert aus dem Ausland finanzierte zivilgesellschaftliche Organisationen"
      },
      {
        "letter": "B",
        "text": "Es stellt NGOs unter besonderen staatlichen Schutz"
      },
      {
        "letter": "C",
        "text": "Es schreibt eine Mindestfinanzierung für Menschenrechtsorganisationen vor"
      },
      {
        "letter": "D",
        "text": "Es erlaubt NGOs, Regierungsentscheidungen zu vetieren"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Das 2023 beschlossene Souveränitätsgesetz erschwert international unterstützte NGOs massiv und kann als Werkzeug eingesetzt werden, kritische Organisationen zu kriminalisieren.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2023",
      "Zivilgesellschaft"
    ]
  },
  {
    "id": 8,
    "slug": "deutschland-afd-verfassungsschutz-einstufung-2025",
    "question": "Wie stufte das Bundesamt für Verfassungsschutz die AfD im Jahr 2025 ein?",
    "options": [
      {
        "letter": "A",
        "text": "Als \"gesichert rechtsextremistische\" Partei"
      },
      {
        "letter": "B",
        "text": "Als harmlose Protestbewegung"
      },
      {
        "letter": "C",
        "text": "Als reine Wirtschaftspartei"
      },
      {
        "letter": "D",
        "text": "Als neutralen Beobachter des politischen Systems"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Der Verfassungsschutz erklärte 2025, der Verdacht rechtsextremistischer Bestrebungen in der AfD habe sich zur Gewissheit verdichtet. Die Partei wurde als gesichert rechtsextremistisch eingestuft.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Rechtsextremismus"
    ]
  },
  {
    "id": 9,
    "slug": "deutschland-afd-kriminalitaet-missbrauch-statistiken",
    "question": "Wie verzerrt die AfD laut Medienforschung die Darstellung von Kriminalität?",
    "options": [
      {
        "letter": "A",
        "text": "Sie stellt 95% der erwähnten Tatverdächtigen als Ausländer dar, obwohl ihr Anteil unter 35% liegt"
      },
      {
        "letter": "B",
        "text": "Sie weist konsequent auf deutsche Täter hin"
      },
      {
        "letter": "C",
        "text": "Sie verwendet ausschließlich offizielle Polizeistatistiken"
      },
      {
        "letter": "D",
        "text": "Sie vermeidet jegliche Nationalitätsangaben"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Medienwissenschaftler dokumentieren: AfD-Pressemitteilungen zu Kriminalität stellen Verdächtige fast ausschließlich als Ausländer dar, obwohl offizielle Statistiken ein anderes Bild zeigen.",
    "sourceLinks": [
      {
        "name": "Die Zeit",
        "url": "https://www.zeit.de/politik/deutschland/2019-08/afd-kriminalitaetsstatistik-medienwissenschaftler-zuwanderer"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2019",
      "Propaganda"
    ]
  },
  {
    "id": 10,
    "slug": "deutschland-reichsbuerger-terrorgruppe-putschplan-2022",
    "question": "Wessen wird die 2022 aufgedeckte Reichsbürger-Gruppe beschuldigt?",
    "options": [
      {
        "letter": "A",
        "text": "Sie soll geplant haben, mit Waffengewalt die Regierung zu stürzen"
      },
      {
        "letter": "B",
        "text": "Sie organisierte lediglich legale Demonstrationen"
      },
      {
        "letter": "C",
        "text": "Sie war eine Satiregruppe ohne politische Ambitionen"
      },
      {
        "letter": "D",
        "text": "Sie betrieb ausschließlich Online-Petitionen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Im Dezember 2022 wurden 54 Reichsbürger:innen angeklagt, darunter eine ehemalige AfD-Bundestagsabgeordnete. Ihr wird ein geplanter bewaffneter Umsturz und die Besetzung des Bundestags vorgeworfen.",
    "sourceLinks": [
      {
        "name": "Deutscher Bundestag",
        "url": "https://www.bundestag.de/dokumente/textarchiv/2022/kw50-de-aktuelle-stunde-reichsbuerger-926426"
      }
    ],
    "tags": [
      "Deutschland",
      "Reichsbürger",
      "2022",
      "Terrorismus"
    ]
  },
  {
    "id": 11,
    "slug": "deutschland-malsack-winkemann-afd-terrorgruppe-prozess",
    "question": "Wer ist Birgit Malsack-Winkemann und warum ist sie bedeutsam?",
    "options": [
      {
        "letter": "A",
        "text": "Sie war AfD-Abgeordnete und Mitglied der Reichsbürger-Terrorgruppe"
      },
      {
        "letter": "B",
        "text": "Sie ist eine führende Demokratisierungsaktivistin"
      },
      {
        "letter": "C",
        "text": "Sie lehrt Verfassungsrecht an der Universität"
      },
      {
        "letter": "D",
        "text": "Sie ist Vorsitzende der Grünen-Fraktion"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Birgit Malsack-Winkemann war Richterin und AfD-Bundestagsabgeordnete. Sie wurde als Mitglied der Reichsbürger-Terrorgruppe angeklagt, die einen bewaffneten Staatsstreich plante.",
    "sourceLinks": [
      {
        "name": "Deutscher Bundestag",
        "url": "https://www.bundestag.de/dokumente/textarchiv/2022/kw50-de-aktuelle-stunde-reichsbuerger-926426"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2022",
      "Terrorismus"
    ]
  },
  {
    "id": 12,
    "slug": "deutschland-rechte-gewalt-anstieg-2024",
    "question": "Um wie viel Prozent stieg rechte Gewalt in Deutschland 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Um etwa 25%, mit über 3.450 erfassten Angriffszielen"
      },
      {
        "letter": "B",
        "text": "Rechte Gewalt sank um 15%"
      },
      {
        "letter": "C",
        "text": "Die Zahlen blieben stabil"
      },
      {
        "letter": "D",
        "text": "Ein minimaler Anstieg von unter 5%"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024 dokumentierten Opferberatungsstellen einen massiven Anstieg rechter Gewalt um etwa 25% – parallel zu Wahlerfolgen der AfD. Rassismus war das häufigste Tatmotiv.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2024",
      "Rechte Gewalt",
      "Rassismus"
    ]
  },
  {
    "id": 13,
    "slug": "deutschland-angriffe-journalisten-2024-pressefreiheit",
    "question": "Wie viele Angriffe auf Journalist:innen gab es 2024 in Deutschland?",
    "options": [
      {
        "letter": "A",
        "text": "37 Angriffe, oft bei AfD-Veranstaltungen und neo-Nazi-Aufmärsche"
      },
      {
        "letter": "B",
        "text": "Keine Angriffe"
      },
      {
        "letter": "C",
        "text": "Ein Rückgang der Gewalt"
      },
      {
        "letter": "D",
        "text": "Nur einzelne isolierte Fälle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024 wurden 37 Angriffe auf Journalist:innen dokumentiert. Besonders häufig traten diese bei AfD-Veranstaltungen auf – ein Zeichen verfestigter Pressefeindlichkeit in der extremen Rechten.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2024",
      "Pressefreiheit",
      "Gewalt"
    ]
  },
  {
    "id": 14,
    "slug": "deutschland-gewalt-gegen-politische-gegner-2024",
    "question": "Um wie viel Prozent stiegen Angriffe auf politische Gegner 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Fast 75% Anstieg (542 Fälle gegen Aktivisten gegen Rechtsextremismus)"
      },
      {
        "letter": "B",
        "text": "Rückgang der Angriffe"
      },
      {
        "letter": "C",
        "text": "Stabile Zahlen"
      },
      {
        "letter": "D",
        "text": "Minimale Zunahme"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024 stieg die Anzahl von Angriffszielen gegen politische Gegner um beinahe 75%. Betroffen waren vor allem Journalist:innen und Aktivisten gegen Rechtsextremismus.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2024",
      "Politische Gewalt",
      "Angriffe"
    ]
  },
  {
    "id": 15,
    "slug": "ungarn-oligarch-meszaros-auftragsvergabe",
    "question": "Wie wurde der Oligarch Sándor Mészáros unter Orbán erfolgreich?",
    "options": [
      {
        "letter": "A",
        "text": "Er erhielt ohne Ausschreibung Millionen-Euro-Aufträge von Fidesz-Gemeinden"
      },
      {
        "letter": "B",
        "text": "Er gründete Unternehmen in offener Konkurrenz"
      },
      {
        "letter": "C",
        "text": "Er betrieb ehrliche Geschäftstätigkeit"
      },
      {
        "letter": "D",
        "text": "Er gewann Ausschreibungen durch Kompetenz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Sándor Mészáros war insolvent, bevor Orbán an die Macht kam. Sein Vermögen wuchs auf über 5 Milliarden Dollar – hauptsächlich durch staatliche Aufträge ohne echte Konkurrenz.",
    "sourceLinks": [
      {
        "name": "FAZ",
        "url": "https://www.faz.net/aktuell/politik/ausland/korruption-in-ungarn-am-ende-profitiert-immer-einer-aus-dem-orban-clan-110788385.htm"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Korruption"
    ]
  },
  {
    "id": 16,
    "slug": "ungarn-felcsut-stadiumbau-eu-gelder",
    "question": "Wofür gab Ungarn 230 Millionen Euro EU-Gelder aus?",
    "options": [
      {
        "letter": "A",
        "text": "Für ein Fußballstadion in Orbáns Heimatdorf Felcsut (1.600 Einwohner)"
      },
      {
        "letter": "B",
        "text": "Für ein Universitätskrankenhaus in Budapest"
      },
      {
        "letter": "C",
        "text": "Für eine Autobahn-Sanierung"
      },
      {
        "letter": "D",
        "text": "Für ein neues Justizgebäude"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Felcsut, Orbáns Heimatdorf mit nur 1.600 Einwohnern, erhielt 230 Millionen Euro EU-Gelder für ein extravagantes Fußballstadion neben Orbáns Wochenendhaus – ein Paradebeispiel für Korruption.",
    "sourceLinks": [
      {
        "name": "FAZ",
        "url": "https://www.faz.net/aktuell/politik/ausland/korruption-in-ungarn-am-ende-profitiert-immer-einer-aus-dem-orban-clan-110788385.htm"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU-Betrug"
    ]
  },
  {
    "id": 17,
    "slug": "ungarn-led-skandal-schwiegersohn-tiborcz",
    "question": "Was war der LED-Lampen-Skandal in Ungarn?",
    "options": [
      {
        "letter": "A",
        "text": "Gemeinden zahlten Millionen über Orbáns Schwiegersohn István Tiborcz für teure LED-Lampen"
      },
      {
        "letter": "B",
        "text": "Ein innovatives Energiesparprogramm"
      },
      {
        "letter": "C",
        "text": "Eine transparente Ausschreibung"
      },
      {
        "letter": "D",
        "text": "Eine EU-Umweltinitiative"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ungarische Gemeinden zahlten Millionen für LED-Lampen über ein Unternehmen von Orbáns Schwiegersohn – ohne echte Ausschreibung, zu überhöhten Preisen, finanziert durch EU-Gelder.",
    "sourceLinks": [
      {
        "name": "FAZ",
        "url": "https://www.faz.net/aktuell/politik/ausland/korruption-in-ungarn-am-ende-profitiert-immer-einer-aus-dem-orban-clan-110788385.htm"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2020",
      "Korruption"
    ]
  },
  {
    "id": 18,
    "slug": "ungarn-eu-haushalt-40-milliarden-blockiert",
    "question": "Warum hält die EU 40 Milliarden Euro für Ungarn zurück?",
    "options": [
      {
        "letter": "A",
        "text": "Wegen Korruption und Verstoß gegen Rechtsstaatlichkeit"
      },
      {
        "letter": "B",
        "text": "Wegen administrativer Verzögerungen"
      },
      {
        "letter": "C",
        "text": "Wegen technischer Probleme"
      },
      {
        "letter": "D",
        "text": "Aus budgetären Gründen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Die EU-Kommission blockiert bis zu 40 Milliarden Euro an Mitteln für Ungarn wegen grassierender Korruption und antidemokratischer Reformen. Dies ist das einzige wirksame Druckmittel gegen Orbáns Regime.",
    "sourceLinks": [
      {
        "name": "Tagesschau",
        "url": "https://www.tagesschau.de/ausland/europa/eu-haushalt-ausschuss-ungarn-100.html"
      }
    ],
    "tags": [
      "Ungarn",
      "2024",
      "EU-Sanktion",
      "Korruption"
    ]
  },
  {
    "id": 19,
    "slug": "polen-pis-lgbtq-freie-zonen-hundert-gemeinden",
    "question": "Was sind \"LGBT-freie Zonen\" in Polen?",
    "options": [
      {
        "letter": "A",
        "text": "Über 100 Gemeinden erklären sich 2019-2025 als frei von LGBT-Ideologie"
      },
      {
        "letter": "B",
        "text": "Sichere Orte für LGBTQ+-Menschen"
      },
      {
        "letter": "C",
        "text": "Legale diskriminierungsfreie Zonen"
      },
      {
        "letter": "D",
        "text": "EU-Initiative für Vielfalt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2019-2020: Über 100 polnische Gemeinden und Woiwodschaften erklären sich zu \"LGBT-ideologiefreien Zonen\" – unter PiS-Regierung eine politische Stigmatisierung der LGBTQ+-Community.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/LGBT-ideologiefreie_Zone"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2019",
      "LGBTQ+"
    ]
  },
  {
    "id": 20,
    "slug": "polen-pis-wahlkampf-lgbtq-feindlichkeit",
    "question": "Wie nutzte Polens PiS LGBTQ+-Feindlichkeit im Wahlkampf?",
    "options": [
      {
        "letter": "A",
        "text": "Zentrale Wahlstrategie: LGBTQ+-Menschen als Bedrohung für Familie und Nation"
      },
      {
        "letter": "B",
        "text": "Unterstützung von LGBTQ+-Rechten"
      },
      {
        "letter": "C",
        "text": "Integrationsprogramme"
      },
      {
        "letter": "D",
        "text": "Fördermittel für Pride-Events"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS-Wahlstrategie seit 2015: LGBTQ+-Feindlichkeit als Mobilisierungsmittel, Kampagnen gegen \"Gender-Ideologie\" – Stimmengewinn durch Diskriminierung.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2015",
      "Homophobie"
    ]
  },
  {
    "id": 21,
    "slug": "polen-praesident-duda-lgbtq-ideologie",
    "question": "Was sagte Polens Präsident Duda über LGBTQ?",
    "options": [
      {
        "letter": "A",
        "text": "\"Nur Ideologie\" und \"zerstörerischer als Kommunismus\""
      },
      {
        "letter": "B",
        "text": "\"Volle Unterstützung für LGBTQ+-Rechte\""
      },
      {
        "letter": "C",
        "text": "\"Neutral und sachlich\""
      },
      {
        "letter": "D",
        "text": "\"Kritik an Diskriminierung\""
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Präsident Duda 2020: Hetzerische Aussagen gegen LGBTQ+ als \"Ideologie schlimmer als Kommunismus\" – Wahlkampf-Propaganda mit rassistischen und antidemokratischen Inhalten.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "Homophobie"
    ]
  },
  {
    "id": 22,
    "slug": "polen-abtreibungsverbot-striktest-europa-2021",
    "question": "Was passierte mit Polens Abtreibungsgesetz 2021?",
    "options": [
      {
        "letter": "A",
        "text": "Fast totales Verbot – nur Ausnahme bei Lebensgefahr der Mutter"
      },
      {
        "letter": "B",
        "text": "Liberalisierung der Abtreibungsgesetze"
      },
      {
        "letter": "C",
        "text": "Status quo blieb erhalten"
      },
      {
        "letter": "D",
        "text": "Abtreibung wurde in allen Fällen erlaubt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Oktober 2021: Polens Verfassungsgericht bestätigte ein extremes Abtreibungsverbot unter PiS. Nur in Fällen von Lebensgefahr für die Mutter oder medizinischen Notfällen ist Abtreibung erlaubt – das restriktivste Gesetz in Europa.",
    "sourceLinks": [
      {
        "name": "Die Zeit",
        "url": "https://www.zeit.de/politik/ausland/2024-08/polen-selbstbestimmung-abtreibung-gesetz-un"
      },
      {
        "name": "Amnesty Austria",
        "url": "https://www.amnesty.at/ueber-amnesty/aktivist-innen/netzwerk-frauenrechte/news-events/polen-ein-jahr-nach-dem-frauenverachtenden"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2021",
      "Frauenrechte"
    ]
  },
  {
    "id": 23,
    "slug": "polen-abtreibungsverbot-un-ausschuss-kritik",
    "question": "Wie kritisierte die UN das polnische Abtreibungsverbot?",
    "options": [
      {
        "letter": "A",
        "text": "Als Verstoß gegen internationales Menschenrecht und Frauenrechtskonvention"
      },
      {
        "letter": "B",
        "text": "Als legitime nationale Gesetzgebung"
      },
      {
        "letter": "C",
        "text": "Unterstützung für das Gesetz"
      },
      {
        "letter": "D",
        "text": "Keine Stellungnahme"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Der UN-Ausschuss für die Beseitigung der Diskriminierung von Frauen kritisierte das polnische Abtreibungsverbot als Verstoß gegen die Frauenrechtskonvention und das Menschenrecht auf Selbstbestimmung.",
    "sourceLinks": [
      {
        "name": "Die Zeit",
        "url": "https://www.zeit.de/politik/ausland/2024-08/polen-selbstbestimmung-abtreibung-gesetz-un"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2024",
      "Frauenrechte"
    ]
  },
  {
    "id": 24,
    "slug": "polen-katholische-kirche-konversionstherapie",
    "question": "Was befürwortete die polnische Bischofskonferenz 2020?",
    "options": [
      {
        "letter": "A",
        "text": "Konversionstherapien für Homosexuelle"
      },
      {
        "letter": "B",
        "text": "Vollständige Entkriminalisierung"
      },
      {
        "letter": "C",
        "text": "Ehe für alle"
      },
      {
        "letter": "D",
        "text": "Transgender-Rechte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Polnische Bischofskonferenz 2020: 27-Seiten-Leitfaden befürwortet Konversionstherapien für Homosexuelle, lehnt Ehen ab – kirchliche Unterstützung für Diskriminierung.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "Kirche"
    ]
  },
  {
    "id": 25,
    "slug": "polen-europaparlament-artikel-7-verfahren",
    "question": "Was beschloss das Europaparlament zu Polens Menschenrechtsverletzungen?",
    "options": [
      {
        "letter": "A",
        "text": "Verurteilung und Verfahren nach Artikel 7 wegen Rechtsstaatlichkeitsverletzung"
      },
      {
        "letter": "B",
        "text": "Lobendes Schreiben"
      },
      {
        "letter": "C",
        "text": "Finanzielle Zuschüsse"
      },
      {
        "letter": "D",
        "text": "Keine Reaktion"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Das Europaparlament verurteilte Polen wegen systematischer Diskriminierung von LGBTQ+ und setzte ein Artikel-7-Verfahren ein – \"schwerwiegende Verletzung der Rechtsstaatlichkeit\".",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "EU"
    ]
  },
  {
    "id": 26,
    "slug": "deutschland-afd-ethnic-nationalism",
    "question": "Wie beschreibt der Verfassungsschutz AfD-Rassismus?",
    "options": [
      {
        "letter": "A",
        "text": "\"Ethnisch-abstammungsmäßiges Volksverständnis ist nicht mit Verfassung vereinbar\""
      },
      {
        "letter": "B",
        "text": "Normale konservative Politik"
      },
      {
        "letter": "C",
        "text": "Verfassungskonform"
      },
      {
        "letter": "D",
        "text": "Legitime Positionen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Verfassungsschutz 2025: AfDs ethnisch-abstammungsmäßiges Volksverständnis zielt darauf ab, Menschen von gleichberechtigter Teilhabe auszuschließen – fundamentale Verfassungsverletzung.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Rassismus"
    ]
  },
  {
    "id": 27,
    "slug": "ungarn-geschlechtsidentitaet-verfassungsaenderung-2025",
    "question": "Was bestimmte Ungarns Verfassungsänderung 2025 über Geschlecht?",
    "options": [
      {
        "letter": "A",
        "text": "Es gibt nur zwei Geschlechter – Verleugnung nicht-binärer Identität"
      },
      {
        "letter": "B",
        "text": "Anerkennung aller Geschlechtsidentitäten"
      },
      {
        "letter": "C",
        "text": "Schutz von Transgender-Rechten"
      },
      {
        "letter": "D",
        "text": "Inklusive Rechtsprechung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "April 2025: Verfassungsänderung schreibt \"zwei Geschlechter\" fest – inter* und nicht-binäre Menschen verlieren rechtliche Anerkennung, gezielter Angriff auf Menschenrechte.",
    "sourceLinks": [
      {
        "name": "Amnesty Austria",
        "url": "https://www.amnesty.at/presse/ungarn-pride-verbot-ist-ein-frontalangriff-auf-lgbtqiaplus-personen-und-darf-nicht-in-kraft-treten"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2025",
      "Trans-Rechte"
    ]
  },
  {
    "id": 28,
    "slug": "polen-lgbt-aktivisten-festnahmen-warschau",
    "question": "Was geschah mit LGBTQ+-Aktivisten in Warschau 2020?",
    "options": [
      {
        "letter": "A",
        "text": "Über 45 wurden festgenommen"
      },
      {
        "letter": "B",
        "text": "Friedliche Versammlungen wurden genehmigt"
      },
      {
        "letter": "C",
        "text": "Polizei gewährte Schutz"
      },
      {
        "letter": "D",
        "text": "Staat förderte ihre Arbeit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "August 2020: Polnische Behörden verhafteten über 45 LGBTQ+-Aktivisten in Warschau – Beispiel für politische Repression unter PiS-Regierung.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "Repression"
    ]
  },
  {
    "id": 29,
    "slug": "ungarn-orban-verfassungssperre-2012-grundgesetz",
    "question": "Wie schaffte Orbán 2012 eine Verfassungssperre?",
    "options": [
      {
        "letter": "A",
        "text": "Im Eilverfahren ohne öffentliche Diskussion – künftige Änderungen erfordern zwei Zweidrittelmehrheiten"
      },
      {
        "letter": "B",
        "text": "Transparente Verfassungsreform mit breiter Beteiligung"
      },
      {
        "letter": "C",
        "text": "Demokratische Konsultation"
      },
      {
        "letter": "D",
        "text": "Internationale Abstimmung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2012: Orbáns Fidesz änderte die Verfassung im Eilverfahren ohne echte öffentliche Debatte. Künftige Änderungen erfordern zwei Zweidrittelmehrheiten – faktisches Änderungsverbot.",
    "sourceLinks": [
      {
        "name": "Verfassungsblog",
        "url": "https://verfassungsblog.de/verfassungsbarbarei-budapest-2/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2012",
      "Verfassungsbruch"
    ]
  },
  {
    "id": 30,
    "slug": "deutschland-afd-migrationshintergrund-stigmatisierung",
    "question": "Wie behandelt die AfD Deutsche mit Migrationshintergrund?",
    "options": [
      {
        "letter": "A",
        "text": "Als nicht-gleichwertige Angehörige des \"ethnisch definierten\" deutschen Volkes"
      },
      {
        "letter": "B",
        "text": "Mit vollständiger Gleichberechtigung"
      },
      {
        "letter": "C",
        "text": "Als vollwertige Bürger"
      },
      {
        "letter": "D",
        "text": "Mit Integrationsprogrammen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Volksverständnis nach Verfassungsschutz: Deutsche mit Migrationshintergrund gelten als nicht-gleichwertig – ethnischer Nationalismus als Kernposition.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Diskriminierung"
    ]
  },
  {
    "id": 31,
    "slug": "ungarn-meszaros-vermogen-milliarden-aufbau",
    "question": "Wie stieg Sándor Mészáros Vermögen in nur 15 Jahren?",
    "options": [
      {
        "letter": "A",
        "text": "Von Insolvenz auf über 5 Milliarden Dollar durch staatliche Aufträge"
      },
      {
        "letter": "B",
        "text": "Durch echten Unternehmerwettbewerb"
      },
      {
        "letter": "C",
        "text": "Durch internationale Investitionen"
      },
      {
        "letter": "D",
        "text": "Durch Erbschaft"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Sándor Mészáros war 2000 bankrott. Nach Orbáns Machtübernahme erhielt er Millionen über direkte Staatsvergaben und EU-Gelder – sein Vermögen wuchs auf über 5 Milliarden Dollar.",
    "sourceLinks": [
      {
        "name": "FAZ",
        "url": "https://www.faz.net/aktuell/politik/ausland/korruption-in-ungarn-am-ende-profitiert-immer-einer-aus-dem-orban-clan-110788385.htm"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Oligarchen"
    ]
  },
  {
    "id": 32,
    "slug": "deutschland-nsu-terrorzelle-morde-rechtsextremisten",
    "question": "Wer war der \"Nationalsozialistischer Untergrund\" (NSU) in Deutschland?",
    "options": [
      {
        "letter": "A",
        "text": "Eine rechtsextremistische Terrorzelle, die 10 Menschen ermordete"
      },
      {
        "letter": "B",
        "text": "Eine friedliche Protestbewegung"
      },
      {
        "letter": "C",
        "text": "Eine kulturelle Vereinigung"
      },
      {
        "letter": "D",
        "text": "Eine politische Partei"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Die NSU war eine rechtsextremistische Terrorzelle, die 2000-2007 mindestens 10 Menschen ermordete, überwiegend mit Migrationshintergrund. Der Fall offenbarte massive Versäumnisse bei Verfassungsschutz und Polizei.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/Nationalsozialistischer_Untergrund"
      },
      {
        "name": "bpb",
        "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/343019/4-november-2011-aufdeckung-des-nsu/"
      }
    ],
    "tags": [
      "Deutschland",
      "NSU",
      "Terrorismus",
      "Rassismus"
    ]
  },
  {
    "id": 33,
    "slug": "deutschland-nsu-verfassungsschutz-versagen-vertuschung",
    "question": "Wie versagte der Verfassungsschutz bei der NSU-Überwachung?",
    "options": [
      {
        "letter": "A",
        "text": "Informanten in der Gruppe wurden nicht angemessen überwacht; Dokumente wurden später gelöscht"
      },
      {
        "letter": "B",
        "text": "Perfekte Überwachung und Prävention"
      },
      {
        "letter": "C",
        "text": "Rechtzeitige Warnung und Intervention"
      },
      {
        "letter": "D",
        "text": "Vollständige Transparenz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Der Verfassungsschutz hatte Informanten in der NSU, überwachte die Zelle aber nicht ausreichend. Nach der Aufdeckung wurden Dokumente vernichtet – ein systematisches Versagen bei der Terrorbekämpfung.",
    "sourceLinks": [
      {
        "name": "WDR",
        "url": "https://www1.wdr.de/archiv/am-rechten-rand/rechtsextremismus438.html"
      }
    ],
    "tags": [
      "Deutschland",
      "NSU",
      "2011",
      "Behördenversagen"
    ]
  },
  {
    "id": 34,
    "slug": "polen-atlas-hate-lgbtq-karte-aktivismus",
    "question": "Was ist der \"Atlas of Hate\" in Polen?",
    "options": [
      {
        "letter": "A",
        "text": "Digitale Karte von über 100 LGBTQ+-freien Zonen, erstellt durch Aktivisten"
      },
      {
        "letter": "B",
        "text": "Eine Tourismus-Webseite"
      },
      {
        "letter": "C",
        "text": "Ein geschichtliches Archiv"
      },
      {
        "letter": "D",
        "text": "Eine statistische Datenbank"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "\"Atlas of Hate\": Activist:innen dokumentieren über 100 LGBTQ+-freie Zonen in Polen und machen die Diskriminierung sichtbar – ein Drittel des Landes als \"frei von gleichen Rechten\".",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "LGBTQ+"
    ]
  },
  {
    "id": 35,
    "slug": "ungarn-richter-pensionierung-verfassungsgericht",
    "question": "Wie manipulierte Orbán die Justiz durch Pensionierungen?",
    "options": [
      {
        "letter": "A",
        "text": "400 Richter wurden in Ruhestand gezwungen; Verfassungsgericht wurde mit Orbán-freundlichen Richtern besetzt"
      },
      {
        "letter": "B",
        "text": "Reguläre Pensionierungen ohne Manipulation"
      },
      {
        "letter": "C",
        "text": "Transparente Besetzungsverfahren"
      },
      {
        "letter": "D",
        "text": "Unabhängige Justizreform"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Justiz-Manipulation: 400 Richter wurden gezwungen in Ruhestand zu gehen. Das Verfassungsgericht wurde mit Richtern besetzt, die Orbáns Agenda unterstützten – systematische Kontrolle.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2012",
      "Justizreform"
    ]
  },
  {
    "id": 36,
    "slug": "deutschland-afd-rechtsextremismus-correlation-gewalt",
    "question": "Gibt es einen Zusammenhang zwischen AfD-Wahlerfolg und rechter Gewalt?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, starke Korrelation zwischen AfD-Wahlerfolgen und Anstieg rechter Gewalt"
      },
      {
        "letter": "B",
        "text": "Nein, keine Korrelation"
      },
      {
        "letter": "C",
        "text": "Negative Korrelation (mehr AfD = weniger Gewalt)"
      },
      {
        "letter": "D",
        "text": "Unabhängige Entwicklung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024: Anstieg rechter Gewalt um 25% parallel zu AfD-Wahlerfolgen (30%+ in Umfragen) – AfD-Normalisierung von Extremismus führt zu Radicalisierung und Gewalt.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Rechte Gewalt"
    ]
  },
  {
    "id": 37,
    "slug": "ungarn-orban-medienkontrolle-oligarchen-presse",
    "question": "Wie schwächte Orbán die Pressefreiheit in Ungarn?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Kontrolle via Oligarchen, Werbeverbote gegen kritische Medien, Bestechung von Verlegern"
      },
      {
        "letter": "B",
        "text": "Förderung unabhängiger Medien"
      },
      {
        "letter": "C",
        "text": "Garantie von Pressefreiheit"
      },
      {
        "letter": "D",
        "text": "Schutz von Journalist:innen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Medien-Kontrolle: Oligarchenfreunde kaufen Medien, Werbeverbote gegen kritische Zeitungen, Bestechung von Verlegern, Lizenzgebühren als Kontrollinstrument.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Pressefreiheit"
    ]
  },
  {
    "id": 38,
    "slug": "polen-konservative-katholische-allianz-lgbtq",
    "question": "Wie vereinigte PiS konservative und katholische Kräfte gegen LGBTQ+?",
    "options": [
      {
        "letter": "A",
        "text": "Religion und Nationalismus als Kitt für ultrakatholische und rechtsradikale Bewegungen"
      },
      {
        "letter": "B",
        "text": "Säkulare und progressive Politik"
      },
      {
        "letter": "C",
        "text": "Unterstützung von Minderheitenrechten"
      },
      {
        "letter": "D",
        "text": "Befürwortung von Gleichstellung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS-Strategie: Religion (Katholizismus) und Nationalismus vereinigen ultrakatholische Fundamentalisten, Rechtsradikale und Rechtspopulisten gegen LGBTQ+-Rechte.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2015",
      "Homophobie"
    ]
  },
  {
    "id": 39,
    "slug": "deutschland-afd-menschenwuerde-verletzung-verfassungsschutz",
    "question": "Wie verletzt die AfD das Prinzip der Menschenwürde?",
    "options": [
      {
        "letter": "A",
        "text": "Positionen und Äußerungen verstoßen gegen Menschenwürde-Prinzip"
      },
      {
        "letter": "B",
        "text": "Respektiert Menschenwürde"
      },
      {
        "letter": "C",
        "text": "Förderung von Gleichberechtigung"
      },
      {
        "letter": "D",
        "text": "Humanistische Werte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Verfassungsschutz 2025: AfD-Positionen verstoßen gegen das Menschenwürde-Prinzip – fundamentale Verfassungsverletzung als Basis der Rechtsextremismus-Einstufung.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Menschenwürde"
    ]
  },
  {
    "id": 40,
    "slug": "ungarn-eu-kommission-von-der-leyen-kritik-kinderschutz",
    "question": "Was sagte EU-Kommissionspräsidentin von der Leyen zu Ungarns LGBTQ+-Gesetz?",
    "options": [
      {
        "letter": "A",
        "text": "\"Kinderschutz ist Vorwand, nutzt Recht auf Diskriminierung\""
      },
      {
        "letter": "B",
        "text": "\"Legitime Schutzmaßnahme\""
      },
      {
        "letter": "C",
        "text": "\"Unterstützen die Initiative\""
      },
      {
        "letter": "D",
        "text": "\"Keine Einwände\""
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Von der Leyen 2021: \"Kinderschutz-Vorwand wird genutzt, um Menschen wegen sexueller Orientierung zu diskriminieren\" – verdient Kürzung von EU-Mitteln.",
    "sourceLinks": [
      {
        "name": "Tagesschau",
        "url": "https://www.tagesschau.de/ausland/europa/ungarn-homosexualitaet-103.html"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2021",
      "EU"
    ]
  },
  {
    "id": 41,
    "slug": "polen-lgbtq-freie-zonen-aufhebung-april-2025",
    "question": "Wann wurden Polens LGBTQ+-freie Zonen aufgehoben?",
    "options": [
      {
        "letter": "A",
        "text": "April 2025 durch rechtlichen, finanziellen und gesellschaftlichen Druck"
      },
      {
        "letter": "B",
        "text": "2019 sofort nach Proklamation"
      },
      {
        "letter": "C",
        "text": "Noch nicht aufgehoben"
      },
      {
        "letter": "D",
        "text": "Gesetzlich bindend"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "April 2025: Letzte LGBTQ+-freie Zonen aufgehoben nach jahrelangem Druck durch EU-Sanktionen, Geldstrafen und Protest – ein wichtiger Sieg gegen institutionalisierte Diskriminierung.",
    "sourceLinks": [
      {
        "name": "Wikipedia",
        "url": "https://de.wikipedia.org/wiki/LGBT-ideologiefreie_Zone"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2025",
      "LGBTQ+"
    ]
  },
  {
    "id": 42,
    "slug": "ungarn-orban-eu-artikel-7-verfahren",
    "question": "Warum läuft gegen Ungarn ein Artikel-7-Verfahren der EU?",
    "options": [
      {
        "letter": "A",
        "text": "Verdacht auf Gefährdung der Justiz-Unabhängigkeit, Medien und Korruptionsförderung"
      },
      {
        "letter": "B",
        "text": "Finanzielle Missstände"
      },
      {
        "letter": "C",
        "text": "Verwaltungs-Ineffizienz"
      },
      {
        "letter": "D",
        "text": "Technik-Fragen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Artikel-7-Verfahren gegen Ungarn seit Jahren – Grund: Gefährdung der Unabhängigkeit der Justiz, Medien und systematische Korruption = Verstoß gegen EU-Grundwerte.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU"
    ]
  },
  {
    "id": 43,
    "slug": "polen-stopp-lgbt-initiative-verbot-pride",
    "question": "Was fordert Polens \"Stopp LGBT\" Initiative?",
    "options": [
      {
        "letter": "A",
        "text": "Verbot von Pride-Paraden und Werbung für LGBTQ+-Forderungen"
      },
      {
        "letter": "B",
        "text": "Unterstützung von Pride-Events"
      },
      {
        "letter": "C",
        "text": "Gleichstellungsgesetze"
      },
      {
        "letter": "D",
        "text": "Antidiskriminierungs-Maßnahmen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "\"Stopp LGBT\" Initiative (Stiftung Leben und Familie): Fordert Verbot von Pride-Paraden und Werbung für LGBTQ+-Rechte – geleitet von Abtreibungsgegnerin Kaja Godek.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2015",
      "Homophobie"
    ]
  },
  {
    "id": 44,
    "slug": "deutschland-afd-muslime-nicht-gleichwertig",
    "question": "Wie sieht die AfD deutsche Muslime?",
    "options": [
      {
        "letter": "A",
        "text": "Als nicht-gleichwertige Angehörige des ethnisch definierten Volkes"
      },
      {
        "letter": "B",
        "text": "Als vollwertige deutsche Bürger"
      },
      {
        "letter": "C",
        "text": "Mit gleichem Respekt"
      },
      {
        "letter": "D",
        "text": "Als zu integrierende Bevölkerung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Verfassungsschutz 2025: AfD sieht deutsche Staatsangehörige aus muslimischen Ländern als nicht-gleichwertig – fundamentale Verletzung des Gleichheitsprinzips.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Islamophobie"
    ]
  },
  {
    "id": 45,
    "slug": "ungarn-orban-eu-praesident-2024-kritik",
    "question": "Warum kritisierte die EU Orbáns Übernahme der EU-Präsidentschaft 2024?",
    "options": [
      {
        "letter": "A",
        "text": "\"Ein Land ohne Demokratie kann nicht die EU führen\""
      },
      {
        "letter": "B",
        "text": "Normale Rotation"
      },
      {
        "letter": "C",
        "text": "Technische Bedenken"
      },
      {
        "letter": "D",
        "text": "Keine Kritik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024: Orbán übernahm EU-Ratsvorsitz. EU-Parlamentarier:innen kritisierten heftig: \"Ein undemokratisches Land kann nicht die Europäische Union führen\" – Demokratie-Defizit zu gravierend.",
    "sourceLinks": [
      {
        "name": "Tagesschau",
        "url": "https://www.tagesschau.de/ausland/europa/eu-haushalt-ausschuss-ungarn-100.html"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU"
    ]
  },
  {
    "id": 46,
    "slug": "polen-pis-geschlechtsidentitaet-genderideologie-schulen",
    "question": "Wie bekämpft Polens PiS \"Gender-Ideologie\" in Schulen?",
    "options": [
      {
        "letter": "A",
        "text": "Ablehnung von modernem Sexualkundeunterricht und Geschlechtsidentität"
      },
      {
        "letter": "B",
        "text": "Förderung umfassender Sexualkunde"
      },
      {
        "letter": "C",
        "text": "WHO-Richtlinien befolgen"
      },
      {
        "letter": "D",
        "text": "Inklusive Bildung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS-Politik: Lehnt modernen Sexualkundeunterricht und Geschlechtsidentität-Unterricht ab – nutzt \"Gender-Ideologie\"-Kampagne zur Polarisierung gegen progressive Bildung.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2015",
      "Bildung"
    ]
  },
  {
    "id": 47,
    "slug": "deutschland-afd-verbotsgesetz-moeglichkeit-2024",
    "question": "Wird in Deutschland ein AfD-Verbot diskutiert?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, Verbotsverfahren wegen verfassungsfeindlicher Bestrebungen erwogen"
      },
      {
        "letter": "B",
        "text": "Nein, keine Diskussion"
      },
      {
        "letter": "C",
        "text": "Nur akademisch"
      },
      {
        "letter": "D",
        "text": "Von allen Parteien abgelehnt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024-2025: CDU und SPD diskutieren ernsthaft AfD-Verbotsforderung – Rechtsextremismus-Einstufung macht Verbotsverfahren nach Artikel 21 GG denkbar.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Verbotsverfahren"
    ]
  },
  {
    "id": 48,
    "slug": "ungarn-zivilgesellschaft-unterdruckung-versammlungsfreiheit",
    "question": "Wie unterdrückt Orbán Versammlungs- und Vereinigungsfreiheit?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Gesetze, die kritische Versammlungen verbieten und NGOs kriminalisieren"
      },
      {
        "letter": "B",
        "text": "Volle Unterstützung für Versammlungsfreiheit"
      },
      {
        "letter": "C",
        "text": "Garantie von Vereinigungsrechten"
      },
      {
        "letter": "D",
        "text": "Förderung von Bürgerbeteiligung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Regime sperrt kritische Demonstrationen durch Gesetze, kriminalisiert NGOs und nutzt Polizeipräsenz zur Abschreckung – systematische Unterdrückung der Versammlungsfreiheit.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Grundrechte"
    ]
  },
  {
    "id": 49,
    "slug": "polen-justizreform-pis-unabhaengigkeit-gerichtshof",
    "question": "Wie griff die PiS die Unabhängigkeit der polnischen Justiz an?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Justizreformen, die Justizminister Kontrolle über Richterbeförderungen gaben"
      },
      {
        "letter": "B",
        "text": "Volle Justiz-Unabhängigkeit gewährleistet"
      },
      {
        "letter": "C",
        "text": "Richter wurden autonom gewählt"
      },
      {
        "letter": "D",
        "text": "EU-Standards befolgt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS-Justizreformen: Justizminister erhielt Kontrolle über Richter-Ernennungen und Beförderungen. EU-Gerichtshof verurteilte dies als Verstoß gegen Unabhängigkeit.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "Justiz"
    ]
  },
  {
    "id": 50,
    "slug": "deutschland-antisemitische-gewalt-anstieg-2024",
    "question": "Wie entwickelte sich antisemitische Gewalt in Deutschland 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Signifikanter Anstieg, befeuert durch GAZA-Konflikt und Rechtsextremismus"
      },
      {
        "letter": "B",
        "text": "Rückgang um 30%"
      },
      {
        "letter": "C",
        "text": "Stabiler Verlauf"
      },
      {
        "letter": "D",
        "text": "Vereinzelte Vorfälle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024: Schwerer Anstieg antisemitischer Gewalt in Deutschland, befeuert durch Gaza-Konflikt und rechtsextremistische Mobilisierung – besorgniserregender Trend.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2024",
      "Antisemitismus",
      "Gewalt"
    ]
  },
  {
    "id": 51,
    "slug": "ungarn-orban-minderheitsrechte-verfassungsschutz-unterminierung",
    "question": "Wie untergräbt Orbán Minderheitsrechte in Ungarn?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Verfassungsänderungen, die Minderheiten-Schutz abschwächen und Diskriminierung ermöglichen"
      },
      {
        "letter": "B",
        "text": "Durch Förderung von Minderheits-Integration"
      },
      {
        "letter": "C",
        "text": "Durch Verbot von Diskriminierung"
      },
      {
        "letter": "D",
        "text": "Durch Schutz von Minderheitssprachen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Verfassungsänderungen schwächen Minderheits-Schutzbestimmungen ab und ermöglichen strukturelle Diskriminierung von Roma, Juden, Nachbarn und LGBTQ+-Menschen.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Minderheitsrechte"
    ]
  },
  {
    "id": 52,
    "slug": "deutschland-afd-demokratiefeindliche-rhetorik-waehler",
    "question": "Was ist die AfD-Rhetorik zur Demokratie?",
    "options": [
      {
        "letter": "A",
        "text": "Ablehnung von parlamentarischer Kontrolle und \"Volk gegen Elite\" Populismus"
      },
      {
        "letter": "B",
        "text": "Unterstützung für Gewaltenteilung"
      },
      {
        "letter": "C",
        "text": "Förderung von Konsensus"
      },
      {
        "letter": "D",
        "text": "Respekt vor Institutionen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Rhetorik: Fundamentale Kritik an Gewaltenteilung, \"Volk gegen Elite\" Populismus, Verachtung für Parlamente – eine Strategie zur Delegitimation demokratischer Strukturen.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Demokratiefeindlichkeit"
    ]
  },
  {
    "id": 53,
    "slug": "polen-frauenbewegung-schwarzer-protest-abtreibungsverbot",
    "question": "Wie protestierten polnische Frauen gegen das Abtreibungsverbot?",
    "options": [
      {
        "letter": "A",
        "text": "Mit Streiks und Massenprotesten (\"Schwarzer Protest\"), Gründung von Frauenrechtsgruppen"
      },
      {
        "letter": "B",
        "text": "Sie akzeptierten das Verbot ohne Widerstand"
      },
      {
        "letter": "C",
        "text": "Keine Proteste"
      },
      {
        "letter": "D",
        "text": "Unterstützung für das Verbot"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Polnische Frauenbewegung startete Massenproteste (\"Schwarzer Protest\"), Streiks und Demonstrationen gegen das Abtreibungsverbot. Die Kampagne \"Ciocia Czarna\" (Black Aunt) unterstützt Frauen, die ins Ausland reisen.",
    "sourceLinks": [
      {
        "name": "Amnesty Austria",
        "url": "https://www.amnesty.at/ueber-amnesty/aktivist-innen/netzwerk-frauenrechte/news-events/polen-ein-jahr-nach-dem-frauenverachtenden"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2021",
      "Frauenrechte"
    ]
  },
  {
    "id": 54,
    "slug": "ungarn-presse-ranking-europa-pressefreiheit",
    "question": "Wie bewertet der Press Freedom Index Ungarns Pressefreiheit?",
    "options": [
      {
        "letter": "A",
        "text": "Ungarns Rang sank massiv, jetzt unter 100 von 180 Ländern (\"nicht frei\")"
      },
      {
        "letter": "B",
        "text": "Oberste Rankings"
      },
      {
        "letter": "C",
        "text": "Leicht verbessert"
      },
      {
        "letter": "D",
        "text": "\"Frei\" nach internationalen Standards"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Press Freedom Index: Ungarns Pressefreiheit-Rang sank unter Orbán massiv. Das Land fiel aus der \"teilweise frei\" Kategorie in \"nicht frei\" ab – dramatischer Abstieg.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Pressefreiheit"
    ]
  },
  {
    "id": 55,
    "slug": "deutschland-rechtsextremisten-sicherheitskraefte-infiltration",
    "question": "Wie viele Rechtsextremisten arbeiten in deutschen Sicherheitskräften?",
    "options": [
      {
        "letter": "A",
        "text": "Hunderte, mit dokumentierten Fällen bei Polizei, Militär und Verfassungsschutz"
      },
      {
        "letter": "B",
        "text": "Keine bekannten Fälle"
      },
      {
        "letter": "C",
        "text": "Vereinzelte Ausnahmen"
      },
      {
        "letter": "D",
        "text": "Vollständig ausgesiebt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Dokumentierte Fälle von Rechtsextremisten bei Polizei, Bundeswehr und Verfassungsschutz – ein systemisches Problem bei der Überprüfung von Sicherheitskräften.",
    "sourceLinks": [
      {
        "name": "Bundestag",
        "url": "https://www.bundestag.de/dokumente/textarchiv/2022/kw50-de-aktuelle-stunde-reichsbuerger-926426"
      }
    ],
    "tags": [
      "Deutschland",
      "2024",
      "Rechtsextremismus",
      "Sicherheit"
    ]
  },
  {
    "id": 56,
    "slug": "polen-pis-waehler-dezember-2024-wahl",
    "question": "Wie reagierten Polinnen und Polen bei der Wahl 2024 auf PiS-Regierung?",
    "options": [
      {
        "letter": "A",
        "text": "Massiver Wahlerfolg für Oppositionsparteien; PiS verlor Mehrheit"
      },
      {
        "letter": "B",
        "text": "PiS erhielt 60% der Stimmen"
      },
      {
        "letter": "C",
        "text": "Keine Veränderung"
      },
      {
        "letter": "D",
        "text": "Erhöhte PiS-Unterstützung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Oktober 2023: Polinnen und Polen wählten ein neues Parlament. Die Opposition unter Donald Tusk besiegte die PiS-Regierung deutlich und übernahm die Regierung 2024.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2024",
      "Wahlen"
    ]
  },
  {
    "id": 57,
    "slug": "ungarn-eu-rechtsstaatlichkeit-bericht-2024",
    "question": "Was dokumentiert der EU-Bericht über Ungarns Rechtsstaatlichkeit 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Schwerwiegende Defizite bei Justiz-Unabhängigkeit, Korruptionsbekämpfung und Medienfreiheit"
      },
      {
        "letter": "B",
        "text": "Positive Fortschritte"
      },
      {
        "letter": "C",
        "text": "Stabiler Status quo"
      },
      {
        "letter": "D",
        "text": "Internationale Anerkennung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "EU-Bericht 2024: Ungarn zeigt schwerwiegende Mängel bei Justiz-Unabhängigkeit, systematischer Korruptionbekämpfung und Medienpluralismus – Rechtsstaatlichkeit unter erheblichem Druck.",
    "sourceLinks": [
      {
        "name": "Tagesschau",
        "url": "https://www.tagesschau.de/ausland/europa/ungarn-eu-bericht-rechtsstaatlichkeit"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Rechtsstaat"
    ]
  },
  {
    "id": 58,
    "slug": "deutschland-afd-parallele-strukturen-gesellschaft",
    "question": "Welche \"parallelen Strukturen\" hat die AfD aufgebaut?",
    "options": [
      {
        "letter": "A",
        "text": "Schüler:innen-, Arbeiter:innen-, Jugendorganisationen zur Organisierung von Basis"
      },
      {
        "letter": "B",
        "text": "Reine Wahlorganisation"
      },
      {
        "letter": "C",
        "text": "Keine Strukturen"
      },
      {
        "letter": "D",
        "text": "Nur Medienarbeit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD hat ein Netzwerk von Basis-Organisationen wie Jungen Alternative (JA), AfD Arbeiterorganisationen und Schüler:innen-Gruppen aufgebaut – Anzeichen für Strukturaufbau für längerfristige Infiltration.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Organisation"
    ]
  },
  {
    "id": 59,
    "slug": "polen-justizminister-eu-sanktionen-kompensation-diskriminierung",
    "question": "Wie reagierte Polens Justizminister auf EU-Sanktionen wegen LGBTQ+-Diskriminierung?",
    "options": [
      {
        "letter": "A",
        "text": "Zahlte aus Staatsbudget doppelt der EU-Kürzung an LGBTQ+-freie Zonen"
      },
      {
        "letter": "B",
        "text": "Respektierte EU-Vorgaben"
      },
      {
        "letter": "C",
        "text": "Reformierte Diskriminierung"
      },
      {
        "letter": "D",
        "text": "Verhandelte mit EU-Kommission"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "August 2020: Justizminister Ziobro zahlte aus Staatsbudget doppelt der EU-Kürzung an LGBTQ+-freie Zonen – staatliche Subventionierung von Diskriminierung als Reaktion auf EU-Sanktion.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2020",
      "EU"
    ]
  },
  {
    "id": 60,
    "slug": "ungarn-orban-migranten-angst-wahlkampf-2022",
    "question": "Wie nutzte Orbán Migration im Wahlkampf 2022?",
    "options": [
      {
        "letter": "A",
        "text": "Mit Angst-Kampagne gegen Migranten; \"Soros und Migration bedrohen Ungarn\""
      },
      {
        "letter": "B",
        "text": "Mit Integrationsprogrammen"
      },
      {
        "letter": "C",
        "text": "Mit offenen Grenzen"
      },
      {
        "letter": "D",
        "text": "Mit Unterstützung für Flüchtlinge"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Wahlkampf 2022: Zentrale Angst-Kampagne gegen Migranten und \"Soros-Invasion\" – Migrationsfurcht als Mobilisierungsmittel trotz geringer Migration nach Ungarn.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2022",
      "Wahlkampf"
    ]
  },
  {
    "id": 61,
    "slug": "deutschland-rechtsradikale-demo-dresden-legida-2015",
    "question": "Was waren die LEGIDA-Demonstrationen in Dresden 2014-2016?",
    "options": [
      {
        "letter": "A",
        "text": "Rechtsradikale Großdemonstrationen gegen Asylbewerber und Islamisierung"
      },
      {
        "letter": "B",
        "text": "Friedliche Integrations-Kampagnen"
      },
      {
        "letter": "C",
        "text": "Kulturelle Austausch-Veranstaltungen"
      },
      {
        "letter": "D",
        "text": "Religionstoleranz-Märsche"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "LEGIDA (Legale Europäer gegen Islamisierung des Abendlandes): Rechtsradikale Massenproteste 2014-2016 in Dresden gegen Asylbewerber und \"Islamisierung\". Eine Vorform der AfD-Mobilisierung.",
    "sourceLinks": [
      {
        "name": "bpb",
        "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/308619/10-jahre-fidesz-regierung-lage-der-demokratie-in-ungarn/"
      }
    ],
    "tags": [
      "Deutschland",
      "2015",
      "Rechtsradikalismus",
      "Protest"
    ]
  },
  {
    "id": 62,
    "slug": "ungarn-roma-diskriminierung-bildung-arbeitsmarkt",
    "question": "Wie zeigt sich Diskriminierung von Roma in Ungarn?",
    "options": [
      {
        "letter": "A",
        "text": "Segregation in Schulen, Arbeitsmarkt-Ausschluss, Wohnungs-Diskriminierung unter Orbán"
      },
      {
        "letter": "B",
        "text": "Volle Gleichberechtigung"
      },
      {
        "letter": "C",
        "text": "Spezielle Integrationsprogramme"
      },
      {
        "letter": "D",
        "text": "Positive Diskriminierung zugunsten Roma"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Roma-Situation in Ungarn: Strukturelle Diskriminierung bei Bildung, Arbeitsmarkt und Wohnraum hat sich unter Orbán verschärft. Ghetto-ähnliche Lebensbedingungen in vielen Gemeinden.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Rassismus"
    ]
  },
  {
    "id": 63,
    "slug": "deutschland-afd-netzwerk-neonazi-\"fluegel\"-kalbitz",
    "question": "Was ist der rechtsextreme \"Flügel\" der AfD?",
    "options": [
      {
        "letter": "A",
        "text": "Eine interne Netzwerk mit offener NS-Verehrung, geleitet von Björn Höcke"
      },
      {
        "letter": "B",
        "text": "Ein moderater Flügel"
      },
      {
        "letter": "C",
        "text": "Ein pro-demokratisches Lager"
      },
      {
        "letter": "D",
        "text": "Ein liberales Netzwerk"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Der \"Flügel\" (auch als Höcke-Kreis bekannt): Ein interner AfD-Netzwerk mit offen nationalistischen und NS-referenzierenden Positionen. Nach Gerichtsentscheid von AfD aufgelöst, aber Mitglieder aktiv.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2023",
      "Neonazismus"
    ]
  },
  {
    "id": 64,
    "slug": "polen-justiz-justizkommission-richter-entfernung",
    "question": "Wie baute PiS Kontrolle über Richterbeamte auf?",
    "options": [
      {
        "letter": "A",
        "text": "Durch neue Aufsichtskommission, die unabhängige Richter:innen absetzten konnte"
      },
      {
        "letter": "B",
        "text": "Volle Unabhängigkeit der Richter:innen"
      },
      {
        "letter": "C",
        "text": "Internationale Aufsicht"
      },
      {
        "letter": "D",
        "text": "Wissenschaftliche Beiräte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS schuf neue Justizkommissionen und -strukturen, die es der Partei ermöglichten, Richter:innen unter Druck zu setzen oder abzusetzen. Der EuGH verurteilte diese Praxis.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2018",
      "Justizreform"
    ]
  },
  {
    "id": 65,
    "slug": "deutschland-afd-delegitimation-demokratischer-institutionen",
    "question": "Wie delegitimiert die AfD demokratische Institutionen?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Angriffe auf Medien, Justiz, Polizei und Verwaltung als \"Systemzersetzung\""
      },
      {
        "letter": "B",
        "text": "Durch Unterstützung der Gewaltenteilung"
      },
      {
        "letter": "C",
        "text": "Durch Vertrauen in Institutionen"
      },
      {
        "letter": "D",
        "text": "Durch Kooperation mit Behörden"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Strategie: Systematische Delegitimation von Medien (\"Lügenpresse\"), Justiz, Polizei und Verwaltung – ein Versuch, Vertrauen in demokratische Institutionen zu unterminieren.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Antidemokratie"
    ]
  },
  {
    "id": 66,
    "slug": "ungarn-dunkle-gelder-oligarchen-stiftungen-eu-betrug",
    "question": "Wie fließen Bestechungsgelder in Ungarns Korruptionssystem?",
    "options": [
      {
        "letter": "A",
        "text": "Über Offshore-Stiftungen und Oligarchen-Konstrukte, die EU-Gelder umlaufen"
      },
      {
        "letter": "B",
        "text": "Transparente öffentliche Zahlungen"
      },
      {
        "letter": "C",
        "text": "Legale Spenden"
      },
      {
        "letter": "D",
        "text": "Internationale Audit-Kontrollierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Investigationen zeigen: Ungarns Korruption funktioniert über Offshore-Strukturen, Stiftungen und Oligarchen-Netzwerke. EU-Gelder fließen in fragwürdige Projekte für enge Vertraute Orbáns.",
    "sourceLinks": [
      {
        "name": "FAZ",
        "url": "https://www.faz.net/aktuell/politik/ausland/korruption-in-ungarn-am-ende-profitiert-immer-einer-aus-dem-orban-clan-110788385.htm"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Korruption"
    ]
  },
  {
    "id": 67,
    "slug": "polen-abtreibung-frauen-illegale-grenzueberschreitung",
    "question": "Was mussten polnische Frauen nach dem Abtreibungsverbot tun?",
    "options": [
      {
        "letter": "A",
        "text": "Ins Ausland reisen für legale Abtreibungen oder illegale Ärzte nutzen"
      },
      {
        "letter": "B",
        "text": "Staatliche Unterstützung erhalten"
      },
      {
        "letter": "C",
        "text": "Kostenlose Verhütung bereitgestellt"
      },
      {
        "letter": "D",
        "text": "Vollständige Sicherheit im Land"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach Inkrafttreten: Tausende polnische Frauen reisten ins Ausland (Deutschland, Niederlande) oder nutzten illegale Mittel. \"Ciocia Czarna\" (Black Aunt) half Frauen, Grenzen zu überqueren.",
    "sourceLinks": [
      {
        "name": "Amnesty Austria",
        "url": "https://www.amnesty.at/ueber-amnesty/aktivist-innen/netzwerk-frauenrechte/news-events/polen-ein-jahr-nach-dem-frauenverachtenden"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2021",
      "Frauenrechte"
    ]
  },
  {
    "id": 68,
    "slug": "ungarn-fluechtlinge-gewalt-migranten-grenze",
    "question": "Wie behandelt Ungarn Flüchtlinge und Migranten an der Grenze?",
    "options": [
      {
        "letter": "A",
        "text": "Mit illegaler Gewalt, Push-Backs, Menschenrechtsverletzungen auf Orbáns Befehl"
      },
      {
        "letter": "B",
        "text": "Mit humanitärem Empfang"
      },
      {
        "letter": "C",
        "text": "Mit legalen Asylverfahren"
      },
      {
        "letter": "D",
        "text": "Mit internationaler Unterstützung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ungarn nutzt Gewalt und Push-Backs gegen Migranten und Flüchtlinge an der Grenze – mehrfach von EU-Behörden und NGOs kritisiert. Fälle von Misshandlung sind dokumentiert.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Menschenrechte"
    ]
  },
  {
    "id": 69,
    "slug": "deutschland-afd-desinformation-fake-news-social-media",
    "question": "Wie verbreitet die AfD Desinformation in sozialen Medien?",
    "options": [
      {
        "letter": "A",
        "text": "Systematisch: falsche Zahlen zu Kriminalität, Zuwanderung, COVID; koordinierte Kampagnen"
      },
      {
        "letter": "B",
        "text": "Faktenchecks durchführend"
      },
      {
        "letter": "C",
        "text": "Vertrauenswürdige Quellen nutzend"
      },
      {
        "letter": "D",
        "text": "Wissenschaftliche Fakten verbreitend"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Fact-Checker dokumentieren: AfD verbreitet systematisch falsche Zahlen zu Kriminalität, Asyl und COVID. Koordinierte Social-Media-Kampagnen mit Bots verstärken Desinformation.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Desinformation"
    ]
  },
  {
    "id": 70,
    "slug": "ungarn-soros-kampagne-antisemitische-hetze-fidesz",
    "question": "Wie nutzt Fidesz Soros-Kampagnen für antisemitische Hetze?",
    "options": [
      {
        "letter": "A",
        "text": "Mit antisemitischen Karikaturen und Verschwörungserzählungen gegen George Soros"
      },
      {
        "letter": "B",
        "text": "Mit faktischen Kritiken"
      },
      {
        "letter": "C",
        "text": "Ohne antisemitische Elemente"
      },
      {
        "letter": "D",
        "text": "Mit Unterstützung für Juden"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Fidesz-Kampagnen gegen Soros verwenden klassische antisemitische Tropen – verschwörerische Narrativen, Karikaturen im Stil der NS-Propaganda. Ein Versuch, antisemitische Sentimente zu schüren.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Antisemitismus"
    ]
  },
  {
    "id": 71,
    "slug": "polen-frauen-todesfaelle-abtreibungsverbot-medizinische-notwendigkeit",
    "question": "Wie wirkt sich Polens Abtreibungsverbot auf Frauengesundheit aus?",
    "options": [
      {
        "letter": "A",
        "text": "Todesfälle durch medizinische Ablehnung; Frauen mit Komplikationen warten, bis es kritisch wird"
      },
      {
        "letter": "B",
        "text": "Verbesserte Gesundheitsversorgung"
      },
      {
        "letter": "C",
        "text": "Keine Auswirkungen"
      },
      {
        "letter": "D",
        "text": "Gesteigerte Frauengesundheit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach dem Verbot 2021: Mehrere dokumentierte Fälle von Frauen, die starben, weil Ärzte Abtreibungen nicht durchführten. Ein Beispiel ist Izabela Dąbrowska, die starb, weil notwendige Behandlung verweigert wurde.",
    "sourceLinks": [
      {
        "name": "Amnesty Austria",
        "url": "https://www.amnesty.at/ueber-amnesty/aktivist-innen/netzwerk-frauenrechte/news-events/polen-ein-jahr-nach-dem-frauenverachtenden"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2021",
      "Frauenrechte"
    ]
  },
  {
    "id": 72,
    "slug": "deutschland-afd-putin-sympathie-ukrainekrieg",
    "question": "Wie äußert sich AfD-Sympathie für Putin während des Ukraine-Kriegs?",
    "options": [
      {
        "letter": "A",
        "text": "Mit Kritik an Sanktionen gegen Russland, Skepsis gegenüber Ukraine-Hilfe"
      },
      {
        "letter": "B",
        "text": "Mit voller Ukraine-Unterstützung"
      },
      {
        "letter": "C",
        "text": "Mit neutralen Positionen"
      },
      {
        "letter": "D",
        "text": "Mit Kritik an Putin"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Positionen: Kritik an Russland-Sanktionen, Skeptizismus gegenüber Ukraine-Unterstützung, Lob für Putin. Manche AfD-Politiker reisten zu Putins Gala 2024.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Außenpolitik"
    ]
  },
  {
    "id": 73,
    "slug": "ungarn-media-ownership-oligarchen-fidesz-propaganda",
    "question": "Wem gehören die Medien in Ungarn unter Orbán?",
    "options": [
      {
        "letter": "A",
        "text": "Mehrheit in Orbán-freundliche Oligarchen-Hände; kritische Medien sind Ausnahmen"
      },
      {
        "letter": "B",
        "text": "Unabhängigen Medien-Konzernen"
      },
      {
        "letter": "C",
        "text": "Staatlichen öffentlichen Anstalten"
      },
      {
        "letter": "D",
        "text": "Internationalen Medien-Conglomeraten"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Unter Orbán: Oligarchenfreunde kauften Medien. Central European Press Holding (Teil von Orbán-Netzwerk) kontrolliert große Teile der Presse. Kritische Medien sind reduziert.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Medienmonopol"
    ]
  },
  {
    "id": 74,
    "slug": "deutschland-rassistische-morde-terrorismus-2020-2024",
    "question": "Wie viele rassistisch motivierte Morde gab es in Deutschland 2020-2024?",
    "options": [
      {
        "letter": "A",
        "text": "Mindestens 30, von Rechtsextremisten begannen"
      },
      {
        "letter": "B",
        "text": "Keine"
      },
      {
        "letter": "C",
        "text": "Einzelne Vorfälle"
      },
      {
        "letter": "D",
        "text": "Rückgang"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2020-2024: Mindestens 30+ rassistisch motivierte Morde in Deutschland dokumentiert. Bekannte Fälle: Hanau (10 Tote 2020), mehrere einzelne Morde durch rechtsextreme Täter.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2024",
      "Terrorismus",
      "Rassismus"
    ]
  },
  {
    "id": 75,
    "slug": "ungarn-eu-milliarden-kuehlschrank-orbans-privatisierung",
    "question": "Wie nutzte Orbán EU-Gelder für fragwürdige Projekte?",
    "options": [
      {
        "letter": "A",
        "text": "Millionen für \"Infrastruktur-Projekte\" wie teure Kühlschränke für Schulen via Oligarchen"
      },
      {
        "letter": "B",
        "text": "Transparente Infrastruktur-Investitionen"
      },
      {
        "letter": "C",
        "text": "Legitime öffentliche Beschaffung"
      },
      {
        "letter": "D",
        "text": "Unabhängige Kontrolle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Investigationen zeigen: EU-Gelder flossen in absurde Projekte (z.B. überteuerte \"Kühlschränke\" für Schulen) über Oligarchen-Firmen – massiver Geldverschwendung und Bereicherung.",
    "sourceLinks": [
      {
        "name": "FAZ",
        "url": "https://www.faz.net/aktuell/politik/ausland/korruption-in-ungarn-am-ende-profitiert-immer-einer-aus-dem-orban-clan-110788385.htm"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU-Betrug"
    ]
  },
  {
    "id": 76,
    "slug": "polen-frauen-gesundheit-krise-abtreibungsverbot-faelle",
    "question": "Welche konkrete Folge hatte Polens Abtreibungsverbot für Frauen?",
    "options": [
      {
        "letter": "A",
        "text": "Fall Izabela Dąbrowska: starb, weil Abtreibung verweigert wurde, obwohl medizinisch notwendig"
      },
      {
        "letter": "B",
        "text": "Nur positive Folgen"
      },
      {
        "letter": "C",
        "text": "Keine Auswirkungen"
      },
      {
        "letter": "D",
        "text": "Verbesserte Versorgung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Izabela Dąbrowska (24) starb an Sepsis, weil Ärzte eine medizinisch notwendige Abtreibung verweigerten – Unglück, das das Abtreibungsverbot kritisierte und Massenprostest auslöste.",
    "sourceLinks": [
      {
        "name": "Amnesty Austria",
        "url": "https://www.amnesty.at/ueber-amnesty/aktivist-innen/netzwerk-frauenrechte/news-events/polen-ein-jahr-nach-dem-frauenverachtenden"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2021",
      "Frauenrechte"
    ]
  },
  {
    "id": 77,
    "slug": "deutschland-afd-schulz-moeglichkeit-deportationen-diskurs",
    "question": "Was diskutiert die AfD öffentlich über Massendeportationen?",
    "options": [
      {
        "letter": "A",
        "text": "Millionen Menschen ohne Integrationschancen sollten deportiert werden"
      },
      {
        "letter": "B",
        "text": "Integration und Gleichstellung"
      },
      {
        "letter": "C",
        "text": "Offene Grenzen"
      },
      {
        "letter": "D",
        "text": "Freiwillige Rückkehr"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Diskurs: Offen über Massendeportationen von Millionen Menschen sprechen, oft ohne legale Grundlage. Ein Diskurs, der an Nationalsozialismus erinnert.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Deportation"
    ]
  },
  {
    "id": 78,
    "slug": "ungarn-finanzielle-unabhaengigkeit-eu-haengt-ab",
    "question": "Wie abhängig ist Ungarn von EU-Mitteln?",
    "options": [
      {
        "letter": "A",
        "text": "Ungarn erhält über 4% des Staatsbudgets aus EU-Mitteln; blockierte Gelder sind kritisch"
      },
      {
        "letter": "B",
        "text": "Völlig unabhängig"
      },
      {
        "letter": "C",
        "text": "Marginale Abhängigkeit"
      },
      {
        "letter": "D",
        "text": "EU zahlt umgekehrt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Ungarn: Etwa 4-5% des Staatsbudgets stammen aus EU-Mitteln. Blockierte Zahlungen (40 Milliarden Euro) sind kritisch für Orbáns Haushalt – ein wesentlicher Druck der EU.",
    "sourceLinks": [
      {
        "name": "Tagesschau",
        "url": "https://www.tagesschau.de/ausland/europa/eu-haushalt-ausschuss-ungarn-100.html"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU-Abhängigkeit"
    ]
  },
  {
    "id": 79,
    "slug": "deutschland-massnahmen-verfassungsfeindliche-partei-verbot-2024",
    "question": "Welche Maßnahmen sind für AfD-Verbot juristisch notwendig?",
    "options": [
      {
        "letter": "A",
        "text": "Antrag beim Bundesverfassungsgericht nach Artikel 21 GG; hohe Hürde"
      },
      {
        "letter": "B",
        "text": "Parlamentsbeschluss"
      },
      {
        "letter": "C",
        "text": "Regierungs-Dekret"
      },
      {
        "letter": "D",
        "text": "Ohne Verfahren möglich"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Verbotsverfahren nach Artikel 21 GG: Müsste vom Bundestag oder Bundesrat beim Bundesverfassungsgericht eingereicht werden. Hohe Beweishürde für \"verfassungsfeindliche Bestrebungen\".",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2025",
      "Verbotsverfahren"
    ]
  },
  {
    "id": 80,
    "slug": "ungarn-fidesz-opposition-wahlbehinderung-unfaire-bedingungen",
    "question": "Wie behindert Fidesz die Opposition bei Wahlen?",
    "options": [
      {
        "letter": "A",
        "text": "Durch unfaire Wahlgeometrie, Gerrymandering und Medien-Kontrolle"
      },
      {
        "letter": "B",
        "text": "Mit fairer Kampagne"
      },
      {
        "letter": "C",
        "text": "Mit gleicher Medienzeit"
      },
      {
        "letter": "D",
        "text": "Mit transparenter Wahlleitung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Fidesz sichert Macht durch systematische Wahlmanipulation: Gerrymander-Wahlkreise, massive Medien-Kontrolle (90%+ TV-Zeit für Fidesz), unfaire Spielregeln trotz der Wahlverluste.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Wahlbetrug"
    ]
  },
  {
    "id": 81,
    "slug": "polen-pis-zweite-kammer-macht-verschiebung",
    "question": "Wie versuchte PiS, die Macht in der Zweiten Kammer zu sichern?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Justizreformen und neue Normen; Opposition gewann aber 2023"
      },
      {
        "letter": "B",
        "text": "Mit fairer Machtteilung"
      },
      {
        "letter": "C",
        "text": "Mit Respekt vor Gewaltenteilung"
      },
      {
        "letter": "D",
        "text": "Durch progressive Reformen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS versuchte, Macht durch Justizreformen und Verfassungsänderungen zu sichern. Aber 2023: Opposition besiegte PiS deutlich bei Wahlen – übernahm Regierung unter Donald Tusk.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2023",
      "Wahlen"
    ]
  },
  {
    "id": 82,
    "slug": "deutschland-hanau-rassistisches-attentat-2020",
    "question": "Was war das Attentat von Hanau 2020?",
    "options": [
      {
        "letter": "A",
        "text": "Rassistischer Massenmord: 10 Menschen wurden von rechtsextremistem Täter erschossen"
      },
      {
        "letter": "B",
        "text": "Ein Unfall"
      },
      {
        "letter": "C",
        "text": "Eine politische Debatte"
      },
      {
        "letter": "D",
        "text": "Ein Missverständnis"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "19. Februar 2020: Ein rechtsextremistischer Täter tötete 9 Menschen in Hanau (überwiegend mit Migrationshintergrund) – ein Massaker, das die Bedrohung durch Rechtsextremismus sichtbar machte.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2020",
      "Terrorismus",
      "Rassismus"
    ]
  },
  {
    "id": 83,
    "slug": "ungarn-kritik-eu-orbans-stil-lager-ungarn",
    "question": "Wie kritisiert die EU Orbáns Herrschaftsstil?",
    "options": [
      {
        "letter": "A",
        "text": "Als \"Defekt-Demokratie\" mit Elementen von Autoritarismus"
      },
      {
        "letter": "B",
        "text": "Als vorbildliche Regierung"
      },
      {
        "letter": "C",
        "text": "Als normale EU-Regierung"
      },
      {
        "letter": "D",
        "text": "Als progressive Reformen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "EU-Beschreibung: Ungarn ist eine \"illiberale Demokratie\" unter Orbán – formale Wahlen, aber Aushöhlung von Gewaltenteilung, Pressefreiheit und Rechtsstaatlichkeit.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU-Kritik"
    ]
  },
  {
    "id": 84,
    "slug": "deutschland-afd-vermoegen-finanzierung-russland-verdacht",
    "question": "Gibt es Verdacht auf russische Finanzierung der AfD?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, Verdacht auf Zahlungen aus Russland oder Putin-nahem Umfeld"
      },
      {
        "letter": "B",
        "text": "Nein, vollständig transparent finanziert"
      },
      {
        "letter": "C",
        "text": "Nur von deutschen Spendern"
      },
      {
        "letter": "D",
        "text": "Vollständig staatlich finanziert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Investigative Berichte deuten auf Verdacht von Geldflüssen aus Russland oder Putin-Unterstützern zur AfD. Offizielle Bestätigung fehlt, aber Vermutungen sind stark.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Finanzierung"
    ]
  },
  {
    "id": 85,
    "slug": "polen-koscinski-oberster-gerichtshof-pis-kontrolle",
    "question": "Wer ist Zbigniew Ziobro und wie prägte er Polens Justiz?",
    "options": [
      {
        "letter": "A",
        "text": "PiS-Justizminister: führte Justizreformen durch, die der Partei Kontrolle gaben"
      },
      {
        "letter": "B",
        "text": "Ein Reformer für Unabhängigkeit"
      },
      {
        "letter": "C",
        "text": "Ein Verfechter der Medienfreiheit"
      },
      {
        "letter": "D",
        "text": "Ein Demokratie-Aktivist"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Zbigniew Ziobro: PiS-Justizminister, der Reformen durchsetzte, die der Partei Kontrolle über Richter gaben. EU-Gerichtshof verurteilte seine Maßnahmen als Verstoß gegen Justiz-Unabhängigkeit.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2018",
      "Justizreform"
    ]
  },
  {
    "id": 86,
    "slug": "ungarn-soros-universitaet-vertreibung-ceu-budapest",
    "question": "Was geschah mit der Soros-Stiftungsuniversität in Ungarn?",
    "options": [
      {
        "letter": "A",
        "text": "CEU wurde 2019 unter Druck gezwungen, Budapest zu verlassen"
      },
      {
        "letter": "B",
        "text": "Sie erhielt volle Unterstützung"
      },
      {
        "letter": "C",
        "text": "Sie expandierte unter Fidesz"
      },
      {
        "letter": "D",
        "text": "Sie wurde subventioniert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Central European University (CEU), gegründet von George Soros, war unter Orbán-Druck. 2019 verließ die Universität Budapest und zog nach Wien – ein Zeichen von Repression gegen kritische Intellektuellen.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2019",
      "Bildung"
    ]
  },
  {
    "id": 87,
    "slug": "deutschland-lanz-interview-hoecke-rechtsradikale-statements",
    "question": "Wie wurden Björn Höckes rechtsradikale Äußerungen bekannt?",
    "options": [
      {
        "letter": "A",
        "text": "Durchgesickerte Interviews: Höcke sprach von \"Remigration\" und NS-Vergleichen"
      },
      {
        "letter": "B",
        "text": "Er verurteilte Rechtsextremismus"
      },
      {
        "letter": "C",
        "text": "Er war progressiv"
      },
      {
        "letter": "D",
        "text": "Falsche Berichte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024: Audio-Aufzeichnungen zeigten, dass AfD-Spitzenpolitiker Björn Höcke Nazi-Vergleiche nutzte und von \"Remigration\" (Vertreibung) sprach – radikale Positionen wurden publik.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Höcke"
    ]
  },
  {
    "id": 88,
    "slug": "ungarn-orban-visegard-gruppe-antidemokratische-allianz",
    "question": "Was ist die Visegrád-Gruppe und Orbáns Rolle?",
    "options": [
      {
        "letter": "A",
        "text": "Allianz mit Tschechien, Polen, Slowakei; Orbán führt antidemokratische Block"
      },
      {
        "letter": "B",
        "text": "EU-Reformbündnis"
      },
      {
        "letter": "C",
        "text": "Progressive Allianz"
      },
      {
        "letter": "D",
        "text": "Nur wirtschaftliche Kooperation"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Visegrád-4: Allianz zwischen Ungarn, Tschechien, Polen, Slowakei. Unter Orbán versuchte die Gruppe, EU-Vorgaben zu blockieren und antidemokratische Maßnahmen zu verteidigen.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "EU-Politik"
    ]
  },
  {
    "id": 89,
    "slug": "deutschland-reichstag-brandsatz-jan-6-versuch-2021",
    "question": "Gab es einen Versuch, den Reichstag zu stürmen, wie Jan. 6 in den USA?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, August 2020: Hunderte Rechtsextremisten stürmten Treppen, Polizei stoppte sie"
      },
      {
        "letter": "B",
        "text": "Nein, keine Versuche"
      },
      {
        "letter": "C",
        "text": "Nur friedliche Proteste"
      },
      {
        "letter": "D",
        "text": "Nicht dokumentiert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "29. August 2020: Hunderte Rechtsextremisten, Reichsbürger und Corona-Leugner versuchten Reichstag zu stürmen. Polizei blockierte Treppen – ein kritisches Moment für deutsche Demokratie.",
    "sourceLinks": [
      {
        "name": "Bundestag",
        "url": "https://www.bundestag.de/dokumente/textarchiv/2022/kw50-de-aktuelle-stunde-reichsbuerger-926426"
      }
    ],
    "tags": [
      "Deutschland",
      "2020",
      "Rechtsextremismus",
      "Umsturzversuch"
    ]
  },
  {
    "id": 90,
    "slug": "ungarn-kirchensteuer-kontrolle-katholische-kirche-orban",
    "question": "Wie versuchte Orbán die katholische Kirche unter Kontrolle zu bringen?",
    "options": [
      {
        "letter": "A",
        "text": "Durch Gesetze, die Kirchensteuer- und Vermögensflüsse kontrollieren"
      },
      {
        "letter": "B",
        "text": "Durch Unterstützung der Kirche"
      },
      {
        "letter": "C",
        "text": "Vollständige Trennung"
      },
      {
        "letter": "D",
        "text": "Religionsfreiheit garantierend"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbán versuchte, Kirchensteuer und Vermögensverwaltung zu kontrollieren – eine Strategie, die Kirche zu Unterstützerin seiner Politik zu machen.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Kirche"
    ]
  },
  {
    "id": 91,
    "slug": "deutschland-afd-osten-dominanz-waehleranteile-sachsen",
    "question": "Wo hat die AfD ihre stärksten Wahlergebnisse?",
    "options": [
      {
        "letter": "A",
        "text": "In ostdeutschen Bundesländern (Sachsen, Thüringen 30-40%)"
      },
      {
        "letter": "B",
        "text": "Überall gleichmäßig verteilt"
      },
      {
        "letter": "C",
        "text": "Nur in Westdeutschland"
      },
      {
        "letter": "D",
        "text": "In Süddeutschland dominant"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Geographie: Besonders stark in ostdeutschen Bundesländern (Sachsen, Thüringen, Brandenburg 30-40%), schwächer im Westen und Süden. Spiegelt ost-west Debatten über Identität wider.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Wähler"
    ]
  },
  {
    "id": 92,
    "slug": "polen-kulturkrieg-traditionalismus-lgbtq-gender",
    "question": "Wie führt PiS einen \"Kulturkrieg\" in Polen?",
    "options": [
      {
        "letter": "A",
        "text": "Gegen \"Gender-Ideologie\", westliche Werte, LGBTQ+ – mit kirchlicher Unterstützung"
      },
      {
        "letter": "B",
        "text": "Für progressive Werte"
      },
      {
        "letter": "C",
        "text": "Mit liberalen Reformen"
      },
      {
        "letter": "D",
        "text": "Für Säkularisierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "PiS-\"Kulturkrieg\": Zentral gegen \"westliche Gender-Ideologie\", für \"traditionelle Werte\" und Katholizismus. Ein Versuch, Identität gegen westlichen Pluralismus zu mobilisieren.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "PiS",
      "2015",
      "Kulturkrieg"
    ]
  },
  {
    "id": 93,
    "slug": "deutschland-tusk-reaktion-deutschland-fluechtlingspolitik-kritik",
    "question": "Was kritisierte Polens neuer Ministerpräsident Tusk an Deutschland?",
    "options": [
      {
        "letter": "A",
        "text": "Er sah Deutschlands liberale Flüchtlingspolitik als Fehler, der Migration anlockt"
      },
      {
        "letter": "B",
        "text": "Er lobte deutsche Migrationspolitik"
      },
      {
        "letter": "C",
        "text": "Er unterstützte offene Grenzen"
      },
      {
        "letter": "D",
        "text": "Er war neutral"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Tusk-Kritik 2024: Er sieht Deutschlands liberale Asylpolitik als fehlerhaft und als Grund für gestiegene Migration – eine Abkehr von progressiver Politik unter Tusk.",
    "sourceLinks": [
      {
        "name": "LSVD",
        "url": "https://www.lsvd.de/de/ct/2227-quot-LSBTI-freie-Zonen-quot-in-Polen-Steigender-Hass-im-Nachbarland"
      }
    ],
    "tags": [
      "Polen",
      "Tusk",
      "2024",
      "Asylpolitik"
    ]
  },
  {
    "id": 94,
    "slug": "ungarn-liesz-medien-hetze-orban-propaganda-maschine",
    "question": "Was ist Ungarns \"Propaganda-Maschine\" Orbáns?",
    "options": [
      {
        "letter": "A",
        "text": "Kontrollierte Medien (TV, Zeitung), die Orbán-freundliche Inhalte 24/7 sendeten"
      },
      {
        "letter": "B",
        "text": "Unabhängige Medienlandschaft"
      },
      {
        "letter": "C",
        "text": "Pluralistische Berichterstattung"
      },
      {
        "letter": "D",
        "text": "Kritisches Fernsehen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Medien-Kontrolle: Hunderte von Fernsehsendern, Zeitungen und Online-Portalen unter Oligarchen-Kontrolle senden einheitliche pro-Fidesz-Propaganda. Kritische Medien sind marginalisiert.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Propaganda"
    ]
  },
  {
    "id": 95,
    "slug": "deutschland-rechtsextremismus-alltagskultur-normalisierung",
    "question": "Wie normalisiert sich Rechtsextremismus im Alltag in Deutschland?",
    "options": [
      {
        "letter": "A",
        "text": "AfD-Mitgliedschaft, Rechtsextremismus-Phrasen in Alltag, soziale Akzeptanz"
      },
      {
        "letter": "B",
        "text": "Keine Normalisierung"
      },
      {
        "letter": "C",
        "text": "Rückgang"
      },
      {
        "letter": "D",
        "text": "Isoliert und marginalisiert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Normalisierung: AfD-Wachstum (30%+ Umfrage) normalisiert extremistische Rhetorik. \"Remigration\" und \"Ethnische Homogenität\" werden mainstream diskutiert – gefährliche Verschiebung der Grenzen.",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Normalisierung"
    ]
  },
  {
    "id": 96,
    "slug": "ungarn-orban-militarisierung-propaganda-russland-allianz",
    "question": "Wie nähert sich Ungarn unter Orbán Russland militärisch an?",
    "options": [
      {
        "letter": "A",
        "text": "Blockiert EU-Sanktionen gegen Russland, kauft russisches Gas trotz Embargo"
      },
      {
        "letter": "B",
        "text": "Folgt EU-Außenpolitik"
      },
      {
        "letter": "C",
        "text": "Mit Kritik an Russland"
      },
      {
        "letter": "D",
        "text": "NATO-konform"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbán-Russland-Nähe: Blockiert EU-Sanktionen gegen Russland, kauft billiges Gas trotz Embargo – eine außenpolitische Abkehr, die EU destabilisiert.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Außenpolitik"
    ]
  },
  {
    "id": 97,
    "slug": "deutschland-afd-hanau-opfer-erinnerung-rechtsextremismus",
    "question": "Wie gedachte Deutschland der Hanau-Opfer?",
    "options": [
      {
        "letter": "A",
        "text": "Mit Gedenkveranstaltungen, Mahnung gegen Rechtsextremismus"
      },
      {
        "letter": "B",
        "text": "Mit Normalität"
      },
      {
        "letter": "C",
        "text": "Keine Erinnerung"
      },
      {
        "letter": "D",
        "text": "Mit Minimalisierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Hanau-Gedenken: Jährliche Veranstaltungen, Denkmal-Initiativen, Verarbeitung von Leid. Ein Moment, der Aufmerksamkeit auf Rechtsextremismus lenkt.",
    "sourceLinks": [
      {
        "name": "Verband BRG",
        "url": "https://verband-brg.de/rechte-rassistische-und-antisemitische-gewalt-in-deutschland-2024-jahresbilanzen-der-opferberatungsstelle"
      }
    ],
    "tags": [
      "Deutschland",
      "2020",
      "Terrorismus",
      "Opfererinnerung"
    ]
  },
  {
    "id": 98,
    "slug": "ungarn-eu-kritik-orban-system-dauer-anti-demokratie",
    "question": "Wie lange andert Orbáns anti-demokratisches System bereits an?",
    "options": [
      {
        "letter": "A",
        "text": "Seit 15+ Jahren kontinuierlicher \"Aushöhlung der Demokratie\""
      },
      {
        "letter": "B",
        "text": "Nur kurze Phase"
      },
      {
        "letter": "C",
        "text": "Wurde überwunden"
      },
      {
        "letter": "D",
        "text": "Kurzfristig"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Orbáns Regime: 15+ Jahre kontinuierliche, systematische Aushöhlung demokratischer Strukturen. Ein Paradebeispiel für autoritäre Konsolidierung im EU-Kontext.",
    "sourceLinks": [
      {
        "name": "bpb",
        "url": "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/308619/10-jahre-fidesz-regierung-lage-der-demokratie-in-ungarn/"
      }
    ],
    "tags": [
      "Ungarn",
      "Fidesz",
      "2024",
      "Antidemokratie"
    ]
  },
  {
    "id": 99,
    "slug": "deutschland-afd-waehlerschaft-demografisch-analyse",
    "question": "Wer wählt die AfD in Deutschland? Demografisches Profil?",
    "options": [
      {
        "letter": "A",
        "text": "Überproportional: Männer, ältere Menschen, Arbeiter:innen, \"abgehängt\" Fühlende"
      },
      {
        "letter": "B",
        "text": "Gleichmäßig über alle Gruppen verteilt"
      },
      {
        "letter": "C",
        "text": "Nur akademisch Gebildete"
      },
      {
        "letter": "D",
        "text": "Nur junge Menschen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "AfD-Wähler:innen: Überproportional Männer (60%+), älter, mit Arbeiter-Hintergrund, oft in wirtschaftlich schwachen Regionen. Weniger Akademiker:innen, mehr \"Abgehängte\".",
    "sourceLinks": [
      {
        "name": "ZDFheute",
        "url": "https://www.zdfheute.de/politik/deutschland/afd-verfassungsschutz-rechtsextremistisch-100.html"
      }
    ],
    "tags": [
      "Deutschland",
      "AfD",
      "2024",
      "Wählerdaten"
    ]
  },
  {
    "id": 100,
    "slug": "europa-2025-prognose-zukunft-demokratie-rechtsextremismus",
    "question": "Wie sieht die Prognose für europäische Demokratie 2025-2030?",
    "options": [
      {
        "letter": "A",
        "text": "Risiken: Rechtsextremismus weiterhin 25-30% in mehreren Ländern, Orbán-Lager erstarkt"
      },
      {
        "letter": "B",
        "text": "Sichere demokratische Entwicklung"
      },
      {
        "letter": "C",
        "text": "Automatische Stabilisierung"
      },
      {
        "letter": "D",
        "text": "Keine Herausforderungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2025-2030-Prognose: Rechtsextremismus bleibt Dauerproblem (25-30%+ in mehreren Ländern), \"illiberale Demokratien\" à la Ungarn sind Modell, EU-Fragmentierung nimmt zu. Nötig: gezielte Gegenwehr.",
    "sourceLinks": [
      {
        "name": "Kontrast",
        "url": "https://kontrast.at/orban-kickl-ungarn/"
      }
    ],
    "tags": [
      "Europa",
      "2025",
      "Prognose",
      "Demokratie"
    ]
  },

  {
    "id": 1,
    "slug": "trump-pussy-grab-tape-frauenverachtung-wahlkampf",
    "question": "Was zeigte das 2005-\"Access Hollywood\"-Tape über Trump?",
    "options": [
      {
        "letter": "A",
        "text": "Trump prahlt mit Frauenbelästigung (\"grab them by the pussy\"); Wähler ignorieren es"
      },
      {
        "letter": "B",
        "text": "Respektvolles Verhalten gegenüber Frauen"
      },
      {
        "letter": "C",
        "text": "Unterstützung für Frauenrechte"
      },
      {
        "letter": "D",
        "text": "Keine Kontroverse"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Oktober 2005: Access Hollywood-Tape: Trump prahlt damit, Frauen ohne Zustimmung zu berühren. Trotz Shitstorm erhielt er Unterstützung von 46% der Wähler. Normalisierung von Frauenfeindlichkeit.",
    "sourceLinks": [
      {
        "name": "CNN",
        "url": "https://www.cnn.com/politics/trump-access-hollywood-tape"
      },
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2016",
      "Frauenfeindlichkeit",
      "Wahlkampf"
    ]
  },
  {
    "id": 2,
    "slug": "gop-republican-party-trump-unterstützung-frauen-rechte-verrat",
    "question": "Wie verriet die Republikanische Partei Frauenrechte unter Trump?",
    "options": [
      {
        "letter": "A",
        "text": "Blockierte Abtreibungs-Schutze, ernannte Anti-Abtreibungs-Richter, 6. Supreme Court schränkte Rechte ein"
      },
      {
        "letter": "B",
        "text": "Schützte reproduktive Rechte"
      },
      {
        "letter": "C",
        "text": "Förderte Gleichberechtigung"
      },
      {
        "letter": "D",
        "text": "Unterstützte Frauenrechte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump ernannte 3 Supreme Court Richter. Juni 2022: Gericht hob Roe v. Wade auf – Abtreibungsrechte gelöscht. GOP blockierte alle Schutzgesetze. Verrat an eigenen Wähler-Versprechen von Sicherheit.",
    "sourceLinks": [
      {
        "name": "New York Times",
        "url": "https://www.nytimes.com"
      },
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "GOP",
      "2022",
      "Frauenrechte",
      "Supreme Court"
    ]
  },
  {
    "id": 3,
    "slug": "trump-dreamers-schutz-aufgehoben-daca-undocumented-children",
    "question": "Was tat Trump mit DACA (Schutz für Dreamers)?",
    "options": [
      {
        "letter": "A",
        "text": "Versuchte Aufhebung von DACA; 700.000+ undokumentierte Kinder verloren Schutz"
      },
      {
        "letter": "B",
        "text": "Verstärkte Schutzmaßnahmen"
      },
      {
        "letter": "C",
        "text": "Legalisierungsprogramm"
      },
      {
        "letter": "D",
        "text": "Erweiterte Rechte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump versuchte 2017-2021, DACA aufzuheben – 700.000+ junge Migranten verloren Schutz. Supreme Court blockierte zweimal. Verrat an Versprechungen, Familien zu schützen.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Immigration",
      "Kinder"
    ]
  },
  {
    "id": 4,
    "slug": "trump-lgbtq-gleichstellung-rollback-transgender-militaer",
    "question": "Wie rollte Trump LGBTQ+-Rechte zurück?",
    "options": [
      {
        "letter": "A",
        "text": "Verbot für Transgender in Militär, rollte Schutzmaßnahmen zurück, ernannte Anti-LGBTQ+-Richter"
      },
      {
        "letter": "B",
        "text": "Förderte LGBTQ+-Rechte"
      },
      {
        "letter": "C",
        "text": "Gab Gleichstellungsgesetze"
      },
      {
        "letter": "D",
        "text": "Unterstützte Vielfalt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump 2017: Verbot von Transgender-Personen im Militär (später teilweise blockiert). Rollback von Obama-Schutzmaßnahmen. Generell Anti-LGBTQ+-Politik und Richterlügen (Gorsuch-Entscheidung ausnahmsweise pro-LGBTQ+).",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "LGBTQ+",
      "Diskriminierung"
    ]
  },
  {
    "id": 5,
    "slug": "trump-voting-rights-schwarz-wähler-unterdrückung",
    "question": "Wie unterdrückte die GOP unter Trump Schwarze Wähler?",
    "options": [
      {
        "letter": "A",
        "text": "Voter ID-Gesetze, Wahlkreis-Manipulation, Polling-Stationen-Schließung in schwarzen Bezirken"
      },
      {
        "letter": "B",
        "text": "Erweiterte Wahlrechte"
      },
      {
        "letter": "C",
        "text": "Schützte Wahlbeteiligung"
      },
      {
        "letter": "D",
        "text": "Transparente Wahlen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-GOP: Voter ID-Gesetze (diskriminieren Schwarze/Hispanics), Gerrymandering in schwarzen Bezirken, Polling-Stationen-Schließungen. Verrat an Wahlrechten.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "GOP",
      "2017",
      "Rassismus",
      "Wahlrecht"
    ]
  },
  {
    "id": 6,
    "slug": "trump-family-separation-zero-tolerance-kinder-käfige-border",
    "question": "Was war Trumps \"Zero Tolerance\"-Politik an der Grenze?",
    "options": [
      {
        "letter": "A",
        "text": "Trennte 5.600+ Kinder von Eltern; tausende in Käfigen detainiert"
      },
      {
        "letter": "B",
        "text": "Humane Einwanderungspolitik"
      },
      {
        "letter": "C",
        "text": "Familienfreundliche Verfahren"
      },
      {
        "letter": "D",
        "text": "Legale Asylverarbeitung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2018: Trump ordnete Zero Tolerance Grenzkontrolle an – über 5.600 Kinder von Eltern getrennt. Tausende in Käfigen detainiert. Viele nie wiedervereinigt. Menschenrechtsverletzungen.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      },
      {
        "name": "NPR",
        "url": "https://www.npr.org"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Grenzkrise",
      "Kinderrechte"
    ]
  },
  {
    "id": 7,
    "slug": "trump-mueller-ermittlung-obstruction-of-justice-10-punkte",
    "question": "Was dokumentierte die Mueller-Ermittlung über Trump?",
    "options": [
      {
        "letter": "A",
        "text": "10 Fälle von möglicher Behinderung der Justiz; Trump versuchte Ermittler zu blockieren"
      },
      {
        "letter": "B",
        "text": "Volle Kooperation"
      },
      {
        "letter": "C",
        "text": "Keine Verfehlungen"
      },
      {
        "letter": "D",
        "text": "Transparente Ermittlung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Mueller-Bericht 2019: Dokumentierte 10 Fälle von möglicher Behinderung der Justiz. Trump versuchte Mueller zu feuern, Comey zu entfernen, Zeugen einzuschüchtern.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Mueller",
      "Justizbehinderung"
    ]
  },
  {
    "id": 8,
    "slug": "trump-charlottesville-\"very-fine-people\" nazis-kkk",
    "question": "Wie reagierte Trump auf Nazi-Aufmarsch in Charlottesville?",
    "options": [
      {
        "letter": "A",
        "text": "Sagte \"sehr feine Menschen\" auf beiden Seiten; moral equivalence mit Nazis"
      },
      {
        "letter": "B",
        "text": "Verurteilte Nazis scharf"
      },
      {
        "letter": "C",
        "text": "Antifaschistische Haltung"
      },
      {
        "letter": "D",
        "text": "Klare anti-rassistische Position"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "August 2017: Charlottesville Nazi-Aufmarsch. Trump sagte \"es gibt sehr feine Menschen auf beiden Seiten\" – moralische Äquivalenz zwischen Nazis und Anti-Faschisten. Normalisierte Rassismus.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Rassismus",
      "Nazis"
    ]
  },
  {
    "id": 9,
    "slug": "trump-alabama-sharpie-hurricane-dorian-wissenschaftsverleugnung",
    "question": "Wie missbrauchte Trump Wissenschaft bei Hurricane Dorian?",
    "options": [
      {
        "letter": "A",
        "text": "Zeigte Hurricane-Karte mit Sharpie-Änderung; drohte NOAA für Widerspruch"
      },
      {
        "letter": "B",
        "text": "Folgte wissenschaftlichen Daten"
      },
      {
        "letter": "C",
        "text": "Respektierte Expertisen"
      },
      {
        "letter": "D",
        "text": "Transparente Kommunikation"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "September 2019: Trump zeigte Hurricane-Karte mit Sharpie-Zeichnung zur Rechtfertigung falscher Vorhersage. Drohte NOAA für Widerspruch. Wissenschaftliche Integrität verletzt.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Wissenschaft",
      "Lügen"
    ]
  },
  {
    "id": 10,
    "slug": "trump-federal-judges-attacks-courts-legitimacy-undermining",
    "question": "Wie unterminierte Trump Gerichtslegitimität?",
    "options": [
      {
        "letter": "A",
        "text": "Attackierte kritische Richter, nannte Gericht \"Fake News\", delegitimierte Justiz"
      },
      {
        "letter": "B",
        "text": "Respektierte Justiz-Unabhängigkeit"
      },
      {
        "letter": "C",
        "text": "Akzeptierte Urteile"
      },
      {
        "letter": "D",
        "text": "Unterstützte Rechtsstaatlichkeit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump wiederholte Attacken auf Richter, nannte kritische Entscheidungen \"Fake\", unterminierte Gerichtslegitimität. Versuch, Justiz-Vertrauen zu erodieren – antidemokratisch.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Justiz",
      "Antidemokratie"
    ]
  },
  {
    "id": 11,
    "slug": "trump-feuert-alle-inspektoren-general-oversight-blockieren",
    "question": "Wie blockierte Trump Überwachung durch Inspektoren General?",
    "options": [
      {
        "letter": "A",
        "text": "Feuerte alle 4 kritischen Inspektoren General während Amtszeit"
      },
      {
        "letter": "B",
        "text": "Unterstützte Überwachung"
      },
      {
        "letter": "C",
        "text": "Transparente Verwaltung"
      },
      {
        "letter": "D",
        "text": "Förderte Accountability"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump feuerte 4 Inspektoren General, die Verfehlungen der Regierung dokumentierten – versuchte Überwachung auszuschalten. Verstoß gegen Checks-and-Balances.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Überwachung",
      "Blockade"
    ]
  },
  {
    "id": 12,
    "slug": "trump-pressefreiheit-angriff-fake-news-journalisten",
    "question": "Wie attackierte Trump die Pressefreiheit?",
    "options": [
      {
        "letter": "A",
        "text": "Nannte Presse \"Feind des Volkes\", attackierte Journalisten, drohte mit Lizenz-Entzug"
      },
      {
        "letter": "B",
        "text": "Förderte Medienfreiheit"
      },
      {
        "letter": "C",
        "text": "Unterstützte Journalisten"
      },
      {
        "letter": "D",
        "text": "Respektierte Pressefreiheit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump nannte Presse \"Feind des Volkes\", attackierte Reporter, drohte mit Lizenz-Entzug. Versuch, Pressefreiheit zu unterdrücken – antidemokratisch.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Presse",
      "Antidemokratie"
    ]
  },
  {
    "id": 13,
    "slug": "trump-mueller-entlassung-versuch-don-mcgahn-story",
    "question": "Versuchte Trump Mueller zu entlassen?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, ordnete McGahn an, Mueller zu feuern; McGahn weigerte sich, zurück trat"
      },
      {
        "letter": "B",
        "text": "Kooperierte mit Ermittlung"
      },
      {
        "letter": "C",
        "text": "Transparente Prozess"
      },
      {
        "letter": "D",
        "text": "Keine Interferenz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Juni 2017: Trump ordnete Don McGahn an, Mueller zu feuern. McGahn weigerte sich und trat zurück – Behinderung der Justiz dokumentiert in Mueller-Bericht.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Mueller",
      "Justizbehinderung"
    ]
  },
  {
    "id": 14,
    "slug": "trump-pardons-cronies-criminals-birther-family-friends",
    "question": "Wen begnadigte Trump kurz vor Amtsende?",
    "options": [
      {
        "letter": "A",
        "text": "143 Personen, viele Kriminelle und Vertraute; Sohn Don Jr., Schwiegersohn Kushner sparte Strafen"
      },
      {
        "letter": "B",
        "text": "Verdiente Verurteilte"
      },
      {
        "letter": "C",
        "text": "Nach Gerechtigkeit"
      },
      {
        "letter": "D",
        "text": "Transparente Gnadenerweise"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump begnadigte 143 Personen, darunter Cronies, Kriminelle, Freunde, Spender. Kushner-Vater erhielt Begnadigung für Weiße-Kragen-Verbrechen. Verstoß gegen Gerechtigkeit.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2021",
      "Gnadenerweise",
      "Korruption"
    ]
  },
  {
    "id": 15,
    "slug": "trump-roger-stone-commutation-lügen-justiz",
    "question": "Was tat Trump für seinen Freund Roger Stone?",
    "options": [
      {
        "letter": "A",
        "text": "Begnadigte Stone wegen Meineids und Behinderung der Justiz; kommt trotz Verurteilung frei"
      },
      {
        "letter": "B",
        "text": "Folgte justiziellen Verfahren"
      },
      {
        "letter": "C",
        "text": "Transparente Begnadigung"
      },
      {
        "letter": "D",
        "text": "Respektierte Gerichte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "November 2020: Trump commutierte Stones Satz trotz Verurteilung wegen Meineids und Justiz-Behinderung. Politische Gunst über Gerechtigkeit.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Begnadigung",
      "Korruption"
    ]
  },
  {
    "id": 16,
    "slug": "trump-paul-manafort-commutation-campaign-manager-schulden",
    "question": "Wie begnadigte Trump seinen Wahlkampfmanager Paul Manafort?",
    "options": [
      {
        "letter": "A",
        "text": "Commutierte Strafe trotz Geldwäsche- und Betrugs-Verurteilung wegen politischer Loyalität"
      },
      {
        "letter": "B",
        "text": "Folgte justiziellen Verfahren"
      },
      {
        "letter": "C",
        "text": "Respektierte Gerichte"
      },
      {
        "letter": "D",
        "text": "Transparente Entscheidung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump commutierte Manaforts Satz trotz Verurteilung für Geldwäsche und Betrug. Manafort folgte Trump, darum wurde er belohnt – Korruption als Norm.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Manafort",
      "Bestechung"
    ]
  },
  {
    "id": 17,
    "slug": "trump-post-office-destruction-usps-mail-voting-sabotage",
    "question": "Wie sabotierte Trump die US Postal Service vor 2020 Wahl?",
    "options": [
      {
        "letter": "A",
        "text": "Ernannte DeJoy, der USPS zerstörte; verhinderte Mail-in-Wahl-Verarbeitung"
      },
      {
        "letter": "B",
        "text": "Förderte Mail-Voting"
      },
      {
        "letter": "C",
        "text": "Unterstützte USPS"
      },
      {
        "letter": "D",
        "text": "Transparente Wahlvorbereitung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump ernannte Louis DeJoy als USPS-Chef. DeJoy zerstörte Sortierstationen, reduzierte Postboxen – versuchte Mail-Voting zu sabotieren vor 2020 Wahl.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Wahlbetrug",
      "USPS"
    ]
  },
  {
    "id": 18,
    "slug": "trump-georgia-call-raffensperger-11-thousand-votes",
    "question": "Was sagte Trump zu Georgias Außenminister Raffensperger?",
    "options": [
      {
        "letter": "A",
        "text": "\"Ich brauche 11.780 Stimmen\" – versuchte Außenminister zu erpressen"
      },
      {
        "letter": "B",
        "text": "Akzeptierte Wahlergebnis"
      },
      {
        "letter": "C",
        "text": "Rispektierte Wahl"
      },
      {
        "letter": "D",
        "text": "Keine Einmischung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Januar 2021: Trump forderte Raffensperger telefonisch \"11.780 Stimmen\" – offene Erpressung für Wahlmanipulation. Aufzeichnung veröffentlicht, Erpressung dokumentiert.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2021",
      "Wahlbetrug",
      "Erpressung"
    ]
  },
  {
    "id": 19,
    "slug": "trump-michigan-electors-pressure-overturn-votes",
    "question": "Wie versuchte Trump die Michigan-Wähler zu zwingen?",
    "options": [
      {
        "letter": "A",
        "text": "Forderte Wahlleute auf, Stimmabgabe zu ändern; Druck auf Sekretärin Benson"
      },
      {
        "letter": "B",
        "text": "Akzeptierte Wahl"
      },
      {
        "letter": "C",
        "text": "Respektierte demokratische Prozesse"
      },
      {
        "letter": "D",
        "text": "Keine Einmischung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump forderte Michigan-Wahlleute auf, Stimmen zu ändern, drohte Sekretärin Benson. Versuch, Wahl umzukehren – Wahlmanipulation.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Wahlbetrug",
      "Michigan"
    ]
  },
  {
    "id": 20,
    "slug": "trump-pennsylvania-irregularities-lawsuit-baseless-400-fälle",
    "question": "Wie viele Wahl-Klagen verlor Trump in Pennsylvania?",
    "options": [
      {
        "letter": "A",
        "text": "Über 60 Klagen verloren; alle Richter (auch Trump-ernannte) wiesen Anträge ab"
      },
      {
        "letter": "B",
        "text": "Gewann alle Fälle"
      },
      {
        "letter": "C",
        "text": "Beweise für Betrug"
      },
      {
        "letter": "D",
        "text": "Unfaire Richter"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump reichte 60+ Klagen in Pennsylvania ein – alle verloren. Selbst Trump-ernannte Richter wiesen Anträge als \"ohne Substanz\" ab. Keine Beweise für Betrug.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Wahlbetrug-Lügen",
      "Justiz"
    ]
  },
  {
    "id": 21,
    "slug": "trump-2020-wahlkampf-unethisch-foreign-interference-china",
    "question": "Welche ethischen Verstöße gab es in Trumps 2020-Wahlkampf?",
    "options": [
      {
        "letter": "A",
        "text": "Versuchte ausländische Unterstützung zu nutzen; Nordkorea/China angeboten"
      },
      {
        "letter": "B",
        "text": "Sauberer Wahlkampf"
      },
      {
        "letter": "C",
        "text": "Ethische Standards"
      },
      {
        "letter": "D",
        "text": "Transparenz"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump versuchte, ausländische Hilfe für 2020 Wahl zu nutzen – wiederholtes Muster. China/Nordkorea boten Unterstützung an. Verrat an Nationalinteressen.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Wahlkampf",
      "Auslandseinfluss"
    ]
  },
  {
    "id": 22,
    "slug": "trump-wisconsin-recount-verzögerung-demokrat-verlierer",
    "question": "Wie versuchte Trump den Wisconsin-Wahlreccount zu manipulieren?",
    "options": [
      {
        "letter": "A",
        "text": "Zahlte Millionen für Recount; Ergebnis verschärfte Biden-Sieg"
      },
      {
        "letter": "B",
        "text": "Akzeptierte Wahl"
      },
      {
        "letter": "C",
        "text": "Keine Einmischung"
      },
      {
        "letter": "D",
        "text": "Transparente Recount"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump zahlte für Wisconsin-Recount – Ergebnis verschärfte Biden-Sieg, kostete Trump über $3 Millionen. Wahlmanipulation misslang.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Wahlbetrug",
      "Wisconsin"
    ]
  },
  {
    "id": 23,
    "slug": "trump-arizona-recount-cyber-ninjas-conspiracy",
    "question": "Was war der Arizona-Recount-Skandal?",
    "options": [
      {
        "letter": "A",
        "text": "Trump finanzierte \"Cyber Ninjas\" Recount; fand nur mehr Beweise gegen Trump"
      },
      {
        "letter": "B",
        "text": "Legitimer Wahlprozess"
      },
      {
        "letter": "C",
        "text": "Unabhängige Überprüfung"
      },
      {
        "letter": "D",
        "text": "Transparente Ergebnisse"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump finanzierte Arizona-Recount durch \"Cyber Ninjas\". Ergebnis: Nur mehr Beweise gegen Trump, Biden gewann mit noch größerem Vorsprung.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2021",
      "Wahlbetrug-Versuch",
      "Arizona"
    ]
  },
  {
    "id": 24,
    "slug": "trump-financial-disclosures-incomplete-untrue-false-reporting",
    "question": "Wie falsifizierte Trump finanzielle Offenlegungen?",
    "options": [
      {
        "letter": "A",
        "text": "Underreported Schulden, Verbindlichkeiten und Interessenskonflikte um Milliarden"
      },
      {
        "letter": "B",
        "text": "Transparente Offenlegung"
      },
      {
        "letter": "C",
        "text": "Vollständige Angaben"
      },
      {
        "letter": "D",
        "text": "Ehrliche Finanzberichterstattung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump underreported Schulden, Verbindlichkeiten, Interessenskonflikte um Milliarden in Financial Disclosures. Persistente Falsifizierung von Regierungsdokumentation.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Finanzbetrug",
      "Offenlegung"
    ]
  },
  {
    "id": 25,
    "slug": "trump-security-clearances-revoked-brennan-comey-pressure",
    "question": "Welche Sicherheitsfreigaben revoked Trump aus Rache?",
    "options": [
      {
        "letter": "A",
        "text": "Revoked Clearances von kritischen Sicherheitsbeamten (Brennan, Comey); Rache-Akt"
      },
      {
        "letter": "B",
        "text": "Respektierte Profis"
      },
      {
        "letter": "C",
        "text": "Keine Repressalien"
      },
      {
        "letter": "D",
        "text": "Transparente Entscheidungen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump revoked Sicherheitsfreigaben von Brennan (CIA), Comey (FBI) und anderen – weil sie seine Ermittlungen kritisierten. Politische Rache gegen Profis.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Rache",
      "Sicherheit"
    ]
  },
  {
    "id": 26,
    "slug": "trump-nordkorea-liebesbriefe-delikates-verhandlung-scheitern",
    "question": "Was war das Ergebnis von Trumps \"Liebesbriefe\" mit Kim Jong-un?",
    "options": [
      {
        "letter": "A",
        "text": "Nordkorea baute Atomwaffen weiter aus; keine Denuklearisierung"
      },
      {
        "letter": "B",
        "text": "Vollständige Denuklearisierung"
      },
      {
        "letter": "C",
        "text": "Friedensvertrag"
      },
      {
        "letter": "D",
        "text": "Erfolgreiche Verhandlung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump schrieb \"Liebesbriefe\" an Kim Jong-un – großes Medienspektakel, aber keine Ergebnisse. Nordkorea baute Atomwaffen weiter aus.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Nordkorea",
      "Friedensversprechen-Betrug"
    ]
  },
  {
    "id": 27,
    "slug": "trump-saudi-arabia-weapons-sales-khashoggi-murder-covered",
    "question": "Wie ignorierte Trump Saudi-Arabiens Khashoggi-Mord?",
    "options": [
      {
        "letter": "A",
        "text": "Ignoriierte Khashoggi-Mord von MBS; 115 Milliarden Dollar Waffendeals wichtiger"
      },
      {
        "letter": "B",
        "text": "Verurteilte Mord"
      },
      {
        "letter": "C",
        "text": "Forderte Untersuchung"
      },
      {
        "letter": "D",
        "text": "Unterstützte Journalisten"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Saudi-Arabien tötete Journalist Khashoggi 2018. Trump ignorierte Mord, weil 115 Milliarden Dollar Waffendeals wichtiger waren. Geschäfte vor Menschenrechten.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Saudi-Arabien",
      "Menschenrechte-Verrat"
    ]
  },
  {
    "id": 28,
    "slug": "trump-white-house-counsel-don-mcgahn-testimony-subpoena",
    "question": "Wie blockierte Trump Zeugenaussagen von Don McGahn?",
    "options": [
      {
        "letter": "A",
        "text": "Blockierte Subpoena für McGahn; versuchte Justiz-Behinderung"
      },
      {
        "letter": "B",
        "text": "Unterstützte Ermittlungen"
      },
      {
        "letter": "C",
        "text": "Transparente Kooperation"
      },
      {
        "letter": "D",
        "text": "Respektierte Gericht-Befehle"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump blockierte Subpoena für Don McGahn (Rechtsberater), der wichtige Zeugnis hätte gegeben. Versuch, Mueller-Ermittlung zu obstruieren.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Justizbehinderung",
      "Mueller"
    ]
  },
  {
    "id": 29,
    "slug": "trump-puerto-rico-hurricane-maria-response-neglect-paper-towels",
    "question": "Wie vernachlässigte Trump Puerto Rico nach Hurricane Maria?",
    "options": [
      {
        "letter": "A",
        "text": "Warf Papiertücher zu Menschen, keine echte Hilfe; 3.000 Todesfälle"
      },
      {
        "letter": "B",
        "text": "Massive Hilfsmaßnahmen"
      },
      {
        "letter": "C",
        "text": "Koordinierte Krise-Reaktion"
      },
      {
        "letter": "D",
        "text": "Effiziente Katastrophenhilfe"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2017: Hurricane Maria zerstörte Puerto Rico. Trump besuchte, warf Papiertücher zu Opfern – keine echte Hilfe. Über 3.000 starben an Folgen. Rassistische Neglekt.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Hurricane Maria",
      "Rassismus"
    ]
  },
  {
    "id": 30,
    "slug": "trump-taxes-deutsche-bank-loans-laundry-verdacht",
    "question": "Welche Verbindung hatte Trump zur Deutsche Bank?",
    "options": [
      {
        "letter": "A",
        "text": "Holte über 2 Milliarden Dollar Kredite von Deutsche Bank; Geldwäsche-Verdacht"
      },
      {
        "letter": "B",
        "text": "Legale Finanzierungen"
      },
      {
        "letter": "C",
        "text": "Transparente Geschäfte"
      },
      {
        "letter": "D",
        "text": "Normal Unternehmens-Kredite"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump erhielt über 2 Milliarden Dollar von Deutsche Bank – unter Geldwäsche-Verdacht. Bank verstrickt in russische Geldwäsche. Trump-Verbindung fragwürdig.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Deutsche Bank",
      "Geldwäsche"
    ]
  },
  {
    "id": 31,
    "slug": "trump-mar-a-lago-memberships-foreign-nationals-espionage",
    "question": "Wer waren Mar-a-Lago-Mitglieder?",
    "options": [
      {
        "letter": "A",
        "text": "Ausländische Staatsbeamte, Spione, Investoren aus Ländern mit US-Interessen"
      },
      {
        "letter": "B",
        "text": "Normale amerikanische Mitglieder"
      },
      {
        "letter": "C",
        "text": "Transparente Mitgliedschaft"
      },
      {
        "letter": "D",
        "text": "Sicherheits-überprüfte Personen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Mar-a-Lago Mitgliedschaft: Ausländische Staatsbeamte (Chinesen, Russen, Saudis), potenzielle Spione, Investoren. Nationale Sicherheits-Risiko für geheime Information-Sicherheit.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Mar-a-Lago",
      "Sicherheit"
    ]
  },
  {
    "id": 32,
    "slug": "trump-campaign-data-cambridge-analytica-microtargeting",
    "question": "Was war Trumps Verbindung zu Cambridge Analytica?",
    "options": [
      {
        "letter": "A",
        "text": "Nutzten Cambridge Analytica für Microtargeting mit gestohlenen Daten"
      },
      {
        "letter": "B",
        "text": "Ethisches Kampagnen-Management"
      },
      {
        "letter": "C",
        "text": "Transparente Werbung"
      },
      {
        "letter": "D",
        "text": "Legitime Daten-Nutzung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trumps Kampagne nutzte Cambridge Analytica für Microtargeting mit Facebook-Daten (50+ Millionen Nutzer). Datenschmutz-Skandal.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2016",
      "Cambridge Analytica",
      "Datenschutz"
    ]
  },
  {
    "id": 33,
    "slug": "trump-facebook-ads-verbreitung-misinformation-russland-bot",
    "question": "Wie verbreitete Trumps Kampagne Desinformation?",
    "options": [
      {
        "letter": "A",
        "text": "Unterstützung von russischen Bots, Facebook-Ads mit Lügen, Mikro-Zielgruppen"
      },
      {
        "letter": "B",
        "text": "Fact-basierte Kampagne"
      },
      {
        "letter": "C",
        "text": "Transparente Werbung"
      },
      {
        "letter": "D",
        "text": "Ethische Kommunikation"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2016: Trumps Kampagne unterstützte russische Desinformation, lud Facebook-Ads mit Lügen hoch, nutzte Mikro-Zielgruppen. Russische Interferenz-Kooperation.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2016",
      "Desinformation",
      "Russland"
    ]
  },
  {
    "id": 34,
    "slug": "trump-foreign-money-campaign-shell-companies-illegal",
    "question": "Wie finanzierte Trump seine Kampagne mit ausländischem Geld?",
    "options": [
      {
        "letter": "A",
        "text": "Shell-Companies versteckten ausländische Spenden; illegale Finanzierung"
      },
      {
        "letter": "B",
        "text": "Legale Finanzierung"
      },
      {
        "letter": "C",
        "text": "Transparente Quelle"
      },
      {
        "letter": "D",
        "text": "Amerikanische Spender"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trumps Kampagne nutzte Shell-Companies für ausländische Spenden – illegale Wahlkampf-Finanzierung. Verstöß gegen Wahlgesetze.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2016",
      "Wahlfinanzierung",
      "Illegal"
    ]
  },
  {
    "id": 35,
    "slug": "trump-foundation-lawsuit-charity-fraud-settlement-900k",
    "question": "Warum wurde Trumps Stiftung verklagt?",
    "options": [
      {
        "letter": "A",
        "text": "Gemeinnützigkeits-Betrug; Spendenmittel für Trump-Unternehmen genutzt"
      },
      {
        "letter": "B",
        "text": "Legitime Gemeinnützigkeit"
      },
      {
        "letter": "C",
        "text": "Transparente Stiftung"
      },
      {
        "letter": "D",
        "text": "Wohltätigkeit-Fokus"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "New York Attorney General: Trump Foundation verklagte wegen Betrug. Spendenmittel zur Finanzierung von Trump-Unternehmen missbraucht. Vergleich 900.000 Dollar.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Stiftung",
      "Betrug"
    ]
  },
  {
    "id": 36,
    "slug": "trump-foundation-iowa-veterans-money-restitution-falsch",
    "question": "Wie betrog Trump Veteran mit Foundation-Geld?",
    "options": [
      {
        "letter": "A",
        "text": "Spendenmittel für Iowa-Veteranen gingen an Trump-Kampagne statt Veteranen"
      },
      {
        "letter": "B",
        "text": "Korrekte Verwendung"
      },
      {
        "letter": "C",
        "text": "Veteranen-Unterstützung"
      },
      {
        "letter": "D",
        "text": "Transparente Verteilung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Foundation sammelte Geld für Iowa-Veteranen, leitete es zur Trump-Kampagne um – Veteranen-Betrug. New York Anklage.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2016",
      "Veteranen-Betrug",
      "Foundation"
    ]
  },
  {
    "id": 37,
    "slug": "trump-emoluments-clause-violations-foreign-payments",
    "question": "Wie verstieß Trump gegen \"Emoluments Clause\"?",
    "options": [
      {
        "letter": "A",
        "text": "Trump Hotels erhielten ausländische Regierungszahlungen; Verfassungsverstoß"
      },
      {
        "letter": "B",
        "text": "Einhaltung Verfassung"
      },
      {
        "letter": "C",
        "text": "Transparente Finanzen"
      },
      {
        "letter": "D",
        "text": "Keine Konflikt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump Hotels erhielten Zahlungen von ausländischen Regierungen – Verstoß gegen Emoluments Clause (Verfassung). Diverse Klagen; Supreme Court blockierte aber Überprüfung.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Verfassungsverstoß",
      "Emoluments"
    ]
  },
  {
    "id": 38,
    "slug": "trump-office-of-government-ethics-violaton-director-forced",
    "question": "Wie entfernte Trump die Ethik-Watchdog?",
    "options": [
      {
        "letter": "A",
        "text": "Feuerte Walter Shaub (Ethics Chief); Versuch Ethik-Überwachung zu blockieren"
      },
      {
        "letter": "B",
        "text": "Unterstützte Ethik-Büro"
      },
      {
        "letter": "C",
        "text": "Transparente Ethik"
      },
      {
        "letter": "D",
        "text": "Respektierte Ethik-Standards"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump unter Druck von Walter Shaub (Ethics Chief), der Interessenskonflikte dokumentierte. Shaub feuert später; Trump Ethik-Überwachung blockiert.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Ethik",
      "Blockade"
    ]
  },
  {
    "id": 39,
    "slug": "trump-executive-orders-unlawful-courts-blocked-immigration",
    "question": "Wie viele Exekutivanordnungen von Gerichten blockiert?",
    "options": [
      {
        "letter": "A",
        "text": "Hunderte; Richter fanden viele rechtswidrig"
      },
      {
        "letter": "B",
        "text": "Keine blockiert"
      },
      {
        "letter": "C",
        "text": "Alle verfassungskonform"
      },
      {
        "letter": "D",
        "text": "Kein Gerichtswiderstand"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Hunderte Exekutivanordnungen von Trump wurden von Gerichten blockiert – viele Richter fanden sie rechtswidrig. Beispiele: Muslim Ban, DACA-Aufhebung.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Exekutivanordnung",
      "Rechtswidrig"
    ]
  },
  {
    "id": 40,
    "slug": "trump-muslim-ban-executive-order-racism-unconstitutional",
    "question": "Was war Trumps \"Muslim Ban\"?",
    "options": [
      {
        "letter": "A",
        "text": "Exekutivanordnung, die Muslime aus 7+ Ländern ausschloss; Richter nannten es rassistisch"
      },
      {
        "letter": "B",
        "text": "Nationale Sicherheitsmaßnahme"
      },
      {
        "letter": "C",
        "text": "Legitime Einwanderungspolitik"
      },
      {
        "letter": "D",
        "text": "Verfassungskonform"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump signierte \"Travel Ban\" gegen Muslim-Länder (Iran, Syrien, etc.). Gerichte blockierten dreimal; Supreme Court erlaubte später. Rassistischer Intent dokumentiert.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Muslim Ban",
      "Rassismus"
    ]
  },
  {
    "id": 41,
    "slug": "trump-environmental-rollback-fossil-fuels-coal-industry",
    "question": "Welche Umweltschutzmaßnahmen baute Trump ab?",
    "options": [
      {
        "letter": "A",
        "text": "100+ Umweltvorschriften; profitierte Kohle/Öl-Industrie"
      },
      {
        "letter": "B",
        "text": "Verstärkte Umweltschutz"
      },
      {
        "letter": "C",
        "text": "Förderte erneuerbare Energien"
      },
      {
        "letter": "D",
        "text": "Folgte Wissenschaft"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump baute 100+ Umweltschutzvorschriften ab – Methan, Jagd, Wasser, Fracking. Kohle/Öl-Konzerne profitierten. Klima-Sabotage.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Umwelt",
      "Lobbyismus"
    ]
  },
  {
    "id": 42,
    "slug": "trump-corporate-tax-cuts-billionaires-workers-stagnate",
    "question": "Wem nützten Trumps Steuererleichterungen?",
    "options": [
      {
        "letter": "A",
        "text": "Milliardären und Konzernen; Arbeiterlöhne stagniert"
      },
      {
        "letter": "B",
        "text": "Mittelklasse und Arbeitern"
      },
      {
        "letter": "C",
        "text": "Allen gleichmäßig"
      },
      {
        "letter": "D",
        "text": "Hauptsächlich Armen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump Tax Cuts 2017: Steuersätze für Konzerne von 35% auf 21%. Billionäre zahlten weniger. Arbeiterlöhne stagnierten. Verrat an Arbeiter-Versprechen.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Steuerpolitik",
      "Ungleichheit"
    ]
  },
  {
    "id": 43,
    "slug": "trump-healthcare-sabotage-aca-obamacare-versuch-aufheben",
    "question": "Wie versuchte Trump Healthcare zu sabotieren?",
    "options": [
      {
        "letter": "A",
        "text": "Versuchte Obamacare zu zerstören; 20+ Millionen hätten Versicherung verloren"
      },
      {
        "letter": "B",
        "text": "Verstärkte Healthcare"
      },
      {
        "letter": "C",
        "text": "Universelle Versicherung"
      },
      {
        "letter": "D",
        "text": "Erweiterte Zugang"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump ordnete Angriff auf Affordable Care Act an. Versuch, Obamacare zu zerstören; 20+ Millionen hätten Versicherung verloren. Senat blockierte dreimal.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Healthcare",
      "Sabotage"
    ]
  },
  {
    "id": 44,
    "slug": "trump-supreme-court-overturn-roe-abortion-rights-dobbs",
    "question": "Wie manipulierte Trump Supreme Court für Roe-Aufhebung?",
    "options": [
      {
        "letter": "A",
        "text": "Ernannte 3 Anti-Abtreibungs-Richter; Dobbs-Entscheidung (2022) hob Roe auf"
      },
      {
        "letter": "B",
        "text": "Keine Justiz-Manipulation"
      },
      {
        "letter": "C",
        "text": "Respektierte Richter-Unabhängigkeit"
      },
      {
        "letter": "D",
        "text": "Keine Auswirkung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump ernannte Gorsuch, Kavanaugh, Barrett (3 Conservative Justices). Nach seinem Weggang: Dobbs-Entscheidung 2022 hob Roe auf. Trump-Ziel erfüllt.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Supreme Court",
      "Manipulation"
    ]
  },
  {
    "id": 45,
    "slug": "trump-election-lies-repeat-2024-deja-vu-wahlbetrug-lügen",
    "question": "Wiederholte Trump Wahlbetrug-Lügen 2024?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, behauptete erneut Betrug ohne Beweise; versuchte 2024-Wahl zu delegitimieren"
      },
      {
        "letter": "B",
        "text": "Akzeptierte Wahl"
      },
      {
        "letter": "C",
        "text": "Keine Lügen"
      },
      {
        "letter": "D",
        "text": "Transparente Aussagen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2024: Trump behauptete erneut ohne Beweise Wahlbetrug – exakte Wiederholung 2020-Lügen. Versuch, Wahl zu delegitimieren. Systemischer Betrug.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2024",
      "Wahlbetrug-Lügen",
      "Deja Vu"
    ]
  },
  {
    "id": 46,
    "slug": "trump-nuclear-secrets-bedside-book-national-security-risk",
    "question": "Was war das \"Bedside Classified Documents\"-Skandal?",
    "options": [
      {
        "letter": "A",
        "text": "Trump lagerte Atomwaffen-Geheimdokumente neben seinem Bett; Fremde konnten zugreifen"
      },
      {
        "letter": "B",
        "text": "Sichere Aufbewahrung"
      },
      {
        "letter": "C",
        "text": "Transparente Handhabung"
      },
      {
        "letter": "D",
        "text": "Keine Sicherheitsrisiken"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FBI-Razzia in Mar-a-Lago: Fanden Atomwaffen-Geheimdokumente in Schlafzimmern/Nachtschränken. Fremde (Mitglieder, Angestellte) konnten zugreifen. Nationale Sicherheitskrise.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2022",
      "Geheimdokumente",
      "Spionage"
    ]
  },
  {
    "id": 47,
    "slug": "trump-defiance-subpoena-executive-privilege-claim-invalid",
    "question": "Wie weigerte sich Trump, Subpoena zu folgen?",
    "options": [
      {
        "letter": "A",
        "text": "Beanspruchte \"Executive Privilege\" ohne Basis; Gericht wies Anspruch ab"
      },
      {
        "letter": "B",
        "text": "Kooperierte mit Ermittlung"
      },
      {
        "letter": "C",
        "text": "Respektierte Gerichtsbefehle"
      },
      {
        "letter": "D",
        "text": "Transparente Antwort"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump weigerte sich, Subpoena zu folgen (Januar-6-Komitee). Beanspruchte Executive Privilege ohne Grundlage. Gericht wies Anspruch ab – Versuch, Justiz zu blockieren.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2022",
      "Subpoena",
      "Justizbehinderung"
    ]
  },
  {
    "id": 48,
    "slug": "trump-classified-documents-stored-bathrooms-boxes",
    "question": "Wo lagerte Trump Klassifizierte Dokumente?",
    "options": [
      {
        "letter": "A",
        "text": "In Badezimmern, Ballsälen, Lagerhäusern; neben Kleidung und Gemälden"
      },
      {
        "letter": "B",
        "text": "Sichere Bunker"
      },
      {
        "letter": "C",
        "text": "Nationale Archive"
      },
      {
        "letter": "D",
        "text": "Autorisierte Lagerung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FBI-Razzia fand Geheimdokumente in Badezimmern, Ballsälen, Lagerhäusern – neben Trumps Kleidung, Gemälden. Grotexke Lagerung mit Sicherheitsrisiken.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2022",
      "Geheimdokumente",
      "Sicherheit"
    ]
  },
  {
    "id": 49,
    "slug": "trump-mar-a-lago-documents-stolen-foreign-spies-access",
    "question": "Hatten ausländische Spione Zugang zu Trumps Dokumenten?",
    "options": [
      {
        "letter": "A",
        "text": "FBI bekannt, dass ausländische Agenten Mar-a-Lago besuchten; Sicherheitsrisiko"
      },
      {
        "letter": "B",
        "text": "Keine Spione"
      },
      {
        "letter": "C",
        "text": "Sichere Umgebung"
      },
      {
        "letter": "D",
        "text": "Keine Sicherheitsrisiken"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "FBI dokumentierte: Ausländische Agenten besuchten Mar-a-Lago, konnten Geheimdokumenten sehen. Nationale Sicherheits-Katastrophe. Trump ignorierte Warnung.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2022",
      "Spionage",
      "Sicherheit"
    ]
  },
  {
    "id": 50,
    "slug": "trump-politische-wende-geschaeftemacher-politiker-verrat",
    "question": "War Trump ein echter Politiker oder Geschäftemacher?",
    "options": [
      {
        "letter": "A",
        "text": "Geschäftemacher mit Politlabel; Präsidentschaft = Geschäftsopportunität"
      },
      {
        "letter": "B",
        "text": "Echte Politische Überzeugungen"
      },
      {
        "letter": "C",
        "text": "Dienst am Gemeinwohl"
      },
      {
        "letter": "D",
        "text": "Werte-getrieben"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Profil: Geschäftemacher, nicht Politiker. Präsidentschaft als Bereicherung für Familie/Freunde. Versprechen waren Betrug. Eigeninteresse über öffentliche Wohl.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2025",
      "Geschäftemacher",
      "Verrat"
    ]
  },
  {
    "id": 51,
    "slug": "trump-trade-war-china-agricultural-subsidies-farmer-payment",
    "question": "Wie schadete Trumps Handelskrieg Bauern?",
    "options": [
      {
        "letter": "A",
        "text": "Sojabohnen-Zölle; Bauern benötigten 28 Milliarden Dollar Rettungs-Subventionen"
      },
      {
        "letter": "B",
        "text": "Bauern profitierten"
      },
      {
        "letter": "C",
        "text": "Tarife halfen Wirtschaft"
      },
      {
        "letter": "D",
        "text": "Keine Schäden"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Handelskrieg 2018-2019: China Zölle führten zu Sojabohnen-Absatz-Bruch. Bauern benötigten 28+ Milliarden Dollar Emergency-Subventionen. Verrat an Farmer-Wähler.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Handelskrieg",
      "Bauern"
    ]
  },
  {
    "id": 52,
    "slug": "trump-korea-peace-agreement-fail-retaliation-threat",
    "question": "Wie scheiterte Trumps Korea-Friedensabkommen?",
    "options": [
      {
        "letter": "A",
        "text": "Keine Denuklearisierung; Nordkorea baute weiter Atomwaffen; Drohungen folgten"
      },
      {
        "letter": "B",
        "text": "Vollständiger Erfolg"
      },
      {
        "letter": "C",
        "text": "Permanente Entwaffnung"
      },
      {
        "letter": "D",
        "text": "Friedensvertrag unterzeichnet"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump \"Lieberbriefe\" an Kim: Keine Ergebnisse. Nordkorea baute Atomwaffen weiter aus. Trump-Versprechen Desinformation.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Nordkorea",
      "Friedensversprechen"
    ]
  },
  {
    "id": 53,
    "slug": "trump-middle-east-tensions-iran-drone-assassination-soleimani",
    "question": "Wie eskalierte Trump Spannungen im Nahen Osten?",
    "options": [
      {
        "letter": "A",
        "text": "Drohnenanschlag auf Soleimani; Iran-Vergeltung, Kriegsangst"
      },
      {
        "letter": "B",
        "text": "De-Eskalation"
      },
      {
        "letter": "C",
        "text": "Diplomatie-Fokus"
      },
      {
        "letter": "D",
        "text": "Friedenspolitik"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Januar 2020: Trump ordnete Drohnenanschlag auf iranischen General Soleimani an. Iran drohte Vergeltung; Kriegsangst stieg. Eskalation ohne Diplomatie.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Iran",
      "Kriegseskalation"
    ]
  },
  {
    "id": 54,
    "slug": "trump-iraq-troop-withdrawal-announce-then-reverse-chaos",
    "question": "Wie verwirrte Trump mit Iraks Militär-Abzug?",
    "options": [
      {
        "letter": "A",
        "text": "Kündigte Abzug an, dann rückgängig; chaotische Signale, Region destabilisiert"
      },
      {
        "letter": "B",
        "text": "Klare Strategie"
      },
      {
        "letter": "C",
        "text": "Konsistente Politik"
      },
      {
        "letter": "D",
        "text": "Erfolgreiche Kriegsführung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump kündigte Iraks Truppabzug mehrfach an, reverste Ankündigungen. Chaotische Außenpolitik, Region destabilisiert. Keine klare Vision.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Irak",
      "Verwirrung"
    ]
  },
  {
    "id": 55,
    "slug": "trump-diplomacy-failure-north-korea-isolation-policy",
    "question": "Was war Trumps Nordkorea-Isolations-Politik?",
    "options": [
      {
        "letter": "A",
        "text": "Nach gescheitertem Gipfel: Zurück zu Sanktionen; Region gespannter"
      },
      {
        "letter": "B",
        "text": "Erfolgreiche Verhandlung"
      },
      {
        "letter": "C",
        "text": "Fortgesetzte Diplomatie"
      },
      {
        "letter": "D",
        "text": "Friedensgewinn"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Nach Trump-Kim Gipfel-Scheitern: Rückkehr zu Sanktionen. Nordkorea provozierte Tests. Region gespannter statt entspannt.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Nordkorea",
      "Diplomatie-Versagen"
    ]
  },
  {
    "id": 56,
    "slug": "trump-israel-palestine-conflict-one-sided-cherry-picking",
    "question": "War Trumps \"Peace Plan\" für Israel-Palästina einseitig?",
    "options": [
      {
        "letter": "A",
        "text": "Ja, 100% pro-Israel; keine echten Verhandlungen, Palästinenser rejecteten"
      },
      {
        "letter": "B",
        "text": "Ausgewogener Plan"
      },
      {
        "letter": "C",
        "text": "Beide Seiten unterstützten"
      },
      {
        "letter": "D",
        "text": "Faire Lösung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump \"Peace Plan\" 2020: 100% pro-Israel Positionen. Keine echten Verhandlungen. Palästinenser rejecteten sofort. Falsche Friedenspolitik.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Israel-Palästina",
      "Friedensversprechen-Betrug"
    ]
  },
  {
    "id": 57,
    "slug": "trump-uae-abraham-accords-arab-israel-normalization-war",
    "question": "Welcher geopolitische Fehler war Abraham Accords?",
    "options": [
      {
        "letter": "A",
        "text": "Normalisierte Israel-UAE statt Palästina-Lösung; Friedenscover für Rüstungsdeals"
      },
      {
        "letter": "B",
        "text": "Echter Friedensfortschritt"
      },
      {
        "letter": "C",
        "text": "Regionaler Frieden"
      },
      {
        "letter": "D",
        "text": "Nachhaltige Lösung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Abraham Accords: Israel-UAE Normalisierung, aber keine Palästina-Lösung. Cover für massive Rüstungsdeals. Nicht echte Friedenspolitik.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "UAE-Israel",
      "Friedensversprechen-Betrug"
    ]
  },
  {
    "id": 58,
    "slug": "trump-russia-ukraine-aid-withholding-impeachment-i",
    "question": "Warum blockierte Trump Ukraine-Waffenhilfe?",
    "options": [
      {
        "letter": "A",
        "text": "Versuchte Ermittlung gegen Biden zu erzwingen; Impeachment I Grund"
      },
      {
        "letter": "B",
        "text": "Reguläre Militärhilfe"
      },
      {
        "letter": "C",
        "text": "Transparente Ukraine-Politik"
      },
      {
        "letter": "D",
        "text": "Demokratie unterstützt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2019: Trump blockierte 400 Millionen Dollar Ukraine-Waffenhilfe, erpresste Ermittlung gegen Biden. Impeachment I Grund. Verrat an Verbündeter.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Ukraine",
      "Erpressung"
    ]
  },
  {
    "id": 59,
    "slug": "trump-russia-invasion-ukraine-predicted-nato-weak",
    "question": "Was sagte Trump vor Russlands Ukraine-Invasion?",
    "options": [
      {
        "letter": "A",
        "text": "\"Das ist genial\" – lobte Putins Plan als \"clever\"; NATO-Schwächung vorbereitet"
      },
      {
        "letter": "B",
        "text": "Warnte Putins Pläne ab"
      },
      {
        "letter": "C",
        "text": "Stärkte NATO"
      },
      {
        "letter": "D",
        "text": "Verteidigte Ukraine"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2022: Trump nannte Putins Ukraine-Invasion \"genial\" und \"clever\" – lobte Aggression. Hatte NATO systematisch geschwächt. Russland-Sympathie.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2022",
      "Russland",
      "Ukraine"
    ]
  },
  {
    "id": 60,
    "slug": "trump-nato-article-five-threat-withdraw-putin-sympath",
    "question": "Welche Drohung richtete Trump gegen NATO-Verbündete?",
    "options": [
      {
        "letter": "A",
        "text": "Drohte, Article 5 nicht zu ehren (wenn Russland angreift); NATO destabilisiert"
      },
      {
        "letter": "B",
        "text": "Stärkte NATO"
      },
      {
        "letter": "C",
        "text": "Unterstützte Allianz"
      },
      {
        "letter": "D",
        "text": "Garantierte Sicherheit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump drohte, Article 5 Verpflichtung nicht zu erfüllen – NATO Grund-Garantie. Destabilisierte Allianz, ermutigte Putins Aggression.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "NATO",
      "Putin-Sympathie"
    ]
  },
  {
    "id": 61,
    "slug": "trump-afghan-withdrawal-agreement-taliban-rush-chaos-flip",
    "question": "Wie vereinbarte Trump Afghanistans Chaos?",
    "options": [
      {
        "letter": "A",
        "text": "Verhandlungen mit Taliban (nicht Kabul-Regierung); chaotischer Mai-Abzug"
      },
      {
        "letter": "B",
        "text": "Geplante Koordinierung"
      },
      {
        "letter": "C",
        "text": "Geordneter Rückzug"
      },
      {
        "letter": "D",
        "text": "Legitimes Abkommen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump verhandelte Abzug mit Taliban (nicht Kabul-Regierung). Abkommen führte zu 2021-Chaos unter Biden. Trump hat Scheitern vorbereitet.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2020",
      "Afghanistan",
      "Abzug-Chaos"
    ]
  },
  {
    "id": 62,
    "slug": "trump-venezuela-guaido-failure-maduro-remains-power",
    "question": "Wie scheiterte Trumps Venezuela-Strategie?",
    "options": [
      {
        "letter": "A",
        "text": "Versuchte Guaidó-Coup; Maduro blieb an Macht, Region destabilisiert"
      },
      {
        "letter": "B",
        "text": "Demokratie-Erfolg"
      },
      {
        "letter": "C",
        "text": "Regimewechsel gelungen"
      },
      {
        "letter": "D",
        "text": "Stabilisierung"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump unterstützte gescheiterten Guaidó-Coup. Maduro blieb an Macht; Region destabilisiert. Venezuela-Krisis verschärft sich.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "Venezuela",
      "Coup-Versuch"
    ]
  },
  {
    "id": 63,
    "slug": "trump-hong-kong-crackdown-silence-china-trade-deal",
    "question": "Wie ignorierte Trump Chinas Hong Kong-Unterdrückung?",
    "options": [
      {
        "letter": "A",
        "text": "Kritisierte nicht, weil Phase-1 Handelsabkommen wichtiger war"
      },
      {
        "letter": "B",
        "text": "Verurteilte Unterdrückung"
      },
      {
        "letter": "C",
        "text": "Unterstützte Demonstranten"
      },
      {
        "letter": "D",
        "text": "Forderte Freiheit"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "2019-2020: Trump ignorierte Chinas Hong Kong-Sicherheitsgesetz (Unterdrückung der Protestierenden), weil Handelsabkommen Phase-1 wichtiger war.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "China",
      "Hongkong"
    ]
  },
  {
    "id": 64,
    "slug": "trump-uyghur-persecution-silence-xinjiang-concentration-camps",
    "question": "Wie ignorierte Trump Uyghur-Verfolgung in Xinjiang?",
    "options": [
      {
        "letter": "A",
        "text": "Kritisierte nicht trotz Konzentrationslagern; China-Geschäfte wichtiger"
      },
      {
        "letter": "B",
        "text": "Kritisierte Unterdrückung"
      },
      {
        "letter": "C",
        "text": "Sanktionierte China"
      },
      {
        "letter": "D",
        "text": "Forderte Menschenrechte"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Uyghur-Genozid in Xinjiang: Trump kritisierte kaum, weil China-Geschäfte wichtiger. Mengenverhaftungen und Unterdrückung ignoriert.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2019",
      "China",
      "Uyghur-Genozid"
    ]
  },
  {
    "id": 65,
    "slug": "trump-trade-war-manufacturing-loss-recession-threat",
    "question": "Wie schadete Trumps Handelskrieg der Wirtschaft?",
    "options": [
      {
        "letter": "A",
        "text": "Manufaktur-Jobs statt Gewinne; Rückgang statt Aufschwung; Rezessions-Angst"
      },
      {
        "letter": "B",
        "text": "Wirtschaftlicher Boom"
      },
      {
        "letter": "C",
        "text": "Job-Gewinne"
      },
      {
        "letter": "D",
        "text": "Wohlstand für Arbeiter"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Handelsz Kriegs-Zölle 2018-2019: Manufaktur-Beschäftigung stagniert, Unternehmensgewinne fallen, Verbraucher zahlen mehr. Rezessions-Angst stieg.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Handelskrieg",
      "Wirtschaft"
    ]
  },
  {
    "id": 66,
    "slug": "trump-tariffs-consumer-prices-inflation-working-families",
    "question": "Wie führte Trumps Zölle zu Inflation?",
    "options": [
      {
        "letter": "A",
        "text": "Zölle erhöhten Verbraucher-Preise um 19+ Milliarden Dollar für Haushalte"
      },
      {
        "letter": "B",
        "text": "Senkung Verbraucher-Preise"
      },
      {
        "letter": "C",
        "text": "Inflation bekämpft"
      },
      {
        "letter": "D",
        "text": "Sparsamkeit für Familien"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trumps Zölle erhöhten Verbraucher-Preise um 19+ Milliarden Dollar pro Jahr. Arbeiter-Familien zahlten dafür. Verrat an Wähler-Versprechung.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Zölle",
      "Inflation"
    ]
  },
  {
    "id": 67,
    "slug": "trump-global-leadership-weakened-reputation-usa-decline",
    "question": "Wie schwächte Trump die globale US-Führung?",
    "options": [
      {
        "letter": "A",
        "text": "Isolationismus, NATO-Drohungen, Alliierten-Kritik; USA-Ansehen gesunken"
      },
      {
        "letter": "B",
        "text": "Stärkte US-Ansehen"
      },
      {
        "letter": "C",
        "text": "Verbündete-Beziehung verbessert"
      },
      {
        "letter": "D",
        "text": "Globale Führung bewahrt"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Amtszeit: US-Ansehen weltweit gesunken (Umfragen 40-60% Zustimmung). Isolationismus, NATO-Drohungen, Alliierten-Kritik. Globale Führung geschwächt.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Außenpolitik",
      "Ansehen"
    ]
  },
  {
    "id": 68,
    "slug": "trump-paris-climate-agreement-withdrawal-isolation",
    "question": "Wie isolierte Trump die USA mit Klima-Austritt?",
    "options": [
      {
        "letter": "A",
        "text": "Kündigte Paris Klimaabkommen; einziger Leader mit Austritt"
      },
      {
        "letter": "B",
        "text": "Beigetreten Abkommen"
      },
      {
        "letter": "C",
        "text": "Klimaführer"
      },
      {
        "letter": "D",
        "text": "Multipolare Abkommen"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump kündigte Paris-Klimaabkommen – einziger Leader global mit Austritt. Isolierte USA international. Biden trat später wieder bei.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Klimaabkommen",
      "Isolation"
    ]
  },
  {
    "id": 69,
    "slug": "trump-military-spending-cuts-research-innovation-gap",
    "question": "Wie schwächte Trump die USA militärisch langfristig?",
    "options": [
      {
        "letter": "A",
        "text": "Reduzierte Militär-Forschung/Innovation; China/Russland überholten Technologie"
      },
      {
        "letter": "B",
        "text": "Erhöhte Militär-Stärke"
      },
      {
        "letter": "C",
        "text": "Technologie-Führung"
      },
      {
        "letter": "D",
        "text": "Strategie-Vorteil"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump Militär-Budgets: Reduzierte Forschung. China/Russland intensivierten Innovation. USA-Tech-Vorsprung schrumpfte. Langfristiger Nachteil.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Militär",
      "Innovation"
    ]
  },
  {
    "id": 70,
    "slug": "trump-intelligence-agencies-attacks-undermining-security",
    "question": "Wie schwächte Trump die Geheimdienste?",
    "options": [
      {
        "letter": "A",
        "text": "Attackierte CIA/FBI, traute Putin statt Agenten; Morale-Kollaps"
      },
      {
        "letter": "B",
        "text": "Unterstützte Geheimdienste"
      },
      {
        "letter": "C",
        "text": "Stärkte Überwachung"
      },
      {
        "letter": "D",
        "text": "Vertraute Experten"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump attackierte CIA/FBI öffentlich wegen kritischer Berichte. Traute Putin mehr als Geheimdiensten. Agenten-Morale fiel, Karrieren beendet.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Geheimdienste",
      "Untergrabung"
    ]
  },
  {
    "id": 71,
    "slug": "trump-state-department-exodus-career-diplomats-left",
    "question": "Wie führte Trump zum \"Braindrain\" im State Department?",
    "options": [
      {
        "letter": "A",
        "text": "Karriere-Diplomaten verließen; Morale-Kollaps; Fachkompetenz-Verlust"
      },
      {
        "letter": "B",
        "text": "Diplomatie verstärkt"
      },
      {
        "letter": "C",
        "text": "Erfahrung beibehalten"
      },
      {
        "letter": "D",
        "text": "Talente gefördert"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Amtszeit: Massiver Exodus von Career-Diplomaten aus State Department. Morale-Kollaps; Fachkompetenz verloren. USA-Diplomatie-Kapazität geschwächt.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "State Department",
      "Fachkompetenz"
    ]
  },
  {
    "id": 72,
    "slug": "trump-wto-withdrawal-threat-multilateral-system-collapse",
    "question": "Wie bedrohte Trump die WTO?",
    "options": [
      {
        "letter": "A",
        "text": "Drohte WTO-Austritt; multilaterales Handelssystem destabilisiert"
      },
      {
        "letter": "B",
        "text": "Unterstützte WTO"
      },
      {
        "letter": "C",
        "text": "Stärkte Zusammenarbeit"
      },
      {
        "letter": "D",
        "text": "Faire Handelssystem"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump drohte WTO-Austritt mehrfach. Zölle ohne WTO-Genehmigung. Multilaterales Handelssystem destabilisiert. Chaotische Außenpolitik.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "WTO",
      "Multilateralismus"
    ]
  },
  {
    "id": 73,
    "slug": "trump-canada-mexico-extradition-treaty-threat-blackmail",
    "question": "Wie drohte Trump seinen Nachbarn?",
    "options": [
      {
        "letter": "A",
        "text": "Drohte Kanada/Mexiko mit Zöllen bei Nichtkooperation; Erpressung"
      },
      {
        "letter": "B",
        "text": "Faire Verhandlungen"
      },
      {
        "letter": "C",
        "text": "Transparente Diplomatie"
      },
      {
        "letter": "D",
        "text": "Gute Nachbarschaften"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump drohte Kanada/Mexiko mit Zöllen zur Erzwingung von Zugeständnissen. Erpressungs-Taktik gegen traditionelle Verbündete.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2018",
      "Kanada-Mexiko",
      "Erpressung"
    ]
  },
  {
    "id": 74,
    "slug": "trump-environmental-diplomacy-paris-failure-isolation",
    "question": "Wie machte Trump die USA isoliert bei Klimawandel?",
    "options": [
      {
        "letter": "A",
        "text": "Verlies Paris, forderte CO2-Abbau-Verzicht; USA-Leadership verloren"
      },
      {
        "letter": "B",
        "text": "Klimaabkommen unterstützt"
      },
      {
        "letter": "C",
        "text": "Nachhaltige Diplomatie"
      },
      {
        "letter": "D",
        "text": "Global-Partnerschaft"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Klima-Politik: Verließ Paris, rollte Vorschriften ab, forderte andere zur Aufgabe auf. USA-Klima-Leadership verloren; China/Europa übernahmen.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2017",
      "Klima",
      "Diplomatie-Versagen"
    ]
  },
  {
    "id": 75,
    "slug": "trump-friedenspolitiker-mythos-kriege-eskalation-geschaeftemaker",
    "question": "War Trump wirklich ein \"Friedenspolitiker\"?",
    "options": [
      {
        "letter": "A",
        "text": "Nein, eskalierte Konflikte (Iran, Nord-Korea, China), reduzierte Diplomatie"
      },
      {
        "letter": "B",
        "text": "Friedensnobelpreis-Kandidat"
      },
      {
        "letter": "C",
        "text": "De-Eskalation erfolgreich"
      },
      {
        "letter": "D",
        "text": "Echte Friedensinitiative"
      }
    ],
    "correctAnswer": "A",
    "backgroundInfo": "Trump-Mythos: \"Friedenspolitiker\". Realität: Eskalierte Konflikte, reduzierte Diplomatie, Handelsskrieg, NATO-Schwächung. Geschäftemacher statt Friedenspolitiker.",
    "sourceLinks": [
      {
        "name": "BBC News",
        "url": "https://www.bbc.com"
      }
    ],
    "tags": [
      "Trump",
      "2025",
      "Mythos-Debunking",
      "Kriegstreiber"
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
