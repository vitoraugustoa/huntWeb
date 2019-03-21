import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // Quando for metodo do proprio React utilizar Named functions
    // componentDidMount quando o componente iniciar ele é executado ( um metood de ciclo de vida do componente )
    componentDidMount() {
        this.loadProducts(1);
    }

    // Quando for uma função criada pelo desenvolvedor usar Arrow functions
    // Porque se utilizarmos named functions ele não vai saber diferenciar o this 
    loadProducts = async (page = 1) => {
        let url = "/5c93a0bf310000951b554653";

        if(page == 1){
            url = "/5c93a0bf310000951b554653";
        }
        else
        {
            url = "/5c93a0cb3100005a00554654"
        }

        const response = await api.get(url);

        // Rest operator { nomeIdentico ao do JSON } ele identifica e busca os dados.
        // '...' diz que o resto armaneza no variavel.
        const {docs , ...info } = response.data;

        this.setState({products: docs , productInfo: info, page: page});
    };
    

    prevPage = () => {
        const { page ,  productInfo } = this.state;

        console.log("Estou no prev" + page);

        this.loadProducts(1);    
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        console.log("Estou no next" + page);

        if(page == productInfo.pages) return;

        this.loadProducts(2);    
    };



    render() {
        const { products, page , productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product.id}>
                        <strong>{product.name}</strong>
                        <p>Cor do animal: {product.color} - Cidade do animal: {product.country}</p>

                        <Link to={`/products/${product.id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page == 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page == productInfo.pages } onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}