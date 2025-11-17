let cards = document.getElementById('cards')

class cty {
    constructor(sekil, başliq, text, tarix) {
        this.img = sekil
        this.head = başliq
        this.text = text
        this.date = tarix
    }
}

let arr = [
    new cty('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQkLWdVLhhwo3KTtPlJ2v3QbNoeoFKyyr77LTjTiKzkIArmyrTzEmN57uHkgjYZFL8r5TWcQbou0dFYAllXGYtNVHWp&s=19',
        'Amerca New York',
        'Nyu-York ABŞ-ın ən böyük şəhərlərindən biridir və "Böyük Alma" (The Big Apple) ləqəbi ilə tanınır.Şəhər 5 bölgədən (borough) ibarətdir:.',
        '11.17.2025'),

    new cty('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSAsPy9iv_s-clRa9Pyu0IYb9tq3btrk3SW8OAIKTMeFQTYnJcm4AmHNlEyE3dr6L-2ghcwPGj0n4xD_rTlGQe13_g&s=19',
        'England London',
        'London Böyük Britaniyanın paytaxtıdır. Çay üzərində yerləşir, məşhur yerləri arasında Big Ben, London Eye və Tower Bridge var. Şəhər tarix, mədəniyyət.',
        '11.17.2025'),

    new cty('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwCwkVjsuZ05eTdt1FTJXldYl-ahvuSYAZ1I9nC5pTKvT_kISmI5gC1KofY3B9dyJfGGzk5XBxsfl4NlvzstG75ZY5G8OOLWm6wAMBLl7vc6HBH35LxhSTucFVS_Bu6g2DJtrpkug=w675-h390-n-k-no',
        'France Paris',
        'Paris Fransanın paytaxtıdır. Şəhər romantikliyi və mədəniyyəti ilə məşhurdur. Burada Eyfel Qülləsi, Luvr Muzeyi və Notre-Dame Katedrali kimi yerlər var.',
        '11.17.2025'),

    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS-3rF1cLa-Uixljsq-H22ZktP_m8hUC09HsvAPalmNH0m6umWGNpULTFaCjVxDh12MduOIihmr4nIuD841bEsi8kw&s=19',
        'Illinois Chicago',
        'Çikaqo ABŞ-ın İllinoys ştatında yerləşən böyük bir şəhərdir. O, göydələnləri, Michigan gölü sahili və zəngin musiqi (caz və blues) mədəniyyəti ilə tanınır. ',
        '11.17.2025'),

    new cty('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR2iSVC6DtmKtbiVDDy8xxjKmNHNFiwCBR9tMBbfPF00CvzIQhPHwMIJVF-B_MyfMgTi7iOH3CZCRAPL8DBJQxd72e7&s=19',
        'Turkey Istanbul',
        'İstanbul Türkiyənin ən böyük şəhəridir və həm Asiya, həm də Avropa qitəsində yerləşir. Şəhər tarixi yerləri, məsələn, Ayasofya, Sultanahmet Məscidi və Topkapı',
        '11.17.2025',),

    new cty('https://detail-cdn.s3.eu-central-1.amazonaws.com/media/catalog/product/0/1/01-barcelona-unesco-welthauptstadt-der-architektur-2026.jpg?store=de_en&image-type=image',
        'Ispanya Barcelona',
        'Barselona İspaniyanın şimal-şərqində, Kataloniya bölgəsində yerləşən məşhur şəhərdir. Şəhər Gaudi’nin memarlığı,.',
        '11.17.2025',),

    new cty('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSnN_8HUIXAET56YPyf8zNdYct8yRkCyUY4uJJd1BshgBr-nKNI7VKO4vaVfwzhQz9RtCKEiYBmfFdGNv8PPCg4QSE&s=19',
        'Germany Berlin',
        'Berlin Almaniyanın paytaxtıdır. Şəhər tarixdə Berlin Divarı ilə məşhurdur və bu gün mədəniyyət, incəsənət və texnologiya mərkəzi sayılır. Brandenburg Qapısı .',
        '11.17.2025',),

    new cty('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxxuA4vVV73zMzihTnFTBuhJySR3QeQ5t5Ymzy35JhZMD5Y-ZPsTL2rzPCWjLKlmEBr5e0b6ZRGHC_AM6b3oG4qhKBzlswbhZNf-PilBDjR3KcfUdzrgrjMnoNwzjRDxF6XiA0=w675-h390-n-k-no',
        'Japan Tokyo',
        'Tokio Yaponiya’nın paytaxtıdır və dünyanın ən böyük şəhərlərindən biridir. Şəhər müasir texnologiya, ticarət və mədəniyyət mərkəzidir. Burada Şibuya, Asakusa və',
        '11.17.2025',),

    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSutDROL9NxYTQ3u9PFsv0AjH1Q8YE2HNHLpfF-XBnGpZmNrm_xYKx4d4ztwS1YN55pKQFodqXApxJFZN13KcDoTWA&s=19',
        'UAE Dubai',
        'Dubai BƏƏ-nin ən məşhur şəhəridir. Burada Burj Khalifa və dəbdəbəli tikililər yerləşir.',
        '11.17.2025'
    ),

    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTHLzHWrmpTiTUs4WM2SgeWnq_f8NCzP3o7mU7za5IPUoXVuVfegw9rxrgCfeFHBJpK3aUYHfPKDTjAAaM6kX46k8g&s=19',
        'Italy Rome',
        'Roma tarixin və mədəniyyətin mərkəzidir. Kolizey və Vatikan burada yerləşir.',
        '11.17.2025'
    ),

    new cty(
        'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1mT8WTcIlO3CPdeu_63H0kqdIsWuE_crmp_vGhQ9qna7EPhsrpDO2lMTiH6IYEMtyUj-MMj4BNdQjK1GZelHFFVCFobPR6c_ouu_j_V61VVhwBxmHD_orHW8xRls_m4SPy9Id=w675-h390-n-k-no',
        'Russia Moscow',
        'Moskva Rusiyanın paytaxtıdır. Kreml və Qırmızı Meydan ilə məşhurdur.',
        '11.17.2025'
    ),

    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQai_XFcbrUC7lPo7wrADcsyrpwZ2aPORLZF0v6GTxfbhR_MXSWch-4mpJCSpvNMFDHR-FNGfYGEk7KTob4-IIDxw0&s=19',
        'China Beijing',
        'Pekin Çin Səddi və Yasak Şəhər kimi tarixi yerlərə ev sahibliyi edir.',
        '11.17.2025'
    ),

    new cty(
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
        'Australia Sydney',
        'Sidney Opera Evi və Harbour Bridge ilə tanınır.',
        '11.17.2025'
    ),

    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT_EgnhO8-F6SAzY9_aPXghmLr8j4hDqKZOLjtvU4tllzQkoiMDPdlhWI8krbmBH0vIX3VloR83fuLysdEoyz0HuK4&s=19',
        'Canada Toronto',
        'Toronto Kanadanın ən böyük şəhəridir. CN Tower burada yerləşir.',
        '11.17.2025'
    ),

    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT0j4d-kiSc1jjOP94O9BPaQhT4p90_E0-PicYL8AGjYo3kZGYBqyphumyBkvqIzMBie580YpJgImgbSBzUDUiilkM&s=19',
        'South Korea Seoul',
        'Seul Cənubi Koreyanın müasir texnologiya və mədəniyyət mərkəzidir.',
        '11.17.2025'
    ),

    
    new cty(
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTrPPDpCF7Qn7nAMSL7sp9wQpAAZJng2SSqiqu0lfjDO-XfR_Pw7HiYyTuSx5Mp1_i4MgtVV7Xo8ZAEVkoPQJG4VcU&s=19',
        'India New Delhi',
        'Yeni Delhi Hindistanın paytaxtı və mədəniyyət mərkəzidir.',
        '11.17.2025'
    ),

    

]

function allcarts(info) {
    cards.innerHTML += ''
    info.map(item => {
        cards.innerHTML += `
            <div data-aos="flip-up" class="card">
            <div  class="bg">
                <img src="${item.img}" alt="">
                <h3>${item.head}</h3>
                 <p>${item.text}</p>
                <p>${item.date}</p>
             </div>
             <div class="blob"></div>
        </div>
             `
    })
}

allcarts(arr);
/*
for (let i = 0; i < arr.length; i++) {
    cards.innerHTML += `
            <div  class="card">
            <div class="bg">
                <img src="${arr[i].img}" alt="">
                <h3>${arr[i].head}</h3>
                <p>${arr[i].text}</p>
                <p>${arr[i].date}</p>
            </div>
            <div class="blob"></div>
        </div>
            `

}
            */

