import React, { useEffect, useState } from 'react'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CampaignIcon from '@mui/icons-material/Campaign';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EngineeringIcon from '@mui/icons-material/Engineering';
import axios from 'axios';

function JobTypes() {

    const [jobData,setjobData]=useState([])

    const accountancyCount = Array.isArray(jobData) ? jobData.filter(job => job.category === "Accountancy").length : 0;
    const purchasingCount =  Array.isArray(jobData) ? jobData.filter(job => job.category === "Purchasing").length :0;
    const sandMCount = Array.isArray(jobData) ? jobData.filter(job => job.category === "Sales & Marketing").length :0;
    const engineeringCount = Array.isArray(jobData) ? jobData.filter(job => job.category === "Engineering").length : 0;
    const handCCount = Array.isArray(jobData) ? jobData.filter(job => job.category === "Health & Care").length : 0;


    //${isMobile ? 'text-[5vw]' : 'text-[1.5vw]'}

    const isMobile = window.innerWidth <= 768;

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const result=await axios.get('/api/getdata')
                //console.log(result)
                setjobData(result.data)

            } catch (error) {
                console.log("Error occured in the index.jsx frontend inside getData section = ",error)
            }
        }

        getData()
      })
  return (
    <div  className={`flex justify-evenly flex-wrap ${isMobile ? 'gap-[1vw]' : 'gap-[5vw]'} relative bottom-[5vw]`}  >
            
            <div  className={`  bg-slate-300 shadow-xl rounded-lg  p-[2vw] flex flex-col justify-around items-center gap-[2vw]`}  >
                <CampaignIcon style={{ fontSize:isMobile ?'8vw': '5vw',color:'#4caf50'}}/>
                <div  className={` font-bold font-serif text-slate-700 ${isMobile ? 'text-[4vw]' : 'text-[1.5vw]'}`}  >Sales <br /> & <br /> Marketing</div>
                <div  className={`font-bold font-serif text-slate-500 ${isMobile ? 'text-[3vw]' : 'text-[1vw]'} `}  >{sandMCount} Applications</div>
            </div>

            <div  className={`  bg-slate-300 shadow-xl rounded-lg  p-[2vw] flex flex-col justify-around items-center`}  >
                <StorefrontIcon style={{ fontSize:isMobile ?'8vw': '5vw',color:'#4caf50'}}/>
                <div  className={`font-bold font-serif text-slate-700 ${isMobile ? 'text-[4vw]' : 'text-[1.5vw]'} `}  >Purchasing</div>
                <div  className={` font-bold font-serif text-slate-500 ${isMobile ? 'text-[3vw]' : 'text-[1vw]'}`}  >{purchasingCount} Applications</div>
            </div>

            <div  className={` bg-slate-300 shadow-xl rounded-lg  p-[2vw] flex flex-col justify-around items-center`}  >
                <AccountBalanceIcon style={{ fontSize:isMobile ?'8vw': '5vw',color:'#4caf50'}}/>
                <div  className={` font-bold font-serif text-slate-700 ${isMobile ? 'text-[4vw]' : 'text-[1.5vw]'}`}  >Accountancy</div>
                <div  className={` font-bold font-serif text-slate-500 ${isMobile ? 'text-[3vw]' : 'text-[1vw]'}`}  > {accountancyCount} Applications</div>
            </div>

            <div  className={`bg-slate-300 shadow-xl rounded-lg  p-[2vw] flex flex-col justify-around items-center `}  >
                <LocalHospitalIcon style={{ fontSize:isMobile ?'8vw': '5vw',color:'#4caf50'}}/>
                <div  className={` font-bold font-serif text-slate-700 ${isMobile ? 'text-[4vw]' : 'text-[1.5vw]'}`}  >Health <br /> & <br />Care</div>
                <div  className={`font-bold font-serif text-slate-500 ${isMobile ? 'text-[3vw]' : 'text-[1vw]'} `}  >{handCCount} Applications</div>
            </div>

            <div  className={` bg-slate-300 shadow-xl  rounded-lg p-[2vw] flex flex-col justify-around items-center`}  >
                <EngineeringIcon style={{ fontSize:isMobile ?'8vw': '5vw',color:'#4caf50'}}/>
                <div  className={` font-bold font-serif text-slate-700 ${isMobile ? 'text-[4vw]' : 'text-[1.5vw]'}`}  >Engineering</div>
                <div  className={`font-bold font-serif text-slate-500 ${isMobile ? 'text-[3vw]' : 'text-[1vw]'} `}  >{engineeringCount} Applications</div>
            </div>
        </div>
  )
}

export default JobTypes