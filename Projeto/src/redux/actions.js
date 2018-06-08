import *as apiUsuario from '../apis/usuarios'
import {push} from 'react-router-redux'
//função disparadoras de ação 
//ações dos usuários
function disparaAcaoLogaUsuario (usuario) {
    return dispatch => {
        //aqui faz o que precisa fazer antes da ação ser disparada
        apiLogin.postUsuario(usuario)
        .then(response => {

            const usuarioRespondido = response.data.usuario
            localStorage.setItem('usuario',JSON.stringify(usuarioRespondido))

            // this.props.onEnviarClick()
            // const acao = {
            //     type: 'LOGA_USUARIO',
            //     //o padrão do type é com letra maiuscula
            //     payload: {
            //         usuario: usuarioRespondido
            //     }
            // }
            // dispatch (acao)

            //disparo acao para alterar o estado global
            dispatch ({
                type: 'LOGA_USUARIO',
                payload: {
                    usuario: usuarioRespondido
                }
            })
            //dispara uma ação para mudar de tela
            dispatch(push('/'))
        
        })
        .catch (erro => {
            alert(erro.response.data.erro)
        })
    }
}
function disparaAcaoDeslogaUsuario () {
    return dispatch => {
        localStorage.removeItem ('usuario')
        dispatch ({
            type: 'DESLOGA_USUARIO'
        })
    }
}


//açoes do postit
function disparaAcaoListaPostits () {
    return dispatch => {
        apiPostit.getPostits()
        .then (response => {
            dispatch (
                {
                    type: 'LISTA_POSTITS',
                    payload: {
                        postits: postits
                    }
                }
            )
            })
        
        .catch (error => {
            alert(error.response.data.erro)
        })
        
    }
}
function disparaAcaoAdicionaPostit (novoPostit) {
    return dispatch => {
        apiPostit.postPostit(novoPostit)
        .then (response => {
            novoPostit.id = response.data.id
            dispatch ({
                type: "EDITA_POSTIT",
                payload: {
                    novoPostit: novoPostit
                }
            }
            )
                return {
                    postits: prevState.postits.concat(novoPostit)
                }
            })
        })
    }
}
function disparaAcaoEditaPostit (postitEditado) {
    return dispatch => {
        apiPostit.putPostit(postitAlterado)
        .then (response => {
            
        })
    }
}