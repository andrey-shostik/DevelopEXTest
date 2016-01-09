require 'rails_helper'

RSpec.describe RegistrationsController, type: :controller do
  subject { response }

  describe '#create' do
    let(:params) { { user: attributes_for(:user) } }

    before { post :create, params }

    it { is_expected.to have_http_status :created }

    context 'description' do
      let(:params) { { user: attributes_for(:user, first_name: '') } }

      it { is_expected.to have_http_status :unprocessable_entity }
    end
  end
end
