import App from './app'
import Routes from './routes'

const app = new App()
const routes = new Routes()

app.get('/', Routes.get)
app.post('/', Routes.post)
app.listen(3000, () => {
  console.log('Listening on 3000')
})
