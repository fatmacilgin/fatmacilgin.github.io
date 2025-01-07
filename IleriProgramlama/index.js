const mealsMap = {
    firin: [
        {
            name: 'Fırında Bebek Brüksel',
            image: 'resim/brüksel.jpg',
            ingredients: ['tavuk', 'domates', 'biber'],
            recipe: 'Tavuk, domates ve biberi doğrayıp birlikte soteleyin.'
        },
        {
            name: 'Fırında Karnabahar',
            image: 'resim/karnıbahar.jpg',
            ingredients: ['domates', 'peynir'],
            recipe: 'Domates ve peyniri karıştırıp üzerine zeytinyağı gezdirin.'
        },
        {
            name: 'Fırında Havuç',
            image: 'resim/havuç.jpg',
            ingredients: ['biber'],
            recipe: 'Biberleri soteleyip havuçları da ekleyin.'
        },
        {
            name: 'Fırında Brokoli',
            image: 'resim/1brokoli.jpg',
            ingredients: ['brokoli', 'zeytinyağı', 'baharatlar'],
            recipe: 'Brokolileri zeytinyağı ve baharatlarla harmanlayıp fırında kızartın.'
        },
        {
            name: 'Yulaflı Kurabiye',
            image: 'resim/yulafli-diyet-kurabiye1.jpg',
            ingredients: ['yulaf', 'muz', 'bal'],
            recipe: 'Yulaf, muz ve balı karıştırıp kurabiye şekli vererek fırında pişirin.'
        },
        {
            name: 'Fırında Bebek Patates',
            image: 'resim/bebekp.jpg',
            link: 'tarif1.html',
            ingredients: ['bebek patates', 'zeytinyağı', 'baharatlar'],
            recipe: 'Patatesleri baharat ve zeytinyağı ile harmanlayıp fırında pişirin.'
        },
        {
            name: 'Elmalı Tarçınlı Muffin',
            image: 'resim/muffin.jpg',
            link: 'tarif2.html',
            ingredients: ['elma', 'tarçın', 'un', 'şeker'],
            recipe: 'Elma, tarçın, un ve şekeri karıştırarak muffin kalıplarında pişirin.'
        },
        {
            name: 'Meyveli Ekmek',
            image: 'resim/ekmek.jpg',
            ingredients: ['kuru meyveler', 'un', 'şeker'],
            recipe: 'Kuru meyve ve hamur malzemelerini karıştırıp fırında pişirin.'
        },
        {
            name: 'Lazanya',
            image: 'resim/lazanya.jpg',
            ingredients: ['lazanya yaprakları', 'kıyma', 'domates sosu', 'peynir'],
            recipe: 'Lazanya yapraklarını, kıyma ve peynirle kat kat dizip fırında pişirin.'
        },
        {
            name: 'Karışık Pizza',
            image: 'resim/pizzaa.jpg',
            ingredients: ['pizza hamuru', 'peynir', 'sucuk', 'sebzeler'],
            recipe: 'Pizza hamurunu soslayıp malzemeleri ekleyerek fırında pişirin.'
        }
    ],
    ocak: [
        {
            name: 'Fettucini Alfredo',
            image: 'resim/fetu.jpg',
            ingredients: ['tavuk', 'makarna'],
            recipe: 'Tavuk ve makarnayı birlikte pişirin.'
        },
        {
            name: 'Tavuk Taco',
            image: 'resim/tacotavuklu.jpg',
            ingredients: ['tavuk', 'biber'],
            recipe: 'Tavuk ve biberi karıştırıp tacos yapın.'
        },
        {
            name: 'Pancar Salatası',
            image: 'resim/pancarsalatası.jpg',
            ingredients: ['pancar', 'zeytinyağı', 'limon suyu'],
            recipe: 'Pancarları haşlayıp zeytinyağı ve limon suyu ile karıştırın.'
        },
        {
            name: 'Zeytinyağlı Kabak Yemeği',
            image: 'resim/kabakyemek.jpg',
            ingredients: ['kabak', 'soğan', 'zeytinyağı'],
            recipe: 'Kabak ve soğanları doğrayıp zeytinyağında kavurun.'
        },
        {
            name: 'Sebze Çorbası',
            image: 'resim/corba.jpg',
            ingredients: ['sebzeler', 'su', 'tuz'],
            recipe: 'Sebzeleri doğrayıp su ile haşlayarak çorba yapın.'
        },
        {
            name: 'Tiramisu Topları',
            image: 'resim/tiramisutop.jpg',
            ingredients: ['kedi dili', 'kahve', 'kakao'],
            recipe: 'Kedi dili bisküvileri kahveyle ıslatıp top haline getirin ve kakao ile kaplayın.'
        }
    ]
};
// Haftalık yemek planı nesnesi
const weeklyMealPlan = {
    Pazartesi: { breakfast: "", lunch: "", dinner: "" },
    Salı: { breakfast: "", lunch: "", dinner: "" },
    Çarşamba: { breakfast: "", lunch: "", dinner: "" },
    Perşembe: { breakfast: "", lunch: "", dinner: "" },
    Cuma: { breakfast: "", lunch: "", dinner: "" },
    Cumartesi: { breakfast: "", lunch: "", dinner: "" },
    Pazar: { breakfast: "", lunch: "", dinner: "" },
};

// Kullanıcıdan alınan verileri kaydetme ve tabloyu güncelleme
function saveMealPlan() {
    // Formdan değerleri al
    const day = document.getElementById("day").value; // Gün seçimi
    const breakfast = document.getElementById("breakfast").value; // Kahvaltı
    const lunch = document.getElementById("lunch").value; // Öğle yemeği
    const dinner = document.getElementById("dinner").value; // Akşam yemeği

    // Kullanıcının en az bir öğün girdiğinden emin ol
    if (!day || (!breakfast && !lunch && !dinner)) {
        alert("Lütfen bir gün seçin ve en az bir öğün bilgisi girin!");
        return;
    }

    // Yemek planını güncelle
    weeklyMealPlan[day] = {
        breakfast: breakfast || weeklyMealPlan[day].breakfast,
        lunch: lunch || weeklyMealPlan[day].lunch,
        dinner: dinner || weeklyMealPlan[day].dinner,
    };

    // Tabloyu güncelle
    updateMealPlanTable();

    // Kullanıcıya başarı mesajı göster
    alert(`${day} günü yemek planı kaydedildi!`);

    // Form alanlarını temizle
    document.getElementById("breakfast").value = "";
    document.getElementById("lunch").value = "";
    document.getElementById("dinner").value = "";
}

// Tabloyu güncelleyen method
function updateMealPlanTable() {
    const tableBody = document.getElementById("meal-plan-body");

    // Eski tabloyu temizle
    tableBody.innerHTML = "";

    // weeklyMealPlan nesnesindeki verilerle tabloyu doldur
    for (const day in weeklyMealPlan) {
        const { breakfast, lunch, dinner } = weeklyMealPlan[day];

        const row = `
            <tr>
                <td>${day}</td>
                <td>${breakfast || "-"}</td>
                <td>${lunch || "-"}</td>
                <td>${dinner || "-"}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

const checkboxes = document.querySelectorAll('.ingredient');
const mealList = document.getElementById('recipe-container');

// Yemekleri kategoriye göre görüntüle
function displayMeals(category = 'all') {
    mealList.innerHTML = ''; // temizle

    let recipesToShow = [];
    if (category === 'firin') {
        recipesToShow = mealsMap.firin;
    } else if (category === 'ocak') {
        recipesToShow = mealsMap.ocak;
    } else {
        recipesToShow = [...mealsMap.firin, ...mealsMap.ocak];
    }

    recipesToShow.forEach(recipe => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Malzemeler: ${recipe.ingredients.join(', ')}</p>
            <p>Tarif: ${recipe.recipe}</p>
        `;
        mealList.appendChild(mealDiv);
    });
}

// Seçilen malzemelere göre yemekleri filtreleme
function filterMeals() {
    const selectedIngredients = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedIngredients.length === 0) {
        displayMeals();
        return;
    }

    mealList.innerHTML = ''; // Clear existing meals
    const allRecipes = [...mealsMap.firin, ...mealsMap.ocak];

    let foundRecipes = false;

    allRecipes.forEach(recipe => {
        if (selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))) {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal';
            mealDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>Malzemeler: ${recipe.ingredients.join(', ')}</p>
                <p>Tarif: ${recipe.recipe}</p>
            `;
            mealList.appendChild(mealDiv);
            foundRecipes = true;
        }
    });

    if (!foundRecipes) {
        mealList.innerHTML = `<p class="no-results">Seçilen malzemelere uygun tarif bulunamadı.</p>`;
    }
}
// Favori tariflerin saklanması
let favoriteRecipes = [];

function addToFavorites(recipeName) {
if (!favoriteRecipes.includes(recipeName)) {
    favoriteRecipes.push(recipeName);
    alert(`${recipeName} favorilere eklendi!`);
} else {
    alert(`${recipeName} zaten favorilerde.`);
}
displayFavorites();
}

function removeFromFavorites(recipeName) {
favoriteRecipes = favoriteRecipes.filter(recipe => recipe !== recipeName);
alert(`${recipeName} favorilerden kaldırıldı!`);
displayFavorites();
}
// favorileri gösterme
function displayFavorites() {
mealList.innerHTML = ''; 

if (favoriteRecipes.length === 0) {
    mealList.innerHTML = `<p class="no-results">Favori tarif bulunamadı.</p>`;
    return;
}
const allRecipes = [...mealsMap.firin, ...mealsMap.ocak];
favoriteRecipes.forEach(favRecipeName => {
    const recipe = allRecipes.find(r => r.name === favRecipeName);
    if (recipe) {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Malzemeler: ${recipe.ingredients.join(', ')}</p>
            <p>Tarif: ${recipe.recipe}</p>
            <button onclick="removeFromFavorites('${recipe.name}')">Favorilerden Kaldır</button>
        `;
        mealList.appendChild(mealDiv);
    }
});
}

function showRandomRecipe() {
const allRecipes = [...mealsMap.firin, ...mealsMap.ocak];
const randomRecipe = allRecipes[Math.floor(Math.random() * allRecipes.length)];

mealList.innerHTML = ''; 
const mealDiv = document.createElement('div');
mealDiv.className = 'meal';
mealDiv.innerHTML = `
    <img src="${randomRecipe.image}" alt="${randomRecipe.name}">
    <h3>${randomRecipe.name}</h3>
    <p>Malzemeler: ${randomRecipe.ingredients.join(', ')}</p>
    <p>Tarif: ${randomRecipe.recipe}</p> `;
mealList.appendChild(mealDiv);
}

const actionContainer = document.createElement('div');
actionContainer.className = 'extra-actions';
actionContainer.innerHTML = `
<button onclick="displayFavorites()">Favorilerim</button>
<button onclick="displayMeals();">Tüm Tarifler</button>
<button onclick="displayMeals('firin')">Fırın Yemekleri</button>
<button onclick="displayMeals('ocak')">Ocak Yemekleri</button>
<button onclick="showRandomRecipe()">Rastgele Tarif Göster</button>`;

document.body.insertBefore(actionContainer, document.querySelector('.container'));

// kalori hesaplama
const calorieData = {
    "tavuklu domatesli biberli yemek": 250,
    "domatesli peynirli salata": 150,
    "tavuk Taco": 200,
    "peynirli makarna": 300,
    "yulaflı kurabiye": 35,
    "fırında bebek brüksel": 172,
    "pancar salatası": 172,
    "fırında brokoli": 84.62,
    "fırında karnabahar": 60,
    "fırında havuç": 53,
    "sebze çorbası": 115,
    "zeytinyağlı kabak yemeği": 356,
    "Fettucini Alfredo": 287
};
function clearMealPlan() {
    // Tabloyu temizle
    document.getElementById("meal-plan-body").innerHTML = '';
}

const hesaplaButton = document.getElementById("hesapla");
if (hesaplaButton) {
    hesaplaButton.addEventListener("click", function () {
        const yemek = document.getElementById("yemek").value.toLowerCase();
        const kalori = calorieData[yemek];

        document.getElementById("calorie-output").innerHTML = kalori
            ? `Porsiyonu ${kalori} kalori.`
            : "Bu yemek listede bulunamadı.";
    });
}

const recipeFilter = document.getElementById('recipe-filter');
if (recipeFilter) {
    recipeFilter.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        displayMeals(selectedCategory);
    });
}

function clearFilters() {
    checkboxes.forEach(checkbox => checkbox.checked = false);
    displayMeals();
}
displayMeals();//ilk görüntülemede yemekleri görüntüle