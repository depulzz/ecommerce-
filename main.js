// Ambil elemen hamburger dan menu links
const hamburger = document.querySelector('.navbar-toggler');
const navLinks = document.getElementById('nav-links');

// Event listener untuk klik pada hamburger
hamburger.addEventListener('click', () => {
    // Toggle kelas 'active' pada menu links saat hamburger diklik
    navLinks.classList.toggle('active');
});

// Mengambil semua tombol Add to Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Menambahkan event listener untuk setiap tombol
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});
// Mengambil elemen-elemen yang dibutuhkan
const buyButtons = document.querySelectorAll('.buy-now');
const cartItems = document.querySelector('.cart'); // Tempat menampung item keranjang
const cartIcon = document.querySelectorAll('.cart-item img'); // Menampilkan jumlah produk di keranjang
let cart = []; // Menyimpan produk yang ada di keranjang

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productName, productPrice, productImage) {
    const product = { name: productName, price: productPrice, image: productImage };
    cart.push(product); // Menambahkan produk ke dalam array keranjang
    updateCartDisplay();
    alert(`Produk ${productName} telah ditambahkan ke keranjang!`);
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
    cartItems.innerHTML = ''; // Reset tampilan keranjang
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name} - $${product.price}</p>
            <button class="remove-item" data-index="${index}">Hapus</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Mengupdate jumlah item di ikon keranjang
    cartIcon.textContent = cart.length;
    
    // Menambahkan fitur untuk menghapus item dari keranjang
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
    cart.splice(index, 1); // Menghapus produk berdasarkan index
    updateCartDisplay();
}

// Fungsi untuk membuka menu keranjang
cartIcon.forEach((items, index) => {
  items.addEventListener('click', () => {
      const cartModal = document.querySelector('#cart-modal');
      //cartModal.classList.toggle('open');
      alert('berhasil menambahkan', index)
  });
})

// Menambahkan event listener pada tombol "Beli" pada setiap produk
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent.replace('$', '');
        const productImage = productCard.querySelector('img').src;

        // Menambahkan produk ke keranjang
        addToCart(productName, parseFloat(productPrice), productImage);
    });
});

// Menambahkan event listener pada tombol "Tambah ke Keranjang" pada produk lain
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent.replace('$', '');
        const productImage = productCard.querySelector('img').src;

        // Menambahkan produk ke keranjang
        addToCart(productName, parseFloat(productPrice), productImage);
    });
});

// Menambahkan tombol untuk menghapus semua produk dalam keranjang
const clearCartButton = document.createElement('button');
clearCartButton.textContent = 'Hapus Semua Produk';
clearCartButton.classList.add('clear-cart');
document.body.appendChild(clearCartButton);

// Fungsi untuk menghapus semua item dalam keranjang
clearCartButton.addEventListener('click', () => {
    cart = []; // Mengosongkan array keranjang
    updateCartDisplay();
    alert('Semua produk telah dihapus dari keranjang!');
});

// Menambahkan fitur untuk menutup modal keranjang
// Fitur menu navigasi mobile (untuk offcanvas)
const navbarToggler = document.querySelector('.navbar-toggler');
const offcanvas = document.querySelector('#offcanvasNavbar');
navbarToggler.addEventListener('click', () => {
    offcanvas.classList.toggle('open');
});

// Fungsi untuk menutup menu offcanvas
const closeOffcanvasButton = document.querySelector('.btn-close');
closeOffcanvasButton.addEventListener('click', () => {
    offcanvas.classList.remove('open');
});

// Fitur untuk scroll ke atas ketika tombol "Back to Top" ditekan
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menyembunyikan tombol "Back to Top" saat scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
// Mendapatkan elemen navbar
const navbar = document.querySelector('.navbar');

// Mengatur kecepatan scroll
let scrollSpeed = 1; // Kecepatan scroll

function autoScroll() {
  // Menggeser konten navbar ke kiri
  navbar.scrollLeft += scrollSpeed;

  // Jika sudah mencapai akhir, reset scroll ke awal
  if (navbar.scrollLeft + navbar.offsetWidth >= navbar.scrollWidth) {
    navbar.scrollLeft = 0;
  }
}

// Memulai auto-scroll setiap 10ms
setInterval(autoScroll, 10);

// Optional: Membuat scroll berhenti saat pengguna mengarahkan kursor ke navbar
navbar.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

// Menjalankan auto-scroll kembali ketika pengguna meninggalkan navbar
navbar.addEventListener('mouseleave', () => {
  setInterval(autoScroll, 10);
});

const cardsProduct = document.querySelector('.product-card');
cardsProduct.style.display = 'none';
const parentCardsProduct = document.querySelector('.product-container')

const dataItems = {
 product: [
  {
   name: 'kutang',
   price: 100,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'kolor',
   price: 28,
   description: 'kutang terbaik merek supreme',
  },
  {
   name: 'sempak',
   price: 62,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'baju',
   price: 52,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'switer',
   price: 62,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'manset',
   price: 32,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'sempak supreme',
   price: 92,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'batik',
   price: 292,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'sepatu',
   price: 272,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'seragam',
   price: 20,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'kemeja',
   price: 42,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'baju koko',
   price: 54,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'kaos',
   price: 22,
   description: 'kutang terbaik merek supreme'
  },
  {
   name: 'kancut',
   price: 10,
   description: 'kutang terbaik merek supreme'
  },
 ]
};

dataItems.product.forEach((items, index) => {
 const cloneCardsProduct = cardsProduct.cloneNode(true)
 parentCardsProduct.appendChild(cloneCardsProduct)
 
 const titleProduct = cloneCardsProduct.querySelector('.title-product');
 const imageProduct = cloneCardsProduct.querySelector('.image-product');
 const priceProduct = cloneCardsProduct.querySelector('.price');
 
 cloneCardsProduct.style.display = 'block';
 imageProduct.src =`pro${index + 1}.jpg`;
 titleProduct.textContent = items.description;
 priceProduct.textContent = '$' + items.price;
})