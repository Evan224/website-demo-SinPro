import leftArrow from './img/leftArrow.png'
import lightlogo from './img/light-logo.png'
import {useState} from 'react'


export default function Contact() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[title,setTitle]=useState('');
  const[content,setContent]=useState('');

  return (
    <div className="bg-contact-background bg-cover text-white w-[100vw] mt-[-10vw]"
    >
        <div className="flex flex-col items-end pt-[20vw] w-[70vw] mx-auto text-[2vw]">
          <div>欢迎留下您的联系方式</div>
          <div className="pb-[2vw]">我们将提供专业、周到的产品咨询服务</div>
          <form action="">
              <div className="grid gap-[1vw] grid-cols-2 ">
                 
                  <div className="w-[23vw] h-[3vw] bg-white text-black text-[1vw]">
                         <div className="bg-white  inline-block font-bold 
                         whitespace-pre">   姓 名<span className="text-red-600">*</span>：</div>
                         <input type="text" className="h-[3vw] w-[18vw] outline-none
                         " value={name} onChange={(e)=>{
                          setName(e.target.value);
                       }}/>
                  </div>
                  
                  <div className="w-[23vw] h-[3vw] bg-white text-black text-[1vw]">
                         <div className="bg-white  inline-block font-bold 
                         whitespace-pre">   电子邮箱<span className="text-red-600">*</span>：</div>
                         <input type="text" className="h-[3vw] w-[15vw] outline-none
                         " value={email} onChange={(e)=>{
                          setEmail(e.target.value);
                       }}/>
                  </div>
                  
                  <div className="w-[23vw] h-[3vw] bg-white text-black text-[1vw]">
                         <div className="bg-white  inline-block font-bold 
                         whitespace-pre">   手 机 ：</div>
                         <input type="text" className="h-[3vw] w-[18vw] outline-none
                         " value={phone} onChange={(e)=>{
                          setPhone(e.target.value);
                       }}/>
                  </div>

                  <div className="w-[23vw] h-[3vw] bg-white text-black text-[1vw]">
                         <div className="bg-white  inline-block font-bold 
                         whitespace-pre">   标 题 ：</div>
                         <input type="text" className="h-[3vw] w-[18vw] outline-none
                         " value={title} onChange={(e)=>{
                          setTitle(e.target.value)
                       }}/>
                  </div>

                  <div className="col-span-2 block w-full text-sm text-black text-[1vw] relative">
                         <div className="font-bold top-[1vw] left-[0.6vw] absolute
                         ">   内 容 ：</div>
                        <textarea id="message" rows="8" className="col-span-2 block
                         pl-[5vw] pt-[1vw] w-full text-sm  outline-none" placeholder="" value={content} onChange={(e)=>{
                          setContent(e.target.target);
                       }}>
                        </textarea>
                  </div>    
              </div>
              
          </form>

          <div className="bg-yellow-500 hover:bg-yellow-700 mt-[1vw] text-center pt-[0.5vw] pr-[1vw]
              text-white text-[12px] md:text-[0.5vw] md:h-[2.5vw] md:w-[8vw] w-[50px] h-[30px] relative">
                <span className="align-center">发   送</span>  
                <img src={leftArrow} alt="" className="w-[1vw] absolute right-[1vw] top-[1vw]"/>
          </div>

        </div>

        <div className="flex justify-between pt-[10vw] w-[70vw] mx-auto pb-[3vw] items-center">
          <div className="flex flex-col items-start text-[1vw]">
            <div className="text-[2vw] pb-[1vw]">赛恩领动（上海）智能科技有限公司</div>
            <div>电话 : 021-6858667 </div>
            <div>邮箱 : contractus@sinpro.ai</div>
            <div>地址 : 上海市浦东新区荣盛路88号盛大天地源创谷1号楼902</div>
          </div>
          <img src={lightlogo} alt="" className="h-[5vw]"/>
        </div>
    </div>
  )
}
