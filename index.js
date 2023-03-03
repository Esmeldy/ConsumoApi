const content =  document.querySelector('#content');
const select =  document.getElementById('selection');
const boton =  document.getElementById('btn');

boton.onclick = () => {
    GetGames(select.value)
};

// .catch(err => console.error(err))

//{storeID: '1', storeName: 'Steam', isActive: 1, images: {…}}
//{storeID: '4', storeName: 'Amazon', isActive: 0, images: {…}} No funciona
//{storeID: '8', storeName: 'Origin', isActive: 1, images: {…}} miniaturas bonitas
//{storeID: '11', storeName: 'Humble Store', isActive: 1, images: {…}}
//{storeID: '25', storeName: 'Epic Games Store', isActive: 1, images: {…}}
//{storeID: '27', storeName: 'Gamesplanet', isActive: 1, images: {…}}

function GetGames(idStore) { 
    content.innerHTML = "";
    fetch('https://www.cheapshark.com/api/1.0/deals?storeID='+idStore+'&upperPrice=15')
    .then(Response => Response.json())
    .then(data => {
       let urlImg;
       let title;
       let discount;
       let price;
       data.forEach(element => {
           urlImg = element.thumb;
           title = element.title;
           discount = element.savings;
           price = element.salePrice;
       
            // Creando el hijo div con clase box-model
            let div = document.createElement('div');
            div.classList.add('.box-model');
            content.appendChild(div);
            
            // creando la etiqueta img 
            let img = document.createElement('img');
            img.setAttribute('src', urlImg);
            div.appendChild(img);
        
            // creando otro div
            let div2 = document.createElement('div');
            div.appendChild(div2);
        
            // creando un hijo p de div2
            let pDiv = document.createElement('p');
            let txtPdiv = document.createTextNode(title);
            pDiv.appendChild(txtPdiv);
            div2.appendChild(pDiv);
        
            // Creando otro hijo div2
            let Div3 = document.createElement('div');
            div2.appendChild(Div3);
            
            // Creando dos hijos p de div
            let p1Div3 = document.createElement('p');
            let p2Div3 = document.createElement('p');
            let txt1Pdiv3 = document.createTextNode(price);
            let txt2Pdiv3 = document.createTextNode(parseInt(discount));
        
            p1Div3.appendChild(txt1Pdiv3);
            Div3.appendChild(p1Div3);
            
            p2Div3.appendChild(txt2Pdiv3);
            Div3.appendChild(p2Div3);
   
        });
    })
    .catch(function(error){
       console.log('error en la petición: '+error.message);
    })
 }



