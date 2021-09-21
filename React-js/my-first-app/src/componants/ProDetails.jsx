import React from 'react';

import qs from 'query-string';


class ProDetails extends React.Component {

  handelSave = () => {
    //Backend ==> save
    
    this.props.history.replace('/cart')
  }





  render() { 
    const res = qs.parse(this.props.location.search);
  console.log(res);


    const product = this.props.products.filter(
        c => c.id === parseInt(this.props.match.params.id)
      )[0];    return ( 
        <React.Fragment>
            <h1>Details No.{this.props.match.params.id}</h1>
        <h2>{product.name}</h2>
        <h2>Count in Shopping Cart: {product.count}</h2>
        <button onClick={this.handelSave} className="btn btn-primary btn-sm">Save</button>
        </React.Fragment>
     );
  }
}
 
export default ProDetails;







