import "animate.css/animate.min.css";
import "./lineAnimate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as Line1 } from './img/svgs/line1.svg';
import { ReactComponent as Line2 } from './img/svgs/line2.svg';
import { ReactComponent as Line3 } from './img/svgs/line3.svg';
import { ReactComponent as Line4 } from './img/svgs/line4.svg';
import { ReactComponent as Line5 } from './img/svgs/line5.svg';
import { ReactComponent as Line6 } from './img/svgs/line6.svg';
import { ReactComponent as Line7 } from './img/svgs/line7.svg';
import Tabs from "./Tabs";
import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import pic5 from './img/pic5.png'


import picture1 from './img/picture1.png'



export default function About() {
  return (
    <div className="bg-about-background bg-no-repeat bg-cover text-white w-[100vw] t-[-8vw]"
    >
       <div className="flex px-auto w-[100vw] mx-auto flex-col">

    <div className="flex w-[70vw] mx-auto justify-between">
        <AnimationOnScroll animateIn="animate__drawPath" duration={5}
        className=" w-[10vw] h-[10vw] mt-[4vw] ml-[-3vw]"
        animateOnce={true}>
        <Line1/>
        </AnimationOnScroll>


        <AnimationOnScroll className="flex flex-col pt-[14vw] "
        animateIn="animate__fadeIn"
        animateOnce={true}>
            <div className="text-[3vw] ">SinPro是一家什么样的公司？</div>

            <div className="flex flex-col text-[1.3vw] mt-[10vw]">
                <div>智能感知新业务的赋能者</div>
                <div>不忘初心的智能传感器耕耘者</div>
                <div>全球视野的全栈感知方向提供者</div>
                <div>面向未来的成长性高科技企业</div>
            </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__drawPath" duration={3}
        className="w-[25vw] h-[25vw] pt-[12vw] mr-[-2vw]"
        animateOnce={true}>
        <Line2/>
        </AnimationOnScroll>
    </div>
      
    {/* second */}
    <div className="flex w-[70vw] mx-auto justify-around relative">
        <AnimationOnScroll animateIn="animate__drawPath" duration={5}
        className="w-[30vw] top-[6vw] left-[-10vw] absolute"
        animateOnce={true}>
        <Line3/>
        </AnimationOnScroll>


        <AnimationOnScroll className="flex flex-col items-end 
        pt-[14vw] mr-[5vw] w-[100vw] "
        animateIn="animate__fadeIn"
        animateOnce={true}>
            <div className="text-[3vw] ">加入SinPro你将拥有怎样的机会？</div>
        </AnimationOnScroll>
        <img className="w-[60vw] absolute top-[20vw] " src={picture1} alt="" />

    </div>

    {/* Third */}
    <div className="flex w-[70vw] mx-auto pt-[60vw] relative">


        <AnimationOnScroll className="flex flex-col ml-[10vw]  pt-[5vw] "
        animateIn="animate__fadeIn"
        animateOnce={true}>
            <div className="text-[2vw] font-extrabold">我们的使命</div>
            <div className="text-[3vw]">让产品比人类更智能</div>
            <div className="font-light">Enable Our Products Better Than Us</div>


        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__drawPath" duration={3}
        className="w-[30vw] left-[35vw] mt-[6vw] absolute"
        animateOnce={true}>
        <Line4/>
        </AnimationOnScroll>
    </div>

    {/* Fourth */}

    <div className="flex w-[70vw] mx-auto pt-[35vw] relative">


<AnimationOnScroll className="flex flex-col ml-[30vw]  "
animateIn="animate__fadeIn"
animateOnce={true}>
    <div className="text-[2vw] font-extrabold">我们的愿景</div>
    <div className="text-[3vw]">引领智能感知新未来</div>
    <div className="font-light">Make the Future of Intelligent Sensing</div>


</AnimationOnScroll>

<AnimationOnScroll animateIn="animate__drawPath" duration={3}
className="w-[40vw] absolute pr-[10vw] ml-[-5vw]"
animateOnce={true}>
<Line5/>
</AnimationOnScroll>
</div>

    {/* Fifth */}

<div className="flex w-[70vw] mx-auto pt-[40vw] relative">


<AnimationOnScroll className="flex flex-col ml-[10vw]"
animateIn="animate__fadeIn"
animateOnce={true}>
    <div className="text-[2vw] font-extrabold ">我们的价值观</div>
    <div className="flex flex-col w-[60vw]">
        <div className="flex justify-between my-[3vw]">
            <div className="flex items-center">
               <img src={pic1} alt="" className="w-[10vw]"/>
               <div className="flex flex-col ml-[1vw] ">
                 <div className="spacing-1 text-[1.3vw]">协作</div>
                 <div className="spacing-1 text-[1.3vw] opacity-50">Cooperation</div>
               </div>
            </div>
            <div className="flex items-center">
               <img src={pic2} alt="" className="w-[10vw]"/>
               <div className="flex flex-col ml-[1vw] ">
                 <div className="spacing-1 text-[1.3vw]">信任</div>
                 <div className="spacing-1 text-[1.3vw] opacity-50">Trust</div>
               </div>
            </div>
            <div className="flex items-center">
               <img src={pic3} alt="" className="w-[8vw]"/>
               <div className="flex flex-col ml-[1vw] ">
                 <div className="spacing-1 text-[1.3vw]">创新</div>
                 <div className="spacing-1 text-[1.3vw] opacity-50">Creativity</div>
               </div>
            </div>
        </div>
        <div className="flex justify-around">
        <div className="flex items-center">
               <img src={pic4} alt="" className="w-[8vw]"/>
               <div className="flex flex-col ml-[1vw] ">
                 <div className="spacing-1 text-[1.3vw]">责任</div>
                 <div className="spacing-1 text-[1.3vw] opacity-50">Responsibility</div>
               </div>
            </div>
            <div className="flex items-center">
               <img src={pic5} alt="" className="w-[10vw]"/>
               <div className="flex flex-col ml-[1vw] ">
                 <div className="spacing-1 text-[1.3vw]">效率</div>
                 <div className="spacing-1 text-[1.3vw] opacity-50">Creativity</div>
               </div>
            </div>
        </div>


    </div>
</AnimationOnScroll>

<AnimationOnScroll animateIn="animate__drawPath" duration={3}
className="w-[50vw] absolute left-[30vw] top-[37vw] "
animateOnce={true}>
<Line6/>
</AnimationOnScroll>
</div>

    {/* Sixth */}


    <div className="flex w-[70vw] mx-auto justify-around relative">
        <AnimationOnScroll animateIn="animate__drawPath" duration={5}
        className="w-[18vw] h-[10vw] top-[14vw] left-[8vw] absolute"
        animateOnce={true}>
        <Line7/>
        </AnimationOnScroll>


        <AnimationOnScroll className="flex flex-col items-end 
        pt-[15vw] w-[100vw] "
        animateIn="animate__fadeIn"
        animateOnce={true}>
            <div className="text-[3.3vw] text-blue-400">SinPro关注哪方面的人才？</div>
        </AnimationOnScroll>

    </div>


 <Tabs></Tabs>
    
       </div>
    </div>



  )
}
