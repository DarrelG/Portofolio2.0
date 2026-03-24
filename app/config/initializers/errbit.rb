Airbrake.configure do |config|
  config.error_host = "http://127.0.0.1:3000"
  config.project_id = 1 # required, but any positive integer works
  config.project_key = "bf12aecef972a8a5b6f4f4120af931fa"

  # airbrake.io supports various features that are out of scope for
  # Errbit. Disable them:
  config.job_stats = false
  config.query_stats = false
  config.performance_stats = false
  config.remote_config = false
end
