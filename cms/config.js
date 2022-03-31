const button_config = [
  {
    label: "Button Text",
    name: "btn_text",
    widget: "string",
    required: true,
  },
  {
    label: "To",
    name: "btn_to",
    widget: "string",
    default: "/",
    required: true,
  },
  {
    label: "Colour",
    name: "btn_colour",
    widget: "select",
    options: ["primary", "secondary"],
    default: "primary",
    required: true,
  },
  {
    label: "Style",
    name: "btn_style",
    widget: "select",
    options: ["solid", "outline", "teritary"],
    default: "solid",
    required: true,
  },
];

const info_config = {
  label: "Info",
  name: "info",
  widget: "object",
  fields: [
    {
      label: "Title",
      name: "info_title",
      widget: "string",
      required: true,
    },
    {
      label: "Text",
      name: "info_text",
      widget: "markdown",
      required: true,
    },
    {
      label: "Image",
      name: "info_image",
      widget: "image",
      required: true,
    },
    {
      label: "Button",
      name: "info_btn",
      widget: "list",
      fields: button_config,
      required: false,
    },
  ]
}

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
          label: "Test Widget",
          name: "test",
          widget: "test",
        },
        info_config,
        {
          label: "Body",
          name: "body",
          widget: "markdown",
        },
      ],
    },
  ],
};