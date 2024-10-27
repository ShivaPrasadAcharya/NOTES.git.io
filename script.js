// Function to generate unique ID using date-time stamp and user number
function generateUniqueId(userNumber) {
  const now = new Date();
  
  // Format: YYYYMMDD-HHMMSS-milliseconds-userNumber
  const dateStr = now.getFullYear().toString() +
                 (now.getMonth() + 1).toString().padStart(2, '0') +
                 now.getDate().toString().padStart(2, '0');
  
  const timeStr = now.getHours().toString().padStart(2, '0') +
                 now.getMinutes().toString().padStart(2, '0') +
                 now.getSeconds().toString().padStart(2, '0');
  
  const millisStr = now.getMilliseconds().toString().padStart(3, '0');
  
  return `${dateStr}-${timeStr}-${millisStr}-${userNumber.padStart(4, '0')}`;
}

// Function to format date-time for display
function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
}

// Function to save notes to localStorage
function saveToLocalStorage() {
  try {
      localStorage.setItem('smartNotes', JSON.stringify(notes));
  } catch (error) {
      console.error('Error saving to localStorage:', error);
  }
}

// Function to load notes from localStorage
function loadFromLocalStorage() {
  try {
      const storedNotes = localStorage.getItem('smartNotes');
      return storedNotes ? JSON.parse(storedNotes) : null;
  } catch (error) {
      console.error('Error loading from localStorage:', error);
      return null;
  }
}

// Function to merge default and saved notes
function getMergedNotes() {
  const defaultNotes = [
    {
      id: '20241026-100000-000-0001',
      title: "Welcome to Smart Notes!",
      subtitle: "Getting Started Guide",
      content: "Click the + button to create a new note. You can edit, pin, and delete notes using the buttons below each note. Use the search bar to find specific notes.",
      created: "2024-10-26T10:00:00.000Z",
      lastModified: "2024-10-26T10:00:00.000Z",
      category: "General",
      tags: ["welcome", "guide"],
      pinned: true
  },
  {
      id: '20241026-100100-000-0002',
      title: "Important Features",
      subtitle: "What's New",
      content: "1. Colorful note cards <br>2. Search functionality <br>3. Copy data feature\n4. Pin important notes\n5. Edit and delete options",
      created: "2024-10-26T10:01:00.000Z",
      lastModified: "2024-10-26T10:01:00.000Z",
      category: "Features",
      tags: ["features", "new"],
      pinned: false
  },
{
"id": "20241026-170956-179-0003",
"title": "constitution",
"subtitle": "judicial review",
"content": "judicial review of legislation is brain child of judiciary",
"created": "2024-10-26T11:24:56.179Z",
"lastModified": "2024-10-26T11:24:56.179Z",
"category": "General",
"tags": [
"constitution"
],
"pinned": false
},
{
"id": "20241027-081928-694-0004",
"title": "professional phrases",
"subtitle": "सहसचिव",
"content": "प्रशासन सुधार गन्तव्य नभै क्षितिज तर्फको यात्रा   हो <br>परिपाटी र कार्यशैलीमा हेरफेर गर्न गरिने प्रयासलाई नै सामान्य रुपमा प्रशासन सुधार भन्ने गरिन्छ<br> निम्न मूलभूत कारणहरुले प्रशासन सुधारको आवश्यकता महशुस हुन्छः<br>प्रशासनिक मूल्य मान्यतामा आएका आयामिक परिवर्तनहरु<br>प्रशासनिक परिपाटि\n*Bureaucratic Pathology- काम गर्नु छैन, पढेर बस्ने\n*कानून लागु गर्न, नीति कार्यान्वयन  गर्न र सरकारले वाचा गरेका सेवाहरू वितरण गर्न बनेको संयन्त्र नै bureaucracy हो\n*द्वन्द्व र दबाबबीच निकास निकाल्नुपर्छ\n*\n<strong>Emotional Phrases </strong>\n*Logical End मा पुर्‍याउन सकिएको छैन/ पुगेको अवस्था छैन\n*life लाई Easy बनाउनुपर्नेमा हामीले life लाई busy बनाइरहेका छौं\n*Gender Justice-Gender मा बढी focus भइयो Justice मा कम focus भइयो\n* Cultural Corruption-राज्यलाई गोत्र मतलब भएन उमेर मतलब भयो (विवाहमा)/ एउटै गोत्रमा विवाह गराइदिने\n*पहिचानको पीडामा संयीयता\n*Initiatives/Model/ Approach/ Principle/System\n*Regulatory Compliance\n*Red Tapism\n*Bureaucratic Inertia\n*Silo Mentality\n*Organizational Rigidity\n*Goal Displacement-when goal is not attained then goal is changed. (But we have to change the strategy)\n*Bureaucratic Drift-the gradual drift of bureaucratic agencies away from their original mandates/intention of policymakers\n*Bureaucratic Alienation-the feeling of powerlessness & estrangement experienced by employee due to repetitive & meaningless task.\n*Micromanagement\n*Resource Misallocation\n*Duplication of Effort\n*Policy Crisis\n*Accountability Gap\n*Regulatory Capture\n*Rent Seeking Tendency\n*Abuse of Discretionary Power\n*Dilly Dallying\n*Manena Culture-भोलिवाद\n*Multi-Headed Hydra\n*Less paper to paperless\n*Empire Building\n*Circular Reporting-पुनः निर्णय गर्नु, टिप्पणि उठाउनु\n*Authority Dilution- too much delegation leading to unclear accountability & efficiency\n*Internal Politics\n*Information bottleneck-obstruction in the flow of information\n*Task Overload\n*Counterproductive behaviour\n*Box Ticking- process oriented and excessively formal\n*Bureaucratic Backlog-unresolved issues\n*Feather Bedding-Hiring more employees than necessary (eg: प्रदेशले अदालतै पिच्छे pvt. कानून व्यवसायी नियुक्ति गर्नू)\n*Analysis Paralysis-Over analysis of issue\n*Kafkaesque Procedures- Process & procedures that are excessively complex, illogical or absurd\n*Jobbery= Job+Robbery\n*Status Quo\n*Decision Drift\n*Erosion of Trust\n*Turf wars-Conflict between different departments/agencies over control of resources/areas of responsibility\n*Vicious Cycle\n*Symbolic Compliance to Rules-compliance to regualation & directives supreficially\n*Organization Blot-Excessive growth of an org. interms of staffs & departments leading to inefficiency & waste (विशेष गरी प्रदेसमा देखिएको छ)/ गठन आदेशबाट विकास समिति",
"created": "2024-10-27T02:34:28.694Z",
"lastModified": "2024-10-27T02:34:28.694Z",
"category": "General",
"tags": [
"professional",
"phrases"
],
"pinned": false
},
{
"id": "20241026-203030-773-0005",
"title": "Trade Union",
"subtitle": "Collective Bargaining",
"content": "<strong>Best Practices of the world </strong>\nHere's a concise overview of each collective bargaining practice:\n\n1. Coordinated Bargaining (Germany)\n- Industry-wide negotiations set wage patterns\n- Strong coordination between unions and employer associations\n- Standardized working conditions across sectors\n\n2. Pattern Bargaining (USA)\n- Lead company/sector sets bargaining template\n- Other companies follow the established pattern\n- Creates wage stability across similar industries\n\n3. Shunto Model (Japan)\n- Annual \"Spring Offensive\" synchronized wage negotiations\n- Coordinated timing across major industries\n- Considers national economic conditions for wage setting\n\n4. Inclusive Negotiation (Sweden)\n- High union-employer cooperation\n- Focus on consensus-building\n- Comprehensive social welfare considerations\n\n5. Social Partnership (Australia)\n- Tripartite collaboration (government, unions, employers)\n- Focus on national economic objectives\n- Balance between worker rights and economic growth\n\n6. Multi-Employer Bargaining\n- Multiple employers negotiate jointly with unions\n- Creates industry-wide standards\n- Reduces competitive wage pressure between companies\n\n<strong> Worst Practices in the World</strong>\nHere's a concise overview of these problematic labor practices:\n\n1. Yellow Unions (Mexico)\n- Company-controlled fake unions\n- Block genuine worker representation\n- Sign agreements without worker consent\n\n2. Political Interference (Russia)\n- State manipulates union activities\n- Forced political alignment of unions\n- Suppression of independent labor voices\n\n3. Violent Strike Tactics (Nigeria)\n- Escalation to physical confrontations\n- Use of intimidation and threats\n- Destructive protest methods harming both sides\n\n4. Non-Regular Workers (South Korea)\n- Massive temporary workforce without benefits\n- Discriminatory dual labor system\n- Exploitation through repeated short-term contracts\n\n5.Union Busting (Various Countries)\n&bull;Aggressive anti-union campaigns\n&bull;Retaliatory firings of organizers\n&bull;Intimidation of pro-union workers\n\n6.Contract Labor System (India)\n&bull;Exploitation through multiple subcontractors\n&bull;Denial of basic benefits\n&bull;Evasion of labor laws through intermediaries\n\n7.Forced Labor (Gulf Countries)\n&bull;Kafala sponsorship system\n&bull;Passport confiscation\n&bull;Limited worker mobility\n\n8.Child Labor (Many Developing Nations)\n&bull;Hazardous working conditions\n&bull;Denial of education\n&bull;Exploitation in informal sectors\n\n9.Gender Discrimination (Global)\n&bull;Unequal pay for equal work\n&bull;Limited promotion opportunities\n&bull;Harassment and unsafe conditions\n\n10.Informal Sector Exploitation (Latin America/Africa)\n&bull;No social security coverage\n&bull;Zero job security\n&bull;Cash payments to avoid regulations\n\n11.Sweatshop Conditions (Southeast Asia)\n&bull;Excessive working hours\n&bull;Unsafe facilities (Poor ventilation & lighting, Overcrowding, Physical exhaustion, High temperatures,)\n&bull;Below minimum wage payments, delayed payment, piece-rate payment, illegal wage deductions in various subjects\n&bull;Exploiting to the last drop\n&bull;Sexual Harrassment, No sick leave, Limited bathroom breaks\n&bull; No employment contracts, child labor utilization\n&bull;Usafe building,  fire safety violations. \n\n12.Zero-Hour Contracts (UK and others)\n&bull;Unpredictable work hours\n&bull;Income insecurity\n&bull;No guaranteed minimum hours\n\n<strong>Impacts</strong>\n-Perpetual poverty cycle\n-Physical health deterioration\n-Mental health issues\n-Family separation\n-Work-related injuries/deaths\n\n<strong>Why They Persist: </strong>\n-Global demand for cheap products\n-Weak labor law enforcement\n-Corruption in monitoring systems\n-Complex supply chains hiding violations\n-Economic desperation of workers",
"created": "2024-10-26T14:45:30.773Z",
"lastModified": "2024-10-26T14:45:30.773Z",
"category": "General",
"tags": [
"trade",
"union"
],
"pinned": false
},
  {
"id": "20241027-074031-022-0006",
"title": "Programming",
"subtitle": "CRUDE",
"content": "C=Create\nR=Read\nU=Update\nD=Delete\nE=Edit",
"created": "2024-10-27T01:55:31.022Z",
"lastModified": "2024-10-27T01:55:31.022Z",
"category": "General",
"tags": [
"programming"
],
"pinned": false
},
  {
"id": "20241027-074154-391-0007",
"title": "Inclusive Representation",
"subtitle": "",
"content": "<strong>Two Errors </strong>\n1. Inclusive Error (पाउनुपर्नेले पाएन)\n2. Exclusive Error  (नपाउनुपर्नेले पायो)",
"created": "2024-10-27T01:56:54.391Z",
"lastModified": "2024-10-27T01:56:54.391Z",
"category": "General",
"tags": [
"inclusive",
"representation"
],
"pinned": false
},
  {
"id": "20241027-074115-966-0008",
"title": "constitution",
"subtitle": "Parliamentary Hearing",
"content": "* न्यायाधीशको संसदीय सुनुवाईको अर्थ छैन। सुनुवाई नै गर्ने हो भने न्यायपरिषदको संरचनाभित्र गरिनु उचित हुन्छ।",
"created": "2024-10-27T01:56:15.966Z",
"lastModified": "2024-10-27T01:56:15.966Z",
"category": "General",
"tags": [
"constitution"
],
"pinned": false
},
  {
"id": "20241027-073926-646-0009",
"title": "constitution",
"subtitle": "FR & DPSP",
"content": "*FR हरू Deepening हुन्छ तर DPSP हरू widening हुन्छ।\n*FR हरू राज्यको वर्तमान हैसियत र क्षमताको आधारमा तय गरिन्छ भने DPSP भविष्यपरक हुन्छन्।",
"created": "2024-10-27T01:54:26.646Z",
"lastModified": "2024-10-27T01:54:26.646Z",
"category": "General",
"tags": [
"constitution"
],
"pinned": false
},
  {
"id": "20241027-073836-343-0010",
"title": "Change Mgmt",
"subtitle": "",
"content": "* Revolution of Rising Expection and Revolution of Rising Frustration हरू परिवर्तनका सम्बाहक हुन्।",
"created": "2024-10-27T01:53:36.343Z",
"lastModified": "2024-10-27T01:53:36.343Z",
"category": "General",
"tags": [
"change",
"mgmt"
],
"pinned": false
},
  {
"id": "20241027-143533-100-0011",
"title": "Diversity Management",
"subtitle": "",
"content": "<strong>Diversity Areas </strong>\n* Gender diversity quotas (e.g., Norway: 40% female directors)\n* Skills and expertise diversity\n* Cultural and ethnic diversity\n* Age diversity and term limits",
"created": "2024-10-27T08:50:33.100Z",
"lastModified": "2024-10-27T08:50:33.100Z",
"category": "General",
"tags": [
"diversity",
"management"
],
"pinned": false
},
  {
"id": "20241027-143454-276-0012",
"title": "Emerging Trends",
"subtitle": "",
"content": "* Technology Governance",
"created": "2024-10-27T08:49:54.276Z",
"lastModified": "2024-10-27T08:49:54.276Z",
"category": "General",
"tags": [
"emerging",
"trends"
],
"pinned": false
},
  {
"id": "20241027-143403-148-0013",
"title": "Acronyms",
"subtitle": "",
"content": "E= Evaluation (evaluation of current state )/establishing\nA=Analysis (Gap Analysis)/Adaptation/ Assessment/Alignment/\nS=Setting (Priority Setting, Goal Setting, target setting, standards, shared goals)/streamlining\nY=Yearly Planning (Yearly Action Plan)",
"created": "2024-10-27T08:49:03.148Z",
"lastModified": "2024-10-27T08:49:03.148Z",
"category": "General",
"tags": [
"acronyms"
],
"pinned": false
},
{
"id": "20241027-143312-140-0014",
"title": "A-Z",
"subtitle": "",
"content": "<strong>Positive Terms</strong>\nA = Able, Accomplished, Adaptable, Adventurous, Ambitious, Authentic, Awesome\nB = Balanced, Blessed, Bold, Brave, Brilliant, Buoyant\nC = Capable, Caring, Charismatic, Confident, Creative, Curious\nD = Dedicated, Determined, Diligent, Dynamic, Dazzling\nE = Eager, Efficient, Eloquent, Empathetic, Energetic, Enthusiastic, Excellent\nF = Fabulous, Faithful, Fearless, Flexible, Focused, Friendly, Fulfilling\nG = Genuine, Gifted, Grateful, Graceful, Growing, Grounded\nH = Happy, Harmonious, Healthy, Helpful, Honest, Hopeful\nI = Imaginative, Inspiring, Intelligent, Intuitive, Innovative\nJ = Joyful, Jubilant, Just, Jovial\nK = Kind, Keen, Knowledgeable\nL = Loving, Loyal, Lively, Learned, Logical, Luminous\nM = Magnificent, Mature, Mindful, Motivated, Mighty\nN = Natural, Noble, Nourishing, Nurturing\nO = Observant, Optimistic, Organized, Original, Outstanding\nP = Patient, Peaceful, Persistent, Positive, Powerful, Progressive\nQ = Quick-witted, Quiet-confident, Quality-focused\nR = Radiant, Rational, Reliable, Resilient, Resourceful\nS = Sincere, Skillful, Smart, Spirited, Strong, Successful\nT = Talented, Thoughtful, Thriving, Trustworthy, Truthful\nU = Unafraid, Understanding, Unique, Unstoppable, Uplifting\nV = Valuable, Versatile, Vibrant, Victorious, Virtuous\nW = Warm, Wise, Wonderful, Worthy\nX = Xanthous (bright, radiant), Xenodochial (friendly to strangers)\nY = Youthful, Yielding (in a positive way - flexible)\nZ = Zealous, Zestful, Zen\n\n<strong>Negative Terms </strong>\nA = Abandoned, Absent-minded, Anxious, Apologetic, Average, Awkward\nB = Bewildered, Blundering, Boring, Broken, Bumbling, Burdensome\nC = Careless, Chaotic, Clumsy, Confused, Cowardly, Cringeworthy\nD = Defective, Deficient, Dependent, Desperate, Disappointing, Disorganized, Dull\nE = Embarrassing, Empty, Erratic, Error-prone, Exhausted\nF = Failed, Falsified, Faulty, Fearful, Flawed, Foolish, Forgetful, Fraudulent, Fabricated\nG = Gawky, Gloomy, Graceless, Guilty\nH = Hapless, Helpless, Hesitant, Hopeless\nI = Ignorant, Immature, Imperfect, Inadequate, Incompetent, Insecure\nJ = Jaded, Jangled, Jarring, Jittery, Jumpy\nK = Klutzy, Knotted\nL = Lacking, Lazy, Limited, Lost, Lousy, Lukewarm\nM = Maladroit, Mediocre, Meek, Messy, Mistaken, Muddled\nN = Naive, Needy, Negative, Nervous, Neurotic\nO = Obsolete, Odd, Ordinary, Overwhelmed, Overworked\nP = Pathetic, Perplexed, Powerless, Procrastinating, Puzzled\nQ = Quaking, Queasy, Questioning, Quiet, Quitting\nR = Regretful, Reluctant, Restless, Rigid, Rusty\nS = Scattered, Shaky, Slow, Stumbling, Subpar\nT = Tense, Timid, Tired, Troubled, Twisted\nU = Unapproachable, Uncertain, Uncomfortable, Unreliable, Unworthy\nV = Vacant, Vague, Vulnerable\nW = Weak, Weary, Worthless, Wavering, Withdrawn\nX = Xenial (overly concerned with others), Xerotic (lifeless)\nY = Yielding, Youthlessly naive\nZ = Zealless, Zigzagging, Zonked",
"created": "2024-10-27T08:48:12.140Z",
"lastModified": "2024-10-27T08:48:12.140Z",
"category": "General",
"tags": [
"a-z"
],
"pinned": false
},
{
"id": "20241027-143241-204-0015",
"title": "Better phrases",
"subtitle": "",
"content": "द्रव्यदृष्टि\nexample→notable example\npoor→pro-poor\ncooperation →seamless cooperation\nउत्तम →सर्वोत्तम\nउत्कृष्ट→सर्वोत्कृष्ट",
"created": "2024-10-27T08:47:41.204Z",
"lastModified": "2024-10-27T08:47:41.204Z",
"category": "General",
"tags": [
"better",
"phrases"
],
"pinned": false
},
{
  "id": "20241027-221516-360-0016",
  "title": "Security management",
  "subtitle": "Examples",
  "content": "Notable Examples of National Security Management Systems\n\n<strong><underline> 1. Israel's Multi-Layered Defense Approach</underline></strong>\n<strong>Key Features</strong>\n- Integrated civilian-military coordination\n- Advanced early warning systems\n- Multi-agency threat assessment\n- Strong cyber defense capabilities\n- Public-private partnerships in security technology\n\n<strong>Notable Elements</strong>\n- Home Front Command for civilian protection\n- Advanced missile defense systems (Iron Dome)\n- Sophisticated intelligence gathering networks\n- Mandatory military service contributing to security awareness\n\n<strong><underline> 2. Singapore's Total Defence Strategy</underline></strong>\n<strong>Key Features</strong>\n- Comprehensive five-pillar approach:\n  - Military Defence\n  - Civil Defence\n  - Economic Defence\n  - Social Defence\n  - Psychological Defence\n- Recently added Digital Defence as sixth pillar\n\n<strong>Notable Elements</strong>\n- National Service program\n- Inter-agency coordination\n- Strong focus on cybersecurity\n- Emphasis on social cohesion\n- Regular national security exercises\n\n<strong><underline> 3. Switzerland's Armed Neutrality Model</underline></strong>\n<strong>Key Features</strong>\n- Maintained neutrality while ensuring strong defense\n- Universal conscription system\n- Decentralized emergency response\n- Protected infrastructure network\n- Advanced civil defense systems\n\n<strong>Notable Elements</strong>\n- Nationwide nuclear bunker system\n- Militia-based army structure\n- Mountain fortress strategy\n- Strong emphasis on self-reliance\n- Robust emergency preparedness\n\n<strong><underline> 4. Estonia's Digital Security Framework</underline></strong>\n<strong>Key Features</strong>\n- Advanced e-governance infrastructure\n- NATO Cooperative Cyber Defence Centre of Excellence\n- Distributed digital systems\n- Blockchain-based security measures\n- Strong focus on cyber resilience\n\n<strong>Notable Elements</strong>\n- Digital ID system\n- Data embassy concept\n- Public-private cyber cooperation\n- Regular cyber defense exercises\n- Digital continuity of government\n\n<strong><underline> 5. Japan's Comprehensive Security Approach</underline></strong>\n<strong>Key Features</strong>\n- Integration of economic and military security\n- Focus on disaster preparedness\n- Advanced technological capabilities\n- Regional security cooperation\n- Maritime security emphasis\n\n<strong>Notable Elements</strong>\n- Japan Coast Guard operations\n- Natural disaster response system\n- Critical infrastructure protection\n- Advanced surveillance capabilities\n- International security partnerships\n\n<strong><underline> Key Lessons and Best Practices</underline></strong>\n\n<strong>1. Integration and Coordination</strong>\n- Seamless cooperation between agencies\n- Clear command and control structures\n- Regular joint exercises\n- Shared intelligence platforms\n- Unified response protocols\n\n<strong>2. Technology Integration</strong>\n- Advanced warning systems\n- Cyber defense capabilities\n- AI and machine learning applications\n- Secure communication networks\n- Automated threat detection\n\n<strong>3. Public Engagement</strong>\n- Regular citizen drills\n- Public awareness campaigns\n- Community involvement in security\n- Transparent communication\n- Educational initiatives\n\n<strong>4. Resource Management</strong>\n- Strategic resource allocation\n- Emergency stockpiles\n- Flexible response capabilities\n- Sustainable funding models\n- Efficient logistics systems\n\n<strong>5. International Cooperation</strong>\n- Intelligence sharing agreements\n- Joint training exercises\n- Technology exchanges\n- Diplomatic initiatives\n- Regional security frameworks\n\n<strong><underline> Emerging Trends</underline></strong>\n- Increased focus on cyber threats\n- Climate security considerations\n- Hybrid warfare preparedness\n- AI-driven threat analysis\n- Pandemic response integration\n\n<h3> the high-profile national security cases</h3>\n\n<strong>1. Ukraine-Russia Hybrid Warfare (2022-Present)</strong>\n• Cyber warfare tactics\n• Information warfare campaigns \n• Critical infrastructure targeting\n• Drone warfare innovations\n• Nuclear facility threats\n\n<strong>2. Taiwan Strait Tensions</strong>\n• Military demonstrations\n• Cyber operations\n• Economic security measures \n• Maritime security challenges\n• International diplomatic tensions\n\n<strong>3. Iranian Drone Program Development</strong>\n• Military technology proliferation\n• Regional power dynamics\n• International sanctions impact\n• Defense innovation patterns\n• Strategic alliance shifts\n\n<strong>4. North Korean Missile Tests</strong>\n• Advanced missile capabilities\n• Nuclear program expansion\n• Cyber warfare activities\n• International sanctions evasion\n• Regional security dynamics\n\n<strong>5. Recent Significant Cyber Attacks</strong>\n• Colonial Pipeline Attack (2021)\n• Microsoft Exchange Server Hack (2021)\n• Costa Rica Ransomware Attack (2022)\n• Government systems breaches\n• Critical infrastructure targeting\n\n<strong>6. Afghanistan Security Transition (2021)</strong>\n• Rapid government collapse\n• Military equipment capture\n• Regional security impacts\n• Humanitarian concerns\n• International terrorism risks\n\n<strong>7. Israel-Hamas Conflict (2023-24)</strong>\n• Urban warfare challenges\n• Civilian protection issues\n• Intelligence failures analysis\n• Regional stability impacts\n• International security cooperation\n\n<strong>8. AI and National Security</strong>\n• AI weapons development\n• Autonomous systems risks\n• Deepfake threats\n• Algorithm warfare\n• Data security concerns\n\n<strong>9. Climate Security Threats</strong>\n• Resource scarcity\n• Migration pressures\n• Infrastructure vulnerability\n• Food security\n• Water security\n\n<strong>Key Emerging Trends:</strong>\n• Increased cyber warfare\n• Hybrid warfare tactics\n• AI/ML integration in security\n• Climate-related security threats\n• Critical infrastructure vulnerabilities",
  "created": "2024-10-27T16:30:16.360Z",
  "lastModified": "2024-10-27T16:30:16.360Z",
  "category": "General",
  "tags": [
    "security",
    "management"
  ],
  "pinned": false,
  "isDefault": false
},
{
"id": "20241027-142931-531-0017",
"title": "Kamal Sir's Tip for Joint Secretary (2081.07.04)",
"subtitle": "",
"content": "<strong>Books/Notes Refered </strong>\n1. महेश्वर भट्टराईको नोट\n2. रणनीति योजना न्यायपालिका , यसैबाट SWOT analysis गर्ने\n3. १६ औं योजना\n4.AMB को interview (न्याय जर्नल)\n5. Bimal श्रीमान र Bhadrakali श्रीमानको DCM पढ्ने\n6.संविधानवाद-  Tek Dhungana\n7. आचार संहिता- UN Banglore etc\n8. रामबन्धुको नोट\n9. Note style- buwan Pandey\n10. सरकारी वकील दिग्दर्शन पढ्ने\n11. उदयराना मगरको किताब\n12. नरहरी घिमिरेको Innovative State नोट\n13. कुन किताबमा कुन article राम्रो छ त्यो पढ्ने\n14. उमेश मैनाली -व्यरो व्यथा\n15. कर्मचारीतन्त्रको विनिर्माण  लेख पढ्नुहोस।\n\n<strong>Language Used</strong>\n1.50 वटा Bunch of Words बनाउने\n2. Less Paper ले पुगेन Paperless नै हुनपर्यो\n3. Automation ले मात्र पुग्दैन, Autonation नै हुनुपर्यो\n4. Ready made answer बनाउने\n5. AI question आउन सक्छ, यसलाई National Security सँग जोड्ने\n6.Time पाएको भए राम्रै लेख्थ्यो भन्ने पार्ने\n7. रामबन्धुको भाषा प्रयोग गर्ने\n8. प्रश्न खण्डिकरण गरेर हेर्नेः स्थानीय, प्रदेश र संघले के गर्नुपर्छ/ प्रबन्धगत, नीतिगत, कार्यगत, संविधानगत\n9. सुधारका क्षेत्र- Parliament, parliamentary committee, Bar, People, Civil society, प्रहरी, prosecutor, judiciary, media, political parties, etc.\n10. just, fair & reasonable\n11. making, breaking and remaking of law,\n12. सुखद प्रत्याभुति जनतालाई दिनुपर्छ\n13.अलि अलि कापी भरिने, अलि अलि jargon\n14. Policy level of Question solution- policy cycle का प्रत्येकको 5-7 points बनाउने (Formulation, Implementation, Monitoring, Feedback), \n15. संविधान/policy/ AI/ योजना/SDGs\n16. Deconstruction of Bureaucracy को कुरा पनि गर्ने गरिन्छ तर यसको उत्तम विकल्प कसैले सुझाउन सकेको छैन।  यसलाई सुधार गर्नु नै यसको एकमात्र विकल्प हो।\n17. Organizational Vitality थप्ने काम गर्छ\n18. Silo Mentality, Dilly Dally, Adhoc छौ, Change resist गर्छौं, Manena Culture, whimsical culture\n17. Umesh mainali को word प्रयोग गर्ने\n18. Dubai को जस्तो 10x technique , Singapore जस्तो Regualtory Sandbox Model भित्र्याउनुपर्यो/ अपनाउनुपर्यो\n19. fund, function and functionaries\n20. हाम्रो लागि Ist & IInd paper challenging हुन्छ\n21.मनपरेको शब्दलाई Innovative तरिकाले प्रयोग गर्ने\n22. Climate Change issue लाई राम्रो तयारी गर्नुहोला , LAPA, NAPA लेख्ने\n23. निजामति सुधारका ७ वटा क्षेत्र छन्  भनी भनेर किटेर भन्ने\n24.O&M\n25.content & Contest\n26. START -UP fund-policy answer बनाइराख्ने\n19. जे पढिन्छ त्यसलाई undermine गर्ने- Automation ले पुग्दैन e-Estonia जस्तो Autonation मा जानुपर्छ\n20.पुरा भाषा नलेख्ने/ broken point मा लेख्ने\n21. English हो कि Nepali मा लेखेको थाहा नहोस्- दुवैमा लेख्ने\n22... भरपुर उपयोग गर्न सकिएन\n23.  ... soil friendly भएन\n24. SWOT analysis गरेर policy बनाइएन\n25. ritualistic भयो\n26. Eco power shifted to AI power\n27. Emotional बनाउने गरी लेख्ने- मानव अस्तित्व नै संकटमा पारेको अनुभूति भएको छ\n28. Categorise writing- अनि प्रत्येकमा २-३ वटा मात्र sub-point लेख्ने\n29. Ready Made Answer बनाउने\n30. कार्ययोजना बनाएर Bhuwan Pandey को कुरा लेख्ने\n31. Question नछुटाउने तर छोटो लेख्ने\n32. mindset मा पनि advance हुन सकेन\n33. Directive Principle मा राष्ट्रपतिको भूमिका पनि लेख्ने\n34. रचनात्मक सिर्जनात्मक हुने\n35. Constructive सुझावलाई कार्यान्वयन गर्नुपर्छ\n36. e- innovativeness चाहियो\n37. Time पुगेन भने माथि background नपढ्ने, WH question मात्र पढ्ने\n38. नेतागत, नीतिगत र नेतागत भ्रष्ट्राचार\n39. Utilitarianism principle अनुसारका नीतिहरू बन्न सकेनन\n40. Deontological Ethics\n41. thin firm of difference छ\n42. hard hitting गर्नुपर्छ, निर्मम प्रहार आवश्यक छ\n43. Organized हुने , एक पाने note बनाउने\n44. Leadership को समस्या\n45. थोरै idea ले पनि धेरै hit गर्ने\n46.नेपालमा अर्थतन्त्रका चुनौतिहरू-15 point ready made बनाउने\n47.institutional memory\n48.",
"created": "2024-10-27T08:44:31.531Z",
"lastModified": "2024-10-27T08:44:31.531Z",
"category": "General",
"tags": [
"kamal",
"sir's",
"tip",
"for",
"joint",
"secretary",
"(2081.07.04)"
],
"pinned": false
},
      // ... your other default notes ...
  ].map(note => ({ ...note, isDefault: true })); // Add isDefault flag to source code notes

  const savedNotes = loadFromLocalStorage() || [];
  const existingIds = new Set(defaultNotes.map(note => note.id));
  const uniqueSavedNotes = savedNotes.filter(note => !existingIds.has(note.id));

  return [...defaultNotes, ...uniqueSavedNotes];
}

// Copy data functionality
function copyData() {
  const dataText = document.getElementById('dataPreview').textContent;
  navigator.clipboard.writeText(dataText).then(() => {
      const copyBtn = document.querySelector('.copy-btn');
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
      }, 2000);
  });
}

// Enhanced highlighting function for text
function highlightText(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to highlight expanded content
function highlightExpandedContent(contentElement, searchTerm) {
  if (!searchTerm) return;
  const textNodes = [];
  const walk = document.createTreeWalker(contentElement, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walk.nextNode()) {
      textNodes.push(node);
  }
  
  textNodes.forEach(textNode => {
      const text = textNode.textContent;
      if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
          const span = document.createElement('span');
          const regex = new RegExp(`(${searchTerm})`, 'gi');
          span.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
          textNode.parentNode.replaceChild(span, textNode);
      }
  });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  renderNotes(searchTerm);
});

function showForm(editId = null) {
  document.getElementById('formSection').style.display = 'block';
  document.getElementById('formTitle').textContent = editId ? 'Edit Note' : 'Add New Note';
  
  if (editId) {
      const note = notes.find(n => n.id === editId);
      document.getElementById('editingId').value = editId;
      document.getElementById('noteNumber').value = note.id.split('-')[3];
      document.getElementById('noteNumber').disabled = true;
      document.getElementById('title').value = note.title;
      document.getElementById('subtitle').value = note.subtitle;
      document.getElementById('content').value = note.content;
      updateDataPreview();
  } else {
      document.getElementById('noteNumber').disabled = false;
      document.getElementById('noteNumber').value = '';
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideForm() {
  document.getElementById('formSection').style.display = 'none';
  document.getElementById('noteForm').reset();
  document.getElementById('editingId').value = '';
  document.getElementById('dataPreview').textContent = '';
  document.getElementById('noteNumber').disabled = false;
}

// Content toggle functionality with search highlighting
function toggleContent(contentId, noteId) {
  const contentElement = document.getElementById(contentId);
  const note = notes.find(n => n.id === noteId);
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const isExpanded = contentElement.style.maxHeight === 'none';
  
  if (isExpanded) {
      contentElement.style.maxHeight = '100px';
      contentElement.innerHTML = `
          ${highlightText(note.content.substring(0, 200), searchTerm)}...
          <button class="expand-collapse-btn" onclick="toggleContent('${contentId}', '${noteId}')" title="Expand">
              <i class="fas fa-chevron-down"></i>
          </button>
      `;
  } else {
      contentElement.style.maxHeight = 'none';
      contentElement.innerHTML = `
          ${highlightText(note.content, searchTerm)}
          <button class="expand-collapse-btn" onclick="toggleContent('${contentId}', '${noteId}')" title="Collapse">
              <i class="fas fa-chevron-up"></i>
          </button>
      `;
      highlightExpandedContent(contentElement, searchTerm);
  }
}

// Note number input validation
document.getElementById('noteNumber').addEventListener('input', function(e) {
  this.value = this.value.replace(/\D/g, '');
  
  if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
  }
  
  if (/^\d{4}$/.test(this.value)) {
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
  } else {
      this.classList.remove('is-valid');
      this.classList.add('is-invalid');
  }
});

['noteNumber', 'title', 'subtitle', 'content'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateDataPreview);
});

function generateData(userNumber, title, subtitle, content) {
  return {
      id: generateUniqueId(userNumber),
      title,
      subtitle,
      content,
      created: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      category: "General",
      tags: title.toLowerCase().split(' '),
      pinned: false,
      isDefault: false
  };
}

function updateDataPreview() {
  const userNumber = document.getElementById('noteNumber').value;
  const title = document.getElementById('title').value;
  const subtitle = document.getElementById('subtitle').value;
  const content = document.getElementById('content').value;
  const data = generateData(userNumber, title, subtitle, content);
  document.getElementById('dataPreview').textContent = JSON.stringify(data, null, 2);
}

// Form submission handler
document.getElementById('noteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userNumber = document.getElementById('noteNumber').value.trim();
  const title = document.getElementById('title').value.trim();
  const subtitle = document.getElementById('subtitle').value.trim();
  const content = document.getElementById('content').value.trim();
  const editingId = document.getElementById('editingId').value;
  
  if (!/^\d{4}$/.test(userNumber)) {
      document.getElementById('noteNumber').classList.add('is-invalid');
      alert('Please enter a valid 4-digit number');
      return;
  }
  
  if (!editingId) {
      const idExists = notes.some(note => note.id.endsWith(userNumber.padStart(4, '0')));
      if (idExists) {
          document.getElementById('noteNumber').classList.add('is-invalid');
          alert('This number is already in use. Please choose a different number.');
          return;
      }
  }
  
  if (editingId) {
      const index = notes.findIndex(n => n.id === editingId);
      if (index !== -1) {
          const editingNote = notes[index];
          
          if (editingNote.isDefault) {
            // For locked notes, create a new note with same number and created date
            const newNote = {
                ...generateData(userNumber, title, subtitle, content),
                isUpdatedVersion: true,
                originalNoteId: editingId,
                created: editingNote.created // Keep original creation date
            };
            notes.push(newNote);
        
          } else {
              // For regular notes, update as usual
              notes[index] = {
                  ...notes[index],
                  title,
                  subtitle,
                  content,
                  lastModified: new Date().toISOString()
              };
          }
      }
  } else {
      const noteData = generateData(userNumber, title, subtitle, content);
      notes.push(noteData);
  }
  
  saveToLocalStorage();
  renderNotes();
  hideForm();
});

function togglePin(id) {
  const note = notes.find(n => n.id === id);
  if (note) {
      note.pinned = !note.pinned;
      saveToLocalStorage();
      renderNotes();
  }
}

function deleteNote(id) {
  if (confirm('Are you sure you want to delete this note?')) {
      notes = notes.filter(note => note.id !== id);
      saveToLocalStorage();
      renderNotes();
  }
}

function renderNotes(searchTerm = '') {
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';
  
  let filteredNotes = notes;
  if (searchTerm) {
      filteredNotes = notes.filter(note => 
          note.title.toLowerCase().includes(searchTerm) ||
          note.subtitle.toLowerCase().includes(searchTerm) ||
          note.content.toLowerCase().includes(searchTerm) ||
          note.id.toLowerCase().includes(searchTerm)
      );
  }
  
  const sortedNotes = [...filteredNotes].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.lastModified) - new Date(a.lastModified);
  });
  
  sortedNotes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.className = 'col-md-4 mb-4 note-card';
      
      const contentId = `content-${note.id}`;
      const isLongContent = note.content.length > 200;
      const truncatedContent = isLongContent ? 
          note.content.substring(0, 200) + '...' : 
          note.content;

      const noteStatus = note.isDefault ? 
          '<span class="note-lock" title="Source code note"><i class="fas fa-lock"></i></span>' : 
          (note.isUpdatedVersion ? 
              '<span class="note-updated" title="Updated version of a source note"><i class="fas fa-sync-alt"></i></span>' : 
              '');
      
      noteElement.innerHTML = `
          <div class="card h-100 ${note.pinned ? 'pinned' : ''}">
              <div class="card-body">
                  <div class="note-number mb-2 text-muted">
                      <small>
                          Note #${note.id}
                          ${noteStatus}
                          ${note.isUpdatedVersion ? 
                              `<span class="original-note" title="Original note ID: ${note.originalNoteId}">
                                  <i class="fas fa-link"></i>
                              </span>` : 
                              ''}
                      </small>
                  </div>
                  <h5 class="card-title">${highlightText(note.title, searchTerm)}</h5>
                  <h6 class="card-subtitle mb-2 text-decoration-underline">${highlightText(note.subtitle, searchTerm)}</h6>
                  <div class="card-text ${isLongContent ? 'truncate-content' : ''}" id="${contentId}" style="color: black;">
                      ${highlightText(truncatedContent, searchTerm)}
                      ${isLongContent ? `
                          <button class="expand-collapse-btn" onclick="toggleContent('${contentId}', '${note.id}')" title="Expand">
                              <i class="fas fa-chevron-down"></i>
                          </button>
                      ` : ''}
                  </div>
                 <div class="note-timestamp mt-2">
    <small class="text-opacity-75">
        Created: ${formatDateTime(note.created)}
    </small>
</div>
              </div>
              <div class="card-footer bg-transparent d-flex justify-content-end">
                  <button class="action-btn" title="Edit" onclick="showForm('${note.id}')">
                      <i class="fas fa-pen"></i>
                  </button>
                  <button class="action-btn" title="${note.pinned ? 'Unpin' : 'Pin'}" onclick="togglePin('${note.id}')">
                      <i class="fas fa-thumbtack" style="${note.pinned ? 'transform: rotate(45deg);' : ''}"></i>
                  </button>
                  <button class="action-btn" title="Delete" onclick="deleteNote('${note.id}')">
                      <i class="fas fa-trash"></i>
                  </button>
              </div>
          </div>
      `;
      container.appendChild(noteElement);
    });
    
    document.getElementById('noNotesMessage').style.display = 
        sortedNotes.length === 0 ? 'block' : 'none';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formSection').style.display = 'none';
    notes = getMergedNotes();
    renderNotes();
});
