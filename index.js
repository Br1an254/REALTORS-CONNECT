fetch("https://realtors-data.onrender.com/apartments")
    .then(response => response.json())
    .then(data => {
        // Content container
        let container = document.getElementById('container');

        // data.forEach(apartment => {// iterate through db.json
        //     let divEl = document.createElement('div')// create a div element
        //     divEl.className = 'apartment-card';// div class

        //     let imgEl = document.createElement('img'); // create image element
        //     imgEl.src = apartment.image; // image source
        //     imgEl.alt = 'Apartment images' // image alt

        //     let h2El = document.createElement('h2'); //create h2 element
        //     h2El.innerHTML = apartment.name;


        //     let locationEl = document.createElement('p'); // create location element
        //     locationEl.id = 'location';
        //     locationEl.innerHTML = `Location : ${apartment.location}`;

        //     let priceEl = document.createElement('p'); // create price element
        //     priceEl.id = 'price';
        //     priceEl.innerHTML = `Price : ${apartment.price}`;


        //     let textContainer = document.createElement('div'); // text container
        //     textContainer.className = 'textcontainer';
        //     textContainer.appendChild(locationEl);
        //     textContainer.appendChild(priceEl);

        //     let detailsButtonEl = document.createElement('button'); // details button
        //     detailsButtonEl.innerHTML = 'Details'
        //     let removeButtonEl = document.createElement('button'); // remove button
        //     removeButtonEl.innerHTML = 'Remove'
        //     let buttonContainer = document.createElement('div'); // button container
        //     buttonContainer.className = 'buttoncontainer'
        //     buttonContainer.appendChild(detailsButtonEl);
        //     buttonContainer.appendChild(removeButtonEl);



        //     divEl.appendChild(imgEl); // append elements to our div container
        //     divEl.appendChild(h2El); // append h2
        //     divEl.appendChild(textContainer);
        //     divEl.appendChild(buttonContainer); // append buttons container to div container
        //     container.appendChild(divEl); // append elements to our div container


        // });


        let locationValue = document.getElementById('location');
        let priceValue = document.getElementById('price');
        let button = document.getElementById('form-button');

        button.addEventListener('click', () => {
            fetch("https://realtors-data.onrender.com/apartments")
                .then(response => response.json())
                .then(data => {
                    data.forEach(apartment => {

                        if (apartment.location === locationValue.value || apartment.price === parseInt(priceValue.value)) {
                            // console.log(apartment)

                            let divEl = document.createElement('div')// create a div element
                            divEl.className = 'apartment-card';// div class

                            let imgEl = document.createElement('img'); // create image element
                            imgEl.src = apartment.image; // image source
                            imgEl.alt = 'Apartment images' // image alt

                            let h2El = document.createElement('h2'); //create h2 element
                            h2El.innerHTML = apartment.name;


                            let locationEl = document.createElement('p'); // create location element
                            locationEl.id = 'location';
                            locationEl.innerHTML = `Location : ${apartment.location}`;

                            let priceEl = document.createElement('p'); // create price element
                            priceEl.id = 'price';
                            priceEl.innerHTML = `Price : ${apartment.price}`;


                            let textContainer = document.createElement('div'); // text container
                            textContainer.className = 'textcontainer';
                            textContainer.appendChild(locationEl);
                            textContainer.appendChild(priceEl);

                            let detailsButtonEl = document.createElement('button'); // details button
                            detailsButtonEl.innerHTML = 'Details'
                            let removeButtonEl = document.createElement('button'); // remove button
                            removeButtonEl.innerHTML = 'Remove'
                            let buttonContainer = document.createElement('div'); // button container
                            buttonContainer.className = 'buttoncontainer'
                            buttonContainer.appendChild(detailsButtonEl);
                            buttonContainer.appendChild(removeButtonEl);



                            divEl.appendChild(imgEl); // append elements to our div container
                            divEl.appendChild(h2El); // append h2
                            divEl.appendChild(textContainer);
                            divEl.appendChild(buttonContainer); // append buttons container to div container
                            container.appendChild(divEl); // append elements to our div container
                            

                            // let arrayCollection = Array.from(document.getElementsByClassName('apartment-card'));
                            // console.log(arrayCollection.splice(0, 12));

                            console.log(apartment)

                        }
                    })
                })
        })

    })

