const mongoose = require('mongoose')

if (process.argv.length < 3 && process.argv.length > 5) {
    console.log("Improper usage. Please use one of the following: node mongo.js <password> or node mongo.js <password> <name> <number>")
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.tosik.mongodb.net/phonebook-app?retryWrites=true&w=majority`



mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
    
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(result => {
        console.log(`Added ${person.name} with number ${person.number} to phonebook.`)
        mongoose.connection.close()
    })
} else {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        });
        
        mongoose.connection.close()
    });
}