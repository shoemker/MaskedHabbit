class AddTimestampsToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :created_at, :datetime
    add_column :tasks, :updated_at, :datetime
  end
end
