require('dotenv').config()
const { request, response } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')



app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/info', (request, response) => {
  const date = new Date()
  Person.find({}).then(people => {
    response.send(`
        <p>Phonebook has info for ${people.length} people.</p>
        <p>${date}</p>
        `)
  })

})

app.get('/api/persons/:id', (request, response, next) => {

  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {next(error)})
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log('removed ',result.name, ' from the phonebook.')
      return response.status(204).end()
    })
    .catch(error => next(error))
  Person.deleteOne({ '_id': `ObjectId(${request.params.id})` })
  response.status(204).end()
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const filter = { name: body.name }
  const update = { number: body.number }
  const opts = { runValidators: true, new: true }

  Person.findOneAndUpdate(filter, update, opts)
    .then(updatedPerson => {
      return response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  console.log(request.body)

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save()
    .then(savedPerson => response.json(savedPerson))
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).send(error)
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)