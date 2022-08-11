import picture1 from './img/picture1.png'
import picture2 from './img/picture2.png'
import bar from './img/bar.png'
import title from './img/titl.png'
import title2 from './img/ttl2.png'
import lightLogo from '../../img/light-logo.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {useNavigate} from 'react-router-dom'
import sparkle from './img/sparkle-static-2.png'
import sparkle2 from './img/sparkle-static-4.png'

export default function MainPage() {
  const navigate=useNavigate();
  const handleClick=(str)=>{
    window.scrollTo(0, 0)
    navigate(str,{replace:true});
  }
  return (
    <div>
       <div className="bg-mainpage-background bg-cover w-[100vw] mt-[-4vw]">
          
       {/* <img src={sparkle} alt="" className="top-[0vw] left-[0.35vw] w-[100vw] h-[65.6vw] absolute animate-pulse-1 z-10"/> */}
       {/* <img src={sparkle2} alt="" className="top-[-0.2vw] left-[-1.16vw] w-[96vw] h-[59.5vw] absolute animate-pulse-2 z-10"/> */}

       <img src={sparkle} alt="" className="top-[-0vw] left-[-0.47vw] w-[96vw] h-[61.6vw] absolute animate-pulse-1 z-10"/>
       <img src={sparkle2} alt="" className="top-[0.63vw] left-[-0vw] w-[88vw] h-[54.5vw] absolute animate-pulse-2 z-10"/>



        {/* <img src={sparkle} alt="" className="top-[4vw] left-[0vw] w-[100vw] absolute z-0"/> */}
        {/* <img src={sparkle} alt="" className="top-[4vw] left-[5vw] w-[90vw] h-[50vw] absolute z-0"/> */}
        {/* <img src={sparkle} alt="" className="top-[0vw] left-[0vw] w-[100vw] absolute z-0"/> */}
        {/* <img src={sparkle} alt="" className="top-[0vw] left-[0vw] w-[100vw] absolute z-0"/> */}
        {/* <img src={sparkle} alt="" className="mt-[-8vw] top-[4.3vw] left-[6vw] w-[90vw] h-[65vw] absolute z-0"/> */}
        <div className="w-[70vw] mx-auto flex pt-[22vw] flex-col items-end">
        <AnimationOnScroll animateIn="animate__fadeInUpBig" >
                <img src={bar} alt="" className="w-[10vw] h-[0.5vw]"/>
           </AnimationOnScroll>
        </div>
       <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}>
         <div className='items-end'>
         <img src={title} alt="" className="mt-[3vw] ml-[36vw] w-[50vw] h-[10vw] text-right"/>
         </div>
        

         </AnimationOnScroll>
         <AnimationOnScroll animateIn="animate__fadeInUp" delay={500}>
         {/* <div className="blueGreen-word " >  
         <div className="text-[3vw] mt-[1vw] ml-[36vw] font-light ">引领智能感知新未来</div>
         </div> */}
         <div className='items-end'>
         <img src={title2} alt="" className="mt-[3vw] ml-[54vw] w-[30vw] h-[3vw] text-right"/>
         </div>
         </AnimationOnScroll>
          

        <div className="w-[90vw] md:w-[70vw] mx-auto h-[50vw] mt-[20vw] flex flex-col my-[10vw] text-white font-light 
        tracking-wide mb-[10vw]">
          <AnimationOnScroll animateIn="animate__slideInLeft" delay={200} animateOnce={true}>
           <div className="text-[2vw] ">卓越探测</div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__slideInLeft" delay={300} animateOnce={true}>
           <div className="text-[1vw] mt-[1vw]">
             运用创新的毫米波雷达算法以及人工智能技术 ，指数级提升探测能力
           </div>
           <div className="text-[1vw] mt-[0.1vw] mb-[5vw] md:mb-[0vw]">
             解决传统毫米波雷达对静止目标、行人、障碍物高度探测能力不足的问题
           </div>
           </AnimationOnScroll>
           <div className="flex items-end my-[2.5vw] justify-between w-[90vw] md:w-[70vw]">
              <button className="bg-blue-500 hover:bg-blue-700 md:mr-[5vw]
              text-white text-[12px] md:text-[1vw] md:h-[2.5vw] md:w-[8vw] w-[50px] h-[30px]"
              onClick={()=>{handleClick('/coreTech')}}>
                  了解更多
              </button>
              <div className='w-[60vw]'>
                   <img src={picture1} alt="" />
              </div>
           </div>
        </div>
        <div className="w-[90vw] md:w-[70vw] mx-auto h-[50vw] flex flex-col text-white font-light tracking-wide items-end md:py-0 py-[10vw]">
        <AnimationOnScroll animateIn="animate__slideInRight" delay={200} animateOnce={true}>
        <div className="text-[2vw] text-right">精准感知</div>
        </AnimationOnScroll>  
        <AnimationOnScroll animateIn="animate__slideInRight" delay={300} animateOnce={true}>
       
  
           <div className="text-[1vw] mt-[1vw] text-right">
             多样化产品布置方案，实现全天候全时段360度精确感知
           </div>
           <div className="text-[1vw] mt-[0.1vw] text-right">
           加速自动驾驶商业化落地，并支持其他场景应用
           </div>
           </AnimationOnScroll>  
           <div className="flex items-end mt-[2.5vw] justify-between w-[90vw] md:w-[70vw]">
              <div className='w-[60vw] '>
                   <img src={picture2} alt="" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 md:ml-[5vw] animate-pin
              text-white text-[12px] md:text-[1vw] md:h-[2.5vw] md:w-[8vw] w-[50px] h-[30px]"
              onClick={()=>{handleClick('/Products')}}>
                  了解更多
              </button>
           </div>

        </div>

        <div className='w-[100vw] mx-auto bg-blue-500 text-white tracking-wide
        flex flex-col text-[1vw] font-extralight mt-[20vw] md:mt-[10vw] '>
           <div className='hidden md:flex h-[6vw] justify-between flex-row w-[70vw] 
           mx-auto mt-[2vw]'>
              <img src={lightLogo} alt="" className=" w-[10vw] h-[4vw]"/>
              <div className="flex flex-col items-end text-[1vw] leading-[2vw]">
                  <div>沪ICP备16062387号-1</div>
                  <div>智能科技有限公司©2022 SINPRO. All rights reserved</div>
              </div>
           </div>

           {/* <div className="hidden md:flex ">
              <div className='mx-auto pb-[2vw]'>沪ICP备16062387号-1 赛恩领动（上海）
              智能科技有限公司©2022 SINPRO. All rights reserved</div>
           </div> */}

           {/* <div className='flex md:hidden flex-col justify-center items-center mb-[4vw]'>
              <img src={lightLogo} alt="" className=" w-[10vw] h-[4vw]"/>
                  <div>电话: 021-658586667</div>
                  <div>上海市浦东新区盛荣路88号盛大天地源创谷1号楼902</div>
           </div> */}

           </div>
       </div>
    </div>
  )
}
