defmodule TailwindExampleWeb.PageController do
  use TailwindExampleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
