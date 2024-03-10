# CarbonZero

<div align="center">

![ethOxford](https://taikai.azureedge.net/qy6E7iZrl37s2xkeeS8_xC8Cpo8SLxdzPTeNmhMVSNo/rs:fit:1920:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9hYjBkOWViMC1iMGMwLTExZWUtYWU5YS0yN2RhYzhjOWU2NzJFVEggb3hmb3JkIC0gQ29weS5wbmc)

![Chainlink](https://imageio.forbes.com/specials-images/imageserve/5f4a80a8be4f21f4dc24f9e8/Chainlink-logo/960x0.png?format=png&width=1440)

---

This is a project for ETH Oxford Hackathon.

The Main Track in is: <i>Real-World Assets (RWA) Oracles, and Identity</i>.

The Sponsor Bounty in is: <i>Chainlink - Connect the World with Chainlink</i>.

---

</div>

### Introduction

CarbonZero is a creative B2C carbon neutral platform, as a new direction for ReFi and using real world asset verification, it aims to build a live carbon neutral community.

In CarbonZero, companies can raise their low-carbon activities and clear their carbon footprints. Individuals can take part in the carbon offsetting activities and earn rewards.

### Project Background

Our project aims to incentivize businesses and individuals to take low-carbon actions, establishing an innovative carbon offset platform to achieve the reduction and offsetting of carbon emissions.

By integrating blockchain technology, a rewards system based on NFT/Token, RWA Oracles and other technologies, we are dedicated to creating a sustainable and engaging ecosystem.

Our vision is to build a global carbon offset ecosystem that drives sustainable development. This project is not just a platform; it is a transformative product through technological innovation and social engagement.

![home.jpeg](/frontend/public/images/banner/home1/1-dark.png)

**Background**

In 2021, the voluntary carbon market was valued at $1 billion, surpassing the $300 million recorded in 2018. According to a 2023 report from Shell and Boston Consulting Group, the projected value of the voluntary carbon market is expected to quintuple by 2030, reaching a range of $10 billion to $40 billion.

**Challenges of ReFi**

The main challenges we are currently facing include:

- **Lack of transparency and liquidity :** Currently, voluntary carbon trading primarily takes place in the Over-The-Counter (OTC) market, where transactions occur directly between buyers and sellers rather than through a central exchange. Consequently, there is a lack of transparency and liquidity in the market. Additionally, the profits earned by intermediaries may constitute a significant portion of the overall revenue generated from carbon trading projects.

- **High entry barrier for individuals:** In the voluntary carbon trading market, participation requires significant transactions, and due to relevant regulations and processes, the entry barrier is high for individuals, making it challenging for them to directly engage in carbon trading.
- **There are no uniform standard:** making them difficult to monitor, report, and verify. This could potentially diminish the credibility of the businesses involved.
- **Lack of attractiveness and playability:** Traditional carbon trading platforms suffer from issues such as limited liquidity, insufficient user rewards, and inadequate privacy protection.

**Core Functions**

1. **LowCarbonProject Contract:** Corporate Participation and Carbon Credits:
   Record corporate low-carbon activities through a Monitoring, Reporting, and Verification (MRV) system, converting them into digital carbon credits. This assists companies in building a trustworthy carbon-neutral brand.
2. **Rewards Contract for Users** :
   Users earn carbon tokens and unique NFT rewards by participating in and finishing corporate-initiated activities or purchasing carbon offset products. This innovative reward mechanism enhances user engagement and playability.
3. **[Reliability of Carbon Record using Chainlink Oracle](/contract/contracts/LowCarbonProject.sol)**:
   We used Oracle to ensure the carbon activities uploaded by companies were greatly certified. According to the Verra standard, the Oracle can fetch a reliable and accurate carbon record.
4. **ZK Technology for Privacy Protection**:
   Introduction of Zero-Knowledge Proof (ZK) technology ensures that private data submitted by companies during verification remains secure, increasing corporate participation.
5. **[Adjusted ERC404 with Chainlink VRF](/contract/contracts/RandomERC404.sol)**: to introduce additional elements of playability, such as NFT synthesis and upgrades, to increase user involvement and interaction with digital assets.

**Solutions**

The solution architecture of this project encompasses the following key features and components:

- **Carbon Credit Monitoring System (dMRV and Verra Standards):** By adopting the MRV (Monitoring, Reporting, and Verification) system, it monitors, reports, and verifies carbon emissions, ensuring the authenticity and accuracy of carbon credits. Utilizing industry standards such as Verra helps ensure the project's sustainability and recognition.
- **Oracle Integration:** Utilizing Oracle technology for NFT pricing. After the completion of activities, real-time carbon cost data is queried through Oracle, converting the incentive fees provided by the company into carbon credit digits, recorded within the NFT. This ensures that the real-time value of digital assets aligns with actual market conditions.
- **ERC404:** Introducing the ERC404 protocol to enhance playability. This may include elements such as NFT synthesis and upgrades to encourage users to actively engage and invest in digital assets.
- **Zero-Knowledge (ZK) Technology:** Introducing zero-knowledge proof technology to protect the privacy data submitted by companies. This helps increase the enthusiasm of companies to participate while ensuring that sensitive data remains undisclosed during verification and validation.

Please note that the translation aims to maintain clarity and accuracy while conveying the technical aspects of the solution architecture.

**Roadmap:**

**Phase 1: Initial Development (Q1-Q2 2024)**

- Establish Infrastructure:

  - Set up the foundational technical architecture of the CarbonZero platform.
  - Deploy smart contracts and blockchain infrastructure.

- Implementation of MRV System:

  - Integrate the MRV system to monitor and digitize enterprises' low-carbon activities.

- NFT Reward System:

  - Implement the NFT reward system for users participating in corporate activities and making product purchases.

**Phase 2: Platform Optimization and User Growth (Q3-Q4 2024)**

- User Interface and Experience Optimization:

  - Optimize the platform's user interface to enhance user experience and usability.

- Marketing and Promotion:

  - Execute a comprehensive marketing plan to increase platform awareness.

- Expand Partnerships:

  - Attract more corporate partners to expand the platform's influence.

**Phase 3: Technical Upgrades and Feature Expansion (Q2 2025 and beyond)**

- Oracle Integration and Carbon Pricing Platform:

  - Introduce Oracle technology to optimize the NFT pricing system and integrate with real-time carbon pricing platforms.

- ERC404 Playability Elements:

  - Further leverage ERC404 to introduce more playability elements, such as NFT synthesis and upgrades.

- Enhancements in ZK Technology:

  - Further integrate zero-knowledge proof technology to protect the privacy of submitted enterprise data.

**Future Plans**

- Global Expansion:

  - Expand to more countries and regions, establishing a global carbon-neutral ecosystem.

- Community Engagement and Governance:

  - Implement DAO governance mechanisms to enhance community participation and influence on the platform.

- Technical Upgrades:

  - Continuously monitor the latest advancements in blockchain and carbon monitoring technologies for necessary technical upgrades.

This roadmap is preliminary, and actual development will be adjusted and updated based on market feedback, technological advancements, and user demands.
