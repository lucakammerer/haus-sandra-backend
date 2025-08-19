import {defineField, defineType} from 'sanity'
import {seoFields} from './shared/seo'

export default defineType({
  name: 'activitiesPage',
  title: 'Aktivitäten & Umgebung',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Aktivitäten & Erlebnisse',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero-Bereich',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Hauptüberschrift',
          type: 'string',
          initialValue: 'Aktivitäten & Erlebnisse',
        }),
        defineField({
          name: 'subtitle',
          title: 'Untertitel',
          type: 'string',
          initialValue: 'Entdecken Sie den Schwarzwald und die Ortenau - von Wanderungen bis Europa-Park',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Hintergrundbild',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt-Text',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // Location Overview
    defineField({
      name: 'locationOverview',
      title: 'Lageübersicht',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Perfekte Lage für Ihren Schwarzwald-Urlaub',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
          initialValue: 'Das Haus Sandra in Renchen-Ulm liegt inmitten einer der schönsten Regionen Deutschlands. Der Schwarzwald mit seinen endlosen Wanderwegen, die Nähe zu Baden-Baden, Strasbourg und dem Europa-Park macht uns zum idealen Ausgangspunkt für unvergessliche Erlebnisse.',
        }),
        defineField({
          name: 'highlights',
          title: 'Lage-Highlights',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: '🌲 Baum', value: '🌲'},
                      {title: '🚗 Auto', value: '🚗'},
                      {title: '🇫🇷 Frankreich', value: '🇫🇷'},
                      {title: '🏔️ Berg', value: '🏔️'},
                      {title: '🌍 Welt', value: '🌍'},
                      {title: '🎯 Ziel', value: '🎯'},
                      {title: '⭐ Stern', value: '⭐'},
                      {title: '🎪 Zirkus', value: '🎪'},
                      {title: '🏰 Schloss', value: '🏰'},
                      {title: '🌊 Wasser', value: '🌊'},
                    ],
                  },
                }),
                defineField({
                  name: 'title',
                  title: 'Titel',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Beschreibung',
                  type: 'string',
                }),
                defineField({
                  name: 'color',
                  title: 'Farbschema',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Grün', value: 'green'},
                      {title: 'Blau', value: 'blue'},
                      {title: 'Lila', value: 'purple'},
                      {title: 'Rot', value: 'red'},
                      {title: 'Orange', value: 'orange'},
                    ],
                  },
                }),
              ],
            },
          ],
          initialValue: [
            {
              icon: '🌲',
              title: 'Mitten im Schwarzwald',
              description: 'Über 1000 km markierte Wanderwege direkt vor der Haustür',
              color: 'green',
            },
            {
              icon: '🚗',
              title: 'Zentrale Lage',
              description: '30 Min. zum Europa-Park, 25 Min. nach Baden-Baden',
              color: 'blue',
            },
            {
              icon: '🇫🇷',
              title: 'Grenznahe Lage',
              description: '45 Min. nach Strasbourg, Elsass zum Greifen nah',
              color: 'purple',
            },
          ],
        }),
      ],
    }),

    // Wandern Section
    defineField({
      name: 'hikingSection',
      title: 'Wandern im Schwarzwald',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Wandern im Schwarzwald',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
          initialValue: 'Der Schwarzwald bietet über 1000 km markierte Wanderwege für alle Schwierigkeitsgrade. Von gemütlichen Spaziergängen bis zu anspruchsvollen Bergtouren.',
        }),
        defineField({
          name: 'trails',
          title: 'Wandertouren',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Beschreibung',
                  type: 'text',
                  rows: 3,
                }),
                defineField({
                  name: 'distance',
                  title: 'Entfernung von uns',
                  type: 'string',
                }),
                defineField({
                  name: 'difficulty',
                  title: 'Schwierigkeit',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Leicht', value: 'easy'},
                      {title: 'Mittel', value: 'medium'},
                      {title: 'Schwer', value: 'hard'},
                    ],
                  },
                }),
                defineField({
                  name: 'details',
                  title: 'Details',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'image',
                  title: 'Bild',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt-Text',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'category',
                  title: 'Kategorie',
                  type: 'string',
                  placeholder: 'z.B. Wasserfälle, Naturerlebnis, Bergtour',
                }),
                defineField({
                  name: 'color',
                  title: 'Farbschema',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Blau', value: 'blue'},
                      {title: 'Grün', value: 'green'},
                      {title: 'Lila', value: 'purple'},
                      {title: 'Rot', value: 'red'},
                    ],
                  },
                }),
              ],
            },
          ],
          initialValue: [
            {
              name: 'Allerheiligen Wasserfälle',
              description: 'Die berühmten Wasserfälle gehören zu den schönsten Naturschauspielen des Schwarzwalds. 7 Fallstufen auf 90 Metern Höhe.',
              distance: '35 km',
              difficulty: 'medium',
              details: ['Rundweg: 5 km, 2 Stunden', 'Schwierigkeit: Mittel', 'Parklätze vorhanden'],
              category: 'Wasserfälle',
              color: 'blue',
            },
            {
              name: 'Gertelbacher Wasserfälle',
              description: 'Familienfreundliche Wanderung zu den imposanten Wasserfällen durch ursprünglichen Schwarzwald.',
              distance: '25 km',
              difficulty: 'easy',
              details: ['Wanderung: 3 km, 1,5 Stunden', 'Schwierigkeit: Leicht', 'Familiengeeignet'],
              category: 'Naturerlebnis',
              color: 'green',
            },
            {
              name: 'Hornisgrinde (1164m)',
              description: 'Höchster Berg im Nordschwarzwald mit spektaculärem Panoramablick bis zu den Vogesen.',
              distance: '40 km',
              difficulty: 'hard',
              details: ['Aufstieg: 8 km, 3 Stunden', 'Schwierigkeit: Schwer', 'Aussichtsturm'],
              category: 'Bergtour',
              color: 'purple',
            },
          ],
        }),
      ],
    }),

    // Radfahren Section
    defineField({
      name: 'cyclingSection',
      title: 'Radfahren & E-Biking',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Radfahren & E-Biking',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
          initialValue: '500 km ausgeschilderte Radwege durch die malerische Ortenau. Von gemütlichen Taltouren bis zu anspruchsvollen Bergstrecken.',
        }),
        defineField({
          name: 'routes',
          title: 'Beliebte Radtouren',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Beschreibung',
                  type: 'string',
                }),
              ],
            },
          ],
          initialValue: [
            {
              name: 'Rheintal-Radweg',
              description: 'Flache Familien-Tour entlang des Rheins (25 km)',
            },
            {
              name: 'Weinstraße-Route',
              description: 'Durch Weinberge und Winzerdörfer (35 km)',
            },
            {
              name: 'Schwarzwald-Panorama',
              description: 'Anspruchsvolle Bergtour mit Aussicht (45 km)',
            },
          ],
        }),
        defineField({
          name: 'ebikeServices',
          title: 'E-Bike Service',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Service',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Beschreibung',
                  type: 'string',
                }),
              ],
            },
          ],
          initialValue: [
            {
              name: 'E-Bike Verleih',
              description: 'Hochwertige E-Bikes in Renchen verfügbar',
            },
            {
              name: 'Ladestationen',
              description: 'Zahlreiche Ladepunkte entlang der Strecken',
            },
            {
              name: 'Geführte Touren',
              description: 'Gruppentouren mit lokalem Guide buchbar',
            },
          ],
        }),
      ],
    }),

    // Top Ausflugsziele
    defineField({
      name: 'attractions',
      title: 'Top Ausflugsziele',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Top Ausflugsziele',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 2,
          initialValue: 'Von Weltklasse-Freizeitparks bis zu historischen Städten - entdecken Sie die Highlights der Region.',
        }),
        defineField({
          name: 'mainAttractions',
          title: 'Hauptattraktionen',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Beschreibung',
                  type: 'text',
                  rows: 3,
                }),
                defineField({
                  name: 'travelTime',
                  title: 'Fahrzeit',
                  type: 'string',
                }),
                defineField({
                  name: 'highlights',
                  title: 'Highlights',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'website',
                  title: 'Website',
                  type: 'url',
                }),
                defineField({
                  name: 'image',
                  title: 'Bild',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt-Text',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'category',
                  title: 'Kategorie',
                  type: 'string',
                  placeholder: 'z.B. Freizeitpark, Kurstadt, UNESCO Stadt',
                }),
                defineField({
                  name: 'color',
                  title: 'Farbschema',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Rot-Gelb', value: 'red-yellow'},
                      {title: 'Blau-Lila', value: 'blue-purple'},
                      {title: 'Blau-Rot', value: 'blue-red'},
                      {title: 'Grün-Blau', value: 'green-blue'},
                    ],
                  },
                }),
              ],
            },
          ],
          initialValue: [
            {
              name: 'Europa-Park Rust',
              description: 'Deutschlands größter Freizeitpark mit über 100 Attraktionen und 14 Achterbahnen. Über 5,5 Millionen Besucher jährlich.',
              travelTime: '30 Min.',
              highlights: ['20 Themenbereiche aus ganz Europa', 'Saison: März bis November', 'Rulantica Wasserwelt', '6 Themenhotels'],
              website: 'https://www.europapark.de',
              category: 'Freizeitpark',
              color: 'red-yellow',
            },
            {
              name: 'Baden-Baden',
              description: 'Weltberühmte Kurstadt mit eleganten Thermalbädern, Casino und Festspielhaus. Seit 2021 UNESCO-Welterbe.',
              travelTime: '25 Min.',
              highlights: ['Caracalla Therme & Friedrichsbad', 'Casino Baden-Baden', 'Festspielhaus', 'Lichtentaler Allee'],
              website: 'https://www.baden-baden.de',
              category: 'Kurstadt',
              color: 'blue-purple',
            },
            {
              name: 'Strasbourg, Frankreich',
              description: 'Hauptstadt des Elsass und Sitz des Europaparlaments. Wunderschöne Altstadt mit berühmtem Münster und La Petite France.',
              travelTime: '45 Min.',
              highlights: ['Straßburger Münster (465m Turm)', 'La Petite France Viertel', 'Europäische Institutionen', 'Berühmter Weihnachtsmarkt'],
              website: 'https://www.visitstrasbourg.fr',
              category: 'UNESCO Stadt',
              color: 'blue-red',
            },
          ],
        }),
        defineField({
          name: 'otherAttractions',
          title: 'Weitere Highlights',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'travelTime',
                  title: 'Fahrzeit',
                  type: 'string',
                }),
              ],
            },
          ],
          initialValue: [
            {name: 'Vogtsbauernhöfe Freilichtmuseum', travelTime: '20 Min.'},
            {name: 'Deutsches Uhrenmuseum Furtwangen', travelTime: '45 Min.'},
            {name: 'Barfußpark Hallwangen', travelTime: '35 Min.'},
            {name: 'Steinwasen-Park', travelTime: '50 Min.'},
            {name: 'Mummelsee', travelTime: '40 Min.'},
          ],
        }),
      ],
    }),

    // Seasonal Activities
    defineField({
      name: 'seasonalActivities',
      title: 'Saisonale Aktivitäten',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Das ganze Jahr über erleben',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'string',
          initialValue: 'Jede Jahreszeit bringt ihre besonderen Reize und Aktivitäten mit sich.',
        }),
        defineField({
          name: 'seasons',
          title: 'Jahreszeiten',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Jahreszeit',
                  type: 'string',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon/Emoji',
                  type: 'string',
                }),
                defineField({
                  name: 'activities',
                  title: 'Aktivitäten',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'color',
                  title: 'Farbschema',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Grün', value: 'green'},
                      {title: 'Gelb', value: 'yellow'},
                      {title: 'Orange', value: 'orange'},
                      {title: 'Blau', value: 'blue'},
                    ],
                  },
                }),
              ],
            },
          ],
          initialValue: [
            {
              name: 'Frühling',
              icon: '🌸',
              activities: ['Wandern bei mildem Wetter', 'Weinblüte in den Reben', 'Erste Radtouren', 'Märkte & Feste'],
              color: 'green',
            },
            {
              name: 'Sommer',
              icon: '☀️',
              activities: ['Schwimmen in Seen', 'Mountainbiking', 'Klettern & Paragliding', 'Sommerfeste'],
              color: 'yellow',
            },
            {
              name: 'Herbst',
              icon: '🍂',
              activities: ['Herbstwanderungen', 'Weinlese erleben', 'Pilze sammeln', 'Kastanienfeste'],
              color: 'orange',
            },
            {
              name: 'Winter',
              icon: '❄️',
              activities: ['Skifahren & Langlauf', 'Winterwandern', 'Weihnachtsmärkte', 'Wellness & Thermen'],
              color: 'blue',
            },
          ],
        }),
      ],
    }),

    // Transportation
    defineField({
      name: 'transportation',
      title: 'Anreise & Mobilität',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Anreise & Mobilität',
        }),
        defineField({
          name: 'methods',
          title: 'Anreisemöglichkeiten',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon/Emoji',
                  type: 'string',
                }),
                defineField({
                  name: 'details',
                  title: 'Details',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'color',
                  title: 'Farbschema',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Primary', value: 'primary'},
                      {title: 'Secondary', value: 'secondary'},
                      {title: 'Grün', value: 'green'},
                    ],
                  },
                }),
              ],
            },
          ],
          initialValue: [
            {
              name: 'Mit dem Auto',
              icon: '🚗',
              details: ['A5 Ausfahrt Appenweier', 'Kostenlose Parkplätze am Haus', 'Alle Ziele gut erreichbar'],
              color: 'primary',
            },
            {
              name: 'Öffentliche Verkehrsmittel',
              icon: '🚌',
              details: ['Busverbindung nach Renchen', 'S-Bahn nach Strasbourg', 'Schwarzwald-Gästecard'],
              color: 'secondary',
            },
            {
              name: 'Fahrrad & E-Bike',
              icon: '🚴',
              details: ['E-Bike Verleih vor Ort', 'Sichere Radabstellplätze', 'Reparatur-Service'],
              color: 'green',
            },
          ],
        }),
      ],
    }),

    // CTA Section
    defineField({
      name: 'cta',
      title: 'Call-to-Action',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Bereit für Ihr Schwarzwald-Abenteuer?',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
          initialValue: 'Buchen Sie Ihren Aufenthalt im Haus Sandra und entdecken Sie all die wunderbaren Aktivitäten und Sehenswürdigkeiten in unserer einzigartigen Region.',
        }),
        defineField({
          name: 'primaryButton',
          title: 'Haupt-Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button-Text',
              type: 'string',
              initialValue: '🏠 Jetzt buchen',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              initialValue: '/kontakt',
            }),
          ],
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Zweit-Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button-Text',
              type: 'string',
              initialValue: '🏡 Unterkünfte ansehen',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              initialValue: '/ferienwohnungen',
            }),
          ],
        }),
        defineField({
          name: 'features',
          title: 'Untertitel-Features',
          type: 'string',
          initialValue: '✨ Persönliche Beratung • Lokale Geheimtipps • Kostenlose Parkplätze',
        }),
      ],
    }),

    // SEO
    ...seoFields,
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})