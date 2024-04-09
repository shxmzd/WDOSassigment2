// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    function loadSubscribedEmails() {
        const subscribedEmailsList = document.getElementById('subscribedEmails');
        const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];


        subscribedEmailsList.innerHTML = '';
        subscribedEmails.forEach(email => {
            const listItem = document.createElement('li');
            listItem.textContent = email;
            subscribedEmailsList.appendChild(listItem);
        });
    }

    loadSubscribedEmails();
});






// opening the json file
// Function to open the editor and load JSON data
function openEditor(jsonFile) {
    document.getElementById('editor').style.display = 'block';


    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Store the JSON data in a global variable for editing
            window.jsonData = data;
            // Display JSON data in a readable format
            document.getElementById('jsonTextArea').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
            alert('Error fetching JSON data. Please try again later.');
            closeEditor();
        });
}

// Function to close the editor
function closeEditor() {
    document.getElementById('editor').style.display = 'none';
}
// Function to save changes
function saveChangesToLocal() {
    const editedJSON = document.getElementById('jsonTextArea').value;
    try {
        // Parse the edited JSON data
        const parsedData = JSON.parse(editedJSON);
        // Update the global JSON data variable with the edited data
        window.jsonData = parsedData;
        // Optionally, you can save the edited data to localStorage
        localStorage.setItem('editedData', JSON.stringify(parsedData));

        alert('Changes saved successfully.');
    } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Error parsing JSON. Please ensure the input is valid JSON data.');
    }
}
