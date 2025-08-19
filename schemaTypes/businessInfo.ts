import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'businessInfo',
  title: 'Geschäftsinformationen',
  type: 'document',
  fields: [
    // Contact Information
    defineField({
      name: 'businessName',
      title: 'Geschäftsname',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'owner',
      title: 'Inhaber',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Kontaktdaten',
      type: 'object',
      fields: [
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
          name: 'email',
          title: 'E-Mail',
          type: 'string',
          validation: Rule => Rule.email(),
        }),
      ],
    }),

    // Check-in/out Times
    defineField({
      name: 'checkInOut',
      title: 'Check-in / Check-out',
      type: 'object',
      fields: [
        defineField({
          name: 'checkIn',
          title: 'Check-in Zeit',
          type: 'string',
          placeholder: 'z.B. 15:00 - 20:00',
        }),
        defineField({
          name: 'checkOut',
          title: 'Check-out Zeit',
          type: 'string',
          placeholder: 'z.B. bis 11:00',
        }),
      ],
    }),

    // Social Media (only what's used)
    defineField({
      name: 'socialMedia',
      title: 'Soziale Medien',
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
  ],
  preview: {
    select: {
      title: 'businessName',
      subtitle: 'contact.city',
    },
  },
})