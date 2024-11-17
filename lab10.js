
//TASK 3- Fetching data using API

document.getElementById('loadData').addEventListener('click', function() {
    fetch('https://api.coinbase.com/v2/currencies')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear existing data

            data.data.forEach(currency => {
                const row = tableBody.insertRow();
                const cellId = row.insertCell(0);
                const cellName = row.insertCell(1);
                cellId.textContent = currency.id;
                cellName.textContent = currency.name;
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to load data: ' + error.message);
        });
});


//GET REQUEST USING XMLHTTPREQUEST 
document.getElementById('loadData1').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coinbase.com/v2/currencies', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            var data = JSON.parse(xhr.responseText);
            const tableBody = document.getElementById('outputTable1').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear existing data

            // Loop through the data and populate the table
            data.data.forEach(currency => {
                const row = tableBody.insertRow();
                const cellId = row.insertCell(0);
                const cellName = row.insertCell(1);
                cellId.textContent = currency.id;
                cellName.textContent = currency.name;
            });
        } else {
            // Handle errors
            console.error('Request failed. Status:', xhr.status);
            alert('Failed to load data: ' + xhr.statusText);
        }
    };

    xhr.onerror = function() {
        // Handle network errors
        console.error('Network error occurred');
        alert('Network error occurred while trying to fetch data.');
    };

    // Send the request
    xhr.send();
});


