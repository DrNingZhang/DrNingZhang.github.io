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
- *已授权*, 一种基于飞行记录仪的太阳能发电系统

# 🏆 Honors and Awards
- *2025.05* Huawei Scholarship
- *2024.07* Graduated from the 1st National Training for College Cybersecurity Teachers
- *2023.12* Best Paper Award of IEEE Cybermatics Congress 2023
- *2021.01* Outstanding Graduates of Tianjin University
- *2020.08* OnMicro Scholarship

# 🎓 Experiences
- *2025.07 - Now*, Lecturer, College of Cryptology and Cyber Science, Nankai University
- *2021.09 - 2025.06*, Ph.D., Tianjin University, Computer Science and Technology
- *2018.09 - 2021.01*, M.S., Tianjin University, Electronic and Communication Engineering
- *2014.09 - 2018.06*, B.E., Tianjin University, Internet of Things Engineering
