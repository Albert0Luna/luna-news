import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    _id: {
      type: String
    },
    new_code: {
      type: String
    },
    url_es: {
      type: String
    },
    url_en: {
      type: String
    },
    language: {
      type: String
    },
    read_time: {
      type: String
    },
    sections: {
      type: [
        String
      ]
    },
    title: {
      type: String
    },
    main_image: {
      type: String
    },
    thumbnail_image: {
      type: String
    },
    image_alt: {
      type: String
    },
    main_image_source: {
      source_name: {
        type: String
      },
      url: {
        type: String
      }
    },
    author_id: {
      type: String
    },
    summary: {
      type: String
    },
    content: {
      type: [
        String
      ]
    },
    conclusion: {
      type: String
    },
    keywords: {
      type: [
        String
      ]
    },
  },
  { timestamps: true }
);

export default mongoose.models.NewsEn || mongoose.model('NewsEn', schema);