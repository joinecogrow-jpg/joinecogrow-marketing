export default function DashboardPage() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <h1 style={{fontSize:"3rem",fontWeight:"bold",color:"#388E3C",marginBottom:"2rem"}}>
          Dashboard
        </h1>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"1.5rem"}}>
          <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
            <h3 style={{color:"#7CB342",marginBottom:"0.5rem"}}>Trees Planted</h3>
            <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>12,847</p>
          </div>
          
          <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
            <h3 style={{color:"#7CB342",marginBottom:"0.5rem"}}>Active Users</h3>
            <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>3,291</p>
          </div>
          
          <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
            <h3 style={{color:"#7CB342",marginBottom:"0.5rem"}}>Eco Points</h3>
            <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>847K</p>
          </div>
          
          <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
            <h3 style={{color:"#7CB342",marginBottom:"0.5rem"}}>Carbon Offset</h3>
            <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>24.5 tons</p>
          </div>
        </div>
        
        <div style={{marginTop:"2rem",textAlign:"center"}}>
          <a href="/" style={{color:"#29B6F6",fontSize:"1.2rem"}}>← Back to Home</a>
        </div>
      </div>
    </main>
  )
}