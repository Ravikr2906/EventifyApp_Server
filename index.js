const { get } = require("mongoose");

const { initializieDatabase } = require("./db/db.connect");
const MeetupApp = require("./models/meetup.js");
// const Books = require("./models/book.model.js");
const express = require("express");

const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
initializieDatabase();

const createNewData = async (eventData) => {
  try {
    const event = new MeetupApp(eventData);
    const saveEvent = await event.save();
    return saveEvent;
  } catch (error) {
    throw error;
  }
};

app.post("/eventData", async (req, res) => {
  try {
    const savedData = await createNewData(req.body);
    res.status(200).json({ message: "Data saved successfully", savedData });
  } catch (error) {
    res.status(500).json(error);
  }
});

const readAllEvents = async () => {
  try {
    const allEvents = await MeetupApp.find();
    return allEvents;
  } catch (error) {
    throw error;
  }
};

app.get("/events", async (req, res) => {
  try {
    const event = await readAllEvents();
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json("Data not found.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
