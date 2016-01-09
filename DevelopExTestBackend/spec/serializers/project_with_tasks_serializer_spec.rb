require 'rails_helper'

RSpec.describe ProjectWithTasksSerializer do
  let!(:task) { create :task, project: project }
  let(:project) { create :project }

  describe 'external' do
    subject { described_class.new(project).as_json }

    it { is_expected.to include :id }
    it { is_expected.to include :name }
    it { is_expected.to include :description }
  end

  describe 'inner' do
    subject { described_class.new(project).as_json[:tasks] }

    it { is_expected.to be_an Array }

    context 'content data' do
      subject { described_class.new(project).as_json[:tasks].first }

      it { is_expected.to include :id }
      it { is_expected.to include :title }
      it { is_expected.to include :description }
      it { is_expected.to include :priority }
      it { is_expected.to include :done }
      it { is_expected.to include :end_date }
    end
  end
end
