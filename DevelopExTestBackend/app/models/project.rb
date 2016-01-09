class Project < ActiveRecord::Base
  has_many :tasks, dependent: :delete_all
  belongs_to :user

  validates :name, presence: true, length: { minimum: 3, maximum: 18 }
end
