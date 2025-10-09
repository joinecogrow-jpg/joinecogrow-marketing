export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      {/* JoinEcoGrow Logo */}
      <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
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
      
      {/* Features Grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"2rem",maxWidth:"1200px",margin:"3rem auto"}}>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"3px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.5rem"}}>🌳 Tree Planting</h2>
          <p style={{color:"#666"}}>91 Features for real-world impact</p>
        </div>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"3px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.5rem"}}>🎮 Gaming Hub</h2>
          <p style={{color:"#666"}}>55 Gaming features</p>
        </div>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"3px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.5rem"}}>👥 Community</h2>
          <p style={{color:"#666"}}>87 Social features</p>
        </div>
      </div>
      
      <div style={{textAlign:"center",marginTop:"3rem"}}>
        <p style={{color:"#388E3C",fontSize:"1.2rem"}}>
          ✅ Platform Live - 925+ Features Ready
        </p>
      </div>
    </main>
  )
}