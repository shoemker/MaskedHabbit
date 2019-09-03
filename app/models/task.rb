# == Schema Information
#
# Table name: tasks
#
#  id             :bigint           not null, primary key
#  brief          :string           not null
#  description    :text             not null
#  location       :string           not null
#  vehicle_needed :boolean
#  completed      :boolean
#  task_maker_id  :integer          not null
#  category_id    :integer          not null
#  task_doer_id   :integer
#


class Task < ApplicationRecord
	validates :brief, :description, :location, :task_maker_id, :category_id, presence:true

	belongs_to :task_maker,
	foreign_key: :task_maker_id,
	class_name: :User

	has_one :task_doer,
	foreign_key: :task_doer_id,
	class_name: :User

	belongs_to :category,
	foreign_key: :category_id,
	class_name: :Category

	has_one_attached :photo

end
