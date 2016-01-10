class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :done, :end_date, :project_id
end
