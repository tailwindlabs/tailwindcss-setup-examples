defmodule TailwindExample.Repo do
  use Ecto.Repo,
    otp_app: :tailwind_example,
    adapter: Ecto.Adapters.Postgres
end
