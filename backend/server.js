const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const app= express()

const PORT= 3000
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://pratheekshadevarajphd123_db_user:GlUrberyDYF6tBN8@cluster0.grd6l3c.mongodb.net/tester?retryWrites=true&w=majority')

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})