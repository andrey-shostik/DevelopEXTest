class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :done, :end_date
end
