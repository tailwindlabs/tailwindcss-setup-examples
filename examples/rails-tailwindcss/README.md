# Rails App with Tailwindcss

This Rails app uses:
- Rails `5.2.3`
- ruby `2.6.5``
- [webpacker](https://github.com/rails/webpacker) gem
- [tailwindcss](https://github.com/IcaliaLabs/tailwindcss-rails) gem

and intgrates [Tailwindcss](https://tailwindcss.com/) framework.

### Installation

- cd to the project
- run `bundle` to install the dependencies
- run `rails s` to start the server
- point your browser to `localhost:3000``

### To start up a newly fresh Rails app

- run `rails _5.2.3_ <your-app-name>
- add the following gems to your `Gemfile`:
```
gem 'webpacker', '~> 4.0.0'
gem 'tailwindcss', '~> 1.0.0'
```

- run the following commands in your terminal:
```
bundle
bundle exec rails webpacker:install
bundle exec rails g tailwindcss:install
```

You must add the following to your `config/initializers/content_security_policy.rb`:
```
Rails.application.config.content_security_policy do |policy|
  policy.connect_src :self, :https, 'http://localhost:3035', 'ws://localhost:3035' if Rails.env.development?
end
```

- inside of `config/webpacker.yml`, you must set `extract_css: true`, default is false.
- you have to add these two lines to your application layout in order to compile it:
```
<%= stylesheet_pack_tag    'application' %>
<%= javascript_pack_tag 'application' %>
```

Webpacker will automatically compile your assets while a bundle exec rails s is active.


Enjoy!
