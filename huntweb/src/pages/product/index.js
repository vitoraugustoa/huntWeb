import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';


export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        let response;

        if(id <= 10){
            response =  await api.get('/5c93a0bf310000951b554653');
        }else {
            response = await api.get('/5c93a0cb3100005a00554654');
        }

        response.data.docs.forEach(element => {
            if (element.id == id){
                this.setState({product: element});
            }
        });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>Cor do animal: {product.color} - Cidade do animal: {product.country}</p>

                <Link className="link-product" to="/">Voltar</Link>
            </div>
           
        )
    }
}