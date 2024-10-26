// Function to generate unique ID using date-time stamp and custom number
function generateUniqueId(customNumber) {
    const now = new Date();
    
    // Format: YYYYMMDD-HHMMSS-milliseconds-customNumber
    const dateStr = now.getFullYear().toString() +
                   (now.getMonth() + 1).toString().padStart(2, '0') +
                   now.getDate().toString().padStart(2, '0');
    
    const timeStr = now.getHours().toString().padStart(2, '0') +
                   now.getMinutes().toString().padStart(2, '0') +
                   now.getSeconds().toString().padStart(2, '0');
    
    const millisStr = now.getMilliseconds().toString().padStart(3, '0');
    
    return `${dateStr}-${timeStr}-${millisStr}-${customNumber.padStart(4, '0')}`;
}

// Function to format date-time for display
function formatDateTime(dateTimeStr) {
    try {
        const date = new Date(dateTimeStr);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid Date';
    }
}

// Load notes from localStorage or use defaults
let notes = [];
try {
    const storedNotes = localStorage.getItem('notes');
    notes = storedNotes ? JSON.parse(storedNotes) : [
        {
            id: '20241026-100000-000-0001',
            title: "Welcome to Smart Notes!",
            subtitle: "Getting Started Guide",
            content: "Click the + button to create a new note. You can edit, pin, and delete notes using the buttons below each note. Use the search bar to find specific notes by title, content, or ID.",
            created: "2024-10-26T10:00:00.000Z",
            lastModified: "2024-10-26T10:00:00.000Z",
            pinned: true
        },
        {
            id: '20241026-100100-000-0002',
            title: "Important Features",
            subtitle: "What's New",
            content: "1. Colorful note cards\n2. Search by title, content, or ID\n3. Local storage persistence\n4. Pin important notes\n5. Custom ID numbers\n6. Edit and delete options",
            created: "2024-10-26T10:01:00.000Z",
            lastModified: "2024-10-26T10:01:00.000Z",
            pinned: false
        }
    ];
} catch (error) {
    console.error('Error loading notes:', error);
    notes = [];
}

// Save notes to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        alert('Failed to save notes. Please check your browser storage settings.');
    }
}

// Copy data functionality
function copyData() {
    const dataText = document.getElementById('dataPreview').textContent;
    navigator.clipboard.writeText(dataText)
        .then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy data. Please try again.');
        });
}

// Search functionality with debouncing
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = e.target.value.toLowerCase();
        renderNotes(searchTerm);
    }, 300); // 300ms debounce delay
});

function generateData(customId, title, subtitle, content) {
    if (!customId || !title || !content) {
        throw new Error('Required fields missing');
    }
    return {
        id: generateUniqueId(customId),
        title: title.trim(),
        subtitle: subtitle.trim(),
        content: content.trim(),
        created: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        pinned: false
    };
}

function validateCustomId(customId) {
    const idPattern = /^\d{4}$/;
    return idPattern.test(customId);
}

function updateDataPreview() {
    try {
        const customId = document.getElementById('customId').value;
        const title = document.getElementById('title').value;
        const subtitle = document.getElementById('subtitle').value;
        const content = document.getElementById('content').value;
        
        if (customId && validateCustomId(customId)) {
            const data = generateData(customId, title, subtitle, content);
            document.getElementById('dataPreview').textContent = JSON.stringify(data, null, 2);
        }
    } catch (error) {
        console.error('Error updating data preview:', error);
        document.getElementById('dataPreview').textContent = 'Invalid input data';
    }
}

function showForm(editId = null) {
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('formTitle').textContent = editId ? 'Edit Note' : 'Add New Note';
    
    if (editId) {
        const note = notes.find(n => n.id === editId);
        if (note) {
            document.getElementById('editingId').value = editId;
            document.getElementById('customId').value = note.id.split('-')[3];
            document.getElementById('title').value = note.title;
            document.getElementById('subtitle').value = note.subtitle;
            document.getElementById('content').value = note.content;
            document.getElementById('customId').disabled = true;
            updateDataPreview();
        }
    } else {
        document.getElementById('noteForm').reset();
        document.getElementById('editingId').value = '';
        document.getElementById('customId').disabled = false;
        document.getElementById('dataPreview').textContent = '';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideForm() {
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('noteForm').reset();
    document.getElementById('editingId').value = '';
    document.getElementById('dataPreview').textContent = '';
    document.getElementById('customId').disabled = false;
}

// Add input event listeners
['customId', 'title', 'subtitle', 'content'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateDataPreview);
});

// Validate custom ID input
document.getElementById('customId').addEventListener('input', function(e) {
    const input = e.target;
    const value = input.value;
    
    // Remove non-digit characters
    input.value = value.replace(/\D/g, '');
    
    // Validate length
    if (input.value.length === 4) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
});

// Form submission handler
document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    try {
        const customId = document.getElementById('customId').value;
        const title = document.getElementById('title').value;
        const subtitle = document.getElementById('subtitle').value;
        const content = document.getElementById('content').value;
        const editingId = document.getElementById('editingId').value;
        
        // Validate custom ID
        if (!validateCustomId(customId)) {
            alert('Please enter a valid 4-digit ID number.');
            return;
        }
        
        // Check if ID already exists (for new notes)
        if (!editingId) {
            const idExists = notes.some(note => note.id.endsWith(customId.padStart(4, '0')));
            if (idExists) {
                alert('This ID is already in use. Please choose a different number.');
                return;
            }
        }
        
        if (editingId) {
            const index = notes.findIndex(n => n.id === editingId);
            if (index !== -1) {
                notes[index] = {
                    ...notes[index],
                    title: title.trim(),
                    subtitle: subtitle.trim(),
                    content: content.trim(),
                    lastModified: new Date().toISOString()
                };
            }
        } else {
            const noteData = generateData(customId, title, subtitle, content);
            notes.push(noteData);
        }
        
        saveToLocalStorage();
        renderNotes();
        hideForm();
    } catch (error) {
        console.error('Error saving note:', error);
        alert('Failed to save note. Please check your input and try again.');
    }
});

function togglePin(id) {
    try {
        const note = notes.find(n => n.id === id);
        if (note) {
            note.pinned = !note.pinned;
            saveToLocalStorage();
            renderNotes();
        }
    } catch (error) {
        console.error('Error toggling pin:', error);
    }
}

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    try {
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    } catch (error) {
        console.error('Error highlighting text:', error);
        return text;
    }
}

function toggleContent(contentId, noteId) {
    try {
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
    } catch (error) {
        console.error('Error toggling content:', error);
    }
}

function deleteNote(id) {
    try {
        if (confirm('Are you sure you want to delete this note?')) {
            notes = notes.filter(note => note.id !== id);
            saveToLocalStorage();
            renderNotes();
        }
    } catch (error) {
        console.error('Error deleting note:', error);
        alert('Failed to delete note. Please try again.');
    }
}

function renderNotes(searchTerm = '') {
    try {
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
        
        if (sortedNotes.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center mt-4">
                    <h4 class="text-muted">No notes found</h4>
                    ${searchTerm ? '<p class="text-muted">Try a different search term</p>' : ''}
                </div>
            `;
            return;
        }
        
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
                        <div class="note-id mb-2 text-muted">
                            <small>ID: ${note.id}</small>
                        </div>
                        <h5 class="card-title">${highlightText(note.title, searchTerm)}</h5>
                        <h6 class="card-subtitle mb-2 text-decoration-underline">
                            ${highlightText(note.subtitle, searchTerm)}
                        </h6>
                        <div class="card-text ${isLongContent ? 'truncate-content' : ''}" id="${contentId}">
                            ${highlightText(truncatedContent, searchTerm)}
                            ${isLongContent ? `
                                <span class="read-more" onclick="toggleContent('${contentId}', '${note.id}')">
                                    <i class="fas fa-ellipsis-h"></i>
                                </span>
                            ` : ''}
                        </div>
                        <div class="note-timestamp mt-2">
                            <small class="text-opacity-75">
                                Created: ${formatDateTime(note.created)}<br>
                                Modified: ${formatDateTime(note.lastModified)}
                            </small>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent d-flex justify-content-end">
                        <button class="action-btn" title="Edit" onclick="showForm('${note.id}')">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="action-btn" title="${note.pinned ? 'Unpin' : 'Pin'}" 
                                onclick="togglePin('${note.id}')">
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
    } catch (error) {
        console.error('Error rendering notes:', error);
        const container = document.getElementById('notesContainer');
        container.innerHTML = `
            <div class="col-12 text-center mt-4">
                <h4 class="text-danger">Error displaying notes</h4>
                <p class="text-muted">Please refresh the page and try again</p>
            </div>
        `;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Set up custom ID validation
        const customIdInput = document.getElementById('customId');
        customIdInput.addEventListener('blur', function() {
            if (!validateCustomId(this.value)) {
                this.classList.add('is-invalid');
            }
        });

        // Add form validation
        const form = document.getElementById('noteForm');
        const titleInput = document.getElementById('title');
        const contentInput = document.getElementById('content');

        titleInput.addEventListener('blur', function() {
            if (this.value.trim().length < 1) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });

        contentInput.addEventListener('blur', function() {
            if (this.value.trim().length < 1) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });

        // Initialize the search bar
        const searchInput = document.getElementById('searchInput');
        searchInput.value = ''; // Clear search on page load

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + / to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                searchInput.focus();
            }
            // Escape to close form
            if (e.key === 'Escape' && document.getElementById('formSection').style.display === 'block') {
                hideForm();
            }
        });

        // Add animation for new notes
        const observeNotes = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.classList && node.classList.contains('note-card')) {
                            node.classList.add('new');
                            setTimeout(() => {
                                node.classList.remove('new');
                            }, 500);
                        }
                    });
                }
            });
        });

        observeNotes.observe(document.getElementById('notesContainer'), {
            childList: true,
            subtree: true
        });

        // Check storage availability
        function checkStorageAvailability() {
            try {
                const test = '__storage_test__';
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        }

        if (!checkStorageAvailability()) {
            alert('Local storage is not available. Your notes will not be saved between sessions.');
        }

        // Add auto-save functionality for form
        let autoSaveTimeout;
        const formInputs = document.querySelectorAll('#noteForm input, #noteForm textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                clearTimeout(autoSaveTimeout);
                autoSaveTimeout = setTimeout(() => {
                    const formData = {
                        customId: document.getElementById('customId').value,
                        title: document.getElementById('title').value,
                        subtitle: document.getElementById('subtitle').value,
                        content: document.getElementById('content').value
                    };
                    localStorage.setItem('form_draft', JSON.stringify(formData));
                }, 1000);
            });
        });

        // Restore form draft if exists
        const formDraft = localStorage.getItem('form_draft');
        if (formDraft) {
            const draft = JSON.parse(formDraft);
            Object.keys(draft).forEach(key => {
                const input = document.getElementById(key);
                if (input) {
                    input.value = draft[key];
                }
            });
        }

        // Initialize notes display
        renderNotes();

    } catch (error) {
        console.error('Error initializing application:', error);
        alert('There was an error initializing the application. Please refresh the page.');
    }
});

// Export functionality
function exportNotes() {
    try {
        const exportData = JSON.stringify(notes, null, 2);
        const blob = new Blob([exportData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `notes_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error exporting notes:', error);
        alert('Failed to export notes. Please try again.');
    }
}

// Import functionality
function importNotes(event) {
    try {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedNotes = JSON.parse(e.target.result);
                if (Array.isArray(importedNotes)) {
                    if (confirm('This will replace all existing notes. Continue?')) {
                        notes = importedNotes;
                        saveToLocalStorage();
                        renderNotes();
                        alert('Notes imported successfully!');
                    }
                } else {
                    throw new Error('Invalid file format');
                }
            } catch (error) {
                console.error('Error parsing import file:', error);
                alert('Invalid file format. Please ensure you are importing a valid notes backup file.');
            }
        };
        reader.readAsText(file);
    } catch (error) {
        console.error('Error importing notes:', error);
        alert('Failed to import notes. Please try again.');
    }
}

// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(error => {
                console.error('ServiceWorker registration failed:', error);
            });
    });
}
