import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.gif'
import *as apiPostit from '../../apis/postits'
import './Home.css'
import *as apiPostit from '../../apis/postits'

/*
1. Fazer o Loading aparecer caso a lista vazia
2. criar a lista no componentDidMount
3. jogar a lista no state do componente
4. for para adicionar os postits no else
*/



class Home extends React.Component {
    state = {
        postits: [],
        carregando: true
    }

    componentDidMount() {
        // TODO: buscar lista de postit
        //chamar a função que dispara a função


    adicionaPostit = (novoPostit) => {
        // this.state.postits.concat(postit)

    }
    editaPostits = (postitAlterado) => {
//depois chamara a ação de edita postit 

    removePostit = (idPostitRemovido) => {
        apiPostit.deletePostit (idPostitRemovido)
            .then (response => {
                this.setState (prevState => {
                    return {
                        postits: prevState.postits.filter (
                            postit => postit.id !== idPostitRemovido
                        )
                    }
                })
            })
        }


    render() {
        return (
            <div className="home">
                <Postit 
                    onAdicionaPostitClick = {this.adicionaPostit}
                    onEditaPostitClick={this.editaPostits}
                    onRemoverPostitClick={this.removePostit}
                    />
    
                <div className="home__lista">
                {
                    this.state.carregando ? (
                        <img src={loading} alt="Carregando lista de postit" />
                    ) : (
                        this.state.postits.map(postit => (
                            <Postit 
                                key={postit.id}
                                id={postit.id}
                                titulo={postit.titulo}
                                texto={postit.texto}
                                onAdicionaPostitClick ={this.adicionaPostit}
                                onEditaPostitClick={this.editaPostits}
                                onRemoverPostitClick={this.removePostit}
                            />
                        ))
                    )
                }
                }
                </div>
            </div>
        )
    }
}

export default Home