@categories.each do |category|
	json.set! category.id do
		json.extract! category,  	:id,            
 											:title,          
 											:description    

	end
end		