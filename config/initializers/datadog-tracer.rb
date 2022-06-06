# Gemfile
gem 'ddtrace', require: 'ddtrace/auto_instrument'

# config/initializers/datadog-tracer.rb
Datadog.configure do |c|
  c.env = 'test2'
  c.service = 'test1'
end
