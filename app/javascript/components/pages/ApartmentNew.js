import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: "",
        user_id: this.props.current_user.id
      },
      submitted: false
    }
  }
  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewApartment(this.state.form)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <React.Fragment>
        <h3>Add an Apartment</h3>
        <div className="body-container">
          <div className="form">
            <Form>
              <FormGroup>
                <Label>Street</Label>
                <Input
                  type="text"
                  name="street"
                  onChange={ this.handleChange }
                  value={ this.state.form.street }
                />
              </FormGroup>
              <FormGroup>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={ this.handleChange }
                  value={ this.state.form.city }
                />
              </FormGroup>
              <FormGroup>
                <Label>State</Label>
                <Input
                  type="text"
                  name="state"
                  onChange={ this.handleChange }
                  value={ this.state.form.state }
                />
              </FormGroup>
              <FormGroup>
                <Label>Manager's Name</Label>
                <Input
                  type="text"
                  name="manager"
                  onChange={ this.handleChange }
                  value={ this.state.form.manager }
                />
              </FormGroup>
              <FormGroup>
                <Label>Manager's Email</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={ this.handleChange }
                  value={ this.state.form.email }
                />
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  type="text"
                  name="price"
                  onChange={ this.handleChange }
                  value={ this.state.form.price }
                />
              </FormGroup>
              <FormGroup>
                <Label>Number of Bedrooms</Label>
                <Input
                  type="number"
                  name="bedrooms"
                  min="1" max="100"
                  onChange={ this.handleChange }
                  value={ this.state.form.bedrooms }
                />
              </FormGroup>
              <FormGroup>
                <Label>Number of Bathrooms</Label>
                <Input
                  type="number"
                  name="bathrooms"
                  min="1" max="100"
                  onChange={ this.handleChange }
                  value={ this.state.form.bathrooms }
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label>Pets</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                    type="radio"
                    name="pets"
                    value = "Yes"
                    checked={ this.state.form.pets === 'Yes' }
                    onChange = { this.handleChange }/>
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                    type="radio"
                    name="pets"
                    value = "No"
                    checked={ this.state.form.pets === 'No' }
                    onChange = { this.handleChange }/>
                    No
                  </Label>
                  </FormGroup>
                </FormGroup>
              <Button
                name="submit"
                color="secondary"
                onClick={ this.handleSubmit }
              >
                Add a New Apartment
              </Button>
            </Form>
          </div>
        </div>
        { this.state.submitted && <Redirect to="/myapartments" /> }
      </React.Fragment>
    )
  }
}
export default ApartmentNew
