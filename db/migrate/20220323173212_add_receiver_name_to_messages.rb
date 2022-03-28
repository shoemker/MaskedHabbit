class AddReceiverNameToMessages < ActiveRecord::Migration[5.2]
  def change
        add_column :messages, :receiver_name, :string
  end
end
