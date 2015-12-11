class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|

      t.timestamps null: false
      t.text :title
      t.text :body
      t.text :description

    end
  end
end
