class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, :use => [:slugged, :finders]
  validates_presence_of :title, :slug, :body
end
