# == Schema Information
#
# Table name: messages
#
#  id          :bigint           not null, primary key
#  subject     :string
#  body        :text
#  sender_id   :integer          not null
#  receiver_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Message < ApplicationRecord
  validates :subject, :sender_id, :sender_name, :receiver_name, presence:true

	belongs_to :receiver,
	foreign_key: :receiver_id,
	class_name: :User

	has_one :sender,
	foreign_key: :sender_id,
	class_name: :User

end
