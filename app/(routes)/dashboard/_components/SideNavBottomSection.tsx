import React from 'react'
import { Archive, ChevronDown, Flag, Github } from 'lucide-react'

function SideNavBottomSection() {
  const menuList=[
    {
      id:1,
      name:'Getting Started',
      icon:Flag,
      path:''
    },
    {
      id:2,
      name:'Github',
      icon:Github,
      path:''
    },
    {
      id:3,
      name:'Archive',
      icon:Archive,
      path:''
    }
  ]
  return (
    <div>SideNavBottomSection</div>
  )
}

export default SideNavBottomSection