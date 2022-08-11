import {useState} from 'react';
import Tab from './Tab.jsx'
const jobs={
  "算法研发类":["信号处理算法工程师","感知算法工程师"],
  "软件研发类":["软件开发工程师","工具开发工程师"],
  "硬件研发类":["射频工程师","结构工程师"],
  "测试类":["软件测试工程师","系统测试工程师"],
}



export default function(){
   
  const [curTab,setCurTab]=useState('算法研发类')

  return(
    <div className="w-[70vw] mx-auto text-black flex z-30 justify-between text-[1.3vw] h-[50vw]">
      <div className="flex flex-col">
          {Object.keys(jobs).map((job)=>{
            return(
              <div className={`${curTab===job?'text-blue-400':""} items-start py-[1.5vw]`}
              onClick={()=>{console.log(job);setCurTab(job)}} key={job}>{job}</div>
            )
          })}
      </div>

      <div className="flex flex-col py-[5vw] w-[50vw]">
          {jobs[curTab].map((job)=>{
            return(
              <Tab job={job} key={job} className="w-[50vw]"></Tab>
            )
          })}
      </div>

      </div>
  )
}