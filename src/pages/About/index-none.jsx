import "animate.css/animate.min.css";
import "./lineAnimate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import pic5 from './img/pic5.png'


export default function About() {
  return (
   <>

    {/* <div className="bg-about-background01 bg-auto w-[100vw] text-white mt-[-5vw]"> */}
    <div className="bg-about-background-tmp bg-auto w-[100vw] ">

         <div className="w-[70vw] mx-auto">

      <div className="flex w-[70vw] mx-auto pt-[10vw]">

      </div>
       <div className="flex pt-[15vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto ">
   
          <AnimationOnScroll animateIn="drawUpToRight"  duration={1}
           className="bg-white w-[0.2vw] mt-[-20vw]"  animateOnce={true}>

          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" className="w-[4vw] h-[4vw] border-white mt-[-3.2vw] ml-[-0.2vw]
           border-b-[0.25vw] border-l-[0.25vw] rounded-bl-full" delay={500}  animateOnce={true}>

          </AnimationOnScroll>

          <div className="flex flex-col ml-[5vw]">
              <div className="text-[2.5vw]"> SinPro是一家什么样的公司？</div>
              <div className="pt-[8vw]">智能感知新业务的赋能者</div>
              <div>不忘初心的智能传感器耕耘者</div>
              <div>全球视野的全栈感知方案提供者</div>
              <div>面向未来的成长型高科技企业</div>
          </div>

          <AnimationOnScroll animateIn="animate__fadeIn" className="w-[20vw] h-[20vw] border-white ml-[8vw]
           border-t-[0.25vw] border-r-[0.25vw] rounded-tr-full " delay={1500}  animateOnce={true}>

          </AnimationOnScroll>

        </div>

        <div className="flex flex-row-reverse pt-[20vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto ">
   
          <AnimationOnScroll animateIn="drawUpToRight2"  duration={1} delay={2000}
           className="bg-white w-[0.2vw] mt-[-20vw] ml-[-1.4vw]"  animateOnce={true}>

          </AnimationOnScroll>

          <div className="flex flex-col ml-[5vw] mr-[3vw]">
              <div className="text-[2.5vw]"> 加入sinPro你将拥有怎样的机会? </div>
          <div className="bg-black w-[58vw] h-[30vw] mt-[3vw]"></div>

          </div>

          <AnimationOnScroll animateIn="animate__fadeIn" className="w-[4vw] h-[4vw] border-white 
           border-t-[0.25vw] border-l-[0.25vw] rounded-tl-full mt-[1.5vw]" delay={1000}  animateOnce={true}>

          </AnimationOnScroll>

          <AnimationOnScroll animateIn="drawUpToRight3"  duration={1} delay={1000} animateOnce={true}
           className="bg-white w-[0.2vw] ml-[-1.4vw] mt-[5.2vw]">

          </AnimationOnScroll>

        </div>

        <div className="flex pt-[15vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto ">
   
          </div>
        </div>
    </div>


    <div className="bg-about-background02 bg-auto w-[100vw] text-white mt-[-5vw]">
         <div className="w-[70vw] mx-auto">

      <div className="flex w-[70vw] mx-auto pt-[10vw]">

      </div>
       <div className="flex pt-[15vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto ">
   
          <AnimationOnScroll animateIn="drawUpToRight"  duration={1}
           className="bg-white w-[0.2vw] mt-[-20vw]">

          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" className="w-[4vw] h-[4vw] border-white mt-[-3.2vw] ml-[-0.2vw]
           border-b-[0.25vw] border-l-[0.25vw] rounded-bl-full" delay={500} >

          </AnimationOnScroll>


          <div className="flex flex-col ml-[5vw] leading-snug mt-[-2vw]">

<div className="text-[2vw] font-weight-900">我们的使命</div>
<div className="text-[2.5vw] ">让产品比人类更智能</div>
<div className="text-[1vw] opacity-20">Enable Our Product Smarter Than Us</div>


</div>

          <AnimationOnScroll animateIn="animate__fadeIn" className="w-[40vw] h-[40vw] border-white ml-[8vw]
           border-t-[0.25vw] border-r-[0.25vw] rounded-tr-full " delay={1500} >

          </AnimationOnScroll>

        </div>

        <div className="flex flex-row-reverse pt-[20vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto justify-between">
   
          <AnimationOnScroll animateIn="drawUpToRight4"  duration={1} delay={1000} animateOnce={true}
           className="bg-white w-[0.2vw] mt-[-20vw] ml-[-1.4vw]"> 

          </AnimationOnScroll>

          <div className="flex flex-col mt-[28vw] items-end leading-snug">
            <div className="text-[2vw] font-weight-900">我们的愿景</div>
            <div className="text-[2.5vw] ">引领智能感知新未来</div>
            <div className="text-[1vw] opacity-20">Make the Future of Intelligent Sensing</div>
          </div>

          <AnimationOnScroll animateIn="animate__fadeIn" className="w-[4vw] h-[4vw] border-white 
           border-t-[0.25vw] border-l-[0.25vw] rounded-tl-full mt-[30vw]" delay={1000} animateOnce={true} >

          </AnimationOnScroll>



        </div>
        
        <AnimationOnScroll animateIn="drawUpToRight2"  duration={1} delay={1000}
           className="bg-white w-[0.2vw]  mt-[5.2vw]" animateOnce={true}>

          </AnimationOnScroll >

        <div className="flex pt-[15vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto mt-[-2vw]">
   
          </div>
        </div>
    </div>

    <div className="bg-about-background03 bg-auto w-[100vw] text-white mt-[-5vw]">
         <div className="w-[70vw] mx-auto">

      <div className="flex w-[70vw] mx-auto pt-[10vw]">

      </div>
       <div className="flex pt-[15vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto ">
   
          <AnimationOnScroll animateIn="drawUpToRight"  duration={1}
           className="bg-white w-[0.2vw] mt-[-20vw]">

          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" className="w-[4vw] h-[4vw] border-white mt-[-3.2vw] ml-[-0.2vw]
           border-b-[0.25vw] border-l-[0.25vw] rounded-bl-full" delay={500} >

          </AnimationOnScroll>


          <div className="flex flex-col ml-[5vw] leading-snug mt-[-1vw]">

        <div className="text-[2vw] font-weight-900 font-bold">我们的价值观</div>

        <div className="flex flex-row justify-around w-[40vw] mt-[10vw]">
              <flex className="flex justify-around">

              </flex>
              <flex className="flex justify-around">

              </flex>
        </div>




</div>

          <AnimationOnScroll animateIn="animate__fadeIn" className="w-[40vw] h-[40vw] border-white ml-[8vw]
           border-t-[0.25vw] border-r-[0.25vw] rounded-tr-full " delay={1500} >

          </AnimationOnScroll>

        </div>

        <div className="flex flex-row-reverse pt-[20vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto justify-between">
   
          <AnimationOnScroll animateIn="drawUpToRight4"  duration={1} delay={1000} animateOnce={true}
           className="bg-white w-[0.2vw] mt-[-20vw] ml-[-1.4vw]"> 

          </AnimationOnScroll>

          <div className="flex flex-col mt-[28vw] items-end leading-snug">
            <div className="text-[2vw] font-weight-900">我们的愿景</div>
            <div className="text-[2.5vw] ">引领智能感知新未来</div>
            <div className="text-[1vw] opacity-20">Make the Future of Intelligent Sensing</div>
          </div>

          <AnimationOnScroll animateIn="animate__fadeIn" className="w-[4vw] h-[4vw] border-white 
           border-t-[0.25vw] border-l-[0.25vw] rounded-tl-full mt-[30vw]" delay={1000} animateOnce={true} >

          </AnimationOnScroll>



        </div>
        
        <AnimationOnScroll animateIn="drawUpToRight2"  duration={1} delay={1000}
           className="bg-white w-[0.2vw]  mt-[5.2vw]" animateOnce={true}>

          </AnimationOnScroll >

        <div className="flex pt-[15vw] font-extralight leading-5 text-[1vw] 
       w-[70vw] mx-auto mt-[-2vw]">
   
          </div>
        </div>
    </div>

     
   </>



  )
}
