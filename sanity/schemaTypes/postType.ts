import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Care & Education", value: "Care & Education" },
          { title: "Family Guides", value: "Family Guides" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "readTime",
      type: "string",
      description: 'e.g. "5 min read"',
    }),
    defineField({
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "coverImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
