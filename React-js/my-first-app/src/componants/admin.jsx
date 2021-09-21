import React, { Component } from 'react';


class Admin extends Component {
    
    
    render() { 
        const { onDelete} = this.props;
        return (  
            <React.Fragment>
                <h1>Admin</h1>
                <button
                onClick={() => this.props.history.push("/productform/new")}
                 className="btn btn-primary">Add</button>
                <table className="table">
                  <thead>
                      <tr>
                      <th >Name</th>
                      <th >Price</th>
                      <th ></th>
                      <th ></th>
                      
                      </tr>
                  </thead>
                  <tbody>
                  {this.props.products.map(product => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <i className="far fa-edit" onClick={()=> this.props.history.push(`/productform/${product.id}`)}  ></i>
                      </td>
                      <td><i className="fas fa-trash m-2" onClick={()=> onDelete(product)}></i></td>
                    </tr>
                  ))}
                </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Admin;