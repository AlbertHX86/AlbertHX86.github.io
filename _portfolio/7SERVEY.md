---
title: " *Industry 4.0 for Energy:* A survey"
excerpt: "The Internet of Things (IoT) serves as a cornerstone of Industry 4.0, synergizing with technologies such as Artificial Intelligence (AI) and Smart Grids (SG). Transformations are distinguished from traditional manufacturing practices by the pervasive use of IoT-enabled hardware and communication protocols. This paper elaborates on the intricate role and potential of IoT within Industry 4.0, emphasizing the groundbreaking influences. Key technologies of IoT will be elaborated to show the current state of art of IoT. Particular attention is given to the enhancement of the Internet of Energy, emphasizing the sensing, communication and computational advancements in the context of IoT-driven Industry 4.0."
collection: portfolio
---
## Introduction：
Post-1999, the introduction of RFID technology expanded the horizons of the IoT. [1] IoT surpassed just RFID-focused systems, ushering in a vision of universal interconnectivity across devices, enhanced by sensor technology, connectivity technologies, and cloud technologies. The IoT structure can be compared to a tree. The foundational roots encompass sensors and connectivity technologies, vital for the entire IoT ecosystem's growth. The trunk represents the software system where drivers, servers, and interfaces—integrating the system's components. At the top, IoT are applied in many fields of applications. Electricity, the primary energy source, powers Industry 4.0 and ensures seamless system communication through IoT Energy Management Systems. [2] The paper aims to present the advancements in the Internet of Things (IoT) that support the development of smart grids, hence facilitating the digital transformation of Industry 4.0.
Technologies driving modern IoT
IoT architecture comprises three layers: perception, which senses and connects the physical world; network, handling information transmission via public or specialized communication networks; and the application layer, providing infrastructure and computing services for Industry 4.0 applications. [3]

## Sensing Systems
Sensing technologies help IoT systems translate physical, chemical, and biological data into modifiable analogue or digital signals. To address a diverse array of application scenarios, there has been a focus on investigating the integration of ultra-low power and extremely dependable sensors for the purpose of perceiving the surrounding environment. [4]
3.1.1 Ambient Sensors -- Physical data such as temperature, humidity and pressure are converted it into electrical signals. For instance, RTDs (Resistance Temperature Detectors) are precision sensors that work based on the principle that a material's electrical resistance changes with temperature. [5] It is widely used to detect overloading or potential failures in smart grids to prevent blackouts and equipment damage.[4]
3.1.2 Ultra-low power sensors -- Ultra-low-power sensors optimise battery life and miniaturisation with LAN advancements. [6] For instance, BME280 sensors combine pressure, temperature, and humidity in one device. [7] By incorporating advanced semiconductor design and sleep modes, the active current measure ranges from ~2.7 µA to 340 µA, which consumes significantly less than traditional sensors, which range from 5-15mA, resulting in a reduction in overall power consumption. [8]
3.1.3 Soft/virtual sensors -- Virtual sensors are utilised in situations when the installation of actual sensors is not feasible owing to either installation constraints or environmental considerations. Measurements are deduced from pre-existing physical sensors. For example, Rockwell Automation employs predictive models based on real-time data to estimate process conditions, replacing the need for certain physical sensors, which results in a deduction in assembling costs and an increase in safety and reliability. [9]

##Workflow of soft sensors in estimating parameters [9]
3.2 Communication technologies and connectivity options
Communication technologies are essential for varied digital interactions, spanning from limited-range Bluetooth to self-organizing systems and IP bearer technologies that enhance machine-to-machine (M2M) communications. Cognitive radio technology further bolsters wireless integration in diverse networks. This progress highlights the merging of low-power routing with rapid transmission for multiple applications in Industry 4.0. [10]
3.2.1 BLE (Bluetooth Low Energy) -- Bluetooth and BLE provide efficient short-range connectivity in the IoT sphere, covering up to 100 meters and delivering data rates of 1-2 Mbps and 0.27 Mbps, respectively. These devices are designed to be optimised for wearables and localised equipment. [11]
3.2.2 Zigbee and Z-wave -- Zigbee, with its range of 10-100 meters and a 250kbps data rate, is frequently employed in advanced metering infrastructure (AMI) due to its ability to interlink a multitude of metering devices seamlessly. Z-wave, operating at sub-1GHz frequencies, ensures a reliable 100-meter connection at near 100 kbps rates, which is instrumental in managing in-house energy storage and consumption devices. [12]
3.2.3 Narrowband IoT (NB-IoT) -- Operating in licensed frequency bands, NB-IoT coverage can span several kilometres while maintaining a data rate of up to 250 kbps. Owing to its capabilities of deep signal penetration and extended battery life optimization, NB-IoT is fundamental for large-scale monitoring tasks, including smart metering applications and digital twins. [13]
3.3 Cloud and Edge Computing in IoT:
Within the IoT framework, cloud computing serves as a centralized hub, adept at managing vast data from various devices, offering extensive storage and swift processing. [14] The utilisation of this technology facilitates in-depth analysis of data, hence augmenting the process of decision-making. Conversely, Edge Computing complements the process by handling data closer to the source, ensuring rapid responses, a crucial feature in scenarios like autonomous transportations. [15] Edge configurations provide speed and reduced latency, with local data management optimizing bandwidth. The development of on-device AI has enhanced the accuracy of edge computing and the overall IoT framework, enabling prompt decision-making and reliable performance even in situations when cloud connectivity is sporadic. [16]
The Internet of Energy (IoE)
IoT is essential to urban growth and the emergence of the Internet of Energy in the Industry 4.0 era. As predicted, 30.9 billion IoT facilities will be installed worldwide, and 19% will be installed in Energy sectors by 2025, serving as an integral component of Industry 4.0. [17] Smart grids drive metropolitan industries and are essential for network communication and electricity safety. 
4.1 Source side -- Generators are continuously monitored by sensors in real-time.  Incorporating IoT technologies allows traditional power systems to benefit from remote defect diagnosis. Distributed energy sources, such as solar and wind, can therefore be effectively regulated. For example, IoT aids in remotely managing solar systems, while deep learning optimizes malfunction predictions for wind turbines. Investigations of LoRaWAN and Sigfox as viable options for ensuring secure transmission of data in remote settings. To minimize errors in real-time analysis and delay in energy monitoring, multi-access edge computing (MEC) processes data near its source, therefore effectively lowering latency. [18]
4.2 Grid side -- IoT technology boosts the operational efficiency of electrical transmission lines and substations. Enhanced monitoring and maintenance are evident in transmission systems. In substations, IoT, utilising optical fibres or industrial Ethernet, monitors various electrical metrics, tackling issues such as isolated data and uneven computing demand seen in older setups. For distribution, IoT enables smart equipment management and automation, mainly through optical fibres or General packet radio service (GPRS). [19]
4.3 Load side -- IoT is changing low-voltage metre reading, boosting electrical grid bidirectional communication and user engagement. ZigBee and other communication networks make energy data collection efficiently easier. In smart factories and electric vehicle charging systems, IoT streamlines power loads and introduces real-time billing, spurring new EV charging models. [20] Although challenges persist in data collection and understanding of power usage, IoT's growing presence suggests a broadening future in power grid applications. [18]

## Conclusion: 
The incorporation of IoT technology within the energy industry highlights a significant transition towards the implementation of smart grids, which is crucial in the contemporary digital industrial revolution towards Industry 4.0. IoT improves smart grid operations by advanced sensing systems, facilitates connectivity, and provides predictive maintenance to improve smart grid operations. These advancements will improve energy efficiency and bolster infrastructure resilience. The congruence between IoT and smart grids exemplifies how interconnected technologies will shape the future of Industry 4.0, ensuring that industries not only evolve but thrive in an era of digitization. However, further investigation and analysis into developing concerns such as cybersecurity risks, vulnerabilities, interoperability, and standardisation need to be conducted. 

[Survey Essay.docx.pdf](https://github.com/user-attachments/files/17359489/Survey.Essay.docx.pdf)















