# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Customer.destroy_all
Item.destroy_all
Order.destroy_all
Review.destroy_all


puts "🌱Seeding Customers...✅"
Customer.create(
  name: "julia",
  email: "j@gmail.com",
  phone: Faker::PhoneNumber.cell_phone,
  username: "julia_g",
  password: "pass123"
)

20.times do
  c1 = Customer.create(
    name: Faker::Name.first_name,
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.cell_phone,
    username: Faker::FunnyName.name,
    password: "pass123"
  )
end

puts "🌱Seeding Items...✅"
i1 = Item.create(
  brand: "Dior",
  title: "Eau de Parfum Spray",
  image: "https://www.sephora.com/productimages/product/p474316-av-05-zoom.jpg?imwidth=612",
  price1: "79.00",
  price2: "120.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Floral bouquet of the spectacularly reinvented Miss Dior Eau de Parfum. The new perfume for women celebrates the velvety and sensual roses-heightened by a fresh lily-of-the-valley and spicy peony-enveloped by a powdery iris."
)

i2 = Item.create(
  brand: "Chanel",
  title: "CHANCE EAU FRAÎCHE Eau de Toilette",
  image: "https://www.sephora.com/productimages/sku/s1001098-main-zoom.jpg?imwidth=612",
  price1: "95.00",
  price2: "130.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "A fresh, sparkling floral expression of CHANCE—a surge of energy that sweeps you into a whirlwind of happiness and fantasy. A whirlwind of energy and vitality intertwines the zesty freshness of Citron with the softness of Jasmine and the vibrant presence of Teak Wood."
)

i3 = Item.create(
  brand: "Viktor&Rolf",
  title: "Flowerbomb",
  image: "https://www.sephora.com/productimages/product/p255506-av-04-zoom.jpg?imwidth=612",
  price1: "115.00",
  price2: "158.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "This floral perfume for women explodes with an intoxicating whirl of cattleya, jasmine, and rose. The warm scent of patchouli and vanilla grounds the fresh fragrance, adding a sensual twist on the scent reminiscent of a room filled with rose petals."
)

i4 = Item.create(
  brand: "Yves Saint Laurent",
  title: "Black Opium Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p394534-av-01-zoom.jpg?imwidth=612",
  price1: "100.00",
  price2: "126.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "This is a seductively intoxicating women’s fragrance with opening notes of adrenaline-rich coffee and sweet vanilla that recline into the softness of white flowers for a young, modern scent."
)

i5 = Item.create(
  brand: "Chanel",
  title: "CHANCE EAU TENDRE Eau de Toilette",
  image: "https://www.sephora.com/productimages/sku/s1237379-main-zoom.jpg?imwidth=612",
  price1: "93.00",
  price2: "128.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "The delicate and unexpected fruity-floral fragrance for women creates a soft whirlwind of happiness, fantasy, and radiance. A green and fruity Grapefruit-Quince accord intertwines with the softness of Jasmine and the smoothness of White Musks for an intoxicatingly light, floral trail."
)

i6 = Item.create(
  brand: "Prada",
  title: "CANDY Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p376127-av-02-zoom.jpg?imwidth=612",
  price1: "90.00",
  price2: "122.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Rethink reality with Prada CANDY Eau de Parfum, a joyful olfactory balance merging caramel accord with warm benzoin resin inside a cloud of white musk. A jolt to the system, this perfume triggers bugs of spontaneity in the software of life to open up exhilarating spaces of re-imagined reality."
)

i7 = Item.create(
  brand: "Chloé",
  title: "Chloé Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p256308-av-03-zoom.jpg?imwidth=612",
  price1: "115.00",
  price2: "158.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Chloé Eau de Parfum captures the creative, confident individuality of the Chloé woman. It is a fresh and feminine fragrance suited to a free spirit with an utterly innate sense of chic. The scent takes the classic rose and ingeniously translates it into a vibrant perfume. Chloé Eau de Parfum begins with a combination of floral powdery notes: hints of peony, lychee, and springtime freesia."
)

i8 = Item.create(
  brand: "Chanel",
  title: "CHANCE EAU VIVE",
  image: "https://www.sephora.com/productimages/sku/s1695998-main-zoom.jpg?imwidth=612",
  price1: "92.00",
  price2: "127.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Radiant with energy, the vibrant floral fragrance sweeps you into a lively whirlwind of happiness for a chance encounter. A floral-zesty fragrance stirred by the fresh, vivifying notes of Grapefruit and Blood Orange. A Jasmine heart delicately unveils femininity while the Cedar-Iris accords of its trail reveal the sheer elegance of CHANCE EAU VIVE."
)

i9 = Item.create(
  brand: "Valentino",
  title: "Donna Born In Roma Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p449116-av-05-zoom.jpg?imwidth=612",
  price1: "110.00",
  price2: "137.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "This is a warm floral fragrance inspired by Roman street style and edgy haute couture. A trio of jasmine flowers and sparkling blackcurrant fuse with warm vanilla and rich woods to create a scent that captures the essence of modern femininity."
)

i10 = Item.create(
  brand: "Lancôme",
  title: "Idôle Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p448111-av-01-zoom.jpg?imwidth=612",
  price1: "110.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Sophisticated yet unapologetically modern, this fresh and floral women's perfume bursts with notes of citrus, rose, jasmine, and white musk and is layered over a vanilla perfume base. Ethically and sustainably sourced ingredients are at the core of the Idôle fragrance."
)

i11 = Item.create(
  brand: "CHANEL",
  title: "CHANCE Eau de Toilette",
  image: "https://www.sephora.com/productimages/sku/s625178-main-zoom.jpg?imwidth=1500",
  price1: "90.00",
  price2: "120.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Filled with vitality and energy, the unexpected, unpredictable floral fragrance evolves from one moment to the next."
)

i12 = Item.create(
  brand: "BURBERRY",
  title: "Her Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p437631-av-05-zoom.jpg?imwidth=1500",
  price1: "100.00",
  price2: "130.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Burberry Her Eau de Parfum for women is an artful blend of berries elevated by spirited jasmine and violet and smoothed out with amber and musk. A multifaceted, magnetic fruity gourmand and the scent of freedom."
)

i13 = Item.create(
  brand: "Dior",
  title: "Sauvage Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p428500-av-01-zoom.jpg?imwidth=1500",
  price1: "100.00",
  price2: "130.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Sauvage exudes sensual and mysterious facets. Calabrian bergamot adds spicy notes for fullness and sensuality as nutmeg is wrapped in smoky accents of vanilla absolute. This men's cologne is inspired by the magic hour of twilight in the desert, a moment when nature awakes, setting the sky ablaze."
)

i14 = Item.create(
  brand: "CHANEL",
  title: "Chance Eau Tendre Eau de Parfum",
  image: "https://www.sephora.com/productimages/sku/s2170686-main-zoom.jpg?imwidth=1500",
  price1: "110.00",
  price2: "150.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "An enhanced interpretation of the unexpected floral-fruity fragrance, CHANCE EAU TENDRE Eau de Parfum sweeps you into an intensified whirlwind of tenderness. The signature CHANCE bottle is reinvented with a silver cap and golden accent."
)

i15 = Item.create(
  brand: "Carolina Herrera",
  title: "Good Girl Eau de Parfum",
  image: "https://www.sephora.com/productimages/product/p420533-av-01-zoom.jpg?imwidth=1500",
  price1: "100.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "spring",
  description: "Good girl, bad girl... GOOD GIRL is a sensual, evocative fragrance born of the beautiful contradictions and the ever-present duality of modern women and modern life. The sweet, alluring qualities of jasmine give GOOD GIRL its brightness and femininity. The darker side is created with richly fragrant cocoa and intoxicating tonka. Almond and coffee bring the scent its immediate vibrancy."
)

i16 = Item.create(
  brand: "Viktor&Rolf",
  title: "Flowerbomb Mini Perfume Trio Set",
  image: "https://www.sephora.com/productimages/sku/s2498509-main-zoom.jpg?imwidth=1500",
  price1: "50.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "Choose your Flowerbomb intensity from this set, which contains fragrance miniatures of Flowerbomb Classic, Flowerbomb Dew, and Flowerbomb Nectar. Nestled at the heart of couture flowers, each miniature pour is modeled after the original, full-size bottles."
)

i17 = Item.create(
  brand: "BURBERRY",
  title: "Mini Her Eau de Parfum Set",
  image: "https://www.sephora.com/productimages/sku/s2363646-main-zoom.jpg?imwidth=1500",
  price1: "35.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "This exclusive, mini Her Eau de Parfum set is a must-have for fragrance lovers everywhere. Ready to gift or collect, the perfumes are presented in a box finished with a ribbon embossed with the new house logo."
)

i18 = Item.create(
  brand: "Yves Saint Laurent",
  title: "Mini Black Opium & Libre Eau de Parfum Duo",
  image: "https://www.sephora.com/productimages/sku/s2561835-main-zoom.jpg?imwidth=1500",
  price1: "35.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "Discover your next fragrance with this Yves Saint Laurent perfume duo, featuring Libre Eau de Parfum and Black Opium Eau de Parfum."
)

i19 = Item.create(
  brand: "Marc Jacobs Fragrances",
  title: "Mini Perfect Eau de Parfum Set",
  image: "https://www.sephora.com/productimages/sku/s2544229-main-zoom.jpg?imwidth=1500",
  price1: "30.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "The playful, modern, and bright new fragrance Perfect Eau de Parfum for her is the perfect gift. This perfume opens with juicy notes of rhubarb and bright daffodil that reveal a comforting heart of almond milk and finish with a soft dry down of cedarwood and cashmeran."
)

i20 = Item.create(
  brand: "Yves Saint Laurent",
  title: "Mon Paris Perfume Gift Set",
  image: "https://www.sephora.com/productimages/sku/s2546083-main-zoom.jpg?imwidth=1500",
  price1: "80.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "This two-piece perfume gift set features the passionately romantic Mon Paris Eau de Parfum. This gift set contains a Mon Paris Eau de Parfum spray and a Mon Paris Eau de Parfum travel spray dressed in Yves Saint Laurent's iconic Love design."
)

i21 = Item.create(
  brand: "Marc Jacobs Fragrances",
  title: "Perfect Eau de Parfum Gift Set",
  image: "https://www.sephora.com/productimages/sku/s2549707-main-zoom.jpg?imwidth=1500",
  price1: "100.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "This perfume opens with juicy notes of rhubarb and bright daffodil that reveal a comforting heart of almond milk and finish with a soft dry-down of cedarwood and cashmeran. It is modern, bright, and feminine and an unconventional yet harmonious clash of fresh florals and calm, smoothing notes."
)
  

i22 = Item.create(
  brand: "Jo Malone London",
  title: "Sweet & Spirited Travel Cologne and Candle Set",
  image: "https://www.sephora.com/productimages/sku/s2326171-main-zoom.jpg?imwidth=1500",
  price1: "75.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "This duo contains the spirited Wood Sage & Sea Salt Cologne for her and sweet Nectarine Blossom & Honey Miniature Candle for her home."
)

i23 = Item.create(
  brand: "Prada",
  title: "Candy Perfume Gift Set",
  image: "https://www.sephora.com/productimages/sku/s2545572-main-zoom.jpg?imwidth=1500",
  price1: "80.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "Give the gift of Prada Candy this Mother's Day. The playful and feminine fragrance blends notes of addictive and sweet caramel, delicately fragrant iris, and elegant white musk. This beautiful women's perfume gift set is the perfect present for her."
)

i24 = Item.create(
  brand: "Lancôme",
  title: "La Vie Est Belle Perfume Gift Set",
  image: "https://www.sephora.com/productimages/sku/s2520625-main-zoom.jpg?imwidth=1500",
  price1: "80.00",
  price2: "140.00",
  size1: "1.7oz/50mL",
  size2: "3.4oz/100mL",
  rating: rand(1..20),
  item_category: "new",
  description: "This bottle is brought to life with the expression of Julia Roberts’s iconic smile, and it captures the essence of happiness in the shape of a smile formed at the base, showcasing the floral women's scent within."
)



puts "🌱Seeding Orders...✅"
10.times do
  Order.create(
    item_id: Item.ids.sample,
    customer_id: Customer.ids.sample,
    purchased: rand(0..1)
  )
end

reviews =["As soon as I smelled it, I knew I had to get it! It smells fresh and citrusy.", "I love this scent! I was going between a few different Chanel Chance scents, and loves the grapefruit in this one. cant wait to buy again once the first bottle runs out.","My number 1 sent I’m on my 3 bottle now it’s so beautiful not over powering sent it’s a must try if you haven’t", "this beauty is so soft and feminine, sweet and pretty, this is a go to everyday non offensive scent. I'm in love with this fragrance!", "Smells absolutely divine. this is a must buy fragrance", "I love it!", "Must have", "Absolutely THE best fragrance ever. I don't go a day without it."]
puts "🌱Seeding Reviews...✅"
20.times do
   Review.create(
    item_id: Item.ids.sample,
    customer_id: Customer.ids.sample,
    name: Faker::Name.first_name,
    title: Faker::Marketing.buzzwords,
    content: reviews.sample,
  )
end

puts "✅ Done seeding!"



