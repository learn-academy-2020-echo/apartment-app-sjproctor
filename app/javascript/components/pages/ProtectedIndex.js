import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ProtectedIndex extends Component {
  render() {
    return (
      <>
        <h3>My Apartments</h3>
        { this.props.myapartments && this.props.myapartments.map((apartment, index) => {
          return (
            <div>
              <h5>{ apartment.street }</h5>
              <h5>{ apartment.city }</h5>
              <h5>{ apartment.state }</h5>
              <p>
                <NavLink to={`/aptshow/${apartment.id}`}>
                  <Button color="secondary">
                    More Info
                  </Button>
                </NavLink>
              </p>
            </div>
          )
        })}
      </>
    )
  }
}
export default ProtectedIndex
