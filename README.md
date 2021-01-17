# Apartment App

### Initial File Setup for React in Rails
- $ rails new apartment_app -d postgresql -T
- $ cd apartment_app
- $ rails db:create
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails generate react:component App
- $ rails generate controller Home
- Added to *app/view/home/index.html.erb* `<%= react_component "App" %>`
- Added to *config/routes* `root to: 'home#index'`
- $ bundle add rspec-rails
- $ rails generate rspec:install
- Added folders for assets, components, pages
- Added Header, Home, NotFound, Index, Show components

### Adding Devise
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate
- *config/environments/development.rb* `config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }`
- *config/initializers/devise.rb* replace this line `config.sign_out_via = :delete` with this one `config.sign_out_via = :get`

### Adding Apartments
- Apartments belong to a user
- Defined relationships in the models
- Added a mockApartments file in the outer components folder, import to App.js

### Reactstrap
- $ bundle add bootstrap
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- Add an import to the "sass" file `@import 'bootstrap'`
- $ yarn add reactstrap

### React Router
- $ yarn add react-router-dom
- Import components to App.js
- Setup static routes to Home, Index, Show, NotFound

### Header
- Pass Devise routes to Header
- Conditional rendering for sign in and sign out

### Index Page
- Refactor route to be dynamic
- Passed state to index
- Mapped over the array and displayed the street, city, state
- Mock of show button

### Show
- Dynamic route
- Pass one apartment and display the content

### ProtectedIndex
- Added `current_user` to Devise routes in *index.html.erb*
- Added new component to show apartments that belong to a user
- Route will filter the apartments in state and return only the apartments that match the current_user id
- Copied code from regular index and added to the ProtectedIndex page to display content

### Validations and Model Specs
- Validations for all columns in apartment
- Specs for all validations in *spec/models/apartments_spec.rb*

### Controller Methods
- Added index, create, update, delete, apartment_params
- Added request_specs for all methods and checking for params of all apartments columns
- Added one user and two apartments in the seeds file
- Testing all the endpoints in Postman
