function addReview() {
    const name = document.getElementById('name').value;
    const evaluation = document.querySelector('input[name="evaluation"]:checked').value;
    const body = document.getElementById('body').value;
    const image = fileUpload.src;

    fetch('http://localhost/BookReviews/api/create.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "content-type": 'application/json'
        },
        body: JSON.stringify({name: name, evaluation: evaluation, body: body, image: image})
    })
        .then(res => res.json())
        .then(data => runBoth())
        .catch((err) => console.log(err));

    // document.getElementById('addReview').reset();
    // fileUpload.src = '';
}


/*
// Await Async (not working)
function addReview(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const evaluation = document.querySelector('input[name="evaluation"]:checked').value;
    const body = document.getElementById('body').value;
    const image = document.getElementById('image').value;

    async function add() {
        const res = await fetch('http://localhost/BookReviews/api/create.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, *!/!*',
                "content-type": 'application/json'
            },
            body: JSON.stringify({name: name, evaluation: evaluation, body: body, image: image})
        });
        const data = await res.getReviews();
    }

    add();

    document.getElementById('addReview').reset();
}*/
