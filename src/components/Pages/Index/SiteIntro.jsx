import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

function SiteIntro() {
    //${isMobile ? 'text-[5vw]' : 'text-[1.5vw]'}

    const isMobile = window.innerWidth <= 768;

  return (
        <div  className={` Some data p-[5vw] flex gap-[5vw] items-center`}  >
            <div  className={`Left  `}  >
                <img src="https://images.pexels.com/photos/4308091/pexels-photo-4308091.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image"  className={`rounded-xl w-full `} />
            </div>
            <div  className={`right max-w-[50vw] `}  >
                <div  className={`${isMobile ? 'text-[5vw]' : 'text-[2vw]'} font-serif font-bold `}  >Why to choose Job-Board ?</div><br />
                <div  className={` ${isMobile ? 'text-[3vw]' : 'text-[1.5vw]'} text-gray-700 font-serif `}  >
                Discover a world of career possibilities with our cutting-edge job board, offering an intuitive interface and advanced search tools for a personalized job-seeking experience. Our platform goes beyond job listings, providing valuable resources and career development support to help candidates thrive in their professional journey. Join a community of successful job seekers who have found their dream opportunities through our trusted and user-friendly job board.
                </div>
                <div  className={` flex justify-evenly ${isMobile ? 'p-[3vw]' : 'p-[1.5vw]'}`}  >
                    <div  className={`flex flex-col justify-center align-middle items-center `}  >
                        <Diversity3Icon style={{ fontSize:"10vw" }}/>
                        <div  className={`${isMobile ? 'text-[2vw]' : 'text-[1.5vw]'} font-serif font-semibold text-[#e30b5c] justify-center align-middle `}  >Best skilled characters</div>
                    </div>
                    <div  className={`flex flex-col items-center `}  >
                        <TravelExploreIcon style={{ fontSize:"10vw" }}/>
                        <div  className={` ${isMobile ? 'text-[2vw]' : 'text-[1.5vw]'} font-serif font-semibold justify-center align-middle text-[#e30b5c]`}  >Diverse Options</div>
                    </div>                    
                </div>
                <div  className={` flex justify-evenly p-5`}  >
                    <div  className={` flex flex-col items-center`}  >
                        <QuestionAnswerIcon style={{ fontSize:"10vw" }}/>
                        <div  className={`${isMobile ? 'text-[2vw]' : 'text-[1.5vw]'} font-serif font-semibold justify-center align-middle text-[#e30b5c] `}  >Clear Communication</div>
                    </div>
                    <div  className={` flex flex-col items-center`}  >
                        <ContentPasteSearchIcon style={{ fontSize:"10vw" }}/>
                        <div  className={`${isMobile ? 'text-[2vw]' : 'text-[1.5vw]'} font-serif font-semibold justify-center align-middle text-[#e30b5c] `}  >Simple to Find</div>
                    </div>                    
                </div>

            </div>
        </div>
  )
}

export default SiteIntro