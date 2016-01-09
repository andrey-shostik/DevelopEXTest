require 'rails_helper'

RSpec.describe ProfilesController, type: :controller do
  let(:user) { create :user }
  let(:params) { { token: user.token } }

  subject { response }

  describe '#show' do
    before { get :show, params }

    it { is_expected.to have_http_status :success }
  end

  describe '#update' do
    let(:profile_params) { { first_name: 'Denis' } }
    before { patch :update, params.merge(profile: profile_params) }

    it { is_expected.to have_http_status :accepted }

    context 'invalid params' do
      let(:profile_params) { { first_name: '' } }

      it { is_expected.to have_http_status :unprocessable_entity }
    end
  end

  describe '#destroy' do
    before { delete :destroy, params }

    it { is_expected.to have_http_status :accepted }
  end
end
