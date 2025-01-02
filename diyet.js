const diyetTarifleri = {
    firin: [
        { name: 'Fırında Bebek Brüksel', image: 'resim/brüksel.jpg', },
        { name: 'Fırında Karnabahar', image: 'resim/karnıbahar.jpg' },
        { name: 'Fırında Havuç', image: 'resim/havuç.jpg' },
        { name: 'Fırında Brokoli', image: 'resim/1brokoli.jpg' },
        { name: 'Yulaflı Kurabiye', image: 'resim/yulafli-diyet-kurabiye1.jpg' },
    ],
    ocak: [
        { name: 'Pancar Salatası', image: 'resim/pancarsalatası.jpg' },
        { name: 'Zeytinyağlı Kabak Yemeği', image: 'resim/firinda_kabak_yemegi1.jpg' },
        { name: 'Sebze Çorbası', image: 'resim/corba.jpg' },
    ]
};
// Tarifleri Göster
function showRecipes(category = 'all') {
    const container = document.getElementById('recipe-container');
    container.innerHTML = ''; // Var olan içerikleri temizle

    let recipesToShow = [];
    if (category === 'firin') {
        recipesToShow = diyetTarifleri.firin;
    } else if (category === 'ocak') {
        recipesToShow = diyetTarifleri.ocak;
    } else {
        recipesToShow = [...diyetTarifleri.firin, ...diyetTarifleri.ocak];
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
window.onload = function () {
    showRecipes(); // İlk başta tüm tarifleri göster
};

// Yemek isimlerini kalorilerle eşleştiren bir Map
const yemekKalorileri = new Map([
    ["yulaflı kurabiye", 35],
    ["fırında bebek brüksel", 172],
    ["pancar salatası", 172],
    ["fırında brokoli", 84.62],
    ["fırında karnabahar", 60],
    ["fırında havuç", 53],
    ["sebze çorbası", 115],
    ["zeytinyağlı kabak yemeği", 356]
]);

