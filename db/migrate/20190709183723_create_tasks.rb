class CreateTasks < ActiveRecord::Migration[5.2]
  def change
		create_table :tasks do |t|
			t.string :brief, null:false
			t.text :description, null:false
			t.string :location, null:false
			t.boolean :vehicle_needed
			t.boolean :completed
			t.integer :task_maker_id, null:false
			t.integer :category_id, null:false
			t.integer :task_doer_id
			t.decimal :latitude
			t.decimal :longitude
		end
		
		add_index :tasks, :task_maker_id	
		add_index :tasks, :category_id
		add_index :tasks, :task_doer_id
  end
end
