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

### Favicon
- Added an image to *app/assets/images*
- Added `<%= favicon_link_tag asset_path('house-icon.png') %>` to *app/views/layout/application.html.erb*

### Google Font
- Imported Google Font into app using the `@import` option
- Set the font to apply to all tags as default

### Navigation
- Added all existing pages to links in Header
- Imported NavLink from `react-router-dom` for internal component navigation

### New Page
- Adding a ApartmentNew component
- Added the link in the navigation in Header
- Added Forms from reactstrap for all fields
- Added handleChange to connect form fields to state
- Added handleSubmit to connect to App.js
- Added method to log new apartment in App.js
- Passed new method and current_user to ApartmentNew component

### Edit Page
- Adding a ApartmentEdit component
- Added the link to the button for the edit page in the protected index
- Copied form from ApartmentNew page
- Added method to log edited apartment in App.js
- Passed edit method, current_user, single apartment by id to ApartmentEdit component

### Delete Button
- Added a delete button to each item in the protected index
- Added delete method mock to App.js and passed it to ProtectedIndex
