import axios from 'axios'

const configuracao = {
    baseURL: 'https://reprograma-postit-api.herokuapp.com',
    timeout: 1000,
   
}
const usuarioJSON = JSON.parse (localStorage.getItem ('usuario'))
if (usuarioJSON) {
    configuracao.headers = {
        'Authorization': usuarioJSON.token
    }
}
const protocolo = axios.create(configuracao)
export default protocolo