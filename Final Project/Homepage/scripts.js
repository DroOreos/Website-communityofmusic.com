document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
document.querySelector('header').addEventListener('mousemove', function(e) {
    const header = this;
    const headerWidth = header.offsetWidth;
    const centerX = headerWidth / 2;
    const mouseX = e.clientX - header.getBoundingClientRect().left;
    const deltaX = (mouseX - centerX) / 2;

    const textElement = document.querySelector('.header-content h1');
    textElement.style.transform = `translateX(${deltaX}px)`;

    if (deltaX > 0) {
        textElement.style.color = `rgba(0, 0, 255, ${Math.min(Math.abs(deltaX / 100), 1)})`;
    } else {
        textElement.style.color = `rgba(150, 50, 220, ${Math.min(Math.abs(deltaX / 100), 1)})`;
    }
});

document.querySelector('header').addEventListener('mouseleave', function() {
    const textElement = document.querySelector('.header-content h1');
    textElement.style.transform = 'translateX(0px)';
    textElement.style.color = 'black';
});


document.getElementById('genre-map').addEventListener('click', function(e) {
    const genre = getGenreFromCoordinates(e.clientX, e.clientY); 
    if (genre) {
        openGenreDetails(genre);
    }
});


function showDetails(genre) {
    const detailsPanel = document.getElementById('details-panel');
   const genreData = {
        "Pop": {
            name: "Pop",
            description: "Pop music, originating from the term 'popular music', is characterized by its widespread appeal across the broad audience. It's marked by catchy melodies and lyrics that appeal to the mainstream audience and spans various styles.",
            image: "pop.jpg"  
        },
        "Rock": {
            name: "Rock",
            description: "Rock music emerged in the 1950s as 'rock and roll' in the United States and evolved into various subgenres in the '60s and beyond, characterized by a strong beat, simple chord progressions, and often focused on electric guitar.",
            image: "rock.jpg"  
        },
        "Hip-Hop": {
            name: "Hip-Hop",
            description: "Hip-Hop is a cultural movement that began among urban African American youth in New York and has evolved into a genre of music that includes rhythmic and rhyming speech ('rap') and complex beats.",
            image: "hiphop.jpg"  
        },
        "Rap": {
            name: "Rap",
            description: "Rap music is a component of hip-hop music that involves 'rapping', rhythmic and rhyming speech. It's one of the pillars of the Hip-Hop genre but has grown to influence numerous other genres worldwide.",
            image: "rap.jpg"  
        }
    };
    const details = genreData[genre];
    detailsPanel.innerHTML = `
        <h3>${details.name}</h3>
        <p>${details.description}</p>
        <img src="${details.image}" alt="${details.name}" style="max-width: 100%;">
    `;
    detailsPanel.style.display = 'block'; 
}



function openGenreDetails(genre) {
    const details = document.createElement('div');
    details.innerHTML = `
        <h4>${genre.name}</h4>
        <p>${genre.description}</p>
        <audio controls src="${genre.sampleTrack}"></audio>
    `;
    details.style.position = 'absolute';
    details.style.left = '20px'; 
    details.style.top = '20px'; 
    details.style.backgroundColor = '#fff';
    details.style.padding = '10px';
    details.style.borderRadius = '5px';
    document.getElementById('genre-map').appendChild(details);
}

var modal = document.getElementById("myModal");
var btn = document.querySelector(".grid-item.purpose");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


