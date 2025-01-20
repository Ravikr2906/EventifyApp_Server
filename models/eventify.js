const mongoose = require("mongoose");

const eventifySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    eventSession: {
      start: { type: String },
      end: { type: String },
    },
    venue: {
      place: { type: String },
      city: { type: String },
    },
    price: {
      type: Number,
    },
    speakers: [
      {
        name: { type: String },
        image: { type: String },
        designation: { type: String },
      },
    ],
    details: {
      type: String,
      required: true,
    },
    additionalInfo: {
      dressCode: { type: String },
      ageRestrictions: { type: String },
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EventifyApp = mongoose.model("meetupApp", eventifySchema);
module.exports = EventifyApp;
