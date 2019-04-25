function getReviews() {
    // getting number of Row Per Page
    const storeRpp = document.getElementById('rpp').value;
    // const inputRpp1 = document.getElementById('rpp').innerText = 1;
    // const inputRpp2 = document.getElementById('rpp').value = 2;
    // console.log(inputRpp1);
    // console.log(inputRpp2);

    // TODO: save rpp to the LocalStorage
    // saving user's input to local storage
    // document.getElementById('rpp').addEventListener('change', inputUpdate);
    // function inputUpdate() {
    //     console.log('Hello')
    //     localStorage.setItem('inputRpp', inputRpp);
    // }
    // const storeRpp = localStorage.getItem('inputRpp');
    //     rpp = document.getElementById('rpp').innerText = storeRpp;


    if (storeRpp == 7 || storeRpp == 14 || storeRpp == 21 || storeRpp == 70) {
        // var rpp = document.getElementById('rpp').innerText = storeRpp;
        var rpp = document.getElementById('rpp').innerText = storeRpp;
    } else {
        rpp = document.getElementById('rpp').value = 7;
    }

    const start = 1;

    fetch(`http://localhost/BookReviews/api/read.php?rpp=${rpp}&&start=${start}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let output = '<h2 class="h-review">Reviews</h2><hr>';
            data.map(review => {
                output += `
                        <div class="review">
                            <img src="${review.image}"  id="image" alt="">
                            <ul>
                                <li>
                                    <strong>${review.name}</strong> says: <b><i style="">${review.body}</i></b>
                                </li>
                                <li>
                                    Evaluation of this site from ${review.name}: <b>${review.evaluation == 'a' ? 'Благодарность' : ''}
                                                                                ${review.evaluation == 'b' ? 'Предложение об улучшении сервиса' : ''}
                                                                                ${review.evaluation == 'c' ? 'Жалоба' : ''}
                                                                                ${review.evaluation == 'd' ? 'Kill yourself' : ''}</b>
                                </li>
                                <li>
                                    <sup><cite>Created at: ${review.created_at}</cite></sup>
                                </li>
                            </ul>
                        </div><hr>
                `;
            });
            document.getElementById('reviews').innerHTML = output;
        })
        .catch((err) => console.log(err))
}


/*
// Two Promises
function mainRender () {
    // getting number of Row Per Page
    let inputRpp = document.getElementById('rpp').value;

    if (inputRpp == 7 || inputRpp == 14 || inputRpp == 21 || inputRpp == 70) {
        var rpp = document.getElementById('rpp').innerText = inputRpp;
    } else {
        rpp = document.getElementById('rpp').value = 7;
    }

    const start = 1;

    const promise1 = fetch(`http://localhost/BookReviews/api/read.php?rpp=${rpp}&&start=${start}`)
        .then(res => res.json());
    const promise2 = fetch(`http://localhost/BookReviews/api/stat.php`)
        .then(res => res.json());

    Promise.all([promise1, promise2])
        .then(data => {
            let output = '<ul><h2>Reviews</h2></ul><hr>';
            data['0'].map(review => {
                output += `
                            <ul>
                                <strong>${review.name}</strong> says: <b><i style="color: cadetblue">${review.body}</i></b>
                                ${review.image}
                            </ul>
                            <ul>
                                Evaluation of this site from ${review.name}: <b>${review.evaluation == 'a' ? 'Благодарность' : ''}
                                                                                ${review.evaluation == 'b' ? 'Предложение об улучшении сервиса' : ''}
                                                                                ${review.evaluation == 'c' ? 'Жалоба' : ''}
                                                                                ${review.evaluation == 'd' ? 'Kill yourself' : ''}</b>
                            </ul>
                            <ul>
                                <sup><cite>Created at: ${review.created_at}</cite></sup>
                            </ul>
                            <hr>
                       `;
            });
            document.getElementById('output').innerHTML = output;
            let html;
            data['1'].map(stat => {
                html = `<h4>Клиенты нас любят: <span style="color: green">${stat.noa} :) </span>
                            Нам надо совершенствоваться: <span style="color: green">${stat.nob} ;) </span>
                            Пора меняться: <span style="color: green">${stat.noc} :( </span>
                            Надо сжечь это место:  <span style="color: green">${stat.nod} !!! </span><p>
                            From all of <span style="color: red">${stat.nor}</span> reviews.</p></h4>`;
            });
            document.getElementById('stat').innerHTML = html;
        })
        .catch((err) => console.log(err))
}
*/

/*
// To Local Storage
function getReviews() {
    let inputRpp = document.getElementById('rpp').value;
    // todo: save rpp to the LocalStorage

    if (inputRpp == 7 || inputRpp == 14 || inputRpp == 21 || inputRpp == 70) {
        rpp = document.getElementById('rpp').innerText = inputRpp;
    } else {
        rpp = document.getElementById('rpp').value = 21;
    }

    let start = 1;
    let reviews;

    // Promises and fetch
    return fetch(`http://localhost/BookReviews/api/read.php?rpp=${rpp}&&start=${start}`)
        .then(res => res.json())
        // .then(data => reviews = data)
        .then(data => localStorage.setItem('userCache', JSON.stringify(data)))
        .catch((err) => console.log(err))
}
function toLocalStorage() {
    data = JSON.parse(localStorage.getItem('userCache'));
    data.map(review => {
        output += `
                                <ul>
                                    <b>${review.name}</b>: ${review.body}
                                    ${review.image}
                                </ul>
                                <ul>
                                    Evaluation of this site from ${review.name}: <b>${review.evaluation == 'a' ? 'Благодарность' : ''}
                                                                                    ${review.evaluation == 'b' ? 'Предложение об улучшении сервиса' : ''}
                                                                                    ${review.evaluation == 'c' ? 'Жалоба' : ''}
                                                                                    ${review.evaluation == 'd' ? 'Kill yourself' : ''}</b>
                                </ul>
                                <ul>
                                    <sup><cite>Created at: ${review.created_at}</cite></sup>
                                </ul><hr>
                       `;
    });
    document.getElementById('output').innerHTML = output;
}
*/

/*
// By two functions
function getReviews() {
    let inputRpp = document.getElementById('rpp').value;
    // todo: save rpp to the LocalStorage

    if (inputRpp == 7 || inputRpp == 14 || inputRpp == 21 || inputRpp == 70) {
        var rpp = document.getElementById('rpp').innerText = inputRpp;
    } else {
        var rpp = document.getElementById('rpp').value = 21;
    }

    let start = 1;
    let reviews;

    return fetch(`http://localhost/BookReviews/api/read.php?rpp=${rpp}&&start=${start}`)
        .then(res => res.json())
        .then(data => reviews = data)
        .catch((err) => console.log(err))

}
function reviewsOutput() {
    let inputRpp = document.getElementById('rpp').value;

    getReviews().then(reviews => {
        let output = '<ul><h2>Reviews</h2></ul><hr>';
        reviews.map(review => {
            output += `
                                <ul>
                                    <b>${review.name}</b>: ${review.body}
                                    ${review.image}
                                </ul>
                                <ul>
                                    Evaluation of this site from ${review.name}: <b>${review.evaluation == 'a' ? 'Благодарность' : ''}
                                                                                    ${review.evaluation == 'b' ? 'Предложение об улучшении сервиса' : ''}
                                                                                    ${review.evaluation == 'c' ? 'Жалоба' : ''}
                                                                                    ${review.evaluation == 'd' ? 'Kill yourself' : ''}</b>
                                </ul>
                                <ul>
                                    <sup><cite>Created at: ${review.created_at}</cite></sup>
                                </ul><hr>
                       `;
        });
        document.getElementById('output').innerHTML = output;
    })
}
*/

/*
// Async Await (not working)
function getReviews() {
    // getting number of Row Per Page
    let inputRpp = document.getElementById('rpp').value;
    // todo: save rpp to the LocalStorage

    if (inputRpp == 7 || inputRpp == 14 || inputRpp == 21 || inputRpp == 70) {
        var rpp = document.getElementById('rpp').innerText = inputRpp;
    } else {
        rpp = document.getElementById('rpp').value = 7;
    }

    const start = 1;

    async function getOutput() {
        const promise1 = fetch(`http://localhost/BookReviews/api/read.php?rpp=${rpp}&&start=${start}`);
        const promise2 = fetch(`http://localhost/BookReviews/api/stat.php`);

        Promise.all([promise1, promise2]);

        const data = await res.json();
        let output = '<ul><h2>Reviews</h2></ul><hr>';

        function outputReviews(review) {
            return output += `
                                <ul>
                                    <b>${review.name}</b>: ${review.body}
                                    ${review.image}
                                </ul>
                                <ul>
                                    Evaluation of this site from ${review.name}: <b>${review.evaluation == 'a' ? 'Благодарность' : ''}
                                                                                    ${review.evaluation == 'b' ? 'Предложение об улучшении сервиса' : ''}
                                                                                    ${review.evaluation == 'c' ? 'Жалоба' : ''}
                                                                                    ${review.evaluation == 'd' ? 'Kill yourself' : ''}</b>
                                </ul>
                                <ul>
                                    <sup><cite>Created at: ${review.created_at}</cite></sup>
                                </ul>
                                <hr>
                       `;
        }
        data['0'].map(outputReviews);
        document.getElementById('output').innerHTML = output;

        let html;
        data['1'].map(stat => {
            html = `<h4>Клиенты нас любят: <span style="color: green">${stat.noa} :) </span>
                            Нам надо совершенствоваться: <span style="color: green">${stat.nob} ;) </span>
                            Пора меняться: <span style="color: green">${stat.noc} :( </span>
                            Надо сжечь это место:  <span style="color: green">${stat.nod} !!! </span><p>
                            From all of <span style="color: red">${stat.nor}</span> reviews.</p></h4>`;
        });
        document.getElementById('stat').innerHTML = html;
    }

    getOutput();
}
*/
