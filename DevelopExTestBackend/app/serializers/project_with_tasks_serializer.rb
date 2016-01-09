class ProjectWithTasksSerializer < ProjectSerializer
  has_many :tasks
end
