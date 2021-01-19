import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ProtectedIndex extends Component {
  render() {
    return (
      <>
        <h3>My Apartments</h3>
        <div className="main-index">
          { this.props.myapartments && this.props.myapartments.map((apartment, index) => {
            return (
              <div key={ index } className="index-card protected">
                <h5>{ apartment.street }</h5>
                <h5>{ apartment.city }</h5>
                <h5>{ apartment.state }</h5>
                <h5>{ apartment.manager }</h5>
                <h5>{ apartment.email }</h5>
                <h5>Bedrooms: { apartment.bedrooms }</h5>
                <h5>Bathrooms: { apartment.bathrooms }</h5>
                <h5>Pets: { apartment.pets }</h5>
                <div className="card-button protected-button">
                  <NavLink to={`/apartmentedit/${apartment.id}`}>
                    <Button color="secondary">
                      Edit Content
                    </Button>
                  </NavLink>
                  <NavLink to={"/myapartments"}>
                    <Button color="secondary" onClick={ () => this.props.deleteApartment }>
                      Delete
                    </Button>
                  </NavLink>
                </div>
              </div>
            )
          })}
          </div>
      </>
    )
  }
}
export default ProtectedIndex
