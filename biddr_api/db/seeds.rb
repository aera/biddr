PASSWORD = 'supersecret'

Bid.destroy_all
Auction.destroy_all
User.destroy_all

User.create first_name: 'Jon', last_name: 'Snow', email: 'js@winterfell.gov', password: PASSWORD

40.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name  
  
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}-#{last_name.downcase}@final-exam.com",
    password: PASSWORD
  )
end

users = User.all

120.times do
  title = Faker::Commerce.product_name
  details = "#{Faker::Commerce.material} #{Faker::Commerce.material} #{Faker::Commerce.material} #{Faker::Commerce.material}"
  ends_on = Date.today + 2.weeks
  reserve_price = Faker::Commerce.price
  
  Auction.create(    
    title: title,
    details: details,
    ends_on: ends_on,
    reserve_price: reserve_price,
    
    aasm_state: "published",
    
    user: users.sample
  )
end

auctions = Auction.all

500.times do
  bid_amount = Faker::Commerce.price 
  auc_refer = auctions.sample
  user_refer = users.sample 
  #aasm_state = "published"
  
  if bid_amount >= auc_refer.reserve_price {auc_refer.aasm_state = "reserve_met"}
  end
  
  loop do 
    user_refer = users.sample          
    break if user_refer.email != auc_refer.user.email
  end
  
  Bid.create(
    bid_amount: bid_amount,  
    auction: auc_refer,
    user: user_refer    
  )
end

bids = Bid.all

puts Cowsay.say("Created #{users.count} users", :cow)
puts Cowsay.say("Created #{auctions.count} auctions", :sheep)
puts Cowsay.say("Created #{bids.count} bids", :tux)