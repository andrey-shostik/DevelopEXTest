require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  let(:task) { create :task, project: project }
  let(:project) { create :project, user: user }
  let(:user) { create :user }
  let(:params) { { token: user.token } }

  subject { response }

  describe '#index' do
    before { get :index, params.merge(project_id: project.id) }

    it { is_expected.to have_http_status :success }
  end

  describe '#show' do
    before { get :show, params.merge(project_id: project.id, id: task.id) }

    it { is_expected.to have_http_status :success }
  end

  describe '#create' do
    let(:task_attributes) { attributes_for :task }

    before do
      post :create, params.merge(task: task_attributes, project_id: project.id)
    end

    it { is_expected.to have_http_status :created }

    context 'invalid params' do
      let(:task_attributes) { attributes_for :task, title: '' }

      it { is_expected.to have_http_status :unprocessable_entity }
    end
  end

  describe '#update' do
    let(:task_attributes) { { title: 'new title' } }

    before do
      patch :update, params.merge(id: task.id, project_id: project.id,
                                  task: task_attributes)
    end

    it { is_expected.to have_http_status :accepted }

    context 'invalid params' do
      let(:task_attributes) { { title: '' } }

      it { is_expected.to have_http_status :unprocessable_entity }
    end
  end

  describe '#destroy' do
    before { delete :destroy, params.merge(project_id: project.id, id: task.id) }

    it { is_expected.to have_http_status :accepted }
  end
end
