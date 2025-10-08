export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Logo Section - Matching your actual logo */}
      <div className="flex items-center justify-center pt-10">
        <div className="relative">
          {/* Circular border */}
          <div 
            className="w-48 h-48 rounded-full border-4 flex items-center justify-center bg-white"
            style={{borderColor: "#9CCC65"}}
          >
            {/* Nurturing hand and plant */}
            <div className="flex flex-col items-center">
              <div className="text-6xl" style={{color: "#388E3C"}}>🤚</div>
              <div className="text-5xl -mt-6" style={{color: "#7CB342"}}>🌱</div>
            </div>
            {/* Earth globe */}
            <div className="absolute bottom-4">
              <span className="text-3xl">🌍</span>
            </div>
          </div>
          {/* Water droplet */}
          <div className="absolute -bottom-2 right-6">
            <span className="text-2xl" style={{color: "#29B6F6"}}>💧</span>
          </div>
        </div>
      </div>
      
      {/* JoinEcoGrow Title - Matching your logo colors */}
      <h1 className="text-5xl font-bold text-center mt-6">
        <span style={{color: "#388E3C"}}>Join</span>
        <span style={{color: "#388E3C"}}>Eco</span>
        <span style={{color: "#7CB342"}}>Grow</span>
      </h1>
      
      <p className="text-xl text-center mt-4" style={{color: "#689F38"}}>
        Marketing Hub - Revolutionary Platform for Sustainable Gaming
      </p>
      
      {/* Features Grid */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-2 hover:shadow-xl transition-shadow"
            style={{borderColor: "#9CCC65"}}
          >
            <div className="text-4xl mb-3">🌳</div>
            <h2 className="text-xl font-semibold mb-2" style={{color: "#388E3C"}}>
              Tree Planting
            </h2>
            <p className="text-gray-600">91 Features for real-world impact</p>
          </div>
          
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-2 hover:shadow-xl transition-shadow"
            style={{borderColor: "#9CCC65"}}
          >
            <div className="text-4xl mb-3">🎮</div>
            <h2 className="text-xl font-semibold mb-2" style={{color: "#388E3C"}}>
              Gaming Center
            </h2>
            <p className="text-gray-600">55 Eco-gaming features</p>
          </div>
          
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-2 hover:shadow-xl transition-shadow"
            style={{borderColor: "#9CCC65"}}
          >
            <div className="text-4xl mb-3">👥</div>
            <h2 className="text-xl font-semibold mb-2" style={{color: "#388E3C"}}>
              Community
            </h2>
            <p className="text-gray-600">87 Social features</p>
          </div>
        </div>
      </div>
      
      {/* Status Footer */}
      <div className="text-center mt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-lg font-semibold" style={{color: "#388E3C"}}>
            Platform Running Successfully
          </p>
        </div>
        <p className="text-sm mt-4 text-gray-600">
          925+ Features | 57 Languages | Global Impact
        </p>
      </div>
    </main>
  )
}