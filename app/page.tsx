export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      {/* Logo Section */}
      <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
        <div style={{position:"relative",width:"200px",height:"200px"}}>
          <div style={{
            width:"100%",
            height:"100%",
            borderRadius:"50%",
            border:"4px solid #9CCC65",
            background:"white",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
          }}>
            <div style={{fontSize:"3rem",color:"#388E3C"}}>🤚</div>
            <div style={{fontSize:"2.5rem",marginTop:"-1rem",color:"#7CB342"}}>🌱</div>
            <div style={{fontSize:"2rem"}}>🌍</div>
          </div>
          <div style={{position:"absolute",bottom:"10px",right:"20px"}}>
            <span style={{fontSize:"1.5rem",color:"#29B6F6"}}>💧</span>
          </div>
        </div>
      </div>
      
      <h1 style={{textAlign:"center",fontSize:"3rem",marginTop:"2rem",fontWeight:"bold"}}>
        <span style={{color:"#388E3C"}}>Join</span>
        <span style={{color:"#689F38"}}>Eco</span>
        <span style={{color:"#7CB342"}}>Grow</span>
      </h1>
      
      <p style={{textAlign:"center",fontSize:"1.25rem",marginTop:"1rem",color:"#689F38"}}>
        Where Gaming Meets Sustainability
      </p>
      
      {/* Navigation Links */}
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"1rem",marginTop:"3rem"}}>
        <a href="/dashboard" style={{padding:"1rem 2rem",background:"#388E3C",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          📊 Dashboard
        </a>
        <a href="/features" style={{padding:"1rem 2rem",background:"#7CB342",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          🌳 Features
        </a>
        <a href="/games" style={{padding:"1rem 2rem",background:"#29B6F6",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          🎮 Games
        </a>
        <a href="/community" style={{padding:"1rem 2rem",background:"#689F38",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          👥 Community
        </a>
        <a href="/sports" style={{padding:"1rem 2rem",background:"#9CCC65",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          ⚽ Sports
        </a>
        <a href="/admin" style={{padding:"1rem 2rem",background:"#6D4C41",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          ⚙️ Admin
        </a>
      </div>
      
      {/* Status */}
      <div style={{textAlign:"center",marginTop:"3rem"}}>
        <p style={{color:"#388E3C",fontSize:"1.2rem"}}>
          ✅ Platform Live - 925+ Features Ready
        </p>
      </div>
    </main>
  )
}