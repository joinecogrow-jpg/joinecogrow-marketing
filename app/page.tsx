export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      {/* Logo Section */}
      <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
        <div style={{width:"200px",height:"200px",borderRadius:"50%",border:"4px solid #9CCC65",display:"flex",alignItems:"center",justifyContent:"center",background:"white"}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:"3rem",color:"#388E3C"}}>🤚</div>
            <div style={{fontSize:"2.5rem",marginTop:"-1rem",color:"#7CB342"}}>🌱</div>
            <div style={{fontSize:"1.5rem"}}>🌍</div>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h1 style={{textAlign:"center",fontSize:"3rem",marginTop:"2rem",color:"#388E3C",fontWeight:"bold"}}>
        Join<span style={{color:"#689F38"}}>Eco</span><span style={{color:"#7CB342"}}>Grow</span>
      </h1>
      <div style={{textAlign:"center",marginTop:"0.5rem"}}>
        <span style={{fontSize:"1.5rem",color:"#29B6F6"}}>💧</span>
      </div>
      
      {/* Tagline */}
      <p style={{textAlign:"center",fontSize:"1.25rem",marginTop:"1rem",color:"#689F38"}}>
        Where Gaming Meets Sustainability
      </p>
      
      {/* Features Grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"1.5rem",maxWidth:"1200px",margin:"3rem auto",padding:"0 1rem"}}>
        <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.5rem",marginBottom:"0.5rem"}}>🌳 Tree Planting</h2>
          <p style={{color:"#666"}}>91 Features for real-world environmental impact</p>
        </div>
        <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.5rem",marginBottom:"0.5rem"}}>🎮 Gaming Hub</h2>
          <p style={{color:"#666"}}>55 Eco-gaming features and challenges</p>
        </div>
        <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.5rem",marginBottom:"0.5rem"}}>👥 Community</h2>
          <p style={{color:"#666"}}>87 Social features for global impact</p>
        </div>
      </div>
      
      {/* Status */}
      <div style={{textAlign:"center",marginTop:"3rem",padding:"1rem",background:"white",borderRadius:"50px",maxWidth:"400px",margin:"3rem auto",border:"2px solid #7CB342"}}>
        <p style={{color:"#388E3C",fontSize:"1.25rem",fontWeight:"bold"}}>
          🚀 Platform Live - 925+ Features Ready!
        </p>
      </div>
    </main>
  )
}