require 'rails_helper'

RSpec.describe "Apartments", type: :request do

  let(:user) { User.create email: 'sarah@test.com', password: '123456', password_confirmation: '123456' }

  # -----index-----
    it 'gets all the apartments' do
      Apartment.create street: '221B Baker Street', city: 'London', state: 'England', manager: 'Ms. Hudson', email: 'mzhud@email.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id

      get '/apartments'
      apartments = JSON.parse(response.body)

      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)
    end

    # -----create-----
    it 'creates a new apartment' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1000',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'no',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = Apartment.first

      expect(apartment.street).to eq '221B Baker Street'
      expect(response).to have_http_status(200)
    end

    # -----update-----
    it 'edits an apartment' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1000',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'no',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = Apartment.first

      new_apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      patch "/apartments/#{apartment.id}", params: new_apartment_params
      apartment = Apartment.find apartment.id

      expect(apartment.price).to eq '1500'
      expect(apartment.pets).to eq 'yes'
      expect(response).to have_http_status(200)
    end


    # -----delete-----
    it 'deletes an apartment' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = Apartment.first
      delete "/apartments/#{apartment.id}"
      apartments = Apartment.all

      expect(apartments).to be_empty
      expect(response).to have_http_status(200)
    end

    it 'cannot create a new apartment without a street' do
      apartment_params = {
        apartment: {
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['street']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new apartment without a city' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['city']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new apartment without a state' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['state']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new apartment without a manager' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['manager']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new apartment without an email' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['email']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new apartment without a price' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['price']).to include "can't be blank"
      expect(response).to have_http_status(422)

    end
    it 'cannot create a new apartment without bedrooms' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bathrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['bedrooms']).to include "can't be blank"
      expect(response).to have_http_status(422)

    end

    it 'cannot create a new apartment without bathrooms' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          pets: 'yes',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['bathrooms']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new apartment without pets' do
      apartment_params = {
        apartment: {
          street: '221B Baker Street',
          city: 'London',
          state: 'England',
          manager: 'Ms. Hudson',
          email: 'mzhud@email.com',
          price: '1500',
          bedrooms: 2,
          bathrooms: 2,
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      apartment = JSON.parse(response.body)

      expect(apartment['pets']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

end
