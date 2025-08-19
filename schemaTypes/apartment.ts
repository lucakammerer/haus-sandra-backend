import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'apartment',
  title: 'Ferienwohnung',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Typ',
      type: 'string',
      options: {
        list: [
          {title: 'Haupthaus', value: 'main-house'},
          {title: 'Nebenhaus', value: 'side-house'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'Kapazität',
      type: 'object',
      fields: [
        defineField({
          name: 'min',
          title: 'Mindestpersonen',
          type: 'number',
        }),
        defineField({
          name: 'max',
          title: 'Maximalpersonen',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'size',
      title: 'Größe (m²)',
      type: 'number',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detaillierte Beschreibung',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
        },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Raumaufteilung',
      type: 'object',
      fields: [
        defineField({
          name: 'bedrooms',
          title: 'Anzahl Schlafzimmer',
          type: 'number',
        }),
        defineField({
          name: 'livingArea',
          title: 'Wohnbereich',
          type: 'boolean',
        }),
        defineField({
          name: 'kitchen',
          title: 'Küche',
          type: 'boolean',
        }),
        defineField({
          name: 'bathroom',
          title: 'Badezimmer',
          type: 'boolean',
        }),
        defineField({
          name: 'balcony',
          title: 'Balkon/Terrasse',
          type: 'string',
        }),
        defineField({
          name: 'separateEntrance',
          title: 'Separater Eingang',
          type: 'boolean',
        }),
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Ausstattung',
      type: 'object',
      fields: [
        defineField({
          name: 'kitchen',
          title: 'Küchenausstattung',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Ceranfeld', value: 'ceramic-cooktop'},
              {title: 'Backofen', value: 'oven'},
              {title: 'Mikrowelle', value: 'microwave'},
              {title: 'Geschirrspüler', value: 'dishwasher'},
              {title: 'Toaster', value: 'toaster'},
              {title: 'Wasserkocher', value: 'kettle'},
              {title: 'Kaffeemaschine', value: 'coffee-maker'},
              {title: 'Kühlschrank mit Gefrierfach', value: 'fridge-freezer'},
            ],
          },
        }),
        defineField({
          name: 'bathroom',
          title: 'Badezimmerausstattung',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Dusche', value: 'shower'},
              {title: 'Badewanne', value: 'bathtub'},
              {title: 'WC', value: 'toilet'},
              {title: 'Föhn', value: 'hairdryer'},
              {title: 'Handtuchheizkörper', value: 'towel-warmer'},
            ],
          },
        }),
        defineField({
          name: 'general',
          title: 'Allgemeine Ausstattung',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Sat-TV', value: 'satellite-tv'},
              {title: 'WLAN', value: 'wifi'},
              {title: 'Bettwäsche', value: 'bedding'},
              {title: 'Handtücher', value: 'towels'},
              {title: 'Putzeimer und Besen', value: 'cleaning-supplies'},
              {title: 'Wäscheständer', value: 'drying-rack'},
              {title: 'Bügelbrett und Bügeleisen', value: 'ironing'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'pricing',
      title: 'Preise',
      type: 'object',
      fields: [
        defineField({
          name: 'basePrice',
          title: 'Grundpreis (1-2 Personen)',
          type: 'number',
        }),
        defineField({
          name: 'additionalPerson',
          title: 'Zusatzperson',
          type: 'number',
        }),
        defineField({
          name: 'childPrice',
          title: 'Kind (6-12 Jahre)',
          type: 'number',
        }),
        defineField({
          name: 'singleNightSurcharge',
          title: 'Einzelübernachtungszuschlag',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Bilder',
      type: 'array',
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
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'available',
      title: 'Verfügbar',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'mainImage',
    },
  },
})