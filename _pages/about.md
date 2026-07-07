---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me
I am a Lecturer at the [College of Cryptology and Cyber Science](https://cyber.nankai.edu.cn/), Nankai University (南开大学密码与网络空间安全学院), China, and a member of the research groups led by [Prof. Zheli Liu](https://cyber.nankai.edu.cn/2021/0323/c13838a551995/page.htm) (刘哲理) and [Prof. Dan Ding](https://cyber.nankai.edu.cn/2021/0323/c13838a569771/page.htm) (丁丹). Prior to this, I earned both my B.E., M.S., and Ph.D. degrees from Tianjin University, China. My Ph.D. research on mmWave sensing and RF security was supervised by [Prof. Xiulong Liu](https://cic.tju.edu.cn/faculty/liuxiulong/index.html) (刘秀龙), and my M.S. research on RF mobile localization was supervised by [Prof. Yongtao Ma](https://faculty.tju.edu.cn/MaYongtao/zh_CN/index.htm) (马永涛).

My current research interests include **Cryptographic Hardware Acceleration** and **Radio-Frequency Privacy Computing**. I have published over 20 papers at the top-tier international conferences and journals, including ACM IMWUT, IEEE TMC, IEEE TWC, IEEE TAP, etc. I hold several academic positions such as TPC Member of TrustCom 2025 and Workshop Chair of ICA3PP 2023.


# ✒️ Journal paper

<style>
.journal-list {
  display: grid;
  gap: 1.05rem;
  margin: 1rem 0 2rem;
}

.journal-item {
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr);
  gap: 1.35rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e8ebef;
}

.journal-thumb {
  width: 170px;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #f8fafc;
}

.journal-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.journal-title {
  margin: 0 0 0.45rem;
  color: #174a8b;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.45;
}

.journal-title a {
  color: inherit;
  text-decoration: none;
}

.journal-title a:hover {
  color: #00369f;
  text-decoration: underline;
}

.journal-authors,
.journal-venue {
  color: #58626f;
  font-size: 0.9rem;
  line-height: 1.55;
}

.journal-authors {
  margin-bottom: 0.3rem;
}

.journal-tag {
  display: inline-flex;
  align-items: center;
  min-height: 1.35rem;
  margin-left: 0.35rem;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.journal-tag--q1 {
  color: #0f5132;
  background: #dff3e8;
}

.journal-tag--q2 {
  color: #284b80;
  background: #e4eefb;
}

@media (max-width: 700px) {
  .journal-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .journal-thumb {
    width: 100%;
    max-width: 320px;
  }
}
</style>

<div class="journal-list">
  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper1.png" alt="Neural Network Predictive Control"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1115/1.4069048">Neural Network Predictive Control for Planetary Surface Exploration Robots Considering Dynamic Conformational Stability</a></h3>
      <div class="journal-authors"><strong>Ning Zhang</strong>, Maoguo Li, Hutao Cui, Wenlai Ma, Yang Zhao</div>
      <div class="journal-venue">Journal of Mechanisms and Robotics <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper2.png" alt="Flexible Multi-Constraint Gripper for Nest Frames"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1115/1.4069074">Design, Analysis, and Experimental Research of Flexible Multi-Constraint Gripper for Nest Frames</a></h3>
      <div class="journal-authors">Maoguo Li, <strong>Ning Zhang</strong>, Yan Xing, Boyi Liu, Wenyuan Su, Shiyu Li, Shenxin Sun</div>
      <div class="journal-venue">Journal of Mechanical Design <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper3.png" alt="Satellite Antenna Pointing Uncertainty Quantification"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/aerospace12080720">Efficient Uncertainty Quantification for Satellite Antenna Pointing: A GSA-PEM Framework Integrating Multi-Source Disturbances</a></h3>
      <div class="journal-authors">Shiyu Tan, <strong>Ning Zhang</strong>, Yingyong Shen, Cong Wang, Jingbo Gao</div>
      <div class="journal-venue">Aerospace <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper4.png" alt="Low-Thrust Transfer Orbit Guidance"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/app16094171">Adaptive Multiresolution Collocation-Based Sequential Convex Programming for Fuel-Optimal Low-Thrust Transfer Orbit Guidance</a></h3>
      <div class="journal-authors">Changzheng Qian, <strong>Ning Zhang</strong>, Hutao Cui, Shengxin Sun, Wenlai Ma, Jianqiao Zhang</div>
      <div class="journal-venue">Applied Sciences <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper5.png" alt="Multi-Phase Indirect Shooting"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/aerospace13050429">A Bidirectional Initialization Framework for Multi-Phase Indirect Shooting in Time-Optimal Low-Thrust GTO-to-DRO Transfers</a></h3>
      <div class="journal-authors">Changzheng Qian, <strong>Ning Zhang</strong>, Hutao Cui, Shengxin Sun, Wenlai Ma</div>
      <div class="journal-venue">Aerospace <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper6.png" alt="Thermo-Mechanical Coupled Dynamics"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/app16115461">An Adaptive Dissipation–Precision Coordinated Multi-Scale Implicit Integration Algorithm for Thermo-Mechanical Coupled Dynamics of Flexible Multibody Systems with Temperature-Dependent Clearance Joints</a></h3>
      <div class="journal-authors">Yuntao Hua, <strong>Ning Zhang</strong>, Changzheng Qian, Shengxin Sun, Hutao Cui, Wenlai Ma</div>
      <div class="journal-venue">Applied Sciences <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper7.png" alt="Variable-Geometry Spacecraft Antenna"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/aerospace13060529">Dynamic Modeling and Thermo-Mechanical Coupling Analysis of Variable-Geometry Spacecraft Antenna with Clearance Hinges Under Extreme Thermal Environment</a></h3>
      <div class="journal-authors">Yuntao Hua, <strong>Ning Zhang</strong>, Yingyong Shen, Shengxin Sun, Hutao Cui, Wenlai Ma</div>
      <div class="journal-venue">Aerospace <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper8.png" alt="Dandelion Seed Takeoff"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1016/j.cja.2026.104341">Separated vortex ring evolution governs progressive stabilization of takeoff dandelion seeds</a></h3>
      <div class="journal-authors">Jinming Yao, Yang Zhao, Huibo Zhang, Jianan Xu, Chao Tang, <strong>Ning Zhang</strong></div>
      <div class="journal-venue">Chinese Journal of Aeronautics <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper9.png" alt="Martian Quadrotor UAVs"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1016/j.actaastro.2025.11.038">Enhancing the dynamic response of Martian quadrotor UAVs: Planetary gearbox integration, system modeling, and triple-loop cascade control</a></h3>
      <div class="journal-authors">Hongming Li, Yang Zhao, Wenlai Ma, Shengyu Lin, <strong>Ning Zhang</strong></div>
      <div class="journal-venue">Acta Astronautica <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
    </div>
  </article>
</div>







# 📃 Conference paper
- [Effects of different deployment strategies on the dynamic characteristics of bidirectional solar array](https://doi.org/10.1088/1742-6596/2746/1/012037)
  - Author: Yingyong Shen, Cong Wang, Shiyu Tan, **Ning Zhang**, Jingbo Gao
  - Conference: The 14th Asia Conference on Mechanical and Aerospace Engineering (ACMAE 2023)

- [Static Stiffness Testing and Validation of a Large Hoop-Column Deployable Antenna Based on Similarity Theory](https://doi.org/10.3233/ATDE250048)
  - Author: Fanrui Meng, Xuhui Yang, **Ning Zhang**, Lei Liang, Jingbo Gao, Wenlai Ma, Jiang Zhou, Jiacong Yin, Fuxiang Dong, Chunyang Jiang
  - Conference: The 15th Asia Conference on Mechanical and Aerospace Engineering (ACMAE 2024)

- [Vision-Based Robotic Grasping Method for Nest Frame Based on Gen6D and AnyGrasp](https://doi.org/10.1109/ISCAIT64916.2025.11010279)
  - Author: Maoguo Li, Zhenyu Zhang, Xiaoyan Zhang, Shiyu Li, **Ning Zhang**, Shengxin Sun
  - Conference: 2025 4th International Symposium on Computer Applications and Information Technology (ISCAIT)

- [Prediction of shear strength of soil based on interpretable ensemble learning method with knowledge distillation](https://doi.org/10.1117/12.3067302)
  - Author: Maoguo Li, Shiyu Li, **Ning Zhang**, Shengxin Sun
  - Conference: 4th International Conference on Electronic Information Engineering and Data Processing (EIEDP 2025)

- [Electro-Thermo-Mechanical Design and Development of a Reusable Spring-Actuated Separation Mechanism for ORUs](https://doi.org/10.1109/ISAES66870.2025.11274285)
  - Author: Wenbo Bai, Xuhui Yang, **Ning Zhang**, Wenlai Ma, Peng Tian, Qiang Zhang, Xiaosong Zhang, Qiaodong Zhang
  - Conference: 2025 4th International Symposium on Aerospace Engineering and Systems (ISAES)

- [High-Fidelity Multibody and Steady-State CFD Co-Simulation of Spring-Driven Separation Dynamics for Plate-Type Orbital Replacement Units](https://doi.org/10.1109/ISAES66870.2025.11274346)
  - Author: Xuhui Yang, Wenbo Bai, **Ning Zhang**, Wenlai Ma, Haoyu Li, Peng Tian, Qiang Zhang, Ke Wang
  - Conference: 2025 4th International Symposium on Aerospace Engineering and Systems (ISAES)

- [Design of Transfer Trajectories between Earth-Moon L1 and L2 Libration Points in the Ephemeris Model](https://doi.org/10.1109/ICMTAE66890.2025.11427976)
  - Author: Wenhao Liu, **Ning Zhang**, Wenlai Ma, Weiguang Liang, Ao Chen, Yangkang Pu
  - Conference: 2025 5th International Conference on Mechatronics Technology and Aerospace Engineering (ICMTAE)

- [Structure design of electromagnetic-driven separation ejection mechanism for on-orbit units](https://doi.org/10.1088/1742-6596/3240/1/012005)
  - Author: Ziyi Xu, **Ning Zhang**, Wenbo Bai, Wenlai Ma, Yang Zhao
  - Conference: 2026 International Conference on Aerospace, Intelligent Perception and Control (AIPC 2026)

- [Learning Soil-Adaptive Robotic Excavation via Diffusion Policy](https://doi.org/10.1109/FASTA70174.2026.11549281)
  - Author: Zichun Ma, Jianqiao Zhang, Jianrong Li, **Ning Zhang**, Maoguo Li, Ziyi Xu, Shiyu Li, Shengxin Sun
  - Conference: 2026 5th Conference on Fully Actuated System Theory and Applications (FASTA)

- [Precision Trajectory Tracking Control for Space Manipulators in On-Orbit Assembly Considering Truss Flexibility and Dynamic Coupling](https://doi.org/10.1109/FASTA70174.2026.11548895)
  - Author: Maoguo Li, Xianglong Kong, Jianrong Li, **Ning Zhang**, Jianqiao Zhang, Zichun Ma, Shiyu Li, Ziyi Xu, Shengxin Sun
  - Conference: 2026 5th Conference on Fully Actuated System Theory and Applications (FASTA)

- [Precision Force Control for a Flexible-Base Space Manipulator in Asteroid Surface Excavation Under Unknown Contact Forces](https://doi.org/10.1109/FASTA70174.2026.11549438)
  - Author: Shiyu Li, Xianglong Kong, **Ning Zhang**, Jianqiao Zhang, Maoguo Li, Zichun Ma, Ziyi Xu, Shengxin Sun, Jianrong Li
  - Conference: 2026 5th Conference on Fully Actuated System Theory and Applications (FASTA)



# 👨‍🏫 Inventive patent

<style>
.patent-list {
  display: grid;
  gap: 0.75rem;
  margin: 1rem 0 2rem;
}

.patent-item {
  display: grid;
  grid-template-columns: 3.25rem 1fr;
  gap: 0.85rem;
  padding: 0.85rem 0 0.9rem;
  border-bottom: 1px solid #e8ebef;
}

.patent-no {
  color: #5b6570;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.8;
}

.patent-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.35rem;
}

.patent-rank,
.patent-status {
  display: inline-flex;
  align-items: center;
  min-height: 1.35rem;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.patent-rank {
  color: #334155;
  background: #f1f5f9;
}

.patent-status--granted {
  color: #0f5132;
  background: #dff3e8;
}

.patent-status--review {
  color: #7a4d00;
  background: #fff1cf;
}

.patent-status--filed {
  color: #284b80;
  background: #e4eefb;
}

.patent-title {
  color: #1f2933;
  font-weight: 650;
  line-height: 1.55;
}

.patent-authors {
  color: #58626f;
  font-size: 0.88rem;
  line-height: 1.55;
  margin-top: 0.2rem;
}

@media (min-width: 900px) {
  .patent-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1.35rem;
    row-gap: 0;
  }

  .patent-item {
    padding-right: 0.25rem;
  }
}

@media (max-width: 520px) {
  .patent-item {
    grid-template-columns: 2.55rem 1fr;
    gap: 0.6rem;
  }

  .patent-no {
    font-size: 0.76rem;
  }
}
</style>

<div class="patent-list">
  <article class="patent-item">
    <div class="patent-no">01</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">4th</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">一种基于飞行记录仪的太阳能发电系统</div>
      <div class="patent-authors">刘岩松, 龙岩, 李景奎, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">02</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">3rd</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">太阳翼二次展开重力卸载试验装置</div>
      <div class="patent-authors">沈迎咏, 高晶波, <strong>张宁</strong>, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">03</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">3rd</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">火星表面三维地形重构方法</div>
      <div class="patent-authors">马文来, 孟繁睿, <strong>张宁</strong>, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">04</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">3rd</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">火星表面小石块的目标检测方法</div>
      <div class="patent-authors">赵阳, 杨旭辉, <strong>张宁</strong>, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">05</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">1st</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">多功能一体化静刚度测试系统</div>
      <div class="patent-authors"><strong>张宁</strong>, 胡操, 马文来, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">06</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">2nd</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">基于宿主卫星与寄宿载荷分离、锁定的机械接口系统及方法</div>
      <div class="patent-authors">彭思淇, <strong>张宁</strong>, 王震南, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">07</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">3rd</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">监测宿主卫星与寄宿载荷分离、锁定姿态的试验装置</div>
      <div class="patent-authors">孟繁睿, 杨旭辉, <strong>张宁</strong>, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">08</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">7th</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">基于阿基米德螺旋线原理的可变刚度柔顺抓取装置</div>
      <div class="patent-authors">李茂国, 魏承, 李诗宇, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">09</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">7th</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">四足轮腿复合式机器人腿部折展伸缩变形机构</div>
      <div class="patent-authors">揭诗怡, 魏承, 周峻宇, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">10</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">3rd</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">防止百米级环柱天线振动的伸缩机构</div>
      <div class="patent-authors">李诗宇, 李茂国, <strong>张宁</strong>, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">11</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">2nd</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">一种高精度四体动力学模型下的航天器轨道设计方法</div>
      <div class="patent-authors">刘文豪, <strong>张宁</strong>, 李辰辉, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">12</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">一种用于月球车机械臂末端的模块化自动快拆接口</div>
      <div class="patent-authors">刘博屹, 魏承, 李茂国, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">13</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">基于转盘式升降台的双舱门月面智能工具箱</div>
      <div class="patent-authors">揭诗怡, 魏承, 李茂国, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">14</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">4th</span><span class="patent-status patent-status--granted">已授权</span></div>
      <div class="patent-title">基于机械臂快拆接口的小型通用智能化月面基建工程系统设计</div>
      <div class="patent-authors">李茂国, 魏承, 孙晟昕, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">15</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">3rd</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">多自由度电磁弹射分离与吸附一体化空间接口装置</div>
      <div class="patent-authors">白文博, 李茂国, <strong>张宁</strong>, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">16</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">4th</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">大惯量异形旋转载荷卫星动静不平衡多目标优化配平方法</div>
      <div class="patent-authors">魏承, 马文来, 曹喜滨, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">17</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">1st</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">在轨更换装置</div>
      <div class="patent-authors"><strong>张宁</strong>, 王培基, 杨旭辉, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">18</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">4th</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">面向地外天体安全采样的蒸馏集成学习土壤参数反演方法</div>
      <div class="patent-authors">孙晟昕, 李茂国, 刘慧金, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">19</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">基于近端策略优化算法的固定基座机械臂点对点轨迹优化方法</div>
      <div class="patent-authors">孙晟昕, 钟雨洁, 张剑桥, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">20</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">6th</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">基于组相对策略优化算法的空间机械臂轨迹优化方法</div>
      <div class="patent-authors">孙晟昕, 钟雨洁, 李建融, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">21</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">12th</span><span class="patent-status patent-status--review">实质审查</span></div>
      <div class="patent-title">小提琴演奏机器人自适应运弓控制方法</div>
      <div class="patent-authors">李建融, 魏承, 乔淑楠, 等</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">22</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--filed">已申请</span></div>
      <div class="patent-title">一种基于参数重组与可识别性约束的轮-土模型小样本分阶段贝叶斯反演方法</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">23</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">2nd</span><span class="patent-status patent-status--filed">已申请</span></div>
      <div class="patent-title">面向空间太阳能卫星的能量最优姿态控制方法</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">24</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--filed">已申请</span></div>
      <div class="patent-title">一种基于子模信息增益模型视角的手眼标定位姿阵列生成方法</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">25</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--filed">已申请</span></div>
      <div class="patent-title">含间隙铰链柔性多体系统的热—机耦合多尺度动力学求解方法</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">26</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">5th</span><span class="patent-status patent-status--filed">已申请</span></div>
      <div class="patent-title">含间隙铰链变构型航天器天线的热-力耦合动力学建模方法</div>
    </div>
  </article>

  <article class="patent-item">
    <div class="patent-no">27</div>
    <div>
      <div class="patent-meta"><span class="patent-rank">13th</span><span class="patent-status patent-status--filed">已申请</span></div>
      <div class="patent-title">一种建筑被动遮阳快速能耗舒适度联合评估方法</div>
    </div>
  </article>
</div>





# 🎓 Experiences
- *2023.09 - Now*, Ph.D., Harbin Institute of Technology, Aeronautical and Astronautical Science and Technology
- *2021.09 - 2023.06*, M.S., Harbin Institute of Technology, Aeronautical and Astronautical Science and Technology
- *2016.09 - 2020.06*, B.E., Shenyang Aerospace University, Aircraft Quality and Reliability
