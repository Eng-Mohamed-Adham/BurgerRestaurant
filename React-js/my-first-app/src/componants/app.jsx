import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCard from './shoppingCard';
import {Route , Switch,Redirect} from "react-router-dom";
import About from './about';
import Contact from './contact';
import Home from './home';
import ProDetails from './ProDetails';
import NotFound from './NotFound';
import Menu from './Menu';
import Login from './login';
import axios from 'axios';
import Admin from './admin';
import ProductForm from './productForm';




class App extends Component {
    state = { 
        details:[]
        };
        async componentDidMount(){
            //let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
            let { data } = await axios.get(
                "http://localhost:3000/details"
            );
            this.setState({details :data});
            
        };

        handelDelete = async (product) => {

                        const oldProducts = [...this.state.details];

                //State
                //Clone
                //Edit
                const products = this.state.details.filter((p) => p.id !== product.id);
                //Set state
                this.setState({ details:products });

                try {
                //Call B
                await axios.delete(
                    "https://iti-react-cource.herokuapp.com/products/" + product.id
                );
                } catch (ex) {
                alert("Cant Delete");
                this.setState({ details: oldProducts });
                }
        };


        handelReset = () => {
            let products = [...this.state.details];

            products.map(p => {
                p.count = 0;
                return p;
            });
            this.setState({details : products})
        };
        clickHandler = (product) => {
            //Clone
            const details =[...this.state.details];
            const index = details.indexOf(product);
            details[index]={...details[index]};
            //Edit
            details[index].count++;
            //set State
            this.setState({details});
            
        };
       
          handleInCartChange = (product) => {
            //Clone
            const products = [...this.state.details];
            const index = products.indexOf(product);
            products[index] = { ...products[index] };
            //Edit
            products[index].isInCart = !products[index].isInCart;
            //Set State
            this.setState({ details:products });
          };
        
    render() { 
        return ( 
            <React.Fragment>
                <NavBar productCount={this.state.details.filter(p => p.count > 0).length}>

                </NavBar>
                <main className="container">
                    <Switch>
                   
                                

                        <Route path="/products/:id/:name?"  render={props => (<ProDetails products={this.state.details} {...props}/>)}/>

                        <Route path='/about' component={About}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/home'  component={Home}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/admin' render={props => (
                                    <Admin 
                                    {...props}
                                    products={this.state.details}
                                    onDelete={this.handelDelete}
                                    />
                                    

                                )}/>
                                <Route path='/productform/:id' component={ProductForm}/>
                                <Route path='/cart' render={(props) => <ShoppingCard
                                details={this.state.details.filter((p) => p.isInCart)}
                                onIncrement={this.clickHandler}
                                onDelete={this.handleInCartChange}
                                onReset={this.handelReset}
                                {...props}
                                ></ShoppingCard>}/>
                                <Route path='/menu' render={(props) => (<Menu {...props} products={this.state.details} onClick={this.handleInCartChange} />)}/>
                                
                                <Route path='/notfound' component={NotFound}/>
                                <Redirect to='/notfound'/>
                                

                                

                    </Switch>
                    {/* <ShoppingCard
                    details={this.state.details}
                    onIncrement={this.clickHandler}
                    onDelete={this.handelDelete}
                    onReset={this.handelReset}
                   ></ShoppingCard> */}
                </main>
            </React.Fragment>

);
    }
}

export default App;