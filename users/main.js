const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Users';
document.body.appendChild(h1);

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url).then(res => res.json())
    .then(users => {
    const usersContainer = document.createElement('div');
    usersContainer.classList.add('usersContainer');
    document.body.appendChild(usersContainer);

    users.forEach((user) => {
        const userId = user.id;
        const userName = user.name;

        const userBlock = document.createElement('div');
        userBlock.classList.add('userBlock');

        const userInfo = document.createElement('p');
        userInfo.classList.add('userInfo')
        userInfo.innerText = `${userId} - ${userName}`;

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'user-details';

        btn.addEventListener('click',function() {
            document.location.href = '../usersDetails/user-details.html?userId=' + JSON.stringify(user);
        })


        userBlock.append(userInfo, btn);
        usersContainer.appendChild(userBlock);

    })
})