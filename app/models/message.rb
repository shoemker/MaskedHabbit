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

end
