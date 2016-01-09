class TasksController < ApplicationController
  before_action :require_user

  def index
    render json: project, serializer: ProjectWithTasksSerializer
  end

  def show
    render json: task
  end

  def create
    task = project.tasks.build(task_params)
    if task.save
      render json: task, status: :created
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def update
    if task.update(task_params)
      render json: task, status: :accepted
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: task.destroy, status: :accepted
  end

  private

  def project
    current_user.projects.includes(:tasks).find(params[:project_id])
  end

  def task
    project.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :done,
                                 :priority, :end_date)
  end
end
