# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :tailwind_example,
  ecto_repos: [TailwindExample.Repo]

# Configures the endpoint
config :tailwind_example, TailwindExampleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "WBu+xH1+Es+W8IozHAOk6TBZu169Fyen1Y3ZYN2aNfuw8p6OkZ4xFnNd6qPnaWu0",
  render_errors: [view: TailwindExampleWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TailwindExample.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
