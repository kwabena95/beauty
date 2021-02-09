const toggleMenu = document.querySelector('#toggle-menu');
const menuBar = document.querySelector('#bars');
const productContainer = document.querySelector('#product-item');
const brands = document.querySelector('#prod-category');
const brandArray = ['almay', 'alva', 'anna sui', 'benefit', 'annabelle', 'benefit', 'boosh', "burt's bees", 'butter london', "c'est moi", 'cargo cosmetics', 'china glaze', 'clinique', 'coastal classic creation', 'colourpop', 'covergirl', 'dalish', 'deciem', 'dior', 'dr.hauschka', 'e.l.f.', 'essie', 'fenty', 'glossier', 'green people', 'iman', "l'oreal", 'lotus cosmetics usa', "maia's mineral galaxy", 'marcelle', 'marienatie', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura', 'moov', 'nudus', 'nyx', 'orly', 'pacifica', 'penny lane organics', 'physicians formula', 'piggy paint', 'pure anada', 'rejuva minerals', 'revlon', "sally b's skin yummies", 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'w3llpeople', 'wet n wild', 'zorah', 'zorah biocosmetiques'];

menuBar.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
});
window.addEventListener('DOMContentLoaded', () => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                const image = data[i].image_link;
                const name = data[i].name;
                const price = data[i].price;
                let output = `
                        <figure class="prod-card">
                            <div class="image">
                                <img src="${image}" alt="">
                            </div>

                            <figcaption class="prod-content">
                                <h5 class="prod-name">${name}</h5>
                                <span class="price">&#36;${price}</span>
                            </figcaption>
                        </figure>

                    `
                productContainer.innerHTML += output;
            }
        });
    productContainer.textContent = '';

});



// get products
const products = () => {
    brandArray.forEach(brand => {
        let output = `
        <option value="${brand}" class="cat-name">${brand}</option>
      
        `
        brands.innerHTML += output;
    })
    brands.addEventListener('change', (e) => {

        const value = e.currentTarget.value;
        productContainer.textContent = '';
        fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${value}`)
            .then(res => res.json())
            .then(data => {

                for (let i = 0; i < data.length; i++) {
                    const image = data[i].image_link;
                    const name = data[i].name;
                    const price = data[i].price;


                    let output = `
                        <figure class="prod-card">
                            <div class="image">
                                <img src="${image}" alt="">
                            </div>

                            <figcaption class="prod-content">
                                <h5 class="prod-name">${name}</h5>
                                <span class="price">&#36;${price}</span>
                            </figcaption>
                        </figure>

                        `
                    productContainer.innerHTML += output;


                }
            });


    })



}
products();


