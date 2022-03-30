export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "nardinia/next-netlifycms-test",
    branch: "main",
  },
  editor: {
      preview: false,
  },
  media_folder: "public/images",
  public_folder: "images",
  collections: [
    {
      name: "posts",
      label: "Posts",
      folder: "content/posts",
      create: true,
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
        },
      ],
    },
  ],
};