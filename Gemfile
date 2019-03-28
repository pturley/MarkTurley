source 'https://rubygems.org'
ruby File.open(File.expand_path(".ruby-version", File.dirname(__FILE__))) { |f| f.read.chomp }

gem 'rails', '5.2.3'

gem 'pg'

group :development, :test do
  gem 'sqlite3'
end

gem 'sass-rails', '~> 5.0.7'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2.2'
gem 'jquery-rails'
gem 'turbolinks'
gem 'puma'
gem 'haml-rails'

group :production do
  gem 'rails_12factor'
  gem 'newrelic_rpm'
end

group :doc do
  gem 'sdoc', require: false
end
