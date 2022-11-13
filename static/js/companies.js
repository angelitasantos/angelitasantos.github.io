let modalkey = 0;
let screenW = 0;
const dqS = (element) => document.querySelector(element);
const dqSA = (element) => document.querySelectorAll(element);

window.addEventListener('resize', atualScreen);

function atualScreen() {
    screenW = dqS('body').offsetWidth;
}

companyJson.map(function (item, index) {
    let companyItem = dqS('.company-models .company-item').cloneNode(true);

    companyItem.setAttribute('data-key', index)
    companyItem.querySelector('.company-item--name').innerHTML = item.name;
    companyItem.querySelector('.company-item--desc').innerHTML = item.resume;
    companyItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();
        let key = event.target.closest('.company-item').getAttribute('data-key');
        modalkey = key;

        dqS('.company-modal-area .company-info h1').innerHTML = companyJson[key].name;
        dqS('.company-modal-area .company-info h4').innerHTML = companyJson[key].fullName;
        dqS('.company-modal-area .company-info--res').innerHTML = companyJson[key].resume;
        dqS('.company-modal-area .company-info--desc').innerHTML = companyJson[key].description;

        dqS('.company-modal-area').style.opacity = 0;
        dqS('.company-modal-area').style.display = 'flex';
        setTimeout(() => {
            dqS('.company-modal-area').style.opacity = 1;
        }, 200);
    })

    dqS('.company-area').append(companyItem);
});

dqSA('.company-info--button').forEach(
    function (item) {
        item.addEventListener('click', closeModal)
    }
);

function closeModal() {
    dqS('.company-modal-area').style.opacity = 0;;
    setTimeout(() => {
        dqS('.company-modal-area').style.display = 'none';
    }, 500);
}