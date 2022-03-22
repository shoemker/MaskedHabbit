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
		@message.sender_id = current_user.id

		if @message.save
			render json: @message
    else
      render json: @message.errors.full_messages, status: 422
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
				:read)
	end


end
