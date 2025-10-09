export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#388E3C]">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-[#7CB342]">Trees Planted</h3>
          <p className="text-2xl font-bold">12,847</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-[#7CB342]">Active Users</h3>
          <p className="text-2xl font-bold">3,291</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-[#7CB342]">Eco Points</h3>
          <p className="text-2xl font-bold">847K</p>
        </div>
      </div>
    </div>
  )
}
