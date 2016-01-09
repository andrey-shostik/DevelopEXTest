require 'rails_helper'

RSpec.describe AuthenticationsController, type: :controller do
  let(:user) { create :user }

  subject { response }

  describe '#create' do
    let(:params) { { user: user.slice(:email, :password) } }

    before { post :create, params }

    it { is_expected.to have_http_status :accepted }

    context 'invalid password' do
      let(:params) { { user: { email: user.email, password: 123 } } }

      it { is_expected.to have_http_status :unauthorized }
    end
  end
end
