
---
title: "*Urban Grids Design:* Simulation of a 9 Bus Meshed Network in Urban System"
excerpt: "In recent years, power system planning has gained increasing significance, especially due to the increasing variety of loads and the integration of renewable energy sources, which pose challenges in load forecasting. As the availability of electricity infrastructure grows, the rising number of buses adds complexity to power flow computation and power system planning. Mastering the utilisation of the prevailing simulation software for power flow computation and fault investigation is a comprehensive solution to address this pressing issue. This report primarily focuses on simulating a 9-bus system. Power flow computation and fault simulation are conducted using Powerworld. Subsequently, selection and protection strategies are given."
collection: portfolio
---


## Project Introduction
In recent years, power system planning has gained increasing significance, especially due to the increasing variety of loads and the integration of renewable energy sources, which pose challenges in load forecasting. As the availability of electricity infrastructure grows, the rising number of buses adds complexity to power flow computation and power system planning. Mastering the utilisation of the prevailing simulation software for power flow computation and fault investigation is a comprehensive solution to address this pressing issue. This report primarily focuses on simulating a 9-bus system. Power flow computation and fault simulation are conducted using Powerworld. Subsequently, selection and protection strategies are given. 
In the first part of the report. Different network designs are discussed, and based on the redundancy level and the regulatory of the National Frid and other Distribution Network Operator (DNOs) and Electricity Safety, Quality and Continuity Regulations (ESQCR), a discussion and recommendation of the N-1 level redundancy mesh network used in the analysis will be made. 
The second and third parts of the report use Powerworld to simulate network load flow and fault analysis to verify robustness. The simulation results reveal that a mesh network is selected and power flow calculated to maximize economic gain and a more stable N-1 redundancy system. This study explores the double bus single breaker and breaker and a half structure in real-life substations to protect power production facilities and buses. To accommodate the N-1 system's expected failure, a bus has at least two cables or transformers with a cable load below 50%. Complex systems can cause cost and design concerns, according to the report. Power flow calculations show that the XLPE OHL cable can handle system faults at 25°C. Fault analysis of 132 and 33kV buses is performed in the third stage, and upstream and downstream fault currents are used to determine coordinated protective strategies. Relay circuit breakers are suited for diverse use cases. Protection devices capture upstream and downstream fault currents and directional protection isolates fault lines. The TCC curve result shows logical coordination between protective devices, which can be done in time according to rules. Thus, component sizing, power flow simulations, and fault assessments make the network reliable under normal and continency situations.  
Part 4 concludes with some challenge and lesson learned in network design. Given these challenges, future network design and simulation operations may require better load prediction and protection. 

## Designed Power Network (N-1)
In the design of the report, the network design of N-1 redundancy of mesh network is adopted. In the high voltage section (132kV), a breaker and a half layout is used. A double bus single breaker is adopted for 33kV, and a single bus structure is adopted for 11kV. In the selection of components, according to different local requirements. For example, Singapore may adopt underground cable design, which is more suitable for the design of urban microgrid. However, in this report, the construction environment is mainly set in the UK. According to the requirements of IEC regulations, OHL XLPE cables are utilized as the main cable type choice [4]. In addition to the network structure and complex substation bus layout considerations in the system. Protection in the system also provides some protective devices as shown in the figure.
![图片](https://github.com/user-attachments/assets/f0c25028-d867-421c-af6c-a0d3fd3fd67f)

## Overall Simulation
![图片](https://github.com/user-attachments/assets/821d03d9-ab72-4677-bed5-942ad96af86c)

## Component Sizing
1. Cable Sizing

![图片](https://github.com/user-attachments/assets/4be362db-a675-42d8-b958-94002c5b76c0)

2. Transformer Sizing

![图片](https://github.com/user-attachments/assets/8e63a375-d749-4997-bed4-ccfd17674a0c)

## Contingency Simulation
![图片](https://github.com/user-attachments/assets/534f1da0-d38c-4fd7-abc7-b630fc5e8de6)
Based on the simulation results, it is evident that the sizing of the cables and transformers performs well under both normal and contingency circumstances. Considering the expansion possibilities of the system, a big gap is reserved in the 132kV cable, so that it can support the needs of integrating new loads to the system. Specifically, in N-1 contingency scenarios, the parallel components by the faulty components demonstrate strong backup capabilities during contingencies and effectively sustain the system's normal operations.


## Fault Analysis
Scenario 1: 3 phase fault in L10

In this setting, a 3 phase fault happens on the line between DRCB10 and DRCB10 '. In this case, If = I1− I2. As in this kind of circular loop, L9 will pass the fault current to L10 via B8, and then B8 will pass to DRCB10 'to cause its disconnection since the direction of fault matches the directional relay. At the same time, the rest portion of the fault current current will flow from B3 to DRCB10, and finally disconnect it after 0.2-0.5s. When both DRCB10 and DRCB10 'are successfully disconnected, L10 will be isolated, thus isolating L10 for maintenance. However, considering that DRCB10 and DRCB10’ may not be disconnected in time due to unexpected failures, DRCB9 works as a backup of DRCB10' will disconnected first to cut down the fault current supply to Line 10, and finally RC4 as a backup of DRCB10 will also be disconnected is DRCB10 does not function as expected.
![图片](https://github.com/user-attachments/assets/c3c989b3-4ae5-440e-a0ab-61735558d940)

Scenario 2: Bus fault at 33kV system

In this case, it is assumed that the bus is subjected to a line - ground short circuit, with fault current of 8970A. First, TB1 will be disconnected when the two buses are not balanced, allowing the remaining system to run. Secondly, DRCB5’, DRCB8’ and DRCB10’ will be disconnected due to the direction of fault current, to isolate the faulty bus. After that, RC4 will also be disconnected, thus completely isolate the faulty bus. Although in practice, the probability of such a problem is relatively rare, considering that RC4 fails, the supply of 132kV needs to be disconnected. At this time, operators can remotely disconnect the outgoing line at the side of Transformer T2.
![图片](https://github.com/user-attachments/assets/eb2317e3-2e25-4a0d-9975-30021351912e)

Scenario 3: Bus 2 fault at 132kV system

If there is a line-ground short circuit fault of bus in bus 2. At this point, the two adjacent DRCBs will be disconnected immediately, so that the current will flow from the other bus to the 132/33kV transformer. However, if any of the DRCB fails, the recloser in the incoming line will also disconnect as a backup, to isolate the faulty bus. If there is a situation where the incoming line recloser also fails, CB1 will also be disconnected. However, it is very rare for this to cause an outage of the entire system.

![图片](https://github.com/user-attachments/assets/2f5ea9a1-bd0d-480b-a294-a4352ebaadcd)



