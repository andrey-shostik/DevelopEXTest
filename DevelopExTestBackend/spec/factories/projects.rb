FactoryGirl.define do
  factory :project do
    association :user
    name { Faker::Lorem.characters(10) }
    description { Faker::Lorem.sentence }
  end
end
