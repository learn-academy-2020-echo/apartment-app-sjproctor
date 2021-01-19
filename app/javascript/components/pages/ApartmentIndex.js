import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApartmentIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <h3>All the Apartments</h3>
        <div className="main-index">
          { this.props.apartments && this.props.apartments.map((apartment, index) => {
            return (
              <div key={ index } className="index-card">
                <h5>{ apartment.street }</h5>
                <h5>{ apartment.city }</h5>
                <h5>{ apartment.state }</h5>
                <div className="card-button">
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    <Button color="secondary">
                      More Info
                    </Button>
                  </NavLink>
                </div>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default ApartmentIndex
