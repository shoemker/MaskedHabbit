class AddNamesToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :maker_name, :string
    add_column :tasks, :doer_name, :string
  end
end
