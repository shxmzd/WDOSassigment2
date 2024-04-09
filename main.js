document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('checkbox').addEventListener('change', function(event){
        if(event.target.checked){
            document.body.style.filter = "invert(100%)";
        } else {
            document.body.style.filter = "none";
        }
    });
});


//index.html dynamic content
document.addEventListener('DOMContentLoaded', function () {
    fetch('./index.json')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('sectionTitle', data.sec[0].title);
            localStorage.setItem('sectionText', data.sec[0].text);
            localStorage.setItem('firstImgTitle', data.firstpimg[0].title);
            localStorage.setItem('firstImgText', data.firstpimg[0].text);
            localStorage.setItem('secondImgTitle', data.secondpimg[0].title);
            localStorage.setItem('secondImgText', data.secondpimg[0].text);
            localStorage.setItem('listTitle', data['ordered-list'][0].title);
            localStorage.setItem('listText', data['ordered-list'][0].text);

            const secText = localStorage.getItem('sectionText').split('\n').join('<br><br>');
            document.getElementById('sec').getElementsByTagName('h2')[0].textContent = localStorage.getItem('sectionTitle');
            document.getElementById('sec').getElementsByTagName('p')[0].innerHTML = secText;
            document.getElementById('firstpimg').getElementsByTagName('h2')[0].textContent = localStorage.getItem('firstImgTitle');
            document.getElementById('firstpimg').getElementsByTagName('p')[0].textContent = localStorage.getItem('firstImgText');
            document.getElementById('secondpimg').getElementsByTagName('h3')[0].textContent = localStorage.getItem('secondImgTitle');
            document.getElementById('secondpimg').getElementsByTagName('p')[0].textContent = localStorage.getItem('secondImgText');
            document.getElementById('ordered-list').getElementsByTagName('h2')[0].textContent = localStorage.getItem('listTitle');
            document.getElementById('ordered-list').getElementsByTagName('p')[0].textContent = localStorage.getItem('listText');

            // Display the sections after content is loaded
            document.getElementById('sec').style.display = 'block';
            document.getElementById('firstpimg').style.display = 'block';
            document.getElementById('secondpimg').style.display = 'block';
            document.getElementById('ordered-list').style.display = 'block';
        })
    
});


//index2.html dynamic content

document.addEventListener('DOMContentLoaded', function () {
    fetch('./index2.json')
        .then(response => response.json())
        .then(data => {
            // Save data to localStorage
            localStorage.setItem('wildlifeLocation1', JSON.stringify(data['wildlife-location'][0]));
            localStorage.setItem('wildlifeLocation2', JSON.stringify(data['wildlife-location2'][0]));
            localStorage.setItem('wildlifeLocation3', JSON.stringify(data['wildlife-location3'][0]));

            // Populate content from localStorage
            const location1 = JSON.parse(localStorage.getItem('wildlifeLocation1'));
            const location2 = JSON.parse(localStorage.getItem('wildlifeLocation2'));
            const location3 = JSON.parse(localStorage.getItem('wildlifeLocation3'));

            document.getElementById('wildlife-location').getElementsByTagName('h1')[0].textContent = location1.title;
            document.getElementById('wildlife-location2').getElementsByTagName('h1')[0].textContent = location2.title;
            document.getElementById('wildlife-location3').getElementsByTagName('h1')[0].textContent = location3.title;

            document.getElementById('wildlife-location').getElementsByTagName('p')[0].textContent = location1.text;
            document.getElementById('wildlife-location2').getElementsByTagName('p')[0].textContent = location2.text;
            document.getElementById('wildlife-location3').getElementsByTagName('p')[0].textContent = location3.text;

          
        })
    
});


//index3.html dynamic content
document.addEventListener('DOMContentLoaded', function () {
    fetch('./index3.json')
        .then(response => response.json())
        .then(data => {

            localStorage.setItem('introduction', JSON.stringify(data['introduction'][0]));
            localStorage.setItem('gallery', JSON.stringify(data['gallery'][0]));

            const introduction = JSON.parse(localStorage.getItem('introduction'));
            const gallery = JSON.parse(localStorage.getItem('gallery'));

            document.getElementById('introduction').getElementsByTagName('h2')[0].textContent = introduction.title;
            document.getElementById('gallery').getElementsByTagName('h2')[0].textContent = gallery.title;

            document.getElementById('introduction').getElementsByTagName('p')[0].textContent = introduction.text;
            document.getElementById('gallery').getElementsByTagName('p')[0].textContent = gallery.text;

        })
    
});


//index4.html dynamic content
// Fetch JSON data
fetch('./your-json-file.json')
    .then(response => response.json())
    .then(data => {
        // Populate the "leopard-intro" section
        document.querySelector('.leopard-intro h1').textContent = data['leopard-intro'][0].title;
        document.querySelector('.leopard-intro p').innerHTML = data['leopard-intro'][0].text;
        
        // Populate the "leopard-details" section
        document.querySelector('.leopard-details h1').textContent = data['leopard-details'][0].title1;
        document.querySelector('.leopard-details h2').textContent = data['leopard-details'][0].title2;
        document.querySelector('.leopard-details p').textContent = data['leopard-details'][0].text1;
        
        // Populate the "leopard-behavior" section
        document.querySelector('.leopard-behavior h1').textContent = data['leopard-behaviour'][0].title1;
        document.querySelector('.leopard-behavior h2').textContent = data['leopard-behaviour'][0].title2;
        document.querySelector('.leopard-behavior p').textContent = data['leopard-behaviour'][0].text1;
    })



// Fetch JSON data
fetch('./index4.json')
    .then(response => response.json())
    .then(data => {
        // Populate the "leopard-intro" section
        document.querySelector('.leopard-intro h1').textContent = data['leopard-intro'][0].title;
        document.querySelector('.leopard-intro p').innerHTML = data['leopard-intro'][0].text;
        
        // Populate the "leopard-details" section
        document.querySelector('.leopard-details h1').textContent = data['leopard-details'][0].title1;
        document.querySelector('.leopard-details h2').textContent = data['leopard-details'][0].title2;
        document.querySelector('.leopard-details p').textContent = data['leopard-details'][0].text1;
        
        // Populate the "leopard-behavior" section
        document.querySelector('.leopard-behavior h1').textContent = data['leopard-behaviour'][0].title1;
        document.querySelector('.leopard-behavior h2').textContent = data['leopard-behaviour'][0].title2;
        document.querySelector('.leopard-behavior p').textContent = data['leopard-behaviour'][0].text1;
    })
 
//index5.html

    fetch('./index5.json')
        .then(response => response.json())
        .then(data => {
            // Save data to localStorage
            localStorage.setItem('eleIntro', JSON.stringify(data['ele-intro'][0]));
            localStorage.setItem('eleDetails', JSON.stringify(data['ele-details'][0]));
            localStorage.setItem('eleBehavior', JSON.stringify(data['ele-behavior'][0]));

            // Populate data into HTML elements
            const intro = JSON.parse(localStorage.getItem('eleIntro'));
            const details = JSON.parse(localStorage.getItem('eleDetails'));
            const behavior = JSON.parse(localStorage.getItem('eleBehavior'));

            document.getElementById('ele-intro').getElementsByTagName('h1')[0].textContent = intro.title;
            document.getElementById('ele-intro').getElementsByTagName('p')[0].textContent = intro.text;
            document.getElementById('ele-intro').getElementsByTagName('p')[1].textContent = intro.text2;

            document.getElementById('ele-details').getElementsByTagName('h1')[0].textContent = details.title1;
            document.getElementById('ele-details').getElementsByTagName('h2')[0].textContent = details.title2;
            document.getElementById('ele-details').getElementsByTagName('p')[0].textContent = details.text1;
            document.getElementById('ele-details').getElementsByTagName('h3')[0].textContent = details.title3;
            document.getElementById('ele-details').getElementsByTagName('p')[1].textContent = details.text2;
            document.getElementById('ele-details').getElementsByTagName('h4')[0].textContent = details.title4;
            document.getElementById('ele-details').getElementsByTagName('p')[2].textContent = details.text3;

            document.getElementById('ele-behavior').getElementsByTagName('h1')[0].textContent = behavior.title1;
            document.getElementById('ele-behavior').getElementsByTagName('h2')[0].textContent = behavior.title2;
            document.getElementById('ele-behavior').getElementsByTagName('p')[0].textContent = behavior.text1;
            document.getElementById('ele-behavior').getElementsByTagName('h3')[0].textContent = behavior.title3;
            document.getElementById('ele-behavior').getElementsByTagName('p')[1].textContent = behavior.text2;
            document.getElementById('ele-behavior').getElementsByTagName('h4')[0].textContent = behavior.title4;
        })
 


//index6.html


    fetch('./index6.json')
        .then(response => response.json())
        .then(data => {
            // Save data to localStorage
            localStorage.setItem('birdIntro', JSON.stringify(data['Bird-intro'][0]));
            localStorage.setItem('birdDetails', JSON.stringify(data['Bird-details'][0]));
            localStorage.setItem('birdBehavior', JSON.stringify(data['Bird-behavior'][0]));

            // Populate data into HTML elements
            const intro = JSON.parse(localStorage.getItem('birdIntro'));
            const details = JSON.parse(localStorage.getItem('birdDetails'));
            const behavior = JSON.parse(localStorage.getItem('birdBehavior'));

            document.getElementById('Bird-intro').getElementsByTagName('h1')[0].textContent = intro.title;
            document.getElementById('Bird-intro').getElementsByTagName('p')[0].textContent = intro.text;
            document.getElementById('Bird-intro').getElementsByTagName('p')[1].textContent = intro.text2;

            document.getElementById('Bird-details').getElementsByTagName('h1')[0].textContent = details.title1;
            document.getElementById('Bird-details').getElementsByTagName('h2')[0].textContent = details.title2;
            document.getElementById('Bird-details').getElementsByTagName('p')[0].textContent = details.text1;
            document.getElementById('Bird-details').getElementsByTagName('h3')[0].textContent = details.title3;
            document.getElementById('Bird-details').getElementsByTagName('p')[1].textContent = details.text2;
            document.getElementById('Bird-details').getElementsByTagName('h4')[0].textContent = details.title4;
            document.getElementById('Bird-details').getElementsByTagName('p')[2].textContent = details.text3;

            document.getElementById('Bird-behavior').getElementsByTagName('h1')[0].textContent = behavior.title1;
            document.getElementById('Bird-behavior').getElementsByTagName('h2')[0].textContent = behavior.title2;
            document.getElementById('Bird-behavior').getElementsByTagName('p')[0].textContent = behavior.text1;
            document.getElementById('Bird-behavior').getElementsByTagName('h3')[0].textContent = behavior.title3;
            document.getElementById('Bird-behavior').getElementsByTagName('p')[1].textContent = behavior.text2;
            document.getElementById('Bird-behavior').getElementsByTagName('h4')[0].textContent = behavior.title4;
        })
  




//index7.html

document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data
    fetch('./index7.json')
        .then(response => response.json())
        .then(data => {
            // Save data to localStorage
            localStorage.setItem('intro-animals', JSON.stringify(data['intro-animals'][0]));
            localStorage.setItem('animals-text1', data['animals-text1']);
            localStorage.setItem('animals-text2', data['animals-text2']);
            localStorage.setItem('animals-text3', data['animals-text3']);
            localStorage.setItem('animals-text4', data['animals-text4']);
            localStorage.setItem('conservation-text1', data['conservation-text1']);
            localStorage.setItem('conservation-text2', data['conservation-text2']);
            localStorage.setItem('conservation-text3', data['conservation-text3']);

            // Populate intro section
            const introAnimalsSection = document.querySelector('.intro-animals p');
            introAnimalsSection.textContent = JSON.parse(localStorage.getItem('intro-animals'))['text'];
            
            // Populate featured animals section
            document.getElementById('animals-text1').textContent = localStorage.getItem('animals-text1');
            document.getElementById('animals-text2').textContent = localStorage.getItem('animals-text2');
            document.getElementById('animals-text3').textContent = localStorage.getItem('animals-text3');
            document.getElementById('animals-text4').textContent = localStorage.getItem('animals-text4');
            
            // Populate conservation efforts section
            document.getElementById('consevation-text1').textContent = localStorage.getItem('conservation-text1');
            document.getElementById('conservation-text2').textContent = localStorage.getItem('conservation-text2');
            document.getElementById('conservation-text3').textContent = localStorage.getItem('conservation-text3');
        })
 
});


//willpattuwa.html

document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data
    fetch('willpattuwa.json')
    .then(response => response.json())
    .then(data => {
        // Save data to localStorage
        localStorage.setItem('ecosystem-diversity', JSON.stringify(data['ecosystem-diversity'][0]));
        localStorage.setItem('cultural-heritage', JSON.stringify(data['cultural-heritage'][0]));
        localStorage.setItem('wildlife-willpattuwa', JSON.stringify(data['wildlife-willpattuwa'][0]));

        // Populate ecosystem diversity section
        const ecosystemDiversitySection = JSON.parse(localStorage.getItem('ecosystem-diversity'));
        document.querySelector('#ecosystem-diversity p').innerHTML = ecosystemDiversitySection['text'];
        
        // Populate cultural heritage section
        const culturalHeritageSection = JSON.parse(localStorage.getItem('cultural-heritage'));
        document.querySelector('#cultural-heritage h2').textContent = culturalHeritageSection['title'];
        document.querySelector('#cultural-heritage p').innerHTML = culturalHeritageSection['text'];
        
        // Populate wildlife in Wilpattuwa section
        const wildlifeWilpattuwaSection = JSON.parse(localStorage.getItem('wildlife-willpattuwa'));
        document.querySelector('#wildlife-willpattuwa h2').textContent = wildlifeWilpattuwaSection['title'];
        document.querySelector('#wildlife-willpattuwa p').innerHTML = wildlifeWilpattuwaSection['text'];
    })

});

//yala.html

document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data
    fetch('./yala.json')
        .then(response => response.json())
        .then(data => {
            // Save data to localStorage
            localStorage.setItem('yala', JSON.stringify(data['yala'][0]));
            localStorage.setItem('ancient-yala', JSON.stringify(data['ancient-yala'][0]));
            localStorage.setItem('wildlife-yala', JSON.stringify(data['wildlife-yala'][0]));

            // Populate Yala section
            const yalaSection = JSON.parse(localStorage.getItem('yala'));
            document.querySelector('#yala h2').textContent = yalaSection['title'];
            document.querySelector('#yala p').textContent = yalaSection['text'];
            
            // Populate ancient sites section
            const ancientSitesSection = JSON.parse(localStorage.getItem('ancient-yala'));
            document.querySelector('#ancient-yala h2').textContent = ancientSitesSection['title'];
            document.querySelector('#ancient-yala p').textContent = ancientSitesSection['text'];
            
            // Populate wildlife section
            const wildlifeYalaSection = JSON.parse(localStorage.getItem('wildlife-yala'));
            document.querySelector('#wildlife-yala h2').textContent = wildlifeYalaSection['title'];
            document.querySelector('#wildlife-yala p').textContent = wildlifeYalaSection['text'];
        })
     
});


//login.html

document.getElementById('loginform').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('./login.json')
        .then(response => response.json())
        .then(data => {
            const validCredentials = data.users.some(user => user.username === username && user.password === password);
            if (validCredentials) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            alert('Error fetching user data. Please try again later.');
        });
});
