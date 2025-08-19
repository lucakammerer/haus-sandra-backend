import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Kontakt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Einleitung',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
        },
      ],
    }),
    defineField({
      name: 'contactMethods',
      title: 'Kontaktmöglichkeiten',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'preferredMethod',
          title: 'Bevorzugte Kontaktmethode',
          type: 'string',
          options: {
            list: [
              {title: 'Telefon', value: 'phone'},
              {title: 'E-Mail', value: 'email'},
              {title: 'Kontaktformular', value: 'form'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Geschäftszeiten',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
        }),
        defineField({
          name: 'weekdays',
          title: 'Montag - Freitag',
          type: 'string',
        }),
        defineField({
          name: 'saturday',
          title: 'Samstag',
          type: 'string',
        }),
        defineField({
          name: 'sunday',
          title: 'Sonntag',
          type: 'string',
        }),
        defineField({
          name: 'notes',
          title: 'Anmerkungen',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'directions',
      title: 'Anfahrtsbeschreibung',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
        }),
        defineField({
          name: 'byCarDescription',
          title: 'Anfahrt mit dem Auto',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H4', value: 'h4'},
              ],
            },
          ],
        }),
        defineField({
          name: 'publicTransportDescription',
          title: 'Öffentliche Verkehrsmittel',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H4', value: 'h4'},
              ],
            },
          ],
        }),
        defineField({
          name: 'parkingInfo',
          title: 'Parkinformationen',
          type: 'text',
          rows: 3,
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
      title: 'title',
    },
  },
})