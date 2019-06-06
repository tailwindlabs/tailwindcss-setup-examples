import '../assets/scss/tailwind.scss'

export default ({ children }) => {
  return (
    <div className="antialiased font-sans text-gray-900 flex items-center justify-center min-h-screen">
      { children }
    </div>
  )
}
