import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'guestRoom',
  title: 'Gästezimmer',
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
      name: 'roomType',
      title: 'Zimmertyp',
      type: 'string',
      options: {
        list: [
          {title: 'Einzelzimmer', value: 'single'},
          {title: 'Doppelzimmer', value: 'double'},
          {title: 'Dreibettzimmer', value: 'triple'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'Kapazität (Personen)',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bedConfiguration',
      title: 'Bettkonfiguration',
      type: 'string',
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
      name: 'amenities',
      title: 'Ausstattung',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Kleiderschrank', value: 'wardrobe'},
          {title: 'TV', value: 'tv'},
          {title: 'WLAN', value: 'wifi'},
          {title: 'Balkon', value: 'balcony'},
          {title: 'Panoramablick', value: 'panoramic-view'},
          {title: 'Eigenes Bad', value: 'private-bathroom'},
          {title: 'Dusche', value: 'shower'},
          {title: 'WC', value: 'toilet'},
          {title: 'Föhn', value: 'hairdryer'},
          {title: 'Handtuchheizkörper', value: 'towel-warmer'},
          {title: 'Bettwäsche inklusive', value: 'bedding-included'},
          {title: 'Handtücher inklusive', value: 'towels-included'},
        ],
      },
    }),
    defineField({
      name: 'sharedSpaces',
      title: 'Gemeinsame Räume',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Aufenthaltsraum', value: 'lounge'},
          {title: 'Frühstücksraum', value: 'breakfast-room'},
        ],
      },
    }),
    defineField({
      name: 'pricing',
      title: 'Preise',
      type: 'object',
      fields: [
        defineField({
          name: 'pricePerNight',
          title: 'Preis pro Nacht',
          type: 'number',
        }),
        defineField({
          name: 'breakfastPrice',
          title: 'Frühstückspreis',
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
      subtitle: 'roomType',
      media: 'mainImage',
    },
  },
})