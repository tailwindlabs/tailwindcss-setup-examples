defmodule PhoenixLiveView.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_live_view,
    adapter: Ecto.Adapters.Postgres
end
