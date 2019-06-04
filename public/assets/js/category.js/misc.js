const { fetch } = window

const getMisc = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#miscTiles').innerHTML = ``
      const miscItems = items.filter(data =>
        data.category.category === 'miscellaneous')
      miscItems.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let miscDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          miscDiv.innerHTML = `
            <div class="card">
              <div class="card-content">
                <p class="title">
                  ${itemName}
                </p>
                <p class="subtitle">
                  Number available: ${quantity}
                  Category: ${category.category}
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                  View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                  Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          `
          document.querySelector('#miscTiles').append(miscDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getMisc()