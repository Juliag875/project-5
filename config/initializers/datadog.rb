require 'ddtrace'
Datadog.configure do |c|
  c.profiling.enabled = true
  c.env = 'prod'
  c.service = 'my-web-app'
  c.version = '1.0.3'
  c.tracing.instrument :rails
  # c.use :rails, service_name: 'staging-rails-app'ra
end