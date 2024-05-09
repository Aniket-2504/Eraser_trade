"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function CreateTeam() {

  const [teamName,setTeamName]=useState('');
  const CreateTeam=useMutation(api.teams.CreateTeam);
const {user }:any=useKindeBrowserClient();
const router=useRouter();
  const createNewTeam=()=>{
    CreateTeam({
      teamName:teamName,
      createdBy:user?.email
    }).then(resp=>{
      console.log(resp);
      if(resp)
        {
          router.push('/dashboard')
          toast('workspace created succesfully')
        }
    })
  }


    return (
    <div className=' px-7 md:px-16 my-16'>
<Image src='/tradelogo.png' 
alt='logo'
width={200}
height={100}/>

<div className='flex flex-col items-center mt-8'>
  <h2 className='font-bold text-[40px] py-3'>Create your workspace</h2>
  <h2 className='text-gray-500'>You can change this anytime </h2>
  <div className='mt-7 w-[40%]'>
    <label className='text-gray-400'>Work Space Name </label>
    <Input placeholder='Workspace Name ' className='mt-3 '
    onChange={(e)=>setTeamName(e.target.value)}/>
  </div>
  <Button className='bg-blue-500 mt-9 w-[30%] hover:bg-blue-700'
  disabled={!(teamName&&teamName?.length>0)}
  onClick={()=>createNewTeam()}
  > Create Workspace </Button>
</div>
    </div>
  )
}

export default CreateTeam