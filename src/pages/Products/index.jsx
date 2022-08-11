import video from '../../img/video/7479.MP4'
import video2 from '../../img/video/video3.MOV'
import verticalBlock from './img/verticalBlock.png'
import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import pic5 from './img/pic5.png'
import pic6 from './img/pic6.png'
import pic7 from './img/pic7.png'
import pic8 from './img/pic8.png'
import leftArrow from './img/leftArrow.png'
import rightArrow from './img/rightArrow.png'
import shadow from './img/shadow.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Foot from '../../components/Foot'

export default function Products() {
  return (
      <div className="bg-products-background bg-cover w-[100vw] mt-[-8vw] text-white">
          <div className="flex flex-row w-[70vw] mx-auto pt-[20vw] justify-between">

            <AnimationOnScroll animateIn="animate__fadeInDownBig" delay={200}>
             <img src={verticalBlock} alt="" className="w-[0.5vw] h-[13vw] mt-[2vw] ml-[2vw]"/>
           </AnimationOnScroll>

           <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={100}>
           </AnimationOnScroll>
             <div className="flex flex-col items-end justify-between">

           <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={200}>
           <div className="text-[3vw] pt-[2vw]">系统性能</div>
           </AnimationOnScroll>

           <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={300}>
             <div className="flex flex-col items-end">
             <div className="text-[1.1vw] leading-[2vw] pt-[3.5vw]">赛恩领动成像雷达支持多种安装方案</div>
                  <div className="text-[1.1vw]"> 支持实现从L3到L5的自动驾驶功能，并可与其他传感器组成互为冗余方案</div>
             </div>

           </AnimationOnScroll>

             </div>
          </div>

          <div className="flex py-[10vw] w-[70vw] mx-auto">
              <video controls src={video} className="w-[70vw] "></video>
          </div>

          <div className='flex flex-row w-[70vw] mx-auto justify-between py-[5px]'>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={200}>
              <div className="flex flex-col justify-between h-[22vw]">
                <div className="flex flex-col text-[2.5vw]">
                    <div>人工智能</div>
                    <div>感知性能迭代</div>
                </div>
                <div className="flex flex-col text-[1.1vw] leading-[2vw]">
                    <div>赛恩领动通过数据闭环将收集到的车辆数据</div>
                    <div>优化人工智能感知性能</div>
                    <div>持续提高成像雷达产品竞争力</div>
                </div>
              </div>
              </AnimationOnScroll>

            <div className="flex w-[40vw]">
              <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={200}>
              <video autoPlay='autoplay' loop='loop' muted='muted' src={video2} className="w-[50vw] max-h-[30vw]"></video>
              </AnimationOnScroll>
           </div>
              
          </div>

          <div className="flex flex-col pt-[17vw] pb-[6vw] items-center text-black">
                <div className='text-[2.6vw] pb-[5vw]'> 应用场景 </div>
                <div className="flex w-[70vw] justify-between">
                  <div className="flex flex-col justify-between items-center">
                    <img src={pic1} className='h-[8.6vw] pb-[1vw]'></img>
                    <div className='text-[1.3vw] pb-[5vw]'>ADAS</div>
                    <img src={pic5} className='h-[8.3vw] pb-[1vw]'></img>
                    <div className='text-[1.3vw]'>机器人</div>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    <img src={pic2} className='h-[8vw] pb-[1vw]'></img>
                    <div className='text-[1.3vw] pb-[5vw]'>ROBOTTAXI</div>
                    <img src={pic6} className='h-[7vw] pb-[1vw]'></img>
                    <div className='text-[1.3vw]'>飞行汽车</div>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                   <img src={pic3} className='h-[7.2vw] mt-[1vw] pb-[1.3vw]'></img>
                    <div className='text-[1.3vw] pb-[5vw] pt-[0.6vw]'>自动驾驶物流</div>
                    <img src={pic7} className='h-[9.9vw] pb-[1vw]'></img>
                    <div className='text-[1.3vw]'>智能交通</div>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                  <img src={pic4} className='h-[7.2vw] mt-[1vw] pb-[1.3vw]'></img>
                    <div className='text-[1.3vw] pb-[5vw]'>无人配送</div>
                    <img src={pic8} className='h-[8.6vw] pb-[0.2vw]'></img>
                    <div className='text-[1.3vw]'>生命体征检测</div>
                  </div>
                </div>

          </div>

          {/* <div className='flex p-[2vw] bg-blue-400 w-[100vw] justify-center items-center relative'>

                <img src={leftArrow} alt="" className='w-[1vw] h-[1vw]'/>

    <div className='text-white text-[1.5vw] font-light px-[1vw]'>获得更多信息 ，欢迎联系我们</div>
    <img src={rightArrow} alt="" className='w-[1vw] h-[1vw]' />
    <img src={shadow} alt="" className='absolute top-[2.5vw]'/>
  </div> */}
      <Foot></Foot>
      </div>
  )
}
