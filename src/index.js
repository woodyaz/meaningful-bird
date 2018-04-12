import App from './app'
import Routes from './routes'

const app = new App()
const routes = new Routes()

app.get('/', routes.get)
app.post('/', routes.post)
app.listen(3000, () => {
  console.log('Listening on 3000')
})
