
import close from './img/close.png'
import building from './img/building.png'
import success from './img/success.png'
import necessary from './img/necessary.png'
import copy from './img/copy.png'

export default function(props){

    const {text = "默认",show=false,handleShow,type="None"}=props;
    let icon=close;
    switch(type){
       case("building"):icon=building;
       case("success"):icon=success;
       case("necessary"):icon=necessary;
       case("copy"):icon=copy;
    }
    
    return (
        <div className={`${show?'absolute':'hidden'} top-0 left-0 right-0 w-[100vw] h-[100vh] bg-gray-900/70`}>
        <div className="flex flex-col fixed top-[38vh] 
        left-[28vw] w-[30vw] h-[20vw] bg-white rounded-lg">
            <div className="relative w-[30vw] bg-blue-400 h-[5vw] rounded-t-lg">
                <img onClick={handleShow} className="absolute right-[2vw] top-[2vw]" src={close}></img>
            </div>
            <div className="flex justify-between items-center h-[15vw]">
                  <img src={icon} alt="" className='ml-[4vw] w-[5vw]'/>
                  <div className='mr-[4vw] text-[1.25vw]' > {text}</div>
            </div>        
        </div>
    </div>
    )
}