const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// custom yargs version
yargs.version('1.1.0')

// add notes
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: { 
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// removes notes
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{  
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
});


// read notes
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
    },
    handler (argv) {
        console.log('Reading note');
        notes.readNote(argv.title);
    }
});

// list notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler () {
        console.log(chalk.bgYellow("Your notes:"));
        notes.listNotes();
    }
});


yargs.parse();

