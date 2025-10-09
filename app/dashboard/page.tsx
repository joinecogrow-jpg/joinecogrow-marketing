export default function Dashboard() {
  return (
    <div style={{padding:"2rem",minHeight:"100vh",background:"#f5f5f5"}}>
      <h1 style={{color:"#388E3C",fontSize:"2.5rem"}}>Dashboard</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"1.5rem",marginTop:"2rem"}}>
        <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65"}}>
          <h3 style={{color:"#7CB342"}}>Trees Planted</h3>
          <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>12,847</p>
        </div>
        <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65"}}>
          <h3 style={{color:"#7CB342"}}>Active Users</h3>
          <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>3,291</p>
        </div>
        <div style={{background:"white",padding:"1.5rem",borderRadius:"12px",border:"2px solid #9CCC65"}}>
          <h3 style={{color:"#7CB342"}}>Eco Points</h3>
          <p style={{fontSize:"2rem",fontWeight:"bold",color:"#388E3C"}}>847K</p>
        </div>
      </div>
    </div>
  )
}