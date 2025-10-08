export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header with Logo Design */}
      <div className="flex items-center justify-center pt-10">
        <div className="relative">
          {/* Circular border matching your logo */}
          <div className="w-32 h-32 rounded-full border-4" style={{borderColor: "#9CCC65"}}>
            <div className="flex items-center justify-center h-full">
              {/* Hand and Plant Symbol */}
              <div className="text-center">
                <span className="text-4xl">🤚</span>
                <span className="text-3xl">🌱</span>
              </div>
            </div>
          </div>
          {/* Water droplet */}
          <div className="absolute -bottom-2 right-0">
            <span className="text-xl" style={{color: "#29B6F6"}}>💧</span>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-5xl font-bold text-center mt-6" style={{color: "#388E3C"}}>
        JoinEcoGrow
      </h1>
      <p className="text-xl text-center mt-2" style={{color: "#689F38"}}>
        Marketing Hub - Revolutionary UI/UX Coming Soon
      </p>
      
      {/* Features Grid */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2" style={{borderColor: "#7CB342"}}>
            <h2 className="text-2xl font-semibold mb-2" style={{color: "#388E3C"}}>
              🌳 Tree Planting
            </h2>
            <p className="text-gray-600">91 Features for real-world impact</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-2" style={{borderColor: "#7CB342"}}>
            <h2 className="text-2xl font-semibold mb-2" style={{color: "#388E3C"}}>
              🎮 Gaming Center
            </h2>
            <p className="text-gray-600">55 Eco-gaming features</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-2" style={{borderColor: "#7CB342"}}>
            <h2 className="text-2xl font-semibold mb-2" style={{color: "#388E3C"}}>
              👥 Community
            </h2>
            <p className="text-gray-600">87 Social features</p>
          </div>
        </div>
      </div>
      
      {/* Status */}
      <div className="text-center mt-12 p-4">
        <p className="text-lg" style={{color: "#388E3C"}}>
          ✅ Server Running Successfully
        </p>
        <p className="text-sm text-gray-600 mt-2">
          925+ Features Ready for Deployment
        </p>
      </div>
    </main>
  )
}
