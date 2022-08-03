import verticalBlock from './img/verticalBlock.png'
import RightToLeft from './img/RightToLeft.png'
import LeftToRight from './img/leftToRight.png'
import screen from './img/screen.png'
import upshadow from './img/upshadow.png'
import downshadow from './img/downshadow.png'
import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import picture1 from './img/picture1.png'
import picture2 from './img/picture2.png'
import Foot from '../../components/Foot'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



export default function CoreTech() {
  return (
    <div className="bg-techCore-background bg-cover text-white w-[100vw] mt-[-8vw]"
    >
      <div className="w-[70vw] mx-auto">
          <div className="flex flex-row pt-[30vw] justify-center">
              <div className="flex flex-col items-start">
              <AnimationOnScroll animateIn="animate__fadeInDown" delay={200}>
                 <div className="font-extrabold text-[5vw] whitespace-pre">PERCEPTION   ·   FUTURE</div>
               </AnimationOnScroll>
               <AnimationOnScroll animateIn="animate__fadeInDown" delay={300}>
               <div className="font-light text-[3vw] whitespace-pre tracking-wider mt-[-1vw]">感知 · 未来</div>
               </AnimationOnScroll>
               <AnimationOnScroll animateIn="animate__fadeInDown" delay={400}>
               <div className="font-light text-[1vw] whitespace-pre tracking-wider mt-[3vw]">我们是赛恩领动</div>
               </AnimationOnScroll>
               </div>
               <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
               <img src={verticalBlock} alt="" className="w-[0.5vw] h-[13vw] mt-[2vw] ml-[2vw]"/>
           </AnimationOnScroll>
          </div>

          <div className="flex pt-[30vw] mx-auto justify-center items-center">
              <img src={LeftToRight} alt="" className="w-[10vw] h-[0.25vw]"/>
              <div className=" text-[2vw] whitespace-pre tracking-wider px-[2vw]">系统性能</div>

              <img src={RightToLeft} alt="" className="w-[10vw] h-[0.25vw]"/>
            
          </div>

          <div className="flex flex-row justify-between pt-[8vw]">
          <AnimationOnScroll animateIn="animate__fadeInLeft" delay={200} animateOnce={true}>
          <div className="flex flex-col text-[1vw] font-light leading-relaxed">
                     
                     <div>赛恩领动运用新一代技术研发生产的车规级成像雷达</div>
                     <div>拥有120°超广水平视场角，最长探测距离达300m以上</div>
                     <div>全天候全时段 提供探测物体的距离、速度、角度以及高度等信息</div>
                     <div>目标输出接口支持最新ISO23150国际标准</div>
                     <div>可与其他传感器融合实现高度自动驾驶功能</div>
      
                     <div className="mt-[5vw] ">* 包括雪、雾、黑夜、强光等场景</div>
                     <div className="bg-blue-500 w-[15vw] h-[0.375vw] mt-[0.5vw]"></div>
                   </div>
               </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight" delay={200} animateOnce={true}>
             <img src={screen} alt=""  className="w-[25vw]"/>
             </AnimationOnScroll>

          </div>

          <div className="flex flex-col w-[70vw] mt-[10vw]">

                
               <div className=" text-[2vw] whitespace-pre tracking-wider self-center">技术参数</div>
                <img src={upshadow} alt="" />
              
                <AnimationOnScroll animateIn="animate__fadeIn" delay={800} animateOnce={true}>
                <div className="flex flex-around text-[1vw] font-light leading-relaxed">
                  <div className="w-[40vw] ml-[10vw]">最大探测距离</div>
                  <div>{'>'} 300m</div>
                </div>
             </AnimationOnScroll>

                <div className="bg-blue-400 font-thin opacity-30 w-[60vw] h-[0.1vw] my-[1vw] self-center"></div>
                <AnimationOnScroll animateIn="animate__fadeIn" delay={800} animateOnce={true}>
                <div className="flex flex-around text-[1vw] font-light leading-relaxed">
                  <div className="w-[40vw] ml-[10vw]">水平 FOV</div>
                  <div>{'>'} 120°</div>
                </div>
             </AnimationOnScroll>
                <div className="bg-blue-400 font-thin opacity-30 w-[60vw] h-[0.1vw] my-[1vw] self-center"></div>
                <AnimationOnScroll animateIn="animate__fadeIn" delay={800} animateOnce={true}>
                <div className="flex flex-around text-[1vw] font-light leading-relaxed">
                  <div className="w-[40vw] ml-[10vw]">水平角分辨率/-3dB Beamwidth</div>
                  <div>{'<'} 0.5°</div>
                </div>
             </AnimationOnScroll>
                <div className="bg-blue-400 font-thin opacity-30 w-[60vw] h-[0.1vw] my-[1vw] self-center"></div>
                <AnimationOnScroll animateIn="animate__fadeIn" delay={800} animateOnce={true}>
                <div className="flex flex-around text-[1vw] font-light leading-relaxed">
                  <div className="w-[40vw] ml-[10vw]">测速范围</div>
                  <div>-400 km/h ~ 200 km/h</div>
                </div>
             </AnimationOnScroll>
                <div className="bg-blue-400 font-thin opacity-30 w-[60vw] h-[0.1vw] my-[1vw] self-center"></div>
                <AnimationOnScroll animateIn="animate__fadeIn" delay={800} animateOnce={true}>
                <div className="flex flex-around text-[1vw] font-light leading-relaxed">
                  <div className="w-[40vw] ml-[10vw]">安全功能等级</div>
                  <div>ASILB( D )</div>
                </div>
             </AnimationOnScroll>
        

                <img src={downshadow} alt="" className="mt-[3vw]"/>
          </div>

          <div className="flex-col w-[70vw] mt-[14vw] flex items-center text-black">
             <div className=" text-[2vw] whitespace-pre tracking-wider self-center ">技术优势</div>
              <div className="flex justify-between w-[70vw] py-[5vw]">
                 <div className="flex flex-col items-center justify-between">
                  <img src={pic2} alt="" className='w-[10vw] mb-[1vw]'/>
                  <div >高性能</div>
                  </div>
                <div className="flex flex-col items-center justify-between">
                  <img src={pic1} alt="" className='w-[10vw] mb-[1vw]'/>
                  <div>同频抗干扰技术</div>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <img src={pic3} alt="" className='w-[10vw] mb-[1vw]'/>
                  <div>隐藏目标识别</div>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <img src={pic4} alt="" className='w-[10vw] mb-[1vw] '/>
                  <div>全天候工作</div>
                </div>
              </div>
          </div>

          <div className="flex pt-[15vw] mx-auto justify-center items-center">
            
              <img src={LeftToRight} alt="" className="w-[10vw] h-[0.25vw]"/>
              <div className=" text-[2vw] whitespace-pre tracking-wider px-[2vw]">感知算法</div>

              <img src={RightToLeft} alt="" className="w-[10vw] h-[0.25vw]"/>
            
          </div>

          <div className='flex w-[70vw] justify-around mt-[8vw]'>
               <AnimationOnScroll animateIn="animate__slideInLeft" delay={200} animateOnce={true}>
                  <img src={picture1} alt="" className='w-[40vw] h-[22vw]' />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight" delay={200} animateOnce={true}>
            <div className="flex flex-col text-[1vw] items-end leading-loose font-light mt-[15vw]">
                <div>运用新一代技术针对传统毫米波雷达遇到的目标高度</div>
                <div>静态物体检测困难等问题进行了解决</div>
                <div className='mt-[2vw]'>将人工智能技术应用到毫米波雷达感知算法中</div>
                <div>大幅度提升对障碍物检测的准确率</div>

                <div className='bg-blue-400 w-[12vw] h-[0.5vw] mt-[1vw] shadow'></div>
            </div>
            </AnimationOnScroll>
          </div>

          <div className="flex w-[70vw] pt-[10vw] pb-[5vw]">
          <AnimationOnScroll animateIn="animate__slideInLeft" delay={200} animateOnce={true}>
            <div className='flex w-[30vw] h-[25vw] flex-col bg-white pt-[4vw] pl-[4vw] mb-[5vw]'>
                <div className='text-blue-400 text-[1.5vw] mb-[2vw]'>雷达SLAM</div>
                <div className='text-black'>高密度点云以及人工智能算法助力 ,</div>
                <div className='text-black mb-[4vw]'>实现精确建图以及定位</div>
                <div className='bg-blue-400 h-[1vw] w-[6vw]'></div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight" delay={200} animateOnce={true}>
            <img src={picture2} alt="" className='w-[40vw] mt-[10vw]'/>
            </AnimationOnScroll>
          </div>

      </div>

      <Foot></Foot>

    </div>
  )
}
