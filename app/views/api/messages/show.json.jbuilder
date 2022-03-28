json.message do
		json.extract! @message, :id,            
 											:subject,          
 											:body,          
 											:sender_id, 
 											:receiver_id,
											:sender_name,
											:receiver_name,    
 											:read,
											:created_at
end