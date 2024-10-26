
// Add this at the top of script.js
function generateUniqueId() {
    const now = new Date();
    
    // Format: YYYYMMDD-HHMMSS-milliseconds-random
    const dateStr = now.getFullYear().toString() +
                   (now.getMonth() + 1).toString().padStart(2, '0') +
                   now.getDate().toString().padStart(2, '0');
    
    const timeStr = now.getHours().toString().padStart(2, '0') +
                   now.getMinutes().toString().padStart(2, '0') +
                   now.getSeconds().toString().padStart(2, '0');
    
    const millisStr = now.getMilliseconds().toString().padStart(3, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    return `${dateStr}-${timeStr}-${millisStr}-${random}`;
}

// Example IDs will look like:
// 20241026-143022-234-4527  (October 26, 2024, 14:30:22, 234 milliseconds, random number 4527)

// Update the default notes array with new ID format
let notes = [
    {
        id: '20241026-100000-000-0001',  // Example fixed ID for first note
        noteNumber: "001",
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
        id: '20241026-100100-000-0002',  // Example fixed ID for second note
        noteNumber: "002",
        title: "Important Features",
        subtitle: "What's New",
        content: "1. Colorful note cards\n2. Search functionality\n3. Copy data feature\n4. Pin important notes\n5. Edit and delete options",
        created: "2024-10-26T10:01:00.000Z",
        lastModified: "2024-10-26T10:01:00.000Z",
        category: "Features",
        tags: ["features", "new"],
        pinned: false
    }
];

// Function to format date-time for display
function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
}

// Update the renderNotes function to display formatted date-time in the note
function renderNotes(searchTerm = '') {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';
    
    let filteredNotes = notes;
    if (searchTerm) {
        filteredNotes = notes.filter(note => 
            note.title.toLowerCase().includes(searchTerm) ||
            note.subtitle.toLowerCase().includes(searchTerm) ||
            note.content.toLowerCase().includes(searchTerm)
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
                        <small>Note #${note.noteNumber}</small>
                        <small class="float-end">ID: ${note.id}</small>
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
// Default notes that appear on loading
let notes = [
    {
        id: 1,
        noteNumber: "001",
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
        id: 2,
        noteNumber: "002",
        title: "Important Features",
        subtitle: "What's New",
        content: "1. Colorful note cards\n2. Search functionality\n3. Copy data feature\n4. Pin important notes\n5. Edit and delete options",
        created: "2024-10-26T10:01:00.000Z",
        lastModified: "2024-10-26T10:01:00.000Z",
        category: "Features",
        tags: ["features", "new"],
        pinned: false
    }
];

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

function generateData(noteNumber, title, subtitle, content) {
    return {
        id: Date.now(),
        noteNumber: noteNumber || Date.now().toString(),
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
    const noteNumber = document.getElementById('noteNumber').value;
    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const content = document.getElementById('content').value;
    const data = generateData(noteNumber, title, subtitle, content);
    document.getElementById('dataPreview').textContent = JSON.stringify(data, null, 2);
}

function showForm(editId = null) {
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('formTitle').textContent = editId ? 'Edit Note' : 'Add New Note';
    
    if (editId) {
        const note = notes.find(n => n.id === editId);
        document.getElementById('editingId').value = editId;
        document.getElementById('noteNumber').value = note.noteNumber;
        document.getElementById('title').value = note.title;
        document.getElementById('subtitle').value = note.subtitle;
        document.getElementById('content').value = note.content;
        updateDataPreview();
    } else {
        document.getElementById('noteNumber').value = Date.now().toString();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideForm() {
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('noteForm').reset();
    document.getElementById('editingId').value = '';
    document.getElementById('dataPreview').textContent = '';
}

['noteNumber', 'title', 'subtitle', 'content'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateDataPreview);
});

document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const noteNumber = document.getElementById('noteNumber').value;
    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const content = document.getElementById('content').value;
    const editingId = document.getElementById('editingId').value;
    
    if (editingId) {
        const index = notes.findIndex(n => n.id === parseInt(editingId));
        if (index !== -1) {
            notes[index] = {
                ...notes[index],
                noteNumber,
                title,
                subtitle,
                content,
                lastModified: new Date().toISOString()
            };
        }
    } else {
        const noteData = generateData(noteNumber, title, subtitle, content);
        notes.push(noteData);
    }
    
    renderNotes();
    hideForm();
});

function togglePin(id) {
    const note = notes.find(n => n.id === id);
    if (note) {
        note.pinned = !note.pinned;
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
    const note = notes.find(n => n.id == noteId);
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
    if (confirm('Are you sure you want to delete this note?')) {
        notes = notes.filter(note => note.id !== id);
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
            note.content.toLowerCase().includes(searchTerm)
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
                        <small>Note #${note.noteNumber}</small>
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
                            Created: ${new Date(note.created).toLocaleString()}
                        </small>
                    </div>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-end">
                    <button class="action-btn" title="Edit" onclick="showForm(${note.id})">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="action-btn" title="${note.pinned ? 'Unpin' : 'Pin'}" onclick="togglePin(${note.id})">
                        <i class="fas fa-thumbtack" style="${note.pinned ? 'transform: rotate(45deg);' : ''}"></i>
                    </button>
                    <button class="action-btn" title="Delete" onclick="deleteNote(${note.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(noteElement);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderNotes();
});
