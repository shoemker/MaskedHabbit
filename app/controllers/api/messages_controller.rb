class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
		received = Message.where(receiver_id: current_user.id)
		sent = Message.where(sender_id: current_user.id) 

		@messages = sent + received
	end

	
	def show
		@message = Message.find(params[:id])
	end


	def create
		@message = Message.new(message_params)
		@message.read = false
		name = message_params[:receiver_name]

		user = User.find_by(username: name)

		if user
			@message.receiver_id = user.id
			if @message.save
				render json: @message
			elsif message_params[:subject] == ""
      	render json: ["Subject can't be blank"], status: 422
    	end
		else 
			render json: [name +" not found in system"], status: 423
		end
	end


	def update
		@message = Message.find(params[:id])
		if @message.update_attributes(message_params)
			render json: @message
		else
      render json: @message.errors.full_messages, status: 422
		end
	end


	def destroy
		@message = Message.find(params[:id])
		if @message.destroy
			render json: @message
    else
      render json: @message.errors.full_messages, status: 422
    end
	end


	def message_params
		params.require(:message).permit(:subject,:body,:sender_id,:receiver_id,
				:sender_name, :receiver_name,	:read)
	end


end
