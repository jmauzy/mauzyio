class AddViewsToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :views, :integer, :default => 0, :null => false
  end
end
