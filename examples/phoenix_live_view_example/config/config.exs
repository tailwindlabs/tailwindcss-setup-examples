# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :phoenix_live_view_example,
  ecto_repos: [PhoenixLiveViewExample.Repo]

# Configures the endpoint
config :phoenix_live_view_example, PhoenixLiveViewExampleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "lroZkSTWwoxQ0SIEMvz0mc15r1QUE5kEoD5w54hEE5f9vKe21o5ijcNgjrAtwW2V",
  render_errors: [view: PhoenixLiveViewExampleWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: PhoenixLiveViewExample.PubSub,
  live_view: [signing_salt: "Z5BUkYKz"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
