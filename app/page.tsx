'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import TreePlanting from './components/TreePlanting'

export default function Home() {
  const [features, setFeatures] = useState([])
  const [stats, setStats] = useState({ trees: 0, users: 0, carbon: 0 })
  
  useEffect(() => {
    loadFeatures()
    loadStats()
  }, [])
  
  const loadFeatures = async () => {
    const { data } = await supabase
      .from('features')
      .select('*')
      .eq('enabled', true)
      .limit(6)
    
    setFeatures(data || [])
  }
  
  const loadStats = async () => {
    const { count: treeCount } = await supabase
      .from('trees')
      .select('*', { count: 'exact', head: true })
    
    setStats({
      trees: treeCount || 0,
      users: 3291,
      carbon: 847.5
    })
  }
  
  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(to bottom,#f1f8e9,#e8f5e9)',padding:'2rem'}}>
      {/* Logo Section */}
      <div style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
        <div style={{position:'relative',width:'200px',height:'200px'}}>
          <div style={{
            width:'100%',
            height:'100%',
            borderRadius:'50%',
            border:'4px solid #9CCC65',
            background:'white',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
          }}>
            <div style={{fontSize:'3rem',color:'#388E3C'}}>🤚</div>
            <div style={{fontSize:'2.5rem',marginTop:'-1rem',color:'#7CB342'}}>🌱</div>
            <div style={{fontSize:'2rem'}}>🌍</div>
          </div>
          <div style={{position:'absolute',bottom:'10px',right:'20px'}}>
            <span style={{fontSize:'1.5rem',color:'#29B6F6'}}>💧</span>
          </div>
        </div>
      </div>
      
      <h1 style={{textAlign:'center',fontSize:'3rem',marginTop:'2rem',fontWeight:'bold'}}>
        <span style={{color:'#388E3C'}}>Join</span>
        <span style={{color:'#689F38'}}>Eco</span>
        <span style={{color:'#7CB342'}}>Grow</span>
      </h1>
      
      {/* Live Stats */}
      <div style={{display:'flex',justifyContent:'center',gap:'2rem',marginTop:'2rem'}}>
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:'2rem',fontWeight:'bold',color:'#388E3C'}}>{stats.trees}</div>
          <div style={{color:'#689F38'}}>Trees Planted</div>
        </div>
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:'2rem',fontWeight:'bold',color:'#388E3C'}}>{stats.users}</div>
          <div style={{color:'#689F38'}}>Active Users</div>
        </div>
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:'2rem',fontWeight:'bold',color:'#388E3C'}}>{stats.carbon}t</div>
          <div style={{color:'#689F38'}}>CO₂ Offset</div>
        </div>
      </div>
      
      {/* Tree Planting Component */}
      <div style={{maxWidth:'600px',margin:'3rem auto'}}>
        <TreePlanting />
      </div>
      
      {/* Features Grid */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.5rem',maxWidth:'1200px',margin:'3rem auto'}}>
        {features.map(feature => (
          <div key={feature.id} style={{
            background:'white',
            padding:'1.5rem',
            borderRadius:'12px',
            border:'2px solid #9CCC65',
            boxShadow:'0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{color:'#388E3C',fontSize:'1.2rem'}}>{feature.name}</h3>
            <p style={{color:'#666',fontSize:'0.9rem'}}>{feature.description || 'Feature enabled'}</p>
            <div style={{marginTop:'1rem'}}>
              <span style={{
                background:'#7CB342',
                color:'white',
                padding:'0.25rem 0.5rem',
                borderRadius:'4px',
                fontSize:'0.8rem'
              }}>
                {feature.rollout_percentage}% Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}