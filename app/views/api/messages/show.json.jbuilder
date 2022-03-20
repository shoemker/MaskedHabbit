json.task do
		json.extract! @message, :id,            
 											:subject,          
 											:body,          
 											:sender_id, 
 											:receiver_id,    
 											:read,

end