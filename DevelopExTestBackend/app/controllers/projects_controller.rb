class ProjectsController < ApplicationController
  def index
    render json: current_user.projects,
           serializer: ActiveModel::ArraySerializer,
           each_serializer: ProjectSerializer
  end

  def show
    render json: project
  end

  def create
    project = current_user.projects.build(project_params)
    if project.save
      render json: project, status: :created
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def update
    if project.update(project_params)
      render json: project, status: :accepted
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: project.destroy, status: :accepted
  end

  private

  def project
    current_user.projects.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :description, :avatar)
  end
end
