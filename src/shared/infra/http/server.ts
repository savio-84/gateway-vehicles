import { app } from './app';

app.listen(process.env.PORT, () => {
  console.log(`Vehicles server is running on port ${process.env.PORT}`)
})