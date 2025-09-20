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
      initialValue: 'Kontakt',
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta-Titel',
          type: 'string',
          initialValue: 'Kontakt – Haus Sandra',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta-Beschreibung',
          type: 'text',
          rows: 3,
          initialValue: 'Kontaktieren Sie das Haus Sandra für Buchungsanfragen, Anreiseinformationen und persönliche Beratung. Wir freuen uns auf Ihre Nachricht.',
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
