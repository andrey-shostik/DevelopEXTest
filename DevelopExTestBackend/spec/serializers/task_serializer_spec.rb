require 'rails_helper'

RSpec.describe TaskSerializer do
  let(:task) { create :task }

  subject { described_class.new(task).as_json }

  it { is_expected.to include :id }
  it { is_expected.to include :title }
  it { is_expected.to include :description }
  it { is_expected.to include :priority }
  it { is_expected.to include :done }
  it { is_expected.to include :end_date }
end
