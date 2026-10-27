const Loader = () => {
  return (
    <div role="status" className="flex justify-center py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-500" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
export default Loader
