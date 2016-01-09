require 'rails_helper'

RSpec.describe Project, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_length_of :name }
  end

  describe 'associations' do
    it { is_expected.to have_many :tasks }
    it { is_expected.to belong_to :user }
  end
end
