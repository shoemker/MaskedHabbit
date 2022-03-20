@categories.each do |message|
	json.set! message.id do
		json.extract! message,  	:id,            
 											:subject,          
 											:body,          
 											:sender_id, 
 											:receiver_id,    
 											:read,

	end
end	