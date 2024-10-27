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
}
    ];

    const savedNotes = loadFromLocalStorage() || [];
    const existingIds = new Set(defaultNotes.map(note => note.id));
    const uniqueSavedNotes = savedNotes.filter(note => !existingIds.has(note.id));

    return [...defaultNotes, ...uniqueSavedNotes];
}

// Initialize notes array
let notes = getMergedNotes();

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

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    renderNotes(searchTerm);
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
        pinned: false
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

function showForm(editId = null) {
    // Prevent editing of default notes
    if (editId === '20241026-100000-000-0001' || editId === '20241026-100100-000-0002') {
        alert('Default notes cannot be edited.');
        return;
    }

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
            notes[index] = {
                ...notes[index],
                title,
                subtitle,
                content,
                lastModified: new Date().toISOString()
            };
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

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function toggleContent(contentId, noteId) {
    const contentElement = document.getElementById(contentId);
    const note = notes.find(n => n.id === noteId);
    const isExpanded = contentElement.style.maxHeight === 'none';
    
    if (isExpanded) {
        contentElement.style.maxHeight = '100px';
        contentElement.innerHTML = `
            ${note.content.substring(0, 200)}...
            <span class="read-more" onclick="toggleContent('${contentId}', '${noteId}')">
                <i class="fas fa-ellipsis-h"></i>
            </span>
        `;
    } else {
        contentElement.style.maxHeight = 'none';
        contentElement.innerHTML = `
            ${note.content}
            <span class="read-more" onclick="toggleContent('${contentId}', '${noteId}')">
                <i class="fas fa-chevron-up"></i>
            </span>
        `;
    }
}

function deleteNote(id) {
    // Prevent deletion of default notes
    if (id === '20241026-100000-000-0001' || id === '20241026-100100-000-0002') {
        alert('Default notes cannot be deleted.');
        return;
    }

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
        
        noteElement.innerHTML = `
            <div class="card h-100 ${note.pinned ? 'pinned' : ''}">
                <div class="card-body">
                    <div class="note-number mb-2 text-muted">
                        <small>Note #${note.id}</small>
                    </div>
                    <h5 class="card-title">${highlightText(note.title, searchTerm)}</h5>
                    <h6 class="card-subtitle mb-2 text-decoration-underline">${highlightText(note.subtitle, searchTerm)}</h6>
                    <div class="card-text ${isLongContent ? 'truncate-content' : ''}" id="${contentId}" style="color: black;">
                        ${highlightText(truncatedContent, searchTerm)}
                        ${isLongContent ? `
                            <span class="read-more" onclick="toggleContent('${contentId}', '${note.id}')">
                                <i class="fas fa-ellipsis-h"></i>
                            </span>
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
}

//  initialization 
document.addEventListener('DOMContentLoaded', function() {
    // Hide form section on initial load
    document.getElementById('formSection').style.display = 'none';
    
    // Load and render notes
    notes = getMergedNotes();
    renderNotes();
});
