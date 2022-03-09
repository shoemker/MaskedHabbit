# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


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


task = Task.create(brief: "Install sound system",
						description: "In my car",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 1,
						latitude: 37.775025,
						longitude: -122.4308763
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/car_sound_system.jpeg')
task.photo.attach(io: file, filename: 'car_sound_system.jpeg')


task = Task.create(brief: "Put in garbage disposal",
						description: "In kitchen",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 1,
						latitude: 37.775025,
						longitude: -122.4308763
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/garbage_disposal.jpeg')
task.photo.attach(io: file, filename: 'garbage_disposal.jpeg')


task = Task.create(brief: "Help me move",
						description: "lots of packing",
						location: "825 Battery",
						vehicle_needed: true,
						completed: false,
						task_maker_id: 9,
						category_id: 2,
						latitude: 37.7989666, 
						longitude: -122.4013518
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/moving.jpeg')
task.photo.attach(io: file, filename: 'moving.jpeg')


task = Task.create(brief: "Pack some Boxes",
						description: "pack it up",
						location: "825 Battery",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 9,
						category_id: 2,
						latitude: 37.7989666, 
						longitude: -122.4013518
						)						
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/pack_boxes.jpeg')
task.photo.attach(io: file, filename: 'pack_boxes.jpeg')



task = Task.create(brief: "Put together bunk beds",
						description: "at my house",
						location: "222 Minnesota St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 3,
						latitude: 37.7573664,
						longitude: -122.3901793
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/bunk_beds.jpeg')
task.photo.attach(io: file, filename: 'bunk_beds.jpeg')



task = Task.create(brief: "Build a table",
						description: "have a kit",
						location: "532 Fulton",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 6,
						category_id: 3,
						latitude: 37.778547,
						longitude: -122.4250061
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/build_table.jpeg')
task.photo.attach(io: file, filename: 'build_table.jpeg')



task = Task.create(brief: "Renovate bathroom",
						description: "the whole thing",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 4,
						latitude: 37.769735, 
						longitude: -122.422071
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/renovate_bathroom.jpeg')
task.photo.attach(io: file, filename: 'renovate_bathroom.jpeg')



task = Task.create(brief: "Knock down wall",
						description: "at my house",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 4,
						latitude: 37.769735, 
						longitude: -122.422071
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/knock_down_wall.jpeg')
task.photo.attach(io: file, filename: 'knock_down_wall.jpeg')



task = Task.create(brief: "Fix door",
						description: "at my house",
						location: "698 Lombard St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 5,
						latitude: 37.8028476,
						longitude: -122.4130493
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/fix_door.jpeg')
task.photo.attach(io: file, filename: 'fix_door.jpeg')



task = Task.create(brief: "Change light bulbs",
						description: "at my house",
						location: "698 Lombard St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 5,
						latitude: 37.8028476,
						longitude: -122.4130493
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/change_light_bulb.jpeg')
task.photo.attach(io: file, filename: 'change_light_bulb.jpeg')



task = Task.create(brief: "Move boxes",
						description: "they weigh 50lbs",
						location: "698 Lombard St",
						vehicle_needed: true,
						completed: false,
						task_maker_id: 7,
						category_id: 6,
						latitude: 37.8028476,
						longitude: -122.4130493
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/move_boxes.jpeg')
task.photo.attach(io: file, filename: 'move_boxes.jpeg')



task = task = Task.create(brief: "Carry dog to vet",
						description: "It's a bouvier",
						location: "698 Lombard St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 7,
						category_id: 6,
						latitude: 37.8028476,
						longitude: -122.4130493
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/bouvier.jpeg')
task.photo.attach(io: file, filename: 'bouvier.jpeg')



task = Task.create(brief: "Install wall television",
						description: "50 in tv",
						location: "532 Fulton",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 6,
						category_id: 1,
						latitude: 37.778547,
						longitude: -122.4250061
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/install_tv.jpeg')
task.photo.attach(io: file, filename: 'install_tv.jpeg')



task = Task.create(brief: "Unplug toilet.",
						description: "It's a doosey",
						location: "800 Fell",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 5,
						latitude: 37.775025,
						longitude: -122.4308763
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/plunge_toilet.jpeg')
task.photo.attach(io: file, filename: 'plunge_toilet.jpeg')



task = Task.create(brief: "Sweep chimney.",
						description: "With cockney accent",
						location: "532 Fulton",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 6,
						category_id: 5,
						latitude: 37.778547,
						longitude: -122.4250061
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/chimney_sweep.jpeg')
task.photo.attach(io: file, filename: 'chimney_sweep.jpeg')



task = Task.create(brief: "Carry stuff upstairs.",
						description: "hundreds of magazines",
						location: "532 Fulton",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 6,
						category_id: 6,
						latitude: 37.778547,
						longitude: -122.4250061
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/magazines.jpeg')
task.photo.attach(io: file, filename: 'magazines.jpeg')



task = Task.create(brief: "Pack Kitchen",
						description: "The whole thing",
						location: "825 Battery St",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 9,
						category_id: 2,
						latitude: 37.7989666, 
						longitude: -122.4013518
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/pack_kitchen.jpeg')
task.photo.attach(io: file, filename: 'pack_kitchen.jpeg')



task = Task.create(brief: "Redo Bathroom",
						description: "Huge budget",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 4,
						latitude: 37.769735, 
						longitude: -122.422071
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/redo_bathroom.jpeg')
task.photo.attach(io: file, filename: 'redo_bathroom.jpeg')



task = Task.create(brief: "Install Washer-Dryer",
						description: "Both",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 1,
						latitude: 37.775025,
						longitude: -122.4308763
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/washer_dryer.jpeg')
task.photo.attach(io: file, filename: 'washer_dryer.jpeg')



task = Task.create(brief: "Hang pictures",
						description: "Pictures of grandkids",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 5,
						latitude: 37.769735, 
						longitude: -122.422071
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/hang_pictures.jpeg')
task.photo.attach(io: file, filename: 'hang_pictures.jpeg')



task = Task.create(brief: "Put bed together",
						description: "queen-sized",
						location: "201 Valencia",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 8,
						category_id: 3,
						latitude: 37.769735, 
						longitude: -122.422071
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/assemble_bed.jpeg')
task.photo.attach(io: file, filename: 'assemble_bed.jpeg')



task = Task.create(brief: "Drive me to airport",
						description: "Wednesday, 8am, Sept.",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 2,
						latitude: 37.775025,
						longitude: -122.4308763
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/drive_airport.jpeg')
task.photo.attach(io: file, filename: 'drive_airport.jpeg')



task = Task.create(brief: "Fix garage door",
						description: "It breaks frequently",
						location: "800 Fell st",
						vehicle_needed: false,
						completed: false,
						task_maker_id: 10,
						category_id: 5,
						latitude: 37.775025,
						longitude: -122.4308763
						)
file = open('https://masked-habbit-background.s3-us-west-1.amazonaws.com/seeds/garage_door.jpeg')
task.photo.attach(io: file, filename: 'garage_door.jpeg')