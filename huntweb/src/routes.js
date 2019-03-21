import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "./pages/main";
import Product from "./pages/product";

// Switch permite que apenas uma unica rota seja chamada ao mesmo tempo
// No react router dom podemos fazer com que dois componentes sejam chamados quando acessar a rota
const Routes = () => (
    <BrowserRouter>
        <Switch>      
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Product}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;