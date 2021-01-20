import React, { Component } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ProtectedIndex from './pages/ProtectedIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// import mockApartments from './mockApartments.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.indexApartment()
  }

  indexApartment = () => {
    fetch("/apartments")
    .then(response => {
      return response.json()
    })
    .then(payload => {
      this.setState({ apartments: payload })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewApartment = (newapartment) => {
    console.log(newapartment)
    fetch("/apartments", {
      body: JSON.stringify(newapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => {
      this.indexApartment()
    })
    .catch(errors => {
      console.log("create errors", errors)
    })
  }

  editApartment = (editedapartment) => {
    console.log(editedapartment)
  }

  deleteApartment = (apartment) => {
    console.log(apartment)
  }

  render () {
    console.log("logged in", this.props.logged_in)
    console.log("current user", this.props.current_user)
    console.log(this.state.apartments)
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
            path='/apartmentshow/:id'
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow apartment={ apartment } />
              )
            }}
          />

          {/* -----Protected Index----- */}
          { this.props.logged_in &&
            <Route
              path="/myapartments"
              render={ (props) => {
                let id = this.props.current_user.id
                let myapartments = this.state.apartments.filter(apt => apt.user_id === id)
                return(
                  <ProtectedIndex myapartments={ myapartments } deleteApartment={ this.deleteApartment }/>
                )
              }}
            />
          }


          {/* -----Protected Apartment New----- */}
          { this.props.logged_in &&
            <Route
              path="/apartmentnew"
              render={ (props) => {
                return (
                  <ApartmentNew current_user={ this.props.current_user } createNewApartment={ this.createNewApartment } />
                )
              }}
            />
          }

          {/* ----- Protected Apartment Edit----- */}
          { this.props.logged_in &&
            <Route
              path="/apartmentedit/:id"
              render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return (
                  <ApartmentEdit
                    current_user={ this.props.current_user }
                    editApartment={ this.editApartment }
                    apartment= { apartment }
                  />
                )
              }}
            />
          }

          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App
