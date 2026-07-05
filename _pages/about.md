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

📢📢 <span style="color:red;">Our group is seeking research assistants to work on multiple projects related to **Post-quantum Cryptography Chip** and **Encrypted mmWave Sensing**. Drop me an email if you are interested.

# 🔥 News
- *2025.04*: Our paper entitled "MHTrack: mmWave-based Mobile Hand Tracking" was accepted by IEEE TMC.
- *2025.04*: Our paper entitled "Multi-user Behavioral Privacy Filtering for mmWave Radar Sensing" was accepted by IEEE TMC.

# 📘 Selected Publications 
## 🏃‍♀️ mmWave Sensing
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IMWUT 2023</div><img src='images/pmtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Neural Network Predictive Control for Planetary Surface Exploration Robots Considering Dynamic Conformational Stability](https://doi.org/10.1115/1.4069048)

**Ning Zhang**, Maoguo Li, Hutao Cui, Wenlai Ma, Yang Zhao

- In this study, an online predictive control strategy based on the backpropagation neural network (BPNN) is proposed for planetary surface exploration robots with a high manipulator-to-platform mass ratio, with the objective of achieving dynamic stability control. First, a dynamic model of the planetary surface exploration robot is established, addressing the strong coupling effects between the manipulator and the mobile platform. Second, an online adaptive stability strategy based on BPNN is proposed. An adaptive sliding mode control method is applied to adjust the joint angles in real time, dynamically regulating the zero moment point (ZMP) to remain within the support polygon. Finally, simulation and experiment are conducted to validate the proposed method. The experimental results show that the system maintains minimal deviations at low speeds, with the X direction deviation ranging from 7 to 11 mm and the Y direction deviation within ±2 mm. At medium and high speeds, the system observes slight increases in ZMP deviations but effectively maintains dynamic balance. The experimental results closely align with the simulations, confirming the accuracy and reliability of the proposed method. Coordination control between the manipulator and the mobile platform significantly enhances stability and adaptability in rugged terrain, providing crucial technological support for future planetary exploration missions.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMC 2025</div><img src='images/mhtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MHTrack: mmWave-based Mobile Hand Tracking](https://ieeexplore.ieee.org/document/10962443)

Xiulong Liu (supervisor), **Hankai Liu\***, Yantao Han *et al.*

- First demonstration of mmWave-based hand trajectory tracking and hand-painted pattern recognition during user movement.

</div>
</div>

## 🛡️ Sensing Security
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMC 2025</div><img src='images/mufilter.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-user Behavioral Privacy Filtering for mmWave Radar Sensing](https://ieeexplore.ieee.org/document/10946842)

Xiulong Liu (supervisor), **Hankai Liu**, Jiaqi Zhang *et al.*

- Resolving cross-interference in signal perturbations to satisfy differentiated privacy protection preferences of multiple users.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE Commun. Mag. 2023</div><img src='images/mmfilter.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Application-Oriented Privacy Filter for mmWave Radar](https://ieeexplore.ieee.org/document/10268839)

**Hankai Liu**, Xiulong Liu, Xin Xie *et al.*

- Implementing the pioneering signal-matrix perturbation approach to achieve personalized behavioral privacy protection in mmWave sensing.

</div>
</div>

## 🤖 RF Mobile Localization
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IoTJ 2022</div><img src='images/resensing.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Toward Simultaneous Localization and Speed Measurement of Mobile Vehicles via RF-ELP](https://ieeexplore.ieee.org/document/9709594)

**Hankai Liu**, Yongtao Ma, Xiulong Liu *et al.*

- First RFID-based simultaneous vehicle localization and speed measurement system via novel phase sampling strategy.

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAP 2020</div><img src='images/moloc.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[The Influence of the Nonideal Phase Offset on SAR-Based Localization in Passive UHF RFID](https://ieeexplore.ieee.org/document/9052482)

Yongtao Ma (supervisor), **Hankai Liu**, Yunlei Zhang *et al.*

- Enabling RFID mobile localization with high accuracy and low computational latency through phase unwrapping and nonlinear optimization.

</div>
</div>

→ [Full List of Publications](https://www.researchgate.net/profile/Hankai-Liu/research)

# 📋 Services
- *2025.11*, TPC Member, TrustCom 2025
- *2023.10*, Workshop Chair, ICA3PP 2023

# 🎤 Invited Talks
- *2024.10*, PmTrack: Enabling Personalized mmWave-based Human Tracking, UbiComp 2024
- *2024.08*, mmWave Radar-based Multi-person Tracking and Identification, HHME 2024

# 👨‍🏫 Inventive patent
- 1. [4th], *已授权*, 一种基于飞行记录仪的太阳能发电系统. 刘岩松, 龙岩, 李景奎, 等

- 2. [3rd], *已授权*, 太阳翼二次展开重力卸载试验装置. 沈迎咏, 高晶波, **张宁**, 等

- 3. [3rd], *实质审查*, 火星表面三维地形重构方法. 马文来, 孟繁睿, **张宁**, 等

- 4. [3rd], *实质审查*, 火星表面小石块的目标检测方法. 赵阳, 杨旭辉, **张宁**, 等

- 5. [1st], *实质审查*, 多功能一体化静刚度测试系统. **张宁**, 胡操, 马文来, 等

- 6. [2nd], *已授权*, 基于宿主卫星与寄宿载荷分离、锁定的机械接口系统及方法. 彭思淇, **张宁**, 王震南, 等

- 7. [3rd], *已授权*, 监测宿主卫星与寄宿载荷分离、锁定姿态的试验装置. 孟繁睿, 杨旭辉, **张宁**, 等

- 8. [7th], *已授权*, 基于阿基米德螺旋线原理的可变刚度柔顺抓取装置. 李茂国, 魏承, 李诗宇, 等

- 9. [7th], *已授权*, 四足轮腿复合式机器人腿部折展伸缩变形机构. 揭诗怡, 魏承, 周峻宇, 等

- 10. [3rd], *已授权*, 防止百米级环柱天线振动的伸缩机构. 李诗宇, 李茂国, **张宁**, 等

- 11. [2nd], *已授权*, 一种高精度四体动力学模型下的航天器轨道设计方法. 刘文豪, **张宁**, 李辰辉, 等

- 12. [5th], *已授权*, 一种用于月球车机械臂末端的模块化自动快拆接口. 刘博屹, 魏承, 李茂国, 等

- 13. [5th], *实质审查*, 基于转盘式升降台的双舱门月面智能工具箱. 揭诗怡, 魏承, 李茂国, 等

- 14. [4th], *已授权*, 基于机械臂快拆接口的小型通用智能化月面基建工程系统设计. 李茂国, 魏承, 孙晟昕, 等

- 15. [3rd], *实质审查*, 多自由度电磁弹射分离与吸附一体化空间接口装置. 白文博, 李茂国, **张宁**, 等

- 16. [4th], *实质审查*, 大惯量异形旋转载荷卫星动静不平衡多目标优化配平方法. 魏承, 马文来, 曹喜滨, 等

- 17. [1st], *实质审查*, 在轨更换装置. **张宁**, 王培基, 杨旭辉, 等

- 18. [4th], *实质审查*, 面向地外天体安全采样的蒸馏集成学习土壤参数反演方法. 孙晟昕, 李茂国, 刘慧金, 等

- 19. [5th], *实质审查*, 基于近端策略优化算法的固定基座机械臂点对点轨迹优化方法. 孙晟昕, 钟雨洁, 张剑桥, 等

- 20. [6th], *实质审查*, 基于组相对策略优化算法的空间机械臂轨迹优化方法. 孙晟昕, 钟雨洁, 李建融, 等

- 21. [12th], *实质审查*, 小提琴演奏机器人自适应运弓控制方法. 李建融, 魏承, 乔淑楠, 等

- 22. [5th], *已申请*, 一种基于参数重组与可识别性约束的轮-土模型小样本分阶段贝叶斯反演方法.

- 23. [2nd], *已申请*, 面向空间太阳能卫星的能量最优姿态控制方法.

- 24. [5th], *已申请*, 一种基于子模信息增益模型视角的手眼标定位姿阵列生成方法.

- 25. [5th], *已申请*, 含间隙铰链柔性多体系统的热—机耦合多尺度动力学求解方法.

- 26. [5th], *已申请*, 含间隙铰链变构型航天器天线的热-力耦合动力学建模方法.

- 27. [13th], *已申请*, 一种建筑被动遮阳快速能耗舒适度联合评估方法.





# 🎓 Experiences
- *2023.09 - Now*, Ph.D., Harbin Institute of Technology, Aeronautical and Astronautical Science and Technology
- *2021.09 - 2023.06*, M.S., Harbin Institute of Technology, Aeronautical and Astronautical Science and Technology
- *2016.09 - 2020.06*, B.E., Shenyang Aerospace University, Aircraft Quality and Reliability
