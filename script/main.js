fetch('https://fakestoreapi.com/products?limit=10')
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById('productTableBody');
    data.forEach(product => {
      const desconto = Math.floor(Math.random() * 46) + 5;  // entre 5% e 50%
      const precoDesconto = (product.price * (1 - desconto / 100)).toFixed(2);

      // Adiciona a classe 'highlight' se o desconto for maior que 30%
      const highlightClass = desconto > 30 ? 'highlight' : '';

      const row = `
        <tr class="${highlightClass}">
          <td><img src="${product.image}" alt="${product.title}" width="50"></td>
          <td>${product.title}</td>
          <td>$${product.price.toFixed(2)}</td>
          <td>${product.category}</td>
          <td>${product.rating.rate} ⭐ (${product.rating.count} avaliações)</td>
          <td>${product.rating.count} un.</td>
          <td>${desconto}%</td>
          <td>$${precoDesconto}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch(error => {
    console.error('Erro ao buscar os produtos:', error);
  });