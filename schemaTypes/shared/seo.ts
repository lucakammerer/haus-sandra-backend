import {defineField} from 'sanity'

export const seoFields = [
  defineField({
    name: 'seo',
    title: 'SEO Einstellungen',
    type: 'object',
    fields: [
      defineField({
        name: 'metaTitle',
        title: 'Meta-Titel',
        type: 'string',
        description: 'Titel für Suchmaschinen (50-60 Zeichen)',
        validation: Rule => Rule.max(60).warning('Titel sollte nicht länger als 60 Zeichen sein'),
      }),
      defineField({
        name: 'metaDescription',
        title: 'Meta-Beschreibung',
        type: 'text',
        rows: 3,
        description: 'Beschreibung für Suchmaschinen (150-160 Zeichen)',
        validation: Rule => Rule.max(160).warning('Beschreibung sollte nicht länger als 160 Zeichen sein'),
      }),
      defineField({
        name: 'keywords',
        title: 'Schlüsselwörter',
        type: 'array',
        of: [{type: 'string'}],
        description: 'Relevante Suchbegriffe für diese Seite',
      }),
      defineField({
        name: 'ogImage',
        title: 'Social Media Bild',
        type: 'image',
        description: 'Bild für Social Media Shares (1200x630px empfohlen)',
        options: {
          hotspot: true,
        },
      }),
    ],
  }),
]