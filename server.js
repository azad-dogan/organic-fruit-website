const express = require('express')
const fs = require('fs');
const createCard = require('./helpers/createCard.js')

// yazdığımız Html şablonları yazı verisi olarak okuyoruz ki sonrasında kullanıcıya gönderebilelim
 let overviewHTML = fs.readFileSync('./templates/overview.html', 'utf-8')
 let cardHTML = fs.readFileSync('./templates/card.html', 'utf-8')


 // data.json okuyoruzki bundaki verileri kullanarak overviewHTML kartlarımızı ekleyebilelim
const cardsData = JSON.parse( fs.readFileSync('./dev-data/data.json', 'utf-8'))

// express sunucu örneği al 
const app = express();

// ana sayfaya istek atılırsa hoşgeldiniz de
app.get('/', (req,res)=>{
    res.status(200).send(' sunucuya hoşgeldiniz')
})

//overview sayfasına istek atılırsa overviewHTML yi gönder
app.get('/overview', (req,res)=>{

    // console.log(cardsData)



  // bir dizi elemanın hepsinin üzerinde bir şey yapmak istiyorsak map fonksiyonu kullanırız map in içerisine verdiğimiz fonksiyon her bir eleman için bir kere çalışır

//   /map ile bütün ürünlerden teker teker kart oluştur sonrasında bu kart htmlerimi içeren diziyi join methodu ile tek bir string (yazı) haline getie


   // map => dizi dönme fonksiyonu dizinin içerisindeki elemanlarısırayla dönmemize yarar
    const readyCards = cardsData.map((item) => createCard(cardHTML, item)).join('')

    console.log(readyCards)

    overviewHTML = 
     overviewHTML.replace('{%PRODUCT_CARDS%}', readyCards)

    res.status(200).send( overviewHTML)
})


app.listen(4000, ()=>console.log('\n SUNUCU ÇALIŞMAYA BAŞLADI \n'))