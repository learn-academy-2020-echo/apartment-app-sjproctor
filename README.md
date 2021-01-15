# Apartment App

### Initial File Setup for React in Rails
- $ rails new apartment_app -d postgresql -T
- $ cd apartment_app
- $ rails db:create
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails g react:install
- $ rails g react:component App
- $ rails g controller Home
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
