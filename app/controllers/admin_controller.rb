class AdminController < ApplicationController
  layout 'admin'
  def index
    @posts = Post.all
  end
end


