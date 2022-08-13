import {useState,useEffect} from 'react'
import "./lineAnimate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const description={
    "信号处理算法工程师":["负责毫米波雷达的信号处理算法的方案设计与仿真；",
    "负责撰写相应的算法设计文档；",
    "负责算法嵌入式实现，及其软件自测；",
    "负责算法的实测验证以及问题分析；",
    "负责对毫米波雷达领域前沿算法技术的调研与仿真开发以及实现；",
    "与其他研发同事协作，推进产品方案实现。"],
    "感知算法工程师":[
     " 负责雷达感知算法的研发及问题解决，如利用卡尔曼滤波（KF/EKF/UKF）进行目标跟踪与识别、自由空间检测、local SLAM、道路识别等；",
  "负责撰写相应的算法设计文档；",
  "负责算法嵌入式实现，及其软件自测；",
  "负责算法的实测验证以及问题分析；",
  "负责对毫米波雷达领域前沿算法技术的调研与仿真开发以及实现；",
  "与其他研发同事协作，推进产品方案实现。",
    ],
    "软件开发工程师":[
      "负责嵌入式软件的方案设计、代码编写、调试、归档文件编写等与研发相关工作；",
      "负责参与嵌入式系统移植、驱动开发及软件功能实现，调试和测试；",
      "负责嵌入式Linux系统整体运行效率、稳定性、可靠性等方面的优化；",
      "负责产品、项目等技术支持工作；",
      "与其他研发同事协作，推进产品方案实现",
    ],
    "工具开发工程师":[
      "负责开发雷达相关工具链，主要包括数据采集、功能显示、回放分析、数据存储等模块定义及开发；",
  "负责和各个算法模块对接具体需求，并完成工具链代码迭代；",
  "撰写工具软件功能及设计规范文档；",
  "负责工具软件的集成、发布工作。",
    ],
    "射频工程师":[
      "负责77GHz毫米波雷达射频前端的研发，按照设计需求完成射频前端收发链路各器件参数的调试、优化，并输出相关技术文档；", 
      "协助进行系统功能联调工作，负责解决联调中MMIC射频相关问题（包括模拟和数字部分）；",
      "参与系统方案论证、设计与评估；",
      "负责解决产品设计与生产过程中的射频部分相关问题；",
      "负责制定产品射频性能指标和生产测试规范。"
    ],
    "结构工程师":[
      "负责汽车电子零部件产品的结构设计；",
  "负责产品的开模前评估，试模验证及试产模具验收；" ,
  "负责试生产，处理生产中，DV/PV实验过程中的设计问题；",
  "负责研发产品客户所要求APQP的资料作成； ",
  "负责研发产品的多部门工作协调和沟通，并主持相关会议；",
  "负责直接同供应商进行零件选型设计沟通；" ,
  "负责同客户进行产品设计沟通并能出差至车厂对应处理；",
  "相关产品的不良点分析、改善及对策；", 
  "整机的结构设计，材料选用、散热设计并进行仿真。"
    ],
    "软件测试工程师":[
  "针对公司的产品设计开发测试软件、进行产品的测试工作；",
  "负责执行软件测试及执行版本验证工作；",
  "负责管理软件缺陷工作；",
  "参与产品设计及相关评审工作；"
    ],
    "系统测试工程师":[
      "根据系统需求，制定雷达系统测试计划与测试规范，编写测试用例；",
      "规划所需测试工具软件及设备，搭建测试环境，编写相关测试脚本；",
     "完成雷达系统测试，并对测试结果做出分析评价，提出改进意见；",
  "根据客户需求，完成传感器集成、标定、测试规划、执行和评价；",
  "测试车辆及设备的管理与维护。"
    ]
}

  export default function(props){
    const {job,curSubTab,handleClickJob}=props;
    const des=description[job];
    const [isCur,setIsCur]=useState(false);
    useEffect(()=>{
      if(curSubTab===job){
        setIsCur(true);
      }else{
        setIsCur(false);
      }
    },[curSubTab])

    return(
        <div className="flex flex-col">
            <div className="flex flex-between w-[40vw] py-[2vw] items-center justify-between">
                   <div onClick={()=>{handleClickJob(job)}} className={`${isCur?'text-blue-400':''}`}>{job}</div>
                    <div className={`${!isCur?'hidden':''} text-white bg-blue-400 px-[0.5vw]`}>一键投递简历</div>
            </div>

            <div className="flex flex-col items-start">
            {des.map((key,value)=>{
                let number=Number(value)+1;
                console.log(isCur)
                if(!isCur){
                  return(
                    <div key={value}> </div>
                  )
                }
                return(
                  <AnimationOnScroll animateIn='animate__moveLi' delay={number*100} key={value} ><span>{(Number(value)+1).toString()} 、</span> {key}</AnimationOnScroll>
                  
                )
            })}
            </div>
       
        </div>
    )
  }