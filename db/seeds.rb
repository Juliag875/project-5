# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Customer.destroy_all
Cart.destroy_all
Item.destroy_all
Order.destroy_all
Review.destroy_all


puts "🌱Seeding Customers...✅"
20.times do
  Customer.create(
    name: Faker::Name.unique.name,
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.cell_phone
  )
end

puts "🌱Seeding Carts...✅"
10.times do
  Cart.create(
    customer_id: Customer.all.sample.id,
    purchased: rand(0..1)
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
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
  rating: rand(1..10),
  description: "This is a warm floral fragrance inspired by Roman street style and edgy haute couture. A trio of jasmine flowers and sparkling blackcurrant fuse with warm vanilla and rich woods to create a scent that captures the essence of modern femininity."
)

puts "🌱Seeding Orders...✅"
10.times do
  Order.create(
    item_id: Item.ids.sample,
    cart_id: Cart.ids.sample
  )
end

reviews =["As soon as I smelled it, I knew I had to get it! It smells fresh and citrusy.", "I love this scent! I was going between a few different Chanel Chance scents, and loves the grapefruit in this one. cant wait to buy again once the first bottle runs out.","My number 1 sent I’m on my 3 bottle now it’s so beautiful not over powering sent it’s a must try if you haven’t", "this beauty is so soft and feminine, sweet and pretty, this is a go to everyday non offensive scent. I'm in love with this fragrance!", "Smells absolutely divine. this is a must buy fragrance", "I love it!", "Must have", "Absolutely THE best fragrance ever. I don't go a day without it."]
puts "🌱Seeding Reviews...✅"
20.times do
  Review.create(
    item_id: Item.all.sample.id,
    customer_id: Customer.all.sample.id,
    content: reviews.sample,
  )
end

puts "✅ Done seeding!"



