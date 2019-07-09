@tasks.each do |task|
	json.set! task.id do
		json.extract! task,  	:id,            
 											:brief,          
 											:description,    
 											:location,       
 											:vehicle_needed, 
 											:completed,      
 											:task_maker_id, 
 											:category_id,    
 											:task_doer_id
	end
end		