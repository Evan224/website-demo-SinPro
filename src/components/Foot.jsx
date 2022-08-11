import leftArrow from './img/leftArrow.png'
import rightArrow from './img/rightArrow.png'
import shadow from './img/shadow.png'
import {useNavigate} from 'react-router-dom'

export default function(){
  const navigate=useNavigate();
  const handleClick=(str)=>{
    window.scrollTo(0, 0)
    navigate(str,{replace:true});
  }
    return(
   <div className='flex p-[2vw] bg-blue-400 w-[100vw] justify-center items-center relative
   '>
     <div className="flex justify-center items-center"  onClick={()=>{handleClick('/Contact')}}>
     <img src={leftArrow} alt="" className='w-[1vw] h-[1vw] animate-shake-slow'/>
    <div onClick={()=>{handleClick('/Contact')}} className='text-white text-[1vw] font-light px-[1vw]'>获得更多信息 ，欢迎联系我们</div>
    <img src={rightArrow} alt="" className='w-[1vw] h-[1vw] animate-shake-slow2' />
    <img src={shadow} alt="" className='absolute top-[2.5vw] w-[20vw] animate-ping'/>
     </div>

  </div>
    )
 
}