import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
   class="bg-purple-800 mb-6"
  >
    <div
      class="mx-auto max-w-4xl px-4 py-6"
    >
      <h1 class="m-0 text-white">
        <Link
          to="/"
          class="text-white no-decoration"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
