import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero-Bereich',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Hauptüberschrift',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'subheadline',
          title: 'Unterüberschrift',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'gallery',
          title: 'Hero-Bilder (Slider)',
          type: 'array',
          description: 'Bilder für den Hero-Slider. Das erste Bild wird als Hauptbild verwendet.',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternativtext',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'infoBar',
          title: 'Infoleiste unter Hero',
          type: 'object',
          fields: [
            defineField({
              name: 'locationText',
              title: 'Ort (Text)',
              type: 'string',
              initialValue: 'Renchen-Ulm, Schwarzwald',
            }),
            defineField({
              name: 'phone',
              title: 'Telefon',
              type: 'string',
              initialValue: '07843 993046',
            }),
            defineField({
              name: 'email',
              title: 'E-Mail',
              type: 'string',
              initialValue: 'post@haus-sandra-ulm.de',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'welcomeSection',
      title: 'Willkommensbereich',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Bild',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'locationSection',
      title: 'Standort & Anfahrt',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'So finden Sie zu uns',
        }),
        defineField({
          name: 'subtitle',
          title: 'Untertitel',
          type: 'string',
          initialValue: 'Ihre Anreise ins Haus Sandra',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
          initialValue: 'Unser Haus liegt in einer ruhigen und idyllischen Lage in Renchen-Ulm. Hier finden Sie alle Informationen für eine entspannte Anreise.',
        }),
        defineField({
          name: 'address',
          title: 'Vollständige Adresse',
          type: 'object',
          fields: [
            defineField({
              name: 'street',
              title: 'Straße und Hausnummer',
              type: 'string',
              initialValue: 'Weingartenstraße 69',
            }),
            defineField({
              name: 'postalCode',
              title: 'Postleitzahl',
              type: 'string',
              initialValue: '77871',
            }),
            defineField({
              name: 'city',
              title: 'Ort',
              type: 'string',
              initialValue: 'Renchen-Ulm',
            }),
            defineField({
              name: 'country',
              title: 'Land',
              type: 'string',
              initialValue: 'Deutschland',
            }),
          ],
        }),
        defineField({
          name: 'coordinates',
          title: 'GPS-Koordinaten',
          type: 'geopoint',
          description: 'Koordinaten für Google Maps (Lat: 48.5998, Lng: 7.9411)',
          initialValue: {
            lat: 48.5998,
            lng: 7.9411,
          },
        }),
        defineField({
          name: 'googleMapsEmbedUrl',
          title: 'Google Maps Embed URL',
          type: 'url',
          description: 'URL für die eingebettete Google Maps Karte',
          initialValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.5!2d7.9411!3d48.5998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791075d8b7f83b9%3A0x0!2sWeingartenstra%C3%9Fe%2069%2C%2077871%20Renchen-Ulm%2C%20Deutschland!5e0!3m2!1sde!2sde!4v1734950000000!5m2!1sde!2sde',
        }),
        defineField({
          name: 'directionsText',
          title: 'Anfahrtsbeschreibung',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'method',
                  title: 'Verkehrsmittel',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Mit dem Auto', value: 'car'},
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
                  type: 'text',
                  rows: 4,
                }),
                defineField({
                  name: 'travelTime',
                  title: 'Reisezeit',
                  type: 'string',
                }),
              ],
            },
          ],
          initialValue: [
            {
              method: 'car',
              title: 'Anfahrt mit dem Auto',
              description: 'Wenn Sie über die Autobahn A5 anreisen, empfehlen wir Ihnen von Norden kommend die Ausfahrt Achern (Nr. 53) auf der A5, aus südlicher Richtung die Abfahrt Appenweier (Nr. 54). Aus östlicher Richtung, beispielsweise über die B 500 (Schwarzwaldhochstraße) führt Sie die Bundesstraße B 28 über Oberkirch zu uns nach Ulm. Ausgehend vom Ulmer Ortszentrum ist das "Haus Sandra", beginnend am Abzweig in die Reiersbacher Straße, ausgeschildert.',
              travelTime: 'Ca. 5-10 Min. von der Autobahn',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Besonderheiten',
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
                  {title: 'Parkplatz', value: 'parking'},
                  {title: 'WLAN', value: 'wifi'},
                  {title: 'Frühstück', value: 'breakfast'},
                  {title: 'Natur', value: 'nature'},
                  {title: 'Familie', value: 'family'},
                  {title: 'Fahrrad', value: 'bike'},
                  {title: 'Wandern', value: 'hiking'},
                  {title: 'Ruhe', value: 'quiet'},
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
              type: 'text',
              rows: 2,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'accommodationPreview',
      title: 'Unterkunfts-Vorschau',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'Wählen Sie Ihre perfekte Unterkunft',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 2,
          initialValue: 'Von gemütlichen Ferienwohnungen bis hin zu komfortablen Gästezimmern - bei uns finden Sie genau das Richtige für Ihren Schwarzwald-Aufenthalt.',
        }),
        defineField({
          name: 'showApartments',
          title: 'Ferienwohnungen anzeigen',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showRooms',
          title: 'Gästezimmer anzeigen',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call-to-Action Bereich',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'Buchen Sie jetzt Ihre perfekte Auszeit',
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'text',
          rows: 2,
          initialValue: 'Erleben Sie unvergessliche Momente im wunderschönen Schwarzwald. Ihre Erholung beginnt mit einer einfachen Anfrage.',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button-Text',
          type: 'string',
          initialValue: 'Jetzt unverbindlich anfragen',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button-Link',
          type: 'string',
          initialValue: '/kontakt',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta-Titel',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta-Beschreibung',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.headline',
    },
  },
})
