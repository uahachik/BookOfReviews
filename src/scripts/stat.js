function statData() {
    fetch(`http://localhost/BookReviews/api/stat.php`)
        .then(res => res.json())
        .then(data => {
            let html;
            data.map(stat => {
                html = `<h4>Клиенты нас любят: <span style="color: green">${stat.noa} :) </span><br>
                    Нам надо совершенствоваться: <span style="color: green">${stat.nob} ;) </span><br>
                    Пора меняться: <span style="color: green">${stat.noc} :( </span><br>
                    Надо сжечь это место:  <span style="color: green">${stat.nod} !!! </span><br>
                    From all of <span style="color: red">${stat.nor}</span> reviews.</h4>
                `;
            });
            document.getElementById('stat').innerHTML = html;
        })
        .catch((err) => console.log(err))
}

