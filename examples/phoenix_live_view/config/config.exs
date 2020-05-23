# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :phoenix_live_view,
  ecto_repos: [PhoenixLiveView.Repo]

# Configures the endpoint
config :phoenix_live_view, PhoenixLiveViewWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "T75fsZpc1DOF4NdpoXIh8n2q622Phf+j5p4uQlR7WgeY8T8A/JefiV2i3vBQEF2I",
  render_errors: [view: PhoenixLiveViewWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: PhoenixLiveView.PubSub,
  live_view: [signing_salt: "MBI2cy23"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
