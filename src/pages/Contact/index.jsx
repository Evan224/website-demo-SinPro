import leftArrow from './img/leftArrow.png'
import lightlogo from './img/light-logo.png'
import {useState} from 'react'
import axios from 'axios';
import Alert from '../../components/Alert';
const baseUrl="http://106.14.156.67:8899/api/contact";


export default function Contact() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[title,setTitle]=useState('');
  const[content,setContent]=useState('');
  const[show,setShow]=useState(false);
  const[type,setType]=useState('');

  const handleClick=()=>{
    if(name===''||email===''){
      setShow(true);
      setType("necessary");
    }else{
      axios.post(baseUrl,{
        name,
        email,
        cellphone:phone,
        title,
        content,
      })
      setShow(true);
      setName('');
      setEmail('');
      setPhone('');
      setTitle('');
      setContent('');  
      setType("success");
      
    }
  }


  return (
    <div className="bg-contact-background bg-cover text-white w-[100vw] mt-[-10vw]"
    >
        <div className="flex flex-col items-end pt-[20vw] w-[70vw] mx-auto text-[2vw]">
          <div>欢迎留下您的联系方式</div>
          <div className="pb-[2vw]">我们将提供专业、周到的产品咨询服务</div>
                 
          <div className="flex justify-between h-[3vw]">
          <div className="input-box text-black bg-white text-[1vw] flex items-center font-bold px-[0.5vw] w-[25vw]">
  <span className="prefix whitespace-pre">姓 名<span className="text-red-600">*</span></span>：
  <input type="tel" className="outline-none overflow-hidden w-[20vw]" value={name} onChange={(e)=>{setName(e.target.value) }}/>
</div>
         

<div className="input-box text-black bg-white text-[1vw] flex items-center font-bold px-[0.5vw] ml-[2vw] w-[25vw]">
  <span className="prefix whitespace-pre">电子邮箱<span className="text-red-600">*</span></span>：
  <input type="tel" className="outline-none overflow-hidden w-[18vw]" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
          </div>

          <div className="flex justify-between h-[3vw] mt-[1vw]">
          <div className="input-box text-black bg-white text-[1vw] flex items-center font-bold px-[0.5vw] w-[25vw]">
  <span className="prefix whitespace-pre">手 机 <span className="text-red-600"> </span></span>：
  <input type="tel" className="outline-none overflow-hidden w-[20vw]" value={phone} onChange={(e)=>{setPhone(e.target.value) }}/>
</div>
         

<div className="input-box text-black bg-white text-[1vw] flex items-center font-bold px-[0.5vw] ml-[2vw] w-[25vw]">
  <span className="prefix whitespace-pre">  标  题    <span className="text-red-600"> </span></span>：
  <input type="tel" className="outline-none overflow-hidden w-[18vw]" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
</div>
          </div>

      


                  <div className="col-span-2 block w-[52vw] text-black text-[1vw] relative pt-[1vw] ">
                         <div className="font-bold top-[2vw] left-[0.6vw] absolute
                         ">   内 容 ：</div>
                        <textarea id="message" rows="8" className="col-span-2 block
                         pl-[5vw] pt-[1vw] w-full text-sm outline-none resize-none" placeholder="" value={content} onChange={(e)=>{
                          setContent(e.target.target);
                       }}>
                        </textarea>
                  </div>    
      

          <div className="bg-yellow-500 hover:bg-yellow-700 mt-[1vw] text-center pt-[0.5vw] pr-[1vw]
              text-white text-[1vw] md:text-[1vw] md:h-[2.5vw] md:w-[8vw] w-[50px] h-[30px] relative"
              onClick={handleClick}>
                <span className="align-center">发   送</span>  
                <img src={leftArrow} alt="" className="w-[1vw] absolute right-[1vw] top-[1vw]"/>
          </div>

        </div>

        <div className="flex justify-between pt-[10vw] w-[70vw] mx-auto pb-[3vw] items-center">
          <div className="flex flex-col items-start text-[1vw]">
            <div className="text-[2vw] pb-[1vw]">赛恩领动（上海）智能科技有限公司</div>
            {/* <div>电话 : 021-6858667 </div> */}
            <div>邮箱 : contractus@sinpro.ai</div>
            {/* <div>地址 : 上海市浦东新区荣盛路88号盛大天地源创谷1号楼902</div> */}
          </div>
          <img src={lightlogo} alt="" className="h-[5vw]"/>
        </div>
        <Alert show={show} handleShow={()=>{setShow(false)}} 
        type={type}></Alert>
    </div>
  )
}
