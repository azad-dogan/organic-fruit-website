

// Örnek card.html dosyamızdaki yer tutucuları gerçek ürün bilgisiyle yer değiştirecek bir fonksiyona ihtiyacımız var , çünkü bunu her birisi için manuel kod yazarak yapmaya çalışırsak kod tekrarına düşeceğiz



// mantık şöyle olacak htmi parametresinde card.html'i product parametresinde ise ekrana basılacak ürün verilerini alacağız (örn elma)


// card.html'in içerisindeki yer tutucuları, ürünün içerisindeki verilerle değiştireceğiz (örn {%IMAGE%} => )

    // en sonunda tamamen hazır bir ürün HTML'ine sahip olmuş olacağız
const createCard = (html, product) => {


    //çıktımızı (html'in bitmiş halini) output adındaki bir değişkende tutacağız - let kullanıyoruz çünkü üstünde değişiklik yapacağız


    // html'ye ismi enjekte ediyoruz
    let output = html.replace(/{%PRODUCTNAME%}/g, product.productName)


    // html'e resmi enjekte ediyoruz

    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%QUANTİTY%}/g, product.quantity)
    output = output.replace(/{%PRİCE%}/g, product.price)
    output = output.replace(/{%ID%}/g, product.id)

    return output
}


module.exports = createCard 