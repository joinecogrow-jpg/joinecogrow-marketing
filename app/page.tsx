export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      {/* Your Logo Design */}
      <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
        <div style={{position:"relative",width:"250px",height:"250px"}}>
          {/* Circular Border */}
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
            {/* Nurturing Hand */}
            <div style={{fontSize:"4rem",color:"#388E3C",marginBottom:"-1rem"}}>🤚</div>
            {/* Growing Plant */}
            <div style={{fontSize:"3.5rem",color:"#7CB342",marginBottom:"-0.5rem"}}>🌱</div>
            {/* Earth Globe */}
            <div style={{fontSize:"2.5rem"}}>🌍</div>
          </div>
          {/* Water Droplet */}
          <div style={{position:"absolute",bottom:"10px",right:"20px"}}>
            <span style={{fontSize:"2rem",color:"#29B6F6"}}>💧</span>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h1 style={{textAlign:"center",fontSize:"3.5rem",marginTop:"2rem",fontWeight:"bold"}}>
        <span style={{color:"#388E3C"}}>Join</span>
        <span style={{color:"#689F38"}}>Eco</span>
        <span style={{color:"#7CB342"}}>Grow</span>
      </h1>
      
      <p style={{textAlign:"center",fontSize:"1.5rem",marginTop:"1rem",color:"#689F38"}}>
        Where Gaming Meets Sustainability
      </p>
      
      {/* Features */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"2rem",maxWidth:"1200px",margin:"3rem auto",padding:"0 2rem"}}>
        <div style={{background:"white",padding:"2rem",borderRadius:"16px",border:"3px solid #9CCC65",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.8rem",marginBottom:"1rem"}}>🌳 Tree Planting System</h2>
          <p style={{color:"#666",lineHeight:"1.6"}}>91 Features including GPS verification, NFT minting, and real-world impact tracking</p>
        </div>
        <div style={{background:"white",padding:"2rem",borderRadius:"16px",border:"3px solid #9CCC65",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.8rem",marginBottom:"1rem"}}>🎮 Gaming Center</h2>
          <p style={{color:"#666",lineHeight:"1.6"}}>55 Gaming features with Battle Royale, Mini-games, and Multiplayer modes</p>
        </div>
        <div style={{background:"white",padding:"2rem",borderRadius:"16px",border:"3px solid #9CCC65",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}}>
          <h2 style={{color:"#388E3C",fontSize:"1.8rem",marginBottom:"1rem"}}>👥 Community Hub</h2>
          <p style={{color:"#666",lineHeight:"1.6"}}>87 Social features supporting 57 languages with forums and mentorship</p>
        </div>
      </div>
      
      {/* Call to Action */}
      <div style={{textAlign:"center",marginTop:"4rem",paddingBottom:"2rem"}}>
        <div style={{display:"inline-block",padding:"1rem 3rem",background:"linear-gradient(135deg,#388E3C,#7CB342)",borderRadius:"50px",color:"white",fontSize:"1.2rem",fontWeight:"bold",boxShadow:"0 5px 20px rgba(56,142,60,0.3)",cursor:"pointer"}}>
          🚀 Start Your Eco Journey
        </div>
      </div>
      
      {/* Footer */}
      <div style={{textAlign:"center",padding:"2rem",borderTop:"1px solid #e0e0e0",marginTop:"4rem"}}>
        <p style={{color:"#388E3C",fontSize:"1.1rem",fontWeight:"600"}}>
          925+ Features • 8 Standalone Modules • Global Impact
        </p>
        <p style={{color:"#666",marginTop:"0.5rem"}}>
          © 2024 JoinEcoGrow - Nurturing Growth for a Sustainable Future
        </p>
      </div>
    </main>
  )
}