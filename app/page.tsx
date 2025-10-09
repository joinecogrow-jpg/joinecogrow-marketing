import MainNavigation from "./components/navigation/MainNavigation"

export default function Home() {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#388E3C] mb-4">
              Welcome to JoinEcoGrow
            </h1>
            <p className="text-xl text-[#689F38] mb-8">
              Where Gaming Meets Sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#9CCC65]">
              <h2 className="text-2xl font-bold text-[#388E3C] mb-3">🌳 Plant Trees</h2>
              <p className="text-gray-600">91 Features for real-world impact</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#9CCC65]">
              <h2 className="text-2xl font-bold text-[#7CB342] mb-3">🎮 Play Games</h2>
              <p className="text-gray-600">55 Eco-gaming features</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#9CCC65]">
              <h2 className="text-2xl font-bold text-[#29B6F6] mb-3">👥 Community</h2>
              <p className="text-gray-600">87 Social features</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
