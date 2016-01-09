class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :avatar
end
