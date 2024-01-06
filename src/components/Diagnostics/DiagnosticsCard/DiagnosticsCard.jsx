import React from 'react'

function DiagnosticsCard({item}) {
  return (
    <div className="diagnostics-card">
        <img src={item.icons} alt="" />
        <h2>{item.title}</h2>
    </div>
  )
}

export default DiagnosticsCard