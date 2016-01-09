class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :project, index: true, foreign_key: true
      t.integer :priority, default: 1
      t.boolean :done, default: false
      t.string :title
      t.string :description
      t.date :end_date

      t.timestamps null: false
    end
  end
end
