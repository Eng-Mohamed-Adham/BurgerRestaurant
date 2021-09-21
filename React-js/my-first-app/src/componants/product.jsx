import React,  {Component} from 'react';
import { Link } from 'react-router-dom';

class  Product extends Component {
    //state = { 
      //  name:this.props.product.name,
     //   count:this.props.product.count,
       
    // };

getclasses(){
 return(
    this.props.product.count === 0 
        ? "badge bg-warning m-2" 
        : "badge bg-primary m-2"
 );
}
// Answer  ==> num 1
    /*renderNames(){
        if (this.state.names.length ===0) {
            return <h2>No Name</h2>
        }
        return(
            <ul>
                        {this.state.names.map(name => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
        );

//بداخل ديف الريتيرن الي بداخل الريندر بكتب الاوامر هاد ,,وهاد عبارة عن الطريقة التانية 
  {this.state.names.length === 0 && <h4>No Name</h4>}
                <ul>
                    {this.state.names.map(name => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>

    }*/



//increment = () => {
 //   this.clickHandler(2);
//};



    render() { 
        return ( 
            <div className="row">
                <div className="col-2" >
                <Link to={`/products/${this.props.product.id}`} style={{textDecoration:'none'}}>{this.props.product.name}</Link>
                </div>
                <div className="col">
                <span className={this.getclasses()}>{this.props.product.count}</span>
                <button 
                onClick={()=>this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm">+</button>
                <span style={{cursor:'pointer'}} onClick={()=> this.props.onDelete(this.props.product)}>
                <i className="fas fa-trash m-2"></i>
                </span>
                </div>
                
                
            </div>
        );
    }
}
 
export default Product;