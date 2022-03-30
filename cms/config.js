export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "nardinia/next-netlifycms-test",
    branch: "master",
  },
  media_folder: "public/images",
  public_folder: "images",
  collections: [
    {
      name: "posts",
      label: "Posts",
      folder: "posts",
      fields: [
        {
          label: "Post Title",
          name: "post_title",
          widget: "string",
        },
        {
          label: "Date",
          name: "date",
          widget: "date",
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