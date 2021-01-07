defmodule PhoenixLiveViewExample.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_live_view_example,
    adapter: Ecto.Adapters.Postgres
end
