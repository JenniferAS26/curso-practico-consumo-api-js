window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }

    location.hash
}

function homePage() {
    console.log('Home!!');
    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log('Categories!!');
}

function movieDetailsPage() {
    console.log('Movies!!');
}

function searchPage() {
    console.log('Busquedas!!');
}

function trendsPage() {
    console.log('Trends!!');
}