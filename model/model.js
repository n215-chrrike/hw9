var homeContent = `<div class="page-title">HOME</div>
        <div class="heroimg">
            <img src="images/hero.jpg" alt="hero">
        </div>
        <div class="page-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus officia sapiente blanditiis. Consectetur mollitia aut, magnam velit at rerum delectus? Earum quo voluptatibus sed illum consequuntur ducimus in voluptas aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum deserunt delectus ducimus reiciendis temporibus ipsa, cupiditate dolorum praesentium inventore libero provident eaque vel distinctio aliquam, corrupti, harum nulla. Porro aperiam, magnam quis accusamus et quasi unde incidunt quidem quisquam laborum. Totam officia tempore accusantium illum praesentium atque et odio?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, pariatur a ipsa dignissimos ducimus asperiores eos perspiciatis exercitationem soluta. Cumque, quasi beatae ipsum eaque aliquam praesentium inventore sapiente tempore quod impedit illum consequatur asperiores ea esse modi ducimus sit? Tempore quam nihil voluptatibus fuga expedita laborum iusto quo est adipisci unde in itaque quibusdam distinctio, sunt ducimus aliquam voluptas ratione non labore animi asperiores minus eos! Pariatur illo ad quam eos veniam aut quos labore eveniet perspiciatis necessitatibus deleniti a praesentium possimus nihil debitis iure, dolorem dicta, nisi itaque ea autem accusantium, fuga provident quisquam! Vitae, illo? Illum cumque nihil tenetur cupiditate delectus, debitis minus molestiae quibusdam iste exercitationem expedita inventore. Quia obcaecati maxime placeat nemo a eum dignissimos repellat laudantium perspiciatis impedit facere, iure, rerum doloribus omnis magni, numquam praesentium odio! Unde adipisci animi illum minima, quibusdam dignissimos deserunt accusantium. Numquam et odio beatae libero nemo at non quas.</p>
        </div>`;
var aboutContent = `<div class="page-title">ABOUT</div>
        <div class="heroimg">
            <img src="images/hero.jpg" alt="hero">
        </div>
        <div class="about-content">
            <div class="page-img"><img src="images/about-img.jpg" alt="about"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil est deserunt laboriosam aspernatur impedit temporibus dicta quod reiciendis mollitia soluta. Nobis id nostrum nihil excepturi exercitationem eos porro aperiam libero neque asperiores veritatis a, ut, deserunt atque! Quaerat eligendi enim voluptatum harum, animi incidunt, tenetur blanditiis sequi, omnis velit nisi iste labore? Tempora a obcaecati exercitationem esse facilis quia aperiam repudiandae cumque. Accusamus modi expedita dicta voluptatibus, repellat quisquam cum, molestias cumque, nemo quas culpa!</p>
        </div>`;
var productsContent = `<div class="page-title">PRODUCTS</div>
        <div class="heroimg">
            <img src="images/hero.jpg" alt="hero">
        </div>
        <div class="about-content">
            <div class="page-img"><img src="images/product-one.jpg" alt="one"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil est deserunt laboriosam aspernatur impedit
                temporibus dicta quod reiciendis mollitia soluta. Nobis id nostrum nihil excepturi exercitationem eos porro
                aperiam libero neque asperiores veritatis a, ut, deserunt atque! Quaerat eligendi enim voluptatum harum, animi
                incidunt, tenetur blanditiis sequi, omnis velit nisi iste labore? Tempora a obcaecati exercitationem esse
                facilis quia aperiam repudiandae cumque. Accusamus modi expedita dicta voluptatibus, repellat quisquam cum,
                molestias cumque, nemo quas culpa!</p>
        </div>
        <div class="about-content">
            <div class="page-img"><img src="images/product-two.jpg" alt="two"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil est deserunt laboriosam aspernatur impedit
                temporibus dicta quod reiciendis mollitia soluta. Nobis id nostrum nihil excepturi exercitationem eos porro
                aperiam libero neque asperiores veritatis a, ut, deserunt atque! Quaerat eligendi enim voluptatum harum, animi
                incidunt, tenetur blanditiis sequi, omnis velit nisi iste labore? Tempora a obcaecati exercitationem esse
                facilis quia aperiam repudiandae cumque. Accusamus modi expedita dicta voluptatibus, repellat quisquam cum,
                molestias cumque, nemo quas culpa!</p>
        </div>
        `;
var contactContent = `<div class="page-title">CONTACT</div>
        <div class="heroimg">
            <img src="images/hero.jpg" alt="hero">
        </div>
        <p>Phone: 555-555-5555</p>
        <p>Email: realwebsite@site.com</p>
        <p>Address: 123 Real Street</p>`;

//function beng called from app.js and has the page name
export function modelPageName(pgName){
    console.log("pgName");

    $("#app").html(eval(pgName));
}