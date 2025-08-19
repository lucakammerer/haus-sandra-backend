import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Website-Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Website-Titel',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Website-Beschreibung (für SEO)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Kontaktinformationen',
      type: 'object',
      fields: [
        defineField({
          name: 'businessName',
          title: 'Geschäftsname',
          type: 'string',
        }),
        defineField({
          name: 'owner',
          title: 'Inhaber',
          type: 'string',
        }),
        defineField({
          name: 'street',
          title: 'Straße und Hausnummer',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          title: 'Postleitzahl',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'Stadt',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Telefon',
          type: 'string',
        }),
        defineField({
          name: 'fax',
          title: 'Fax',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'E-Mail',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Plattform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'LinkedIn', value: 'linkedin'},
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Einstellungen',
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
})