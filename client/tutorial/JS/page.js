const ulTag = document.querySelector('ul');
let totalPages = 20;

function element(totalPages, page){
    let liTag = ''; 
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if(page > 1){ // if page value is greater than 1 then add new li which is previous button
        liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angel-left"></i> Prev.</span></li>`;
    }
    if(page > 2){ // if page value is greater than 2 then add new li tag with 1 value
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if(page > 3){ // if page value is greater than 3 then add new li tag with (...)
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }
    // how many pages or li show before the current li
    if(page == totalPages){ // if page value is equal to totalPages then substract by -2 to the beforePages value
        beforePages = beforePages - 2;
    }else if(page == totalPages - 1){ // else if page value is equal to totalPages by -1 then substract by -1 to the beforePages value
        beforePages = beforePages - 1;
    }
    // how many pages or li show after the current li
    if(page == 1){ // if page value is equal to 1 then add +2 to the afterPages value
        afterPages = afterPages + 2;
    }else if(page == totalPages + 1){ // else if page value is equal to 2 then add +1 to the afterPages value
        afterPages = afterPages + 1;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){ // if pageLength is equal to 0 then add +1 to the pageLength value
            pageLength = pageLength + 1;
        }
        if(page == pageLength){ // if page value is equal to paralength then assign the active string in the activeLi variable
            activeLi = "active";
        }else{ // else leave empty to the activeLi variable
            activeLi = '';
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }
    if(page < totalPages - 1){ // if page value is less than totalPages by -1 then show the last li or page which is 20
        if(page < totalPages - 2){ // if page value is less than totalPages by -2 then show (...) before the last page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if(page < totalPages){ // if page value is less than totalPage value then add new li which is previous button
        liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next <i class="fas fa-angel-right"></i></span></li>`;
    }
    ulTag.innerHTML = liTag;
}

element(totalPages, 4); // calling above function with passing values