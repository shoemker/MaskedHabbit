class AddReadToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :read, :boolean
  end
end
