# == Schema Information
#
# Table name: categories
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#



class Category < ApplicationRecord
	validates :title, presence:true

	has_many :tasks,
	foreign_key: :category_id,
	class_name: :Task
end
