export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "nardinia/next-netlifycms-test",
    branch: "main",
  },
  media_folder: "public/images",
  public_folder: "images",
  collections: [
    {
      name: "posts",
      label: "Posts",
      folder: "content/posts",
      create: true,
      identifier_field: name,
      fields: [
        {
          label: "Post Title",
          name: "post_title",
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