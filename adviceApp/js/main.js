document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
        .then (res => res.json())
        .then (data => {
            console.log(data);
            document.querySelector('.advice').innerText = data.slip.advice

        })
        .catch (err => {
            console.log(`error ${err}`)
        })
}

