import React, { Component } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ProtectedIndex from './pages/ProtectedIndex'
import ApartmentNew from './pages/ApartmentNew'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import mockApartments from './mockApartments.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  createNewApartment = (newapartment) => {
    console.log(newapartment)
  }

  render () {
    console.log(this.state.apartments)
    console.log("logged in", this.props.logged_in)
    console.log("current user", this.props.current_user.id)
    return (
      <Router>

        <Header
          logged_in={ this.props.logged_in }
          new_user_route={ this.props.new_user_route }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
        />

        <Switch>
          <Route exact path='/' component={ Home } />

          {/* -----Index----- */}
          <Route
            path='/apartmentindex'
            render= { (props) => <ApartmentIndex
              apartments={ this.state.apartments }
            />
            }
          />


          {/* -----Show----- */}
          <Route
            path='/aptshow/:id'
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow apartment={ apartment } />
              )
            }}
          />

          {/* -----Protected Index----- */}
          <Route
            path="/myapartments"
            render={ (props) => {
              let id = this.props.current_user.id
              let myapartments = this.state.apartments.filter(apt => apt.user_id === id)
              console.log(myapartments)
              return(
                <ProtectedIndex myapartments={ myapartments } />
              )
            }}
          />

          {/* -----Apartment New----- */}
          <Route
            path="/apartmentnew"
            render={ (props) => {
              return (
                <ApartmentNew current_user={ this.props.current_user } createNewApartment={ this.createNewApartment } />
              )
            }}
          />

          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App
