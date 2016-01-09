FactoryGirl.define do
  factory :task do
    association :project
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
  end
end
