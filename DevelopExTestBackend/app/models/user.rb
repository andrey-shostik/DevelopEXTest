class User < ActiveRecord::Base
  has_secure_password
  has_secure_token

  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true

  has_many :projects, dependent: :destroy

  def name
    "#{first_name} #{last_name}"
  end
end
