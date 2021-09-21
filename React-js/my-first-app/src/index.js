import React  from 'react';
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";


//import Product from './product';
//import ShoppingCard from './componants/shoppingCard';
import App from "./componants/app";

import'../node_modules/bootstrap/dist/css/bootstrap.css';
import'../node_modules/@fortawesome/fontawesome-free/css/all.css'

ReactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>
,document.querySelector("#root"));