const myGreatButton = document.getElementById('btn');

myGreatButton.addEventListener('click', () => {
    alert('!YOU HAVE TO BUY SUBSCRIPTION TO USE MY GREAT WEBSITE!')
});


const nameInput = document.getElementById('name');
const paddwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener('click', onSubmitBtnClick);
const users = []
function onSubmitBtnClick() {
    users.push(
        {
            name: nameInput.value,
            password: paddwordInput.value
        }
    )
    console.log(users)
}