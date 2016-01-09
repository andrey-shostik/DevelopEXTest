require 'rails_helper'

RSpec.describe UserSerializer do
  let(:user) { create :user }

  subject { described_class.new(user).as_json }

  it { is_expected.to include :id }
  it { is_expected.to include :email }
  it { is_expected.to include :first_name }
  it { is_expected.to include :last_name }
  it { is_expected.to include :token }
  it { is_expected.to include :name }
end
