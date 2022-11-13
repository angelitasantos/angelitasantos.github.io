let modalkey = 0;
let screenW = 0;
const dqS = (element) => document.querySelector(element);
const dqSA = (element) => document.querySelectorAll(element);

window.addEventListener('resize', atualScreen);

function atualScreen() {
    screenW = dqS('body').offsetWidth;
}

companyJson.map(function (item, index) {
    let companyItem = dqS('.models .company-item').cloneNode(true);

    companyItem.setAttribute('data-key', index)
    companyItem.querySelector('.company-item--name').innerHTML = item.name;
    companyItem.querySelector('.company-item--desc').innerHTML = item.description;
    companyItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();
        let key = event.target.closest('.company-item').getAttribute('data-key');
        modalkey = key;

        dqS('.companyWindowArea .companyInfo h1').innerHTML = companyJson[key].name;
        dqS('.companyWindowArea .companyInfo--desc').innerHTML = companyJson[key].description;

        dqS('.companyWindowArea').style.opacity = 0;
        dqS('.companyWindowArea').style.display = 'flex';
        setTimeout(() => {
            dqS('.companyWindowArea').style.opacity = 1;
        }, 200);
    })

    dqS('.company-area').append(companyItem);
});

dqSA('.companyInfo--cancelButton, .companyInfo--cancelMobileButton').forEach(
    function (item) {
        item.addEventListener('click', closeModal)
    }
);

function closeModal() {
    dqS('.companyWindowArea').style.opacity = 0;;
    setTimeout(() => {
        dqS('.companyWindowArea').style.display = 'none';
    }, 500);
}