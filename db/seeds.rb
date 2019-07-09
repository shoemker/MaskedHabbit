# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "jacob", 
						password: "123456", 
						email: "j12@gmail.com", 
						price_per_hour: 16, 
						is_tasker: true)

User.create(username: "frank", 
						password: "123456", 
						email: "j13@gmail.com", 
						price_per_hour: 16, 
						is_tasker: true)

User.create(username: "peter", 
						password: "123456", 
						email: "j14@gmail.com", 
						price_per_hour: 16, 
						is_tasker: true)

User.create(username: "ridley", 
						password: "123456", 
						email: "j15@gmail.com", 
						price_per_hour: 16, 
						is_tasker: true)

User.create(username: "becky", 
						password: "123456", 
						email: "j16@gmail.com", 
						price_per_hour: 16, 
						is_tasker: true)

User.create(username: "francine", 
						password: "123456", 
						email: "j17@gmail.com", 
						price_per_hour: 16, 
						is_tasker: false)

User.create(username: "abe", 
						password: "123456", 
						email: "j18@gmail.com", 
						price_per_hour: 16, 
						is_tasker: false)

User.create(username: "zach", 
						password: "123456", 
						email: "j19@gmail.com", 
						price_per_hour: 16, 
						is_tasker: false)

User.create(username: "craig", 
						password: "123456", 
						email: "j20@gmail.com", 
						price_per_hour: 16, 
						is_tasker: false)

User.create(username: "dan", 
						password: "123456", 
						email: "j21@gmail.com", 
						price_per_hour: 16, 
						is_tasker: false)

Category.create(title: "Mounting & Installation")
Category.create(title: "Moving & Packing")
Category.create(title: "Furniture Assembly")
Category.create(title: "Home Improvement")
Category.create(title: "General Handyman")
Category.create(title: "Heavy Lifting")

Task.create(brief: "Install sound system",
						description: "In my car",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 1
						)

Task.create(brief: "Put in garbage disposal",
						description: "In my car",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 1
						)

Task.create(brief: "Help me move",
						description: "lots of packing",
						location: "825 Battery",
						vehicle_needed: true,
						completed: false,
						task_maker_id: 9,
						category_id: 2
						)

Task.create(brief: "Pack some Boxes",
						description: "pack it up",
						location: "825 Battery",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 9,
						category_id: 2
						)

Task.create(brief: "Put together bunk beds",
						description: "at my house",
						location: "222 Minnesota St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 3
						)

Task.create(brief: "Build a table",
						description: "have a kit",
						location: "532 Fulton",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 6,
						category_id: 3
						)

Task.create(brief: "Renovate bathroom",
						description: "the whole thing",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 4
						)

Task.create(brief: "Knock down wall",
						description: "at my house",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 4
						)

Task.create(brief: "Fix door",
						description: "at my house",
						location: "698 Lombard St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 5
						)

Task.create(brief: "Change light bulbs",
						description: "at my house",
						location: "698 Lombard St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 5
						)

Task.create(brief: "Move boxes",
						description: "they weigh 50lbs",
						location: "698 Lombard St",
						vehicle_needed: true,
						completed: false,
						task_maker_id: 7,
						category_id: 6
						)

Task.create(brief: "Carry dog to vet",
						description: "It's a bouvier",
						location: "698 Lombard St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 6
						)
