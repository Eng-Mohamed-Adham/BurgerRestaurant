import React, { Component } from 'react';
import Product from './product';

class ShoppingCard extends Component {
    


    render() { 
        const {details,onReset,onDelete,onIncrement}= this.props;
        return ( 
            <React.Fragment>
                <h1>Shopping Card</h1> 
                <button onClick={onReset} 
                className="btn btn-secondary btn-sm m-2">Reset</button>
                {details.map(one => (
                    <Product key={one.id} 
                    onDelete={onDelete}
                    product={one}
                    onIncrement={onIncrement}
                    />
                    

                ))}
            </React.Fragment>
        );
    }
}
 
export default ShoppingCard;