class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :subject
			t.text :body
		  t.integer :sender_id, null:false
			t.integer :receiver_id, null:false
      t.timestamps

    end

    add_index :messages, :sender_id	
		add_index :messages, :receiver_id
  end
end
