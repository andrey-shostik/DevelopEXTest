require 'rails_helper'

RSpec.describe ProjectSerializer do
  let(:project) { create :project }

  subject { described_class.new(project).as_json }

  it { is_expected.to include :id }
  it { is_expected.to include :name }
  it { is_expected.to include :description }
end
