import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { NavLink } from 'react-router-dom';

function CandidateIndex() {

    //${isMobile ? 'text-[5vw]' : 'text-[1.5vw]'}

    const isMobile = window.innerWidth <= 768;

    const [jobData, setjobData] = useState([])

    const uniqueCompanies = jobData.reduce((unique, job) => {
        if (!unique.includes(job.companyName)) {
            unique.push(job.companyName);
        }
        return unique;
    }, []);

    // Now uniqueCompanies contains an array of unique company names from jobData


    const renderedCompanies = uniqueCompanies.map((companyName, index) => {
        // Use the first character of the company name as the seed for Adorable Avatars
        const avatarSeed = companyName.charAt(0);

        // Adorable Avatars URL
        const avatarUrl = `https://ui-avatars.com/api/?name=${avatarSeed}&background=random&size=800`;

        return (
            <div key={index} className={` candidate flex gap-[5vw] bg-stone-100  p-[2.5vw] items-center rounded-xl hover:shadow-2xl shadow-current hover:bg-green-300`}  >
                {/* Use the Adorable Avatars URL as the profile picture */}
                {/* <img src={avatarUrl} alt={`company${index + 1}`}  className={` `} 'max-w-[5vw] rounded-full' /> */}
                <div className={` candidate-details`}  >
                    <div className={` ${isMobile ? 'text-[5vw]' : 'text-[1.5vw]'} font-serif font-bold text-red-900 hover:text-white `}  >{companyName}</div>
                </div>
            </div>
        );
    });


    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get('/api/getdata')
                //console.log(result)
                setjobData(result.data)

            } catch (error) {
                console.log("Error occured in the index.jsx frontend inside getData section = ", error)
            }
        }

        getData()
    })
    return (
        <div>
            <div className={`font-bold font-serif text-slate-700 flex justify-center items-center ${isMobile ? 'text-[6vw]' : 'text-[3vw]'} `}  >
                Recruiting Companies
            </div>

            <Divider variant="middle" component="li" style={{ marginBottom: '10vw' }} />

            <div className={`p-[5vw] font-serif font-bold flex justify-center ${isMobile ? 'text-[4vw]' : 'text-[2.5vw]'} `}  >Every accomplishment starts with the decision to try.</div>
            <div className={` ${isMobile ? 'text-[5vw]' : 'text-[2vw]'} flex text-red-500 font-serif font-semibold justify-center align-middle`}  >Our Top Recruiters</div>
            <div className={` Candidates flex p-[10vw] flex-wrap justify-evenly gap-[5vw] max-w-auto`}  >

                {renderedCompanies}
            </div>
            <div className={` Companies bg-slate-100 px-12 pt-[10vw] pb-[5vw]`}  >
                <div className={` ${isMobile ? 'text-[5vw]' : 'text-[2vw]'} font-serif font-extrabold flex justify-center p-[5vw]`}  >
                    Featured Jobs Listing
                </div>


                <div className={`Jobs flex flex-col gap-[5vw] `}  >
                    {jobData.slice(0, 6).map((job, index) =>

                    (<div className={`Each job bg-white p-[3vw] rounded-lg flex justify-around gap-[3vw] hover:shadow-2xl `}  >
                        <div className={`left part `}  >{/***********************left part hai *******************/}
                            <div className={` flex gap-[5vw]`}  >
                                <div className={`${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'} font-serif font-semibold  `}  >
                                    {job.jobTitle} job
                                </div>
                                <div className={`${isMobile ? 'text-[3vw]' : 'text-[1vw]'} p-[0.5vw] rounded-sm text-white font-semibold ${job.jobType === 'Full Time' ? 'bg-green-400' :
                                        job.jobType === 'Part Time' ? 'bg-yellow-400' :
                                            job.jobType === 'Temporary' ? 'bg-blue-400' :
                                                job.jobType === 'Freelance' ? 'bg-red-400' : ''
                                    }`}>
                                    {job.jobType}
                                </div>
                            </div>
                            <div className={` flex text-slate-400 gap-[0.5vw] font-serif p-[1vw]`}  >
                                <div className={`${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'} `}  >via </div>
                                <div className={` text-green-400 ${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'} font-semibold`}  >{job.companyName}</div>
                                <WorkIcon style={{ fontSize: isMobile ? "6vw" : "2vw" }} />
                                <div className={` ${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'}`}  >{job.jobField}</div>
                            </div>
                        </div>
                        <div className={` right part ${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'}`}  >{/***********************right part hai *******************/}
                            <div className={` font-serif ${isMobile ? 'text-[4vw]' : 'text-[2vw]'} font-semibold`}  >Requirements :(min req.)</div><br />
                            <div className={` flex gap-[1vw] flex-wrap ${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'} text-blue-500 font-semibold`}  >
                                {
                                    job.skills.map((skill, index) => (
                                        <div key={index}>{skill} |</div>
                                    ))
                                }

                            </div>

                        </div>

                    </div>))}

                </div>
                <NavLink to="/JobList">
                    <div className={`bg-green-400 ${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'} p-[1vw] m-[3vw] flex text-white font-semibold font-serif rounded-lg max-w-[12vw] hover:shadow-2xl hover:bg-green-700 align-middle justify-center `}  >
                        Show More
                    </div>

                </NavLink>
            </div>
        </div>
    )
}

export default CandidateIndex