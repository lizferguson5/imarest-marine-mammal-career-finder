/*
 * Marine Mammal Career Finder — profile data
 * ------------------------------------------
 * FACETS  : the filter groups and their allowed values. A profile can only be
 *           matched on values that appear here, so add new values here first.
 * P       : every profile. kind "role" = career path, "person" = role model.
 *           draft: true marks a proposed career awaiting SIG review.
 *
 *   Career path fields : summary, overview, activities, keyskills,
 *                        entryRoute (how to get in), workPattern,
 *                        progression (where it leads), models (role model ids)
 *   Role model fields  : summary, role (current role), education, path
 *                        (career progression, oldest first), keyskills,
 *                        drivers, challenges
 *   Role model photos live in assets/people/<id>.jpg
 *
 * PRESETS : the one-click "Start from" buttons in the header.
 * See MAINTAINING.md for full instructions.
 */

window.FACETS = {
  setting: {
    label: "Where you work",
    opts: [
      "At sea / offshore",
      "Coast & field sites",
      "Lab",
      "Office / remote",
      "Animal care facility",
      "Classroom & public"
    ]
  },
  sector: {
    label: "Sector",
    opts: [
      "Industry",
      "Consultancy",
      "Academia",
      "Government",
      "NGO & charity",
      "Rescue & rehab",
      "Eco-tourism"
    ]
  },
  skills: {
    label: "Skills & interests",
    opts: [
      "Visual survey & species ID",
      "Acoustics & PAM",
      "Data analysis & stats",
      "Coding (R / Python)",
      "GIS & mapping",
      "Report writing",
      "Regulation & compliance",
      "Leadership & project mgmt",
      "Communication & outreach",
      "Teaching & mentoring",
      "Hands-on animal care",
      "Veterinary & medical",
      "Equipment & tech",
      "Fundraising & grants",
      "Genetics & lab methods",
      "Policy & management",
      "Drones & aerial survey"
    ]
  },
  lifestyle: {
    label: "Lifestyle",
    opts: [
      "Long offshore rotations",
      "Frequent travel",
      "On-call / irregular hours",
      "Mostly one base",
      "Physically demanding"
    ]
  },
  entry: {
    label: "Typical entry level",
    opts: [
      "Certificate / training",
      "Bachelor's",
      "Master's",
      "PhD"
    ]
  }
};

// kind: role | person ; draft: proposed new career for SIG review
window.P = [
  {
    id: "mmo",
    kind: "role",
    title: "Marine Mammal / Protected Species Observer (MMO/PSO)",
    summary: "Watch for marine megafauna during industry operations and make sure the project follows the rules that protect them.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Visual survey & species ID",
      "Regulation & compliance",
      "Report writing"
    ],
    lifestyle: [
      "Long offshore rotations",
      "Frequent travel"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "MMOs (called PSOs in the US) are the eyes of a project at sea. During seismic surveys, piling, dredging, unexploded ordnance clearance and similar work, they scan for marine mammals and other protected species and can delay or pause noisy activities when animals are too close. The job combines field biology with regulation: you need to know the species and know the rules.",
    activities: [
      "Visually survey for marine megafauna during operations",
      "Apply international, national and local regulations and advise crew on compliance",
      "Photograph and log sightings",
      "Deliver daily and weekly compliance and monitoring reports, then a final project report"
    ],
    keyskills: [
      "Species ID and behaviour",
      "Willingness to work offshore for long periods",
      "Experience on vessels",
      "Concentration across long shifts",
      "MMO certification",
      "Accurate range estimation at sea"
    ],
    entryRoute: [
      "A degree in marine biology, zoology, ecology or a related subject is usual, though not always required",
      "A recognised MMO/PSO course for the region you want to work in, such as JNCC-approved (UK) or BOEM/BSEE-approved (US Gulf of Mexico)",
      "Offshore safety and medical certificates, such as BOSIET or FOET with HUET, and an offshore medical",
      "Logged sea time and marine mammal survey experience, often gained through volunteering or research projects",
      "Many MMOs also train as PAM operators to be more employable"
    ],
    workPattern: "Typically contract or freelance work, with rotations of several weeks offshore (often 4–6 weeks) followed by time at home. Watches are long and concentrated, often dawn to dusk. Work can be irregular between contracts.",
    progression: [
      "Lead or senior MMO/PSO",
      "Dual MMO/PAM operator",
      "Environmental advisor or client representative",
      "Marine mammal consultant or project manager",
      "MMO trainer"
    ],
    models: [
      "diana",
      "heather",
      "ashleigh",
      "niru"
    ]
  },

  {
    id: "mms",
    kind: "role",
    title: "Marine Mammal Surveyor (MMS)",
    summary: "Run structured surveys that establish baselines and feed environmental impact assessments.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Visual survey & species ID",
      "Data analysis & stats",
      "Report writing"
    ],
    lifestyle: [
      "Long offshore rotations"
    ],
    entry: [
      "Bachelor's"
    ],
    overview: "Marine mammal surveyors collect the baseline data that environmental impact assessments and long-term monitoring depend on. Rather than mitigating a single operation, they run systematic surveys, often using line-transect distance sampling, to estimate how many animals use an area and where.",
    activities: [
      "Baseline surveys and environmental impact assessment projects",
      "Distance sampling surveys of marine mammals",
      "Sometimes record marine litter or seabirds"
    ],
    keyskills: [
      "Methodical, protocol-driven data collection",
      "Judging sea state and species presence",
      "Data analysis and report writing"
    ],
    entryRoute: [
      "A degree in a biological or environmental science",
      "Experience in survey methods, especially distance sampling and species identification at sea",
      "MMO training and offshore safety certificates are often expected",
      "Data handling skills: spreadsheets, databases, and ideally GIS or R"
    ],
    workPattern: "Survey trips on vessels or aircraft, lasting days to weeks, followed by office-based data processing and reporting. Weather days are common.",
    progression: [
      "Survey lead or coordinator",
      "Data analyst or reporting scientist",
      "Marine mammal consultant",
      "Research scientist (with further study)"
    ],
    models: [
      "heather",
      "niru"
    ]
  },

  {
    id: "envadv",
    kind: "role",
    title: "Environmental Advisor / Manager",
    summary: "Lead mitigation teams and environmental requirements on site, and represent the company to regulators.",
    setting: [
      "At sea / offshore",
      "Office / remote"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Leadership & project mgmt",
      "Regulation & compliance",
      "GIS & mapping",
      "Report writing",
      "Communication & outreach",
      "Drones & aerial survey"
    ],
    lifestyle: [
      "Frequent travel",
      "Long offshore rotations"
    ],
    entry: [
      "Bachelor's",
      "Master's"
    ],
    overview: "Environmental advisors and managers make sure a whole project meets its environmental commitments. They lead mitigation teams, liaise with regulators, check permit conditions are met, and push for wider sustainability on site. It's a leadership role that needs both technical knowledge and diplomacy.",
    activities: [
      "Supervise megafauna mitigation and survey teams",
      "Assess sensitive receptors",
      "Promote sustainability and green initiatives on site",
      "Recommend mitigations to meet permit requirements",
      "Represent the company to environmental regulators"
    ],
    keyskills: [
      "Leadership and project management",
      "GIS",
      "Writing mitigation and monitoring plans",
      "Deep knowledge of environmental regulation",
      "Explaining science to non-technical people",
      "Specialist skills such as drones or programming"
    ],
    entryRoute: [
      "A degree in environmental science, marine biology or similar; a master's helps",
      "Several years of field experience, often starting as an MMO, PAM operator or surveyor",
      "Environmental management qualifications such as ISO 14001 auditor or IEMA, plus health and safety training such as NEBOSH or IOSH",
      "Offshore safety certification for at-sea projects"
    ],
    workPattern: "A mix of site visits, offshore spells and office work. Travel is frequent, and some roles involve long rotations on remote projects.",
    progression: [
      "Senior environmental advisor",
      "Head of environment or HSE manager",
      "Sustainability manager",
      "Environmental consultancy director"
    ],
    models: [
      "niru",
      "daniella"
    ]
  },

  {
    id: "cms",
    kind: "role",
    title: "CMS Field Technologist (camera & infrared monitoring)",
    summary: "Install, calibrate and run the mounted camera and infrared systems that detect animals around operations.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Industry"
    ],
    skills: [
      "Equipment & tech",
      "Visual survey & species ID"
    ],
    lifestyle: [
      "Long offshore rotations"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "Camera and infrared monitoring systems detect marine mammals around the clock, including at night and in poor visibility. CMS field technologists install, calibrate and run these systems on vessels and platforms, and review detections alongside visual and acoustic teams.",
    activities: [
      "Install and operate large mounted camera systems",
      "Maintain and calibrate delicate equipment",
      "Automatic and manual data recording and analysis",
      "On-site condition monitoring"
    ],
    keyskills: [
      "Good IT skills",
      "Understanding of site operations",
      "Species ID and behaviour",
      "Protocol-driven data acquisition"
    ],
    entryRoute: [
      "A technical background (electronics, engineering, IT) or a marine science degree with strong technical skills",
      "Experience with species identification helps when reviewing detections",
      "Offshore safety certification and an offshore medical",
      "Comfort with troubleshooting hardware and software in the field"
    ],
    workPattern: "Offshore rotations similar to MMO and PAM roles, with time spent on installation, maintenance and monitoring shifts.",
    progression: [
      "Senior technologist or systems lead",
      "Technical project manager",
      "Product or R&D roles with monitoring-technology companies"
    ],
    models: []
  },

  {
    id: "pam",
    kind: "role",
    title: "Passive Acoustic Monitoring (PAM) Operator",
    summary: "Listen for marine mammals with specialist hydrophones and software, often when visual watch isn't possible.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Acoustics & PAM",
      "Equipment & tech",
      "Regulation & compliance"
    ],
    lifestyle: [
      "Long offshore rotations"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "PAM operators listen for vocalising marine mammals using towed or fixed hydrophone arrays and specialist software such as PAMGuard. Acoustic monitoring works at night and in rough weather when visual observers can't, so PAM is often a permit requirement for noisy operations.",
    activities: [
      "Acoustically survey with specialist software and hardware",
      "Post-process and analyse detections to project protocol",
      "Troubleshoot software and hardware"
    ],
    keyskills: [
      "Basic marine acoustics",
      "Knowing species' acoustic signatures",
      "Concentration over long days and several consecutive weeks"
    ],
    entryRoute: [
      "A recognised PAM operator course, often taken alongside MMO training",
      "Basic understanding of underwater acoustics and the calls of target species",
      "Comfort deploying, maintaining and troubleshooting equipment and software",
      "Offshore safety and medical certificates",
      "A science or engineering degree is common but not always required"
    ],
    workPattern: "Offshore contract work, typically several consecutive weeks on board with long monitoring shifts, much of it at night.",
    progression: [
      "Lead PAM operator",
      "PAM technician or equipment specialist",
      "Bioacoustician or acoustic analyst",
      "Acoustic survey project manager"
    ],
    models: [
      "lorenzo",
      "heather",
      "ashleigh"
    ]
  },

  {
    id: "acoustician",
    kind: "role",
    title: "Noise Monitoring Technician / Acoustician",
    summary: "Measure underwater noise and vibration from construction and operations to check it stays within limits.",
    setting: [
      "At sea / offshore",
      "Office / remote"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Acoustics & PAM",
      "Equipment & tech",
      "Data analysis & stats"
    ],
    lifestyle: [
      "Frequent travel"
    ],
    entry: [
      "Bachelor's",
      "Master's"
    ],
    overview: "Noise monitoring technicians and acousticians measure how loud human activities are underwater, from piling and drilling to shipping, and check them against permit limits and noise models. Their data feeds directly into how projects protect marine mammal hearing.",
    activities: [
      "On-site noise and vibration monitoring",
      "Calibrate monitoring equipment",
      "Technical support to the site team"
    ],
    keyskills: [
      "Understanding of marine acoustics",
      "Technical or engineering background",
      "Data collection and report writing"
    ],
    entryRoute: [
      "A degree in physics, engineering, acoustics, oceanography or marine science",
      "Understanding of underwater acoustics and noise metrics",
      "Practical skills with recorders, hydrophones and calibration",
      "Data analysis skills, ideally with MATLAB, Python or R"
    ],
    workPattern: "Field deployments and recoveries at sea, followed by office-based analysis and reporting. Travel is often at short notice.",
    progression: [
      "Senior acoustician",
      "Underwater noise modeller",
      "Acoustic project manager",
      "Technical director"
    ],
    models: [
      "lorenzo"
    ]
  },

  {
    id: "prof",
    kind: "role",
    title: "Professor / Lecturer",
    summary: "Teach the next generation and lead a research group.",
    setting: [
      "Classroom & public",
      "Office / remote",
      "Coast & field sites"
    ],
    sector: [
      "Academia"
    ],
    skills: [
      "Teaching & mentoring",
      "Fundraising & grants",
      "Data analysis & stats",
      "Communication & outreach"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "PhD"
    ],
    overview: "Lecturers and professors combine teaching with running a research programme. They secure funding, supervise graduate students, publish findings and often advise governments or international bodies. Marine mammal research groups are small and competitive, so most academics also build broader expertise in ecology, acoustics, genetics or statistics.",
    activities: [
      "Teach lectures and workshops",
      "Write journal articles and present at conferences",
      "Lead field research",
      "Supervise students and research staff",
      "Write grant applications"
    ],
    keyskills: [
      "Doctoral-level qualification",
      "Communicating with a wide range of audiences"
    ],
    entryRoute: [
      "A PhD in a relevant scientific discipline",
      "One or more postdoctoral positions to build a publication record",
      "Evidence of winning grants and teaching experience",
      "A network built through conferences, collaborations and societies"
    ],
    workPattern: "Based at a university, with teaching terms, field seasons and conference travel. Workload peaks around grant deadlines and teaching.",
    progression: [
      "Senior lecturer or associate professor",
      "Professor or head of department",
      "Research institute director",
      "Advisory roles with IWC, IUCN and government panels"
    ],
    models: [
      "els",
      "eric"
    ]
  },

  {
    id: "researcher",
    kind: "role",
    title: "Research Scientist",
    summary: "Design and run studies that answer open questions about marine mammal populations, behaviour and threats.",
    setting: [
      "Coast & field sites",
      "Office / remote",
      "Lab"
    ],
    sector: [
      "Academia",
      "Government",
      "NGO & charity"
    ],
    skills: [
      "Data analysis & stats",
      "Coding (R / Python)",
      "Fundraising & grants",
      "Report writing"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "PhD",
      "Master's"
    ],
    overview: "Research scientists design and run studies on marine mammal populations, behaviour, health and threats, in universities, government agencies or NGOs. The work spans fieldwork, lab or acoustic analysis, statistics and writing, and most of it happens at a desk. As Frances Robertson notes, field time may be under 10% of the job.",
    activities: [
      "Fieldwork and data analysis",
      "Write journal articles",
      "Bids and funding applications",
      "Supervise research assistants",
      "Raise conservation awareness"
    ],
    keyskills: [
      "Doctoral qualification usually required",
      "Planning and problem solving",
      "Managing budgets and winning grants",
      "Some coding"
    ],
    entryRoute: [
      "A master's degree for many assistant and analyst roles; a PhD to lead research",
      "Strong quantitative skills: statistics and coding in R or Python",
      "Field experience through internships, field-assistant posts or research cruises",
      "Publications and conference presentations"
    ],
    workPattern: "Mostly office or lab based with seasonal fieldwork. Contracts are often fixed-term and tied to grant funding.",
    progression: [
      "Senior or principal scientist",
      "Programme or lab lead",
      "Professor",
      "Science advisor to government or NGOs"
    ],
    models: [
      "eric",
      "els",
      "frances"
    ]
  },

  {
    id: "vet",
    kind: "role",
    title: "Wildlife / Aquatic Veterinarian",
    summary: "Diagnose and treat sick and injured marine mammals, in the clinic and on the beach.",
    setting: [
      "Animal care facility",
      "Coast & field sites"
    ],
    sector: [
      "Rescue & rehab",
      "Government",
      "Academia"
    ],
    skills: [
      "Veterinary & medical",
      "Hands-on animal care",
      "Communication & outreach"
    ],
    lifestyle: [
      "On-call / irregular hours",
      "Physically demanding",
      "Frequent travel"
    ],
    entry: [
      "PhD"
    ],
    overview: "Marine mammal veterinarians care for stranded, rehabilitating and managed-care animals. They anaesthetise, operate, diagnose and decide on treatment, often on a beach or in a pool, and contribute to population health research and stranding networks.",
    activities: [
      "Sedate animals for procedures",
      "Perform exams and surgery",
      "Provide intensive care",
      "Liaise with rehab facilities, officials and the public"
    ],
    keyskills: [
      "Treating animals in water with medical equipment",
      "Handling frightened or heavy animals",
      "Hard decisions about sick animals"
    ],
    entryRoute: [
      "A veterinary degree (such as DVM, VMD or BVSc) and a licence to practise",
      "Further training through internships or residencies in zoo, wildlife or aquatic animal medicine",
      "Hands-on experience at aquaria, rehabilitation centres or stranding networks, often while still a student",
      "Specialist courses such as the IAAAM or marine mammal medicine programmes"
    ],
    workPattern: "On-call work with emergencies at any hour, plus routine clinic and research duties. Physically demanding and sometimes emotionally hard.",
    progression: [
      "Senior or head veterinarian",
      "Director of an animal care or rescue facility",
      "Wildlife health researcher or academic",
      "Government wildlife health roles"
    ],
    models: [
      "pedro"
    ]
  },

  {
    id: "path",
    kind: "role",
    title: "Pathologist",
    summary: "Find out why animals died through necropsy and tissue analysis, and feed that into conservation.",
    setting: [
      "Lab"
    ],
    sector: [
      "Government",
      "Academia",
      "Rescue & rehab"
    ],
    skills: [
      "Veterinary & medical",
      "Genetics & lab methods"
    ],
    lifestyle: [
      "Physically demanding",
      "Mostly one base"
    ],
    entry: [
      "PhD"
    ],
    overview: "Pathologists find out why marine mammals died through necropsy (animal post-mortem) and lab analysis. Their findings reveal threats such as disease, pollution, entanglement, ship strike and noise, and feed into conservation management and stranding programmes.",
    activities: [
      "Prepare and perform necropsies",
      "Tissue preservation",
      "Manage cadaver receiving and disposal",
      "Maintain lab equipment and run safety inspections"
    ],
    keyskills: [
      "Physical stamina for heavy cadavers",
      "Willingness to work odd hours",
      "Safe use of dangerous equipment"
    ],
    entryRoute: [
      "A veterinary degree followed by specialist pathology training, or a PhD in a related field",
      "Experience assisting at necropsies, often through stranding networks",
      "Lab skills: histology, tissue sampling and preservation",
      "A strong stomach and good physical stamina"
    ],
    workPattern: "Lab based, with call-outs when fresh carcasses come in. Heavy, physical work with strict safety procedures.",
    progression: [
      "Senior pathologist",
      "Head of a stranding investigation programme",
      "Wildlife disease researcher"
    ],
    models: []
  },

  {
    id: "responder",
    kind: "role",
    title: "Stranding Responder / Rescue Coordinator",
    summary: "First on the scene at strandings, working through rescue, rehabilitation and release.",
    setting: [
      "Coast & field sites",
      "Animal care facility"
    ],
    sector: [
      "Rescue & rehab",
      "NGO & charity"
    ],
    skills: [
      "Hands-on animal care",
      "Communication & outreach",
      "Report writing"
    ],
    lifestyle: [
      "On-call / irregular hours",
      "Physically demanding"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "Stranding responders are the people who reach a beached or entangled animal first. They assess it, keep it alive, coordinate volunteers and authorities, and collect data. Many work for rescue NGOs or national stranding networks, often alongside a veterinary team.",
    activities: [
      "First response to strandings",
      "Fieldwork and data analysis",
      "Maintain vessels, vehicles and equipment",
      "Diet preparation and feeding",
      "Assist the veterinarian"
    ],
    keyskills: [
      "Physical and mental stamina",
      "Open-water diving helps",
      "Working on call",
      "Natural history and husbandry knowledge"
    ],
    entryRoute: [
      "Marine mammal medic or stranding response training, such as BDMLR in the UK or regional stranding networks",
      "Volunteering with a rescue or rehabilitation centre",
      "A biology degree helps for coordinator roles",
      "First aid, boat handling and open-water diving skills are an advantage"
    ],
    workPattern: "On call in all weather and at all hours, with physically demanding rescues. Many responders start as volunteers alongside other jobs.",
    progression: [
      "Stranding network coordinator",
      "Rehabilitation centre manager",
      "Founder or director of a rescue organisation",
      "Rescue trainer"
    ],
    models: [
      "pedro"
    ]
  },

  {
    id: "vettech",
    kind: "role",
    title: "Veterinary Technician",
    summary: "Keep patients going day to day: vital signs, samples, X-rays and prep for surgery.",
    setting: [
      "Animal care facility"
    ],
    sector: [
      "Rescue & rehab"
    ],
    skills: [
      "Veterinary & medical",
      "Hands-on animal care"
    ],
    lifestyle: [
      "Physically demanding",
      "Mostly one base"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "Veterinary technicians (veterinary nurses in some countries) keep patients going day to day. They monitor vital signs, prepare medications and samples, take X-rays, restrain animals and support the vet in surgery.",
    activities: [
      "Monitor vital signs and activity",
      "Dental procedures",
      "Prepare diagnostic samples",
      "Digital X-rays",
      "Restrain animals and administer anaesthesia"
    ],
    keyskills: [
      "Tracking specimens and medications",
      "Stamina",
      "Compassion with sick or dying animals"
    ],
    entryRoute: [
      "A veterinary technician or veterinary nursing qualification and registration",
      "Experience with exotic, wildlife or aquatic animals through internships or volunteering",
      "Good organisation for tracking samples and medications across many patients"
    ],
    workPattern: "Shift work at a rehabilitation centre, aquarium or clinic, sometimes including nights during busy stranding seasons.",
    progression: [
      "Senior or lead technician",
      "Animal care manager",
      "Specialist roles in anaesthesia or diagnostics"
    ],
    models: [
      "pedro"
    ]
  },

  {
    id: "trainer",
    kind: "role",
    title: "Marine Mammal Trainer",
    summary: "Train animals with positive reinforcement to support their care, and share them with the public.",
    setting: [
      "Animal care facility",
      "Classroom & public"
    ],
    sector: [
      "Rescue & rehab",
      "Eco-tourism"
    ],
    skills: [
      "Hands-on animal care",
      "Communication & outreach"
    ],
    lifestyle: [
      "Physically demanding",
      "Mostly one base"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "Marine mammal trainers use positive reinforcement to train animals for voluntary husbandry and medical procedures, as well as enrichment and public education. They also prepare diets and monitor the health and behaviour of the animals in their care.",
    activities: [
      "Train mammals",
      "Run public education programmes",
      "Plan nutrition and prepare food",
      "Record health and behaviour"
    ],
    keyskills: [
      "Patience with positive reinforcement",
      "Physical fitness",
      "Availability in all weather"
    ],
    entryRoute: [
      "A degree in biology, psychology or animal science is common",
      "Strong swimming ability; SCUBA certification is often required",
      "Internships or volunteering at aquaria or rehabilitation centres",
      "Confidence speaking to the public"
    ],
    workPattern: "Based at one facility with early starts, weekend work and physical work in and around water.",
    progression: [
      "Senior trainer",
      "Curator of marine mammals",
      "Animal welfare or behaviour specialist"
    ],
    models: [
      "pedro"
    ]
  },

  {
    id: "guide",
    kind: "role",
    title: "Wildlife Guide",
    summary: "Share whales and dolphins with passengers on tours and expedition ships, and help run the boat.",
    setting: [
      "At sea / offshore",
      "Classroom & public"
    ],
    sector: [
      "Eco-tourism"
    ],
    skills: [
      "Communication & outreach",
      "Visual survey & species ID"
    ],
    lifestyle: [
      "Long offshore rotations",
      "Physically demanding"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "Wildlife guides bring marine mammals to life for passengers on whale-watching boats and expedition cruises. They spot and identify animals, give talks, help the crew, and often collect sighting data for research projects.",
    activities: [
      "Educate passengers",
      "Collect data on sightings",
      "Bridge watch and assist the crew",
      "Maintain boats and equipment"
    ],
    keyskills: [
      "Delivering talks",
      "Valid licences and certifications",
      "Months on board",
      "Physical fitness"
    ],
    entryRoute: [
      "Strong species identification and natural history knowledge",
      "Public speaking experience",
      "Relevant tickets such as first aid, boat handling and sea survival",
      "Languages are a big advantage on cruise ships"
    ],
    workPattern: "Seasonal work, often months on board or in remote areas, with long days and physically active work.",
    progression: [
      "Expedition leader",
      "Expedition scientist",
      "Wildlife tour operator",
      "Research or outreach roles using the data and networks built"
    ],
    models: [
      "ashleigh",
      "daniella",
      "thea"
    ]
  },

  {
    id: "expsci",
    kind: "role",
    title: "Expedition Scientist",
    summary: "Run science programmes on expedition voyages while teaching guests what they're seeing.",
    setting: [
      "At sea / offshore",
      "Classroom & public"
    ],
    sector: [
      "Eco-tourism"
    ],
    skills: [
      "Communication & outreach",
      "Data analysis & stats",
      "Visual survey & species ID"
    ],
    lifestyle: [
      "Long offshore rotations",
      "Frequent travel"
    ],
    entry: [
      "Master's",
      "PhD"
    ],
    overview: "Expedition scientists run science programmes on expedition voyages, collecting data, supporting citizen science and teaching guests what they're seeing. The role suits people who love both research and communicating it.",
    activities: [
      "Fieldwork and data analysis",
      "Write papers",
      "Educate passengers"
    ],
    keyskills: [
      "Time in remote areas for months",
      "Detailed specialist knowledge",
      "Comfortable being filmed and photographed"
    ],
    entryRoute: [
      "A master's or PhD in a relevant field",
      "Fieldwork experience in remote environments",
      "Lecturing or outreach experience",
      "Comfort being filmed and photographed"
    ],
    workPattern: "Contract voyages lasting weeks to months, often in polar or remote regions, with limited connectivity.",
    progression: [
      "Lead scientist or expedition leader",
      "Science coordinator for an expedition company",
      "Academic or NGO research roles"
    ],
    models: []
  },

  {
    id: "envcons",
    kind: "role",
    title: "Environmental Consultant / Adviser",
    summary: "Advise developers and clients on environmental law, assessments and how to protect marine mammals.",
    setting: [
      "Office / remote",
      "Coast & field sites"
    ],
    sector: [
      "Consultancy"
    ],
    skills: [
      "Regulation & compliance",
      "Report writing",
      "Policy & management",
      "Communication & outreach"
    ],
    lifestyle: [
      "Mostly one base",
      "Frequent travel"
    ],
    entry: [
      "Bachelor's",
      "Master's"
    ],
    overview: "Environmental consultants advise developers, governments and other clients on how projects affect marine mammals and how to meet the law. They write impact assessments and mitigation plans, design surveys and interpret noise modelling, and they increasingly work on offshore renewables.",
    activities: [
      "Advise clients on legal requirements",
      "Support investigations with environmental lawyers",
      "Environmental assessments",
      "Field surveys and scientific reports"
    ],
    keyskills: [
      "Knowledge of environmental regulation",
      "Explaining science to non-technical people",
      "Ongoing liaison with clients, inspectors and regulators"
    ],
    entryRoute: [
      "A degree in marine biology, environmental science or similar; a master's is often preferred",
      "Field experience, often as an MMO, PAM operator or surveyor",
      "Knowledge of environmental legislation and impact assessment processes (EIA, HRA and similar)",
      "Strong report writing, plus GIS and data analysis"
    ],
    workPattern: "Mostly office based, with site visits, client meetings and occasional fieldwork. Deadlines can be tight.",
    progression: [
      "Senior or principal consultant",
      "Technical director",
      "Consultancy founder or partner",
      "Regulator or in-house environmental manager"
    ],
    models: [
      "ashleigh",
      "niru",
      "daniella"
    ]
  },

  {
    id: "ngo",
    kind: "role",
    title: "NGO Officer",
    summary: "Run campaigns, respond to consultations and bring the public into conservation.",
    setting: [
      "Office / remote",
      "Classroom & public"
    ],
    sector: [
      "NGO & charity"
    ],
    skills: [
      "Policy & management",
      "Communication & outreach",
      "Fundraising & grants",
      "Data analysis & stats"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Bachelor's",
      "Master's"
    ],
    overview: "NGO officers drive conservation from outside government and industry. They run campaigns, respond to consultations, raise funds, manage research and citizen-science projects, and recruit and support volunteers.",
    activities: [
      "Run and adapt sustainability campaigns",
      "Respond to national and international consultations",
      "Bids and funding applications",
      "Public outreach and volunteer projects"
    ],
    keyskills: [
      "Strong academic grounding",
      "Research and project management",
      "Writing and speaking to wide audiences"
    ],
    entryRoute: [
      "A relevant degree; a master's helps for policy and research roles",
      "Volunteering with the organisation or similar groups",
      "Strong writing and public speaking",
      "Project management and fundraising experience"
    ],
    workPattern: "Mostly office based with outreach events and some fieldwork. Funding can be uncertain.",
    progression: [
      "Project or programme lead",
      "Policy or campaigns manager",
      "Head of conservation or chief executive"
    ],
    models: [
      "thea"
    ]
  },

  {
    id: "repsci",
    kind: "role",
    title: "Reporting Scientist",
    summary: "Turn survey data into the reports that clients and regulators rely on.",
    setting: [
      "Office / remote"
    ],
    sector: [
      "Consultancy",
      "Industry"
    ],
    skills: [
      "Data analysis & stats",
      "Report writing",
      "Coding (R / Python)",
      "Teaching & mentoring"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Bachelor's",
      "Master's"
    ],
    overview: "Reporting scientists turn raw survey data into the reports clients and regulators rely on. They check data quality, run analyses, produce maps and figures, and write clearly to tight deadlines. It suits people who like data and writing more than long spells at sea.",
    activities: [
      "Analyse, interpret and present marine environmental data",
      "Work with stakeholders",
      "Mentor and train"
    ],
    keyskills: [
      "Accuracy under tight timescales",
      "Communicating at public and technical levels",
      "Programming is an advantage"
    ],
    entryRoute: [
      "A science degree with strong data skills",
      "Experience with Excel and databases; R, Python and GIS are a big advantage",
      "Field experience helps you understand the data you're working with",
      "Accurate, clear technical writing"
    ],
    workPattern: "Office based or remote, with regular hours but frequent deadlines.",
    progression: [
      "Senior reporting scientist",
      "Data manager",
      "Consultant or project manager"
    ],
    models: [
      "ashleigh"
    ]
  },

  {
    id: "d-bioacoustic",
    kind: "role",
    draft: true,
    title: "Bioacoustic Data Scientist",
    summary: "Build detectors and classifiers, often machine learning, that turn years of seafloor recordings into species occurrence and trends.",
    setting: [
      "Office / remote",
      "Lab"
    ],
    sector: [
      "Academia",
      "Government",
      "Consultancy"
    ],
    skills: [
      "Acoustics & PAM",
      "Coding (R / Python)",
      "Data analysis & stats"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Master's",
      "PhD"
    ],
    overview: "Long-term underwater recorders now collect years of sound, far more than anyone can listen to. Bioacoustic data scientists build automated detectors and machine-learning classifiers to find marine mammal calls in those recordings, then model when and where species occur.",
    activities: [
      "Process long-term recorder datasets",
      "Develop and validate automated detectors",
      "Model acoustic presence against environment",
      "Share code and data openly"
    ],
    keyskills: [
      "Python and R",
      "Signal processing",
      "Machine learning",
      "Large-data handling"
    ],
    entryRoute: [
      "A master's or PhD in marine science, acoustics, data science or engineering",
      "Strong Python and/or R; signal processing and machine learning",
      "Experience with acoustic analysis tools such as PAMGuard or Raven",
      "Knowledge of the calls of target species"
    ],
    workPattern: "Office based or remote, with occasional fieldwork to deploy recorders.",
    progression: [
      "Senior data scientist",
      "Acoustic programme lead",
      "Faculty or research leadership"
    ],
    models: [
      "lorenzo",
      "eric"
    ]
  },

  {
    id: "d-gov",
    kind: "role",
    draft: true,
    title: "Protected Species Biologist (Government)",
    summary: "Work inside the agencies that issue permits, run stock assessments and write recovery plans.",
    setting: [
      "Office / remote",
      "Coast & field sites"
    ],
    sector: [
      "Government"
    ],
    skills: [
      "Regulation & compliance",
      "Policy & management",
      "Report writing",
      "Data analysis & stats"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Bachelor's",
      "Master's"
    ],
    overview: "Government protected species biologists work inside the agencies that regulate human activities around marine mammals. They review permit applications, run or contribute to stock assessments, draft recovery plans and advise on policy.",
    activities: [
      "Review permit and consultation applications",
      "Contribute to stock assessments",
      "Draft recovery and management plans",
      "Coordinate with stakeholders and other agencies"
    ],
    keyskills: [
      "Knowing the relevant legislation",
      "Clear technical writing",
      "Weighing science and policy"
    ],
    entryRoute: [
      "A degree in biology or ecology; a master's is common",
      "Understanding of the relevant laws, such as the US Marine Mammal Protection Act and Endangered Species Act, or UK and EU habitats legislation",
      "Clear technical writing and data analysis skills",
      "Field or consultancy experience is valued"
    ],
    workPattern: "Office based with stable hours, occasional fieldwork and public meetings.",
    progression: [
      "Senior biologist or branch chief",
      "Policy advisor",
      "International delegate, for example to the IWC"
    ],
    models: [
      "frances",
      "eric"
    ]
  },

  {
    id: "d-uas",
    kind: "role",
    draft: true,
    title: "Drone (UAS) Pilot & Photogrammetry Analyst",
    summary: "Fly drones over whales to measure body condition, sample blow and run aerial surveys.",
    setting: [
      "Coast & field sites",
      "At sea / offshore",
      "Office / remote"
    ],
    sector: [
      "Academia",
      "Consultancy",
      "Government"
    ],
    skills: [
      "Drones & aerial survey",
      "Equipment & tech",
      "Data analysis & stats",
      "Visual survey & species ID"
    ],
    lifestyle: [
      "Frequent travel"
    ],
    entry: [
      "Certificate / training",
      "Bachelor's"
    ],
    overview: "Drones have changed marine mammal research. UAS pilots fly over whales to measure body size and condition through photogrammetry, collect blow samples for health studies, and run aerial surveys that are safer and cheaper than crewed aircraft.",
    activities: [
      "Plan and fly survey and photogrammetry flights",
      "Measure body length and condition",
      "Collect blow samples",
      "Review aerial imagery"
    ],
    keyskills: [
      "Remote pilot licence",
      "Image analysis",
      "Field logistics"
    ],
    entryRoute: [
      "A remote pilot licence for your country and any research permits needed to fly near marine mammals",
      "Image analysis skills; photogrammetry software and R or Python",
      "Boat-based field experience",
      "A biology degree for research roles"
    ],
    workPattern: "Field seasons on small boats or remote coasts, followed by long periods of image processing.",
    progression: [
      "Lead drone pilot or field coordinator",
      "Aerial survey specialist with consultancies",
      "Research scientist"
    ],
    models: [
      "ashleigh",
      "frances"
    ]
  },

  {
    id: "d-photoid",
    kind: "role",
    draft: true,
    title: "Photo-ID & Research Technician",
    summary: "Keep long-term studies running: boat surveys, photo matching and catalogue upkeep.",
    setting: [
      "Coast & field sites",
      "Office / remote"
    ],
    sector: [
      "Academia",
      "NGO & charity"
    ],
    skills: [
      "Visual survey & species ID",
      "Data analysis & stats",
      "Equipment & tech"
    ],
    lifestyle: [
      "Physically demanding"
    ],
    entry: [
      "Bachelor's"
    ],
    overview: "Photo-ID and research technicians keep long-term studies running. They help run small-boat surveys, photograph fins and flukes, match individuals across catalogues, and manage the databases that decades of research depend on.",
    activities: [
      "Small-boat surveys",
      "Match individuals across photo catalogues",
      "Manage databases",
      "Support visiting researchers"
    ],
    keyskills: [
      "Sharp eye for detail",
      "Boat handling",
      "Database skills"
    ],
    entryRoute: [
      "A biology degree",
      "Small-boat experience and a powerboat licence",
      "Photography skills and a sharp eye for detail",
      "Database and spreadsheet skills"
    ],
    workPattern: "Seasonal fieldwork on the water plus office-based matching and data management.",
    progression: [
      "Field station manager",
      "Research coordinator",
      "Graduate research"
    ],
    models: [
      "thea"
    ]
  },

  {
    id: "d-scicomm",
    kind: "role",
    draft: true,
    title: "Science Communicator / Educator",
    summary: "Translate marine mammal science for schools, museums, aquaria and online audiences.",
    setting: [
      "Classroom & public",
      "Office / remote"
    ],
    sector: [
      "NGO & charity",
      "Eco-tourism",
      "Academia"
    ],
    skills: [
      "Communication & outreach",
      "Teaching & mentoring"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Bachelor's"
    ],
    overview: "Science communicators translate marine mammal science for schools, museums, aquaria, tour operators and online audiences. They design education programmes, produce content, and run citizen-science projects that turn public interest into real data.",
    activities: [
      "Design education programmes",
      "Write and produce content",
      "Run citizen-science projects",
      "Train volunteers"
    ],
    keyskills: [
      "Writing and presenting",
      "Audience awareness",
      "Media and digital tools"
    ],
    entryRoute: [
      "A science degree, sometimes with a science communication qualification",
      "A portfolio of writing, talks, videos or social media",
      "Volunteering in outreach or education",
      "Teaching or guiding experience"
    ],
    workPattern: "Mostly office or venue based with events, school visits and some evening and weekend work.",
    progression: [
      "Education or outreach manager",
      "Communications lead for a research body or NGO",
      "Freelance writer, presenter or producer"
    ],
    models: [
      "thea",
      "frances"
    ]
  },

  {
    id: "d-msp",
    kind: "role",
    draft: true,
    title: "Marine Spatial Planner",
    summary: "Map where animals and human activities overlap to site wind farms, shipping lanes and protected areas.",
    setting: [
      "Office / remote"
    ],
    sector: [
      "Government",
      "Consultancy"
    ],
    skills: [
      "GIS & mapping",
      "Policy & management",
      "Data analysis & stats"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Master's"
    ],
    overview: "Marine spatial planners map where marine mammals and human activities overlap, so that wind farms, shipping lanes, fisheries and protected areas can be placed to reduce harm.",
    activities: [
      "Build habitat and risk maps",
      "Assess cumulative impacts",
      "Support stakeholder consultations"
    ],
    keyskills: [
      "Advanced GIS",
      "Species distribution modelling",
      "Stakeholder engagement"
    ],
    entryRoute: [
      "A master's in marine planning, GIS, ecology or a related field",
      "Advanced GIS and species distribution modelling",
      "Understanding of planning and consenting processes",
      "Stakeholder engagement skills"
    ],
    workPattern: "Office based with workshops and stakeholder meetings.",
    progression: [
      "Senior planner",
      "Marine policy lead",
      "Consultancy technical director"
    ],
    models: [
      "frances"
    ]
  },

  {
    id: "d-fobs",
    kind: "role",
    draft: true,
    title: "Fisheries Observer (bycatch)",
    summary: "Ride on fishing vessels to record catch and marine mammal bycatch that informs management.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Government",
      "Industry"
    ],
    skills: [
      "Visual survey & species ID",
      "Report writing",
      "Regulation & compliance"
    ],
    lifestyle: [
      "Long offshore rotations",
      "Physically demanding"
    ],
    entry: [
      "Bachelor's"
    ],
    overview: "Fisheries observers live and work aboard commercial fishing vessels, recording catch and any marine mammal, seabird or turtle bycatch. Their data is central to managing fisheries and reducing bycatch.",
    activities: [
      "Record catch and protected species interactions",
      "Collect biological samples",
      "Report to fisheries managers"
    ],
    keyskills: [
      "Species ID",
      "Resilience at sea",
      "Careful data recording"
    ],
    entryRoute: [
      "A degree in biology or fisheries science is usually required",
      "The observer training programme run by your national fisheries agency",
      "Sea survival and safety certification",
      "Resilience and good physical fitness"
    ],
    workPattern: "Trips of days to weeks on working fishing boats, often in tough conditions with limited privacy.",
    progression: [
      "Observer coordinator or trainer",
      "Fisheries biologist",
      "Protected species or bycatch specialist"
    ],
    models: []
  },

  {
    id: "niru",
    kind: "person",
    person: "Niru Dorian",
    title: "Senior Environmental Advisor & Marine Mammal Biologist",
    summary: "Supervises and standardises environmental work across projects in sensitive protected areas.",
    setting: [
      "At sea / offshore",
      "Coast & field sites",
      "Office / remote"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Leadership & project mgmt",
      "Report writing",
      "GIS & mapping",
      "Regulation & compliance",
      "Visual survey & species ID",
      "Acoustics & PAM"
    ],
    lifestyle: [
      "Frequent travel",
      "Long offshore rotations"
    ],
    entry: [
      "Bachelor's",
      "Certificate / training"
    ],
    role: [
      "Supervises, trains, standardises and supports all environmental initiatives across multiple projects in sensitive protected marine and terrestrial areas.",
      "Travels regularly between offshore, transition-zone and land surveys that need stringent environmental management planning and permitting oversight.",
      "Manages compliance and quality control of the marine fauna monitoring and mitigation team on behalf of the client, and writes protocols, waste-reduction and sustainability initiatives for crews to adopt."
    ],
    education: [
      "BSc(Hons) Marine Biology",
      "Environmental Clerk of Work",
      "MMO, MMS and PAM Operator",
      "Advanced Marine Mammal Medic",
      "BOSIET, STCW95"
    ],
    path: [
      "Marine Environmental Consultant (MMO/PAM/EIA)",
      "Marine Mammal Biologist & co-founding Director (Whalefish)",
      "Environmental Advisor (Sakhalin Energy / Shell)",
      "Environmental Advisor / Head of Department (Seabed Geosolutions)",
      "Senior Environmental Advisor (ADNOC)"
    ],
    keyskills: [
      "Leadership and project management",
      "Report writing and databases",
      "GIS",
      "Auditing and quality control",
      "Representing clients to regulators"
    ],
    drivers: "Working with marine mammals and other megafauna is genuinely a dream come true, and travelling worldwide to work in remote environments and protected areas is a privilege. The world is starting to shift into carbon-neutral and carbon-negative industries, and the renewables sector is booming with development planned in many areas. Newcomers should expect exciting prospects and opportunities ahead in environmental consulting.",
    challenges: "Working away from home for several months at a time and in harsh environments can take its toll. But it's possible to make significant positive changes in attitudes and sustainability practices on projects and within industries. Knowing you've contributed to that impact and helped inspire changes in behaviour makes it very rewarding."
  },

  {
    id: "diana",
    kind: "person",
    person: "Diana Antochiw",
    title: "Marine Mammal Consultant (MMO/PSO/MMO Trainer)",
    summary: "Monitors geophysical projects and trains new PSOs.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Industry",
      "Consultancy"
    ],
    skills: [
      "Visual survey & species ID",
      "Teaching & mentoring",
      "Leadership & project mgmt",
      "Regulation & compliance",
      "Hands-on animal care"
    ],
    lifestyle: [
      "Long offshore rotations"
    ],
    entry: [
      "Master's"
    ],
    role: [
      "Conducts monitoring duties and trains new Protected Species Observers (PSOs).",
      "Responsible for the correct implementation of marine mammal and protected species monitoring during geophysical projects.",
      "Conducts and coordinates monitoring tasks and reports, including data quality control and timely delivery.",
      "Guides students in developing the skills they need to work safely as PSOs and comply with environmental regulations."
    ],
    education: [
      "BSc Biology",
      "ScM Marine Biology (marine ecology)",
      "Stranding response, MMO and PSO training"
    ],
    path: [
      "Monitoring on Mexican Navy oceanography vessels",
      "MMO/PSO for Lamont-Doherty Earth Observatory seismic research",
      "Marine environmental consultant",
      "Several MMO/PSO consultancies and PSO training"
    ],
    keyskills: [
      "Species ID and monitoring",
      "Designing monitoring programmes",
      "Leadership",
      "Conflict management",
      "Mentoring"
    ],
    drivers: "Working as an MMO/PSO is challenging in many ways. The job isn't always well understood or appreciated, but it is necessary to help balance development and conservation, which is why performing it as well as possible matters. Interpersonal skills are useful, but most of all you need to keep learning, both new things and from mistakes.",
    challenges: "Staying objective when ensuring compliance while still helping the project perform as well as possible. And communicating with the client when project goals conflict with mitigation procedures, in a way that helps them find the best solution for both the project and the environment."
  },

  {
    id: "pedro",
    kind: "person",
    person: "Pedro S. Baranda",
    title: "Founder & Director, MMR4 (Research, Rescue, Rehabilitation & Release)",
    summary: "First responder for stranded and injured animals, and trainer of rescue teams worldwide.",
    setting: [
      "Animal care facility",
      "Coast & field sites"
    ],
    sector: [
      "Rescue & rehab",
      "NGO & charity"
    ],
    skills: [
      "Hands-on animal care",
      "Veterinary & medical",
      "Teaching & mentoring",
      "Fundraising & grants"
    ],
    lifestyle: [
      "On-call / irregular hours",
      "Physically demanding",
      "Frequent travel"
    ],
    entry: [
      "Bachelor's"
    ],
    role: [
      "First responder for stranded and injured animals: treats injuries and manages diets, including assisted feeding for weak and injured animals.",
      "Trains other rescue, rehabilitation and release teams around the world.",
      "Decides when, where and how animals are released back to the wild."
    ],
    education: [
      "BSc Marine Biology",
      "Diplomas in marine animal medicine, rescue and captive management",
      "Master's in Diving",
      "30 years' experience in twelve countries"
    ],
    path: [
      "Atlántida Dolphinarium (Mexico)",
      "Underwater Explorers Society (Bahamas)",
      "Zeehondencrèche (Netherlands)",
      "Seal Rescue Ireland",
      "Riverhead Foundation (USA)",
      "Founder & Director, MMR4 (Marine Mammals Research, Rescue, Rehabilitation and Release)"
    ],
    keyskills: [
      "Spotting what's wrong with an animal",
      "Choosing medications, diets and enrichment",
      "Human first aid",
      "Deciding when and where to release"
    ],
    drivers: "After thirty years in the field the work still feels brand new. He goes wherever he's needed to help teams learn or improve their rescue and rehabilitation protocols, from big whales to baby seals. It is demanding: an orphaned seal pup may have no chance without you, and you must be on hand at all hours. But watching an animal recover and then seeing a big, healthy animal go back to sea is the best feeling in the world. The more we know about our world, the better we can protect it.",
    challenges: "Funding is one of the biggest challenges. Rescue is expensive, from medicines and food to transport, fees, staff and electricity. People can be a challenge too: well-meaning members of the public can hurt or even kill animals, so education is badly needed. Thrashing animals, hard-to-reach rescue sites in rough seas, short staffing and long hours beside fragile patients mean tiredness is common, but that's part of the job's charm."
  },

  {
    id: "lorenzo",
    kind: "person",
    person: "Lorenzo Scala",
    title: "Bioacoustician & Project Manager",
    summary: "Designs acoustic and visual detection systems for wildlife mitigation and advises on noise surveys.",
    setting: [
      "Office / remote",
      "At sea / offshore"
    ],
    sector: [
      "Consultancy",
      "Industry"
    ],
    skills: [
      "Acoustics & PAM",
      "Leadership & project mgmt",
      "Equipment & tech",
      "Data analysis & stats",
      "Teaching & mentoring"
    ],
    lifestyle: [
      "Frequent travel"
    ],
    entry: [
      "Master's"
    ],
    role: [
      "Manages survey design, installation and integration of acoustic and visual detection systems for protected wildlife mitigation and monitoring.",
      "Advises on acoustic surveys for measuring and monitoring anthropogenic (human-made) sound.",
      "Analyses acoustic data, writes reports, and acts as technical liaison supporting field operations for marine sound surveys.",
      "Develops and delivers mentoring, support and training for environmental consultants."
    ],
    education: [
      "MSc Marine and Fisheries Science (Aberdeen)",
      "BSc(Hons) Marine Biology (Stirling)",
      "FOET, HUET, STCW95",
      "MMO/PSO/PAM training"
    ],
    path: [
      "Environmental Consultant (MMO/PAM)",
      "Co-founder and Technical Director, Whalefish",
      "Project Manager, Seiche"
    ],
    keyskills: [
      "PAM technology",
      "Acoustic survey design",
      "Acoustic data analysis",
      "Operational risk assessment"
    ],
    drivers: "An interest in technology combined with a passion for the marine environment, conservation and animal welfare makes for challenging but rewarding work that shapes the relationship between industrial development and scientific study. The shift from fossil fuels to renewable energy is opening up a whole host of opportunities for marine scientists.",
    challenges: "Technology keeps developing, and so do client requirements. The job means designing bespoke solutions that meet client needs while keeping survey techniques, data collection and analysis to a high standard. He's often asked to travel globally at short notice for unknown lengths of time, so finding a good work–life balance is important."
  },

  {
    id: "thea",
    kind: "person",
    person: "Thea Taylor",
    title: "Project Lead, Sussex Dolphin Project (World Cetacean Alliance)",
    summary: "Leads a local dolphin project, its staff and its volunteers.",
    setting: [
      "Coast & field sites",
      "Classroom & public"
    ],
    sector: [
      "NGO & charity"
    ],
    skills: [
      "Leadership & project mgmt",
      "Communication & outreach",
      "Fundraising & grants"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "Bachelor's"
    ],
    role: [
      "Creates a dynamic, productive working environment for staff and volunteers.",
      "Makes sure project targets are met.",
      "Writes finance and progress reports."
    ],
    education: [
      "Degree in Marine Biology",
      "Master's in progress (University of Brighton)"
    ],
    path: [
      "Volunteering with Hebridean Whale and Dolphin Trust and Marine Conservation Research International",
      "Sussex Dolphin Project"
    ],
    keyskills: [
      "Working with each person differently",
      "Getting the best from a team",
      "Persistence and patience"
    ],
    drivers: "Experience matters most: she volunteered for five years across a range of organisations before landing her first paid role. She went to university to study phytoplankton, but a whale-watching field trip in Portugal changed everything. She loves the wonder dolphins bring to an area where few people know they're there, and how quickly people's view of their local waters changes. Her advice: volunteer to gain experience and find out what you're good at, take extra courses, join webinars and focus groups, and get your name out there.",
    challenges: "Conservation moves either very fast or at a snail's pace, with no middle ground. Getting scientists and organisations to work together can feel like herding cats. Funding, and low awareness of how important local ecosystems are, are big challenges too."
  },

  {
    id: "daniella",
    kind: "person",
    person: "Daniella Bordon",
    title: "Environment and Sustainability Manager",
    summary: "Manages environmental and sustainability aspects of seismic operations worldwide.",
    setting: [
      "Office / remote",
      "At sea / offshore"
    ],
    sector: [
      "Industry"
    ],
    skills: [
      "Regulation & compliance",
      "Leadership & project mgmt",
      "Communication & outreach",
      "Policy & management"
    ],
    lifestyle: [
      "Frequent travel"
    ],
    entry: [
      "Master's"
    ],
    role: [
      "Manages the environmental and sustainability aspects of seismic operations worldwide.",
      "Oversees permit applications and coordinates Environmental Impact Assessments.",
      "Ensures compliance with country and client requirements and manages environmental staff.",
      "Prepares project plans such as waste management and flora and fauna management plans, and is the client contact for environmental and sustainability matters."
    ],
    education: [
      "BSc Biology",
      "Master's in Development Practice",
      "International Diploma in Environmental Management",
      "ISO 14001 auditor, NEBOSH, IOSH"
    ],
    path: [
      "Researcher and whale-watch guide (Wild Dolphin Foundation, Hawaii)",
      "MMO and Environmental Advisor",
      "Environmental Coordinator (RXT)",
      "QHSE Manager (Oceangeo)",
      "Environment & Sustainability Manager (ION, BGP Offshore)"
    ],
    keyskills: [
      "Communication",
      "Problem solving",
      "Translating science into plain language",
      "Selling environmental initiatives"
    ],
    drivers: "The oil and gas industry has a huge impact on flora, fauna and climate, and most companies lack qualified, passionate environmental management staff.",
    challenges: "Getting non-environmental staff to care about the cause. Selling environmental initiatives where legislation and client requirements are weak. Being seen as an annoyance by operations-focused staff. And managing too many projects at once with little support."
  },

  {
    id: "els",
    kind: "person",
    person: "Els Vermeulen",
    title: "Research Manager, Mammal Research Institute Whale Unit (University of Pretoria)",
    summary: "Runs a university whale research unit: projects, funding, students and lecturing.",
    setting: [
      "Coast & field sites",
      "Office / remote",
      "Classroom & public"
    ],
    sector: [
      "Academia"
    ],
    skills: [
      "Data analysis & stats",
      "Fundraising & grants",
      "Teaching & mentoring",
      "Policy & management",
      "Leadership & project mgmt"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "PhD"
    ],
    role: [
      "Manages the Mammal Research Institute Whale Unit in the Department of Zoology and Entomology, University of Pretoria.",
      "Leads scientific research: project development, raising funds, running projects, analysing data and writing papers.",
      "Supervises students, lectures, fundraises and networks."
    ],
    education: [
      "Postdoctoral Fellow (x2)",
      "PhD Zoology",
      "MSc Environmental Biology",
      "JNCC MMO, PAM, PSO, STCW95, HUET"
    ],
    path: [
      "Co-founding Director, Whalefish",
      "Co-Director, Sea Search",
      "IUCN Cetacean Specialist Group",
      "IWC Scientific Committee",
      "Lecturer and Research Manager, University of Pretoria"
    ],
    keyskills: [
      "Conservation management and policy",
      "Population biology",
      "Cetacean fieldwork",
      "Environmental consulting"
    ],
    drivers: "A deep-rooted passion for marine mammals and for research and management. Understanding these animals better, and using that knowledge to improve conservation management in a heavily human-impacted world, is what keeps her going.",
    challenges: "Academia can bring high pressure (publish or perish) and financial insecurity, both for her own income and for the funding needed to run research projects."
  },

  {
    id: "frances",
    kind: "person",
    person: "Frances Robertson",
    title: "Marine Program Coordinator, San Juan County (Washington, USA)",
    summary: "Manages nearshore restoration and habitat monitoring and leads community outreach.",
    setting: [
      "Office / remote",
      "Coast & field sites",
      "Classroom & public"
    ],
    sector: [
      "Government"
    ],
    skills: [
      "Leadership & project mgmt",
      "Communication & outreach",
      "Coding (R / Python)",
      "Policy & management",
      "Report writing"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "PhD"
    ],
    role: [
      "Manages mostly nearshore restoration projects for San Juan County, Washington.",
      "Monitors sensitive marine habitats and works on marine infrastructure.",
      "Leads community and regional outreach and education efforts."
    ],
    education: [
      "BSc Zoology (Aberdeen)",
      "MRes Marine and Fisheries Science (Aberdeen)",
      "PhD Zoology (UBC)",
      "JNCC and Gulf of Mexico MMO, BOSIET/HUET"
    ],
    path: [
      "Volunteering across non-profit, consulting, academia and government",
      "Remote field-camp assistant",
      "Offshore MMO",
      "Leading aerial survey crews",
      "Co-created Women in Marine Mammal Science",
      "Marine Program Coordinator, San Juan County, Washington"
    ],
    keyskills: [
      "Communication",
      "Report writing",
      "Coding in R",
      "Budgeting",
      "Ability to achieve change"
    ],
    drivers: "Marine mammal science needs perseverance and flexibility. Choose internships and volunteering carefully based on your interests, and avoid unpaid positions where you can, because they are a real barrier for many people. Fieldwork is the fun part, but researchers may spend less than 10% of their time in the field. She has found she enjoys public service and is good at it, skills not necessarily learned in graduate school. She does less analysis than during her PhD and postdoc, but now leads projects that identify and address impacts directly, which she finds more rewarding.",
    challenges: "The field is extremely competitive, with few jobs and many applicants, which is partly why her role is now more general. Much of her county work isn't directly about marine mammals, so she has learned new systems such as nearshore restoration on the fly. The hardest part is addressing human behaviour, for example educating boaters about their impact on Southern Resident killer whales. Ecologists are rarely taught how to deal with human-driven issues, yet it is essential."
  },

  {
    id: "eric",
    kind: "person",
    person: "Eric Archer",
    title: "Program Lead, Marine Mammal Genetics (NOAA)",
    summary: "Plans and leads marine mammal genetics research at NOAA's Southwest Fisheries Science Center.",
    setting: [
      "Lab",
      "Office / remote"
    ],
    sector: [
      "Government",
      "Academia"
    ],
    skills: [
      "Genetics & lab methods",
      "Coding (R / Python)",
      "Data analysis & stats",
      "Teaching & mentoring",
      "Leadership & project mgmt"
    ],
    lifestyle: [
      "Mostly one base"
    ],
    entry: [
      "PhD"
    ],
    role: [
      "Plans and runs marine mammal genetics projects in the Marine Mammal and Turtle Division at NOAA's Southwest Fisheries Science Center.",
      "Conducts research: plans projects, analyses data, and writes and edits papers.",
      "Collaborates with other researchers, supervises students and interns, and does outreach."
    ],
    education: [
      "PhD Marine Biology",
      "BA Biology"
    ],
    path: [
      "Research Analyst, MMGP/SWFSC",
      "US Delegate, IWC Scientific Committee",
      "Adjunct Professor, Scripps",
      "Leader, Marine Mammal Genetics Program"
    ],
    keyskills: [
      "Programming",
      "Statistical analysis and simulation",
      "Teaching",
      "Project management"
    ],
    drivers: "Curiosity lights the spark, and passion keeps the fire going. He feels very lucky to be in this field and loves the challenge of studying such dynamic, specialised animals as cetaceans. Because marine mammals are so hard to study, the field's future belongs to a new generation of quantitative researchers who can handle much larger, integrated datasets.",
    challenges: "Balancing everything that makes him whole. Research can become all-consuming, and other people will take all the time you give them. He has to keep reminding himself that he's more than just the job."
  },

  {
    id: "heather",
    kind: "person",
    person: "Heather Fowle",
    title: "Marine Mammal Consultant (MMO/PSO/MMS)",
    summary: "Advises industrial projects on correct mitigation and interprets licence conditions.",
    setting: [
      "At sea / offshore"
    ],
    sector: [
      "Consultancy",
      "Industry"
    ],
    skills: [
      "Visual survey & species ID",
      "Acoustics & PAM",
      "Regulation & compliance",
      "Report writing",
      "Communication & outreach"
    ],
    lifestyle: [
      "Long offshore rotations",
      "Frequent travel"
    ],
    entry: [
      "Bachelor's",
      "Certificate / training"
    ],
    role: [
      "Advises on the correct mitigation methods on industrial projects.",
      "Interprets licence conditions and reports all findings accurately and concisely.",
      "Explains mitigation to the project team so she can answer questions and make sure surveys and operations are properly managed."
    ],
    education: [
      "BSc(Hons) Applied Marine Biology",
      "RMarSci IMarEST",
      "JNCC MMO, BOEM PSO, PAM",
      "BOSIET, FOET"
    ],
    path: [
      "MMOA",
      "Marinelife",
      "BDMLR",
      "Environment Agency",
      "Marine Mammal Consultant (MMO/PSO/MMS)"
    ],
    keyskills: [
      "Interpreting licence conditions, EIA and MMP",
      "Spotting marine fauna",
      "Species' acoustic sensitivities",
      "PAMGuard and troubleshooting"
    ],
    drivers: "A passion for marine conservation, biodiversity and marine mammals. If you care about marine wildlife and want to make a difference, this is a good way to be involved. The work is varied and she has travelled the world doing it, from baseline surveys to ROV surveys, wind farms and seismic work.",
    challenges: "You have to be ready to give advice on the spot, so be prepared. You also have to be away from home for long periods and live with uncertain work."
  },

  {
    id: "ashleigh",
    kind: "person",
    person: "Ashleigh Kitchiner",
    title: "Senior Marine Mammal Consultant, APEM",
    summary: "Writes assessments and mitigation plans, designs surveys and manages field staff.",
    setting: [
      "Office / remote",
      "At sea / offshore"
    ],
    sector: [
      "Consultancy"
    ],
    skills: [
      "Data analysis & stats",
      "Leadership & project mgmt",
      "Regulation & compliance",
      "Report writing",
      "Teaching & mentoring",
      "Drones & aerial survey"
    ],
    lifestyle: [
      "Frequent travel"
    ],
    entry: [
      "Master's"
    ],
    role: [
      "Writes assessments and mitigation plans, designs surveys and manages field staff.",
      "Analyses and models population data, interprets it and writes reports.",
      "Manages projects and liaises with clients, including site visits.",
      "Contributes to tenders (costing and technical sections) and mentors junior staff."
    ],
    education: [
      "MRes Marine Mammal Genetics, BSc(Hons) Biology",
      "JNCC MMO, BSEE/BOEM PSO, PAM",
      "BOSIET with CA-EBS"
    ],
    path: [
      "Research project volunteer and whale-watch guide",
      "MMO/PAM Operator and report writer",
      "Wildlife Officer (Hebrides) and cruise Wildlife Guide",
      "Freelance Lead MMO/PAM Operator",
      "Senior Marine Mammal Consultant, APEM"
    ],
    keyskills: [
      "Marine mammal survey experience",
      "Policy and legislation",
      "Impact assessment (EIA, HRA, SEA, PEIR)",
      "Underwater noise modelling"
    ],
    drivers: "This industry is the best of both worlds. She safeguards marine mammals from disturbance and injury, designs surveys for effective data collection, and creates mitigation plans that protect animals from human activities. Consultancy brings variety: biosecurity assessments, identifying marine mammals in digital aerial survey footage, marine mammal assessments and much more.",
    challenges: "The industry is growing, so the number and variety of opportunities can feel overwhelming; get broad experience to find what suits you. Newly qualified MMO/PAM operators can find it hard to get work, so network, because experienced consultants often hear about projects and can recommend you. Expect 6+ weeks away, working 12-hour days, seven days a week. You'll meet people with very different views: stay professional, and if you feel unsafe, say STOP, talk to someone on board, or get support from organisations like the Marine Mammal Observer Association and IMarEST."
  }
];

window.PRESETS = [
  {
    label: "I love tech and the sea",
    sel: {
      setting: [
        "At sea / offshore"
      ],
      skills: [
        "Acoustics & PAM",
        "Equipment & tech"
      ]
    }
  },
  {
    label: "Hands-on with animals",
    sel: {
      skills: [
        "Hands-on animal care",
        "Veterinary & medical"
      ]
    }
  },
  {
    label: "Office-based, data & code",
    sel: {
      setting: [
        "Office / remote"
      ],
      skills: [
        "Coding (R / Python)",
        "Data analysis & stats"
      ]
    }
  },
  {
    label: "Policy & protection",
    sel: {
      sector: [
        "Government"
      ],
      skills: [
        "Policy & management",
        "Regulation & compliance"
      ]
    }
  },
  {
    label: "Fastest way in",
    sel: {
      entry: [
        "Certificate / training"
      ]
    }
  }
];
