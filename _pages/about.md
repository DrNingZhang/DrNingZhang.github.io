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
I am **a Ph.D. candidate** in the **School of Astronautics** at **Harbin Institute of Technology**, majoring in **Aerospace Science and Technology**. My supervisor is Professor Cui Hutao. I am a member of the Flight Vehicle Dynamics Design and Simulation Team. The team has been active in the aerospace field for over 20 years. We focus on fundamental theory and applied research related to key mechanical problems in major space engineering projects. We have achieved a series of academic results in spacecraft mechanism design, structural mechanics analysis, and optimization. Our technologies have provided strong support for many national missions, including the Chang'e‑5 lunar soil sampling, the space station robotic arm, high‑resolution remote sensing satellites, and the Tianwen‑1 Mars probe.

My current research focuses on **dynamics and control of robots**, **specifically locomotion planning and control for extraterrestrial robots**. As an active team member, I have mentored and assisted several master’s and doctoral students in their research work. I have helped them publish multiple SCI papers, conference papers, and patents. The students I have guided have received many honors, including special scholarships, national scholarships, and awards from various competitions. I have also undertaken several research projects for organizations such as **the Beijing Institute of Spacecraft System Engineering** and **the Beijing Institute of Control Engineering**. In addition, I serve as a reviewer for several international journals, including the Journal of Mechanisms and Robotics (JMR) and the Journal of Mechanical Design (JMD).


<span class='anchor' id='journal-paper'></span>

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

.journal-abstract {
  margin-top: 0.85rem;
  outline: none;
}

.journal-abstract-line {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: #7a8288;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.2;
  cursor: default;
}

.journal-abstract-line::before,
.journal-abstract-line::after {
  content: "";
  flex: 1;
  border-top: 1px solid #d9e0e8;
}

.journal-abstract-line span {
  display: inline-flex;
  align-items: center;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  background: #f8fafc;
}

.journal-abstract-body {
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.24s ease, opacity 0.18s ease, margin-top 0.18s ease;
}

.journal-abstract-body p {
  margin: 0;
  padding: 0.7rem 0.85rem;
  border-left: 3px solid #d7e4f5;
  border-radius: 6px;
  color: #4b5563;
  background: #f8fafc;
  font-size: 0.86rem;
  line-height: 1.65;
  text-align: justify;
}

.journal-abstract:hover .journal-abstract-body,
.journal-abstract:focus-within .journal-abstract-body,
.journal-abstract:focus .journal-abstract-body {
  max-height: 60rem;
  margin-top: 0.55rem;
  opacity: 1;
}

.journal-abstract:hover .journal-abstract-line,
.journal-abstract:focus-within .journal-abstract-line,
.journal-abstract:focus .journal-abstract-line {
  color: #174a8b;
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
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>In this study, an online predictive control strategy based on the backpropagation neural network (BPNN) is proposed for planetary surface exploration robots with a high manipulator-to-platform mass ratio, with the objective of achieving dynamic stability control. First, a dynamic model of the planetary surface exploration robot is established, addressing the strong coupling effects between the manipulator and the mobile platform. Second, an online adaptive stability strategy based on BPNN is proposed. An adaptive sliding mode control method is applied to adjust the joint angles in real time, dynamically regulating the zero moment point (ZMP) to remain within the support polygon. Finally, simulation and experiment are conducted to validate the proposed method. The experimental results show that the system maintains minimal deviations at low speeds, with the X direction deviation ranging from 7 to 11 mm and the Y direction deviation within ±2 mm. At medium and high speeds, the system observes slight increases in ZMP deviations but effectively maintains dynamic balance. The experimental results closely align with the simulations, confirming the accuracy and reliability of the proposed method. Coordination control between the manipulator and the mobile platform significantly enhances stability and adaptability in rugged terrain, providing crucial technological support for future planetary exploration missions.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper2.png" alt="Flexible Multi-Constraint Gripper for Nest Frames"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1115/1.4069074">Design, Analysis, and Experimental Research of Flexible Multi-Constraint Gripper for Nest Frames</a></h3>
      <div class="journal-authors">Maoguo Li, <strong>Ning Zhang</strong>, Yan Xing, Boyi Liu, Wenyuan Su, Shiyu Li, Shenxin Sun</div>
      <div class="journal-venue">Journal of Mechanical Design <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>The grasping and shaking of the nest frames constitute a critical step in automated beekeeping operations. However, the unique structure of the nest frames imposes stringent requirements on the gripper design. In this study, first, a flexible multi-constraint gripper optimized for the nest frame grasping is proposed, including fixation mechanism, driving mechanism, and limiting mechanism. Next, kinematic and dynamic models are established, and a back propagation neural network is applied to optimize key component parameters. Finally, a virtual prototype and an experimental prototype are developed to evaluate the gripper performance through simulations and experiments. Experimental results demonstrate that the gripper achieves stable grasping of the nest frames of three different sizes. In the shaking tests, average amplitudes of 87.331 mm, 88.020 mm, and 89.721 mm are observed for 42 cm, 46 cm, and 49 cm frames, respectively, all exceeding 80 mm amplitude of the end effector of manipulator. This design is expected to advance automated beekeeping and provide new perspectives for the design and optimization of flexible end effectors in agricultural robotics.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper3.png" alt="Satellite Antenna Pointing Uncertainty Quantification"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/aerospace12080720">Efficient Uncertainty Quantification for Satellite Antenna Pointing: A GSA-PEM Framework Integrating Multi-Source Disturbances</a></h3>
      <div class="journal-authors">Shiyu Tan, <strong>Ning Zhang</strong>, Yingyong Shen, Cong Wang, Jingbo Gao</div>
      <div class="journal-venue">Aerospace <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>Space-borne antenna pointing is affected by uncertain disturbances like satellite attitude, structural flexibility, and manufacturing/installation errors. Understanding the effect of these uncertainties is crucial for antenna performance. The main contribution of this paper is the proposal of an uncertainty quantification (UQ) framework for antenna pointing performance that integrates the Global Sensitivity Analysis (GSA) method and Point Estimate Method (PEM), named the GSA-PEM Integrated Framework (GSA-PEM in short). This framework enables systematic analysis of how uncertain parameters (satellite attitude, manufacturing/installation errors, joint rotation, structural deformation, feed displacement, etc.) impact antenna pointing. It establishes a pointing model via coordinate transformation, utilizes the total-effect of the Sobol method to prioritize the key parameters for reliability analysis, and computes pointing performance statistics characteristic via PEM to evaluate pointing reliability. Two case studies are presented to validate the accuracy and efficiency of the proposed framework. Monte Carlo Simulation (MCS) and the Maximum Entropy method using the Fractional-order Moments (ME-FMs) are comparison methods. Results demonstrate that the proposed framework achieves a trade-off between accuracy and efficiency in assessing antenna pointing performance under parameter uncertainty.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper4.png" alt="Low-Thrust Transfer Orbit Guidance"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/app16094171">Adaptive Multiresolution Collocation-Based Sequential Convex Programming for Fuel-Optimal Low-Thrust Transfer Orbit Guidance</a></h3>
      <div class="journal-authors">Changzheng Qian, <strong>Ning Zhang</strong>, Hutao Cui, Shengxin Sun, Wenlai Ma, Jianqiao Zhang</div>
      <div class="journal-venue">Applied Sciences <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>The minimum fuel transfer problem in low-thrust trajectory optimization remains a major challenge and is typically addressed using bang-bang control. A novel methodology integrating Adaptive Multiresolution Collocation (AMRC) and Sequential Convex Programming (SCP) to solve the minimum-fuel low-thrust trajectory optimization problem is proposed. First, the approach employs the cubic spline wavelet-like transform for mesh refinement, where wavelet coefficients serve as error indicators to dynamically concentrate nodes in regions of rapid state variation. Then, the nonlinear programming problem is convexified via control variable relaxation and small-perturbation linearization, reformulated as a second-order cone programming (SOCP) problem, and efficiently solved using convex optimization tools. Subsequently, progressive selection of the location points ensures rapid and accurate convergence to the optimal trajectory. Finally, numerical simulations of Earth-Mars and Earth-Venus transfer validate the effectiveness and accuracy of the AMRC-based method. Compared with conventional approaches, the proposed method achieves comparable optimality while markedly improving computational efficiency, precisely localizing switching times, and improving numerical precision, requiring only 29.7% of the nodes and 14.7% of the computation time of uniform-grid convex optimization, achieving fuel-optimal deviations within 0.07% of the indirect method and demonstrating accuracy improvements of 2-3 orders of magnitude over GPOPS.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper5.png" alt="Multi-Phase Indirect Shooting"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/aerospace13050429">A Bidirectional Initialization Framework for Multi-Phase Indirect Shooting in Time-Optimal Low-Thrust GTO-to-DRO Transfers</a></h3>
      <div class="journal-authors">Changzheng Qian, <strong>Ning Zhang</strong>, Hutao Cui, Shengxin Sun, Wenlai Ma</div>
      <div class="journal-venue">Aerospace <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>The distant retrograde orbit (DRO) serves as a strategic staging point for future cislunar missions, and geostationary transfer orbit (GTO) provides a practical departure option for rideshare low-thrust cargo missions. However, time-optimal low-thrust GTO-to-DRO transfers remain computationally demanding. Indirect methods are highly sensitive to boundary conditions and prone to divergence, whereas direct methods face dimensionality issues as the number of variables scales with trajectory duration and revolutions. To address this issue, this paper proposes a bidirectional initialization framework for multi-phase indirect shooting. A forward auxiliary solution is constructed for the GTO-raising phase in planar modified equinoctial elements, while a backward auxiliary solution is generated for the DRO-insertion phase in the planar Earth-Moon circular restricted three-body problem. The two subproblems are connected through an intermediate interface and coordinated by an outer-level stationarity iteration, after which lunar phase continuity and lunar perturbations are reintroduced into a fully coupled indirect shooting problem. The numerical results show that the proposed strategy provides a reliable initial guess for the complete optimization and enables robust convergence to a continuous time-optimal GTO-to-DRO transfer. The method improves the tractability of long-duration multi-phase indirect trajectory optimization for low-thrust cislunar mission design.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper6.png" alt="Thermo-Mechanical Coupled Dynamics"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/app16115461">An Adaptive Dissipation–Precision Coordinated Multi-Scale Implicit Integration Algorithm for Thermo-Mechanical Coupled Dynamics of Flexible Multibody Systems with Temperature-Dependent Clearance Joints</a></h3>
      <div class="journal-authors">Yuntao Hua, <strong>Ning Zhang</strong>, Changzheng Qian, Shengxin Sun, Hutao Cui, Wenlai Ma</div>
      <div class="journal-venue">Applied Sciences <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>Extreme orbital thermal cycling and temperature-dependent clearance nonlinearity make it difficult to predict contact-impact, stick-slip, and bifurcation responses of flexible deployable space structures with sufficient stability, accuracy, and computational efficiency. An Adaptive Dissipation-Precision Coordinated Multi-Scale Implicit Integration Algorithm (ADPC-MSIIA) is proposed. First, an absolute nodal coordinate formulation (ANCF)-based thermo-mechanical clearance-joint model with thermal-viscosity-modified contact and frictional/impact heat feedback is established; second, a dual-time-scale implicit integration scheme with dual-alpha stability-dissipation control and third-order compensation is developed; finally, numerical validation is performed using a linear single-degree-of-freedom (SDOF) benchmark, a temperature-dependent clearance impact oscillator, finite-element and published benchmark comparisons, and a deployable annular truss antenna case. Simulation results show that ADPC-MSIIA achieves a high-frequency spectral radius of 0.867, an effective convergence order of 2.98, a maximum contact force error of 3.1%, and a 51.7% reduction in the global cumulative error compared with the generalized-alpha method. This study contributes to knowledge by linking temperature-driven clearance evolution, frictional heat feedback, and adaptive numerical dissipation within a unified framework for predicting non-smooth thermo-mechanical deployment dynamics of large flexible space structures with clearance joints.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper7.png" alt="Variable-Geometry Spacecraft Antenna"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.3390/aerospace13060529">Dynamic Modeling and Thermo-Mechanical Coupling Analysis of Variable-Geometry Spacecraft Antenna with Clearance Hinges Under Extreme Thermal Environment</a></h3>
      <div class="journal-authors">Yuntao Hua, <strong>Ning Zhang</strong>, Yingyong Shen, Shengxin Sun, Hutao Cui, Wenlai Ma</div>
      <div class="journal-venue">Aerospace <span class="journal-tag journal-tag--q2">JCR Q2</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>Extreme cyclic temperature fluctuations (-200 °C to 200 °C) and inherent clearance nonlinearity in deployment hinges severely threaten the on-orbit deployment accuracy and dynamic stability of large variable-geometry spacecraft antennas for geosynchronous Earth orbit applications. However, current modeling approaches suffer from three critical limitations: single-configuration models requiring manual switching, inherent geometric nonlinear errors from conventional floating frame formulations, and incomplete thermo-mechanical coupling neglecting the temperature effects on contact stiffness and friction. To address these gaps, we propose a unified high-fidelity dynamic model based on the Absolute Nodal Coordinate Formulation (ANCF). This model eliminates geometric errors and mesh mismatch, enables seamless multi-configuration deployment without switching, and fully incorporates temperature-dependent material properties and nonlinear contact forces. An improved Hilber-Hughes-Taylor-alpha implicit integration algorithm with second-order accuracy and unconditional stability is adopted to solve the strongly nonlinear differential-algebraic equations. Numerical results demonstrate that the proposed model achieves a calculation error below 3% against experimental data, significantly outperforming the traditional floating frame of reference formulation with an error of 15-22%. Non-uniform temperature fields increase thermally induced vibration amplitudes by 32-45%, and every 0.1 increase in the friction coefficient raises the impact force at the clearance hinge by 15-20%. The proposed unified modeling framework provides a solid theoretical basis for deployment stability prediction and the on-orbit control optimization of large variable-geometry spacecraft antennas.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper8.png" alt="Dandelion Seed Takeoff"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1016/j.cja.2026.104341">Separated vortex ring evolution governs progressive stabilization of takeoff dandelion seeds</a></h3>
      <div class="journal-authors">Jinming Yao, Yang Zhao, Huibo Zhang, Jianan Xu, Chao Tang, <strong>Ning Zhang</strong></div>
      <div class="journal-venue">Chinese Journal of Aeronautics <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>The unique pappus structure of dandelion seeds induces a leeward separated vortex ring, significantly enhancing aerodynamic performance for long-distance flight. However, the vortex evolution dynamics and their impact on stability during transient takeoff remain unclear. Fluid-structure interaction simulations were conducted to investigate the pappus takeoff at wind speeds of 0.5-3 m/s. Results demonstrate that the active motion of the pappus fundamentally alters the wake topology compared to fixed models, promoting a stable, radially expanding separated vortex ring. Mechanism analysis reveals stability arises from a dynamic relay initiating with unsteady inertial forces, significantly augmented by added mass effect, and rapidly evolving into wall-induced stretching or viscous dissipation. Whether governed by the coupling of inertial stretching and added mass at high Reynolds numbers or viscous diffusion at low Reynolds numbers, these mechanisms consistently drive a generalized radial expansion of the wake. This expansion smooths transverse velocity gradients and maintains the steady evolution of the leeward low-pressure zone, ensuring progressive stabilization. Based on these findings, a transient stability criterion centered on an equivalent characteristic velocity is established, quantitatively identifying the critical transition from the unstable to the stable regime. This study offers mechanistic insights for the bio-inspired stable design of passive micro-aircraft and underwater vehicles.</p>
        </div>
      </div>
    </div>
  </article>

  <article class="journal-item">
    <div class="journal-thumb"><img src="images/Journal%20paper/Journal%20paper9.png" alt="Martian Quadrotor UAVs"></div>
    <div>
      <h3 class="journal-title"><a href="https://doi.org/10.1016/j.actaastro.2025.11.038">Enhancing the dynamic response of Martian quadrotor UAVs: Planetary gearbox integration, system modeling, and triple-loop cascade control</a></h3>
      <div class="journal-authors">Hongming Li, Yang Zhao, Wenlai Ma, Shengyu Lin, <strong>Ning Zhang</strong></div>
      <div class="journal-venue">Acta Astronautica <span class="journal-tag journal-tag--q1">JCR Q1</span></div>
      <div class="journal-abstract" tabindex="0">
        <div class="journal-abstract-line"><span>Abstract</span></div>
        <div class="journal-abstract-body">
          <p>This study addresses the fundamental torque-inertia mismatch problem unique to Martian multi-rotor UAVs, where Mars's extremely low atmospheric density (0.02 kg/m3) necessitates large-diameter rotors while weight constraints prevent proportional motor scaling. A comprehensive solution integrating planetary gearbox systems, detailed system modeling, and triple-loop cascade control strategies was developed to enhance propulsion system dynamic response. Results demonstrate that the Earth-based system achieves a regulation time of 0.034 s, while the Mars-based system without deceleration requires 2.792 s, approximately two orders of magnitude slower. Particle swarm optimization identified an optimal gear ratio of 3.8667, providing an effective compromise between fast response, acceptable system mass, and reasonable power consumption. The proposed triple-loop cascade control strategy consistently outperformed alternative configurations, maintaining stable trajectory tracking at velocities up to 2.0 m/s in forward flight and 1.96 m/s in circular motion, while systems without adequate control mechanisms experienced complete operational failure at these velocities.</p>
        </div>
      </div>
    </div>
  </article>
</div>







<span class='anchor' id='conference-paper'></span>

# 📃 Conference paper

<style>
.conference-list {
  display: grid;
  gap: 1.05rem;
  margin: 1rem 0 2rem;
}

.conference-item {
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr);
  gap: 1.35rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e8ebef;
}

.conference-thumb {
  width: 170px;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #f8fafc;
}

.conference-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.conference-title {
  margin: 0 0 0.45rem;
  color: #174a8b;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.45;
}

.conference-title a {
  color: inherit;
  text-decoration: none;
}

.conference-title a:hover {
  color: #00369f;
  text-decoration: underline;
}

.conference-authors,
.conference-venue {
  color: #58626f;
  font-size: 0.9rem;
  line-height: 1.55;
}

.conference-authors {
  margin-bottom: 0.3rem;
}

.conference-tag {
  display: inline-flex;
  align-items: center;
  min-height: 1.35rem;
  margin-left: 0.35rem;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  color: #4c3f82;
  background: #ece8fb;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

@media (max-width: 700px) {
  .conference-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .conference-thumb {
    width: 100%;
    max-width: 320px;
  }
}
</style>

<div class="conference-list">
  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper1.png" alt="Bidirectional solar array deployment strategies"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1088/1742-6596/2746/1/012037">Effects of different deployment strategies on the dynamic characteristics of bidirectional solar array</a></h3>
      <div class="conference-authors">Yingyong Shen, Cong Wang, Shiyu Tan, <strong>Ning Zhang</strong>, Jingbo Gao</div>
      <div class="conference-venue">The 14th Asia Conference on Mechanical and Aerospace Engineering <span class="conference-tag">ACMAE 2023</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper2.png" alt="Large hoop-column deployable antenna stiffness testing"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.3233/ATDE250048">Static Stiffness Testing and Validation of a Large Hoop-Column Deployable Antenna Based on Similarity Theory</a></h3>
      <div class="conference-authors">Fanrui Meng, Xuhui Yang, <strong>Ning Zhang</strong>, Lei Liang, Jingbo Gao, Wenlai Ma, Jiang Zhou, Jiacong Yin, Fuxiang Dong, Chunyang Jiang</div>
      <div class="conference-venue">The 15th Asia Conference on Mechanical and Aerospace Engineering <span class="conference-tag">ACMAE 2024</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper3.png" alt="Vision-based robotic grasping for nest frames"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/ISCAIT64916.2025.11010279">Vision-Based Robotic Grasping Method for Nest Frame Based on Gen6D and AnyGrasp</a></h3>
      <div class="conference-authors">Maoguo Li, Zhenyu Zhang, Xiaoyan Zhang, Shiyu Li, <strong>Ning Zhang</strong>, Shengxin Sun</div>
      <div class="conference-venue">4th International Symposium on Computer Applications and Information Technology <span class="conference-tag">ISCAIT 2025</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper4.png" alt="Interpretable ensemble learning for soil shear strength prediction"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1117/12.3067302">Prediction of shear strength of soil based on interpretable ensemble learning method with knowledge distillation</a></h3>
      <div class="conference-authors">Maoguo Li, Shiyu Li, <strong>Ning Zhang</strong>, Shengxin Sun</div>
      <div class="conference-venue">4th International Conference on Electronic Information Engineering and Data Processing <span class="conference-tag">EIEDP 2025</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper5.png" alt="Spring-actuated separation mechanism for ORUs"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/ISAES66870.2025.11274285">Electro-Thermo-Mechanical Design and Development of a Reusable Spring-Actuated Separation Mechanism for ORUs</a></h3>
      <div class="conference-authors">Wenbo Bai, Xuhui Yang, <strong>Ning Zhang</strong>, Wenlai Ma, Peng Tian, Qiang Zhang, Xiaosong Zhang, Qiaodong Zhang</div>
      <div class="conference-venue">4th International Symposium on Aerospace Engineering and Systems <span class="conference-tag">ISAES 2025</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper6.png" alt="Spring-driven separation dynamics co-simulation"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/ISAES66870.2025.11274346">High-Fidelity Multibody and Steady-State CFD Co-Simulation of Spring-Driven Separation Dynamics for Plate-Type Orbital Replacement Units</a></h3>
      <div class="conference-authors">Xuhui Yang, Wenbo Bai, <strong>Ning Zhang</strong>, Wenlai Ma, Haoyu Li, Peng Tian, Qiang Zhang, Ke Wang</div>
      <div class="conference-venue">4th International Symposium on Aerospace Engineering and Systems <span class="conference-tag">ISAES 2025</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper7.png" alt="Earth-Moon libration point transfer trajectories"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/ICMTAE66890.2025.11427976">Design of Transfer Trajectories between Earth-Moon L1 and L2 Libration Points in the Ephemeris Model</a></h3>
      <div class="conference-authors">Wenhao Liu, <strong>Ning Zhang</strong>, Wenlai Ma, Weiguang Liang, Ao Chen, Yangkang Pu</div>
      <div class="conference-venue">5th International Conference on Mechatronics Technology and Aerospace Engineering <span class="conference-tag">ICMTAE 2025</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper8.png" alt="Electromagnetic-driven separation ejection mechanism"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1088/1742-6596/3240/1/012005">Structure design of electromagnetic-driven separation ejection mechanism for on-orbit units</a></h3>
      <div class="conference-authors">Ziyi Xu, <strong>Ning Zhang</strong>, Wenbo Bai, Wenlai Ma, Yang Zhao</div>
      <div class="conference-venue">International Conference on Aerospace, Intelligent Perception and Control <span class="conference-tag">AIPC 2026</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper9.png" alt="Diffusion policy for soil-adaptive robotic excavation"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/FASTA70174.2026.11549281">Learning Soil-Adaptive Robotic Excavation via Diffusion Policy</a></h3>
      <div class="conference-authors">Zichun Ma, Jianqiao Zhang, Jianrong Li, <strong>Ning Zhang</strong>, Maoguo Li, Ziyi Xu, Shiyu Li, Shengxin Sun</div>
      <div class="conference-venue">5th Conference on Fully Actuated System Theory and Applications <span class="conference-tag">FASTA 2026</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper10.png" alt="Space manipulator trajectory tracking with truss flexibility"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/FASTA70174.2026.11548895">Precision Trajectory Tracking Control for Space Manipulators in On-Orbit Assembly Considering Truss Flexibility and Dynamic Coupling</a></h3>
      <div class="conference-authors">Maoguo Li, Xianglong Kong, Jianrong Li, <strong>Ning Zhang</strong>, Jianqiao Zhang, Zichun Ma, Shiyu Li, Ziyi Xu, Shengxin Sun</div>
      <div class="conference-venue">5th Conference on Fully Actuated System Theory and Applications <span class="conference-tag">FASTA 2026</span></div>
    </div>
  </article>

  <article class="conference-item">
    <div class="conference-thumb"><img src="images/Conference%20paper/Conference%20paper11.png" alt="Flexible-base space manipulator force control"></div>
    <div>
      <h3 class="conference-title"><a href="https://doi.org/10.1109/FASTA70174.2026.11549438">Precision Force Control for a Flexible-Base Space Manipulator in Asteroid Surface Excavation Under Unknown Contact Forces</a></h3>
      <div class="conference-authors">Shiyu Li, Xianglong Kong, <strong>Ning Zhang</strong>, Jianqiao Zhang, Maoguo Li, Zichun Ma, Ziyi Xu, Shengxin Sun, Jianrong Li</div>
      <div class="conference-venue">5th Conference on Fully Actuated System Theory and Applications <span class="conference-tag">FASTA 2026</span></div>
    </div>
  </article>
</div>



<span class='anchor' id='inventive-patent'></span>

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





<span class='anchor' id='experiences'></span>

# 🎓 Experiences

<style>
.experience-list {
  position: relative;
  display: grid;
  gap: 0.95rem;
  margin: 1rem 0 2rem;
}

.experience-item {
  display: grid;
  grid-template-columns: 8.5rem minmax(0, 1fr);
  gap: 1.15rem;
  align-items: start;
  padding: 1rem 0;
  border-bottom: 1px solid #e8ebef;
}

.experience-period {
  color: #334155;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.45;
}

.experience-period span {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem 0.5rem;
  border-radius: 4px;
  background: #f1f5f9;
}

.experience-degree {
  color: #174a8b;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 0.25rem;
}

.experience-school {
  color: #1f2933;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.5;
}

.experience-field {
  color: #58626f;
  font-size: 0.9rem;
  line-height: 1.55;
  margin-top: 0.15rem;
}

@media (max-width: 700px) {
  .experience-item {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }
}
</style>

<div class="experience-list">
  <article class="experience-item">
    <div class="experience-period"><span>2023.09 - Now</span></div>
    <div>
      <div class="experience-degree">Ph.D.</div>
      <div class="experience-school">Harbin Institute of Technology</div>
      <div class="experience-field">Aeronautical and Astronautical Science and Technology</div>
    </div>
  </article>

  <article class="experience-item">
    <div class="experience-period"><span>2021.09 - 2023.06</span></div>
    <div>
      <div class="experience-degree">M.S.</div>
      <div class="experience-school">Harbin Institute of Technology</div>
      <div class="experience-field">Aeronautical and Astronautical Science and Technology</div>
    </div>
  </article>

  <article class="experience-item">
    <div class="experience-period"><span>2016.09 - 2020.06</span></div>
    <div>
      <div class="experience-degree">B.E.</div>
      <div class="experience-school">Shenyang Aerospace University</div>
      <div class="experience-field">Aircraft Quality and Reliability</div>
    </div>
  </article>
</div>
