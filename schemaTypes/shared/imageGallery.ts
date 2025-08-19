import {defineField} from 'sanity'

export const imageGalleryField = defineField({
  name: 'imageGallery',
  title: 'Bildergalerie',
  type: 'array',
  of: [
    {
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette'],
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternativtext',
          description: 'Beschreibung für Barrierefreiheit und SEO',
          validation: Rule => Rule.required().warning('Alt-Text verbessert SEO und Barrierefreiheit'),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Bildunterschrift',
          description: 'Optionale Beschreibung des Bildes',
        }),
        defineField({
          name: 'isMainImage',
          type: 'boolean',
          title: 'Hauptbild',
          description: 'Als Vorschaubild verwenden',
          initialValue: false,
        }),
      ],
    },
  ],
  validation: Rule => Rule.min(1).warning('Mindestens ein Bild sollte hinzugefügt werden'),
})