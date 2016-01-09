require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of :email }
    it { is_expected.to validate_presence_of :first_name }
    it { is_expected.to validate_presence_of :last_name }
    it { is_expected.to validate_uniqueness_of :email }
  end

  describe 'associations' do
    it { is_expected.to have_many :projects }
  end

  describe 'bcrypt secure password' do
    it { is_expected.to have_secure_password }
  end

  describe '#name' do
    let(:user) { create(:user) }

    subject { user.name }

    it { is_expected.to eq "#{user.first_name} #{user.last_name}" }
  end
end
