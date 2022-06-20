const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yags version
yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list a note",
  handler() {
    notes.listNotes();
  },
});

//create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//add,remove,read, list

yargs.parse();
