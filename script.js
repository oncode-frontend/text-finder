const $ = document
const searchBtnElem = $.querySelector('button')
const searchInputElem = $.querySelector('input')
const paragraphElem = $.querySelector('#paragraph')

const search = () => {
    let searchInputValue = searchInputElem.value
    // let searhRegex = `/${searchInputValue}/g`
    let searhRegex = new RegExp(`${searchInputValue}`, 'gi')

    paragraphElem.innerHTML = paragraphElem.textContent.replace(searhRegex, (item) => `<mark>${item}</mark>`)
}

searchBtnElem.addEventListener('click', search)