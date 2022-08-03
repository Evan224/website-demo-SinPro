import React, { useEffect, useState,useCallback } from "react";
import { Link } from "react-router-dom";
import logo from '../img/dark-logo.png';
import lightLogo from '../img/light-logo.png'
import { useLocation } from "react-router-dom";
import Alert from "./Alert";

const listWords={
  MainPage:"首页",
  CoreTech:"技术核心",
  Products:"产品与解决方案",
  News:"新闻中心",
  About:"关于我们",
  Contact:"联系我们"
}


const Header = () => {
    const location=useLocation();
    const [y,setY]=useState(window.screenY);
    const [theme,setTheme]=useState('up');
    const [current,setCurrent]=useState(location.pathname.slice(1));
    const [show,setShow]=useState(false);

    const handleNavigation = useCallback(
      e => {
        const window = e.currentTarget;
        setY(window.scrollY);
        if(window.scrollY<60){
          setTheme('up')
        }else{
          setTheme('down')
        }
      }, [y]
    );

    useEffect(()=>{
        setCurrent(location.pathname.slice(1))
    },[location])

    useEffect(() => {
      window.addEventListener("scroll", (e) => handleNavigation(e));
    
      return () => { // return a cleanup function to unregister our function since its gonna run multiple times
        window.removeEventListener("scroll", (e) => handleNavigation(e));
      };
    }, [y]);

    const getCurrentColor=(item)=>{
      if(theme==="up"){


        return "text-white";
      }

      if(item===current){
        return "text-blue-400"
      }

      return "text-black"
    }

    const getCurrentBorder=(item)=>{
      if(current!==item){
        return "border-b-0"
      }
      if(theme==="down"){
        return "border-b-2 border-blue-600"
      }
      return "border-b-2 border-white"
    }

    return (
    <div className={`${theme==="up"?"bg-transparent top-0 ":"bg-white top-0 fixed"} h-[4vw]  
    w-[100vw] flex flex-row px-[15vw] justify-between
     mx-auto text-center z-10`}>

        {/* 装图片 */}
  
       <img src={`${theme==="up"?lightLogo:logo}`} alt="not found" 
       className="mx-auto w-[6vw] h-[4vw] py-[1vw]"/>
   
        {/* 装标题 */}
            <div className="flex-row flex-none flex">
              <div className="w-[20vw]"></div>
              {Object.keys(listWords).map((item) => {
                if(item==="News"){
                  return(
                    <div key={item} onClick={()=>setShow(true)} className={`ml-[3vw] text-[1px] flex items-center 
                    ${getCurrentColor(item)}` }>
                        <p>
                          {listWords[item]}
                        </p>
                    </div>
                  )
                }

                return (
                  <Link to={`/${item}`} key={item} onClick={()=>{setCurrent(item)}} 
                  className={`ml-[3vw] text-[1px] flex items-center 
                  ${getCurrentColor(item)}  ${getCurrentBorder(item)}`}>
                      <p>
                        {listWords[item]}
                      </p>
                  </Link>
                );
              })}
            </div>

        <Alert show={show} handleShow={()=>{setShow(false)}} 
        type={"building"} text="网站内容搭建中 ， 敬请期待"></Alert>
    </div>
  );
};

export default Header;