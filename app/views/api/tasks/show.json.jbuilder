	
	
	
	
json.task do
		json.extract! @task, :id,            
 											:brief,          
 											:description,    
 											:location,       
 											:vehicle_needed, 
 											:completed,      
 											:task_maker_id, 
 											:category_id,    
 											:task_doer_id	json.photoUrl url_for(task.photo)

		json.photoUrl url_for(task.photo)

end