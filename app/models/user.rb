# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  price_per_hour  :float            not null
#  is_tasker       :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#




class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, :email, :price_per_hour, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

	has_many :tasks_made,
	foreign_key: :task_maker_id,
	class_name: :Task

	has_many :tasks_to_do,
	foreign_key: :task_doer_id,
	class_name: :Task

  has_many :messages_sent,
  foreign_key: :sender_id,
  class_name: :Message

  has_many :messages_received,
  foreign_key: :receiver_id,
  class_name: :Message
	

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
