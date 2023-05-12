module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
  //     providerOptions: {
  //       apiKey: env('SENDGRID_API_KEY'),
  //     },
  //     settings: {
  //       defaultFrom: 'hudsonriver.adm@gmail.com',
  //       defaultReplyTo: 'hudsonriver.adm@gmail.com',
  //       testAddress: 'hudsonriver.adm@gmail.com',
  //     },
  //   },
  // },
});