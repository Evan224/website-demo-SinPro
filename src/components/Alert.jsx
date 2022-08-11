
import close from './img/close.png'
import building from './img/building.png'
import success from './img/success.png'
import necessary from './img/necessary.png'
import copy from './img/copy.png'
import { useEffect } from 'react'
import react from 'react'

export default function(props){

    const {show=false,handleShow,type="None"}=props;
    let icon=close;
    let Word='';

    if(type==="building"){
        icon=building;
        Word='网站内容搭建中 ， 敬请期待';
    }else if(type==="success"){
        icon=success;
        Word='信息提交成功 ， 谢谢';
    }else if(type==="necessary"){
        icon=necessary;
        Word='处为必填项，请务必填写！';
    }else{
        icon=copy
    }


    useEffect(()=>{
        if(show===true){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow='auto'
        }
        },[show])

  
    
    return (
        <div className={`${show?'absolute touch-none':'hidden'} top-0 left-0 right-0 w-[100vw] h-[200vh] bg-gray-900/70 z-50`}>
        <div className="flex flex-col fixed top-[38vh] 
        left-[28vw] w-[34vw] h-[15vw] bg-white rounded-lg">
            <div className="relative w-[34vw] bg-blue-400 h-[6vw] rounded-t-lg">
                <img onClick={handleShow} alt='' className="absolute right-[2vw] top-[1.4vw] w-[1.4vw]" src={close}></img>
            </div>
            <div className="flex justify-between items-center h-[15vw]">
                  <img src={icon} alt="" className='ml-[7vw] w-[5vw]'/>
                  <span className='mr-[6vw] text-[1.25vw] w-[20vw] text-black text-center' ><span className={`${type==="necessary"?' text-red-600':'hidden'}`}>*</span> {Word}</span>
                  {/* <span className='mr-[5vw] w-[17vw] text-[1.25vw] text-black' > {Word}</span> */}
            </div>        
        </div>
        
    </div>
    )
}