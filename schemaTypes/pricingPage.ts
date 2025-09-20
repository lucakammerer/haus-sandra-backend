import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricingPage',
  title: 'Preise',
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
      name: 'roomPricing',
      title: 'Zimmerpreise',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
        }),
        defineField({
          name: 'showRoomPrices',
          title: 'Zimmerpreise aus Gästezimmer-Dokumenten anzeigen',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: 'apartmentPricing',
      title: 'Wohnungspreise',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Überschrift',
          type: 'string',
        }),
        defineField({
          name: 'showApartmentPrices',
          title: 'Wohnungspreise aus Ferienwohnungs-Dokumenten anzeigen',
          type: 'boolean',
          initialValue: true,
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
