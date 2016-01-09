require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
  let(:user) { create :user }
  let(:project) { create(:project, user: user) }
  let(:params) { { token: user.token } }

  subject { response }

  describe '#index' do
    before { get :index, params }

    it { is_expected.to have_http_status :success }
  end

  describe '#show' do
    before { get :show, params.merge(id: project.id)}

    it { is_expected.to have_http_status :success }
  end

  describe '#create' do
    let(:project_attributes) { attributes_for :project }

    before { post :create, params.merge(project: project_attributes) }

    it { is_expected.to have_http_status :created }

    context 'invalid data' do
      let(:project_attributes) { attributes_for :project, name: '' }

      it { is_expected.to have_http_status :unprocessable_entity }
    end
  end

  describe '#update' do
    let!(:project) { create :project, user: user }
    let(:project_params) { { name: 'new name' } }

    before { patch :update, params.merge(id: project.id, project: project_params) }

    it { is_expected.to have_http_status :accepted }

    context 'invalid params' do
      let(:project_params) { { name: ''} }

      it { is_expected.to have_http_status :unprocessable_entity }
    end
  end

  describe '#destroy' do
    before { delete :destroy, params.merge(id: project.id) }

    it { is_expected.to have_http_status :accepted }
  end
end
