const url = new URL(location.href);
const postDetails = JSON.parse(url.searchParams.get('posts'));

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Post details';
document.body.appendChild(title);

const divDetails = document.createElement('div');
divDetails.classList.add('divDetails');
document.body.appendChild(divDetails);

for (const postDetailsKey in postDetails) {
    const detailsPar = document.createElement('p');
    detailsPar.classList.add('detailsPar');
    const postValue = postDetails[postDetailsKey];
    detailsPar.innerText = `${postDetailsKey} - ${postValue}`;
    divDetails.appendChild(detailsPar);
}

const divComments = document.createElement('div');
divComments.classList.add('divComments');
document.body.appendChild(divComments);
fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails.id}/comments`)
    .then(res => res.json())
    .then(values => {
        values.forEach((value) => {
            const comInfo = document.createElement('p');
            comInfo.classList.add('comInfo');
            comInfo.innerText = `Comment: ${value.body}`;
            divComments.appendChild(comInfo);
        })
    })
