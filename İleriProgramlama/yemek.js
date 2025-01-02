const yemekTarifleri = {
    firin: [
        { name: 'Fırında Bebek Patates', image: 'resim/bebekp.jpg', link: 'tarif1.html' },
        { name: 'Elmalı Tarçınlı Muffin', image: 'resim/muffin.jpg', link: 'tarif2.html' },
        { name: 'Meyveli Ekmek', image: 'resim/ekmek.jpg' },
        { name: 'Lazanya', image: 'resim/lazanya.jpg' },
        { name: 'Karışık Pizza', image: 'resim/pizzaa.jpg' },
        { name: 'Fırında Bebek Brüksel', image: 'resim/brüksel.jpg',},
        { name: 'Fırında Karnabahar', image: 'resim/karnıbahar.jpg'},
        { name: 'Fırında Havuç', image: 'resim/havuç.jpg'},
        { name: 'Fırında Brokoli', image: 'resim/1brokoli.jpg'},
        { name: 'Yulaflı Kurabiye', image: 'resim/yulafli-diyet-kurabiye1.jpg'}
    ],
    ocak: [
        { name: 'Fettucini Alfredo', image: 'resim/fetu.jpg' },
        { name: 'Tiramisu Topları', image: 'resim/tiramisutop.jpg' },
        { name: 'Tavuklu Taco', image: 'resim/tacotavuklu.jpg' },
        { name: 'Pancar Salatası', image: 'resim/pancarsalatası.jpg'},
        { name: 'Zeytinyağlı Kabak Yemeği', image: 'resim/firinda_kabak_yemegi1.jpg'},
    ],
};
// Tarifleri Göster
function showRecipes(category = 'all') {
    const container = document.getElementById('recipe-container');
    container.innerHTML = ''; // Var olan içerikleri temizle

    let recipesToShow = [];
    if (category === 'firin') {
        recipesToShow = yemekTarifleri.firin;
    } else if (category === 'ocak') {
        recipesToShow = yemekTarifleri.ocak;
    } else {
        recipesToShow = [...yemekTarifleri.firin, ...yemekTarifleri.ocak];
    }

    recipesToShow.forEach(recipe => {
        const box = document.createElement('div');
        box.classList.add('box');

        const img = document.createElement('img');
        img.src = recipe.image;
        box.appendChild(img);

        const button = document.createElement('button');
        button.classList.add('button');
        const link = document.createElement('a');
        link.href = recipe.link || '#';
        link.textContent = recipe.name;
        button.appendChild(link);
        box.appendChild(button);

        container.appendChild(box);
    });
}

// Combobox Seçimini Dinleyin
document.getElementById('recipe-filter').addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    showRecipes(selectedCategory);
});

// Sayfa Yüklendiğinde Tüm Tarifleri Göster
window.onload = function() {
    showRecipes(); // İlk başta tüm tarifleri göster
};
